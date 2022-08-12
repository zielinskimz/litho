"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6926],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>m,withMDXComponents:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),d=function(e){return function(t){var n=m(t.components);return a.createElement(e,o({},t,{components:n}))}},m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(n),p=i,y=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return n?a.createElement(y,r(r({ref:t},c),{},{components:n})):a.createElement(y,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=y;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},36169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),l=["components"],r={id:"lazycollections-layout",title:"Layout and Styling"},s=void 0,c={unversionedId:"kotlin/lazycollections/lazycollections-layout",id:"kotlin/lazycollections/lazycollections-layout",title:"Layout and Styling",description:"Spacing",source:"@site/../docs/kotlin/lazycollections/lazycollections-layout.mdx",sourceDirName:"kotlin/lazycollections",slug:"/kotlin/lazycollections/lazycollections-layout",permalink:"/docs/kotlin/lazycollections/lazycollections-layout",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/lazycollections/lazycollections-layout.mdx",tags:[],version:"current",frontMatter:{id:"lazycollections-layout",title:"Layout and Styling"},sidebar:"mainSidebar",previous:{title:"Working with Updates",permalink:"/docs/kotlin/lazycollections/lazycollections-working-with-updates"},next:{title:"Interactions",permalink:"/docs/kotlin/lazycollections/lazycollections-interactions"}},d={},m=[{value:"Spacing",id:"spacing",level:2},{value:"Horizontal Lists",id:"horizontal-lists",level:2},{value:"Layouts",id:"layouts",level:2},{value:"Sticky Headers",id:"sticky-headers",level:2}],p={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"spacing"},"Spacing"),(0,o.mdx)("p",null,"To add spacing around and between items you can use ",(0,o.mdx)("inlineCode",{parentName:"p"},"LinearSpacing"),". This will create an ",(0,o.mdx)("inlineCode",{parentName:"p"},"ItemDecorator")," that will be applied to the underlying ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerView"),". It automatically takes care of edge cases including equality checks (to avoid ",(0,o.mdx)("a",{parentName:"p",href:"/docs/kotlin/lazycollections/lazycollections-working-with-updates#avoiding-unnecessary-layouts"},"unnecessary layouts"),"), orientation, and layout direction handling."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/LayoutAndStyling.kt start=start_linear_spacing_example end=end_linear_spacing_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/LayoutAndStyling.kt",start:"start_linear_spacing_example",end:"end_linear_spacing_example"},"class LinearSpacingExample : KComponent() {\n  override fun ComponentScope.render(): Component =\n      LazyList(\n          itemDecoration = LinearSpacing(start = 10.dp, between = 5.dp),\n      ) { /* Add children */}\n}\n")),(0,o.mdx)("h2",{id:"horizontal-lists"},"Horizontal Lists"),(0,o.mdx)("p",null,"To make a lazy collection horizontal, set the parameter ",(0,o.mdx)("inlineCode",{parentName:"p"},"orientation = RecyclerView.HORIZONTAL"),". By default, you will also need to specify a height, such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"style = Style.height(100.dp)"),", as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/LayoutAndStyling.kt start=start_fixed_height_hscroll_example end=end_fixed_height_hscroll_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/LayoutAndStyling.kt",start:"start_fixed_height_hscroll_example",end:"end_fixed_height_hscroll_example"},"class HScrollFixedHeight : KComponent() {\n  override fun ComponentScope.render(): Component =\n      LazyList(\n          orientation = RecyclerView.HORIZONTAL,\n          style = Style.height(100.dp),\n      ) { /* Add children */}\n}\n")),(0,o.mdx)("p",null,"To automatically set the height, you can set the parameter ",(0,o.mdx)("inlineCode",{parentName:"p"},"crossAxisWrapMode = CrossAxisWrapMode.MatchFirstChild")," to use the height of the first child. Alternatively, set ",(0,o.mdx)("inlineCode",{parentName:"p"},"crossAxisWrapMode = CrossAxisWrapMode.Dynamic")," to match the largest item in the list."),(0,o.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},(0,o.mdx)("inlineCode",{parentName:"p"},"CrossAxisWrapMode.Dynamic")," requires measuring all the components in the list. This is inefficient and should be avoided if possible."))),(0,o.mdx)("h2",{id:"layouts"},"Layouts"),(0,o.mdx)("p",null,"Lazy collections are available as follows:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebook/litho/blob/master/litho-widget-kotlin/src/main/kotlin/com/facebook/litho/widget/collection/LazyList.kt"},"LazyList")," - arranged as a sequential list."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebook/litho/blob/master/litho-widget-kotlin/src/main/kotlin/com/facebook/litho/widget/collection/LazyGrid.kt"},"LazyGrid")," - arranged as a grid with the number of columns specified by the ",(0,o.mdx)("inlineCode",{parentName:"li"},"columns")," parameter."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebook/litho/blob/master/litho-widget-kotlin/src/main/kotlin/com/facebook/litho/widget/collection/LazyStaggeredGrid.kt"},"LazyStaggeredGrid")," - arranged into columns where children are inserted into the first column that has space.")),(0,o.mdx)("h2",{id:"sticky-headers"},"Sticky Headers"),(0,o.mdx)("p",null,"To make a child 'sticky', specify the parameter ",(0,o.mdx)("inlineCode",{parentName:"p"},"isSticky = true"),". This will cause the child to stick to the top of the Lazy Collection rather than being scrolled out of the viewport."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/LayoutAndStyling.kt start=start_sticky_header_example end=end_sticky_header_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/LayoutAndStyling.kt",start:"start_sticky_header_example",end:"end_sticky_header_example"},'class StickyHeader(val names: List<String>) : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val namesGroupedByFirstLetter = names.groupBy { it.first() }\n    return LazyList {\n      namesGroupedByFirstLetter.forEach { (firstLetter, names) ->\n        child(id = firstLetter, isSticky = true, component = Text("$firstLetter"))\n        children(items = names, id = { it }) { Text(it) }\n      }\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);