import './iconify.css'
export const icons = {"skill-icons:github-dark":"vpi-vmdqhlhh bg","material-symbols:home":"vpi-h7pndd6y","skill-icons:vscode-dark":"vpi-sppmn20t bg","skill-icons:twitter":"vpi-khdf9ywl bg","flat-color-icons:home":"vpi-nb4x2wie bg","flat-color-icons:view-details":"vpi-wk96s5gt bg","material-symbols:label":"vpi-i58n31b2","material-symbols:notes":"vpi-psq3o6po","flat-color-icons:library":"vpi-khnt9l12 bg"}

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
