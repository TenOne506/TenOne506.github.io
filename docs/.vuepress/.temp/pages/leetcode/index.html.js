import comp from "D:/Blog/docs/.vuepress/.temp/pages/leetcode/index.html.vue"
const data = JSON.parse("{\"path\":\"/leetcode/\",\"title\":\"记录平时练习和面试所做的力扣算法题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"记录平时练习和面试所做的力扣算法题\",\"createTime\":\"2024/12/05 20:22:37\",\"permalink\":\"/leetcode/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.76,\"words\":229},\"filePathRelative\":\"notes/leetcode/README.md\",\"bulletin\":false}")
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
