(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{250:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(9),i=(r(0),r(284)),a={id:"overview",title:"Editor Flow Overview",sidebar_label:"Editor Flow"},l={id:"editor-flow/overview",title:"Editor Flow Overview",description:"## Introduction to Out-Of-Iframe",source:"@site/docs/editor-flow/overview.md",permalink:"/yoshi/docs/next/editor-flow/overview",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/editor-flow/overview.md",version:"next",lastUpdatedBy:"Ronen Amiel",lastUpdatedAt:1589719104,sidebar_label:"Editor Flow",sidebar:"editor-flow",next:{title:"Getting Started",permalink:"/yoshi/docs/next/editor-flow/getting-started"}},c=[{value:"Introduction to Out-Of-Iframe",id:"introduction-to-out-of-iframe",children:[]},{value:"Environments",id:"environments",children:[{value:"Viewer",id:"viewer",children:[]},{value:"Editor",id:"editor",children:[]}]},{value:"Components",id:"components",children:[]},{value:"Editor Flow Concept",id:"editor-flow-concept",children:[]},{value:"Types of Editor Flow apps",id:"types-of-editor-flow-apps",children:[{value:"Out-of-Iframe",id:"out-of-iframe",children:[]},{value:"Platform apps",id:"platform-apps",children:[]}]}],p={rightToc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction-to-out-of-iframe"},"Introduction to Out-Of-Iframe"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"out-of-iframe"),"(OOI) is a code name for a platform that enables creating Wix Apps that live in the Viewer's frame. It's similar to the old IFrame TPA but more performant. For more information head to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://bo.wix.com/wix-docs/client/client-frameworks#out-of-iframe"}),"official docs"),"."),Object(i.b)("h2",{id:"environments"},"Environments"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/1521229/81853295-efc2a300-9564-11ea-9a80-98a71e91664c.png",alt:"Untitled-2020-05-13-2148 (1)"})),"\nEach OOI app is constructed from components which are being consumed by 2 hosts"),Object(i.b)("h3",{id:"viewer"},"Viewer"),Object(i.b)("p",null,"The component will be rendered in a single frame, like regular Single Page App. It's needed mostly for performance and environemnt consistency between different components."),Object(i.b)("p",null,"We shouldn't show settings panel component here, but we'll load the worker code (aka \"viewerScript\") under the hood. This worker is running in different thread via ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"}),"Web Worker API")," for performance purposes. Components won't block the main thread with heavy calculations, or requests handling."),Object(i.b)("h3",{id:"editor"},"Editor"),Object(i.b)("p",null,"Currently, applications that are OOI on the Viewer still run inside an iFrame on the Editor.\nWe'll also emulate worker excecution, so components will act the same between editor and viewer parts."),Object(i.b)("p",null,"Moreover, we can have specific Settings Modal (Panel), which will allow users to configure the component. To preserve and share the component's configuration between OOI Widget and Settings we can use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://dev.wix.com/api/iframe-sdk/sdk/wix.data.public#sdk_wix.data.public_wixdatapublic"}),"PublicData API"),"."),Object(i.b)("h2",{id:"components"},"Components"),Object(i.b)("p",null,"Conceptually, each component contains the following elements:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Widget")," or a ",Object(i.b)("inlineCode",{parentName:"li"},"Page")," - React Component rendered on both Viewer and Editor"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Settings Panel")," - React Component rendered on Editor side ","[optional]"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"controller")," - ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://bo.wix.com/wix-docs/client/client-viewer-platform/articles/lifecycle#client-viewer-platform_articles_lifecycle_createcontrollers"}),"Viewer platform controller"),", that runs in both in the Viewer and the Editor")),Object(i.b)("h2",{id:"editor-flow-concept"},"Editor Flow Concept"),Object(i.b)("p",null,"The main idea of using a specific yoshi flow for building Out-of-iFrame apps is to provide the best development experience with minimum boilerplate and gather shared libraries specific to the editor & viewer platforms."),Object(i.b)("p",null,"By creating RFC for different features and trying to create a fruitful discussion with the community, we were able to save a lot of time for developers by providing best practice solutions based on experience."),Object(i.b)("p",null,"Moreover, we are actively contributing to the editor & viewer platforms. If we see that some features are missing we make sure to represent the users of the flow and make sure those problems are solved in the platform side as well."),Object(i.b)("p",null,"For example, by just running ",Object(i.b)("inlineCode",{parentName:"p"},"yoshi-flow-editor start")," we'll open both editor and viewer URLs with specific query params forcing the platform to load your local bundles. So w/o additional configuration developers can start working on apps in production environment."),Object(i.b)("p",null,"The only thing Editor Flow is requiring from users is to follow a convention. This convention requires having strictly organized file structure, the idea originally taken from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://nextjs.org/"}),"next.js framework"),"."),Object(i.b)("h2",{id:"types-of-editor-flow-apps"},"Types of Editor Flow apps"),Object(i.b)("p",null,"Currently we can support 2 types of apps: ",Object(i.b)("strong",{parentName:"p"},"Out of iFrame"),"  and ",Object(i.b)("strong",{parentName:"p"},"Platform"),". "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Theoretically you can mix different types of components in a single app, but it's not tested and we are going to provide more documentation about it after collecting more real-life use-cases.")),Object(i.b)("h3",{id:"out-of-iframe"},"Out-of-Iframe"),Object(i.b)("p",null,"By having a file structure that match Out of iFrame Component, we'll handle it respectively. We'll generate bundles for ",Object(i.b)("inlineCode",{parentName:"p"},"Widget"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Settings"),", ",Object(i.b)("inlineCode",{parentName:"p"},"viewer")," and ",Object(i.b)("inlineCode",{parentName:"p"},"editor")," scripts."),Object(i.b)("h3",{id:"platform-apps"},"Platform apps"),Object(i.b)("p",null,"For platform apps, we won't expect ",Object(i.b)("inlineCode",{parentName:"p"},"Widget.ts")," to be present in the project, but still ",Object(i.b)("inlineCode",{parentName:"p"},"Settings")," will be handled if present. We'll presume you have ",Object(i.b)("inlineCode",{parentName:"p"},"editor.controller.ts")," and ",Object(i.b)("inlineCode",{parentName:"p"},"viewer.controller.ts")," files in component's directory.\nMoreover, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wix-private/bob-widget-services"}),Object(i.b)("inlineCode",{parentName:"a"},"@wix/bob-widget-services"))," will be used under the hood to register widgets automatically.\nFor more info, check ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/yoshi/docs/next/editor-flow/platform-apps-support"}),"Platform apps support section"),"."))}s.isMDXComponent=!0},284:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},d=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,m=d["".concat(a,".").concat(u)]||d[u]||b[u]||i;return r?o.a.createElement(m,l({ref:t},p,{components:r})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);