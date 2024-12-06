import comp from "D:/Blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"tintPlate\":{\"r\":{\"value\":220,\"offset\":36},\"g\":{\"value\":220,\"offset\":36},\"b\":{\"value\":220,\"offset\":36}},\"bannerMask\":{\"light\":0.1,\"dark\":0.3},\"hero\":{\"name\":\"研究生自救之路\",\"tagline\":\"救赎之道，就在其中\",\"text\":\"预计在未来一年学习和找工作期间更新笔记。\",\"actions\":[{\"theme\":\"brand\",\"text\":\"记录\",\"link\":\"/blog/\"},{\"theme\":\"alt\",\"text\":\"Github →\",\"link\":\"https://github.com/TenOne506\"}]}}]},\"headers\":[],\"readingTime\":{\"minutes\":0.32,\"words\":97},\"filePathRelative\":\"README.md\",\"categoryList\":[],\"bulletin\":false}")
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
