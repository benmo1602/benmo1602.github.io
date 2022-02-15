import{_ as n,c as s,o as a,a as t}from"./app.1f105cca.js";const m='{"title":"","description":"","frontmatter":{},"relativePath":"guide/13.js\u6570\u636E\u7C7B\u578B.md","lastUpdated":1644893347189}',p={},o=t(`__VP_STATIC_START__<p>js\u6570\u636E\u7C7B\u578B</p><div class="language-js"><pre><code><span class="token number">8</span>\u79CD
<span class="token keyword">undefined</span>\u3001 <span class="token keyword">null</span>\u3001 Number \u3001 string\u3001 Boolern\u3001 symbol\u3001 BigInt\u3001 object
\u5185\u7F6E\u5BF9\u8C61
Array
AggregateError <span class="token comment">// \u9519\u8BEF\u96C6\u5408</span>
ArrayBuffer

</code></pre></div><p>\u5224\u65ADjs\u6570\u636E\u7C7B\u578B\u7684\u65B9\u6CD5</p><div class="language-js"><pre><code><span class="token number">1.</span>\u6700\u5E38\u89C1\u7684\u5224\u65AD\u65B9\u6CD5\uFF1A<span class="token keyword">typeof</span>

<span class="token number">2.</span>\u5DF2\u77E5\u5BF9\u8C61\u7C7B\u578B<span class="token operator">:</span>   <span class="token keyword">instanceof</span> 

<span class="token class-name">3<span class="token punctuation">.</span></span>\u5BF9\u8C61\u539F\u578B\u94FE\u5224\u65AD\u65B9\u6CD5\uFF1A prototype \u901A\u7528\u4F46\u5F88\u7E41\u7410

<span class="token number">4.</span>\u6839\u636E\u5BF9\u8C61\u7684\u6784\u9020\u5668constructor\u8FDB\u884C\u5224\u65AD

<span class="token number">5.</span>jQuery\u65B9\u6CD5\uFF1A jquery<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token number">6.</span>\u4E25\u683C\u8FD0\u7B97\u7B26<span class="token operator">:</span>   <span class="token operator">===</span>
</code></pre></div><ol><li>typeof</li></ol><div class="language-js"><pre><code><span class="token number">6</span> \u79CD\u539F\u59CB\u7C7B\u578B\uFF0C\u4F7F\u7528 <span class="token keyword">typeof</span> \u8FD0\u7B97\u7B26\u68C0\u67E5<span class="token operator">:</span>
  <span class="token keyword">undefined</span>\uFF1A<span class="token keyword">typeof</span> instance <span class="token operator">===</span> <span class="token string">&quot;undefined&quot;</span>
  Boolean\uFF1A<span class="token keyword">typeof</span> instance <span class="token operator">===</span> <span class="token string">&quot;boolean&quot;</span>
  Number\uFF1A<span class="token keyword">typeof</span> instance <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span>
  String\uFF1A<span class="token keyword">typeof</span> instance <span class="token operator">===</span> &quot;string
  BigInt\uFF1A<span class="token keyword">typeof</span> instance <span class="token operator">===</span> <span class="token string">&quot;bigint&quot;</span>
  Symbol \uFF1A<span class="token keyword">typeof</span> instance <span class="token operator">===</span> <span class="token string">&quot;symbol&quot;</span>
<span class="token keyword">null</span>\uFF1A<span class="token keyword">typeof</span> instance <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span>\u3002
Object\uFF1A<span class="token keyword">typeof</span> instance <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span>\u3002

\u7F3A\u70B9\uFF1A
\u4EFB\u4F55 constructed \u5BF9\u8C61\u5B9E\u4F8B\u7684\u7279\u6B8A\u975E\u6570\u636E\u7ED3\u6784\u7C7B\u578B\uFF0C\u4E5F\u7528\u505A\u6570\u636E\u7ED3\u6784\uFF1A
 <span class="token keyword">new</span> <span class="token class-name">Object</span>\uFF0C
 <span class="token keyword">new</span> <span class="token class-name">Array</span>\uFF0C
 <span class="token keyword">new</span> <span class="token class-name">Map</span>\uFF0C
 <span class="token keyword">new</span> <span class="token class-name">Set</span>\uFF0C
 <span class="token keyword">new</span> <span class="token class-name">WeakMap</span>\uFF0C
 <span class="token keyword">new</span> <span class="token class-name">WeakSet</span>\uFF0C
 <span class="token keyword">new</span> <span class="token class-name">Date</span>\uFF0C
 <span class="token keyword">typeof</span> \u7684\u7ED3\u679C\u90FD\u662F object
</code></pre></div><ol start="2"><li>instanceof</li></ol><div class="language-js"><pre><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span>           <span class="token comment">// true</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">Date</span>         <span class="token comment">// true</span>
<span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">Function</span> <span class="token comment">// true</span>
<span class="token keyword">null</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span>             <span class="token comment">// false</span>
</code></pre></div><p>3.\u5BF9\u8C61\u539F\u578B\u94FE\u5224\u65AD\u65B9\u6CD5\uFF1A prototype toString</p><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>          <span class="token comment">// [object String]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span>            <span class="token comment">// [object Number]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [object Number]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>          <span class="token comment">// [object Boolean]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>       <span class="token comment">// [object Array]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span>           <span class="token comment">// [object Null]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span>       <span class="token comment">// [object Undefined]</span>
</code></pre></div><ol start="4"><li>constructor</li></ol><div class="language-js"><pre><code>constructor \u5224\u65AD\u65B9\u6CD5\u8DDF<span class="token keyword">instanceof</span>\u76F8\u4F3C<span class="token punctuation">,</span>\u4F46\u662Fconstructor\u68C0\u6D4BObject\u4E0E<span class="token keyword">instanceof</span>\u4E0D\u4E00\u6837<span class="token punctuation">,</span>constructor\u8FD8\u53EF\u4EE5\u5904\u7406\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u68C0\u6D4B<span class="token punctuation">,</span>\u4E0D\u4EC5\u4EC5\u662F\u5BF9\u8C61\u7C7B\u578B
\u6CE8\u610F<span class="token operator">:</span>
 <span class="token number">1.</span>null\u548C<span class="token keyword">undefined</span>\u6CA1\u6709constructor<span class="token punctuation">;</span>
 <span class="token number">2.</span><span class="token function">\u5224\u65AD\u6570\u5B57\u65F6\u4F7F\u7528</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">\u6BD4\u5982</span>  <span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">.</span>constructor<span class="token punctuation">,</span><span class="token class-name">\u5982\u679C\u5199\u6210123</span><span class="token punctuation">.</span>constructor\u4F1A\u62A5\u9519
 <span class="token number">3.</span>constructor\u5728\u7C7B\u7EE7\u627F\u65F6\u4F1A\u51FA\u9519<span class="token punctuation">,</span>\u56E0\u4E3AObject\u88AB\u8986\u76D6\u6389\u4E86<span class="token punctuation">,</span>\u68C0\u6D4B\u7ED3\u679C\u5C31\u4E0D\u5BF9\u4E86
</code></pre></div><p>\u4E94.jQuery\u65B9\u6CD5\uFF1A jquery.type()</p><div class="language-"><pre><code>\u636E\u8BF4\u662F\u65E0\u654C\u4E07\u80FD\u7684\u65B9\u6CD5.\u5982\u679C\u5BF9\u8C61\u662Fnull\u8DDFundefined,\u76F4\u63A5\u8FD4\u56DE&quot;null&quot;\u548C&quot;undefined&quot;,

\u6CE8\u610F:\u5728\u4F7F\u7528\u65F6,\u4E00\u5B9A\u8981\u5F15\u5165jquery\u6587\u4EF6,\u4E0D\u7136\u4F1A\u62A5\u9519,jQuery is not defined


\u4E00\u822C\u53D8\u91CF\u7528typeof,

\u5DF2\u77E5\u5BF9\u8C61\u7C7B\u578B\u7528instanceof,

\u901A\u7528\u65B9\u6CD5Object.prototype.toString.call()

jQuery\u9879\u76EE\u4E07\u80FD\u65B9\u6CD5jQuery.type()
</code></pre></div><p>\u53C2\u7167jq \u5C01\u88C5</p><div class="language-js"><pre><code><span class="token keyword">const</span> class2type <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> typeList <span class="token operator">=</span> <span class="token string">&quot;Boolean Number String Function Array Date RegExp Object Error Symbol Bigint&quot;</span><span class="token punctuation">;</span>
typeList<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  class2type<span class="token punctuation">[</span><span class="token string">&quot;[object &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">toType</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> obj <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span>
    <span class="token operator">?</span> class2type<span class="token punctuation">[</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&quot;object&quot;</span>
    <span class="token operator">:</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,16),e=[o];function c(l,u,k,i,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
