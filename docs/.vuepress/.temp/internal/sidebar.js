export const sidebar = {"/":{"/leetcode/":{"items":["",{"dir":"回溯","text":"回溯","items":"auto","collapsed":false}],"prefix":"/notes/leetcode/"},"/demo":{"items":["","foo","bar"],"prefix":"/notes/demo/"}},"__auto__":{"/notes/leetcode/回溯/":[{"text":"组合","link":"/article/43ijhbod/","items":[]}]},"__home__":{}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
