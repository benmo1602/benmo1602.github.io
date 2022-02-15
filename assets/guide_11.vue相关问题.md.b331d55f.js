import{_ as e,c as n,o as t,d as r}from"./app.de2db455.js";const _='{"title":"Vue","description":"","frontmatter":{},"headers":[{"level":3,"title":"Vue","slug":"vue"}],"relativePath":"guide/11.vue\u76F8\u5173\u95EE\u9898.md","lastUpdated":1644893039678}',a={},s=r(`<h3 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-hidden="true">#</a></h3><p>\u200B new Vue</p><div class="language-"><pre><code>\u521D\u59CB\u5316\u751F\u547D\u5468\u671F\u3001 \u4E8B\u4EF6\u3001data\u3001props\u3001watch\u3001computed\uFF0C \u901A\u8FC7Object.defineProprety \u8BBE\u7F6E setter\u3001 getter \u51FD\u6570\u5B9E\u73B0\u54CD\u5E94\u5F0F \u4EE5\u53CA \u4F9D\u8D56\u6536\u96C6\uFF1B

\u521D\u59CB\u5316\u4E4B\u540E \u8C03\u7528$mount\u8FDB\u884C\u7EC4\u4EF6\u6302\u8F7D

template \u9700\u8981\u7F16\u8BD1\u3001 render \uFF0C function\u4E0D\u9700\u8981\u7F16\u8BD1

vue2 \u7F16\u8BD1

parse  =&gt; AST\u3001
optimize =&gt; \u6807\u8BB0 static \u9759\u6001\u8282\u70B9\uFF08\u5728update\u65F6\uFF0C diff \u7B97\u6CD5\u7684 path \u4F1A\u76F4\u63A5 \u8DF3\u8FC7 \u9759\u6001static \u8282\u70B9\u63D0\u5347\u6027\u80FD\uFF09\u3001
generate  \uFF08AST\uFF09 =&gt; render function  \uFF08\u5B57\u7B26\u4E32\u3001 staticRenderFns\uFF09
\u5728\u7ECF\u5386\u8FC7 \`parse\`\u3001\`optimize\` \u4E0E \`generate\` \u8FD9\u4E09\u4E2A\u9636\u6BB5\u4EE5\u540E\uFF0C\u7EC4\u4EF6\u4E2D\u5C31\u4F1A\u5B58\u5728\u6E32\u67D3 VNode \u6240\u9700\u7684 render function \u4E86\u3002

render function \u5728\u6E32\u67D3\u65F6 \u4F1A\u8BFB\u53D6\u6240\u9700\u8981\u7684\u503C\uFF0C \u89E6\u53D1getter \u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\uFF0C
\u4F9D\u8D56\u6536\u96C6 \u5C06\u89C2\u5BDF\u8005 watcher \u5BF9\u8C61 \u5B58\u653E\u5230 \u5F53\u524D\u95ED\u5305\u7684 Dep\u8BA2\u9605\u8005\u7684 subs\u4E2D
\u89E6\u53D1setter\u65F6\u5019 \uFF0C setter \u901A\u77E5\u4E4B\u524D\u7684\u4F9D\u8D56\u6536\u96C6\u5F97\u5230 Dep \u4E2D\u7684subs \uFF08\u8BA2\u9605\uFF09\u591A\u4E2Awatcher \uFF0C \u89E6\u53D1notify \uFF08\u53D1\u5E03\uFF09 \u901A\u77E5\u6BCF\u4E00\u4E2Asubs \u7684watcher \u66F4\u65B0\u89C6\u56FE\uFF0C watcher =&gt; update , \u89E6\u53D1 patch \u7ECF\u8FC7 diff\u7B97\u6CD5  \uFF08\u53CC\u6307\u9488, \u7EB5\u5411\u5BF9\u6BD4\uFF09
</code></pre></div><p>VNode</p><div class="language-"><pre><code>\u8282\u70B9\u6709\u66F4\u591A\u7684\u5C5E\u6027\u6765\u6807\u5FD7\u8282\u70B9\uFF0C\u6BD4\u5982 isStatic \uFF08\u4EE3\u8868\u662F\u5426\u4E3A\u9759\u6001\u8282\u70B9\uFF09\u3001 isComment \uFF08\u4EE3\u8868\u662F\u5426\u4E3A\u6CE8\u91CA\u8282\u70B9\uFF09\u7B49\u3002
</code></pre></div><ol><li><p>vue\u7684\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\u5B9E\u73B0\u539F\u7406</p><div class="language-"><pre><code>\u91C7\u7528\u6570\u636E\u52AB\u6301\u548C\u53D1\u5E03\u8005-\u8BA2\u9605\u8005\u6A21\u5F0F
\u6570\u636E\u52AB\u6301\u662F\u5229\u7528ES5\u7684Object.defineProperty(obj,key,val)\u65B9\u6CD5\u6765\u52AB\u6301\u6BCF\u4E2A\u5C5E\u6027\u7684getter\u548Csetter\uFF0C\u5728\u6570\u636E\u53D8\u52A8\u662F\u53D1\u5E03\u6D88\u606F\u7ED9\u8BA2\u9605\u8005\uFF0C\u4ECE\u800C\u89E6\u53D1\u76F8\u5E94\u7684\u56DE\u8C03\u6765\u66F4\u65B0\u89C6\u56FE\uFF0C\u4E0B\u9762\u6765\u4E00\u6B65\u6B65\u5B9E\u73B0\u3002

\u57FA\u4E8E object.defineProperty \u5B9A\u4E49 setter\uFF0C getter
proxy
</code></pre></div></li><li><p>\u89C2\u5BDF\u8005\u6A21\u5F0F vs \u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F</p><div class="language-"><pre><code>watcher \u662F\u5728render funtion  \u5728\u6E32\u67D3\u7684\u65F6\u5019 \u89E6\u51FA\u53D1getter \u8FDB\u884C\u4F9D\u8D56\u6536\u96C6

\u4F9D\u8D56\u6536\u96C6 \u5C06watcher \u5BF9\u8C61\u653E\u5165 Dep\u8BA2\u9605\u7684subs\u4E2D \uFF08\u8BA2\u9605\uFF09\uFF0C

\u5F53\u65F6\u51FA\u53D1setter \u7684\u65F6\u5019\uFF0C setter  \u901A\u77E5 \u4E4B\u524D\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\u7684Dep \u7684subs \uFF08\u8BA2\u9605\uFF09\u591A\u4E2Awatcher \u51FA\u53D1 notify\uFF08\u53D1\u5E03\uFF09

\u901A\u77E5\u6BCF\u4E00\u4E2A subs \u7684watcher \u66F4\u65B0\u89C6\u56FE

watcher =&gt; update \u89E6\u53D1 patch \u66F4\u8FC7diff \u7B97\u6CD5 \uFF08\u53CC\u6307\u9488\uFF0C \u7EB5\u5411\u5BF9\u6BD4\uFF09\u7136\u540E\u66F4\u65B0VNode
</code></pre></div></li><li><p>\u5BF9\u4E8E MVVM \u7406\u89E3\u7684</p><div class="language-"><pre><code>\u4EC0\u4E48\u662FMVC

MVC \u662F Model-View-Controller \u7684\u7F29\u5199\uFF0C\u5373 \u6A21\u578B\u2014\u89C6\u56FE\u2014\u63A7\u5236\u5668 \u3002
Model\uFF1A\u540E\u7AEF\u4F20\u9012\u7684 \u6570\u636E \u3002
View\uFF1A\u6240\u770B\u5230\u7684 \u9875\u9762 \u3002
Controller\uFF1A\u9875\u9762 \u4E1A\u52A1\u903B\u8F91 \u3002
MVC\u662F \u5355\u5411\u901A\u4FE1 \u3002\u5373View\u548CModel\uFF0C\u5FC5\u987B\u901A\u8FC7Controller\u6765\u627F\u4E0A\u542F\u4E0B\u3002
\u4F7F\u7528MVC\u7684 \u76EE\u7684 \u5C31\u662F \u5C06M\u548CV\u7684\u4EE3\u7801\u5206\u79BB \u3002
MVC\u548CMVVM\u7684\u5173\u7CFB

MVVM\u662F\u5C06\u4E4B\u524D\u7684MVC\u540E\u7AEF\u5F00\u53D1\uFF1A

M\uFF1Amodel\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E
V\uFF1Aview\u524D\u7AEF\u9875\u9762
C\uFF1Acontroller\u540E\u7AEF\u63A7\u5236\u5668
\u4E2D\u7684V\u5373View\u5206\u6210\u4E86MVVM\u6A21\u5F0F

MVVM\u6A21\u5F0F\uFF1A\u4E0D\u9700\u8981\u7528\u6237\u624B\u52A8\u7684\u64CD\u4F5Cdom\u7684\uFF0C\u4E3B\u8981\u662F\u5B9E\u73B0\u6570\u636E\u53CC\u5411\u7ED1\u5B9A

[\u6269\u5C55\u95EE\u9898]\uFF1AVUE\u548CMVVM\u7684\u5173\u7CFB

Vue.js \u53EF\u4EE5\u8BF4\u662FMVVM \u67B6\u6784\u7684\u6700\u4F73\u5B9E\u8DF5\uFF0CVUE\u5E76\u6CA1\u6709\u5B8C\u5168\u9075\u5FAAMVVM\uFF0C\u4E13\u6CE8\u4E8E MVVM \u4E2D\u7684 ViewModel\uFF0C\u4E0D\u4EC5\u505A\u5230\u4E86\u6570\u636E\u53CC\u5411\u7ED1\u5B9A\uFF0C\u800C\u4E14\u4E5F\u662F\u4E00\u6B3E\u76F8\u5BF9\u6BD4\u8F83\u8F7B\u91CF\u7EA7\u7684JS \u5E93\uFF0CAPI \u7B80\u6D01\uFF0C\u5F88\u5BB9\u6613\u4E0A\u624B
\u6B22\u8FCE\u7559\u8A00\`\`\`
</code></pre></div></li><li><p>vue\u7684\u6570\u636E\u53CC\u5411\u7ED1\u5B9A\u539F\u7406</p><div class="language-"><pre><code>Object.defineProperty
</code></pre></div></li><li><p>vue\u5C01\u88C5\u7EC4\u4EF6</p></li><li><p>vue-router\u5B9E\u73B0\u539F\u7406\uFF0C\u4E3A\u4EC0\u4E48\u8981\u9009vue\uFF0C\u4E0E\u5176\u5B83\u6846\u67B6\u5BF9\u6BD4\u7684\u4F18\u52BF\u548C\u52A3\u52BF</p></li><li><p>vuex\u662F\u7528\u6765\u505A\u4EC0\u4E48\u7684\uFF0Cvue\u6E90\u7801\u7ED3\u6784</p></li><li><p>\u7EC4\u4EF6\u7684\u901A\u8BAF\u65B9\u5F0F</p><div class="language-js"><pre><code>props<span class="token operator">/</span> $emit
$emit<span class="token operator">/</span>$on
vuex
$attrs<span class="token operator">/</span>$listeners  \u53EF\u4EE5\u5728 props \u63A7\u5236\u63A5\u6536#attrs
provide<span class="token operator">/</span>inject  \u5B9E\u73B0\u54CD\u5E94\u5F0F <span class="token number">2.6</span>\u7248\u672C \u4F7F\u7528observable
$parent <span class="token operator">/</span> $children\u4E0E ref
</code></pre></div></li></ol>`,6),o=[s];function p(i,d,c,l,u,V){return t(),n("div",null,o)}var M=e(a,[["render",p]]);export{_ as __pageData,M as default};
