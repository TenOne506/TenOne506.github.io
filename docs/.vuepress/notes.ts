import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'
//import leetcode from '../notes/1.LeetCode'
const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})
// export const notes = defineNotesConfig({
//   dir: 'notes',
//   link: '/',
//   notes: [demoNote],
// })
const leetcode = defineNoteConfig({
  link : '/code/',
  dir  : 'code',
  text : '手撕算法',
  sidebar : [
    '',
    {
      dir:"回溯",
      //link :"/leetcode",
      text: "回溯",
      items:'auto',
      collapsed: false,
    },
    {
      dir:"数组",
      //link :"/leetcode",
      text: "数组",
      items:'auto',
      collapsed: false,
    },
    {
      dir:"动态规划",
      //link :"/leetcode",
      text: "动态规划",
      items:'auto',
      collapsed: false,
    },
    {
      dir:"贪心",
      //link :"/leetcode",
      text: "贪心",
      items:'auto',
      collapsed: false,
    },
    {
      dir:"单调队列",
      //link :"/leetcode",
      text: "单调队列",
      items:'auto',
      collapsed: false,
    },
    {
      dir:"哈希",
      //link :"/leetcode",
      text: "哈希",
      items:'auto',
      collapsed: false,
    },
    {
      dir:"滑动窗口",
      //link :"/leetcode",
      text: "滑动窗口",
      items:'auto',
      collapsed: false,
    },
  ]
})
const interview = defineNoteConfig({
  link:'/interview/',
  dir : 'interview',
  sidebar :[
    '',
    {
      dir :'',
      //link:'面试',
      text : '面试',
      items:'auto',
      //collapsed:false
    }
  ]
})

const detail = defineNoteConfig({
  link:'/detail/',
  dir : 'detail',
  sidebar :[
    '',
    {
      dir :'',
      //link:'面试',
      text : '八股',
      items:'auto',
      //collapsed:false
    }
  ]
})
const compiler = defineNoteConfig({
  link:'/compiler/',
  dir : 'compiler',
  sidebar :[
    '',
    {
      dir :'EaC',
      //link:'面试',
      text : 'Eac',
      items:'auto',
      collapsed:true
    },
    {
      dir :'LLVM',
      //link:'面试',
      text : 'LLVM',
      items:'auto',
      collapsed:true
    }
    
  ]
})

const searchengine = defineNoteConfig({
  link: '/searchengine/',
  dir: 'searchengine',
  sidebar: [
    '',  // README.md
    { 
      dir :'',
      text: '搜索',
      items: 'auto',  // 自动生成当前目录下的条目
      collapsed: true
    }
  ]
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [leetcode,interview,compiler,searchengine],
})
// export default defineNotesConfig({
//   dir: '/notes/',
//   link: '/',
//   notes:[leetcode]
// })
