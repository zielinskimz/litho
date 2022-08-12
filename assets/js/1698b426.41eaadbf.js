"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1642],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),d=function(e){return function(t){var n=p(t.components);return a.createElement(e,r({},t,{components:n}))}},p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},x=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,x=d["".concat(l,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(x,i(i({ref:t},m),{},{components:n})):a.createElement(x,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=x;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}x.displayName="MDXCreateElement"},44397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),l=n(44996),i=["components"],s={id:"intoducing-layout",title:"Introducing Layout"},m=void 0,d={unversionedId:"tutorial/intoducing-layout",id:"tutorial/intoducing-layout",title:"Introducing Layout",description:"In this section of the tutorial, you'll become familiar with building layouts using Flexbox) in Litho for an Instagram post component.",source:"@site/../docs/tutorial/introducing-layout.md",sourceDirName:"tutorial",slug:"/tutorial/intoducing-layout",permalink:"/docs/tutorial/intoducing-layout",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/tutorial/introducing-layout.md",tags:[],version:"current",frontMatter:{id:"intoducing-layout",title:"Introducing Layout"},sidebar:"mainSidebar",previous:{title:"Components and Props",permalink:"/docs/tutorial/first-components"},next:{title:"Adding State",permalink:"/docs/tutorial/adding-state"}},p={},c=[{value:"Yoga and Flexbox",id:"yoga-and-flexbox",level:2},{value:"Preparatory data model classes",id:"preparatory-data-model-classes",level:2},{value:"The PostComponent",id:"the-postcomponent",level:2},{value:"Applying a Flexbox style",id:"applying-a-flexbox-style",level:2},{value:"Key Points in PostStyledKComponent.kt",id:"key-points-in-poststyledkcomponentkt",level:3},{value:"What next?",id:"what-next",level:2}],u={toc:c};function x(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.mdx)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"In this section of the tutorial, you'll become familiar with building layouts using ",(0,r.mdx)("a",{parentName:"p",href:"/docs/kotlin/kotlin-flexbox-containers"},"Flexbox"),") in Litho for an Instagram post component."),(0,r.mdx)("h2",{id:"yoga-and-flexbox"},"Yoga and Flexbox"),(0,r.mdx)("p",null,"To ",(0,r.mdx)("strong",{parentName:"p"},"measure")," and ",(0,r.mdx)("strong",{parentName:"p"},"layout")," on-screen components, Litho uses the ",(0,r.mdx)("a",{parentName:"p",href:"https://yogalayout.com/"},"Yoga")," library, which is an implementation of ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/css-flexbox-1/"},"Flexbox"),"."),(0,r.mdx)("p",null,"To learn more about Flexbox, see the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/flexbox-yoga"},"Layout with Flexbox")," page of the 'Main Concepts' section."),(0,r.mdx)("h2",{id:"preparatory-data-model-classes"},"Preparatory data model classes"),(0,r.mdx)("p",null,"Before you start with the main content of this section of the tutorial, add two simple classes that represent the 'User' and 'Post' data models."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/model/models.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/model/models.kt",start:"start_example",end:"end_example"},"class User(val username: String, @DrawableRes val avatarRes: Int)\n\nclass Post(\n    val id: String,\n    val user: User,\n    @DrawableRes val imageRes: Int,\n    val text: String? = null\n)\n")),(0,r.mdx)("h2",{id:"the-postcomponent"},"The PostComponent"),(0,r.mdx)("p",null,"With the data models prepared, it's time to build a component for a post that features two images and one item of text laid out in a tabular format."),(0,r.mdx)("p",null,"To learn more about different layout options, see the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/flexbox-yoga"},"Layout with Flexbox")," page."),(0,r.mdx)("p",null,"For now, as far as layout is concerned, it's enough to know that the component uses ",(0,r.mdx)("strong",{parentName:"p"},"Column")," and ",(0,r.mdx)("strong",{parentName:"p"},"Row")," (known as 'containers'). These containers are used to arrange the images and text (known as 'primitives') vertically and horizontally, respectively."),(0,r.mdx)("p",null,"With the containers and primitives in mind, a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Post")," component that renders the UI of an Instagram post look as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/PostComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/PostComponent.kt",start:"start_example",end:"end_example"},"class PostComponent(val post: Post) : KComponent() {\n  override fun ComponentScope.render(): Component {\n    return Column {\n      child(\n          Row {\n            child(Image(drawable = drawableRes(post.user.avatarRes)))\n            child(Text(text = post.user.username, textStyle = Typeface.BOLD))\n          })\n      child(\n          Image(\n              drawable = drawableRes(post.imageRes),\n              scaleType = ImageView.ScaleType.CENTER_CROP,\n              style = Style.aspectRatio(1f)))\n    }\n  }\n}\n")),(0,r.mdx)("p",null,"Though the components are placed in a defined tabular format, the layout doesnt look good. So, as a final touch, you can make it look more stylish with a Flexbox style."),(0,r.mdx)("h2",{id:"applying-a-flexbox-style"},"Applying a Flexbox style"),(0,r.mdx)("p",null,"The following code shows the effect of using a Flexbox style on the Post component (notice the additional props for ",(0,r.mdx)("inlineCode",{parentName:"p"},"width"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"height"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"padding"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"margin"),"):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/PostStyledKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/PostStyledKComponent.kt",start:"start_example",end:"end_example"},"class PostStyledKComponent(val post: Post) : KComponent() {\n  override fun ComponentScope.render(): Component {\n    return Column {\n      child(\n          Row(alignItems = YogaAlign.CENTER, style = Style.padding(all = 8.dp)) {\n            child(\n                Image(\n                    drawable = drawableRes(post.user.avatarRes),\n                    style = Style.width(36.dp).height(36.dp).margin(start = 4.dp, end = 8.dp)))\n            child(Text(text = post.user.username, textStyle = Typeface.BOLD))\n          })\n      child(\n          Image(\n              drawable = drawableRes(post.imageRes),\n              scaleType = ImageView.ScaleType.CENTER_CROP,\n              style = Style.aspectRatio(1f)))\n    }\n  }\n}\n")),(0,r.mdx)("p",null,"With the Flexbox style applied, your component should look like the following image."),(0,r.mdx)("img",{src:(0,l.default)("/images/simple_component_tutorial.png"),width:"200px",className:"white-background"}),(0,r.mdx)("h3",{id:"key-points-in-poststyledkcomponentkt"},"Key Points in PostStyledKComponent.kt"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"Column")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"Row")," - the key container types in Litho."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"padding")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"margin")," - props that set padding and margin using ",(0,r.mdx)("inlineCode",{parentName:"li"},"Dimen")," (a class that represents dimension values in different Android units: ",(0,r.mdx)("inlineCode",{parentName:"li"},"Px"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"Dp"),", and ",(0,r.mdx)("inlineCode",{parentName:"li"},"Sp"),")."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"drawableRes")," - returns an Android Drawable from resource ID."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"Image")," - image is another built-in component that can render a drawable.")),(0,r.mdx)("h2",{id:"what-next"},"What next?"),(0,r.mdx)("p",null,"In the next section of the tutorial, ",(0,r.mdx)("a",{parentName:"p",href:"/docs/tutorial/adding-state"},"Adding State"),", you'll learn about 'useState', one of Litho's 'hooks'."),(0,r.mdx)("p",null,"For more information, see ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/flexbox-yoga"},"Layout System with Flexbox")," in the 'Main Concepts' section."))}x.isMDXComponent=!0}}]);