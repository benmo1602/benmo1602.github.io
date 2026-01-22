module.exports = {
  title: '本末的Blog',
  description: '本末的前端搬砖之路',
  base: '/',
  cleanUrls: true,
  themeConfig: {
    repo: 'benmo1602/blog',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: '前端开发',
        link: '/',
        activeMatch: '^/$|^/前端开发/',
      },
      {
        text: 'leetcode',
        link: '/leetcode/index',
        activeMatch: '^/leetcode/',
      },
    ],
    sidebar: {
      '/node/': getSidebar('/node/'),
      '/python/': getSidebar('/python/'),
      '/浏览器/': getSidebar('/浏览器/'),
      '/ECMAScript/': getSidebar('/ECMAScript/'),
      '/框架/': getSidebar('/框架/'),
      '/性能优化/': getSidebar('/性能优化/'),
      '/安全/': getSidebar('/安全/'),
      '/leetcode/': getLeetcodeSidebar(),
      '/面试/': getSidebar('/面试/'),
      '/前端开发': getSidebar(),
      '/': getSidebar(),
    },
    footer: [{
        text: '面试',
        link: '/',
        activeMatch: '^/$|^/面试/'
      },
      {
        text: 'github',
        link: 'https://github.com/benmo1602/benmo1602.github.io'
      }
    ]
  },
};
function getSidebar(pth = '/前端开发') {
  const router = []
  if (pth === '/面试/') {
    router.push(...getInterviewSidebar())
  } else {
    router.push({ text: '面试问题整理', link: '/面试/index' })
  }

  if (pth === '/node/') {
    router.push(...getNodeSidebar())
  } else {
    router.push({ text: 'Node.js 模块', link: '/node/index' })
  }

  if (pth === '/python/') {
    router.push(...getPythonSidebar())
  } else {
    router.push({ text: 'Python 模块', link: '/python/index' })
  }

  if (pth === '/浏览器/') {
    router.push(...getBrowserSidebar())
  } else {
    router.push({ text: '浏览器模块', link: '/浏览器/index' })
  }

  if (pth === '/ECMAScript/') {
    router.push(...getECMAScriptSidebar())
  } else {
    router.push({ text: 'ECMAScript 模块', link: '/ECMAScript/index' })
  }

  if (pth === '/框架/') {
    router.push(...getFrameworkSidebar())
  } else {
    router.push({ text: '框架模块', link: '/框架/index' })
  }

  if (pth === '/性能优化/') {
    router.push(...getPerformanceSidebar())
  } else {
    router.push({ text: '性能优化模块', link: '/性能优化/index' })
  }

  if (pth === '/安全/') {
    router.push(...getSecuritySidebar())
  } else {
    router.push({ text: '安全模块', link: '/安全/index' })
  }

  return [{
    text: '前端开发',
    items: router
  }]
}

function getNodeSidebar() {
  return [{
    text: 'Node.js 模块',
    link: '/node/index',
    activeMatch: '^/node/',
    items: [
      { text: 'Node.js 基础模块', link: '/node/基础模块' },
      { text: 'Node.js 事件循环模块', link: '/node/事件循环模块' },
      { text: 'Node.js 性能优化模块', link: '/node/性能优化模块' }
    ]
  }]
}

function getPythonSidebar() {
  return [{
    text: 'Python 模块',
    link: '/python/index',
    activeMatch: '^/python/',
    items: [
      { text: 'Python 基础模块', link: '/python/基础模块' },
      { text: 'Python 事件循环模块', link: '/python/事件循环模块' },
      { text: 'Python 性能优化模块', link: '/python/性能优化模块' }
    ]
  }]
}

function getBrowserSidebar() {
  return [{
    text: '浏览器模块',
    link: '/浏览器/index',
    activeMatch: '^/浏览器/',
    items: [
      { text: '浏览器渲染原理模块', link: '/浏览器/渲染原理模块' },
      { text: '浏览器事件循环模块', link: '/浏览器/事件循环模块' },
      { text: '浏览器性能优化模块', link: '/浏览器/性能优化模块' }
    ]
  }]
}

function getECMAScriptSidebar() {
  return [{
    text: 'ECMAScript 模块',
    link: '/ECMAScript/index',
    activeMatch: '^/ECMAScript/',
    items: [
      { text: 'ES6 (2015) 模块', link: '/ECMAScript/ES6模块' },
      { text: 'ES7 (2016) 模块', link: '/ECMAScript/ES7模块' },
      { text: 'ES8 (2017) 模块', link: '/ECMAScript/ES8模块' },
      { text: 'ES9 (2018) 模块', link: '/ECMAScript/ES9模块' },
      { text: 'ES10 (2019) 模块', link: '/ECMAScript/ES10模块' },
      { text: 'ES11 (2020) 模块', link: '/ECMAScript/ES11模块' },
      { text: 'ES12 (2021) 模块', link: '/ECMAScript/ES12模块' },
      { text: 'ES13 (2022) 模块', link: '/ECMAScript/ES13模块' },
      { text: 'ES14 (2023) 模块', link: '/ECMAScript/ES14模块' },
      { text: 'ES15 (2024) 模块', link: '/ECMAScript/ES15模块' },
    ]
  }]
}

