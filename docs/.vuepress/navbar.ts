/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  { text: '搜索引擎', link: '/searchengine/README.md',icon: '/icons/search.svg'},
  { text: '编译原理', link: '/compiler/README.md',icon:"/icons/compilerexplorer.svg"},
  { text: '手撕算法题', link: '/code/README.md',icon: '/icons/code.svg'},
  { text: '面试', link:'/interview/README.md',icon: '/icons/interview.svg'},
])
