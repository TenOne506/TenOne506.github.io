import comp from "D:/Blog/docs/.vuepress/.temp/pages/aghnkups/index.html.vue"
const data = JSON.parse("{\"path\":\"/aghnkups/\",\"title\":\"test\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"test\",\"createTime\":\"2024/12/06 16:22:24\",\"permalink\":\"/aghnkups/\"},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":9},\"filePathRelative\":\"notes/interview/test.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10002,\"name\":\"notes\"},{\"id\":\"fe1bf4\",\"sort\":10004,\"name\":\"interview\"}],\"bulletin\":false}")
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
