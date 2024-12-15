import {defineConfig} from 'vitepress'
import devSideBar from './sidebar/dev'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "融茂软件",
  description: "融茂软件开放文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
      {text: '文档', link: '/docs'}
    ],

    sidebar: {
      '/docs/': [
        {
          text: '融茂IM',
          collapsed: false,
          items: [
            {
              text: '前端',
              collapsed: false,
              link: '/docs/romoim/front',
              items: [
                {text: '安装', link: '/docs/romoim/front/install'},
                {text: '快速开始', link: '/docs/romoim/front/quickstart'},
                {text: '常量定义', link: '/docs/romoim/front/defines'},
              ]
            },
            {
              text: '后端',
              collapsed: false,
              link: '/docs/romoim/backend',
              items: [
                {text: '获得密钥', link: '/docs/romoim/backend/get-key'},
              ]
            },
          ]
        },
      ]
    },

    socialLinks: [
      // {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    ]
  }
})
