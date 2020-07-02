(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return c}));var a=n(2),o=n(6),i=(n(0),n(257)),r={id:"overview",title:"Business-Manager Flow Overview",sidebar_label:"Overview"},l={id:"business-manager-flow/overview",title:"Business-Manager Flow Overview",description:"> \ud83e\uddea Experimental",source:"@site/docs/business-manager-flow/overview.md",permalink:"/yoshi/docs/next/business-manager-flow/overview",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/business-manager-flow/overview.md",version:"next",lastUpdatedBy:"Amit Dahan",lastUpdatedAt:1593610514,sidebar_label:"Overview",sidebar:"business-manager-flow",next:{title:"Migration Guide",permalink:"/yoshi/docs/next/business-manager-flow/migration"}},b=[{value:"Overview",id:"overview",children:[]},{value:"Concepts",id:"concepts",children:[{value:"Module Bundle",id:"module-bundle",children:[]},{value:"Pages",id:"pages",children:[]},{value:"Exported Components",id:"exported-components",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Initial Setup",id:"initial-setup",children:[]},{value:"Development",id:"development",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Module-level Configuration",id:"module-level-configuration",children:[]},{value:"Page-level Configuration",id:"page-level-configuration",children:[]},{value:"Exported Component-level Configuration",id:"exported-component-level-configuration",children:[]},{value:"Method-level Configuration",id:"method-level-configuration",children:[]},{value:"Run code in BM&#39;s <code>init()</code> phase",id:"run-code-in-bms-init-phase",children:[]}]}],p={rightToc:b};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\ud83e\uddea Experimental")),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"The Business-Manager is Wix's backoffice platform.\nFor more information on the platform, see the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix-private/business-manager/"}),"official docs"),"."),Object(i.b)("p",null,"Yoshi's Business-Manager Flow eases the development process of Business-Manager applications by reducing boilerplate, automating common tasks and solving infrastructure and runtime problems in a single place."),Object(i.b)("p",null,"Inspired by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://nextjs.org/#file-system-routing"}),"Next.js")," It requires the developer to create a specific file structure and can statically analyze it to provide features like file system routing, auto generation of module config and more."),Object(i.b)("h2",{id:"concepts"},"Concepts"),Object(i.b)("h3",{id:"module-bundle"},"Module Bundle"),Object(i.b)("p",null,"BM Flow auto-generates a module bundle file for you, which will automatically register the necessary pages & public API for your application at runtime."),Object(i.b)("h3",{id:"pages"},"Pages"),Object(i.b)("p",null,"Adding Page Components to your application is as simple as creating a new file somewhere in the special ",Object(i.b)("inlineCode",{parentName:"p"},"src/pages")," directory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),'// src/pages/index.tsx\n\nexport default () => {\n  useEffect(() => {\n    notifyViewFinishedLoading("<YOUR_PAGE_COMPONENT_NAME>");\n  }, []);\n\n  return <Page>...</Page>;\n};\n')),Object(i.b)("h4",{id:"route"},"Route"),Object(i.b)("p",null,"The pages' route will be determined by the page file's path relative to the root ",Object(i.b)("inlineCode",{parentName:"p"},"src/pages")," directory, prefixed with the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#routenamespace"}),Object(i.b)("inlineCode",{parentName:"a"},"routeNamespace")," config option"),".\nFor example:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Path"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Route"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"src/pages/index.tsx")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"/"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"src/pages/foo.tsx")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"/foo"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"src/pages/foo/bar.tsx")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"/foo/bar"))))),Object(i.b)("h3",{id:"exported-components"},"Exported Components"),Object(i.b)("p",null,"Similar to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#pages"}),"pages"),", exposing components from your Business-Manager module is done by creating a new file in the special ",Object(i.b)("inlineCode",{parentName:"p"},"src/exported-components")," directory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),"// src/exported-components/shared-modal.tsx\n\nexport default () => {\n  return <Modal>...</Modal>;\n};\n")),Object(i.b)("h3",{id:"methods"},"Methods"),Object(i.b)("p",null,"Exposing methods from your Business-Manager module is done by creating files in the special ",Object(i.b)("inlineCode",{parentName:"p"},"src/methods")," directory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// src/methods/some-method.ts\nimport { MethodFn } from "yoshi-flow-bm-runtime";\n\nconst method: MethodFn = ({ module, moduleParams }, ...args) => {\n  // Do plenty of things\n};\n\nexport default method;\n')),Object(i.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"EXPERIMENTAL_FLOW_BM=true npx create-yoshi-app")," & choose template ",Object(i.b)("inlineCode",{parentName:"p"},"flow-bm"),"."),Object(i.b)("p",null,"This will bootstrap a new Business-Manager application, along with a single (root) page."),Object(i.b)("h2",{id:"development"},"Development"),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"npx yoshi-bm start")," to start your Business-Manager application.\nThis serves your application's statics and opens up production Business-Manager, pre-configured with the needed overrides."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"To override this, pass ",Object(i.b)("inlineCode",{parentName:"p"},"--url"),", for example: ",Object(i.b)("inlineCode",{parentName:"p"},"npx yoshi-bm start --url http://localhost:3000"),".")),Object(i.b)("h2",{id:"deployment"},"Deployment"),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"npx yoshi-bm build")," to build your Business-Manager application.\nThis builds your module bundle and generates a working ",Object(i.b)("inlineCode",{parentName:"p"},"module_MODULE_ID.json")," file in your ",Object(i.b)("inlineCode",{parentName:"p"},"target")," directory, for your ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix-private/business-manager/blob/master/business-manager-web/docs/module-config-file.md"}),"integration with Business-Manager"),"."),Object(i.b)("h2",{id:"testing"},"Testing"),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"npx yoshi-bm test")," to run your tests with the configured test runner (Jest by default). Pass ",Object(i.b)("inlineCode",{parentName:"p"},"--watch")," to start it in watch mode."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("h3",{id:"module-level-configuration"},"Module-level Configuration"),Object(i.b)("p",null,"The following configurations are available by creating a ",Object(i.b)("inlineCode",{parentName:"p"},".module.json")," file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "moduleId": "my-module",\n  "moduleConfigurationId": "my-parent-module",\n  "appDefId": "00000000-0000-0000-0000-000000000000",\n  "moduleBundleName": "my-entry",\n  "routeNamespace": "my-route",\n  "topology": {\n    "someArtifactsUrl": {\n      "artifactId": "com.wixpress.some-artifact"\n    }\n  },\n  "experimentsScopes": ["some-petri-scope"]\n}\n')),Object(i.b)("hr",null),Object(i.b)("h4",{id:"moduleid"},Object(i.b)("inlineCode",{parentName:"h4"},"moduleId")),Object(i.b)("p",null,"Use this to override your ",Object(i.b)("inlineCode",{parentName:"p"},"moduleId"),".\nDefaults to your ",Object(i.b)("inlineCode",{parentName:"p"},"artifactId")," (taken from ",Object(i.b)("inlineCode",{parentName:"p"},"pom.xml"),")."),Object(i.b)("h4",{id:"moduleconfigurationid"},Object(i.b)("inlineCode",{parentName:"h4"},"moduleConfigurationId")),Object(i.b)("p",null,"Use this to indicate your ",Object(i.b)("inlineCode",{parentName:"p"},"moduleConfigurationId"),".\nRead more ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix-private/business-manager/blob/master/business-manager-api/docs/business-manager-module.md#setmoduleconfigurationid"}),"here"),"."),Object(i.b)("h4",{id:"appdefid"},Object(i.b)("inlineCode",{parentName:"h4"},"appDefId")),Object(i.b)("p",null,"Use this to indicate your ",Object(i.b)("inlineCode",{parentName:"p"},"appDefId"),".\nThis will affect the ",Object(i.b)("inlineCode",{parentName:"p"},"target/module_<MODULE_ID>.json")," generated by ",Object(i.b)("inlineCode",{parentName:"p"},"yoshi-bm build"),"."),Object(i.b)("h4",{id:"modulebundlename"},Object(i.b)("inlineCode",{parentName:"h4"},"moduleBundleName")),Object(i.b)("p",null,"Use this to change the module bundle's name.\nDefaults to ",Object(i.b)("inlineCode",{parentName:"p"},"'module'")," (which will output ",Object(i.b)("inlineCode",{parentName:"p"},"module.bundle.js")," & ",Object(i.b)("inlineCode",{parentName:"p"},"module.bundle.min.js"),")."),Object(i.b)("h4",{id:"routenamespace"},Object(i.b)("inlineCode",{parentName:"h4"},"routeNamespace")),Object(i.b)("p",null,"This prefixes all your pages with the given string.\nDefaults to ",Object(i.b)("inlineCode",{parentName:"p"},"''"),"."),Object(i.b)("p",null,"For example, given ",Object(i.b)("inlineCode",{parentName:"p"},'"routeNamespace": "foo"'),", the following pages will configured as such:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Path"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Route"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"src/pages/index.tsx")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"/foo"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"src/pages/bar.tsx")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"/foo/bar"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"src/pages/bar/baz.tsx")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"/foo/bar/baz"))))),Object(i.b)("h4",{id:"topology"},Object(i.b)("inlineCode",{parentName:"h4"},"topology")),Object(i.b)("p",null,"Sets your application's topology template.\nThis will affect the ",Object(i.b)("inlineCode",{parentName:"p"},"target/module_<MODULE_ID>.json")," generated by ",Object(i.b)("inlineCode",{parentName:"p"},"yoshi-bm build"),"."),Object(i.b)("p",null,"Defaults to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "staticsUrl": {\n    "artifactId": "<YOUR_ARTIFACT_ID>"\n  }\n}\n')),Object(i.b)("h4",{id:"experimentsscopes"},Object(i.b)("inlineCode",{parentName:"h4"},"experimentsScopes")),Object(i.b)("p",null,"Accepts an array of Petri scopes, which will initialize an ",Object(i.b)("inlineCode",{parentName:"p"},"ExperimentsProvider")," above your pages & exported-components.\nConsumption example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:"jsx",jsx:!0}),'import { useExperiments } from "yoshi-flow-bm-runtime";\n\nexport default () => {\n  const { experiments } = useExperiments();\n\n  return (\n    <div\n      style={{ backgroundColor: experiments.enabled("spec") ? "red" : "blue" }}\n    />\n  );\n};\n')),Object(i.b)("h3",{id:"page-level-configuration"},"Page-level Configuration"),Object(i.b)("p",null,"Pages can be customized by adding a ",Object(i.b)("inlineCode",{parentName:"p"},"*.json")," file with the same name as the appropriate page.\nFor example, the ",Object(i.b)("inlineCode",{parentName:"p"},"src/pages/some-route.tsx")," file, will be configured by ",Object(i.b)("inlineCode",{parentName:"p"},"src/pages/some-route.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "componentId": "some-component-id",\n  "componentName": "some-component-name"\n}\n')),Object(i.b)("h4",{id:"pagecomponentid"},Object(i.b)("inlineCode",{parentName:"h4"},"page.componentId")),Object(i.b)("p",null,"Sets the page's ",Object(i.b)("inlineCode",{parentName:"p"},"componentId"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"<MODULE_ID>.pages.<FILE_NAME>"),"."),Object(i.b)("h4",{id:"pagecomponentname"},Object(i.b)("inlineCode",{parentName:"h4"},"page.componentName")),Object(i.b)("p",null,"Sets the page's ",Object(i.b)("inlineCode",{parentName:"p"},"componentName"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"<MODULE_ID>.pages.<FILE_NAME>"),"."),Object(i.b)("h3",{id:"exported-component-level-configuration"},"Exported Component-level Configuration"),Object(i.b)("p",null,"Exported components can be customized by adding a ",Object(i.b)("inlineCode",{parentName:"p"},"*.json")," file with the same name as the appropriate component file.\nFor example, the ",Object(i.b)("inlineCode",{parentName:"p"},"src/exported-components/some-component.tsx")," file, will be configured by ",Object(i.b)("inlineCode",{parentName:"p"},"src/exported-components/some-component.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "componentId": "some-component-id"\n}\n')),Object(i.b)("h4",{id:"exported-componentcomponentid"},Object(i.b)("inlineCode",{parentName:"h4"},"exported-component.componentId")),Object(i.b)("p",null,"Sets the component's ",Object(i.b)("inlineCode",{parentName:"p"},"componentId"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"<MODULE_ID>.components.<FILE_NAME>"),"."),Object(i.b)("h3",{id:"method-level-configuration"},"Method-level Configuration"),Object(i.b)("p",null,"Methods can be customized by adding a ",Object(i.b)("inlineCode",{parentName:"p"},"*.json")," file with the same name as the appropriate method file.\nFor example, the ",Object(i.b)("inlineCode",{parentName:"p"},"src/methods/some-method.ts")," file, will be configured by ",Object(i.b)("inlineCode",{parentName:"p"},"src/methods/some-method.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "methodId": "some-method-id"\n}\n')),Object(i.b)("h4",{id:"methodmethodid"},Object(i.b)("inlineCode",{parentName:"h4"},"method.methodId")),Object(i.b)("p",null,"Sets the method's ",Object(i.b)("inlineCode",{parentName:"p"},"methodId"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"<MODULE_ID>.methods.<FILE_NAME>"),"."),Object(i.b)("h3",{id:"run-code-in-bms-init-phase"},"Run code in BM's ",Object(i.b)("inlineCode",{parentName:"h3"},"init()")," phase"),Object(i.b)("p",null,"Create a file ",Object(i.b)("inlineCode",{parentName:"p"},"src/moduleInit.{ts,js}"),", for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'import { ModuleInitFn } from "yoshi-flow-bm-runtime";\n\nconst moduleInit: ModuleInitFn = ({ module, moduleParams }) => {\n  // ...\n};\n\nexport default moduleInit;\n')),Object(i.b)("p",null,"More info ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix-private/business-manager/blob/master/business-manager-api/docs/business-manager-module.md#init"}),"here"),"."))}c.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,u=s["".concat(r,".").concat(m)]||s[m]||d[m]||i;return n?o.a.createElement(u,l({ref:t},p,{components:n})):o.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);