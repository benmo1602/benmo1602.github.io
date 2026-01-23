import{_ as a,o as s,c as p,ae as e}from"./chunks/framework.BD9pLfSD.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"面试/37.npm、npx、yarn的区别.md","filePath":"面试/37.npm、npx、yarn的区别.md","lastUpdated":1769081193000}'),i={name:"面试/37.npm、npx、yarn的区别.md"};function l(t,n,r,o,c,h){return s(),p("div",null,[...n[0]||(n[0]=[e(`<h3 id="npm-npx-yarn-的区别" tabindex="-1">npm, npx, yarn 的区别 <a class="header-anchor" href="#npm-npx-yarn-的区别" aria-label="Permalink to &quot;npm, npx, yarn 的区别&quot;">​</a></h3><p>yarn 和 npm 都是 node 软件包管理器，</p><h4 id="_1-yarn-和-npm-的区别" tabindex="-1">1. yarn 和 npm 的区别 <a class="header-anchor" href="#_1-yarn-和-npm-的区别" aria-label="Permalink to &quot;1. yarn 和 npm 的区别&quot;">​</a></h4><ol><li>yarn: 是同步执行所有任务，提高了性能， 而且如果你上一次安装过软件包，第二个会从缓存中获取</li><li>npm: 是按照队列执行每一个package, 每一次都是从网络上下载，也就是说必须要等到当前 package 安装完成之后，才能继续后面的安装</li></ol><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;6.0.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 表示安装指定的6.0.3版本</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;~6.0.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 表示安装6.0.X中最新的版本</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^6.0.3&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 表示安装6.X.X中最新的版本</span></span></code></pre></div><h4 id="_2-npm-和-npx-对比" tabindex="-1">2. npm 和 npx 对比 <a class="header-anchor" href="#_2-npm-和-npx-对比" aria-label="Permalink to &quot;2. npm 和 npx 对比&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>* npm 是 node 软件包的管理器</span></span>
<span class="line"><span>* npx 是 node 软件包的执行工具</span></span>
<span class="line"><span>  官方文档，从npm@5.2.0 版本开始，npx就和npm捆绑在了一起，可以认为npx是npm 的高级版本，npx 具有更强大的功能，</span></span>
<span class="line"><span>** npx是一个可执行的二进制文件，原理很简单，运行npx的时候，默认会到 node_modules/.bin 路径和环境变量$PATH里面，检查命令是否存在</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For Example:</span></span>
<span class="line"><span>项目中想运行一个脚本命令有两种方式：</span></span>
<span class="line"><span> 1， package.json中配置script脚本</span></span>
<span class="line"><span> {</span></span>
<span class="line"><span>   &quot;scripts&quot;: {</span></span>
<span class="line"><span>     &quot;mocha&quot;: xxxx</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> 2, 项目根目录路径下面：</span></span>
<span class="line"><span>  node-modules/.bin/mocha --version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在有了npx可以直接执行：</span></span>
<span class="line"><span>npx mocka --version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>*** 执行一次性命令</span></span>
<span class="line"><span>npx 当执行一个包的时候，会自动检查本地是否存在，如果没有会为你从 npm 上下载，临时安装这个包，并且执行它。当做完这些事情后，已安装的包不会出现在你的全局安装中，所以不用担心长期使用所带来的全局污染。</span></span>
<span class="line"><span>常用的命令： npx create-react-app my-app</span></span>
<span class="line"><span>安装一个临时create-react-app并调用,而不用污染全局安装</span></span>
<span class="line"><span></span></span>
<span class="line"><span>总结：执行npx命令</span></span>
<span class="line"><span>1.首先会检查本地项目路径中是否存在要执行的包</span></span>
<span class="line"><span>2.如果存在，执行；</span></span>
<span class="line"><span>3.如果不存在，意味着尚未安装该软件包，npx将临时安装其最新版本，然后执行它；</span></span></code></pre></div><h4 id="_3-pnpm" tabindex="-1">3. pnpm <a class="header-anchor" href="#_3-pnpm" aria-label="Permalink to &quot;3. pnpm&quot;">​</a></h4><p>​ 英文里面的意思叫做 <code>performant npm</code> ，意味“高性能的 npm”，官网地址可以参考 <a href="https://pnpm.io/" target="_blank" rel="noreferrer">https://pnpm.io/</a>。</p><p>​ 相比较于 yarn/npm 这两个常用的包管理工具在性能上也有了极大的提升，根据目前官方提供的 benchmark 数据可以看出在一些综合场景下比 npm/yarn 快了大概两倍：</p><p>​ 类似于 npm link 项目依赖都是来自全局 npm link 这种方式， 存在很多兼容性问题 ， 感兴趣可以了解一下</p><h4 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h4><p>因为有了yarn的出现，npm5.0版本之后改进，引入了package-lock.json，速度和性能上也大大提升。</p><p>如何选择，个人建议: 大多数项目依然可以采取用npm，兼容性好，成熟，稳定，种类多，有趣，它和node一起提供，管理包安全放心，</p><p>关于开发过程中 可能会遇到不同版本的node 、npm 需求 可以通过 nvm 进行 多版本管理</p>`,15)])])}const k=a(i,[["render",l]]);export{d as __pageData,k as default};
