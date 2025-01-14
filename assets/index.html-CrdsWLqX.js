import{_ as n,c as a,a as e,o as i}from"./app-CyldsJ9A.js";const l={};function p(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h3 id="llvm-ir-示例" tabindex="-1"><a class="header-anchor" href="#llvm-ir-示例"><span>LLVM IR 示例</span></a></h3><h4 id="_1-基本算术运算" tabindex="-1"><a class="header-anchor" href="#_1-基本算术运算"><span>1. 基本算术运算</span></a></h4><div class="language-llvm line-numbers-mode" data-ext="llvm" data-title="llvm"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes everforest-light houston vp-code"><code><span class="line"><span>; 32位整数加法</span></span>
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
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LLVM IR 是一种基于 SSA（静态单赋值）形式的三地址码表示。它具有以下特点：</p><ol><li>强类型系统</li><li>显式控制流</li><li>显式内存操作</li><li>支持多种优化</li><li>可移植到不同架构</li></ol>`,11)]))}const t=n(l,[["render",p],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/compiler/fnji6gck/","title":"LLVM IR示例","lang":"zh-CN","frontmatter":{"title":"LLVM IR示例","createTime":"2025/01/14 22:04:14","permalink":"/compiler/fnji6gck/"},"headers":[],"readingTime":{"minutes":0.95,"words":284},"git":{"updatedTime":1736865009000,"contributors":[{"name":"TenOne506","username":"TenOne506","email":"w13852770506@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/TenOne506?v=4","url":"https://github.com/TenOne506"}],"changelog":[{"hash":"32e792a51e7211b49f63ebc8aea0875c9df72156","date":1736865009000,"email":"w13852770506@163.com","author":"TenOne506","message":"更新中间代码生成","commitUrl":"https://github.com/TenOne506/TenOne506.github.io/commit/32e792a51e7211b49f63ebc8aea0875c9df72156"}]},"filePathRelative":"notes/compiler/EaC/4.中间代码表示/5.LLVM IR示例.md","bulletin":false}');export{t as comp,r as data};
