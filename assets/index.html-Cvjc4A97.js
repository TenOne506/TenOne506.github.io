import{_ as i,c as a,a as n,o as l}from"./app-CyldsJ9A.js";const e={};function t(h,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h2 id="无重复字符的最长字串" tabindex="-1"><a class="header-anchor" href="#无重复字符的最长字串"><span><a href="https://leetcode.cn/problems/longest-substring-without-repeating-characters/" target="_blank" rel="noopener noreferrer">无重复字符的最长字串</a></span></a></h2><p>给定一个字符串 <code>s</code> ，请你找出其中不含有重复字符的 <strong>最长子串</strong> 的长度。</p><div class="demo-wrapper"><div class="demo-head"><div class="demo-ctrl"><i></i><i></i><i></i></div></div><div class="demo-container"><p>示例 1:<br> 输入: s = &quot;abcabcbb&quot;<br> 输出: 3<br> 解释: 因为无重复字符的最长子串是 &quot;abc&quot;，所以其长度为 3。<br> 示例 2:<br> 输入: s = &quot;bbbbb&quot;<br> 输出: 1<br> 解释: 因为无重复字符的最长子串是 &quot;b&quot;，所以其长度为 1。<br> 示例 3:<br> 输入: s = &quot;pwwkew&quot;<br> 输出: 3<br> 解释: 因为无重复字符的最长子串是 &quot;wke&quot;，所以其长度为 3。   请注意，你的答案必须是 子串 的长度，&quot;pwke&quot; 是一个子序列，不是子串。</p></div></div><p>这题是一个经典的滑动窗口，可以采用代码来解决。</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes everforest-light houston vp-code"><code><span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">class</span><span style="--shiki-light:#3A94C5;--shiki-dark:#ACAFFF;"> Solution</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> {</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">public</span><span style="--shiki-light:#5C6A72;--shiki-dark:#54B9FF;">:</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">  int</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;"> lengthOfLongestSubstring</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(</span><span style="--shiki-light:#3A94C5;--shiki-dark:#ACAFFF;">string</span><span style="--shiki-light:#5C6A72;--shiki-light-font-style:inherit;--shiki-dark:#4BF3C8;--shiki-dark-font-style:italic;"> s</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">)</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> {</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">    int</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> len </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">0</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    unordered_set</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">&lt;</span><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">char</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">&gt;</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> recorded;</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">       </span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">    int</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> left</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">0</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">,right </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">0</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#939F91;--shiki-light-font-style:italic;--shiki-dark:#EEF0F98F;--shiki-dark-font-style:italic;">    //枚举右边界</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">    while</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(right</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">&lt;</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">s</span><span style="--shiki-light:#939F91;--shiki-dark:#EEF0F9;">.</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;">size</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">()){</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">      char</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> c </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;"> s</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">[right];</span></span>
<span class="line"><span style="--shiki-light:#939F91;--shiki-light-font-style:italic;--shiki-dark:#EEF0F98F;--shiki-dark-font-style:italic;">      //如果当前字符在窗口中已经存在，那么就缩小窗口</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">      while</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">recorded</span><span style="--shiki-light:#939F91;--shiki-dark:#EEF0F9;">.</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;">contains</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(c)){</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">        recorded</span><span style="--shiki-light:#939F91;--shiki-dark:#EEF0F9;">.</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;">erase</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">s</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">[left]);</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">        left</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">++</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">      }</span></span>
<span class="line"><span style="--shiki-light:#939F91;--shiki-light-font-style:italic;--shiki-dark:#EEF0F98F;--shiki-dark-font-style:italic;">      //如果当前字符在窗口中不存在，那么就扩大窗口</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">      recorded</span><span style="--shiki-light:#939F91;--shiki-dark:#EEF0F9;">.</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;">insert</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(c);</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">      right</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">++</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#939F91;--shiki-light-font-style:italic;--shiki-dark:#EEF0F98F;--shiki-dark-font-style:italic;">      //更新窗口大小</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">      len </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;"> max</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(len,right</span><span style="--shiki-light:#F57D26;--shiki-dark:#EEF0F9;">-</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">left);</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    }</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">    return</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> len;</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">  }</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const p=i(e,[["render",t],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/code/w9vja2wg/","title":"无重复字符的最长字串","lang":"zh-CN","frontmatter":{"title":"无重复字符的最长字串","createTime":"2024/12/13 20:19:12","permalink":"/code/w9vja2wg/"},"headers":[],"readingTime":{"minutes":1.03,"words":310},"git":{"updatedTime":1734096157000,"contributors":[{"name":"TenThousandOne","username":"TenThousandOne","email":"w13852770506@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/TenThousandOne?v=4","url":"https://github.com/TenThousandOne"}],"changelog":[{"hash":"46130eeb1959ce621b34a15fbde6540e52ebb00b","date":1734096157000,"email":"w13852770506@163.com","author":"TenThousandOne","message":"prepare interview","commitUrl":"https://github.com/TenOne506/TenOne506.github.io/commit/46130eeb1959ce621b34a15fbde6540e52ebb00b"}]},"filePathRelative":"notes/code/滑动窗口/无重复字符的最长字串.md","bulletin":false}');export{p as comp,r as data};