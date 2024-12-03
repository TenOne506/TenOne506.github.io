export const redirects = JSON.parse("{\"/gpu/%E7%9F%A9%E9%98%B5%E4%B9%98%E6%B3%95%E4%BB%8E0%E5%BC%80%E5%A7%8B%E4%BC%98%E5%8C%96%E5%88%B0cutlas.html\":\"/article/vwx36sni/\",\"/interviwew/%E5%AE%9E%E4%B9%A0%E9%9D%A2%E7%BB%8F.html\":\"/article/nj965itp/\",\"/preview/custom-component.example.html\":\"/article/b4qf25le/\",\"/preview/markdown.html\":\"/article/cre8vxts/\",\"/notes/demo/bar.html\":\"/demo/g2tvk6f4/\",\"/notes/demo/foo.html\":\"/demo/2mscnzci/\",\"/notes/demo/\":\"/demo/\",\"/notes/leetcode/\":\"/leetcode/\",\"/notes/leetcode/%E5%9B%9E%E6%BA%AF/%E7%BB%84%E5%90%88.html\":\"/article/43ijhbod/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/vwx36sni/", { loader: () => import(/* webpackChunkName: "article_vwx36sni_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/article/vwx36sni/index.html.js"), meta: {"title":"矩阵乘法从0开始优化到cutlas"} }],
  ["/article/nj965itp/", { loader: () => import(/* webpackChunkName: "article_nj965itp_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/article/nj965itp/index.html.js"), meta: {"title":"实习面经"} }],
  ["/article/b4qf25le/", { loader: () => import(/* webpackChunkName: "article_b4qf25le_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/article/b4qf25le/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/cre8vxts/", { loader: () => import(/* webpackChunkName: "article_cre8vxts_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/article/cre8vxts/index.html.js"), meta: {"title":"Markdown"} }],
  ["/demo/g2tvk6f4/", { loader: () => import(/* webpackChunkName: "demo_g2tvk6f4_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/demo/g2tvk6f4/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/2mscnzci/", { loader: () => import(/* webpackChunkName: "demo_2mscnzci_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/demo/2mscnzci/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/leetcode/", { loader: () => import(/* webpackChunkName: "leetcode_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/leetcode/index.html.js"), meta: {"title":"记录平时练习和面试所做的力扣算法题"} }],
  ["/article/43ijhbod/", { loader: () => import(/* webpackChunkName: "article_43ijhbod_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/article/43ijhbod/index.html.js"), meta: {"title":"组合"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
