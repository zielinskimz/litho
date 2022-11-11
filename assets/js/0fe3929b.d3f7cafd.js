"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9348],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>p,withMDXComponents:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),d=function(e){return function(t){var n=p(t.components);return a.createElement(e,l({},t,{components:n}))}},p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(r,".").concat(u)]||d[u]||c[u]||l;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function x(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(67294),i=n(34334);const l="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:n},t)}},65488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(83117),i=n(67294),l=n(34334),r=n(72389),o=n(67392),s=n(7094),m=n(12466);const d="tabList__CuJ",p="tabItem_LNqP";function u(e){var t,n,r=e.lazy,u=e.block,c=e.defaultValue,h=e.values,x=e.groupId,f=e.className,b=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(t=null!=c?c:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,E=(0,i.useState)(v),T=E[0],A=E[1],O=[],L=(0,m.o5)().blockElementScrollPositionUntilNextRender;if(null!=x){var D=w[x];null!=D&&D!==T&&g.some((function(e){return e.value===D}))&&A(D)}var F=function(e){var t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==T&&(L(t),A(a),null!=x&&C(x,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=O.indexOf(e.currentTarget)+1;n=null!=(a=O[i])?a:O[0];break;case"ArrowLeft":var l,r=O.indexOf(e.currentTarget)-1;n=null!=(l=O[r])?l:O[O.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:F,onClick:F},r,{className:(0,l.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),r?(0,i.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,r.default)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},62146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a=n(83117),i=n(80102),l=(n(67294),n(3905)),r=n(44996),o=(n(65488),n(85162),["components"]),s={id:"flexbox-yoga",title:"Flexbox Attributes"},m=void 0,d={unversionedId:"mainconcepts/flexbox-yoga",id:"mainconcepts/flexbox-yoga",title:"Flexbox Attributes",description:"Litho uses the Yoga library, which is an implementation of Flexbox, to measure and layout on-screen components. Users familiar with Flexbox on the web should have no problems. For users familiar with how Android normally performs Layout, Flexbox will remind them of LinearLayout.",source:"@site/../docs/mainconcepts/flexbox-yoga.mdx",sourceDirName:"mainconcepts",slug:"/mainconcepts/flexbox-yoga",permalink:"/docs/mainconcepts/flexbox-yoga",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/flexbox-yoga.mdx",tags:[],version:"current",frontMatter:{id:"flexbox-yoga",title:"Flexbox Attributes"},sidebar:"mainSidebar",previous:{title:"useLiveData",permalink:"/docs/mainconcepts/use-live-data"},next:{title:"Yoga Playground",permalink:"/docs/mainconcepts/yoga-playground"}},p={},u=[{value:"Layout direction",id:"layout-direction",level:3},{value:"Distribution along the main axis",id:"distribution-along-the-main-axis",level:3},{value:"Distribution along the cross axis",id:"distribution-along-the-cross-axis",level:3},{value:"Wrapping to multiple lines",id:"wrapping-to-multiple-lines",level:3},{value:"Line distribution",id:"line-distribution",level:4}],c={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.mdx)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Litho uses the ",(0,l.mdx)("a",{parentName:"p",href:"https://yogalayout.com/"},"Yoga")," library, which is an implementation of ",(0,l.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/css-flexbox-1/"},"Flexbox"),", to measure and layout on-screen components. Users familiar with Flexbox on the web should have no problems. For users familiar with how Android normally performs Layout, Flexbox will remind them of ",(0,l.mdx)("inlineCode",{parentName:"p"},"LinearLayout"),"."),(0,l.mdx)("p",null,"This page shows how various attributes of Flexbox are used for on-screen layout."),(0,l.mdx)("h3",{id:"layout-direction"},"Layout direction"),(0,l.mdx)("p",null,"Flexbox is a ",(0,l.mdx)("strong",{parentName:"p"},"one-dimensional layout model"),", which means all elements are placed along one line."),(0,l.mdx)("p",null,"The following information may help assist in deciding whether to layout elements horizontally or vertically."),(0,l.mdx)("p",null,"The primary axis of layout is called the ",(0,l.mdx)("strong",{parentName:"p"},"Main Axis"),", and the direction perpendicular to it is called the ",(0,l.mdx)("strong",{parentName:"p"},"Cross Axis"),". For example, if children are to be laid out left to right, then the Main Axis would be the horizontal axis, and the Cross Axis would be the vertical axis."),(0,l.mdx)("p",null,"Litho uses special container components to define the direction of the layout, as shown in the following table."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:"left"},"Component"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"Main Axis"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"Child Elements Layout"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"If Wrapping is Enabled"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"Row")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"horizontal"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"left to right"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Next line will start under the first item on the left of the container.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"Row (reverse)")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"horizontal"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"right to left"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Next line will start under the first item on the right of the container.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"Column")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"vertical"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"top to bottom"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Next line will start to the right of the first item on the top of the container.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"Column (reverse)")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"vertical"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"bottom to top"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Next line will start to the right of the first item on the bottom of the container.")))),(0,l.mdx)("p",null,"The above container components are illustrated in the following diagram."),(0,l.mdx)("img",{src:(0,r.default)("/images/litho-layout-flex-direction.png"),alt:"flex-direction"}),(0,l.mdx)("admonition",{type:"note"},(0,l.mdx)("p",{parentName:"admonition"},"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"(reverse)")," option is available through the ",(0,l.mdx)("inlineCode",{parentName:"p"},".reverse(boolean)")," method on ",(0,l.mdx)("inlineCode",{parentName:"p"},"Row"),"/",(0,l.mdx)("inlineCode",{parentName:"p"},"Column")," objects.")),(0,l.mdx)("h3",{id:"distribution-along-the-main-axis"},"Distribution along the main axis"),(0,l.mdx)("p",null,"If your container has more space than is necessary along the Main Axis then the way children are positioned across that axis needs to be considered."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"justifyContent")," method specifies how the child elements are distributed across the Main Axis. It takes a ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaJustify")," enum input, which has the following possible values:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_START")," ",(0,l.mdx)("em",{parentName:"li"},"(default)")," - position children at the start of the container, along the main axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_END")," - position children at the end of the container, along the main axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"CENTER")," - position children in the centre of the container, along the main axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"SPACE_BETWEEN")," - distribute extra space evenly between children."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"SPACE_AROUND")," - distribute space evenly around each child. Note that adjacent children will have '2x' space between them (because each child has its own 'padding')."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"SPACE_EVENLY")," - distribute space evenly around all children.")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaJustify")," values are illustrated below."),(0,l.mdx)("img",{src:(0,r.default)("/images/litho-layout-justify-content.png"),alt:"justify-content"}),(0,l.mdx)("h3",{id:"distribution-along-the-cross-axis"},"Distribution along the cross axis"),(0,l.mdx)("p",null,"If the elements in your line have different heights, then the way they are positioned along the line needs to be considered."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"alignItems")," method specifies how the container's children are distributed across the Cross Axis. It takes a ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," enum input, which has the following possible values:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"STRETCH")," ",(0,l.mdx)("em",{parentName:"li"},"(default)")," - stretch the size of all elements to completely fill the line."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_START")," - align elements with the start of the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_END")," - align elements with the end of the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"CENTER")," - align elements with the centre of the line."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"BASELINE")," - align elements with respect to their baselines.")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," values are illustrated below."),(0,l.mdx)("img",{src:(0,r.default)("/images/litho-layout-align-items.png"),alt:"align-items"}),(0,l.mdx)("h3",{id:"wrapping-to-multiple-lines"},"Wrapping to multiple lines"),(0,l.mdx)("p",null,"In addition to the one-dimensional Flexbox laying out its children in one line, Flexboxes can also wrap their children onto multiple lines, much like text wraps. Wrapping behavior is specified with the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Wrap")," method, which takes a ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaWrap")," enum value that has the following possible values:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"NO_WRAP")," ",(0,l.mdx)("em",{parentName:"li"},"(default)")," - there is no wrapping. Children are forced into a single line; if they cannot fit, they will overflow."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"WRAP")," - elements that overflow a single line will be moved to the next line. If the main axis is horizontal, then the next line will be ",(0,l.mdx)("strong",{parentName:"li"},"below")," the previous line."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"WRAP_REVERSE")," - similar to ",(0,l.mdx)("inlineCode",{parentName:"li"},"WRAP")," except the order of lines is reversed. If the main axis is horizontal, then the next line will be ",(0,l.mdx)("strong",{parentName:"li"},"above")," the previous line.")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaWrap")," values are illustrated below."),(0,l.mdx)("img",{src:(0,r.default)("/images/litho-layout-wrap.png"),alt:"wrap"}),(0,l.mdx)("h4",{id:"line-distribution"},"Line distribution"),(0,l.mdx)("p",null,"If the container has extra space in the Cross Axis direction, then the way lines are distributed in that space needs to be considered."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"alignContent")," method specifies how lines are distributed along the Cross Axis. It takes a ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," enum value, which has the following possible values:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"STRETCH")," ",(0,l.mdx)("em",{parentName:"li"},"(default)")," - lines are stretched evenly to fill the available space in the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_START")," - lines are placed at the start of the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"FLEX_END")," - lines are placed at the end of the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"CENTER")," - lines are placed in the centre of the cross axis."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"SPACE_BETWEEN")," - evenly distributes extra space between all lines."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"SPACE_AROUND")," - pads lines above and below with extra space.")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," values, for Lines, are illustrated below."),(0,l.mdx)("img",{src:(0,r.default)("/images/litho-layout-align-content.png"),alt:"align-content"}),(0,l.mdx)("p",null,"For more information on specific Flexbox properties, refer to the ",(0,l.mdx)("a",{parentName:"p",href:"https://yogalayout.com/docs/"},"Yoga documentation")," or explore any web resource on how Flexbox functions."))}h.isMDXComponent=!0}}]);