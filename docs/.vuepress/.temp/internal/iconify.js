import './iconify.css'
export const icons = {"material-symbols:home":"vpi-psh0o6kd","skill-icons:vscode-dark":"vpi-eyz7ink9 bg","skill-icons:twitter":"vpi-r0s0a0vk bg","skill-icons:github-dark":"vpi-5c7sqxm7 bg","flat-color-icons:home":"vpi-omn5ayin bg","flat-color-icons:view-details":"vpi-3j9shn06 bg","material-symbols:label":"vpi-e49wvgmg","flat-color-icons:library":"vpi-vtn1kpr3 bg","material-symbols:notes":"vpi-mpgssoyz"}

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
