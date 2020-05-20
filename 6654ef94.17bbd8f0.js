(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(9),o=(n(0),n(281)),a={id:"app-configuration",title:"App Configuration Level",sidebar_label:"App Configuration Level"},p={id:"version-4.x/editor-flow/structure-api/app-configuration",title:"App Configuration Level",description:"## App configuration",source:"@site/versioned_docs/version-4.x/editor-flow/structure-api/configuration.md",permalink:"/yoshi/docs/editor-flow/structure-api/app-configuration",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/editor-flow/structure-api/configuration.md",version:"4.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589968552,sidebar_label:"App Configuration Level",sidebar:"version-4.x/editor-flow",previous:{title:"Structure Overview",permalink:"/yoshi/docs/editor-flow/structure-api/overview"},next:{title:"Application Level",permalink:"/yoshi/docs/editor-flow/structure-api/application"}},c=[{value:"App configuration",id:"app-configuration",children:[{value:"<code>.application.json</code>",id:"applicationjson",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"app-configuration"},"App configuration"),Object(o.b)("h3",{id:"applicationjson"},Object(o.b)("inlineCode",{parentName:"h3"},".application.json")),Object(o.b)("p",null,"Each app should contain ",Object(o.b)("inlineCode",{parentName:"p"},".application.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "appDefinitionId": "YOUR_APP_DEFINITION_ID",\n  "appName": "Your app name",\n  "sentry": {\n    DSN: "https://e255c968aa1143f08fc02e9243b66136@o283065.ingest.sentry.io/1510555",\n    id: "SENTRY_ID",\n    teamName: "some-team",\n    projectName: "some-project"\n  },\n  "experiments": {\n    "scope": "test"\n  }\n}\n')),Object(o.b)("p",null,"The content will be auto-generated by ",Object(o.b)("inlineCode",{parentName:"p"},"create-yoshi-app"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"appDefinitionId")," - App definition id of you app in app service."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"appName")," - App's name in app service."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sentry")," - Automatically configured object according to the ",Object(o.b)("inlineCode",{parentName:"li"},"team name")," you've selected. ",Object(o.b)("inlineCode",{parentName:"li"},"projectName")," will be the same as an app's artifact name."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"experiments"),": Configuration object for current experiments scope. After generation it's mocked with ",Object(o.b)("inlineCode",{parentName:"li"},"test")," scope, which should be updated or removed before publishing app to production.")))}u.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},s=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(a,".").concat(d)]||s[d]||b[d]||o;return n?i.a.createElement(f,p({ref:t},l,{components:n})):i.a.createElement(f,p({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);