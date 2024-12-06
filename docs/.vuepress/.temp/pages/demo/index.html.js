import comp from "D:/Blog/docs/.vuepress/.temp/pages/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/\",\"title\":\"Demo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Demo\",\"createTime\":\"2024/12/01 20:49:15\",\"permalink\":\"/demo/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":13},\"filePathRelative\":\"notes/demo/README.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10002,\"name\":\"notes\"},{\"id\":\"c19f38\",\"sort\":10003,\"name\":\"demo\"}],\"bulletin\":false}")
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
