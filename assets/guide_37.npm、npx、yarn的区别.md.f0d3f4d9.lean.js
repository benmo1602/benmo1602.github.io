import{_ as n,c as a,o as p,d as e}from"./app.de2db455.js";const x='{"title":"npm, npx, yarn \u7684\u533A\u522B","description":"","frontmatter":{},"headers":[{"level":3,"title":"npm, npx, yarn \u7684\u533A\u522B","slug":"npm-npx-yarn-\u7684\u533A\u522B"}],"relativePath":"guide/37.npm\u3001npx\u3001yarn\u7684\u533A\u522B.md","lastUpdated":1644893039691}',r={},t=e(`__VP_STATIC_START__<h3 id="npm-npx-yarn-\u7684\u533A\u522B" tabindex="-1">npm, npx, yarn \u7684\u533A\u522B <a class="header-anchor" href="#npm-npx-yarn-\u7684\u533A\u522B" aria-hidden="true">#</a></h3><p>yarn \u548C npm \u90FD\u662F node \u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\uFF0C</p><h4 id="_1-yarn-\u548C-npm-\u7684\u533A\u522B" tabindex="-1">1. yarn \u548C npm \u7684\u533A\u522B <a class="header-anchor" href="#_1-yarn-\u548C-npm-\u7684\u533A\u522B" aria-hidden="true">#</a></h4><ol><li>yarn: \u662F\u540C\u6B65\u6267\u884C\u6240\u6709\u4EFB\u52A1\uFF0C\u63D0\u9AD8\u4E86\u6027\u80FD\uFF0C \u800C\u4E14\u5982\u679C\u4F60\u4E0A\u4E00\u6B21\u5B89\u88C5\u8FC7\u8F6F\u4EF6\u5305\uFF0C\u7B2C\u4E8C\u4E2A\u4F1A\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6</li><li>npm: \u662F\u6309\u7167\u961F\u5217\u6267\u884C\u6BCF\u4E00\u4E2Apackage, \u6BCF\u4E00\u6B21\u90FD\u662F\u4ECE\u7F51\u7EDC\u4E0A\u4E0B\u8F7D\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5FC5\u987B\u8981\u7B49\u5230\u5F53\u524D package \u5B89\u88C5\u5B8C\u6210\u4E4B\u540E\uFF0C\u624D\u80FD\u7EE7\u7EED\u540E\u9762\u7684\u5B89\u88C5</li></ol><div class="language-json"><pre><code><span class="token string">&quot;6.0.3&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u8868\u793A\u5B89\u88C5\u6307\u5B9A\u76846.0.3\u7248\u672C</span>
<span class="token string">&quot;~6.0.3&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8868\u793A\u5B89\u88C56.0.X\u4E2D\u6700\u65B0\u7684\u7248\u672C</span>
<span class="token string">&quot;^6.0.3&quot;</span>  <span class="token comment">// \u8868\u793A\u5B89\u88C56.X.X\u4E2D\u6700\u65B0\u7684\u7248\u672C</span>
</code></pre></div><h4 id="_2-npm-\u548C-npx-\u5BF9\u6BD4" tabindex="-1">2. npm \u548C npx \u5BF9\u6BD4 <a class="header-anchor" href="#_2-npm-\u548C-npx-\u5BF9\u6BD4" aria-hidden="true">#</a></h4><div class="language-"><pre><code>* npm \u662F node \u8F6F\u4EF6\u5305\u7684\u7BA1\u7406\u5668
* npx \u662F node \u8F6F\u4EF6\u5305\u7684\u6267\u884C\u5DE5\u5177
  \u5B98\u65B9\u6587\u6863\uFF0C\u4ECEnpm@5.2.0 \u7248\u672C\u5F00\u59CB\uFF0Cnpx\u5C31\u548Cnpm\u6346\u7ED1\u5728\u4E86\u4E00\u8D77\uFF0C\u53EF\u4EE5\u8BA4\u4E3Anpx\u662Fnpm \u7684\u9AD8\u7EA7\u7248\u672C\uFF0Cnpx \u5177\u6709\u66F4\u5F3A\u5927\u7684\u529F\u80FD\uFF0C
** npx\u662F\u4E00\u4E2A\u53EF\u6267\u884C\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u539F\u7406\u5F88\u7B80\u5355\uFF0C\u8FD0\u884Cnpx\u7684\u65F6\u5019\uFF0C\u9ED8\u8BA4\u4F1A\u5230 node_modules/.bin \u8DEF\u5F84\u548C\u73AF\u5883\u53D8\u91CF$PATH\u91CC\u9762\uFF0C\u68C0\u67E5\u547D\u4EE4\u662F\u5426\u5B58\u5728

For Example:
\u9879\u76EE\u4E2D\u60F3\u8FD0\u884C\u4E00\u4E2A\u811A\u672C\u547D\u4EE4\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A
 1\uFF0C package.json\u4E2D\u914D\u7F6Escript\u811A\u672C
 {
   &quot;scripts&quot;: {
     &quot;mocha&quot;: xxxx
   }
 }
 2, \u9879\u76EE\u6839\u76EE\u5F55\u8DEF\u5F84\u4E0B\u9762\uFF1A
  node-modules/.bin/mocha --version

\u73B0\u5728\u6709\u4E86npx\u53EF\u4EE5\u76F4\u63A5\u6267\u884C\uFF1A
npx mocka --version

*** \u6267\u884C\u4E00\u6B21\u6027\u547D\u4EE4
npx \u5F53\u6267\u884C\u4E00\u4E2A\u5305\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u68C0\u67E5\u672C\u5730\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u6CA1\u6709\u4F1A\u4E3A\u4F60\u4ECE npm \u4E0A\u4E0B\u8F7D\uFF0C\u4E34\u65F6\u5B89\u88C5\u8FD9\u4E2A\u5305\uFF0C\u5E76\u4E14\u6267\u884C\u5B83\u3002\u5F53\u505A\u5B8C\u8FD9\u4E9B\u4E8B\u60C5\u540E\uFF0C\u5DF2\u5B89\u88C5\u7684\u5305\u4E0D\u4F1A\u51FA\u73B0\u5728\u4F60\u7684\u5168\u5C40\u5B89\u88C5\u4E2D\uFF0C\u6240\u4EE5\u4E0D\u7528\u62C5\u5FC3\u957F\u671F\u4F7F\u7528\u6240\u5E26\u6765\u7684\u5168\u5C40\u6C61\u67D3\u3002
\u5E38\u7528\u7684\u547D\u4EE4\uFF1A npx create-react-app my-app
\u5B89\u88C5\u4E00\u4E2A\u4E34\u65F6create-react-app\u5E76\u8C03\u7528,\u800C\u4E0D\u7528\u6C61\u67D3\u5168\u5C40\u5B89\u88C5

\u603B\u7ED3\uFF1A\u6267\u884Cnpx\u547D\u4EE4
1.\u9996\u5148\u4F1A\u68C0\u67E5\u672C\u5730\u9879\u76EE\u8DEF\u5F84\u4E2D\u662F\u5426\u5B58\u5728\u8981\u6267\u884C\u7684\u5305
2.\u5982\u679C\u5B58\u5728\uFF0C\u6267\u884C\uFF1B
3.\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u610F\u5473\u7740\u5C1A\u672A\u5B89\u88C5\u8BE5\u8F6F\u4EF6\u5305\uFF0Cnpx\u5C06\u4E34\u65F6\u5B89\u88C5\u5176\u6700\u65B0\u7248\u672C\uFF0C\u7136\u540E\u6267\u884C\u5B83\uFF1B

</code></pre></div><h4 id="_3-pnpm" tabindex="-1">3. pnpm <a class="header-anchor" href="#_3-pnpm" aria-hidden="true">#</a></h4><p>\u200B \u82F1\u6587\u91CC\u9762\u7684\u610F\u601D\u53EB\u505A <code>performant npm</code> \uFF0C\u610F\u5473\u201C\u9AD8\u6027\u80FD\u7684 npm\u201D\uFF0C\u5B98\u7F51\u5730\u5740\u53EF\u4EE5\u53C2\u8003 <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">https://pnpm.io/</a>\u3002</p><p>\u200B \u76F8\u6BD4\u8F83\u4E8E yarn/npm \u8FD9\u4E24\u4E2A\u5E38\u7528\u7684\u5305\u7BA1\u7406\u5DE5\u5177\u5728\u6027\u80FD\u4E0A\u4E5F\u6709\u4E86\u6781\u5927\u7684\u63D0\u5347\uFF0C\u6839\u636E\u76EE\u524D\u5B98\u65B9\u63D0\u4F9B\u7684 benchmark \u6570\u636E\u53EF\u4EE5\u770B\u51FA\u5728\u4E00\u4E9B\u7EFC\u5408\u573A\u666F\u4E0B\u6BD4 npm/yarn \u5FEB\u4E86\u5927\u6982\u4E24\u500D\uFF1A</p><p>\u200B \u7C7B\u4F3C\u4E8E npm link \u9879\u76EE\u4F9D\u8D56\u90FD\u662F\u6765\u81EA\u5168\u5C40 npm link \u8FD9\u79CD\u65B9\u5F0F\uFF0C \u5B58\u5728\u5F88\u591A\u517C\u5BB9\u6027\u95EE\u9898 \uFF0C \u611F\u5174\u8DA3\u53EF\u4EE5\u4E86\u89E3\u4E00\u4E0B</p><h4 id="\u6269\u5C55" tabindex="-1">\u6269\u5C55 <a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a></h4><p>\u56E0\u4E3A\u6709\u4E86yarn\u7684\u51FA\u73B0\uFF0Cnpm5.0\u7248\u672C\u4E4B\u540E\u6539\u8FDB\uFF0C\u5F15\u5165\u4E86package-lock.json\uFF0C\u901F\u5EA6\u548C\u6027\u80FD\u4E0A\u4E5F\u5927\u5927\u63D0\u5347\u3002</p><p>\u5982\u4F55\u9009\u62E9\uFF0C\u4E2A\u4EBA\u5EFA\u8BAE: \u5927\u591A\u6570\u9879\u76EE\u4F9D\u7136\u53EF\u4EE5\u91C7\u53D6\u7528npm\uFF0C\u517C\u5BB9\u6027\u597D\uFF0C\u6210\u719F\uFF0C\u7A33\u5B9A\uFF0C\u79CD\u7C7B\u591A\uFF0C\u6709\u8DA3\uFF0C\u5B83\u548Cnode\u4E00\u8D77\u63D0\u4F9B\uFF0C\u7BA1\u7406\u5305\u5B89\u5168\u653E\u5FC3\uFF0C</p><p>\u5173\u4E8E\u5F00\u53D1\u8FC7\u7A0B\u4E2D \u53EF\u80FD\u4F1A\u9047\u5230\u4E0D\u540C\u7248\u672C\u7684node \u3001npm \u9700\u6C42 \u53EF\u4EE5\u901A\u8FC7 nvm \u8FDB\u884C \u591A\u7248\u672C\u7BA1\u7406</p>__VP_STATIC_END__`,15),s=[t];function o(c,d,i,m,l,_){return p(),a("div",null,s)}var u=n(r,[["render",o]]);export{x as __pageData,u as default};
