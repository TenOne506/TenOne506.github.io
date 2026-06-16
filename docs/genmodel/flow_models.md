---
title: flow_models
createTime: 2026/06/16 09:32:44
permalink: /genmodel/b4xgel0l/
---

### Flow Models

我们从定义流开始。想象一下一个点$X$在二维平面上运动，它走过的路径被称为轨迹（trajectory。
我们首先定义这种形式：

$$X : [0,1] \to \mathbb{R}^d, \quad t \mapsto X_t,$$

从时间 t 映射到 $\mathbb{R}^d$。同时每一个轨迹，都被一个向量场定义，在二维平面运动中，向量场可以理解成每时刻的速度，广义来说是微分几何中描述光滑流形上每一点对应切向量的数学对象。下面给出向量场的定义。

$$u : \mathbb{R}^d \times [0,1] \to \mathbb{R}^d, \quad (x,t) \mapsto u_t(x),$$

对于每个时间 t 和位置 x，我们都可以得到一个向量 $u_t(x) \in \mathbb{R}^d$作为空间中的速度。

上面的定义表面，如果我们想得到一个轨迹 X。我们需要从一个起点$x_0$开始，沿着向量场（速度场）的速度大小方向运动的轨迹。我们利用常微分方程来形式化定义这样的轨迹：

$$
\begin{align*}
    \frac{\mathrm{d}}{\mathrm{d}t} X_t &= u_t(X_t) & &\blacktriangleright \text{ 常微分方程} & (1\text{a}) \\
    X_0 &= x_0 & &\blacktriangleright \text{ 初始条件} & (1\text{b})
\end{align*}
$$

第一个式子说明了，$X_t$的倒数就是$u_t$给出的方向。第二个式子说明了，当时间 t=0时，我们从$x_0$这个位置开始。那么当任意时间 t 的时候，$X_t$又在哪里？我们会用流来回答这个问题，通常是微分方程的解：


$$
\begin{align*}
    \psi : \mathbb{R}^d \times [0, 1] &\to \mathbb{R}^d, \quad (x_0, t) \mapsto \psi_t(x_0) & (2\text{a}) \\
    \frac{\mathrm{d}}{\mathrm{d}t}\psi_t(x_0) &= u_t(\psi_t(x_0)) & \blacktriangleright \text{ 流 ODE} \quad (2\text{b}) \\
    \psi_0(x_0) &= x_0 & \blacktriangleright \text{ 流初始条件} \quad (2\text{c})
\end{align*}
$$

这些都描述了一件事情，向量场决定了一个常微分方程，而方程的解，就是流。

那么这个解一定存在并且唯一吗，答案是 yes

::: info 唯一性定理
如果 $u : \mathbb{R}^d \times [0, 1] \to \mathbb{R}^d$ 是连续可微且具有有界导数的，那么 (2) 中的常微分方程（ODE）存在由流 $\psi_t$ 给出的唯一解。在这种情况下，对于所有 $t$，$\psi_t$ 是一个 **微分同胚（diffeomorphism）**，即 $\psi_t$ 是连续可微的，且其逆 $\psi_t^{-1}$ 也是连续可微的。
:::

其中对于流的解，除非向量场很简单，否则很难计算出解析解，只能通过数值方法来模拟常微分方程，常用的方法是欧拉法。

在欧拉法中，我们初始化 $X_0 = x_0$ 并通过以下公式进行更新：

$$
X_{t+h} = X_t + h u_t(X_t) \quad (t = 0, h, 2h, 3h, \ldots, 1 - h) \tag{4}
$$

其中 $h = n^{-1} > 0$ 是 步长 (step size)，$n \in \mathbb{N}$ 是模拟的步数。对于这一类问题，欧拉法通常已经足够好。为了让你体验一下更复杂的方法，让我们来看看通过以下更新规则定义的 休恩法 (Heun's method)：

$$
\begin{align*}
    X'_{t+h} &= X_t + h u_t(X_t) & &\blacktriangleright \text{新状态的初始猜测（与欧拉步相同）} \\
    X_{t+h} &= X_t + \frac{h}{2}(u_t(X_t) + u_{t+h}(X'_{t+h})) & &\blacktriangleright \text{利用当前状态和猜测状态的平均 } u \text{ 进行更新}
\end{align*}
$$

直观地说，休恩法的逻辑如下：它首先对下一步的状态 $X'_{t+h}$ 做出初步猜测，然后通过这个更新后的猜测来修正最初采取的方向。


现在可以通过**常微分方程（ODE）**来构造生成模型，将**向量场** $u_t^\theta$ 设为神经网络。目前只需说明 $u_t^\theta$ 是一个带参数 $\theta$ 的参数化函数 $u_t^\theta : \mathbb{R}^d \times [0,1] \to \mathbb{R}^d$，具体网络架构后文再讨论。

回顾目标：从数据分布 $p_{\text{data}}$ 中生成**随机**样本 $z \sim p_{\text{data}}$。注意 ODE 本身是**确定性**的（不含随机性），为注入随机性，我们让初始条件 $X_0$ 随机——选取一个**初始分布** $p_{\text{init}}$，通常取简单的高斯分布 $p_{\text{init}} = \mathcal{N}(0, I_d)$（标准正态）。关键在于推理时必须能方便地从 $p_{\text{init}}$ 中采样。

流模型由如下 ODE 描述：

$$
\begin{cases}
X_0 \sim p_{\text{init}} & \text{（随机初始化）}\\
\frac{d}{dt} X_t = u_t^\theta(X_t) & \text{（ODE 演化）}
\end{cases}
$$

目标是让轨迹终点 $X_1$ 服从数据分布 $p_{\text{data}}$，即：

$$
X_1 \sim p_{\text{data}} \iff \psi_1^\theta(X_0) \sim p_{\text{data}}
$$

其中 $\psi_t^\theta$ 是由向量场 $u_t^\theta$ 诱导出的流（flow）。

虽然叫"流模型"，神经网络参数化的是 $u_t^\theta$ 而非流 $\psi_t^\theta$；流需要通过数值模拟 ODE 获得。采样流程见 Algorithm 1（从 $p_{\text{init}}$ 采样 $X_0$，数值积分 ODE 至 $t=1$ 得 $X_1$）。

**Algorithm 1**

**Require**: Neural network vector field \( $u_t^\theta$ \), number of steps \( n \)

| Step  | Description                                    |
| :---: | :--------------------------------------------- |
|   1   | Set \( t = 0 \)                                |
|   2   | Set step size \($h = \frac{1}{n}$\)            |
|   3   | Draw a sample \($X_0 \sim p_{\text{init}}$\)   |
|   4   | **for** \( i = 1, $\ldots$, n \) **do**        |
|   5   | $\quad X_{t+h} = X_t + h$ \, $u_t^\theta(X_t)$ |
|   6   | $\quad$ Update \( $t \leftarrow t + h$ \)      |
|   7   | **end for**                                    |
|   8   | **return** \( $X_1$ \)                         |

整个流模型，给我的直观感觉。比如图片，从随机采样的点，走向正确的图片采样点，可以理解成点的运动，也可以理解成概率密度的流动，就是在这里采样点出现的概率高或者低，这样采样才能出来类似的图片，不过这里是后续了。