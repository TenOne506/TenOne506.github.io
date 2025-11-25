---
title: LLVM简介
createTime: 2024/12/12 14:58:57
permalink: /compiler/5ln5fsdl/
---

## LLVM

LLVM 就是一个开源的编译器基础设施，它的目标是为了开发新的编译器和优化器。它的设计目标是可以在不同的平台上运行，并且可以支持多种编程语言。\
LLVM 项目起源于 2000 年伊利诺伊大学厄巴纳-香槟分校的维克拉姆·艾夫(Vikram Adve)和克里斯·拉特纳(Chris Lattner)的研究，旨在为所有静态和动态语言创建动态编译技术。LLVM 是以 BSD 许可证开发的开源软件。2005 年，苹果公司雇用了克里斯·拉特纳及其团队为 macOS 和 iOS 开发工具，LLVM 成为了这些平台开发工具的一部分。
项目最初被命名为低级虚拟机（Low Level Virtual Machine）的首字母缩写。

## 安装LLVM

1.使用git拉取LLVM源代码。

```shell
#使用浅克隆
git clone --depth 1 https://github.com/llvm/llvm-project.git 
```

2.进入llvm-project目录，创建一个build目录，进入build目录，使用cmake配置LLVM。

```shell
cd llvm-project
mkdir build
cd build
# cmake -S llvm -B build -G <generator> [options]
cmake -S llvm -B build -G Ninja  \
  -DLLVM_ENABLE_PROJECTS='clang;mlir;lld' \
  -DLLVM_BUILD_EXAMPLES=ON, \
  -DLLVM_TARGETS_TO_BUILD="Native;NVPTX" \
  -DLLVM_ENABLE_RTTI=ON \
  -DCMAKE_BUILD_TYPE=Debug

```

我的环境是Windows上的WSL，使用的是`-G Ninja`。
  - 第一个选项用来构建clang编译器前端,lld连接器,和mlir多层级中间表达。
  - 第二个选项用来生成样例程序。其中如果后续要学习MLIR的话这个EXAMPLES要记得开。不然那边教程的程序可能要自己另外写CmakeList.txt文件，来编译运行。
  - 另外最后那个taget要根据自己的需求来配置Native：指的是主机架构，即构建 LLVM 的机器的架构。例如，如果你是在 x86_64 架构的 Intel CPU 上构建，那么 Native 就对应于 x86_64。
  NVPTX：这是 NVIDIA PTX (Parallel Thread Execution) 虚拟架构，用于为 NVIDIA GPU 生成代码。
  AMDGPU：这是 AMD GPU 的目标架构，支持 ROCm 平台上的 AMD GPU。如果你的电脑上是AMD的GPU，将NVPTX换成AMGGPU即可。其余按默认配置即可。
  - DLLVM_ENABLE_RTTI=ON。这个RTTI是运行时类型信息，这个选项是必须要开的。后面利用llvm来实现lox的时候，链接会报错，得重新来编译。
  
3. 使用Ninja构建LLVM。
```shell
# 8代表使用8个线程进行构建
# 可以根据自己的电脑性能进行调整
ninja -j 8
```
未完待续，最近收到两个面试通知，忙面试去了。
