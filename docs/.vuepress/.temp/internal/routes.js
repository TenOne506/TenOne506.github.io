export const redirects = JSON.parse("{\"/gpu/%E7%9F%A9%E9%98%B5%E4%B9%98%E6%B3%95%E4%BB%8E0%E5%BC%80%E5%A7%8B%E4%BC%98%E5%8C%96%E5%88%B0cutlas.html\":\"/article/vwx36sni/\",\"/preview/custom-component.example.html\":\"/article/b4qf25le/\",\"/preview/markdown.html\":\"/article/cre8vxts/\",\"/notes/demo/bar.html\":\"/demo/g2tvk6f4/\",\"/notes/demo/foo.html\":\"/demo/2mscnzci/\",\"/notes/demo/\":\"/demo/\",\"/notes/leetcode/\":\"/leetcode/\",\"/notes/interview/\":\"/interview/u4pv3qyp/\",\"/notes/interview/%E5%8D%93%E9%A9%AD%E9%AB%98%E6%80%A7%E8%83%BD%E8%AE%A1%E7%AE%97.html\":\"/interview/9eed5kmb/\",\"/notes/interview/%E5%AD%97%E8%8A%82%E5%B9%BF%E5%91%8A%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84.html\":\"/interview/dmf8vxec/\",\"/notes/interview/%E5%B0%8F%E7%B1%B3%E8%AE%AD%E7%BB%83%E6%A1%86%E6%9E%B6%E4%BC%98%E5%8C%96.html\":\"/interview/gyx9gbc0/\",\"/notes/interview/%E5%B0%8F%E7%BA%A2%E4%B9%A6%E8%AE%AD%E7%BB%83%E6%8E%A8%E7%90%86%E5%BC%95%E6%93%8E.html\":\"/interview/qlzo21lh/\",\"/notes/leetcode/%E5%9B%9E%E6%BA%AF/%E7%BB%84%E5%90%88.html\":\"/leetcode/43ijhbod/\",\"/notes/leetcode/%E6%95%B0%E7%BB%84/%E5%88%A0%E9%99%A4%E6%95%B0%E7%BB%84%E4%B8%AD%E9%87%8D%E5%A4%8D%E9%A1%B9.html\":\"/leetcode/dnzgzwfx/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/vwx36sni/", { loader: () => import(/* webpackChunkName: "article_vwx36sni_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/article/vwx36sni/index.html.js"), meta: {"title":"矩阵乘法从0开始优化到cutlas"} }],
  ["/article/b4qf25le/", { loader: () => import(/* webpackChunkName: "article_b4qf25le_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/article/b4qf25le/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/cre8vxts/", { loader: () => import(/* webpackChunkName: "article_cre8vxts_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/article/cre8vxts/index.html.js"), meta: {"title":"Markdown"} }],
  ["/demo/g2tvk6f4/", { loader: () => import(/* webpackChunkName: "demo_g2tvk6f4_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/demo/g2tvk6f4/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/2mscnzci/", { loader: () => import(/* webpackChunkName: "demo_2mscnzci_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/demo/2mscnzci/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/leetcode/", { loader: () => import(/* webpackChunkName: "leetcode_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/leetcode/index.html.js"), meta: {"title":"记录平时练习和面试所做的力扣算法题"} }],
  ["/interview/u4pv3qyp/", { loader: () => import(/* webpackChunkName: "interview_u4pv3qyp_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/interview/u4pv3qyp/index.html.js"), meta: {"title":"面经"} }],
  ["/interview/9eed5kmb/", { loader: () => import(/* webpackChunkName: "interview_9eed5kmb_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/interview/9eed5kmb/index.html.js"), meta: {"title":"卓驭高性能计算"} }],
  ["/interview/dmf8vxec/", { loader: () => import(/* webpackChunkName: "interview_dmf8vxec_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/interview/dmf8vxec/index.html.js"), meta: {"title":"字节广告系统架构"} }],
  ["/interview/gyx9gbc0/", { loader: () => import(/* webpackChunkName: "interview_gyx9gbc0_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/interview/gyx9gbc0/index.html.js"), meta: {"title":"小米训练框架优化"} }],
  ["/interview/qlzo21lh/", { loader: () => import(/* webpackChunkName: "interview_qlzo21lh_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/interview/qlzo21lh/index.html.js"), meta: {"title":"小红书训练推理引擎"} }],
  ["/leetcode/43ijhbod/", { loader: () => import(/* webpackChunkName: "leetcode_43ijhbod_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/leetcode/43ijhbod/index.html.js"), meta: {"title":"组合"} }],
  ["/leetcode/dnzgzwfx/", { loader: () => import(/* webpackChunkName: "leetcode_dnzgzwfx_index.html" */"D:/Blog/docs/.vuepress/.temp/pages/leetcode/dnzgzwfx/index.html.js"), meta: {"title":"删除数组中重复项"} }],
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
