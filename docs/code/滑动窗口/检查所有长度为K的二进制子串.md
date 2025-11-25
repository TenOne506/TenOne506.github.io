---
title: 检查所有长度为K的二进制子串
createTime: 2025/01/05 19:34:45
permalink: /code/xgswn7ui/
---
## [检查所有长度为K的二进制子串](https://leetcode.cn/problems/check-if-a-string-contains-all-binary-codes-of-size-k/description/)

给你一个二进制字符串`s`和一个整数`k`。如果所有长度为`k`的二进制字符串都是`s`的子串，请返回`true`，否则请返回`false`。

::: demo-wrapper
示例 1：\
输入：s = "00110110", k = 2\
输出：true\
解释：长度为 2 的二进制串包括 "00"，"01"，"10" 和 "11"。它们分别是 s 中下标为 0，1，3，2 开始的长度为 2 的子串。\
示例 2：\
输入：s = "0110", k = 1\
输出：true\
解释：长度为 1 的二进制串包括 "0" 和 "1"，显然它们都是 s 的子串。\
示例 3：\
输入：s = "0110", k = 2\
输出：false\
解释：长度为 2 的二进制串 "00" 没有出现在 s 中。
:::

这题显然也是滑动窗口，以 $k$ 的长度进行滑动窗口，然后判断窗口中的字符串是否在 $s$ 中出现过。这个判断可以使用 $unordered\_set$ 来实现。最后判断 $set$ 的长度是否为 $2^k$。

```c++
class Solution {
public:
  bool hasAllCodes(string s, int k) {
    unordered_set<string> set;
    for(int i = 0; i + k <= s.size(); i ++){
      set.insert(s.substr(i, k));
    } 
    return set.size() == (1 << k);
  }
};
```