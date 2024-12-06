import './iconify.css'
export const icons = {"flat-color-icons:home":"vpi-4kfi72ep bg","flat-color-icons:view-details":"vpi-29kdx3kj bg","flat-color-icons:library":"vpi-2e72j7s2 bg","skill-icons:vscode-dark":"vpi-m7fwit5o bg","skill-icons:twitter":"vpi-vseekpm2 bg","skill-icons:github-dark":"vpi-c3xjcgsg bg","material-symbols:home":"vpi-4xxcjfpd","material-symbols:label":"vpi-bbo8a8np","material-symbols:notes":"vpi-mdlo1aiq"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateIcons) {
    __VUE_HMR_RUNTIME__.updateIcons(icons)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ icons }) => {
    __VUE_HMR_RUNTIME__.updateIcons(icons)
  })
}
