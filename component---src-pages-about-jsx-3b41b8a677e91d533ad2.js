"use strict";(self.webpackChunkgatsby_starter_hoodie=self.webpackChunkgatsby_starter_hoodie||[]).push([[354,256],{6931:function(e,t,o){var n=o(7294),l=o(8651),a=o(4854),r=o(729),i=o(9349);const c=l.default.div.withConfig({displayName:"Tab__TabWrapper",componentId:"sc-1ebif1p-0"})(["display:flex;justify-content:center;gap:15px;border-bottom:1px solid ",";margin-top:35px;margin-bottom:48px;& a{text-decoration:none;}"],(e=>e.theme.colors.divider)),s=l.default.button.withConfig({displayName:"Tab__TabButton",componentId:"sc-1ebif1p-1"})(["display:flex;align-items:center;padding:0 10px;height:43px;background-color:transparent;border:none;border-bottom:2px solid;border-bottom-color:",";font-size:14px;color:",";font-weight:",";letter-spacing:1px;cursor:pointer;transition:all 0.2s;&:hover{color:",";border-bottom-color:",";}& svg{margin-right:10px;height:20px;}"],(e=>e.active?e.theme.colors.text:"transparent"),(e=>e.active?e.theme.colors.text:e.theme.colors.tertiaryText),(e=>e.active?"bold":"normal"),(e=>e.theme.colors.text),(e=>e.active?e.theme.colors.text:e.theme.colors.divider)),m=l.default.span.withConfig({displayName:"Tab__Badge",componentId:"sc-1ebif1p-2"})(["display:inline-block;margin-left:7px;padding:3px 6px;border-radius:50px;background-color:",";color:",";font-weight:normal;font-size:13px;letter-spacing:0.3px;transition:all 0.2s;"],(e=>e.theme.colors.tagBackground),(e=>e.theme.colors.tagText));t.Z=e=>{let{postsCount:t,activeTab:o}=e;return i.useAbout?n.createElement(c,null,n.createElement(a.Link,{to:"/"},n.createElement(s,{active:"posts"==o},"POSTS ",n.createElement(m,null,t))),n.createElement(a.Link,{to:"/about"},n.createElement(s,{active:"about"==o},"ABOUT"))):n.createElement(r.Z,null)}},1093:function(e,t,o){var n=o(8651);t.Z=n.default.div.withConfig({displayName:"VerticalSpace",componentId:"sc-fbwjqc-0"})(["height:","px;"],(e=>e.size))},7291:function(e,t,o){o.r(t);var n=o(7294),l=o(8651),a=o(5038),r=o(5609),i=o(9349);const c=l.default.div.withConfig({displayName:"sc-404__NotFound",componentId:"sc-6px2gd-0"})(["height:800px;display:flex;flex-direction:column;justify-content:center;align-items:center;color:",";& > h2{margin-bottom:16px;font-weight:bold;font-size:48px;}& > h3{font-weight:lighter;font-size:30.4px;}@media (max-width:768px){height:300px;}"],(e=>e.theme.colors.tertiaryText));t.default=()=>n.createElement(a.Z,null,n.createElement(r.Z,{title:i.title,description:i.description,url:i.siteUrl}),n.createElement(c,null,n.createElement("h2",null,"404 ERROR"),n.createElement("h3",null,"Page Not Found X(")))},2700:function(e,t,o){o.r(t);var n=o(7294),l=o(5038),a=o(5609),r=o(1309),i=o(1093),c=o(6296),s=o(1144),m=o(6931),p=o(7291),d=o(8651),u=o(9349),h=o(729);const f=d.default.h1.withConfig({displayName:"about__ArticleTitle",componentId:"sc-17crp4s-0"})(["margin-bottom:30px;line-height:1.2;font-size:32px;font-weight:700;color:",";"],(e=>e.theme.colors.text)),g=d.default.div.withConfig({displayName:"about__Wrapper",componentId:"sc-17crp4s-1"})(["@media (max-width:768px){padding:0 15px;}"]);t.default=e=>{let{data:t}=e;const o=t.markdownRemark,d=t.allMarkdownRemark.totalCount;return u.useAbout?n.createElement(l.Z,null,n.createElement(a.Z,{title:u.title,description:u.description,url:u.siteUrl}),n.createElement(i.Z,{size:48}),n.createElement(r.Z,null),n.createElement(m.Z,{postsCount:d,activeTab:"about"}),n.createElement(c.Z,null,n.createElement(g,null,n.createElement(f,null,o.frontmatter.title)),n.createElement(c.Z.Body,{html:o.html,hideToc:!0}),n.createElement(g,null,n.createElement(h.Z,null),n.createElement(s.Z,null)))):n.createElement(p.default,null)}}}]);
//# sourceMappingURL=component---src-pages-about-jsx-3b41b8a677e91d533ad2.js.map