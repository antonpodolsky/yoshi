(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{220:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(9),i=(r(0),r(284)),a={id:"local-development",title:"Local Development",sidebar_label:"Local Development"},l={id:"version-4.x/editor-flow/local-development",title:"Local Development",description:"### Overview",source:"@site/versioned_docs/version-4.x/editor-flow/local-development.md",permalink:"/yoshi/docs/editor-flow/local-development",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/editor-flow/local-development.md",version:"4.x",lastUpdatedBy:"Amit Dahan",lastUpdatedAt:1589728186,sidebar_label:"Local Development",sidebar:"version-4.x/editor-flow",previous:{title:"Runtime API",permalink:"/yoshi/docs/editor-flow/runtime-API"},next:{title:"Testing",permalink:"/yoshi/docs/editor-flow/testing"}},c=[{value:"Overview",id:"overview",children:[]},{value:"<code>yoshi-flow-editor start</code>",id:"yoshi-flow-editor-start",children:[]}],d={rightToc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"overview"},"Overview"),Object(i.b)("p",null,"Editor yoshi flow aims to create fastest possible development process for Out of iFrame apps."),Object(i.b)("p",null,"We are prodiving Live Reload (HMR feature is in progress...), optimizing the bundle for development purposes, updating with relevant build progress, opening editor and viewer URLs with installed app and overriding bundle paths to be loaded from localhost on production environment."),Object(i.b)("p",null,"The main purpose of the local development part to be really small. It shouldn't be an API or required actions. This is just an informative article to explain what's happening after the hood."),Object(i.b)("h3",{id:"yoshi-flow-editor-start"},Object(i.b)("inlineCode",{parentName:"h3"},"yoshi-flow-editor start")),Object(i.b)("p",null,"This command will do few things:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Start webpack dev cerver to serve bundles and 'refresh' it when the codebase will be changed. All bundles from ",Object(i.b)("inlineCode",{parentName:"li"},"dist")," directory will be served via ",Object(i.b)("inlineCode",{parentName:"li"},"https://locahost:3200"),"."),Object(i.b)("li",{parentName:"ul"},"Start a server to render components for editor side. Since editor renders Out of iFrame apps in iFrame, we should have a way to render it locally. Each component will create own route for Widget and Settings.",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{})," - Widget URL: `localhost:3000/editor/:componentName`\n - Settings URL: `localhost:3000/settings/:componentName`\n")),"These URLs could be used for e2e testing or Widget or Settings development without going to editor page."),Object(i.b)("li",{parentName:"ul"},"Open Editor and Viewer URLs with override query params to trigger a platform load local bundles instead of production one. The only thing you have to do to make it work is to create a blank website and add you Dev Center App here by clicking on ",Object(i.b)("inlineCode",{parentName:"li"},"Test Your App")," button in Dev Center if your app wasn't submitted yet or Add it via ",Object(i.b)("inlineCode",{parentName:"li"},"Add App section")," if it was.")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/1521229/81549570-9c472e00-9387-11ea-846f-d1d0550e3357.png",alt:"excalidraw-202034141034"})),"\nThe basic concept of URL overrides for production environment"))}s.isMDXComponent=!0},284:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),s=function(e){var t=o.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},p=function(e){var t=s(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,m=p["".concat(a,".").concat(b)]||p[b]||u[b]||i;return r?o.a.createElement(m,l({ref:t},d,{components:r})):o.a.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);