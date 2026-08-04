---
title: flow_matching
createTime: 2026/06/19 20:53:21
permalink: /genmodel/flqxl3jo/
---

在前面的模型，我们构造了流模型和扩散模型，其中都提到了神经网络向量场$u_t^\theta$。但我们都没有讲如何训练，以及优化$\theta$来让生成模型产生有意义的东西。

### Flow matching
在这节中，将只关注 flow models

$$
X_0 \sim p_{\text{init}}, \quad \mathrm{d}X_t = u_t^\theta(X_t)\mathrm{d}t
\tag{10}
$$

问题变成了，我们如何优化$\theta$来让$X_1$尽可能的接近真实数据分布$p_{data}$。


### 条件和边缘概率路径

流匹配的第一步是找到一个概率路径，直观感觉概率路径指明了噪声点到真实数据的一个插值路径。

我们定义的ODE 轨迹，满足$X_0 \sim p_{init},t = 0$以及$X_1 \sim p_{data},t = 1$。
但是当$0 < t < 1$时会发生什么？，这中间的空档实际上可以自由发挥了，这期间的路径，在数学上可以被称为概率路径。

下面介绍一些新的内容，对于数据点 $z \in \mathbb{R}^d$，我们用 $\delta_z$ 表示 狄拉克$\delta$（Dirac delta）“分布”。这是可以想象的最简单的分布：从 $\delta_z$ 中采样总是返回 $z$（即它是确定性的）。条件（插值）概率路径（Conditional (interpolating) probability path）是一组在 $\mathbb{R}^d$ 上的分布 $p_t(x|z)$，使得：

$$
p_0(\cdot|z) = p_{\text{init}}, \quad p_1(\cdot|z) = \delta_z \quad \text{for all } z \in \mathbb{R}^d.

$$

换句话说，一个概率路径，将初始化分布，转变成了一个单个数据点（高维空间里的一个“点”）。你可以把概率路径理解成空间中的一条轨迹。

每一个条件概率路径 $p_t(x|z)$ 一起加起来产生出一个 marginal probability path（边缘概率路径）$p_t(x)$，其定义为通过首先从数据分布中采样一个数据点 $z \sim p_{\text{data}}$，然后从 $p_t(\cdot|z)$ 中采样所获得的分布，在概率论中，“边缘化（Marginalization）”的意思就是“消去某个变量”：

$$
\begin{align*}
& z \sim p_{\text{data}}, \quad x \sim p_t(\cdot|z) \quad \Rightarrow \quad x \sim p_t & & \triangleright \text{从边缘路径采样}\\
& p_t(x) = \int p_t(x|z)p_{\text{data}}(z)\mathrm{d}z & &\triangleright \text{边缘路径的密度}
\end{align*}
$$
上面公式1 的视角：
这给出了一个两步采样的过程：
- 先从你的真实数据库里随机挑一张图 $z$（比如挑中了“狗”）。
- 再在时间 $t$，从针对“狗”的条件路径 $p_t(\cdot|z)$ 中采样一个中间点 $x$。这样得到的 $x$，就属于宏观的边缘概率路径 $p_t$。

公式 2 的视角：
$p_t(x)$（边缘概率路径的密度）：
- 这是在时间 $t$ 时，全空间总的概率分布。
- 积分的含义：它是把所有可能的真实数据 $z$（从猫到狗到汽车）所对应的条件路径 $p_t(x|z)$，按照它们在现实中出现的概率 $p_{\text{data}}(z)$ 进行加权平均（叠加）。

上面的积分是无法进行计算的
边缘概率路径 $p_t$ 在 $p_{\text{init}}$ 和 $p_{\text{data}}$ 之间进行插值：

$$
p_0 = p_{\text{init}} \quad \text{和} \quad p_1 = p_{\text{data}} \quad
\triangleright \text{噪声-数据插值}
$$

下面以高斯条件路径来举例：

一种特别流行的概率路径是高斯概率路径（Gaussian probability path）。设 $\alpha_t, \beta_t$ 为 **noise schedulers（噪声调度器）**：两个连续可微的单调函数，且满足 $\alpha_0 = \beta_1 = 0$ 以及 $\alpha_1 = \beta_0 = 1$。我们随后定义条件概率路径

