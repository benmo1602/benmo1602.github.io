module.exports = {
  title: '本末的Blog',
  description: '本末的前端搬砖之路',
  themeConfig: {
    // repo: 'vuejs/vitepress',
    // docsDir: 'docs',

    // editLinks: true,
    // editLinkText: 'Edit this page on GitHub',
    // lastUpdated: 'Last Updated',

    // algolia: {
    //   apiKey: 'c57105e511faa5558547599f120ceeba',
    //   indexName: 'vitepress'
    // },

    // carbonAds: {
    //   carbon: 'CEBDT27Y',
    //   custom: 'CKYD62QM',
    //   placement: 'vuejsorg'
    // },
    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'github',
        link: 'https://github.com/benmo1602/blog'
      }
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
        link: 'https://github.com/benmo1602/blog'
      }
    ]
  }
}

function getGuideSidebar() {
  // const files = require.context("/guide", false, /\.md$/)
  // const children = {};
  // files.keys().forEach(key => {
  //   const name = key.replace(/\.md/g, "")
  //   children[name] = "/guide/" + name
  // })
  // console.log(children);
  return [
    {
      text: '面试问题',
      children: [
        { text: '异步执行顺序问题', link: '/guide/01.异步执行顺序问题-面试题' },
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
