"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3521],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>c});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){return function(t){var n=u(t.components);return o.createElement(e,i({},t,{components:n}))}},u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,g=c["".concat(l,".").concat(d)]||c[d]||y[d]||i;return n?o.createElement(g,s(s({ref:t},p),{},{components:n})):o.createElement(g,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},82924:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n(67294).createContext(void 0)},85350:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),r=n(82924);const i=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},75960:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(87462),r=n(67294),i=n(24544),l=n(7694),s=n(13618),a="0.41.2",p="0.41.3-SNAPSHOT",c="0.9.0",u="0.46.0",d=n(85350);const y=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,a).replace(/{{site.soloaderVersion}}/g,c).replace(/{{site.lithoSnapshotVersion}}/g,p).replace(/{{site.flipperVersion}}/g,u).trim(),y=(0,d.Z)().isDarkTheme?s.Z:l.Z;return r.createElement(i.ZP,(0,o.Z)({},i.lG,{code:n,language:t,theme:y}),(function(e){var t=e.className,n=e.style,o=e.tokens,i=e.getLineProps,l=e.getTokenProps;return r.createElement("pre",{className:t,style:n},o.map((function(e,t){return r.createElement("div",i({line:e,key:t}),e.map((function(e,t){return r.createElement("span",l({token:e,key:t}))})))})))}))}},7488:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>y});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(75960),s=["components"],a={id:"flipper-plugins",title:"Flipper Plugins"},p=void 0,c={unversionedId:"devtools/flipper-plugins",id:"devtools/flipper-plugins",isDocsHomePage:!1,title:"Flipper Plugins",description:"When you create or debug standard Android Views, you can use the 'Layout Preview' and the 'Layout Inspector' tools from Android Studio. However, since Litho operates with different UI primitives, such as 'Components' and 'Sections', those standard tools are not very useful in such cases.",source:"@site/../docs/devtools/flipper-plugins.mdx",sourceDirName:"devtools",slug:"/devtools/flipper-plugins",permalink:"/docs/devtools/flipper-plugins",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/devtools/flipper-plugins.mdx",tags:[],version:"current",frontMatter:{id:"flipper-plugins",title:"Flipper Plugins"},sidebar:"mainSidebar",previous:{title:"Android Studio Plugin",permalink:"/docs/devtools/android-studio-plugin"},next:{title:"Analysing Performance",permalink:"/docs/performance/analysing-performance"}},u=[{value:"Adding Flipper &amp; Layout plugins to your project",id:"adding-flipper--layout-plugins-to-your-project",children:[],level:2},{value:"Sections plugin",id:"sections-plugin",children:[],level:2}],d={toc:u};function y(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.mdx)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"When you create or debug standard Android Views, you can use the 'Layout Preview' and the 'Layout Inspector' tools from Android Studio. However, since Litho operates with different UI primitives, such as 'Components' and 'Sections', those standard tools are not very useful in such cases."),(0,i.mdx)("p",null,"Luckily, there is ",(0,i.mdx)("a",{parentName:"p",href:"https://fbflipper.com"},"Flipper"),", an extensible mobile app debugger whose Layout Inspector plugin gives you an ability to tweak and inspect your UI in runtime and supports Litho. You'll be able to access full UI hierarchy, inspect Litho Components as well as Views, and even change values for View attributes or Component props in a currently running app without rebuilding it.\nThe following screenshot shows the Flipper plugin in action."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Flipper Layout plugin",src:n(36821).Z})),(0,i.mdx)("h2",{id:"adding-flipper--layout-plugins-to-your-project"},"Adding Flipper & Layout plugins to your project"),(0,i.mdx)("p",null,"To add Flipper and Litho plugins to you app, you need to take the following steps:"),(0,i.mdx)(l.Z,{language:"groovy",code:"\ndependencies {\n  debugImplementation 'com.facebook.flipper:flipper:{{site.flipperVersion}}'\n  debugImplementation 'com.facebook.flipper:flipper-litho-plugin:{{site.flipperVersion}}'\n}\n",mdxType:"VersionedCodeBlock"}),(0,i.mdx)("p",null,"Init ",(0,i.mdx)("inlineCode",{parentName:"p"},"FlipperClient")," with the Inspector plugin, which is typically done in the custom ",(0,i.mdx)("inlineCode",{parentName:"p"},"Application")," class:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"final FlipperClient client = AndroidFlipperClient.getInstance(mApplicationContext);\nfinal DescriptorMapping descriptorMapping = DescriptorMapping.withDefaults();\nLithoFlipperDescriptors.add(descriptorMapping);\nclient.addPlugin(new InspectorFlipperPlugin(mApplicationContext, descriptorMapping));\nclient.start();\n")),(0,i.mdx)("p",null,"You can read more about the Layout Inspector in the ",(0,i.mdx)("a",{parentName:"p",href:"https://fbflipper.com/docs/setup/layout-plugin"},"Layout Plugin Setup")," page of the Flipper Documentation web site."),(0,i.mdx)("h2",{id:"sections-plugin"},"Sections plugin"),(0,i.mdx)("p",null,"Another Litho plugin that is very useful for debugging Litho is 'Sections'. It can uncover the flow of state changes for the list backed by ",(0,i.mdx)("a",{parentName:"p",href:"/docs/sections/start"},"Litho Sections"),", visualise these changes such as which items were added, reused or deleted, and show the data corresponding to the specific Section.  The following screenshot shows the Sections plugin in action."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Flipper Sections plugin",src:n(37316).Z})),(0,i.mdx)("p",null,"To enable the Sections plugin in your app, you need to add the following line in addition to the general Flipper configuration:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"client.addPlugin(new SectionsFlipperPlugin(true));\n")))}y.isMDXComponent=!0},24544:(e,t,n)=>{n.d(t,{ZP:()=>g,lG:()=>l});var o=n(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var i=n(67294),l={Prism:o.default,theme:r};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}var p=/\r\n|\r|\n/,c=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=a({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=a({},n,{backgroundColor:null}),r};function y(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const g=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,i=a({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(i.style=l.plain),void 0!==r&&(i.style=void 0!==i.style?a({},i.style,r):r),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,i=t.getThemeDict(t.props);if(void 0!==i){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return i[n[0]];var l=o?{display:"inline-block"}:{},s=n.map((function(e){return i[e]}));return Object.assign.apply(Object,[l].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,i=e.token,l=a({},y(e,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:t.getStyleForToken(i),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?a({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),s(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var i=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,i=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],i=0,l=0,s=[],a=[s];l>-1;){for(;(i=o[l]++)<r[l];){var d=void 0,y=t[l],g=n[l][i];if("string"==typeof g?(y=l>0?y:["plain"],d=g):(y=u(y,g.type),g.alias&&(y=u(y,g.alias)),d=g.content),"string"==typeof d){var f=d.split(p),m=f.length;s.push({types:y,content:f[0]});for(var h=1;h<m;h++)c(s),a.push(s=[]),s.push({types:y,content:f[h]})}else l++,t.push(y),n.push(d),o.push(0),r.push(d.length)}l--,t.pop(),n.pop(),o.pop(),r.pop()}return c(s),a}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(i.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}},36821:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/flipper-layout-plugin-9dfcffb2d19fa40b1ed73003276d6b19.png"},37316:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/flipper-sections-plugin-288e0597812291fe12b6b3aa7b3c9405.png"}}]);