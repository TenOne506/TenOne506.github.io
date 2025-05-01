import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
//import { codeToTokens } from 'shiki'
import {notes} from './notes'
export default defineUserConfig({
	base: '/',
	lang: 'zh-CN',
	title: '我的大学',
	description: 'My Blog',
	shouldPrefetch:true,
	bundler: viteBundler(),
	head : [
		['link', { rel: 'icon', href: '/icons/spider-man.svg' }],
		['meta', { name: 'author', content: 'TenOne506' }],
		['meta', { name: 'keywords', content: 'My Blog And Notes' }],
	],
	theme: plumeTheme({
		// 添加您的部署域名
		// hostname: 'https://your_site_url',
	notes,
	changelog: {
      maxCount: 1,
      repoUrl: 'https://github.com/TenOne506/TenOne506.github.io',
      commitUrlPattern: ':repo/commit/:hash',
      issueUrlPattern: ':repo/issues/:issue',
      tagUrlPattern: ':repo/releases/tag/:tag'
    },
	codeHighlighter: {
		themes: {
			light: 'everforest-light',
			dark: 'houston',
		},
		//theme:{ light: 'github-light', dark: 'github-dark' },
		//theme: { light: 'github-light', dark: 'houston' },
		notationDiff: true,
		notationErrorLevel: true,
		notationFocus: true,
		notationHighlight: true,
		notationWordHighlight: true,
		highlightLines: true,
		collapsedLines: false,
		lineNumbers: true,
	},	
	markdown: {
		hint: true,
		alert: true,
		fileTree: true,
		plot: true,
		icons: true,
		math: { type: 'katex' },
		include: {
		  // ...option
		}
	},
	//readingTime: true,
		// plugins: {
		// 	git: process.env.NODE_ENV === 'production',
		// 	/**
		// 	 * Shiki 代码高亮
		// 	 * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
		// 	 */

		// 	/**
		// 	 * markdown enhance
		// 	 * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
		// 	 */
		// 	markdownEnhance: {
		// 		demo: true,
		// 	//   include: true,
		// 	//   chart: true,
		// 	//   echarts: true,
		// 	//   mermaid: true,
		// 	//   flowchart: true,
		// 	},

		// 	/**
		// 	 *  markdown power
		// 	 * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
		// 	 */
		// 	// markdownPower: {
		// 	//   pdf: true,
		// 	//   caniuse: true,
		// 	//   plot: true,
		// 	//   bilibili: true,
		// 	//   youtube: true,
		// 	//   icons: true,
		// 	//   codepen: true,
		// 	//   replit: true,
		// 	//   codeSandbox: true,
		// 	//   jsfiddle: true,
		// 	//   repl: {
		// 	//     go: true,
		// 	//     rust: true,
		// 	//     kotlin: true,
		// 	//   },
		// 	// },

		// 	/**
		// 	 * 评论 comments
		// 	 * @see https://theme-plume.vuejs.press/guide/features/comments/
		// 	 */
		// 	// comment: {
		// 	//   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
		// 	//   comment: true,
		// 	//   repo: '',
		// 	//   repoId: '',
		// 	//   categoryId: '',
		// 	//   mapping: 'pathname',
		// 	//   reactionsEnabled: true,
		// 	//   inputPosition: 'top',
		// 	// },
		// },
	}),
})
