import{_ as i,c as a,a as n,o as e}from"./app-CK6uIaf1.js";const l={};function p(t,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h3 id="llvm-ir-示例" tabindex="-1"><a class="header-anchor" href="#llvm-ir-示例"><span>LLVM IR 示例</span></a></h3><p>LLVM编译器使用单一的低级IR；事实上，LLVM这个名字代表 “低级虚拟机”。LLVM的IR是一种线性的三地址码。IR 是完全类型的，并且明确支持数组和结构体地址。它 提供对向量或SIMD数据和操作的支持。标量值保持在SSA形式，直到代码到达编译器的后端。在 使用GCC前端的LLVM环境中，LLVM IR是由执行GIMPLE到LLVM翻译的传递产生的。</p><h3 id="静态单赋值形式-static-single-assignment-ssa" tabindex="-1"><a class="header-anchor" href="#静态单赋值形式-static-single-assignment-ssa"><span>静态单赋值形式（Static Single Assignment, SSA）</span></a></h3><p>静态单赋值形式（SSA）是一种特殊的中间表示形式，它要求每个变量在整个程序中只被赋值一次。SSA形式通过引入φ函数（phi function）来处理控制流合并点处的变量赋值，从而简化了数据流分析。</p><h4 id="ssa的特点" tabindex="-1"><a class="header-anchor" href="#ssa的特点"><span>SSA的特点</span></a></h4><ol><li>每个变量只被赋值一次</li><li>使用φ函数处理控制流合并</li><li>显式表示数据依赖关系</li><li>简化数据流分析和优化</li></ol><h4 id="ssa的优势" tabindex="-1"><a class="header-anchor" href="#ssa的优势"><span>SSA的优势</span></a></h4><ol><li>简化数据流分析：由于每个变量只被赋值一次，数据流分析变得简单直接</li><li>优化机会：显式的数据依赖关系使得优化更容易实现</li><li>并行性分析：清晰的依赖关系有助于识别并行机会</li><li>寄存器分配：SSA形式天然适合寄存器分配算法</li></ol><h4 id="ssa的构建" tabindex="-1"><a class="header-anchor" href="#ssa的构建"><span>SSA的构建</span></a></h4><p>构建SSA形式通常包括以下步骤：</p><ol><li>插入φ函数：在控制流合并点插入φ函数</li><li>重命名变量：为每个赋值创建新的变量名</li><li>消除冗余：通过复制传播消除不必要的φ函数</li></ol><h4 id="ssa示例" tabindex="-1"><a class="header-anchor" href="#ssa示例"><span>SSA示例</span></a></h4><p>考虑以下代码：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes everforest-light houston vp-code"><code><span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">x </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;"> 1</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">if</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> (cond) {</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    x </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;"> 2</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">} </span><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">else</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> {</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    x </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;"> 3</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">}</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">y </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> x </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">+</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;"> 1</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换为SSA形式后：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes everforest-light houston vp-code"><code><span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">x1 </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;"> 1</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">if</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> (cond) {</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    x2 </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;"> 2</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">} </span><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">else</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> {</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    x3 </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;"> 3</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">}</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">x4 </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> φ(x2, x3);</span><span style="--shiki-light:#939F91;--shiki-light-font-style:italic;--shiki-dark:#EEF0F98F;--shiki-dark-font-style:italic;">  // φ函数根据控制流选择x2或x3</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">y1 </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> x4 </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">+</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;"> 1</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-基本算术运算" tabindex="-1"><a class="header-anchor" href="#_1-基本算术运算"><span>1. 基本算术运算</span></a></h4><div class="language-llvm line-numbers-mode" data-ext="llvm" data-title="llvm"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes everforest-light houston vp-code"><code><span class="line"><span>; 32位整数加法</span></span>
<span class="line"><span>%sum = add i32 4, 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; 64位浮点数乘法  </span></span>
<span class="line"><span>%product = fmul double 3.14, 2.71</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-函数定义" tabindex="-1"><a class="header-anchor" href="#_2-函数定义"><span>2. 函数定义</span></a></h4><div class="language-llvm line-numbers-mode" data-ext="llvm" data-title="llvm"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes everforest-light houston vp-code"><code><span class="line"><span>; 定义一个返回整数类型的函数</span></span>
<span class="line"><span>define i32 @add(i32 %a, i32 %b) {</span></span>
<span class="line"><span>  %result = add i32 %a, %b</span></span>
<span class="line"><span>  ret i32 %result</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-控制流" tabindex="-1"><a class="header-anchor" href="#_3-控制流"><span>3. 控制流</span></a></h4><div class="language-llvm line-numbers-mode" data-ext="llvm" data-title="llvm"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes everforest-light houston vp-code"><code><span class="line"><span>; if-else 示例</span></span>
<span class="line"><span>define i32 @max(i32 %a, i32 %b) {</span></span>
<span class="line"><span>  %cmp = icmp sgt i32 %a, %b</span></span>
<span class="line"><span>  br i1 %cmp, label %if_true, label %if_false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if_true:</span></span>
<span class="line"><span>  ret i32 %a</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if_false:</span></span>
<span class="line"><span>  ret i32 %b</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; 循环示例</span></span>
<span class="line"><span>define i32 @factorial(i32 %n) {</span></span>
<span class="line"><span>  %result = alloca i32</span></span>
<span class="line"><span>  store i32 1, i32* %result</span></span>
<span class="line"><span>  br label %loop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>loop:</span></span>
<span class="line"><span>  %i = phi i32 [1, %entry], [%next_i, %loop]</span></span>
<span class="line"><span>  %current = load i32, i32* %result</span></span>
<span class="line"><span>  %next = mul i32 %current, %i</span></span>
<span class="line"><span>  store i32 %next, i32* %result</span></span>
<span class="line"><span>  %next_i = add i32 %i, 1</span></span>
<span class="line"><span>  %done = icmp sgt i32 %next_i, %n</span></span>
<span class="line"><span>  br i1 %done, label %exit, label %loop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exit:</span></span>
<span class="line"><span>  %final = load i32, i32* %result</span></span>
<span class="line"><span>  ret i32 %final</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-内存操作" tabindex="-1"><a class="header-anchor" href="#_4-内存操作"><span>4. 内存操作</span></a></h4><div class="language-llvm line-numbers-mode" data-ext="llvm" data-title="llvm"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes everforest-light houston vp-code"><code><span class="line"><span>; 分配和访问内存</span></span>
<span class="line"><span>define i32 @memory_example() {</span></span>
<span class="line"><span>  %ptr = alloca i32</span></span>
<span class="line"><span>  store i32 42, i32* %ptr</span></span>
<span class="line"><span>  %val = load i32, i32* %ptr</span></span>
<span class="line"><span>  ret i32 %val</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LLVM IR 是一种基于 SSA（静态单赋值）形式的三地址码表示。它具有以下特点：</p><ol><li>强类型系统</li><li>显式控制流</li><li>显式内存操作</li><li>支持多种优化</li><li>可移植到不同架构</li></ol>`,26)]))}const r=i(l,[["render",p]]),c=JSON.parse('{"path":"/compiler/fnji6gck/","title":"LLVM IR示例","lang":"zh-CN","frontmatter":{"title":"LLVM IR示例","createTime":"2025/01/14 22:04:14","permalink":"/compiler/fnji6gck/"},"headers":[],"readingTime":{"minutes":2.58,"words":773},"git":{"updatedTime":1737259052000,"contributors":[{"name":"TenOne506","username":"TenOne506","email":"w13852770506@163.com","commits":2,"avatar":"https://avatars.githubusercontent.com/TenOne506?v=4","url":"https://github.com/TenOne506"}],"changelog":[{"hash":"c7425a4150ff14853eb3b19e9d2f5f15a39e66da","date":1736865009000,"email":"w13852770506@163.com","author":"TenOne506","message":"更新中间代码生成","commitUrl":"https://github.com/TenOne506/TenOne506.github.io/commit/c7425a4150ff14853eb3b19e9d2f5f15a39e66da"}]},"filePathRelative":"notes/compiler/EaC/4.中间代码表示/5.LLVM IR示例.md"}');export{r as comp,c as data};
