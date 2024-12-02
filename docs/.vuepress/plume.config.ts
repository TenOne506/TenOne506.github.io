import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',
  // your git repo url
  docsRepo: '',
  docsDir: 'docs',

  appearance: true,

	profile: {
    
    avatar: 'plume.svg',
    name: 'mit wyf',
    description: 'AAHPH',
    circle: true,
    location: '中国',
    organization: '哈尔滨工业大学',
    layout: 'right',
  },

  navbar,
  notes,
  social: [
    { icon: 'github', link: 'https://github.com/TenOne506/' },
  ],

})
