/**
 * @see https://theme-plume.vuejs.press/guide/collection/ 查看文档了解配置详情。
 *
 * Collections 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Collections，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Collections，然后在与 Collection 相关的 Markdown 文件中，自动生成 permalink。
 *
 * collection 的  type 为 `post` 时，表示为 文档列表类型（即没有侧边导航栏，有文档列表页）
 * 可用于实现如 博客、专栏 等以文章列表聚合形式的文档集合 （内容相对碎片化的）
 *
 * collection 的 type 为 `doc` 时，表示为文档类型（即有侧边导航栏）
 * 可用于实现如 笔记、知识库、文档等以侧边导航栏形式的文档集合 （内容强关联、成体系的）
 * 如果发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 Collection 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `collection.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineCollections` 是用于定义 collection 集合的帮助函数
 * - `defineCollection` 是用于定义单个 collection 配置的帮助函数
 *
 * 通过 `defineCollection` 定义的 collection 配置，应该填入 `defineCollections` 中
 */
import { defineCollection, defineCollections } from 'vuepress-theme-plume'

const blog = defineCollection({
  // post 类型，这里用于实现 博客功能
  type: 'post',
  // 文档集合所在目录，相对于 `docs`
  dir: 'blog/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: 'Blog',
  // 文章列表页的链接，如果 `linkPrefix` 未定义，它也将作为 相关的文章的 permalink 的前缀
  link: '/blog/',
  linkPrefix: '/article/', // 相关文章的链接前缀
  postList: true, // 是否启用文章列表页
  tags: true, // 是否启用标签页
  archives: true, // 是否启用归档页
  categories: true, // 是否启用分类页
  postCover: 'right', // 文章封面位置
  pagination: 15, // 每页显示文章数量
})
const tips = defineCollection({
  // post 类型，这里用于实现 博客功能
  type: 'post',
  // 文档集合所在目录，相对于 `docs`
  dir: 'tips/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: 'Tips',
  // 文章列表页的链接，如果 `linkPrefix` 未定义，它也将作为 相关的文章的 permalink 的前缀
  link: '/tips/',
  linkPrefix: '/tipsissue/', // 相关文章的链接前缀
  postList: true, // 是否启用文章列表页
  tags: true, // 是否启用标签页
  archives: true, // 是否启用归档页
  categories: true, // 是否启用分类页
  postCover: 'right', // 文章封面位置
  pagination: 15, // 每页显示文章数量
})
// const demoDoc = defineCollection({
//   // doc 类型，该类型带有侧边栏
//   type: 'doc',
//   // 文档集合所在目录，相对于 `docs`
//   dir: 'demo',
//   // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
//   // 如果 前缀不一致，则无法生成侧边栏。
//   // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
//   linkPrefix: '/demo',
//   // 文档标题，它将用于在页面的面包屑导航中显示
//   title: 'Demo',
//   // 手动配置侧边栏结构
//   sidebar: ['', 'foo', 'bar'],
//   // 根据文件结构自动生成侧边栏
//   // sidebar: 'auto',
// })

const codeDoc = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: 'code',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/code',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: '手撕算法',
  // 手动配置侧边栏结构
  sidebar:[
    '',
    {
      dir : "回溯",
      // link :"/leetcode",
      text : "回溯",
      items : 'auto',
      collapsed : false,
    },
    {
      dir : "数组",
      // link :"/leetcode",
      text : "数组",
      items : 'auto',
      collapsed : false,
    },
    {
      dir : "动态规划",
      // link :"/leetcode",
      text : "动态规划",
      items : 'auto',
      collapsed : false,
    },
    {
      dir : "贪心",
      // link :"/leetcode",
      text : "贪心",
      items : 'auto',
      collapsed : false,
    },
    {
      dir : "单调队列",
      // link :"/leetcode",
      text : "单调队列",
      items : 'auto',
      collapsed : false,
    },
    {
      dir : "哈希",
      // link :"/leetcode",
      text : "哈希",
      items : 'auto',
      collapsed : false,
    },
    {
      dir : "滑动窗口",
      // link :"/leetcode",
      text : "滑动窗口",
      items : 'auto',
      collapsed : false,
    },
  ],
  // 根据文件结构自动生成侧边栏
  // sidebar: 'auto',
})


const interviewDoc = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: 'interview',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/interview',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: '面试笔记',
  // 手动配置侧边栏结构
  //sidebar: ['', 'foo', 'bar'],
  // 根据文件结构自动生成侧边栏
  sidebar: 'auto',
})

const compilerDoc = defineCollection({
  type: 'doc',
  dir: 'compiler',
  linkPrefix: '/compiler',
  title: '编译原理',

  sidebar : [
    '', {
      dir : 'EaC',
      // link:'面试',
      text : 'Eac',
      items : 'auto',
      collapsed : true
    },
    {
      dir : 'LLVM',
      // link:'面试',
      text : 'LLVM',
      items : 'auto',
      collapsed : true
    }
  ],

})

const searchengineDoc = defineCollection({
  type: 'doc',
  dir: 'searchengine',
  linkPrefix: '/searchengine',
  title: '搜索引擎',
  sidebar : [
    '', // README.md
    {
      dir : 'theory',
      text : 'NLP和LLM理论',
      items : 'auto', // 自动生成当前目录下的条目
      collapsed : false
    },
    {
      dir : 'practice',
      text : '实习实操',
      items : 'auto', // 自动生成当前目录下的条目
      collapsed : false
    }
  ]
})

const distsysDoc = defineCollection({
  type: 'doc',
  dir: 'distsys',
  linkPrefix: '/distsys',
  title: '分布式系统',
  sidebar: ['',
    {
    dir : 'paper',
    text : '论文',
    items : 'auto', // 自动生成当前目录下的条目
    collapsed : true
    },
    {
        dir: "theory", 
        text: "分布式基础理论",
        items: 'auto', // 自动生成当前目录下的条目
        collapsed: true,
    },
  ]
})

/**
 * 导出所有的 collections
 * (blog 为博客示例，如果不需要博客功能，请删除)
 * (demoDoc 为参考示例，如果不需要它，请删除)
 */
export default defineCollections([
  blog,
  tips,
  codeDoc,
  interviewDoc,
  compilerDoc,
  searchengineDoc,
  distsysDoc,
])
