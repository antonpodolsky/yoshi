(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),i=n(9),o=(n(0),n(278)),a={id:"svg",title:"How to use SVG?",sidebar_label:"How to use SVG?"},c={id:"version-3.x/guides/svg",title:"How to use SVG?",description:"There are few ways of using SVG:",source:"@site/versioned_docs/version-3.x/guides/svg.md",permalink:"/yoshi/docs/3.x/guides/svg",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-3.x/guides/svg.md",version:"3.x",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1589386576,sidebar_label:"How to use SVG?",sidebar:"version-3.x-docs",previous:{title:"Split Chunks",permalink:"/yoshi/docs/3.x/guides/split-chunks"},next:{title:"Managing Dependencies",permalink:"/yoshi/docs/3.x/guides/managing-dependencies"}},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are few ways of using SVG:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Just import it or use ",Object(o.b)("inlineCode",{parentName:"li"},"background: url()")," in your css and it will be inserted as data URI"),Object(o.b)("li",{parentName:"ul"},'Call the svg file with "inline" suffix (i.e., "icon.inline.svg"), then import it and it will import optimized svg,\nwhich can be inserted to the DOM. Note: don\'t use this for react application, raw svg is not valid react code, use the next one.'),Object(o.b)("li",{parentName:"ul"},"For react applications use ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/wix/svg2react-icon"}),"https://github.com/wix/svg2react-icon")," \u2013 converts your svg into a react component.")))}l.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||o;return n?i.a.createElement(f,c({ref:t},u,{components:n})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);