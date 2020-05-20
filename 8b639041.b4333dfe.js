(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var o=n(2),r=n(9),i=(n(0),n(284)),a={id:"momentjs-optimization",title:"Moment.js optimization",sidebar_label:"Moment.js optimization"},c={id:"development/momentjs-optimization",title:"Moment.js optimization",description:"If you require `moment.js` in your client-side code `webpack` will put all of `moment.js`'s locale files into your bundle (over 90 different locales). This causes a significant bundle increase and it's usually unnecessary.",source:"@site/docs/development/momentjs-optimization.md",permalink:"/yoshi/docs/next/development/momentjs-optimization",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/development/momentjs-optimization.md",version:"next",lastUpdatedBy:"Amit Dahan",lastUpdatedAt:1589728186,sidebar_label:"Moment.js optimization",sidebar:"docs",previous:{title:"HMR",permalink:"/yoshi/docs/next/development/hmr"},next:{title:"Split Chunks",permalink:"/yoshi/docs/next/development/split-chunks"}},l=[],s={rightToc:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you require ",Object(i.b)("inlineCode",{parentName:"p"},"moment.js")," in your client-side code ",Object(i.b)("inlineCode",{parentName:"p"},"webpack")," will put all of ",Object(i.b)("inlineCode",{parentName:"p"},"moment.js"),"'s locale files into your bundle (over 90 different locales). This causes a significant bundle increase and it's usually unnecessary."),Object(i.b)("p",null,"To avoid it, a require to ",Object(i.b)("inlineCode",{parentName:"p"},"moment.js")," will only load ",Object(i.b)("inlineCode",{parentName:"p"},"moment.js")," without any locales. If you need to have some of its locales, you can require them yourself like that:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const moment = require('moment');\nrequire('moment/locale/ja');\n\nmoment.locale('ja');\n...\n")),Object(i.b)("p",null,"You can read more about it here: ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jmblog/how-to-optimize-momentjs-with-webpack/blob/master/README.md"}),"https://github.com/jmblog/how-to-optimize-momentjs-with-webpack/blob/master/README.md")))}m.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(n),b=o,d=p["".concat(a,".").concat(b)]||p[b]||u[b]||i;return n?r.a.createElement(d,c({ref:t},s,{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);