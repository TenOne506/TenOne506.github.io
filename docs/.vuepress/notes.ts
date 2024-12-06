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
  link : '/leetcode/',
  dir  : 'leetcode',
  text : '手撕算法',
  sidebar : [
    
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
  ]
})
const interview = defineNoteConfig({
  link:'/interview/',
  dir : 'interview',
  sidebar :'auto'
})
export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [leetcode,interview],
})
// export default defineNotesConfig({
//   dir: '/notes/',
//   link: '/',
//   notes:[leetcode]
// })
