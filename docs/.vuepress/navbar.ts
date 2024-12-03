import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' ,icon: 'flat-color-icons:home'},
  { text: '博客', link: '/blog/' ,icon: 'flat-color-icons:view-details'},
  { text: '标签', link: '/blog/tags/' ,icon: 'material-symbols:label'},
  { text: '归档', link: '/blog/archives/' ,icon: 'flat-color-icons:library'},
  {
    text: '笔记',
    icon: 'material-symbols:notes' ,
    items: [{ text: '手撕算法题', link: '/notes/leetcode/README.md', },
            {text:'demo',link:'/notes/demo/README.md',}]
  },
])
