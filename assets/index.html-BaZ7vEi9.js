import{_ as s,c as a,a as n,o as l}from"./app-CK6uIaf1.js";const t={};function h(e,i){return l(),a("div",null,i[0]||(i[0]=[n(`<p>过程（Procedure）是大多数编程语言中的核心抽象之一。过程创建了一个受控的执行环境；每个过程都有其私有的存储空间。过程有助于定义系统组件之间的接口；跨组件的交互通常通过过程调用进行结构化。最后，过程是大多数编译器的工作基本单位。典型的编译器处理一系列的过程并为它们生成代码。由这些单独编译所产生的代码必须能够与其他时间编译的代码正确链接和执行。</p><p>过程在独立编译中扮演着关键角色，这使得软件开发者可以构建大型软件系统。如果编译器每次编译都需要整个程序的文本，那么大型软件系统将变得难以管理。想象一下，在开发期间对于每一次编辑更改都要重新编译一个拥有数百万行代码的应用程序！因此，过程不仅在语言设计和编译器实现中起着至关重要的作用，在系统设计和工程中也是一样。本章将重点介绍编译器如何实现过程和方法。</p><p>程序是由过程组成的，它们是程序的构建模块。过程创建了一个已知和受控的执行环境。一个过程在其被另一个过程调用或invoke时执行。该调用会创建并初始化过程本地存储。它保护了调用者的环境，建立了被调用者的环境，并根据调用和语言创建任何指定的这两个环境之间的链接。被调用者可以向其调用者返回一个值，在这种情况下，该过程被称为函数。过程之间的接口让程序员能够独立地开发和测试程序的一部分；过程之间的分离提供了一定程度的保护，防止其他过程中出现的问题。</p><ol><li><p>调用过程(Call) 调用提供了一个在过程之间有序转移控制的机制。调用机制提供了一种标准的方法来调用一个过程，并将一组参数或实参从调用者的命名空间映射到被调用者的命名空间。当被调用者完成其任务后，控制权返回给调用者，在调用语句之后立即的位置继续执行。大多数语言允许过程向调用者返回一个或多个值。语言和实现定义了一套标准的动作来调用一个过程，这有时被称为调用序列。以链接约定(链接约定:编译器和操作系统之间的一种协议，定义了调用过程或函数时所采取的动作。)形式的调用序列标准化，使得程序员可以在不同的时间调用由其他人编写的代码，这些代码可能是用不同的编译器编译的。</p></li><li><p>名称空间(NameSpace),在大多数编程语言中，过程调用会为被调用者创建一个新的且受保护的命名空间。程序员可以在过程内部声明新的名称，例如变量和标签，而无需担心周围的上下文环境。这些局部声明会遮蔽任何先前定义的同名项。程序员可以使用形式参数在过程中将调用者的命名空间中的值和变量映射到被调用者的命名空间中。</p><p>由于过程拥有已知且独立的命名空间，因此当从不同上下文中调用时，它可以正确且一致地运行。执行调用会实例化被调用者的命名空间。调用必须为被调用者声明的对象创建存储空间。这种分配必须是自动且高效的。</p></li><li><p>外部接口(External Interface),过程在大型软件系统的各部分之间形成关键接口。链接约定定义了将名称映射到值和位置、保存调用者的运行时环境并创建被调用者环境、以及在调用者和被调用者之间转移控制的规则。</p><p>链接约定创建了一种标准方式来调用由其他人编写的代码以及用其他语言编写的代码。统一的调用序列通过使库函数和系统调用的使用成为可能，从而使得构建大型软件系统成为可能。没有链接约定，程序员和编译器在每次过程调用时都需要理解被调用者的代码。</p></li></ol><p>给出一个常见的递归调用的例子。</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes everforest-light houston vp-code"><code><span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">int</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;"> factorial</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(</span><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">int</span><span style="--shiki-light:#5C6A72;--shiki-light-font-style:inherit;--shiki-dark:#4BF3C8;--shiki-dark-font-style:italic;"> n</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">)</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> {</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">    if</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> (n </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">==</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;"> 0</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">) {</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">        return</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;"> 1</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    } </span><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">else</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> {</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">        return</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> n </span><span style="--shiki-light:#F57D26;--shiki-dark:#EEF0F9;">*</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;"> factorial</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(n </span><span style="--shiki-light:#F57D26;--shiki-dark:#EEF0F9;">-</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;"> 1</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">);</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    }</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于factorial(5)的调用，递归过程如下展开：factorial(5)调用factorial(4)，factorial(4)调用factorial(3)，factorial(3)调用factorial(2)，factorial(2)调用factorial(1)，factorial(1)调用factorial(0)。当递归到达factorial(0)时，满足n == 0的条件，返回1并终止递归。随后，递归调用开始逐层返回：factorial(1)返回1 * 1 = 1给factorial(2)，factorial(2)返回2 * 1 = 2给factorial(3)，factorial(3)返回3 * 2 = 6给factorial(4)，factorial(4)返回4 * 6 = 24给factorial(5)，最后factorial(5)返回5 * 24 = 120。这个过程展示了典型的后进先出(LIFO)行为，栈机制有效地管理了所有返回地址。</p><p>下面介绍更复杂的过程控制流,闭包(Closure)</p><p>闭包（Closure）是函数式编程中的一个重要概念，在C++中通过lambda表达式实现。闭包是一个函数对象，它可以捕获并保存其定义时的上下文环境中的变量。这使得闭包可以在其定义的作用域之外继续访问这些变量。</p><p>C++中的闭包特点：</p><ol><li>通过lambda表达式创建匿名函数对象</li><li>可以捕获外部作用域的变量（按值或按引用）</li><li>捕获的变量生命周期与闭包对象绑定</li><li>可以作为参数传递或存储在容器中</li></ol><p>闭包的典型使用场景：</p><ol><li>回调函数：将闭包作为参数传递给其他函数</li><li>延迟执行：将操作封装在闭包中稍后执行</li><li>状态保持：通过捕获的变量在多次调用间保持状态</li><li>函数组合：将多个简单操作组合成复杂操作</li></ol><p>示例代码：</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes everforest-light houston vp-code"><code><span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">#include</span><span style="--shiki-light:#DFA000;--shiki-dark:#FFD493;"> &lt;iostream&gt;</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">#include</span><span style="--shiki-light:#DFA000;--shiki-dark:#FFD493;"> &lt;vector&gt;</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">#include</span><span style="--shiki-light:#DFA000;--shiki-dark:#FFD493;"> &lt;algorithm&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">int</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;"> main</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">()</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> {</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">    int</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> base </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;"> 10</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    </span></span>
<span class="line"><span style="--shiki-light:#939F91;--shiki-light-font-style:italic;--shiki-dark:#EEF0F98F;--shiki-dark-font-style:italic;">    // 创建闭包，按值捕获base</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">    auto</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> addBase </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> [</span><span style="--shiki-light:#5C6A72;--shiki-light-font-style:inherit;--shiki-dark:#4BF3C8;--shiki-dark-font-style:italic;">base</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">](</span><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">int</span><span style="--shiki-light:#5C6A72;--shiki-light-font-style:inherit;--shiki-dark:#4BF3C8;--shiki-dark-font-style:italic;"> x</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">) {</span><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;"> return</span><span style="--shiki-light:#8DA101;--shiki-dark:#EEF0F9;"> x </span><span style="--shiki-light:#F57D26;--shiki-dark:#EEF0F9;">+</span><span style="--shiki-light:#8DA101;--shiki-dark:#EEF0F9;"> base</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> };</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    </span></span>
<span class="line"><span style="--shiki-light:#35A77C;--shiki-dark:#EEF0F9;">    std</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">::vector</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">&lt;</span><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">int</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">&gt;</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> numbers </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> {</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">1</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">, </span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">2</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">, </span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">3</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">, </span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">4</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">, </span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">5</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">};</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    </span></span>
<span class="line"><span style="--shiki-light:#939F91;--shiki-light-font-style:italic;--shiki-dark:#EEF0F98F;--shiki-dark-font-style:italic;">    // 使用闭包作为参数</span></span>
<span class="line"><span style="--shiki-light:#35A77C;--shiki-dark:#EEF0F9;">    std</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">::</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;">transform</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">numbers</span><span style="--shiki-light:#939F91;--shiki-dark:#EEF0F9;">.</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;">begin</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(), </span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">numbers</span><span style="--shiki-light:#939F91;--shiki-dark:#EEF0F9;">.</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;">end</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(), </span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">numbers</span><span style="--shiki-light:#939F91;--shiki-dark:#EEF0F9;">.</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;">begin</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(), addBase);</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    </span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">    for</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> (</span><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">int</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> n : numbers) {</span></span>
<span class="line"><span style="--shiki-light:#35A77C;--shiki-dark:#EEF0F9;">        std</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">::cout </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">&lt;&lt;</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> n </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">&lt;&lt;</span><span style="--shiki-light:#DFA000;--shiki-dark:#FFD493;"> &quot; &quot;</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span><span style="--shiki-light:#939F91;--shiki-light-font-style:italic;--shiki-dark:#EEF0F98F;--shiki-dark-font-style:italic;">  // 输出：11 12 13 14 15</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    }</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    </span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">    return</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;"> 0</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，addBase是一个闭包，它捕获了外部变量base，并可以在后续调用时使用这个值。闭包使得我们可以创建灵活的函数对象，同时保持对定义时环境的访问。</p>`,16)]))}const p=s(t,[["render",h]]),F=JSON.parse('{"path":"/compiler/n4bm9it1/","title":"引言介绍","lang":"zh-CN","frontmatter":{"title":"引言介绍","createTime":"2025/01/23 13:49:51","permalink":"/compiler/n4bm9it1/"},"headers":[],"readingTime":{"minutes":6.03,"words":1810},"git":{"updatedTime":1737785851000,"contributors":[{"name":"TenOne506","username":"TenOne506","email":"w13852770506@163.com","commits":2,"avatar":"https://avatars.githubusercontent.com/TenOne506?v=4","url":"https://github.com/TenOne506"}],"changelog":[{"hash":"70541803c8d88d2f962285ade8087644d537fae0","date":1737686207000,"email":"w13852770506@163.com","author":"TenOne506","message":"更新语法制导翻译","commitUrl":"https://github.com/TenOne506/TenOne506.github.io/commit/70541803c8d88d2f962285ade8087644d537fae0"}]},"filePathRelative":"notes/compiler/EaC/6.实现过程/1.引言介绍.md"}');export{p as comp,F as data};
