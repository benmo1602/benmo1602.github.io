import{_ as n,o as a,c as p,ae as e}from"./chunks/framework.BD9pLfSD.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"面试/33.common.md","filePath":"面试/33.common.md","lastUpdated":1769081193000}'),o={name:"面试/33.common.md"};function l(t,s,c,i,m,r){return a(),p("div",null,[...s[0]||(s[0]=[e(`<p>commonjs与ES6的module还是有很大区别的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  两者的模块导入导出语法不同，</span></span>
<span class="line"><span>    commonjs是 module.exports，exports导出，require导入；</span></span>
<span class="line"><span>    ES6则是export导出，import导入。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  commonjs是运行时加载模块，ES6是在静态编译期间就确定模块的依赖。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ES6在编译期间会将所有import提升到顶部，commonjs不会提升require。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  commonjs导出的是一个值拷贝，会对加载结果进行缓存，一旦内部再修改这个值，则不会同步到外部。</span></span>
<span class="line"><span>  ES6是导出的一个引用，内部修改可以同步到外部。</span></span>
<span class="line"><span>  两者的循环导入的实现原理不同，</span></span>
<span class="line"><span>    commonjs是当模块遇到循环加载时，返回的是当前已经执行的部分的值，而不是代码全部执行后的值，两者可能会有差异。所以，输入变量的时候，必须非常小心。</span></span>
<span class="line"><span>    ES6 模块是动态引用，如果使用import从一个模块加载变量（即import foo from &#39;foo&#39;），那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  commonjs中顶层的this指向这个模块本身，而ES6中顶层this指向undefined。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  然后就是commonjs中的一些顶层变量在ES6中不再存在：</span></span></code></pre></div>`,2)])])}const u=n(o,[["render",l]]);export{_ as __pageData,u as default};
