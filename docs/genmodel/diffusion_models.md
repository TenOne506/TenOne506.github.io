---
title: diffusion_models
createTime: 2026/06/18 16:40:15
permalink: /genmodel/99q8czjq/
---

### stochastic processes

从上一讲中的常微分方程，延伸到随机微分方程，通过随机性改变了常微分方程的确定性轨迹，随机轨迹通常被称为随机过程$\boldsymbol{(X_t)_{0 \leq t \leq 1}}$，其定义为：  

- $X_t$ 对于每个 $0 \leq t \leq 1$ 都是随机变量；  
- $X: [0,1] \to \mathbb{R}^d$，$t \mapsto X_t$ 对于每次 $X$ 的抽样都是一个随机轨迹。  


特别地，当我们两次模拟同一个随机过程时，可能会得到不同的结果——因为动力学被设计为随机的。  

### Brownian motion

随机微分方程从布朗运动中构造，你可以想象布朗运动就是一段连续的随机行走。

现在让我们来定义布朗运动。

一个布朗运动 $W = (W_t)_{0 \le t \le 1}$ 是一个随机过程，满足 $W_0 = 0$，轨迹 $t \mapsto W_t$ 是连续的，并且满足以下两个条件：

1. 正态增量（Normal increments）：对于所有 $0 \le s < t$，有 $W_t - W_s \sim \mathcal{N}(0, (t-s)I_d)$，即增量服从高斯分布，且方差随时间线性增加（$I_d$ 是单位矩阵）。
2. 独立增量（Independent increments）：对于任意 $0 \le t_0 < t_1 < \cdots < t_n = 1$，增量 $W_{t_1} - W_{t_0}, \dots, W_{t_n} - W_{t_{n-1}}$ 是相互独立的随机变量。

布朗运动也被称为维纳过程（Wiener process），这就是为什么我们用字母 "$W$" 来表示它。我们可以很容易地通过设定步长 $h > 0$，令 $W_0 = 0$，并更新如下公式来近似模拟布朗运动：

$$W_{t+h} = W_t + \sqrt{h}\epsilon_t, \quad \epsilon_t \sim \mathcal{N}(0, I_d) \quad (t = 0, h, 2h, \dots, 1-h)$$

从常微分方程到随机微分方程的转变，看起来是加了一个由布朗运动驱动的随机变量，实际上现实中，所有东西都有随机性的。因为有随机性，所有不能像 flow models里那样利用导数来定义。因此我们要换种方式来定义，并且不需要用到导数，因此我们来重新定义一个常微分方程的轨迹：


$$
\begin{aligned}
& \frac{d}{dt} X_t = u_t(X_t) & & \triangleright \text{通过导数表达} \\[10pt]
& \stackrel{(i)}{\Leftrightarrow} \frac{1}{h} (X_{t+h} - X_t) = u_t(X_t) + R_t(h) \\[10pt]
& \Leftrightarrow X_{t+h} = X_t + h u_t(X_t) + h R_t(h) & & \triangleright \text{通过无穷小更新表达}
\end{aligned}
$$

其中$R_t(h)$是一个无穷小，可以忽略的函数。我们将利用上面的最后一个式子，来进行随机性，我们加上一些布朗运动的因素在里面：

$$
X_{t+h} = X_t + \underbrace{h u_t(X_t)}_{\text{确定性}} + \underbrace{\sigma_t (W_{t+h} - W_t)}_{\text{随机}} + \underbrace{h R_t(h)}_{\text{误差项}}
$$

其中$\sigma_t \ge 0$ 描述了一个扩散系数，并且$R_t(h)$描述了一个随机误差项，其标准差$\mathbb{E}[\|R_t(h)\|^2]^{1/2} \to 0$当$h \to 0$趋于 0。这些加起来描述了一个随机微分方程，通常采用下面的方法来表示：
$$
\begin{aligned}
& dX_t = u_t(X_t)dt + \sigma_t dW_t & & \triangleright \text{随机微分方程} \\[10pt]
& X_0 = x_0 & & \triangleright \text{初始条件}
\end{aligned}
$$

需要记住的是随机微分方程不存在一个流$\psi_t$，因为这个值不是确定的，而是充满随机的。

::: info 随机微分方程解的存在性与唯一性
如果 $u: \mathbb{R}^d \times [0, 1] \to \mathbb{R}^d$ 是连续可微的且导数有界，并且 $\sigma_t$ 是连续的，那么上面方程中的随机微分方程存在一个解，该解由满足方程 (6) 的唯一随机过程 $(X_t)_{0 \le t \le 1}$ 给出。
:::

注意到每个常微分方程（ODE）也是一个随机微分方程（SDE）——只需让扩散系数消失，即$\sigma_t = 0$。因此，在本课程的剩余部分，当我们谈论 SDE 时，我们将 ODE 视为一种特殊情况。

和常微分方程一样，很难计算出解析解，还是只能通过模拟的方式来计算。最简单被称为欧拉Euler-Maruyama 方法，它本质上对于 SDE 就如同 Euler 方法对于 ODE 一样。使用 Euler-Maruyama 方法，我们初始化$X_0=x_0$并通过以下方式迭代更新

$$
X_{t+h} = X_t + h u_t(X_t) + \sqrt{h} \sigma_t \epsilon_t, \quad \epsilon_t \sim \mathcal{N}(0, I_d)
$$

其中$h = n^{-1} > 0$是步长超参数，每次模拟，我们沿着$u_t(X_t)$的方向走一小步。采用方法参考 flow models中的算法 1。

### diffusion models
一个扩散模型定义如下：

$$
\begin{aligned}
& X_0 \sim p_{\text{init}} \qquad & &\triangleright \text{ 随机初始化} \\

& dX_t = u_t^\theta(X_t)dt + \sigma_t dW_t  & &\triangleright \text{ SDE}
\end{aligned}
$$

扩散模型（diffusion model）由一个神经网络 $u_t^\theta$ 和一个固定的扩散系数 $\sigma_t$ 组成，其中神经网络的参数 $\theta$ 用于参数化一个向量场：

$$
\begin{aligned}
\text{神经网络：} \quad & u^\theta: \mathbb{R}^d \times [0, 1] \to \mathbb{R}^d, \ (x, t) \mapsto u_t^\theta(x) \quad \text{带参数 } \theta \\
\text{固定：} \quad & \sigma_t: [0, 1] \to [0, \infty), \ t \mapsto \sigma_t
\end{aligned}
$$

为了从我们的随机微分方程（SDE）模型中获取样本（即生成对象），过程如下：

$$
\begin{aligned}
\text{初始化：} \quad & X_0 \sim p_{\text{init}} \quad \triangleright \text{ 用简单分布（例如高斯分布）进行初始化} \\
\text{模拟：} \quad & dX_t = u_t^\theta(X_t)dt + \sigma_t dW_t \quad \triangleright \text{ 从 0 到 1 模拟 SDE} \\
\text{目标：} \quad & X_1 \sim p_{\text{data}} \quad \triangleright \text{ 目标是使 } X_1 \text{ 具有分布 } p_{\text{data}}
\end{aligned}
$$

当 $\sigma_t = 0$ 时的扩散模型是一个流模型（flow model）。