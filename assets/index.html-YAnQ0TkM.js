import{_ as i,c as a,a as n,o as t}from"./app-CyldsJ9A.js";const l={};function h(e,s){return t(),a("div",null,s[0]||(s[0]=[n(`<h2 id="删除数组中重复项" tabindex="-1"><a class="header-anchor" href="#删除数组中重复项"><span><a href="https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/" target="_blank" rel="noopener noreferrer">删除数组中重复项</a></span></a></h2><p>给你一个<strong>非严格递增排列</strong>的数组 <code>nums</code>，请你<strong>原地</strong>删除重复出现的元素，使每个元素只出现一次 ，返回删除后数组的新长度。元素的<strong>相对顺序</strong>应该保持一 。然后返回<code>nums</code>中唯一元素的个数。</p><div class="demo-wrapper"><div class="demo-head"><div class="demo-ctrl"><i></i><i></i><i></i></div></div><div class="demo-container"><p>示例 1： 输入：nums = [1,1,2]<br> 输出：2, nums = [1,2,_]<br> 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。<br> 示例 2： 输入：nums = [0,0,1,1,1,2,2,3,3,4]<br> 输出：5, nums = [0,1,2,3,4]<br> 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。</p></div></div><p>从题目看其实很简单，直接给出代码即可。</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes everforest-light houston vp-code"><code><span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">class</span><span style="--shiki-light:#3A94C5;--shiki-dark:#ACAFFF;"> Solution</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> {</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">public</span><span style="--shiki-light:#5C6A72;--shiki-dark:#54B9FF;">:</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">  int</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;"> removeDuplicates</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(</span><span style="--shiki-light:#3A94C5;--shiki-dark:#ACAFFF;">vector</span><span style="--shiki-light:#F57D26;--shiki-dark:#EEF0F9;">&lt;</span><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">int</span><span style="--shiki-light:#F57D26;--shiki-dark:#EEF0F9;">&gt;</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">&amp;</span><span style="--shiki-light:#5C6A72;--shiki-light-font-style:inherit;--shiki-dark:#4BF3C8;--shiki-dark-font-style:italic;"> nums</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">)</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> {</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">    int</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> slow</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">0</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">,fast</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">1</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">    int</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> len </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;"> nums</span><span style="--shiki-light:#939F91;--shiki-dark:#EEF0F9;">.</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;">size</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">();</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">    for</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(fast</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">1</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;fast</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">&lt;</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">len;fast</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">++</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">){</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">      if</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">nums</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">[fast] </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">!=</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;"> nums</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">[slow]){</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">        nums</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">[</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">++</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">slow] </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;"> nums</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">[fast];</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">      }</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    }</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">    return</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> slow</span><span style="--shiki-light:#F57D26;--shiki-dark:#EEF0F9;">+</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">1</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">  }</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除数组中重复项-1" tabindex="-1"><a class="header-anchor" href="#删除数组中重复项-1"><span><a href="https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/" target="_blank" rel="noopener noreferrer">删除数组中重复项</a></span></a></h2><p>给你一个有序数组 <code>nums</code> ，请你<strong>原地</strong>删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。 不要使用额外的数组空间，你必须在 <strong>原地</strong> 修改输入数组 并在使用 O(1) 额外空间的条件下完成。</p><div class="demo-wrapper"><div class="demo-head"><div class="demo-ctrl"><i></i><i></i><i></i></div></div><div class="demo-container"><p>示例 1： 输入：nums = [1,1,1,2,2,3] <br> 输出：5, nums = [1,1,2,2,3] <br> 解释：函数应返回新长度 length = 5,并且原数组的前五个元素被修改为 1, 1, 2, 2, 3。不需要考虑数组中超出新长度后面的元素。<br> 示例 2： 输入：nums = [0,0,1,1,1,1,2,3,3]<br> 输出：7, nums = [0,0,1,1,2,3,3]<br> 解释：函数应返回新长度 length = 7,并且原数组的前七个元素被修改为 0, 0, 1, 1, 2, 3, 3。不需要考虑数组中超出新长度后面的元素。</p></div></div><p>注意这题与上题的差异。<br> 因为允许只出现两次，所以前两个数肯定没有问题的，如果数组长度小于等于2则直接返回。<br> 当数组长达大于2时，考虑问题。此时应当初始化 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mi>l</mi><mi>o</mi><mi>w</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">slow = 2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">s</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>;代表写入的位置，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mi>a</mi><mi>s</mi><mi>t</mi></mrow><annotation encoding="application/x-tex">fast</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">a</span><span class="mord mathnormal">s</span><span class="mord mathnormal">t</span></span></span></span> = 2;代表遍历的位置。<br> 那么什么时候写入呢。仔细想想最多只出现两次，也就是最左 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mi>l</mi><mi>o</mi><mi>w</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">slow - 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">s</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 和 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mi>l</mi><mi>o</mi><mi>w</mi><mo>−</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">slow - 2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">s</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span> 的位置上重复了，那么当 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mi>a</mi><mi>s</mi><mi>t</mi></mrow><annotation encoding="application/x-tex">fast</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">a</span><span class="mord mathnormal">s</span><span class="mord mathnormal">t</span></span></span></span> 所对应的数据和 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mi>l</mi><mi>o</mi><mi>w</mi><mo>−</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">slow - 2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">s</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span> 不等时，这时候就可以写入了，这时候就保证了，最多出现两次的问题，因为一开始也说了这是个有序数组。 下面给出代码。</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes everforest-light houston vp-code"><code><span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">class</span><span style="--shiki-light:#3A94C5;--shiki-dark:#ACAFFF;"> Solution</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> {</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">public</span><span style="--shiki-light:#5C6A72;--shiki-dark:#54B9FF;">:</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">  int</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;"> removeDuplicates</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(</span><span style="--shiki-light:#3A94C5;--shiki-dark:#ACAFFF;">vector</span><span style="--shiki-light:#F57D26;--shiki-dark:#EEF0F9;">&lt;</span><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">int</span><span style="--shiki-light:#F57D26;--shiki-dark:#EEF0F9;">&gt;</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">&amp;</span><span style="--shiki-light:#5C6A72;--shiki-light-font-style:inherit;--shiki-dark:#4BF3C8;--shiki-dark-font-style:italic;"> nums</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">)</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> {</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">    if</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> (</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">nums</span><span style="--shiki-light:#939F91;--shiki-dark:#EEF0F9;">.</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;">size</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">()</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">&lt;=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">2</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">) </span><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">return</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;"> nums</span><span style="--shiki-light:#939F91;--shiki-dark:#EEF0F9;">.</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;">size</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">();</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">    int</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> slow</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">2</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">,fast</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">2</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">    int</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> len </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;"> nums</span><span style="--shiki-light:#939F91;--shiki-dark:#EEF0F9;">.</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;">size</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">();</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">    for</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(fast</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">2</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;fast</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">&lt;</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">len;fast</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">++</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">){</span></span>
<span class="line highlighted"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">      if</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">nums</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">[fast] </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">!=</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">nums</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">[slow</span><span style="--shiki-light:#F57D26;--shiki-dark:#EEF0F9;">-</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">2</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">] ){</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">        nums</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">[slow</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">++</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">] </span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;"> nums</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">[fast];</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">      }</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    }</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">    return</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> slow;</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">  }</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const k=i(l,[["render",h],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/code/dnzgzwfx/","title":"删除数组中重复项","lang":"zh-CN","frontmatter":{"title":"删除数组中重复项","createTime":"2024/12/06 14:24:29","permalink":"/code/dnzgzwfx/"},"headers":[],"readingTime":{"minutes":2.61,"words":782},"git":{"updatedTime":1734097692000,"contributors":[{"name":"TenThousandOne","username":"TenThousandOne","email":"w13852770506@163.com","commits":6,"avatar":"https://avatars.githubusercontent.com/TenThousandOne?v=4","url":"https://github.com/TenThousandOne"}],"changelog":[{"hash":"5ad6d6affe4bd81c206b44ca81123333909ae1c5","date":1734097692000,"email":"w13852770506@163.com","author":"TenThousandOne","message":"fix","commitUrl":"https://github.com/TenOne506/TenOne506.github.io/commit/5ad6d6affe4bd81c206b44ca81123333909ae1c5"}]},"filePathRelative":"notes/code/数组/删除数组中重复项.md","bulletin":false}');export{k as comp,r as data};