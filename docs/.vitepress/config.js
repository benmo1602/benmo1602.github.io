module.exports = {
  title: '本末的Blog',
  description: '本末的前端搬砖之路',
  themeConfig: {
    repo: 'benmo1602/blog',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      { text: '面试问题', link: '/', activeMatch: '^/$|^/guide/' },
      { text: 'config', link: '/config/test',  activeMatch: '^/$|^/config/' }
    ],
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/config/': getConfigSidebar(),
      '/': getGuideSidebar()
    },
    footer:[
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'github',
        link: 'https://github.com/benmo1602/benmo1602.github.io'
      }
    ]
  }
}

function getGuideSidebar() {
  const files = require.context("/guide", false, /\.md$/)
  console.log(files);
  // const children = {};
  // files.keys().forEach(key => {
  //   const name = key.replace(/\.md/g, "")
  //   children[name] = "/guide/" + name
  // })
  // console.log(children);
  return [
    {
      text: '面试问题整理',
      children: [
        { text: '1.异步执行顺序问题', link: '/guide/01.异步执行顺序问题-面试题' },
        { text: '2.异步执行顺序问题2', link: '/guide/02.异步执行顺序问题-面试题' },
        { text: '3.微任务执行问题', link: '/guide/03.微任务执行问题-面试题' },
      ]
    }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'test', link: '/config/test' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/test1' }
      ]
    }
  ]
}
