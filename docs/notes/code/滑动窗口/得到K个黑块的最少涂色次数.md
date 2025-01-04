---
title: 得到K个黑块的最少涂色次数
createTime: 2025/01/04 21:53:23
permalink: /code/cc0i3555/
---
## [得到K个黑块的最少涂色次数](https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks/description/)

给你一个长度为`n`下标从`0`开始的字符串`blocks`，`blocks[i]`要么是`W`要么是`B`，表示第`i`块的颜色。字符`W`和`B`分别表示白色和黑色。

给你一个整数`k`，表示想要 **连续** 黑色块的数目。

每一次操作中，你可以选择一个白色块将它 涂成 黑色块。

请你返回至少出现一次连续`k`个黑色块的 **最少** 操作次数。

::: demo-wrapper
示例 1：\
输入：blocks = "WBBWWBBWBW", k = 7\
输出：3\
解释：\
一种得到 7 个连续黑色块的方法是把第 0 ，3 和 4 个块涂成黑色。\
得到 blocks = "BBBBBBBWBW" 。\
可以证明无法用少于 3 次操作得到 7 个连续的黑块。\
所以我们返回 3 。\
示例 2：\
输入：blocks = "WBWBBBW", k = 2\
输出：0\
解释：\
不需要任何操作，因为已经有 2 个连续的黑块。
所以我们返回 0 。
:::

这题思路其实也是滑动窗口，但是需要注意的是，需要记录窗口中白色块的数量，然后每次移动窗口时，需要更新窗口中需要涂黑的白色块的数量。
其中可以优化的点，就是在里面如何少用if判断。if判断会影响程序的性能。

对于本题，可以把 `W` 看成 1，把 `B` 看成 0，这恰好是它们 ASCII 码二进制最低位的值。其中，`W` 的 ASCII 码为 87，`B` 的 ASCII 码为 66。

但是这种优化方法往往会降低可读性，尽量不要在业务代码中使用。

```c++
class Solution {
public:
  int minimumRecolors(string blocks, int k) {
    int cntw =0;
    for(int i=0;i<k;++i){
      cntw += blocks[i] & 1;//计算W涂黑的操作
    }
    int res = cntw;
    for(int i = k;i<blocks.size();++i){
      cntw +=(blocks[i]&1) - (blocks[i-k]&1);
      res=min(res,cntw);
    }
    return res;
  }
};
```