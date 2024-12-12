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
const compiler = defineNoteConfig({
  link:'/compiler/',
  dir : 'compiler',
  sidebar :[
    '',
    {
      dir :'LLVM',
      //link:'面试',
      text : 'LLVM',
      items:'auto',
      collapsed:false
    }
  ]
})
export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [leetcode,interview,compiler],
})
// export default defineNotesConfig({
//   dir: '/notes/',
//   link: '/',
//   notes:[leetcode]
// })
