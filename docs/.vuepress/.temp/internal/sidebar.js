export const sidebar = {"/":{"/leetcode/":{"items":[{"dir":"回溯","text":"回溯","items":"auto","collapsed":false},{"dir":"数组","text":"数组","items":"auto","collapsed":false}],"prefix":"/notes/leetcode/"},"/interview/":{"items":"auto","prefix":"/notes/interview/"}},"__auto__":{"/notes/leetcode/回溯/":[],"/notes/leetcode/数组/":[],"/notes/interview/":[{"text":"1","link":"/nsxkvzg9/","items":[]}]},"__home__":{}}

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
