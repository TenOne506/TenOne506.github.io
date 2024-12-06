import comp from "D:/Blog/docs/.vuepress/.temp/pages/article/9shpgofj/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/9shpgofj/\",\"title\":\"test\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"test\",\"createTime\":\"2024/12/06 14:53:43\",\"permalink\":\"/article/9shpgofj/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":9},\"filePathRelative\":\"c++/test.md\",\"categoryList\":[{\"id\":\"6ce809\",\"sort\":10006,\"name\":\"c++\"}],\"bulletin\":false}")
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
