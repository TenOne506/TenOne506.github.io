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
  dir  : 'leetcode',
  link : 'leetcode',
  sidebar : [
    '',
    {
      dir:"回溯",
      text: "回溯",
      items:'auto',
      collapsed: false,
    },
  ]
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [leetcode,demoNote],
})
// export default defineNotesConfig({
//   dir: '/notes/',
//   link: '/',
//   notes:[leetcode]
// })
