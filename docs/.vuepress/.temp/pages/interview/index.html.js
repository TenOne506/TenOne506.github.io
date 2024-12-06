import comp from "D:/Blog/docs/.vuepress/.temp/pages/interview/index.html.vue"
const data = JSON.parse("{\"path\":\"/interview/\",\"title\":\"interview\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"interview\",\"createTime\":\"2024/12/06 15:55:23\",\"permalink\":\"/interview/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.08,\"words\":23},\"filePathRelative\":\"notes/interview/README.md\",\"bulletin\":false}")
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