$$
p_t(\cdot|z) = \mathcal{N}(\alpha_t z, \beta_t^2 I_d)
\tag{15} \triangleleft \text{高斯条件路径}
$$


由我们对 $\alpha_t$ 和 $\beta_t$ 施加的条件可知，上式满足：

$$
p_0(\cdot|z) = \mathcal{N}(\alpha_0 z, \beta_0^2 I_d) = \mathcal{N}(0, I_d), \quad \text{且} \quad p_1(\cdot|z) = \mathcal{N}(\alpha_1 z, \beta_1^2 I_d) = \delta_z,
$$

其中我们利用了这样一个事实：均值为 $z$、方差为零的正态分布就是 $\delta_z$。因此，这个 $p_t(x|z)$ 的选择在 $p_{\text{init}} = \mathcal{N}(0, I_d)$ 的情况下满足公式 (11)，是一个有效的条件插值路径。我们可以将从边缘路径 $p_t$ 采样的过程表示为：

$$
z \sim p_{\text{data}}, \ \epsilon \sim p_{\text{init}} = \mathcal{N}(0, I_d) \Rightarrow x = \alpha_t z + \beta_t \epsilon \sim p_t \triangleleft \text{从边缘高斯路径采样}
$$

直观上，上述过程在较低的 $t$ 时添加更多噪声，直到时间 $t=0$，此时只有噪声。


### 条件和边缘概率向量场

前面介绍了概率路径指明了$X_t \sim p_t$的分布，在 t 时刻，我们希望找到一个向量场来描述这个轨迹。

对于每个数据点 $z \in \mathbb{R}^d$，令 $u_t^{\text{target}}(\cdot|z)$ 表示一个 **conditional vector field（条件向量场）**。这可以是任何满足相应常微分方程（ODE）能产生条件概率路径 $p_t(\cdot|z)$ 的向量场，即满足以下条件：

$$
X_0 \sim p_{\text{init}}, \quad \frac{\mathrm{d}}{\mathrm{d}t}X_t = u_t^{\text{target}}(X_t|z) \quad \Rightarrow \quad X_t \sim p_t(\cdot|z) \quad (0 \leq t \leq 1).
$$

乍一看，条件向量场似乎没什么用，因为 ODE 的所有终点 $X_1$ 都会坍缩到 $X_1 = z$，即我们只是在重新生成已知的数据点 $z$。然而，条件向量场是构建真正能从 $p_{\text{data}}$ 生成样本的向量场的基础模块：

设 $u_t^{\text{target}}(x|z)$ 为一个条件向量场。那么，定义为如下形式的 **marginal vector field（边缘向量场）** $u_t^{\text{target}}(x)$：

$$
u_t^{\text{target}}(x) = \int u_t^{\text{target}}(x|z) \frac{p_t(x|z)p_{\text{data}}(z)}{p_t(x)} \mathrm{d}z,
$$

遵循边缘概率路径，即：

$$
X_0 \sim p_{\text{init}}, \quad \frac{\mathrm{d}}{\mathrm{d}t}X_t = u_t^{\text{target}}(X_t) \quad \Rightarrow \quad X_t \sim p_t \quad (0 \leq t \leq 1).
\tag{19}
$$

特别地，对于这个常微分方程（ODE），$X_1 \sim p_{\text{data}}$，因此我们可以说 "$u_t^{\text{target}}$ 将噪声 $p_{\text{init}}$ 转换为了数据 $p_{\text{data}}$"。

如果使用的是之前提到的高斯概率路径的话，他的条件高斯向量场，应该是如下的形式：
$$
u_t^{\text{target}}(x|z) = \left( \dot{\alpha}_t - \frac{\dot{\beta}_t}{\beta_t} \alpha_t \right) z + \frac{\dot{\beta}_t}{\beta_t} x
$$

::: info 证明
下面是证明，让我们首先通过定义
$$
\psi_t^{\text{target}}(x|z) = \alpha_t z + \beta_t x.
$$
来构建一个条件流模型 $\psi_t^{\text{target}}(x|z)$。

如果 $X_t$ 是 $\psi_t^{\text{target}}(\cdot|z)$ 的常微分方程（ODE）轨迹，且初始状态 $X_0 \sim p_{\text{init}} = \mathcal{N}(0, I_d)$，那么根据定义有：
$$
X_t = \psi_t^{\text{target}}(X_0|z) = \alpha_t z + \beta_t X_0 \sim \mathcal{N}(\alpha_t z, \beta^2 I_d) = p_t(\cdot|z).
$$

