import comp from "D:/Blog/docs/.vuepress/.temp/pages/notes/interview/1test.html.vue"
const data = JSON.parse("{\"path\":\"/notes/interview/1test.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"notes/interview/1test.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10002,\"name\":\"notes\"},{\"id\":\"fe1bf4\",\"sort\":10004,\"name\":\"interview\"}],\"bulletin\":false}")
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
