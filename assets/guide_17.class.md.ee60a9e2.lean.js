import{_ as n,c as s,o as a,d as t}from"./app.de2db455.js";const g='{"title":"Class","description":"","frontmatter":{},"headers":[{"level":2,"title":"Mix-ins / \u6DF7\u5165","slug":"mix-ins-\u6DF7\u5165"},{"level":3,"title":"Class \u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406","slug":"class-\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406"}],"relativePath":"guide/17.class.md","lastUpdated":1644893039683}',p={},o=t(`__VP_STATIC_START__<h1 id="class" tabindex="-1">Class <a class="header-anchor" href="#class" aria-hidden="true">#</a></h1><p>\u5B9E\u9645\u4E0A\uFF0C\u7C7B\u662F\u201C\u7279\u6B8A\u7684<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions" target="_blank" rel="noopener noreferrer">\u51FD\u6570</a>\u201D\uFF0C \u5C31\u50CF\u4F60\u80FD\u591F\u5B9A\u4E49\u7684<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function" target="_blank" rel="noopener noreferrer">\u51FD\u6570\u8868\u8FBE\u5F0F</a>\u548C<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function" target="_blank" rel="noopener noreferrer">\u51FD\u6570\u58F0\u660E</a>\u4E00\u6837\uFF0C\u7C7B\u8BED\u6CD5\u6709\u4E24\u4E2A\u7EC4\u6210\u90E8\u5206\uFF1A<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/class" target="_blank" rel="noopener noreferrer">\u7C7B\u8868\u8FBE\u5F0F</a>\u548C<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/class" target="_blank" rel="noopener noreferrer">\u7C7B\u58F0\u660E</a>\u3002</p><p>\u7C7B\u58F0\u660E\u548C \u51FD\u6570\u58F0\u660E</p><p>\u7C7B\u8868\u8FBE\u5F0F\u548C \u51FD\u6570\u8868\u8FBE\u5F0F</p><ol><li>\u7C7B \u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347</li></ol><div class="language-js"><pre><code><span class="token comment">// \u672A\u547D\u540D/\u533F\u540D\u7C7B</span>
<span class="token keyword">let</span> Rectangle <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">height<span class="token punctuation">,</span> width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Rectangle<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// output: &quot;Rectangle&quot;</span>

<span class="token comment">// \u547D\u540D\u7C7B</span>
<span class="token keyword">let</span> Rectangle <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle2</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">height<span class="token punctuation">,</span> width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Rectangle<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u8F93\u51FA: &quot;Rectangle2&quot;</span>
</code></pre></div><ol start="2"><li><p>\u6784\u9020\u51FD\u6570 constructor \u4E00\u4E2A\u7C7B\u53EA\u80FD\u62E5\u6709\u4E00\u4E2A</p></li><li><p>getter\u3001 setter\u3001 methods</p></li><li><p>\u79C1\u6709\u5B57\u6BB5\u58F0\u660E\u3001 \u516C\u6709\u5B57\u6BB5\u58F0\u660E</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
  #height <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  #width<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">height<span class="token punctuation">,</span> width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#height <span class="token operator">=</span> height<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#width <span class="token operator">=</span> width<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
  height <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  width<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">height<span class="token punctuation">,</span> width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>static \u9759\u6001\u51FD\u6570</p><p>\u9759\u6001 \u65B9\u6CD5\u4E0D\u662F\u80FD\u88AB\u5B9E\u4F8B\u4F7F\u7528\u7684 \u4F46\u662F\u53EF\u4EE5\u901A\u8FC7\u7C7B\u8BBF\u95EE</p><p>dart \u91CC\u7684\u9759\u6001\u65B9\u6CD5 \u4E5F\u662F\u4E0D\u80FD\u5728\u5B9E\u4F8B\u4E0A\u8BBF\u95EE</p></li><li><p>extends \u7EE7\u627F</p><ol><li><p>\u5B50\u7C7B\u4E2D\u5B9A\u4E49\u4E86\u6784\u9020\u51FD\u6570\uFF0C\u90A3\u4E48\u5B83\u5FC5\u987B\u5148\u8C03\u7528 <code>super()</code> \u624D\u80FD\u4F7F\u7528 <code>this</code></p></li><li><p>\u8BF7\u6CE8\u610F\uFF0C\u7C7B\u4E0D\u80FD\u7EE7\u627F\u5E38\u89C4\u5BF9\u8C61\uFF08\u4E0D\u53EF\u6784\u9020\u7684\uFF09\u3002\u5982\u679C\u8981\u7EE7\u627F\u5E38\u89C4\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u6539\u7528<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf" target="_blank" rel="noopener noreferrer"><code>Object.setPrototypeOf()</code></a>\uFF1A</p><div class="language-"><pre><code>var Animal = {
  speak() {
    console.log(this.name + &#39; makes a noise.&#39;);
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Object.setPrototypeOf(Dog.prototype, Animal);// \u5982\u679C\u4E0D\u8FD9\u6837\u505A\uFF0C\u5728\u8C03\u7528speak\u65F6\u4F1A\u8FD4\u56DETypeError

var d = new Dog(&#39;Mitzie&#39;);
d.speak(); // Mitzie makes a noise.
</code></pre></div></li></ol></li><li><h2 id="mix-ins-\u6DF7\u5165" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes#mix-ins_%E6%B7%B7%E5%85%A5" target="_blank" rel="noopener noreferrer">Mix-ins / \u6DF7\u5165</a> <a class="header-anchor" href="#mix-ins-\u6DF7\u5165" aria-hidden="true">#</a></h2><p>\u62BD\u8C61\u5B50\u7C7B\u6216\u8005 mix-ins \u662F\u7C7B\u7684\u6A21\u677F\u3002 \u4E00\u4E2A ECMAScript \u7C7B\u53EA\u80FD\u6709\u4E00\u4E2A\u5355\u8D85\u7C7B\uFF0C\u6240\u4EE5\u60F3\u8981\u4ECE\u5DE5\u5177\u7C7B\u6765\u591A\u91CD\u7EE7\u627F\u7684\u884C\u4E3A\u662F\u4E0D\u53EF\u80FD\u7684\u3002\u5B50\u7C7B\u7EE7\u627F\u7684\u53EA\u80FD\u662F\u7236\u7C7B\u63D0\u4F9B\u7684\u529F\u80FD\u6027\u3002\u56E0\u6B64\uFF0C\u4F8B\u5982\uFF0C\u4ECE\u5DE5\u5177\u7C7B\u7684\u591A\u91CD\u7EE7\u627F\u662F\u4E0D\u53EF\u80FD\u7684\u3002\u8BE5\u529F\u80FD\u5FC5\u987B\u7531\u8D85\u7C7B\u63D0\u4F9B\u3002</p><p>\u4E00\u4E2A\u4EE5\u8D85\u7C7B\u4F5C\u4E3A\u8F93\u5165\u7684\u51FD\u6570\u548C\u4E00\u4E2A\u7EE7\u627F\u8BE5\u8D85\u7C7B\u7684\u5B50\u7C7B\u4F5C\u4E3A\u8F93\u51FA\u53EF\u4EE5\u7528\u4E8E\u5728ECMAScript\u4E2D\u5B9E\u73B0\u6DF7\u5408\uFF1A</p><div class="language-"><pre><code>var calculatorMixin = Base =&gt; class extends Base {
  calc() { }
};

var randomizerMixin = Base =&gt; class extends Base {
  randomize() { }
};
</code></pre></div><p>Copy to Clipboard</p><p>\u4F7F\u7528 mix-ins \u7684\u7C7B\u53EF\u4EE5\u50CF\u4E0B\u9762\u8FD9\u6837\u5199\uFF1A</p><div class="language-"><pre><code>class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }
</code></pre></div><p>Copy to Clipboard</p></li></ol><h3 id="class-\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406" tabindex="-1">Class \u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406 <a class="header-anchor" href="#class-\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;run&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>ES5</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Person<span class="token punctuation">.</span><span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;run&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>babel \u7F16\u8BD1\u5206\u6790</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">_classCallCheck</span><span class="token punctuation">(</span><span class="token parameter">instance<span class="token punctuation">,</span> Constructor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>instance <span class="token keyword">instanceof</span> <span class="token class-name">Constructor</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&quot;Cannot call a class as a function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">_defineProperties</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> props<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> descriptor <span class="token operator">=</span> props<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    descriptor<span class="token punctuation">.</span>enumerable <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>enumerable <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    descriptor<span class="token punctuation">.</span>configurable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span> <span class="token keyword">in</span> descriptor<span class="token punctuation">)</span> descriptor<span class="token punctuation">.</span>writable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> descriptor<span class="token punctuation">.</span>key<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">_createClass</span><span class="token punctuation">(</span><span class="token parameter">Constructor<span class="token punctuation">,</span> protoProps<span class="token punctuation">,</span> staticProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>protoProps<span class="token punctuation">)</span> <span class="token function">_defineProperties</span><span class="token punctuation">(</span><span class="token class-name">Constructor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> protoProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>staticProps<span class="token punctuation">)</span> <span class="token function">_defineProperties</span><span class="token punctuation">(</span>Constructor<span class="token punctuation">,</span> staticProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> Constructor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> Person <span class="token operator">=</span> <span class="token comment">/*#__PURE__*/</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">_classCallCheck</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> Person<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">_createClass</span><span class="token punctuation">(</span>
    Person<span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">&quot;say&quot;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">value</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">&quot;run&quot;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">value</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;run&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> Person<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><ul><li><p>\u6682\u65F6\u6027\u6B7B\u533A</p></li><li><p>\u4E25\u683C\u6A21\u5F0F class \u9ED8\u8BA4\u4E8F\u6C14\u4E25\u683C\u6A21\u5F0F \uFF0C \u6784\u9020\u51FD\u6570 \u9ED8\u8BA4 \u975E\u4E25\u683C\u6A21\u5F0F</p></li><li><p>\u5185\u90E8\u65B9\u6CD5 \u4E0D\u53EF\u679A\u4E3E class \u7684\u6240\u6709\u65B9\u6CD5\uFF08\u9759\u6001 \u3001 \u5B9E\u4F8B\uFF09 \u90FD\u4E0D\u53EF\u679A\u4E3E \uFF1B \u6784\u9020\u51FD\u6570\u53EF\u679A\u4E3E\u6240\u6709\u65B9\u6CD5</p></li><li><p>\u539F\u578B\u5BF9\u8C61 prototype <code>class</code> \u7684\u6240\u6709\u65B9\u6CD5\uFF08\u5305\u62EC <code>\u9759\u6001\u65B9\u6CD5</code>\u3001<code>\u5B9E\u4F8B\u65B9\u6CD5</code>\uFF09\u90FD\u6CA1\u6709\u539F\u578B\u5BF9\u8C61 <code>prototype</code>\uFF0C\u56E0\u6B64\u4E5F\u6CA1\u6709 <code>[[construct]]</code>\uFF0C\u4E0D\u80FD\u901A\u8FC7 <code>new</code> \u6765\u8C03\u7528\uFF0C\u6784\u9020\u51FD\u6570\u5219\u652F\u6301 <code>new</code> \u8C03\u7528\u3002</p></li><li><p>new \u8C03\u7528 <code>class</code> \u5FC5\u987B\u4F7F\u7528 <code>new</code> \u8C03\u7528\uFF0C\u6784\u9020\u51FD\u6570\u7684\u672C\u8D28\u662F\u51FD\u6570\uFF0C\u652F\u6301\u76F4\u63A5\u8C03\u7528\u3002</p></li><li></li></ul>__VP_STATIC_END__`,14),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{g as __pageData,f as default};
