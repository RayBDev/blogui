(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{154:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(165),c=t(160),s=function(){return l.a.createElement("section",{id:"post-search",className:"py-4 mb-4 bg-light"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 ml-auto"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Users..."}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-warning"},"Search")))))))},i=function(){return l.a.createElement("section",{id:"post-table"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h4",null,"Latest Users")),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"John Doe"),l.a.createElement("td",null,"jdoe@gmail.com"),l.a.createElement("td",null,l.a.createElement("a",{href:"/details/",className:"btn btn-secondary"},l.a.createElement("i",{className:"fas fa-angle-double-right"})," Details"))),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Sally Johnson"),l.a.createElement("td",null,"sjohnson@gmail.com"),l.a.createElement("td",null,l.a.createElement("a",{href:"/details/",className:"btn btn-secondary"},l.a.createElement("i",{className:"fas fa-angle-double-right"})," Details"))),l.a.createElement("tr",null,l.a.createElement("td",null,"3"),l.a.createElement("td",null,"Mary Salinger"),l.a.createElement("td",null,"marysal@yahoo.com"),l.a.createElement("td",null,l.a.createElement("a",{href:"/details/",className:"btn btn-secondary"},l.a.createElement("i",{className:"fas fa-angle-double-right"})," Details"))))))))))};a.default=function(){return l.a.createElement(r.a,{icon:"users",title:"Users",color:"warning"},l.a.createElement(c.a,{title:"Users",keywords:["blogui","users","react"]}),l.a.createElement("main",null,l.a.createElement(s,null),l.a.createElement(i,null)))}},155:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(0),l=t.n(n),r=t(4),c=t.n(r),s=t(33),i=t.n(s);t.d(a,"a",function(){return i.a});t(156);var m=l.a.createContext({}),o=function(e){return l.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},156:function(e,a,t){var n;e.exports=(n=t(163))&&n.default||n},158:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a,t=e.icon,n=e.title,r=e.color;a=void 0===t?null:l.a.createElement("i",{className:"fas fa-"+t});var c="py-2 bg-"+r+" text-white";return l.a.createElement("header",{id:"main-header",className:c},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("h1",{className:"my-1"},a," ",n)))))}},159:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(){return l.a.createElement("footer",{id:"main-footer",className:"bg-dark text-white mt-5 p-5"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("p",{className:"lead text-center"},"Copyright © ",(new Date).getFullYear()," BlogUI")))))}},160:function(e,a,t){"use strict";var n=t(161),l=t(0),r=t.n(l),c=t(4),s=t.n(c),i=t(168),m=t.n(i);function o(e){var a=e.description,t=e.lang,l=e.meta,c=e.keywords,s=e.title,i=n.data.site,o=a||i.siteMetadata.description;return r.a.createElement(m.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(l)},r.a.createElement("script",{defer:!0,src:"https://use.fontawesome.com/releases/v5.8.1/js/all.js",integrity:"sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ",crossorigin:"anonymous"}))}o.defaultProps={lang:"en",meta:[],keywords:[],description:""},o.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},a.a=o},161:function(e){e.exports={data:{site:{siteMetadata:{title:"BlogUI",description:"Blog Admin Control Panel template created in Gatsby using Bootstrap.",author:"Ray Bernard"}}}}},162:function(e){e.exports={data:{site:{siteMetadata:{title:"BlogUI"}}}}},163:function(e,a,t){"use strict";t.r(a);t(35);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),s=t(55),i=t(2),m=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=m},165:function(e,a,t){"use strict";var n=t(162),l=t(0),r=t.n(l),c=t(4),s=t.n(c),i=t(155),m=t(166),o=t.n(m),d=t(169),u=t.n(d),E=function(e){var a=e.siteTitle;return r.a.createElement(o.a,{expand:"md",bg:"dark",variant:"dark",className:"p-1"},r.a.createElement("div",{className:"container"},r.a.createElement(o.a.Brand,{href:"/"},a),r.a.createElement(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(o.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item px-2"},r.a.createElement(i.a,{to:"/",activeClassName:"active",className:"nav-link"},"Dashboard")),r.a.createElement("li",{className:"nav-item px-2"},r.a.createElement(i.a,{to:"/posts/",activeClassName:"active",className:"nav-link"},"Posts")),r.a.createElement("li",{className:"nav-item px-2"},r.a.createElement(i.a,{to:"/categories/",activeClassName:"active",className:"nav-link"},"Categories")),r.a.createElement("li",{className:"nav-item px-2"},r.a.createElement(i.a,{to:"/users/",activeClassName:"active",className:"nav-link"},"Users"))),r.a.createElement("ul",{className:"navbar-nav ml-auto "},r.a.createElement(u.a,{title:"👤 Welcome Ray",id:"basic-nav-dropdown"},r.a.createElement(u.a.Item,{href:"/profile/"},r.a.createElement("i",{className:"fas fa-user-circle"})," Profile"),r.a.createElement(u.a.Item,{href:"/settings/"},r.a.createElement("i",{className:"fas fa-cog"})," Settings"))),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.a,{to:"/login/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-user-times"})," Logout"))))))},p=t(158),v=t(159),f=function(e){var a=e.children,t=e.icon,l=e.title,c=e.color;return r.a.createElement(i.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),r.a.createElement(p.a,{icon:t,title:l,color:c}),a,r.a.createElement(v.a,null))},data:n})};f.propTypes={children:s.a.node.isRequired};a.a=f}}]);
//# sourceMappingURL=component---src-pages-users-js-b798edc0db1fcc7beb13.js.map