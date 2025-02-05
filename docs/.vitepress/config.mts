import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "易边学",
    description: "边玩边学，边工作边学习",
    ignoreDeadLinks: true,
    themeConfig: {
        logo: '/images/logo.png',
        nav: [
            {text: '首页', link: '/'},
            //{text: 'Examples', link: '/markdown-examples'},
            {text: '下载', link: '/download'},
            {text: '使用手册', link: '/guide/base-what'},
            {text: '联系我', link: '/contact'}
        ],

        sidebar: [
            {
                text: '简介',
                collapsed: true,
                items: [
                    {text: '什么是易边学？', link: '/guide/base-what'},
                    {text: '开始使用', link: '/guide/base-start'}
                ]

            },
            {
                text: '英语',
                collapsed: true,
                items: [
                    {text: '随身听', link: '/guide/base-what.html'},
                    {text: '单词拼写', link: '/guide/base-what.html'},
                    {text: '刷单词', link: '/guide/base-what.html'},
                    {text: '一万句', link: '/guide/base-what.html'},
                    {text: '悬浮窗', link: '/guide/base-what.html'},
                    {text: '锁屏英语', link: '/guide/base-what.html'},
                    {text: '桌面小组件', link: '/guide/base-what.html'},
                    {text: '翻译', link: '/guide/base-what.html'},
                    {text: '语法分析', link: '/guide/base-what.html'}
                ]
            },
            {
                text: '少儿守护',
                collapsed: true,
                items: [
                    {text: '守护配置', link: '/guide/guard-config.html',
                        items:[
                            {text: '自启动', link: '/guide/guard-config-autostart.html'},
                        ]
                    
                    },
                    {text: '资源中心', link: '/guide/base-what.html'},
                    {text: '语音搜索', link: '/guide/base-what.html'}
                ]
            }
        ],

        // socialLinks: [
        //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        // ]
    }
})
