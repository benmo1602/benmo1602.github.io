module.exports = {
  title: '本末的Blog',
  description: '本末的前端搬砖之路',
  themeConfig: {
    repo: 'benmo1602/blog',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: [{
        text: '面试问题',
        link: '/',
        activeMatch: '^/$|^/guide/'
      },
      {
        text: 'config',
        link: '/config/index',
        activeMatch: '^/config/'
      }
    ],
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/config/': getConfigSidebar(),
      '/': getGuideSidebar()
    }
    // footer: [{
    //     text: 'Guide',
    //     link: '/',
    //     activeMatch: '^/$|^/guide/'
    //   },
    //   {
    //     text: 'github',
    //     link: 'https://github.com/benmo1602/benmo1602.github.io'
    //   }
    // ]
  }
}

function getGuideSidebar() {
  return [{
    text: '面试问题整理',
    children: [{
        text: '1.异步执行顺序问题',
        link: '/guide/01.异步执行顺序问题-面试题'
      },
      {
        text: '2.异步执行顺序问题2',
        link: '/guide/02.异步执行顺序问题-面试题'
      },
      {
        text: '3.微任务执行问题',
        link: '/guide/03.微任务执行问题-面试题'
      },
      {
        text: "04.this指向问题-面试题",
        link: "/guide/04.this指向问题-面试题"
      }, {
        text: "05.promise执行问题-面试题",
        link: "/guide/05.promise执行问题-面试题"
      }, {
        text: "06.promise解决并发请求-面试题",
        link: "/guide/06.promise解决并发请求-面试题"
      }, {
        text: "07.跨域问题-面试题",
        link: "/guide/07.跨域问题-面试题"
      }, {
        text: "08.deno相关问题-面试题",
        link: "/guide/08.deno相关问题-面试题"
      }, {
        text: "09.sourceMap相关-面试题",
        link: "/guide/09.sourceMap相关-面试题"
      }, {
        text: "10.this拔高-面试题",
        link: "/guide/10.this拔高-面试题"
      }, {
        text: "11.vue相关问题",
        link: "/guide/11.vue相关问题"
      }, {
        text: "12.垃圾回收",
        link: "/guide/12.垃圾回收"
      }, {
        text: "13.js数据类型",
        link: "/guide/13.js数据类型"
      }, {
        text: "14. js原型链",
        link: "/guide/14. js原型链"
      }, {
        text: "15.js的继承",
        link: "/guide/15.js的继承"
      }, {
        text: "16.js的 new 操作符",
        link: "/guide/16.js的new操作符"
      }, {
        text: "17.Class ",
        link: "/guide/17.Class"
      }, {
        text: "18.EventEmitter",
        link: "/guide/18.EventEmitter"
      }, {
        text: "19.闭包",
        link: "/guide/19.闭包"
      }, {
        text: "20.es6",
        link: "/guide/20.es6"
      }, {
        text: "21.缓存机制",
        link: "/guide/21.缓存机制"
      }, {
        text: "22.跨域",
        link: "/guide/22.跨域"
      }, {
        text: "23.http",
        link: "/guide/23.http"
      }, {
        text: "24.浏览器从输入url到页面渲染",
        link: "/guide/24.浏览器从输入url到页面渲染"
      }, {
        text: "25.节流和防抖",
        link: "/guide/25.节流和防抖"
      }, {
        text: "26.前端项目优化",
        link: "/guide/26.前端项目优化"
      }, {
        text: "27.前端适配方案",
        link: "/guide/27.前端适配方案"
      }, {
        text: "28.css相关问题",
        link: "/guide/28.css相关问题"
      }, {
        text: "29.react",
        link: "/guide/29.react"
      }, {
        text: "30.webpack",
        link: "/guide/30.webpack"
      },  {
        text: "32.变量提升",
        link: "/guide/32.变量提升"
      }, {
        text: "33.common",
        link: "/guide/33.common"
      }, {
        text: "34.浏览器的进程",
        link: "/guide/34.浏览器的进程"
      }, {
        text: "35.nvm",
        link: "/guide/35.nvm"
      }, {
        text: "36.小程序UI库对比",
        link: "/guide/36.小程序UI库对比"
      }, {
        text: "37.npm、npx、yarn的区别",
        link: "/guide/37.npm、npx、yarn的区别"
      }
    ]
  }]
}

function getConfigSidebar() {
  return [{
      text: '日常练习',
      children: []
    }
  ]
}
