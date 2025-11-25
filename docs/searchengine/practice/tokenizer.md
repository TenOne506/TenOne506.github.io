---
title: 分词器
createTime: 2025/07/15 23:35:50
permalink: /searchengine/lva6x9x6/
---

搜索引擎里需要集成一个分词器，现在还差一个用户词典的功能。主要的考量是效率的问题，加入词典有十万个词，怎么匹配最快。因此选择了基于double-array 的trie 树。并且添加了tail_指针，拓展成为了AC自动机。