我们由此得出轨迹的分布符合该条件概率路径（即满足了上面的公式）。接下来需要从 $\psi_t^{\text{target}}(x|z)$ 中提取出向量场 $u_t^{\text{target}}(x|z)$。根据流的定义（见 flow models），成立：
$$
\begin{aligned}
&\frac{\mathrm{d}}{\mathrm{d}t}\psi_t^{\text{target}}(x|z) = u_t^{\text{target}}(\psi_t^{\text{target}}(x|z)|z) \quad \text{对所有 } x,z \in \mathbb{R}^d \\
&\Leftrightarrow \quad \dot{\alpha}_t z + \dot{\beta}_t x = u_t^{\text{target}}(\alpha_t z + \beta_t x|z) \quad \text{对所有 } x,z \in \mathbb{R}^d \\
&\stackrel{(ii)}{\Leftrightarrow} \quad \dot{\alpha}_t z + \dot{\beta}_t \left( \frac{x - \alpha_t z}{\beta_t} \right) = u_t^{\text{target}}(x|z) \quad \text{对所有 } x,z \in \mathbb{R}^d \\
&\stackrel{(iii)}{\Leftrightarrow} \quad \left( \dot{\alpha}_t - \frac{\dot{\beta}_t}{\beta_t}\alpha_t \right) z + \frac{\dot{\beta}_t}{\beta_t} x = u_t^{\text{target}}(x|z) \quad \text{对所有 } x,z \in \mathbb{R}^d
\end{aligned}
$$

其中在 $(i)$ 中我们使用了 $\psi_t^{\text{target}}(x|z)$ 的定义，在 $(ii)$ 中进行了将X进行归一化 $x \to (x - \alpha_t z)/\beta_t$，在 $(iii)$ 中只是进行了一些代数运算。注意，最后一个等式正是我们在公式中定义的条件高斯向量场。
:::

其中在边缘概率场中的积分公式，值得注意的是

$$
\frac{p_t(x|z)p_{\text{data}}(z)}{p_t(x)} = \text{"给定含噪数据 } x \text{ 时，数据点 } z \text{ 的后验分布"}
$$

其中 $p_{\text{data}}(z)$ 是先验分布。边缘向量场则只是一个平均值：对于每个**可能**的数据点 $z$，它取速度 $u_t(x|z)$ —— 即能将我们带到 $z$ 的方向 —— 然后根据我们认为 $x$ 来自 $z$ 的程度来对该速度进行加权。通过对所有数据点取平均，我们得到了边缘向量场。

为了更严谨的说明这个公式
我们将使用 **continuity equation（连续性方程）**，这是数学和物理学中的一个基本方程。定义 **divergence（散度）** 算子 $\text{div}$ 为：
$$
\text{div}(v_t)(x) = \sum_{i=1}^{d} \frac{\partial}{\partial x_i} v_t^i(x)
$$

其中 $v_t^i$ 是 $v_t$ 的第 $i$ 个坐标分量。


::: info 连续性方程
让我们考虑一个带有向量场 $u_t^{\text{target}}$ 的流模型，其中初始状态 $X_0 \sim p_{\text{init}} = p_0$。那么对于所有 $0 \leq t \leq 1$，$X_t \sim p_t$ 成立的充要条件是：

$$
\partial_t p_t(x) = -\text{div}(p_t u_t^{\text{target}})(x) \quad \text{对所有 } x \in \mathbb{R}^d, 0 \leq t \leq 1,
$$

其中 $\partial_t p_t(x) = \frac{\mathrm{d}}{\mathrm{d}t} p_t(x)$ 表示 $p_t(x)$ 对时间的导数。该公式被称为 **连续性方程（continuity equation）**。
:::

数学证明过于复杂，我们可以直观的来理解，概率密度不会减少也不会增多，只是从一个点转移到另一个点。某点概率密度的变化 = 流进来的概率 - 流出去的概率

左边的式子代表固定点 
$x$ 在 $x$ 处概率密度随时间的变化率

右边的式子代表概率流的散度，负的“概率流发散” → 即净流入率

