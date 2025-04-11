import{_ as i,c as t,a,o}from"./app-CK6uIaf1.js";const e="/compiler/eac/parsers/lr1cc0.png",u="/compiler/eac/parsers/lr1cc1.png",s="/compiler/eac/parsers/dfalr.png",p={};function r(n,l){return o(),t("div",null,l[0]||(l[0]=[a('<h3 id="lr解析算法" tabindex="-1"><a class="header-anchor" href="#lr解析算法"><span>LR解析算法</span></a></h3><p>LR解析算法的主要步骤包括：</p><ol><li><p>构建LR(1)项集族：</p><ul><li>计算闭包（closure）</li><li>计算转移（goto）</li><li>生成所有可能的项集</li></ul></li><li><p>构建解析表：</p><ul><li>ACTION表：决定移进、归约、接受或报错</li><li>GOTO表：记录状态转移</li></ul></li><li><p>解析过程：</p><ul><li>初始化状态栈和符号栈</li><li>根据当前状态和输入符号查找ACTION表</li><li>执行移进或归约操作</li><li>更新状态栈和符号栈</li><li>重复直到接受或报错</li></ul></li><li><p>错误处理：</p><ul><li>检测语法错误，尤其是可以定位错误</li><li>提供错误恢复机制</li><li>生成有意义的错误信息</li></ul></li></ol><h3 id="句柄-handle-的概念" tabindex="-1"><a class="header-anchor" href="#句柄-handle-的概念"><span>句柄（Handle）的概念</span></a></h3><p>在LR解析中，句柄是指一个产生式的右部，它出现在栈顶并且可以被归约。具体来说：</p><ol><li><p>定义：</p><ul><li>句柄是某个产生式右部的一个子串</li><li>该子串与产生式右部完全匹配</li><li>该子串出现在栈顶</li><li>可以通过归约操作将其替换为产生式左部的非终结符</li></ul></li><li><p>句柄的特征：</p><ul><li>总是出现在栈顶</li><li>是当前输入串的最左可归约子串</li><li>是语法分析过程中需要归约的最小单位</li></ul></li><li><p>句柄的识别：</p><ul><li>通过解析表的状态转移和归约动作来识别</li><li>当解析器处于某个状态时，如果ACTION表指示可以进行归约操作，则栈顶的相应符号序列就是句柄</li></ul></li><li><p>句柄的重要性：</p><ul><li>是LR解析算法正确性的关键</li><li>决定了何时进行归约操作</li><li>保证了语法分析的正确顺序</li></ul></li></ol><h3 id="详细计算步骤" tabindex="-1"><a class="header-anchor" href="#详细计算步骤"><span>详细计算步骤</span></a></h3><p>首先来几个要用的函数计算</p><ol><li><p>计算closure的步骤：</p><ul><li>对于每个项[A → α•Bβ, a]，其中B是非终结符</li><li>对于B的每个产生式B → γ</li><li>对于FIRST(βa)中的每个终结符b</li><li>添加项[B → •γ, b]到closure集合</li><li>重复直到没有新项可以添加</li></ul></li><li><p>计算goto的步骤：</p><ul><li>对于给定项集I和符号X</li><li>创建新项集J = {}</li><li>对于I中的每个项[A → α•Xβ, a]</li><li>添加项[A → αX•β, a]到J</li><li>返回closure(J)</li></ul></li><li><p>构建ACTION表的步骤：</p><ul><li>对于每个项集Ii</li><li>对于每个项[A → α•aβ, b]，其中a是终结符 <ul><li>如果goto(Ii, a) = Ij</li><li>设置ACTION[i, a] = &quot;移进 j&quot;</li></ul></li><li>对于每个项[A → α•, a] <ul><li>设置ACTION[i, a] = &quot;归约 A → α&quot;</li></ul></li><li>对于包含[S&#39; → S•, eof]的项集 <ul><li>设置ACTION[i, eof] = &quot;接受&quot;</li></ul></li></ul></li><li><p>构建GOTO表的步骤：</p><ul><li>对于每个项集Ii</li><li>对于每个非终结符A</li><li>如果goto(Ii, A) = Ij</li><li>设置GOTO[i, A] = j</li></ul></li><li><p>解析过程的步骤：</p><ul><li>初始化： <ul><li>输入符号栈 = eof</li><li>状态栈 = {0}</li><li>输入符号 = 第一个输入符号</li></ul></li><li>循环直到接受或报错： <ul><li>如果ACTION[top(state stack), input symbol] = &quot;移进 j&quot; <ul><li>将input symbol压入输入符号栈</li></ul></li></ul></li></ul></li></ol><h3 id="示例-构建括号列表文法的lr-1-解析表" tabindex="-1"><a class="header-anchor" href="#示例-构建括号列表文法的lr-1-解析表"><span>示例：构建括号列表文法的LR(1)解析表</span></a></h3><p>给定文法：</p><ol><li>Goal → List</li><li>List → List Pair</li><li>List → Pair</li><li>Pair → ( List )</li><li>Pair → ( )</li></ol><p>构建过程：</p><ol><li><p>计算LR(1)项集族：</p><ul><li>I0 = closure([S&#39; → •Goal, eof]) <img src="'+e+'" alt="lr1" style="display:block;margin-left:auto;margin-right:auto;"></li><li>I1 = goto(I0, Goal)</li><li>I2 = goto(I0, List)</li><li>I3 = goto(I0, Pair)</li><li>I4 = goto(I0, &quot;1&quot;)</li><li>...（继续计算所有项集） 所有的项集如下:<img src="'+u+'" alt="lrn" style="display:block;margin-left:auto;margin-right:auto;"></li></ul></li><li><p>构建ACTION表和GOTO表：</p><p>构建表的详细计算步骤如上，这里不展开了。</p></li><li><p>解析过程示例： 输入：&quot;( ( ) )&quot; 解析步骤：</p><ol><li>初始化： <ul><li>输入符号栈 = eof</li><li>状态栈 = {0}</li><li>输入符号 = 第一个输入符号</li></ul></li><li>循环直到接受或报错： <ul><li>如果ACTION[top(state stack), input symbol] = &quot;移进 j&quot; <ul><li>将input symbol压入输入符号栈</li><li>将状态j压入状态栈</li><li>读取下一个输入符号</li></ul></li><li>如果ACTION[top(state stack), input symbol] = &quot;归约 A → β&quot; <ul><li>从栈中弹出|β|个符号</li><li>将A压入输入符号栈</li><li>将GOTO[top(state stack), A]压入状态栈</li></ul></li><li>如果ACTION[top(state stack), input symbol] = &quot;接受&quot; <ul><li>解析成功，返回</li></ul></li><li>如果ACTION[top(state stack), input symbol] = 空 <ul><li>报错，返回错误信息</li></ul></li></ul></li><li>具体步骤： <ul><li>移进 &#39;(&#39;</li><li>移进 &#39;(&#39;</li><li>移进 &#39;)&#39;, 归约 Pair → ( )</li><li>移进 &#39;)&#39;, 归约 List → Pair</li><li>归约 Pair → ( List )</li><li>归约 List → List Pair</li><li>归约 Goal → List</li><li>接受</li></ul></li></ol></li></ol><p>LR(1)解析器的效率来源于嵌入在Action和Goto表中的快速句柄查找机制。规范集合CC代表了文法的句柄查找有穷状态自动机（DFA）</p><p><img src="'+s+'" alt="dfalr" style="display:block;margin-left:auto;margin-right:auto;"></p><p>当LR(1)解析器执行时，它交错进行两种类型的动作：移进（shifts）和规约（reduces）。移进动作模拟了句柄查找DFA中的步骤。随着解析器将输入流中的每个单词移进解析栈，它也根据单词的语法类别改变DFA中的状态。规约动作发生在DFA到达一个终态时。此时，解析器弹出句柄及其DFA状态，以揭示开始寻找当前句柄之前DFA的状态。该状态位于栈中句柄左端之下。</p>',17)]))}const m=i(p,[["render",r]]),h=JSON.parse('{"path":"/compiler/fbf7a362/","title":"构造LR(1)解析表","lang":"zh-CN","frontmatter":{"title":"构造LR(1)解析表","createTime":"2025/01/11 20:53:43","permalink":"/compiler/fbf7a362/"},"headers":[],"readingTime":{"minutes":4.39,"words":1316},"git":{"updatedTime":1736650294000,"contributors":[{"name":"TenThousandOne","username":"TenThousandOne","email":"w13852770506@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/TenThousandOne?v=4","url":"https://github.com/TenThousandOne"}],"changelog":[{"hash":"578c3b3580b0235a4ee702400ab20707911db859","date":1736650294000,"email":"w13852770506@163.com","author":"TenThousandOne","message":"更新自底向上和LR(1)语法","commitUrl":"https://github.com/TenOne506/TenOne506.github.io/commit/578c3b3580b0235a4ee702400ab20707911db859"}]},"filePathRelative":"notes/compiler/EaC/3.解析器/5.构造LR(1)解析表.md"}');export{m as comp,h as data};
