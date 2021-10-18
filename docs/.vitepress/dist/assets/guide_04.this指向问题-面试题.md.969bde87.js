import{o as n,c as a,d as s}from"./app.8f4d3ffd.js";const t='{"title":"说出并解释下列代码的输出结果：","description":"","frontmatter":{},"headers":[{"level":2,"title":"说出并解释下列代码的输出结果：","slug":"说出并解释下列代码的输出结果："},{"level":2,"title":"参考答案","slug":"参考答案"}],"relativePath":"guide/04.this指向问题-面试题.md","lastUpdated":1617853712029}',p={},o=s('<h2 id="说出并解释下列代码的输出结果："><a class="header-anchor" href="#说出并解释下列代码的输出结果：" aria-hidden="true">#</a> 说出并解释下列代码的输出结果：</h2><div class="language-JavaScript"><pre><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nFoo<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> <span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nFoo<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">new</span> <span class="token class-name">Foo<span class="token punctuation">.</span>getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">new</span> <span class="token class-name">new</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="参考答案"><a class="header-anchor" href="#参考答案" aria-hidden="true">#</a> 参考答案</h2><h4 id="_1、-foo-getname"><a class="header-anchor" href="#_1、-foo-getname" aria-hidden="true">#</a> 1、 Foo.getName();</h4><p>​ 调用Foo的静态方法，所以，打印2</p><h4 id="_2、-foo-getname"><a class="header-anchor" href="#_2、-foo-getname" aria-hidden="true">#</a> 2、 Foo().getName();</h4><p>​ Foo()就是普通函数调用，返回的this是window，后面调用window.getName() ​ 而window下的getName在Foo()中调用getName被重新赋值,所以,打印1</p><h4 id="_3、-getname"><a class="header-anchor" href="#_3、-getname" aria-hidden="true">#</a> 3、 getName();</h4><p>​ 在执行过Foo().getName()的基础上，所以getName=function(){console.log(1)},所以,打印1，[如果getName()放在Foo().getName()上执行打印结果为4]</p><h4 id="_4、-new-foo-getname"><a class="header-anchor" href="#_4、-new-foo-getname" aria-hidden="true">#</a> 4、 new Foo.getName();</h4><p>​ 构造器私有属性的getName(),所以,打印2</p><h4 id="_5、-new-foo-getname"><a class="header-anchor" href="#_5、-new-foo-getname" aria-hidden="true">#</a> 5、 new Foo().getName();</h4><p>​ 原型上的getName()，打印3</p><h4 id="_6、-new-new-foo-getname"><a class="header-anchor" href="#_6、-new-new-foo-getname" aria-hidden="true">#</a> 6、 new new Foo().getName()</h4><p>首先new Foo()得到一个空对象{}</p><p>第二步向空对象中添加一个属性getName，值为一个函数</p><p>第三步new {}.getName()</p><p>等价于 var bar = new (new Foo().getName)(); console.log(bar) ​ 先new Foo得到的实例对象上的getName方法，再将这个原型上getName方法当做构造函数继续new ，所以执行原型上的方法,打印3</p>',18);p.render=function(s,t,p,e,c,u){return n(),a("div",null,[o])};export default p;export{t as __pageData};
