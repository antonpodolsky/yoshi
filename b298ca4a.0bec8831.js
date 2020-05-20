(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{236:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(9),i=(n(0),n(281)),o={id:"cli-API",title:"CLI API",sidebar_label:"CLI API"},l={id:"version-4.x/editor-flow/cli-API",title:"CLI API",description:"The Yoshi Flow Editor CLI allows you to start, build, test and lint your application.",source:"@site/versioned_docs/version-4.x/editor-flow/cli-API.md",permalink:"/yoshi/docs/editor-flow/cli-API",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/editor-flow/cli-API.md",version:"4.x",lastUpdatedBy:"yanivefraim",lastUpdatedAt:1589473950,sidebar_label:"CLI API",sidebar:"version-4.x/editor-flow",previous:{title:"Getting Started",permalink:"/yoshi/docs/editor-flow/getting-started"},next:{title:"Structure Overview",permalink:"/yoshi/docs/editor-flow/structure-api/overview"}},c=[{value:"Start",id:"start",children:[{value:"<code>--production</code>",id:"--production",children:[]}]},{value:"Build",id:"build",children:[{value:"<code>--analyze</code>",id:"--analyze",children:[]}]},{value:"Test",id:"test",children:[{value:"<code>--watch</code>",id:"--watch",children:[]}]},{value:"Lint",id:"lint",children:[{value:"<code>--fix</code>",id:"--fix",children:[]}]}],b={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Yoshi Flow Editor CLI allows you to start, build, test and lint your application."),Object(i.b)("p",null,"To get a list of the available CLI commands, run the following command inside your project directory: ",Object(i.b)("inlineCode",{parentName:"p"},"yoshi-flow-editor --help")),Object(i.b)("h2",{id:"start"},"Start"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"yoshi-flow-editor start\n")),Object(i.b)("p",null,"Runs the app in development mode and opens viewer and editor URLs with configured query params to load the app from a local environment.\nIt will create 2 local server processes under the hood:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CDN to serve statics. You can access any resource from the ",Object(i.b)("inlineCode",{parentName:"li"},"dist")," directory via port ",Object(i.b)("inlineCode",{parentName:"li"},"3200"),":")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Resource"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"URL"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"Widget")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"localhost:3200/[:componentName]ViewerWidget.bundle.js"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"viewerScript")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"localhost:3200/viewerScript.bundle.js"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"editorScript")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"localhost:3200/editorScript.bundle.js"))))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Server for editor component and settings panel locally via port ",Object(i.b)("inlineCode",{parentName:"li"},"3000"),".")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Component"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"URL"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Editor"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"localhost:3000/editor/[:componentName]"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Settings panel"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"localhost:3000/settings/[:componentName]"))))),Object(i.b)("h3",{id:"--production"},Object(i.b)("inlineCode",{parentName:"h3"},"--production")),Object(i.b)("p",null,"Will create minified bundles to emulate production build during the local experience."),Object(i.b)("h2",{id:"build"},"Build"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"yoshi-flow-editor build\n")),Object(i.b)("p",null,"Build an optimized version of your app for production environment. Generated artifacts should be available under the ",Object(i.b)("inlineCode",{parentName:"p"},"dist")," directory."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Creates minified ",Object(i.b)("inlineCode",{parentName:"li"},"Widget"),", ",Object(i.b)("inlineCode",{parentName:"li"},"viewerScript")," and ",Object(i.b)("inlineCode",{parentName:"li"},"editorScript")," bundles. (ex. ",Object(i.b)("inlineCode",{parentName:"li"},"dist/buttonViewerWidget.bundle.min.js"),")"),Object(i.b)("li",{parentName:"ul"},"Generates editor and settings ",Object(i.b)("inlineCode",{parentName:"li"},".html"),"s under ",Object(i.b)("inlineCode",{parentName:"li"},"dist/editor/[:componentName].html")," file. It could be used as an editor and settings panel URLs on production. If you are using a server to serve the editor part, you can still find the ",Object(i.b)("inlineCode",{parentName:"li"},".vm")," files at the same locations.")),Object(i.b)("h3",{id:"--analyze"},Object(i.b)("inlineCode",{parentName:"h3"},"--analyze")),Object(i.b)("p",null,"Builds the app and opens bundle analysis results. (visual statistics for widget and worker bundles)"),Object(i.b)("h2",{id:"test"},"Test"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"yoshi-flow-editor test\n")),Object(i.b)("p",null,"Start your test with the configured test runner (Jest by default)."),Object(i.b)("h3",{id:"--watch"},Object(i.b)("inlineCode",{parentName:"h3"},"--watch")),Object(i.b)("p",null,"Start tests in watch mode."),Object(i.b)("h2",{id:"lint"},"Lint"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"yoshi-flow-editor lint\n")),Object(i.b)("p",null,"Runs linter configured on your working files."),Object(i.b)("h3",{id:"--fix"},Object(i.b)("inlineCode",{parentName:"h3"},"--fix")),Object(i.b)("p",null,"Runs linter and tries to fix issues in your codebase. Fixes are syntax-aware so you won't experience errors introduced by traditional find-and-replace algorithms."))}d.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),d=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=d(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=d(n),s=r,O=p["".concat(o,".").concat(s)]||p[s]||u[s]||i;return n?a.a.createElement(O,l({ref:t},b,{components:n})):a.a.createElement(O,l({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);