import{_ as l,c as e,o,b as n,d as s}from"./app.239c668c.js";var a="/assets/image-20210629190331821.0a5bb82f.png";const S='{"title":"\u5F00\u53D1\u73AF\u5883\uFF1A nvm\u3001 yarn \u3001 npm link\u3001 yalc","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5F00\u53D1\u73AF\u5883\uFF1A nvm\u3001 yarn \u3001 npm link\u3001 yalc","slug":"\u5F00\u53D1\u73AF\u5883\uFF1A-nvm\u3001-yarn-\u3001-npm-link\u3001-yalc"}],"relativePath":"guide/35.nvm.md","lastUpdated":1645538412813}',t={},c=n("h3",{id:"\u5F00\u53D1\u73AF\u5883\uFF1A-nvm\u3001-yarn-\u3001-npm-link\u3001-yalc",tabindex:"-1"},[s("\u5F00\u53D1\u73AF\u5883\uFF1A nvm\u3001 yarn \u3001 npm link\u3001 yalc "),n("a",{class:"header-anchor",href:"#\u5F00\u53D1\u73AF\u5883\uFF1A-nvm\u3001-yarn-\u3001-npm-link\u3001-yalc","aria-hidden":"true"},"#")],-1),i=n("h4",{id:"_1-\u5207\u6362\u7EC8\u7AEF\u7248\u672C",tabindex:"-1"},[s("1. \u5207\u6362\u7EC8\u7AEF\u7248\u672C "),n("a",{class:"header-anchor",href:"#_1-\u5207\u6362\u7EC8\u7AEF\u7248\u672C","aria-hidden":"true"},"#")],-1),d=n("p",null,"\u4F7F\u7528 zsh \u66FF\u6362 bash\uFF1A chsh -s /bin/zsh",-1),r=n("h4",{id:"_2-nvm-\u7BA1\u7406\u672C\u5730\u591A\u7248\u672Cnode",tabindex:"-1"},[s("2. nvm \u7BA1\u7406\u672C\u5730\u591A\u7248\u672Cnode "),n("a",{class:"header-anchor",href:"#_2-nvm-\u7BA1\u7406\u672C\u5730\u591A\u7248\u672Cnode","aria-hidden":"true"},"#")],-1),u=n("p",null,"\u5220\u9664\u5F53\u524D\u7248\u672C\u7684node \u3001npm",-1),p=n("div",{class:"language-"},[n("pre",null,[n("code",null,`  sudo rm /usr/local/bin/npm
  sudo rm /usr/local/share/man/man1/node.1
  sudo rm /usr/local/lib/dtrace/node.d
  sudo rm -rf ~/.npm
  sudo rm -rf ~/.node-gyp
  sudo rm /opt/local/bin/node
  sudo rm /opt/local/include/node
  sudo rm -rf /opt/local/lib/node_modules
`)])],-1),_=n("p",null,"\u4E0B\u8F7D nvm",-1),h=n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[s("  "),n("span",{class:"token function"},"curl"),s(" -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"zsh"),s(`
`)])])],-1),m=n("p",null,"\u4E0B\u8F7Dnode",-1),g=n("div",{class:"language-"},[n("pre",null,[n("code",null,`  nvm install 12
  // 12.x.x  \u4E0B\u8F7D12\u6700\u65B0\u7248\u672C
`)])],-1),k=n("p",null,"\u5207\u6362\u7248\u672C",-1),v=n("div",{class:"language-"},[n("pre",null,[n("code",null,`  nvm use 12
  nvm use node // \u5207\u6362\u5230\u6700\u65B0\u7248
  nvm use iojs-v3.2.0
`)])],-1),y=n("p",null,"\u914D\u7F6E\u522B\u540D",-1),f=n("div",{class:"language-"},[n("pre",null,[n("code",null,`  nvm alias awesome-version 4.2.2
  nvm alias default node
  nvm ls
`)])],-1),b=n("p",null,"\u9879\u76EE\u4E2D\u901A\u8FC7 .nvmrc \u6587\u4EF6 \u6307\u5B9Anode \u7248\u672C",-1),x=n("ul",null,[n("li",null,[n("strong",null,"nvm install node"),s(" \u5B89\u88C5\u6700\u65B0\u7248 Node")]),n("li",null,[n("strong",null,"nvm install iojs"),s(" \u5B89\u88C5\u6700\u65B0\u7248 iojs")]),n("li",null,[n("strong",null,"nvm install unstable"),s(" \u5B89\u88C5\u6700\u65B0\u4E0D\u7A33\u5B9A\u7248\u672C\u7684 Node")])],-1),N=n("h4",{id:"_3-yarn-\u5B89\u88C5",tabindex:"-1"},[s("3. yarn \u5B89\u88C5 "),n("a",{class:"header-anchor",href:"#_3-yarn-\u5B89\u88C5","aria-hidden":"true"},"#")],-1),j=n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[n("span",{class:"token function"},"curl"),s(" -o- -L https://yarnpkg.com/install.sh \uFF5C "),n("span",{class:"token function"},"zsh"),s(`
`)])])],-1),w=n("h4",{id:"_4-npm-link-\u5C06\u8C03\u8BD5\u7684\u5305\u8DDF\u9879\u76EE\u4E2D\u505A\u4E00\u4E2A\u8F6F\u94FE",tabindex:"-1"},[s("4. npm link \u5C06\u8C03\u8BD5\u7684\u5305\u8DDF\u9879\u76EE\u4E2D\u505A\u4E00\u4E2A\u8F6F\u94FE "),n("a",{class:"header-anchor",href:"#_4-npm-link-\u5C06\u8C03\u8BD5\u7684\u5305\u8DDF\u9879\u76EE\u4E2D\u505A\u4E00\u4E2A\u8F6F\u94FE","aria-hidden":"true"},"#")],-1),z=n("div",{class:"language-"},[n("pre",null,[n("code",null,`cd \u5BF9\u5E94npm\u5305\u5730\u5740
npm link

cd \u9879\u76EE\u5730\u5740
npm link npm-packname

// \u65E5\u5FD7
link /\u5BF9\u5E94\u7684\u5305\u5B9E\u9645\u5730\u5740@ -> /Users/beidan/.nvm/versions/node/v14.5.0/lib/node_modules/npm-test
`)])],-1),R=n("p",null,[s("\u5BF9\u4E8E Npm link \u65B9\u5F0F\uFF0C"),n("strong",null,"\u300C\u56E0\u4E3A Npm \u548C \u9879\u76EE\u5C5E\u4E8E\u4E0D\u540C\u7684\u9879\u76EE\uFF0C\u5B83\u4EEC\u6709\u81EA\u5DF1\u7684 node_modules\u300D"),s(",\u5982\u679C\u7EC4\u4EF6\u548C\u5E94\u7528\u90FD\u4F7F\u7528\u4E86\u540C\u4E00\u4E2A\u4F9D\u8D56\uFF0C\u5B83\u4EEC\u4F1A\u5728\u5404\u81EA\u7684 node_modules \u53BB\u67E5\u627E\uFF0C\u5982\u679C\u8FD9\u4E2A\u4F9D\u8D56\u4E0D\u652F\u6301\u591A\u4F8B\uFF0C\u5E94\u7528\u5C31\u4F1A\u5F02\u5E38\u3002\u5982\u679C npm \u7684\u7F16\u8BD1\u89C4\u5219 \u548C\u5E94\u7528\u7684\u7F16\u8BD1\u89C4\u5219\u4E0D\u5339\u914D\uFF0C\u4E5F\u540C\u6837\u4F1A\u51FA\u95EE\u9898\u3002\u5982\u4E0B\uFF1A")],-1),$=n("div",{class:"language-"},[n("pre",null,[n("code",null,`hooks can only be called inside the body of a function component

NPM \u7EC4\u4EF6 \u548C\u4F60\u7684\u9879\u76EE\u4F7F\u7528\u4E86 React Hooks \u7684\u60C5\u51B5\uFF0CReact \u4F1A\u62A5\u81F4\u547D\u5F02\u5E38\u3002\uFF08\u539F\u56E0\u662F React Hooks \u4F9D\u8D56\u4E0A\u4E0B\u6587\uFF0C\u6240\u4EE5\u5168\u5C40\u53EA\u80FD\u4F7F\u7528\u4E00\u4E2A\uFF0C\u5373\u4F7F\u662F\u7248\u672C\u5B8C\u5168\u4E00\u6837\u7684\uFF0C\u5B98\u65B9\u63A8\u8350\u7684\u89E3\u51B3\u65B9\u6CD5 React \u9519\u8BEF\u63D0\u793A[2]\uFF09
`)])],-1),B=n("h4",{id:"_5-yalc",tabindex:"-1"},[s("5. yalc "),n("a",{class:"header-anchor",href:"#_5-yalc","aria-hidden":"true"},"#")],-1),C=n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[s("  "),n("span",{class:"token function"},"npm"),s(` i yalc -g
  yalc publish *// \u5728\u5BF9\u5E94\u7684 `),n("span",{class:"token function"},"npm"),s(` \u5305\u4E2D\u53D1\u5E03*
  yalc `),n("span",{class:"token function"},"link"),s(" *// \u5728\u5BF9\u5E94\u7684\u9879\u76EE\u4E2D "),n("span",{class:"token function"},"link"),s(` \u5BF9\u5E94\u7684\u5305*
`)])])],-1),H=n("p",null,"\u5B9E\u73B0\u6D41\u7A0B\u5316",-1),P=n("p",null,[n("img",{src:a,alt:"image-20210629190331821"})],-1),U=n("p",null,"\u4F7F\u7528nodemon \u76D1\u542C\u6587\u4EF6\u7684\u53D8\u5316",-1),V=n("div",{class:"language-"},[n("pre",null,[n("code",null,`nodemon
 --ignore dist/ # \u5FFD\u7565\u76EE\u5F55
 --ignore node_modules/
 --watch projects # \u89C2\u5BDF\u76EE\u5F55
 -C # \u53EA\u5728\u53D8\u66F4\u540E\u6267\u884C\uFF0C\u9996\u6B21\u542F\u52A8\u4E0D\u6267\u884C\u547D\u4EE4
 -e ts,html,less,scss # \u76D1\u63A7\u6307\u5B9A\u540E\u7F00\u540D\u7684\u6587\u4EF6
 --debug # \u8C03\u8BD5
 -x "npm run build && yalc push" # \u81EA\u5B9A\u4E49\u547D\u4EE4
`)])],-1),D=n("ol",null,[n("li",null,"\u5728npm \u5305\u4E2D\u6DFB\u52A0\u547D\u4EE4")],-1),E=n("div",{class:"language-js"},[n("pre",null,[n("code",null,[n("span",{class:"token string"},'"scripts"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string"},'"build"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u6253\u5305\u5305\u7684\u547D\u4EE4"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"async"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"npm run build && yalc push"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},'"watch"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`"nodemon --ignore dist/ --ignore node_modules/ --watch src/ -C -e ts,tsx,scss --debug -x 'tnpm run async'"`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u81EA\u52A8\u76D1\u542C"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`)])])],-1),L=n("p",null,"2 \u9879\u76EE\u4E2D",-1),M=n("div",{class:"language-"},[n("pre",null,[n("code",null,`  yalc link \u5305\u540D
  npm run start
`)])],-1),T=n("p",null,"\u8FD9\u6837\u5B50\uFF0C\u5728 npm \u5305\u4E2D\u4FEE\u6539\uFF0C\u5728\u9879\u76EE\u4E2D\u53EF\u4EE5\u5FEB\u901F\u770B\u5230\u7ED3\u679C\uFF0C\u5FEB\u901F\u9A8C\u8BC1\u4E86\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u51FA\u73B0 npm link \u4E2D\u5404\u79CD\u5947\u5947\u602A\u602A\u7684\u95EE\u9898",-1),q=[c,i,d,r,u,p,_,h,m,g,k,v,y,f,b,x,N,j,w,z,R,$,B,C,H,P,U,V,D,E,L,M,T];function A(F,G,I,J,K,O){return o(),e("div",null,q)}var W=l(t,[["render",A]]);export{S as __pageData,W as default};