现在我们证明边缘向量场的积分公式，满足连续性方程
我们必须证明如 **公式 (18)** 中定义的边缘向量场 $u_t^{\text{target}}$ 满足连续性方程。我们可以通过直接计算来完成这一点：

$$
\begin{aligned}
\partial_t p_t(x) &\stackrel{(i)}{=} \partial_t \int p_t(x|z)p_{\text{data}}(z)\mathrm{d}z = \int \partial_t p_t(x|z)p_{\text{data}}(z)\mathrm{d}z \\
&\stackrel{(ii)}{=} \int -\text{div}(p_t(\cdot|z)u_t^{\text{target}}(\cdot|z))(x)p_{\text{data}}(z)\mathrm{d}z \\
&\stackrel{(iii)}{=} -\text{div}\left( \int p_t(x|z)u_t^{\text{target}}(x|z)p_{\text{data}}(z)\mathrm{d}z \right) \\
&\stackrel{(iv)}{=} -\text{div}\left( p_t(x) \int u_t^{\text{target}}(x|z) \frac{p_t(x|z)p_{\text{data}}(z)}{p_t(x)} \mathrm{d}z \right)(x) \\
&\stackrel{(v)}{=} -\text{div}\left( p_t u_t^{\text{target}} \right)(x),
\end{aligned}
$$

至于（ii）这步已经使用了连续性方程,这是证明的前提，条件概率路径满足连续性方程。

### 从边缘概率向量场中学习

我们把时间t 定义为 0-1 的均匀分布$\text{Unif}_{[0,1]}$，利用均分误差来定义 flow matching loss

$$
\begin{aligned}
\mathcal{L}_{\text{FM}}(\theta) &= \mathbb{E}_{t \sim \text{Unif}, x \sim p_t}[\|u_t^\theta(x) - u_t^{\text{target}}(x)\|^2] \tag{24} \\
&\stackrel{(i)}{=} \mathbb{E}_{t \sim \text{Unif}, z \sim p_{\text{data}}, x \sim p_t(\cdot|z)}[\|u_t^\theta(x) - u_t^{\text{target}}(x)\|^2]
\end{aligned}
$$

其中 $p_t(x) = \int p_t(x|z)p_{\text{data}}(z)\mathrm{d}z$ 是边缘概率路径。直观地说，这个损失意味着：首先，抽取一个随机时间 $t \in [0,1]$。其次，从我们的数据集中抽取一个随机点 $z$，从 $p_t(\cdot|z)$ 中采样（例如，通过添加一些噪声），并计算 $u_t^\theta(x)$。最后，计算我们的神经网络输出与边缘向量场 $u_t^{\text{target}}(x)$ 之间的均方误差。不幸的是，我们在这里还没有完成。虽然我们确实通过之前的公式知道了 $u_t^{\text{target}}$ 的公式，但我们无法高效地计算它，因为该积分是难以处理的。相反，我们将利用conditional（条件）速度场 $u_t^{\text{target}}(x|z)$ 是易于处理的事实。为此，让我们定义 conditional flow matching loss（条件流匹配损失）：

$$
\mathcal{L}_{\text{CFM}}(\theta) = \mathbb{E}_{t \sim \text{Unif}, z \sim p_{\text{data}}, x \sim p_t(\cdot|z)}[\|u_t^\theta(x) - u_t^{\text{target}}(x|z)\|^2] 
$$



::: info 定理

边缘流匹配损失等于条件流匹配损失加上一个常数。即，

$$
\mathcal{L}_{\text{FM}}(\theta) = \mathcal{L}_{\text{CFM}}(\theta) + C,
$$

其中 $C$ 是与 $\theta$ 无关的常数。因此，它们的梯度是一致的：

$$
\nabla_\theta \mathcal{L}_{\text{FM}}(\theta) = \nabla_\theta \mathcal{L}_{\text{CFM}}(\theta).
$$

因此，使用例如随机梯度下降（SGD）来最小化 $\mathcal{L}_{\text{CFM}}(\theta)$ 等价于以同样的方式最小化 $\mathcal{L}_{\text{FM}}(\theta)$。特别是，对于 $\mathcal{L}_{\text{CFM}}(\theta)$ 的最小值点 $\theta^*$，将成立 $u_t^{\theta^*} = u_t^{\text{target}}$，即**神经网络将等于边缘向量场**（假设参数化具有无限表达能力）。
:::

对于定理的证明，如下：