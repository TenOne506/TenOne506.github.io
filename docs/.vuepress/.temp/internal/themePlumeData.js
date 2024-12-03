export const themeData = {"locales":{"/":{"selectLanguageName":"简体中文","selectLanguageText":"选择语言","appearanceText":"外观","lightModeSwitchTitle":"切换为浅色主题","darkModeSwitchTitle":"切换为深色主题","outlineLabel":"此页内容","returnToTopLabel":"返回顶部","editLinkText":"编辑此页","contributorsText":"贡献者","prevPageLabel":"上一页","nextPageLabel":"下一页","lastUpdatedText":"最后更新于","changelogText":"变更历史","changelogOnText":"于","changelogButtonText":"查看全部变更历史","copyrightText":"版权所有","copyrightAuthorText":"版权归属：","copyrightCreationOriginalText":"本文链接：","copyrightCreationTranslateText":"本文翻译自：","copyrightCreationReprintText":"本文转载自：","copyrightLicenseText":"许可证：","notFound":{"code":"404","title":"页面未找到","quote":"但是，如果你不改变方向，并且一直寻找，最终可能会到达你要去的地方。","linkText":"返回首页"},"homeText":"首页","blogText":"博客","tagText":"标签","archiveText":"归档","categoryText":"分类","archiveTotalText":"{count} 篇","encryptButtonText":"确认","encryptPlaceholder":"请输入密码","encryptGlobalText":"本站只允许密码访问","encryptPageText":"本页面只允许密码访问","footer":{"message":"Powered by <a target=\"_blank\" href=\"https://v2.vuepress.vuejs.org/\">VuePress</a> & <a target=\"_blank\" href=\"https://theme-plume.vuejs.press\">vuepress-theme-plume</a>"},"changelog":{"maxCount":10,"repoUrl":"https://github.com/TenOne506/TenOne506.github.io","commitUrlPattern":":repo/commit/:hash","issueUrlPattern":":repo/issues/:issue","tagUrlPattern":":repo/releases/tag/:tag"},"logo":"https://theme-plume.vuejs.press/plume.png","docsRepo":"","docsDir":"docs","profile":{"avatar":"avatar.jpg","name":"Peter Park","description":"天下谁人不识君","circle":true,"location":"中国","organization":"HIT","layout":"right"},"social":[{"icon":"github","link":"https://github.com/TenOne506/"},{"icon":"qq","link":"/"}],"navbar":[{"text":"首页","link":"/","icon":"flat-color-icons:home"},{"text":"博客","link":"/blog/","icon":"flat-color-icons:view-details"},{"text":"标签","link":"/blog/tags/","icon":"material-symbols:label"},{"text":"归档","link":"/blog/archives/","icon":"flat-color-icons:library"},{"text":"笔记","icon":"material-symbols:notes","items":[{"text":"手撕算法题","link":"/notes/leetcode/README.md"},{"text":"demo","link":"/notes/demo/README.md"}]}]}},"appearance":true,"blog":{"pagination":15,"postList":true,"tags":true,"archives":true,"categories":true,"link":"/blog/","tagsLink":"/blog/tags/","archivesLink":"/blog/archives/","categoriesLink":"/blog/categories/"},"navbarSocialInclude":["github","twitter","discord","facebook"],"aside":true,"outline":[2,3],"externalLinkIcon":true,"editLink":true,"contributors":true,"changelog":true,"prevPage":true,"nextPage":true,"footer":{"message":"Power by <a target=\"_blank\" href=\"https://v2.vuepress.vuejs.org/\">VuePress</a> & <a target=\"_blank\" href=\"https://theme-plume.vuejs.press\">vuepress-theme-plume</a>"},"logo":"https://theme-plume.vuejs.press/plume.png","docsRepo":"","docsDir":"docs","profile":{"avatar":"avatar.jpg","name":"Peter Park","description":"天下谁人不识君","circle":true,"location":"中国","organization":"HIT","layout":"right"},"social":[{"icon":"github","link":"https://github.com/TenOne506/"},{"icon":"qq","link":"/"}]}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
