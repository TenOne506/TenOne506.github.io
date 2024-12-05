import comp from "D:/Blog/docs/.vuepress/.temp/pages/notes/leetcode/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/leetcode/\",\"title\":\"记录平时联系和面试所做的力扣算法题\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"notes/leetcode/README.md\",\"bulletin\":false}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