function getFrameworkSidebar() {
  return [{
    text: '框架模块',
    link: '/框架/index',
    activeMatch: '^/框架/',
    items: [
      { text: 'Vue 模块', link: '/框架/vue模块' },
      { text: 'React 模块', link: '/框架/react模块' },
    ]
  }]
}

function getPerformanceSidebar() {
  return [{
    text: '性能优化模块',
    link: '/性能优化/index',
    activeMatch: '^/性能优化/',
    items: [
      { text: '前端性能优化模块', link: '/性能优化/前端优化' },
      { text: '后端性能优化模块', link: '/性能优化/后端优化' },
    ]
  }]
}

function getSecuritySidebar() {
  return [{
    text: '安全模块',
    link: '/安全/index',
    activeMatch: '^/安全/',
    items: [
      { text: '前端安全模块', link: '/安全/前端安全' },
    ]
  }]
}

function getLeetcodeSidebar() {
  return [{
    text: 'LeetCode 题解',
    link: '/leetcode/index',
    activeMatch: '^/leetcode/',
    items: [
      { text: '首页', link: '/leetcode/index' },
      { text: 'Day 01', link: '/leetcode/01.day' }
    ]
  }]
}

function getInterviewSidebar() {
  return [{
    text: '面试问题整理',
    link: '/面试/index',
    activeMatch: '^/面试/',
    items: [
      { text: '1.异步执行顺序问题', link: '/面试/01.异步执行顺序问题' },
      { text: '2.异步执行顺序问题2', link: '/面试/02.异步执行顺序问题' },
      { text: '3.微任务执行问题', link: '/面试/03.微任务执行问题' },
      { text: '04.this指向问题', link: '/面试/04.this指向问题' },
      { text: '05.promise执行问题', link: '/面试/05.promise执行问题' },
      { text: '06.promise解决并发请求', link: '/面试/06.promise解决并发请求' },
      { text: '07.跨域问题', link: '/面试/07.跨域问题' },
      { text: '08.deno相关问题', link: '/面试/08.deno相关问题' },
      { text: '09.sourceMap相关', link: '/面试/09.sourceMap相关' },
      { text: '10.this拔高', link: '/面试/10.this拔高' },
      { text: '11.vue相关问题', link: '/面试/11.vue相关问题' },
      { text: '12.垃圾回收', link: '/面试/12.垃圾回收' },
      { text: '13.js数据类型', link: '/面试/13.js数据类型' },
      { text: '14. js原型链', link: '/面试/14. js原型链' },
      { text: '15.js的继承', link: '/面试/15.js的继承' },
      { text: '16.js的 new 操作符', link: '/面试/16.js的new操作符' },
      { text: '17.Class', link: '/面试/17.class' },
      { text: '18.EventEmitter', link: '/面试/18.EventEmitter' },
      { text: '19.闭包', link: '/面试/19.闭包' },
      { text: '20.es6', link: '/面试/20.es6' },
      { text: '21.缓存机制', link: '/面试/21.缓存机制' },
      { text: '22.跨域', link: '/面试/22.跨域' },
      { text: '23.http', link: '/面试/23.http' },
      { text: '24.浏览器从输入url到页面渲染', link: '/面试/24.浏览器从输入url到页面渲染' },
      { text: '25.节流和防抖', link: '/面试/25.节流和防抖' },
      { text: '26.前端项目优化', link: '/面试/26.前端项目优化' },
      { text: '27.前端适配方案', link: '/面试/27.前端适配方案' },
      { text: '28.css相关问题', link: '/面试/28.css相关问题' },
      { text: '29.react', link: '/面试/29.react' },
      { text: '30.webpack', link: '/面试/30.webpack' },
      { text: '32.变量提升', link: '/面试/32.变量提升' },
      { text: '33.common', link: '/面试/33.common' },
      { text: '34.浏览器的进程', link: '/面试/34.浏览器的进程' },
      { text: '35.nvm', link: '/面试/35.nvm' },
      { text: '36.小程序UI库对比', link: '/面试/36.小程序UI库对比' },
      { text: '37.npm、npx、yarn的区别', link: '/面试/37.npm、npx、yarn的区别' }
    ]
  }]
}
