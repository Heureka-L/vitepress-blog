import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Heureka's Blog",
  description: "Heureka's technical hut",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '文章',
        items: [
          {text: 'c1', link: '/'},
          {text: 'c2', link: '/'}
        ],
      },
      { text: 'about-me', link: '/about-me' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'about-me', link: '/about-me' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Heureka-L' }
    ]
  }
})
