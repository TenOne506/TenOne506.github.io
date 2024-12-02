import{_ as a,c as t,a as n,o as i}from"./app-D8Pywd0Q.js";const s="/compiler/eac/scanners/doublebuf.png",o="/compiler/eac/scanners/conspress.png",c={};function r(l,e){return i(),t("div",null,e[0]||(e[0]=[n('<h3 id="扫描器的实现" tabindex="-1"><a class="header-anchor" href="#扫描器的实现"><span>扫描器的实现</span></a></h3><p>这里不想叙述书中所列举的，表驱动扫描器，直接编码扫描器，和手写扫描器的区别。说实话感觉不明显。</p><p>这里我想记录一下书中所说的扫描器实现的一些优化。</p><ol><li><p>Double buffering。即采用双重缓冲，有点类似于Ping-Pong缓存的想法。 <img src="'+s+'" alt="min_dfa" style="display:block;margin-left:auto;margin-right:auto;"> 具体实现的细节会有当前指针<code>input</code>，和缓冲区开始的指针<code>fence</code>。当扫描器回滚的时候，如果<code>input</code>回滚到<code>fence</code>就直接报错。下面直接看我实现的C++样例代码。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes everforest-light houston vp-code"><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>压缩状态表，其中可以使用基数排序的思想，对每一列非错误状态的数量技术的先进行分组，在逐个比较，避免了大量的比较操作。 <img src="'+o+'" alt="min_dfa" style="display:block;margin-left:auto;margin-right:auto;"></p></li></ol>',4)]))}const m=a(c,[["render",r],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/compiler/rbwmrfsq/","title":"扫描器的实现","lang":"zh-CN","frontmatter":{"title":"扫描器的实现","createTime":"2024/12/28 16:40:12","permalink":"/compiler/rbwmrfsq/"},"headers":[],"readingTime":{"minutes":0.81,"words":243},"git":{"updatedTime":1735391166000,"contributors":[{"name":"TenThousandOne","username":"TenThousandOne","email":"w13852770506@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/TenThousandOne?v=4","url":"https://github.com/TenThousandOne"}],"changelog":[{"hash":"b1bd75bb44a6a4f549759c5edb9d048a7a5c34b9","date":1735391166000,"email":"w13852770506@163.com","author":"TenThousandOne","message":"更新完编译器扫描器","commitUrl":"https://github.com/TenOne506/TenOne506.github.io/commit/b1bd75bb44a6a4f549759c5edb9d048a7a5c34b9"}]},"filePathRelative":"notes/compiler/EaC/2.扫描器/6.扫描器的实现.md","bulletin":false}');export{m as comp,p as data};
