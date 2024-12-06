export const blogPostData = [{"path":"/article/vwx36sni/","title":"矩阵乘法从0开始优化到cutlas","categoryList":[{"id":"0aa0be","sort":10001,"name":"gpu"}],"tags":["gpu"],"createTime":"2024/12/02 18:48:42","lang":"zh-CN","excerpt":""},{"path":"/article/cre8vxts/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["markdown"],"createTime":"2024/12/01 20:49:15","lang":"zh-CN","excerpt":""},{"path":"/article/b4qf25le/","title":"自定义组件","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["预览","组件"],"createTime":"2024/12/01 20:49:15","lang":"zh-CN","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
