(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{212:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(215),m=t(222),c=t(236),i=t(217);var o=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))};a.default=function(e){const{metadata:a,items:t}=e,{siteConfig:{title:n}}=Object(l.a)(),i="/"===a.permalink?n:"Blog";return r.a.createElement(m.a,{title:i,description:"Blog"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},t.map(({content:e})=>r.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},r.a.createElement(e,null))),r.a.createElement(o,{metadata:a})))))}},236:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(216),m=t.n(l),c=t(214),i=t(217),o=t(239),s=t(98),g=t.n(s);const u=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:l,isBlogPostPage:s=!1}=e,{date:E,permalink:d,tags:v,readingTime:p}=n,{author:_,title:N}=t,h=t.author_url||t.authorURL,b=t.author_title||t.authorTitle,f=t.author_image_url||t.authorImageURL;return r.a.createElement("article",{className:s?void 0:"margin-bottom--xl"},(()=>{const e=s?"h1":"h2",a=E.substring(0,10).split("-"),t=a[0],n=u[parseInt(a[1],10)-1],l=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:m()("margin-bottom--sm",g.a.blogPostTitle)},s?N:r.a.createElement(i.a,{to:d},N)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:E,className:g.a.blogPostDate},n," ",l,", ",t," ",p&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(p)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},f&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:h,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:f,alt:_})),r.a.createElement("div",{className:"avatar__intro"},_&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:h,target:"_blank",rel:"noreferrer noopener"},_)),r.a.createElement("small",{className:"avatar__subtitle"},b)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:o.a},a)),(v.length>0||l)&&r.a.createElement("footer",{className:"row margin-vert--lg"},v.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),v.map(({label:e,permalink:a})=>r.a.createElement(i.a,{key:a,className:"margin-horiz--sm",to:a},e))),l&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:n.permalink,"aria-label":"Read more about "+N},r.a.createElement("strong",null,"Read More")))))}}}]);