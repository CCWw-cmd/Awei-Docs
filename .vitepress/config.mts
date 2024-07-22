/*
 * @Author: cjw
 * @Date: 2024-07-08 09:05:32
 * @Description: 文档配置
 * @LastEditTime: 2024-07-11 14:12:41
 * @LastEditors: cjw
 */
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "阿威的文档",
  description: "个人文档站点",
  titleTemplate: "记录文档",
  //fav图标
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  locales: {
    root: {
      label: "简体中文",
      lang: "Zh_CN",
    },
  },
  lastUpdated: true, // 此配置不会立即生效，需git提交后爬取时间戳，本地报错可以先注释
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "首页",
        link: "index"
      },
      {
        text: "日常学习",
        items: [
          { text: '每日浏览', link: 'everydayBrowse' },
          {
            text: '日常总结',
            items: [
              { text: 'JavaScript', link: 'Javascript总结' },
              { text: 'TypeScript', link: 'Typescript总结' },
              { text: 'Vue', link: 'Vue总结' },
              { text: 'React', link: 'React总结' },
            ]
          }
        ]
      },
      {
        text: "笔记",
        items: [
          {
            text: '日常笔记',
            items: [
              { text: 'JavaScript', link: 'JavascriptNotes' },
              { text: 'TypeScript', link: 'TypescriptNotes' },
              { text: 'Vue', link: 'VueNotes' },
              { text: 'React', link: 'ReactNotes' },
            ]
          },
          {
            text: '踩坑记录',
            items: [
              { text: 'JavaScript', link: 'JavascriptBug' },
              { text: 'TypeScript', link: 'typescriptBug' },
              { text: 'vue', link: 'vueBug' },
              { text: 'React', link: 'reactBug' },
              { text: 'vite', link: 'viteBug' },
              { text: '第三方工具', link: 'thirdPartyToolsBug' },
              { text: '桌面端', link: 'desktopBug' },
              { text: '小程序开发', link: 'miniProgramBug' },
              { text: 'app开发', link: 'appBug' }
            ]
          }
        ]
      },
      {
        text: "前端工程化",
        items: [
          {
            text: 'Vite',
            items: [
              { text: 'vite配置', link: 'vite配置' },
              { text: 'vite插件', link: 'vite插件' },
              { text: 'vite插件开发', link: 'vite插件开发' },
            ]
          },
          {
            text: 'Wackpack（待编写）',
            items: []
          },
        ]
      },
      {
        text: "Css",
        items: [
          { text: '日常笔记', link: 'everydayNote' },
          {
            text: '相关技巧',
            items: [
              { text: 'tailWindCSS', link: 'tailWindCSSSkill' },
              { text: 'unocss', link: 'unocssSkill' },
              { text: 'Scss', link: 'ScssSkill' },
            ]
          },
          {
            text: '案例学习',
            link: 'css案例学习'
          }
        ]
      },
      {
        text: "后端",
        items: [
          {
            text: 'Java',
            items: [
              { text: 'Java基础', link: 'Java基础' },
              { text: 'Spring全家桶', link: 'Spring全家桶' },
            ]
          },
          {
            text: 'Go（待编写）',
            items: []
          },
          {
            text: 'Nest.js',
            items: [
              { text: 'nestjs基础', link: 'nestjs' },
            ]
          }
        ]
      },
      {
        text: "Three.js",
        items: [
          { text: '常用特效实现', link: '常用特效实现' },
          {
            text: '着色器学习',
            link: '着色器学习'
          }
        ]
      },
      {
        text: "提效工具",
        items: [
          { text: 'VSCode', link: 'VSCode配置' },
        ]
      }],
    logo: "/logo.svg",
    // 侧边栏
    sidebar: [

    ],
    //本地搜索
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
    //上次更新时间
    lastUpdated: {
      text: "最后一次更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    //自定义上下页名
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    socialLinks: [],
    //大纲
    outline: {
      level: [2, 4], // 显示2-4级的标题
      label: "目录", // 文字显示
    },
  },
});
