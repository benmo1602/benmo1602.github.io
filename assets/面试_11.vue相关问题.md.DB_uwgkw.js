import{_ as a,o as n,c as p,ae as e}from"./chunks/framework.BD9pLfSD.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"面试/11.vue相关问题.md","filePath":"面试/11.vue相关问题.md","lastUpdated":1769081193000}'),i={name:"面试/11.vue相关问题.md"};function l(t,s,c,r,d,o){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h3 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h3><p>​ new Vue</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>初始化生命周期、 事件、data、props、watch、computed， 通过Object.defineProprety 设置 setter、 getter 函数实现响应式 以及 依赖收集；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>初始化之后 调用$mount进行组件挂载</span></span>
<span class="line"><span></span></span>
<span class="line"><span>template 需要编译、 render ， function不需要编译</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vue2 编译</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parse  =&gt; AST、</span></span>
<span class="line"><span>optimize =&gt; 标记 static 静态节点（在update时， diff 算法的 path 会直接 跳过 静态static 节点提升性能）、</span></span>
<span class="line"><span>generate  （AST） =&gt; render function  （字符串、 staticRenderFns）</span></span>
<span class="line"><span>在经历过 \`parse\`、\`optimize\` 与 \`generate\` 这三个阶段以后，组件中就会存在渲染 VNode 所需的 render function 了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>render function 在渲染时 会读取所需要的值， 触发getter 进行依赖收集，</span></span>
<span class="line"><span>依赖收集 将观察者 watcher 对象 存放到 当前闭包的 Dep订阅者的 subs中</span></span>
<span class="line"><span>触发setter时候 ， setter 通知之前的依赖收集得到 Dep 中的subs （订阅）多个watcher ， 触发notify （发布） 通知每一个subs 的watcher 更新视图， watcher =&gt; update , 触发 patch 经过 diff算法  （双指针, 纵向对比）</span></span></code></pre></div><p>VNode</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>节点有更多的属性来标志节点，比如 isStatic （代表是否为静态节点）、 isComment （代表是否为注释节点）等。</span></span></code></pre></div><ol><li><p>vue的双向数据绑定实现原理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>采用数据劫持和发布者-订阅者模式</span></span>
<span class="line"><span>数据劫持是利用ES5的Object.defineProperty(obj,key,val)方法来劫持每个属性的getter和setter，在数据变动是发布消息给订阅者，从而触发相应的回调来更新视图，下面来一步步实现。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>基于 object.defineProperty 定义 setter， getter</span></span>
<span class="line"><span>proxy</span></span></code></pre></div></li><li><p>观察者模式 vs 发布-订阅模式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>watcher 是在render funtion  在渲染的时候 触出发getter 进行依赖收集</span></span>
<span class="line"><span></span></span>
<span class="line"><span>依赖收集 将watcher 对象放入 Dep订阅的subs中 （订阅），</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当时出发setter 的时候， setter  通知 之前进行依赖收集的Dep 的subs （订阅）多个watcher 出发 notify（发布）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>通知每一个 subs 的watcher 更新视图</span></span>
<span class="line"><span></span></span>
<span class="line"><span>watcher =&gt; update 触发 patch 更过diff 算法 （双指针， 纵向对比）然后更新VNode</span></span></code></pre></div></li><li><p>对于 MVVM 理解的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>什么是MVC</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MVC 是 Model-View-Controller 的缩写，即 模型—视图—控制器 。</span></span>
<span class="line"><span>Model：后端传递的 数据 。</span></span>
<span class="line"><span>View：所看到的 页面 。</span></span>
<span class="line"><span>Controller：页面 业务逻辑 。</span></span>
<span class="line"><span>MVC是 单向通信 。即View和Model，必须通过Controller来承上启下。</span></span>
<span class="line"><span>使用MVC的 目的 就是 将M和V的代码分离 。</span></span>
<span class="line"><span>MVC和MVVM的关系</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MVVM是将之前的MVC后端开发：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>M：model数据库中的数据</span></span>
<span class="line"><span>V：view前端页面</span></span>
<span class="line"><span>C：controller后端控制器</span></span>
<span class="line"><span>中的V即View分成了MVVM模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MVVM模式：不需要用户手动的操作dom的，主要是实现数据双向绑定</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[扩展问题]：VUE和MVVM的关系</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.js 可以说是MVVM 架构的最佳实践，VUE并没有完全遵循MVVM，专注于 MVVM 中的 ViewModel，不仅做到了数据双向绑定，而且也是一款相对比较轻量级的JS 库，API 简洁，很容易上手</span></span>
<span class="line"><span>欢迎留言\`\`\`</span></span></code></pre></div></li><li><p>vue的数据双向绑定原理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Object.defineProperty</span></span></code></pre></div></li><li><p>vue封装组件</p></li><li><p>vue-router实现原理，为什么要选vue，与其它框架对比的优势和劣势</p></li><li><p>vuex是用来做什么的，vue源码结构</p></li><li><p>组件的通讯方式</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $emit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$emit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$on</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vuex</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$attrs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$listeners  可以在 props 控制接收#attrs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">provide</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">inject  实现响应式 2.6版本 使用observable</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$parent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $children与 ref</span></span></code></pre></div></li></ol>`,6)])])}const k=a(i,[["render",l]]);export{u as __pageData,k as default};
