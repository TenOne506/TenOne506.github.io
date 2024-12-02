import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { codeToTokens } from 'shiki'
export default defineUserConfig({
	base: '/',
	lang: 'zh-CN',
	title: 'My Blog',
	description: 'My Blog',

	bundler: viteBundler(),

	theme: plumeTheme({
		// 添加您的部署域名
		// hostname: 'https://your_site_url',
		profile: {
      name: 'Wyf',
      description: 'AAHPH',
      avatar: '/blogger.png',
      location: '您的位置',
      organization: 'HIT',
      circle: true, // 是否为圆形头像
      layout: 'right'// 个人信息在左侧还是右侧，'left' | 'right'
    },
		changelog: {
      maxCount: 10,
      repoUrl: 'https://github.com/TenOne506/TenOne506.github.io',
      commitUrlPattern: ':repo/commit/:hash',
      issueUrlPattern: ':repo/issues/:issue',
      tagUrlPattern: ':repo/releases/tag/:tag'
    },
		plugins: {
			git: process.env.NODE_ENV === 'production',
			/**
			 * Shiki 代码高亮
			 * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
			 */
			shiki: {
				theme: { light: 'vitesse-light', dark: 'vitesse-dark' },
				//强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
				languages: ['shell', 'bash', 'c++', 'c','python'],
			},

			/**
			 * markdown enhance
			 * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
			 */
			markdownEnhance: {
				demo: true,
			//   include: true,
			//   chart: true,
			//   echarts: true,
			//   mermaid: true,
			//   flowchart: true,
			},

			/**
			 *  markdown power
			 * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
			 */
			// markdownPower: {
			//   pdf: true,
			//   caniuse: true,
			//   plot: true,
			//   bilibili: true,
			//   youtube: true,
			//   icons: true,
			//   codepen: true,
			//   replit: true,
			//   codeSandbox: true,
			//   jsfiddle: true,
			//   repl: {
			//     go: true,
			//     rust: true,
			//     kotlin: true,
			//   },
			// },

			/**
			 * 评论 comments
			 * @see https://theme-plume.vuejs.press/guide/features/comments/
			 */
			// comment: {
			//   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
			//   comment: true,
			//   repo: '',
			//   repoId: '',
			//   categoryId: '',
			//   mapping: 'pathname',
			//   reactionsEnabled: true,
			//   inputPosition: 'top',
			// },
		},
	}),
})
