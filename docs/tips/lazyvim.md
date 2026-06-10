---
title: vim 快捷键
createTime: 2026/06/10 20:16:55
permalink: /tipsissue/niupw4yj/
---


好的，以下是完整的 LazyVim 键盘映射中文文档，已处理好 Markdown 转义，确保不会出现 Vue 编译报错的问题。

---

# LazyVim 默认键盘映射速查表（中文版）

> 基于 https://www.lazyvim.org/keymaps  
> `<leader>` = `Space`（空格），`<localleader>` = `\`  
> 模式：`n`=普通 `v`=可视 `x`=可视行/块 `i`=插入 `t`=终端 `s`=选择 `c`=命令行

---

## 一、窗口导航与调整

| 快捷键       | 模式 | 说明                      |
| ------------ | ---- | ------------------------- |
| `<C-h>`      | n,t  | 跳转到左侧窗口            |
| `<C-j>`      | n,t  | 跳转到下方窗口            |
| `<C-k>`      | n,t  | 跳转到上方窗口            |
| `<C-l>`      | n,t  | 跳转到右侧窗口            |
| `<C-Up>`     | n    | 增加窗口高度              |
| `<C-Down>`   | n    | 减小窗口高度              |
| `<C-Left>`   | n    | 减小窗口宽度              |
| `<C-Right>`  | n    | 增加窗口宽度              |
| `<leader>-`  | n    | 水平分割窗口（`:split`）  |
| `<leader>\|` | n    | 垂直分割窗口（`:vsplit`） |
| `<leader>wd` | n    | 关闭当前窗口              |
| `<leader>wm` | n    | 切换窗口最大化            |
| `<leader>uZ` | n    | 切换窗口 Zoom             |
| `<leader>uz` | n    | 切换 Zen Mode             |

---

## 二、行移动

| 快捷键  | 模式  | 说明                   |
| ------- | ----- | ---------------------- |
| `<A-j>` | n,i,v | 向下移动当前行或选中行 |
| `<A-k>` | n,i,v | 向上移动当前行或选中行 |

---

## 三、Buffer（缓冲区）管理

| 快捷键       | 模式 | 说明                        |
| ------------ | ---- | --------------------------- |
| `<S-h>`      | n    | 上一个 Buffer               |
| `[b`         | n    | 上一个 Buffer               |
| `<S-l>`      | n    | 下一个 Buffer               |
| `]b`         | n    | 下一个 Buffer               |
| `<leader>bb` | n    | 切换到上一个使用的 Buffer   |
| `<leader>\`  | n    | 切换到上一个使用的 Buffer   |
| `<leader>bd` | n    | 删除当前 Buffer             |
| `<leader>bo` | n    | 删除其他 Buffer（保留当前） |
| `<leader>bi` | n    | 删除不可见的 Buffers        |
| `<leader>bD` | n    | 删除 Buffer 并关闭窗口      |
| `<leader>bl` | n    | 删除左侧 Buffers            |
| `<leader>br` | n    | 删除右侧 Buffers            |
| `<leader>bp` | n    | 切换 Buffer 固定（Pin）     |
| `<leader>bP` | n    | 删除所有未固定的 Buffers    |
| `<leader>bj` | n    | 选择 Buffer                 |

---

## 四、标签页管理

| 快捷键           | 模式 | 说明               |
| ---------------- | ---- | ------------------ |
| `<leader><tab>n` | n    | 新建标签页         |
| `<leader><tab>d` | n    | 关闭标签页         |
| `<leader><tab>[` | n    | 上一个标签页       |
| `<leader><tab>]` | n    | 下一个标签页       |
| `<leader><tab>f` | n    | 跳到第一个标签页   |
| `<leader><tab>l` | n    | 跳到最后一个标签页 |
| `<leader><tab>o` | n    | 关闭其他标签页     |

---

## 五、搜索与清除高亮

| 快捷键       | 模式    | 说明                                |
| ------------ | ------- | ----------------------------------- |
| `<Esc>`      | n,i,s   | 退出插入/终端模式，同时清除搜索高亮 |
| `<leader>ur` | n       | 重绘屏幕，清除搜索高亮，更新 Diff   |
| `n`          | n,x,o   | 下一个搜索结果（始终正向）          |
| `N`          | n,x,o   | 上一个搜索结果（始终反向）          |
| `<C-s>`      | i,x,n,s | 保存文件（`:w!`）                   |

---

## 六、文件查找与浏览

| 快捷键            | 模式 | 说明                                 |
| ----------------- | ---- | ------------------------------------ |
| `<leader><Space>` | n    | 查找文件（项目根目录）               |
| `<leader>ff`      | n    | 查找文件（项目根目录）               |
| `<leader>fF`      | n    | 查找文件（当前目录）                 |
| `<leader>fg`      | n    | 查找 Git 跟踪的文件                  |
| `<leader>fr`      | n    | 最近打开的文件                       |
| `<leader>,`       | n    | 切换或查找 Buffer                    |
| `<leader>/`       | n    | Grep 搜索文本（项目根目录）          |
| `<leader>sg`      | n    | Grep 搜索文本（项目根目录）          |
| `<leader>sG`      | n    | Grep 搜索文本（当前目录）            |
| `<leader>sw`      | n    | 搜索光标下的单词（项目根目录）       |
| `<leader>sW`      | n    | 搜索光标下的单词（当前目录）         |
| `<leader>ss`      | n    | 当前文件符号搜索                     |
| `<leader>sS`      | n    | 工作区符号搜索                       |
| `<leader>sh`      | n    | 搜索帮助文档                         |
| `<leader>sm`      | n    | 跳转到标记                           |
| `<leader>sR`      | n    | 恢复上一次搜索                       |
| `<leader>fn`      | n    | 新建空白文件                         |
| `<leader>fs`      | n    | 保存文件                             |
| `<leader>e`       | n    | 打开或聚焦文件树（Neo-tree，根目录） |
| `<leader>fe`      | n    | 打开或聚焦文件树（Neo-tree，根目录） |
| `<leader>E`       | n    | 打开文件树（当前目录）               |
| `<leader>fE`      | n    | 打开文件树（当前目录）               |
| `<leader>be`      | n    | 以 Buffer 模式浏览文件树             |

---

## 七、注释操作

| 快捷键 | 模式 | 说明                         |
| ------ | ---- | ---------------------------- |
| `gcc`  | n    | 注释或取消注释当前行         |
| `gc`   | n,x  | 注释选中区域                 |
| `gco`  | n    | 在下方新行添加注释           |
| `gcO`  | n    | 在上方新行添加注释           |
| `gcA`  | n    | 在行尾添加注释并进入插入模式 |

---

## 八、代码格式化与诊断

| 快捷键       | 模式 | 说明                       |
| ------------ | ---- | -------------------------- |
| `<leader>cf` | n,x  | 格式化当前文件或选区       |
| `<leader>cF` | n,x  | 格式化注入语言             |
| `<leader>cd` | n    | 显示当前行诊断详情         |
| `]d`         | n    | 下一个诊断                 |
| `[d`         | n    | 上一个诊断                 |
| `]e`         | n    | 下一个错误                 |
| `[e`         | n    | 上一个错误                 |
| `]w`         | n    | 下一个警告                 |
| `[w`         | n    | 上一个警告                 |
| `<leader>cl` | n    | 显示 LSP 信息              |
| `<leader>uf` | n    | 切换全局自动格式化         |
| `<leader>uF` | n    | 切换当前 Buffer 自动格式化 |

---

## 九、LSP 代码导航与操作

| 快捷键       | 模式 | 说明                      |
| ------------ | ---- | ------------------------- |
| `gd`         | n    | 跳转到定义                |
| `gD`         | n    | 跳转到声明                |
| `gr`         | n    | 查找引用                  |
| `gI`         | n    | 跳转到实现                |
| `gy`         | n    | 跳转到类型定义            |
| `K`          | n    | 悬停显示文档              |
| `gK`         | n    | 显示签名帮助              |
| `<C-k>`      | i    | 插入模式下显示签名帮助    |
| `<leader>ca` | n,x  | 代码操作                  |
| `<leader>cA` | n    | Source Action             |
| `<leader>cr` | n    | 重命名符号                |
| `<leader>cR` | n    | 重命名关联文件            |
| `<leader>cc` | n,x  | 执行 Code Lens            |
| `<leader>cC` | n,x  | 刷新并显示 Code Lens      |
| `[[`         | n    | 上一个 LSP 引用           |
| `]]`         | n    | 下一个 LSP 引用           |
| `<leader>co` | n    | 整理导入                  |
| `gai`        | n    | 调用传入（Call Incoming） |
| `gao`        | n    | 调用传出（Call Outgoing） |

---

## 十、Git 操作

| 快捷键        | 模式 | 说明                       |
| ------------- | ---- | -------------------------- |
| `<leader>gg`  | n    | 打开 Lazygit（项目根目录） |
| `<leader>gG`  | n    | 打开 Lazygit（当前目录）   |
| `<leader>gs`  | n    | Git 状态                   |
| `<leader>gc`  | n    | Git 提交记录               |
| `<leader>gb`  | n    | 当前行 Git Blame           |
| `<leader>gf`  | n    | 当前文件 Git 历史          |
| `<leader>gl`  | n    | 当前文件 Git 日志          |
| `<leader>gL`  | n    | 当前目录 Git 日志          |
| `<leader>gB`  | n,x  | 在浏览器中打开仓库 URL     |
| `<leader>gY`  | n,x  | 复制仓库 URL               |
| `]c`          | n    | 下一个 Git Hunk            |
| `[c`          | n    | 上一个 Git Hunk            |
| `<leader>ghs` | n,x  | Stage Hunk                 |
| `<leader>ghr` | n,x  | Reset Hunk                 |
| `<leader>ghp` | n    | 预览 Hunk                  |

---

## 十一、UI 开关切换

| 快捷键       | 说明                    |
| ------------ | ----------------------- |
| `<leader>us` | 切换拼写检查            |
| `<leader>uw` | 切换自动折行            |
| `<leader>ul` | 切换行号显示            |
| `<leader>uL` | 切换相对行号            |
| `<leader>ud` | 切换诊断显示            |
| `<leader>uc` | 切换 Conceal 等级       |
| `<leader>uT` | 切换 Treesitter 高亮    |
| `<leader>uh` | 切换 Inlay Hints        |
| `<leader>ua` | 切换动画                |
| `<leader>ug` | 切换缩进参考线          |
| `<leader>uS` | 切换平滑滚动            |
| `<leader>ub` | 切换暗色背景            |
| `<leader>uD` | 切换变暗效果            |
| `<leader>uC` | 带预览切换主题          |
| `<leader>ut` | 切换 Treesitter Context |
| `<leader>un` | 忽略所有通知            |
| `<leader>up` | 切换自动配对            |

---

## 十二、Quickfix / Location List / Trouble

| 快捷键       | 模式 | 说明                         |
| ------------ | ---- | ---------------------------- |
| `<leader>xq` | n    | 打开 Quickfix List           |
| `<leader>xl` | n    | 打开 Location List           |
| `<leader>xx` | n    | Trouble：当前文档诊断        |
| `<leader>xX` | n    | Trouble：工作区诊断          |
| `[q`         | n    | 上一个 Quickfix / Trouble 项 |
| `]q`         | n    | 下一个 Quickfix / Trouble 项 |

---

## 十三、终端

| 快捷键       | 模式 | 说明                       |
| ------------ | ---- | -------------------------- |
| `<leader>ft` | n    | 打开浮动终端（项目根目录） |
| `<leader>fT` | n    | 打开浮动终端（当前目录）   |
| `<C-\>`      | n,t  | 聚焦或打开终端（根目录）   |
| `<Esc><Esc>` | t    | 退出终端插入模式           |

---

## 十四、杂项

| 快捷键       | 模式  | 说明                         |
| ------------ | ----- | ---------------------------- |
| `<leader>l`  | n     | 打开 Lazy 插件管理面板       |
| `<leader>L`  | n     | LazyVim 更新日志             |
| `<leader>K`  | n     | 关键字帮助                   |
| `<leader>ui` | n     | 查看高亮组                   |
| `<leader>uI` | n     | 查看高亮树                   |
| `<leader>qq` | n     | 退出所有窗口                 |
| `<leader>cm` | n     | 打开 Mason（LSP/DAP 管理器） |
| `<leader>sr` | n,x   | 搜索并替换                   |
| `s`          | n,o,x | Flash 搜索                   |
| `S`          | n,o,x | Flash Treesitter 搜索        |
| `<C-Space>`  | n,x   | Treesitter 增量选择（扩展）  |
| `<BS>`       | x     | Treesitter 递减选择          |

<!-- ---

> **注意**：部分快捷键依赖额外的插件（如 yanky、dap、trouble 等），未启用对应插件时不生效。  
> 如需自定义快捷键，请在 `~/.config/nvim/lua/config/keymaps.lua` 中使用 `vim.keymap.set()` 进行覆盖或新增。 -->