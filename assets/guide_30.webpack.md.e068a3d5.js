import{_ as n,c as a,o as s,d as p}from"./app.de2db455.js";const b='{"title":"webpack \u539F\u7406","description":"","frontmatter":{},"relativePath":"guide/30.webpack.md","lastUpdated":1644893039687}',e={},t=p(`<p><strong>### webpack\uFF1A</strong></p><p>\\1. \u5982\u4F55\u914D\u7F6E\u628Ajs\u3001css\u3001html\u5355\u72EC\u6253\u5305\u6210\u4E00\u4E2A\u6587\u4EF6</p><p><a href="https://juejin.cn/post/6972378623281987621" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6972378623281987621</a></p><div class="language-js"><pre><code>step1<span class="token operator">:</span> \u5B9E\u4F8B\u5316compiler

  \u5B9E\u4F8B\u5316 compiler \u5BF9\u8C61
  \u521D\u59CB\u5316 <span class="token function">NodeEnvironmentPlugin</span><span class="token punctuation">(</span>\u8BA9compiler\u5177\u4F53\u6587\u4EF6\u8BFB\u5199\u80FD\u529B<span class="token punctuation">)</span>
  \u6302\u8F7D\u6240\u6709 plugins \u63D2\u4EF6\u81F3 compiler \u5BF9\u8C61\u8EAB\u4E0A
  \u6302\u8F7D\u6240\u6709 webpack \u5185\u7F6E\u7684\u63D2\u4EF6\uFF08\u5165\u53E3\uFF09

step2<span class="token operator">:</span> compiler<span class="token punctuation">.</span>run

  <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>beforeRun<span class="token punctuation">.</span>callAsync <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>run<span class="token punctuation">.</span>callAsync <span class="token operator">-</span><span class="token operator">&gt;</span>  <span class="token keyword">this</span><span class="token punctuation">.</span>compile
    <span class="token keyword">this</span><span class="token punctuation">.</span>compile \u63A5\u6536 onCompiled
    onCompiled \u5185\u5BB9\u662F\uFF1A \u6700\u7EC8\u5728\u8FD9\u91CC\u5C06\u5904\u7406\u597D\u7684 chunk \u5199\u5165\u5230\u6307\u5B9A\u7684\u6587\u4EF6\u7136\u540E\u8F93\u51FA\u81F3 dist \uFF08\u6587\u4EF6\u8F93\u51FA\u8DEF\u5F84\uFF0C\u4E0D\u4E00\u5B9A\u662Fdist\uFF09

step3<span class="token operator">:</span> compile\u65B9\u6CD5\u505A\u7684\u4E8B\u60C5
  newCompilationParams\uFF0C\u5B9E\u4F8B\u5316Compilation\u5BF9\u8C61\u4E4B\u524D\u5148\u521D\u59CB\u5316\u5176\u6240\u9700\u53C2\u6570
  \u8C03\u7528<span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>beforeRun<span class="token punctuation">.</span>callAsync
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">newCompilation</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> \u5B9E\u4F8B\u5316Compilation\u5BF9\u8C61
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>make<span class="token punctuation">.</span>callAsync  \u89E6\u53D1make\u94A9\u5B50\u76D1\u542C
    compilation<span class="token punctuation">.</span>seal \u5F00\u59CB\u5904\u7406 chunk
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>afterCompile<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span>compilation<span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">)</span>
    \u6D41\u7A0B\u8FDB\u5165compilation\u4E86\u3002\u3002\u3002

step4<span class="token operator">:</span> \u5B8C\u6210\u6A21\u5757\u7F16\u8BD1\u64CD\u4F5C

  addEntry
    _addModuleChain
    createModule\uFF1A\u5B9A\u4E49\u4E00\u4E2A\u521B\u5EFA\u6A21\u5757\u7684\u65B9\u6CD5\uFF0C\u8FBE\u5230\u590D\u7528\u7684\u76EE\u7684
    module <span class="token operator">=</span> normalModuleFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> \uFF1A \u521B\u5EFA\u666E\u901A\u6A21\u5757\uFF0C\u76EE\u7684\u662F\u7528\u6765\u52A0\u8F7Djs\u6A21\u5757
    afterBuild
    <span class="token keyword">this</span><span class="token punctuation">.</span>processDependencies \uFF1A \u627E\u5230\u6A21\u5757\u4E0E\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildModule</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> afterBuild<span class="token punctuation">)</span>
    module<span class="token punctuation">.</span>build <span class="token operator">:</span> \u5230\u8FD9\u91CC\u5C31\u610F\u5473\u7740\u5F53\u524D Module \u7684\u7F16\u8BD1\u5B8C\u6210\u4E86
  seal<span class="token operator">:</span> \u751F\u6210\u4EE3\u7801\u5185\u5BB9<span class="token punctuation">,</span>\u8F93\u51FA\u6587\u4EF6
</code></pre></div><p>\\2. loader\u6267\u884C\u987A\u5E8F\uFF0C\u4ECE\u4E0B\u800C\u4E0A\uFF0C\u4ECE\u53F3\u800C\u5DE6</p><p>\u200B</p><p>\\3. plugin</p><p>Compression-webpack-plugin</p><p>Terse-webpack-plugin</p><p>Theme-color-replace</p><h4 id="webpack-\u539F\u7406" tabindex="-1">webpack \u539F\u7406 <a class="header-anchor" href="#webpack-\u539F\u7406" aria-hidden="true">#</a></h4><h4 id="babel-\u539F\u7406" tabindex="-1">babel \u539F\u7406 <a class="header-anchor" href="#babel-\u539F\u7406" aria-hidden="true">#</a></h4><h4 id="\u865A\u62DF-dom-\u7684\u7406\u89E3" tabindex="-1">\u865A\u62DF DOM \u7684\u7406\u89E3 <a class="header-anchor" href="#\u865A\u62DF-dom-\u7684\u7406\u89E3" aria-hidden="true">#</a></h4><h4 id="\u9879\u76EE\u91CC\u5982\u4F55\u505A\u7684\u6027\u80FD\u4F18\u5316" tabindex="-1">\u9879\u76EE\u91CC\u5982\u4F55\u505A\u7684\u6027\u80FD\u4F18\u5316 <a class="header-anchor" href="#\u9879\u76EE\u91CC\u5982\u4F55\u505A\u7684\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a></h4><h4 id="\u5199\u8FC7webpack-loader-\u6216\u8005\u63D2\u4EF6\u5417" tabindex="-1">\u5199\u8FC7webpack loader \u6216\u8005\u63D2\u4EF6\u5417 <a class="header-anchor" href="#\u5199\u8FC7webpack-loader-\u6216\u8005\u63D2\u4EF6\u5417" aria-hidden="true">#</a></h4><h4 id="\u8BB2\u8BB2\u4F60\u5199\u7684-babel-\u63D2\u4EF6-\u4F5C\u8005\uFF1A\u7116\u8C46\u4E0D\u95F7-https-www-bilibili-com-read-cv11635943-\u51FA\u5904\uFF1Abilibili" tabindex="-1">\u8BB2\u8BB2\u4F60\u5199\u7684 babel \u63D2\u4EF6 \u4F5C\u8005\uFF1A\u7116\u8C46\u4E0D\u95F7 <a href="https://www.bilibili.com/read/cv11635943/" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/read/cv11635943/</a> \u51FA\u5904\uFF1Abilibili <a class="header-anchor" href="#\u8BB2\u8BB2\u4F60\u5199\u7684-babel-\u63D2\u4EF6-\u4F5C\u8005\uFF1A\u7116\u8C46\u4E0D\u95F7-https-www-bilibili-com-read-cv11635943-\u51FA\u5904\uFF1Abilibili" aria-hidden="true">#</a></h4><p>\u200B</p>`,17),o=[t];function c(i,l,r,u,k,d){return s(),a("div",null,o)}var m=n(e,[["render",c]]);export{b as __pageData,m as default};
