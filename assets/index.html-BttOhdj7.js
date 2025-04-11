import{_ as a,c as n,a as t,o as i}from"./app-CK6uIaf1.js";const p={};function e(l,s){return i(),n("div",null,s[0]||(s[0]=[t(`<h2 id="最长连续序列" tabindex="-1"><a class="header-anchor" href="#最长连续序列"><span><a href="https://leetcode.cn/problems/group-anagrams/" target="_blank" rel="noopener noreferrer">最长连续序列</a></span></a></h2><p>给定一个未排序的整数数组<code>nums</code> ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。</p><p>请你设计并实现时间复杂度为 <code>O(n)</code> 的算法解决此问题。</p><div class="demo-wrapper"><div class="demo-head"><div class="demo-ctrl"><i></i><i></i><i></i></div></div><div class="demo-container"><p>示例 1：<br> 输入：nums = [100,4,200,1,3,2]<br> 输出：4<br> 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。<br> 示例 2：<br> 输入：nums = [0,3,7,2,5,8,4,6,0,1]<br> 输出：9</p></div></div><p>核心思路：遍历 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mi>u</mi><mi>m</mi><mi>s</mi></mrow><annotation encoding="application/x-tex">nums</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span><span class="mord mathnormal">u</span><span class="mord mathnormal">m</span><span class="mord mathnormal">s</span></span></span></span> 中的元素 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>，以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 为起点，不断查找下一个数 $x+1,x+2,⋯ $是否在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mi>u</mi><mi>m</mi><mi>s</mi></mrow><annotation encoding="application/x-tex">nums</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span><span class="mord mathnormal">u</span><span class="mord mathnormal">m</span><span class="mord mathnormal">s</span></span></span></span> 中，并统计序列的长度。</p><ul><li>把 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mi>u</mi><mi>m</mi><mi>s</mi></mrow><annotation encoding="application/x-tex">nums</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span><span class="mord mathnormal">u</span><span class="mord mathnormal">m</span><span class="mord mathnormal">s</span></span></span></span> 中的数都放入一个哈希集合中，这样可以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span></span></span></span> 判断数字是否在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mi>u</mi><mi>m</mi><mi>s</mi></mrow><annotation encoding="application/x-tex">nums</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span><span class="mord mathnormal">u</span><span class="mord mathnormal">m</span><span class="mord mathnormal">s</span></span></span></span> 中。</li><li>如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">x−1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 在哈希集合中，则不以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 为起点。为什么？因为以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">x−1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 为起点计算出的序列长度，一定比以 x 为起点计算出的序列长度要长！这样可以避免大量重复计算。</li></ul><p>关于第二点的解释：<br> 当我们遍历数组中的每个元素 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 时，我们检查 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">x-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 是否存在于哈希集合中。如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">x-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 存在，那么以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 为起点的连续序列的长度一定不会超过以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">x-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 为起点的连续序列的长度。这是因为如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">x-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 存在，那么 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">x-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 之前的元素也一定存在，所以以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">x-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 为起点的连续序列会包含以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 为起点的连续序列。</p><p>因此，如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">x-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 存在于哈希集合中，我们就不考虑以 x 为起点的连续序列，这样可以避免重复计算，提高算法的效率。如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">x-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 不存在，那么我们以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 为起点，不断查找下一个数 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>+</mo><mn>1</mn><mo separator="true">,</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo separator="true">,</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">x+1, x+2, ...</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">2</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span></span></span></span> 是否在哈希集合中，并统计序列的长度。这样，我们就可以找到最长的连续序列的长度。</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes everforest-light houston vp-code"><code><span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">class</span><span style="--shiki-light:#3A94C5;--shiki-dark:#ACAFFF;"> Solution</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> {</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">public</span><span style="--shiki-light:#5C6A72;--shiki-dark:#54B9FF;">:</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">  int</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;"> longestConsecutive</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(</span><span style="--shiki-light:#3A94C5;--shiki-dark:#ACAFFF;">vector</span><span style="--shiki-light:#F57D26;--shiki-dark:#EEF0F9;">&lt;</span><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">int</span><span style="--shiki-light:#F57D26;--shiki-dark:#EEF0F9;">&gt;</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">&amp;</span><span style="--shiki-light:#5C6A72;--shiki-light-font-style:inherit;--shiki-dark:#4BF3C8;--shiki-dark-font-style:italic;"> nums</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">)</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> {</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    nordered_set</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">&lt;</span><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">int</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">&gt;</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> numset;</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">    for</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(</span><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">auto</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> n:nums){</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">      numset</span><span style="--shiki-light:#939F91;--shiki-dark:#EEF0F9;">.</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;">insert</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(n);</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    }</span></span>
<span class="line"><span style="--shiki-light:#939F91;--shiki-light-font-style:italic;--shiki-dark:#EEF0F98F;--shiki-dark-font-style:italic;">    //上面的循环可以直接用下一步的初始化</span></span>
<span class="line"><span style="--shiki-light:#939F91;--shiki-light-font-style:italic;--shiki-dark:#EEF0F98F;--shiki-dark-font-style:italic;">    //unordered_set&lt;int&gt; numset(nums.begin(),nums.end());</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">    int</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> res</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">0</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">    int</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> len</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">0</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">    for</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(</span><span style="--shiki-light:#3A94C5;--shiki-dark:#54B9FF;">auto</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> n:nums){</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">      if</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(</span><span style="--shiki-light:#F57D26;--shiki-dark:#EEF0F9;">!</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">numset</span><span style="--shiki-light:#939F91;--shiki-dark:#EEF0F9;">.</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;">count</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(n</span><span style="--shiki-light:#F57D26;--shiki-dark:#EEF0F9;">-</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">1</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">)){</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">        len</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#DF69BA;--shiki-dark:#FFD493;">1</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">        while</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(</span><span style="--shiki-light:#5C6A72;--shiki-dark:#4BF3C8;">numset</span><span style="--shiki-light:#939F91;--shiki-dark:#EEF0F9;">.</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;">count</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">++</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">n)) len</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">++</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">;</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">        res</span><span style="--shiki-light:#F57D26;--shiki-dark:#54B9FF;">=</span><span style="--shiki-light:#8DA101;--shiki-dark:#00DAEF;">max</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">(res,len);</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">      }</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">    }</span></span>
<span class="line"><span style="--shiki-light:#F85552;--shiki-dark:#54B9FF;">    return</span><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;"> res;</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">  }</span></span>
<span class="line"><span style="--shiki-light:#5C6A72;--shiki-dark:#EEF0F9;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const h=a(p,[["render",e]]),r=JSON.parse('{"path":"/code/yen4efmn/","title":"最长连续序列","lang":"zh-CN","frontmatter":{"title":"最长连续序列","createTime":"2024/12/13 20:08:03","permalink":"/code/yen4efmn/"},"headers":[],"readingTime":{"minutes":1.97,"words":590},"git":{"updatedTime":1734096157000,"contributors":[{"name":"TenThousandOne","username":"TenThousandOne","email":"w13852770506@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/TenThousandOne?v=4","url":"https://github.com/TenThousandOne"}],"changelog":[{"hash":"24faca8c581b3c2e9cc8a9232b2e9fa470384bec","date":1734096157000,"email":"w13852770506@163.com","author":"TenThousandOne","message":"prepare interview","commitUrl":"https://github.com/TenOne506/TenOne506.github.io/commit/24faca8c581b3c2e9cc8a9232b2e9fa470384bec"}]},"filePathRelative":"notes/code/哈希/最长连续序列.md"}');export{h as comp,r as data};
