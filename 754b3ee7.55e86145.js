(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),r=(n(0),n(257)),i={title:"Yoshi Is Not Dead",author:"Ran Yitzhaki & Ronen Amiel"},c={permalink:"/yoshi/blog/2018/03/14/yoshi-is-not-dead",source:"@site/blog/2018-03-14-yoshi-is-not-dead.md",description:"Hey Feds,",date:"2018-03-14T00:00:00.000Z",tags:[],title:"Yoshi Is Not Dead",readingTime:1.235,truncated:!1,prevItem:{title:"Moving To Semantic Versioning",permalink:"/yoshi/blog/2018/03/14/semantic-versioning"}},s=[{value:"Some history",id:"some-history",children:[]},{value:"Moving back to yoshi",id:"moving-back-to-yoshi",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Hey Feds,\nWe made some changes recently in ",Object(r.b)("inlineCode",{parentName:"p"},"haste"),"/",Object(r.b)("inlineCode",{parentName:"p"},"yoshi"),"/",Object(r.b)("inlineCode",{parentName:"p"},"generators"),". We\u2019ll try to shed some light on the topic."),Object(r.b)("h3",{id:"some-history"},"Some history"),Object(r.b)("p",null,"A few months ago we moved from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix/yoshi"}),Object(r.b)("inlineCode",{parentName:"a"},"yoshi"))," to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix-private/wix-haste/blob/master/README.md"}),Object(r.b)("inlineCode",{parentName:"a"},"haste-preset-yoshi")),".\n",Object(r.b)("inlineCode",{parentName:"p"},"haste-preset-yoshi")," is practically ",Object(r.b)("inlineCode",{parentName:"p"},"yoshi"),", nothing changed, same yoshi config, same behaviour, we actually used the same test suite. We only replaced the engine that runs yoshi, to help us deliver faster builds."),Object(r.b)("h3",{id:"moving-back-to-yoshi"},"Moving back to yoshi"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"TL;DR - We are going back to use ",Object(r.b)("inlineCode",{parentName:"strong"},"yoshi")," in our ",Object(r.b)("inlineCode",{parentName:"strong"},"package.json")," and as a dependency. Haste will be used internally by Yoshi as its engine")),Object(r.b)("p",null,"Using a ",Object(r.b)("inlineCode",{parentName:"p"},"haste")," bin was a mistake, Haste is just an engine that helps to create and run toolkits.\nFor example, ",Object(r.b)("inlineCode",{parentName:"p"},"yoshi")," is a toolkit, and we could have changed Yoshi\u2019s implementation without affecting you, our users. We understand that this change led to a lot of confusion and we are sorry about it."),Object(r.b)("p",null,"We understand that naming our toolkit ",Object(r.b)("inlineCode",{parentName:"p"},"haste-preset-yoshi")," was wrong. We don\u2019t want the users to know how their toolkit work under the hood. Each toolkit (Yoshi including) will have its own binary file (different command name in ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),")."),Object(r.b)("p",null,"In the future, we plan to remove the ",Object(r.b)("inlineCode",{parentName:"p"},"haste")," binary and change the name of the toolkit back to ",Object(r.b)("inlineCode",{parentName:"p"},"yoshi"),". We\u2019ve already removed the requirement to specify a ",Object(r.b)("inlineCode",{parentName:"p"},"preset")," in ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," and added ",Object(r.b)("inlineCode",{parentName:"p"},"yoshi")," as a working binary to ",Object(r.b)("inlineCode",{parentName:"p"},"haste-preset-yoshi"),". We\u2019ve also changed it in the generators."),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"P.S.")," Watch ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=G39lKaONAlA"}),"Dan Abramov\u2019s talk")," if you\u2019re interested in the idea of toolkits."))}p.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,d=b["".concat(i,".").concat(h)]||b[h]||u[h]||r;return n?o.a.createElement(d,c({ref:t},l,{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);