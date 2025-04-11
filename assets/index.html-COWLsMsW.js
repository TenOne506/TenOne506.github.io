import{_ as e,c as d,a,o as i}from"./app-CK6uIaf1.js";const r={};function l(o,t){return i(),d("div",null,t[0]||(t[0]=[a('<p>这一节主要介绍另一种解析器，自底向上解析器。以及相关的LR(1)语法。</p><h3 id="自底向上解析器" tabindex="-1"><a class="header-anchor" href="#自底向上解析器"><span>自底向上解析器</span></a></h3><p>自底向上解析器（Bottom-up parser）是一种从输入符号开始，逐步构建语法树的解析方法。它的主要特点包括：</p><ol><li>从输入符号开始，逐步归约到起始符号</li><li>使用移进-归约（shift-reduce）策略</li><li>能够处理更广泛的语法形式</li><li>通常使用栈来保存中间状态</li></ol><p>自底向上解析器的工作过程：</p><ol><li>将输入符号移入栈中</li><li>当栈顶符号序列与某个产生式的右部匹配时，进行归约</li><li>重复上述过程，直到归约到起始符号</li></ol><p>常见的自底向上解析器包括：</p><ul><li>LR(0)解析器</li><li>SLR(1)解析器：简单LR解析器（Simple LR Parser），是LR(0)解析器的改进版本。它使用LR(0)项集，但通过查看下一个输入符号（lookahead）来减少冲突。SLR(1)解析器比LR(0)更强大，但比LR(1)解析器简单。</li><li>LR(1)解析器：LR(1)解析器是LR(0)解析器的扩展，它使用LR(0)项集，并通过查看下一个输入符号（lookahead）来减少冲突。LR(1)解析器比SLR(1)解析器更强大，但比LR(0)解析器复杂。</li></ul><h3 id="lr-1-语法" tabindex="-1"><a class="header-anchor" href="#lr-1-语法"><span>LR(1)语法</span></a></h3><p>LR(k)语法是指：<br> L-means&quot;left-to-right&#39;’ scan of input <br> L-meanss &quot;Reverse rightmost derivation&quot; <br> k-means“predict based on k tokens of lookahead&quot;</p><p>LR(1)语法是一种自底向上的语法分析方法，采用从左到右扫描输入、最右推导的逆过程，并且只向前查看1个符号。</p><h3 id="lr解析样例" tabindex="-1"><a class="header-anchor" href="#lr解析样例"><span>LR解析样例</span></a></h3><p>考虑以下简单语法：</p><ol><li>S → E</li><li>E → E + T</li><li>E → T</li><li>T → id</li></ol><p>输入字符串：id + id</p><p>解析过程：</p><table><thead><tr><th>栈</th><th>输入</th><th>动作</th></tr></thead><tbody><tr><td>0</td><td>id + id $</td><td>移进</td></tr><tr><td>0 id</td><td>+ id $</td><td>归约 T → id</td></tr><tr><td>0 T</td><td>+ id $</td><td>归约 E → T</td></tr><tr><td>0 E</td><td>+ id $</td><td>移进</td></tr><tr><td>0 E +</td><td>id $</td><td>移进</td></tr><tr><td>0 E + id</td><td>$</td><td>归约 T → id</td></tr><tr><td>0 E + T</td><td>$</td><td>归约 E → E + T</td></tr><tr><td>0 E</td><td>$</td><td>接受</td></tr></tbody></table><p>解析成功，输入字符串符合语法规则。 下一节会介绍如何构造LR(1)解析表。来决定进行规约还是移进。</p>',18)]))}const s=e(r,[["render",l]]),h=JSON.parse('{"path":"/compiler/gpeccshs/","title":"自底向上解析器与LR(1)语法","lang":"zh-CN","frontmatter":{"title":"自底向上解析器与LR(1)语法","createTime":"2025/01/11 20:44:08","permalink":"/compiler/gpeccshs/"},"headers":[],"readingTime":{"minutes":1.92,"words":576},"git":{"updatedTime":1736650294000,"contributors":[{"name":"TenThousandOne","username":"TenThousandOne","email":"w13852770506@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/TenThousandOne?v=4","url":"https://github.com/TenThousandOne"}],"changelog":[{"hash":"578c3b3580b0235a4ee702400ab20707911db859","date":1736650294000,"email":"w13852770506@163.com","author":"TenThousandOne","message":"更新自底向上和LR(1)语法","commitUrl":"https://github.com/TenOne506/TenOne506.github.io/commit/578c3b3580b0235a4ee702400ab20707911db859"}]},"filePathRelative":"notes/compiler/EaC/3.解析器/4.自底向上解析器与LR(1)语法.md"}');export{s as comp,h as data};
