import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' ,icon: 'flat-color-icons:home'},
  { text: '博客', link: '/blog/' ,icon: '/icons/blog.svg'},
  { text: '编译原理', link: '/notes/compiler/README.md',icon:"/icons/compilerexplorer.svg"},
  //'flat-color-icons:electronics'
  { text: '手撕算法题', link: '/notes/code/README.md',icon: '/icons/code.svg'},
  //{ text: '八股', link:'/notes/detail/README.md',icon: '/icons/interview.svg'},
  { text: '面试', link:'/notes/interview/README.md',icon: '/icons/interview.svg'},
  //{ text: '标签', link: '/blog/tags/' ,icon: 'material-symbols:label'},
  //{ text: '归档', link: '/blog/archives/' ,icon: 'flat-color-icons:library'},
  // {
  //   text: '笔记',
  //   icon: 'material-symbols:notes' ,
  //   items: [{ text: '手撕算法题', link: '/notes/code/README.md', },
  //           {text:'面试',link:'/notes/interview/README.md',}]
  // },
])
