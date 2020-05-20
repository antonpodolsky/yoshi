(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{191:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return p}));var n=o(2),r=o(9),i=(o(0),o(284)),a={id:"welcome",title:"Welcome",sidebar_label:"Welcome"},l={id:"version-4.x/welcome",title:"Welcome",description:"## What is Yoshi?",source:"@site/versioned_docs/version-4.x/welcome.md",permalink:"/yoshi/docs/welcome",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/welcome.md",version:"4.x",lastUpdatedBy:"Amit Dahan",lastUpdatedAt:1589728186,sidebar_label:"Welcome",sidebar:"version-4.x/docs",next:{title:"Create Yoshi App",permalink:"/yoshi/docs/create-yoshi-app"}},c=[{value:"What is Yoshi?",id:"what-is-yoshi",children:[]},{value:"Yoshi Development Flows",id:"yoshi-development-flows",children:[{value:"App Flow",id:"app-flow",children:[]},{value:"Library Flow",id:"library-flow",children:[]},{value:"Editor Flow",id:"editor-flow",children:[]},{value:"Business Manager Flow",id:"business-manager-flow",children:[]},{value:"Monorepo Flow",id:"monorepo-flow",children:[]},{value:"Legacy Flow",id:"legacy-flow",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-yoshi"},"What is Yoshi?"),Object(i.b)("p",null,"\ud83d\udc4b Hey everybody and welcome to the Yoshi Universe!"),Object(i.b)("p",null,"Yoshi is a tool that lets you generate a new project out of a template, and then provide you with a toolkit that keeps updating your build infrastructure as you update its versions."),Object(i.b)("p",null,"Its purpose is to speed up your development, provide you with cool developer experience features, and make sure infrastructure problems are being solved once in a single place."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"yoshi-development-flows"},"Yoshi Development Flows"),Object(i.b)("p",null,"Yoshi started as a simple toolkit to build a generic application in Wix. After understanding that we can't provide really good developer experience without fitting it to the type of the application being built, We've decided to split Yoshi into multiple Flows!"),Object(i.b)("p",null,"Each flow should be tailor-made, have zero boilerplate, and minimal configuration. While all use the same engine under the hood, each flow is a different toolkit, can have different CLI commands and different configuration options."),Object(i.b)("p",null,"While we strive for all flows the feel the same, we understand that in order to provide the best experience, we have to keep them flexible enough to make even fundamental changes."),Object(i.b)("h3",{id:"app-flow"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"/yoshi/docs/app-flow"}),"App Flow")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Also known as ",Object(i.b)("inlineCode",{parentName:"p"},'projectType: "app"'))),Object(i.b)("p",null,"This is a generic flow to create Fullstack/Client applications."),Object(i.b)("h3",{id:"library-flow"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"/yoshi/docs/library-flow"}),"Library Flow")),Object(i.b)("p",null,"This is a generic flow to create Client libraries."),Object(i.b)("h3",{id:"editor-flow"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"/yoshi/docs/editor-flow/overview"}),"Editor Flow")),Object(i.b)("p",null,"This flow is specific to building Editor-Platform-Apps and Out-Of-iFrame Apps."),Object(i.b)("h3",{id:"business-manager-flow"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"/yoshi/docs/business-manager-flow"}),"Business Manager Flow")),Object(i.b)("p",null,"This flow is specific to building Business-Manager-Modules."),Object(i.b)("h3",{id:"monorepo-flow"},"Monorepo Flow"),Object(i.b)("p",null,"An experimental flow to support monorepos, currently used by the big platforms: Editor-X, Thunderbolt & Editor Elements."),Object(i.b)("h3",{id:"legacy-flow"},Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"/yoshi/docs/legacy-flow"}),"Legacy Flow")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Also known as ",Object(i.b)("inlineCode",{parentName:"p"},"yoshi"))),Object(i.b)("p",null,"This is how we refer to the old flowless yoshi nowadays, it can be configured in many ways and it's generally better to use a different, specific flow."))}p.isMDXComponent=!0},284:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return f}));var n=o(0),r=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l({},t,{},e)),o},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(o),d=n,f=b["".concat(a,".").concat(d)]||b[d]||u[d]||i;return o?r.a.createElement(f,l({ref:t},s,{components:o})):r.a.createElement(f,l({ref:t},s))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);