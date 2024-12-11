import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' ,icon: 'flat-color-icons:home'},
  { text: '博客', link: '/blog/' ,icon: 'flat-color-icons:view-details'},
  { text: '编译原理', link: '/notes/compiler/README.md',icon: 'flat-color-icons:electronics'},
  { text: '手撕算法题', link: '/notes/code/README.md',icon: 'flat-color-icons:command-line'},
  { text: '面试', link:'/notes/interview/README.md',icon: 'flat-color-icons:faq'},
  //{ text: '标签', link: '/blog/tags/' ,icon: 'material-symbols:label'},
  //{ text: '归档', link: '/blog/archives/' ,icon: 'flat-color-icons:library'},
  // {
  //   text: '笔记',
  //   icon: 'material-symbols:notes' ,
  //   items: [{ text: '手撕算法题', link: '/notes/code/README.md', },
  //           {text:'面试',link:'/notes/interview/README.md',}]
  // },
])
