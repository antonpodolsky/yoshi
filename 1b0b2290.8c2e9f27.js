(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(0),n(284)),i={id:"testing",title:"Testing",sidebar_label:"Testing"},s={id:"yoshi-server/testing",title:"Testing",description:"Now that you have a few server functions and some client code that calls them, how would you test that?",source:"@site/docs/yoshi-server/testing.md",permalink:"/yoshi/docs/next/yoshi-server/testing",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/yoshi-server/testing.md",version:"next",lastUpdatedBy:"Amit Dahan",lastUpdatedAt:1589728186,sidebar_label:"Testing",sidebar:"yoshi-server",previous:{title:"Custom Server",permalink:"/yoshi/docs/next/yoshi-server/custom-server"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Now that you have a few server functions and some client code that calls them, how would you test that?"),Object(a.b)("h1",{id:"server-e2e-tests"},"Server E2E Tests"),Object(a.b)("p",null,"Suppose we have the following server function:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'// greet.api.ts\nimport { method } from "yoshi-server";\n\nexport const greeting = method(function(name: string) {\n  return {\n    greet: `hello ${name}!`,\n    name\n  };\n});\n')),Object(a.b)("p",null,"Testing it can been done by calling the function, just like we call it from the client."),Object(a.b)("p",null,"For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'// server.e2e.ts\nimport HttpClient from "yoshi-server-client";\nimport { greet } from "../src/api/greeting.api";\n\nconst client = new HttpClient({\n  baseUrl: "http://localhost:3000"\n});\n\ntest("should reject on a JSON response", async () => {\n  const response = await client.request(greet)("Yaniv");\n\n  expect(response.greet).toBe("hello Yaniv");\n});\n')),Object(a.b)("h1",{id:"component-tests"},"Component tests"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"In component tests, we want to test a component in isolation, so we mock the server responses. In order to do that, we use the ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi-server-testing")," library.")),Object(a.b)("p",null,"Start by installing it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install --save-dev yoshi-server-testing\n")),Object(a.b)("p",null,"Let's use the following component as an example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'// component.tsx\nimport React from "react";\nimport { HttpClient } from "yoshi-server-client";\nimport { greet } from "./api/greeting.api";\n\ninterface PropsType {\n  httpClient: HttpClient;\n}\n\nexport default class App extends React.Component<PropsType> {\n  state = { text: "" };\n  async componentDidMount() {\n    const { httpClient } = this.props;\n    // trigger an http request that will "run" `greet(\'world\')` on the server.\n    const result = await httpClient.request(greet)("world");\n    this.setState({ text: result.greeting });\n  }\n\n  render() {\n    return (\n      <div>\n        <h2 id="my-text">{this.state.text}</h2>\n      </div>\n    );\n  }\n}\n')),Object(a.b)("p",null,"Start by defining your mocks, which defines how the server function should respond, given specific arguments."),Object(a.b)("p",null,"For example, for each call to ",Object(a.b)("inlineCode",{parentName:"p"},"greet"),' method, with "Yaniv" as an argument, the response will be an object with "Hello Yaniv":'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const mocks = [\n  {\n    request: { method: greet, args: ["Yaniv"] },\n    result: () => ({\n      greeting: "Hello Yaniv"\n    })\n  }\n];\n')),Object(a.b)("p",null,"Next, initialise ",Object(a.b)("inlineCode",{parentName:"p"},"HttpClient")," from ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi-server-testing"),", with the mocks. It replaces ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi-server-client"),"'s ",Object(a.b)("inlineCode",{parentName:"p"},"HttpClient")," and will return results based on the mocks it was initialised with:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const httpClientMock = new HttpClient(mocks);\n")),Object(a.b)("p",null,"You can now inject the ",Object(a.b)("inlineCode",{parentName:"p"},"httpClientMock")," to your component. In this example we will pass it as a prop. You can also use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/mock-functions.html"}),Object(a.b)("inlineCode",{parentName:"a"},"jest.mock"))," instead."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"ReactDOM.render(<Component httpClient={httpClientMock} />, div);\n")),Object(a.b)("hr",null),Object(a.b)("p",null,"Here is the full example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import React from "react";\nimport ReactDOM from "react-dom";\nimport HttpClient from "yoshi-server-testing";\nimport eventually from "wix-eventually";\nimport Component from "./component";\nimport { greet } from "./api/greeting.api";\n\nconst mocks = [\n  {\n    request: { method: greet, args: ["Yaniv"] },\n    result: () => ({\n      greeting: "Hello Yaniv"\n    })\n  }\n];\n\nconst httpClientMock = new HttpClient(mocks);\n\nit("should pass", async () => {\n  const div = document.createElement("div");\n  ReactDOM.render(<Component httpClient={httpClientMock} />, div);\n  return eventually(() => {\n    expect(div.innerHTML).toMatch("Hello Yaniv");\n  });\n});\n')),Object(a.b)("h1",{id:"browser-e2e-tests"},"Browser E2E tests"),Object(a.b)("p",null,"Browser/e2e tests shouldn't know anything about Yoshi Server inner implementation. Test your application as you normally do, using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix-private/sled"}),"sled")," or ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://wix.github.io/yoshi/docs/jest-yoshi-preset"}),"jest-yoshi-preset"),"."))}p.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,h=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return n?o.a.createElement(h,s({ref:t},l,{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);