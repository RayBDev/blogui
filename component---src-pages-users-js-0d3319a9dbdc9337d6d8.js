(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{153:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(162),c=t(159),s=function(){return r.a.createElement("section",{id:"post-search",className:"py-4 mb-4 bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 ml-auto"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Users..."}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-warning"},"Search")))))))},i=function(){return r.a.createElement("section",{id:"post-table"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,"Latest Users")),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"1"),r.a.createElement("td",null,"John Doe"),r.a.createElement("td",null,"jdoe@gmail.com"),r.a.createElement("td",null,r.a.createElement("a",{href:"/details/",className:"btn btn-secondary"},r.a.createElement("i",{className:"fas fa-angle-double-right"})," Details"))),r.a.createElement("tr",null,r.a.createElement("td",null,"2"),r.a.createElement("td",null,"Sally Johnson"),r.a.createElement("td",null,"sjohnson@gmail.com"),r.a.createElement("td",null,r.a.createElement("a",{href:"/details/",className:"btn btn-secondary"},r.a.createElement("i",{className:"fas fa-angle-double-right"})," Details"))),r.a.createElement("tr",null,r.a.createElement("td",null,"3"),r.a.createElement("td",null,"Mary Salinger"),r.a.createElement("td",null,"marysal@yahoo.com"),r.a.createElement("td",null,r.a.createElement("a",{href:"/details/",className:"btn btn-secondary"},r.a.createElement("i",{className:"fas fa-angle-double-right"})," Details"))))))))))};a.default=function(){return r.a.createElement(l.a,{icon:"users",title:"Users",color:"warning"},r.a.createElement(c.a,{title:"Users",keywords:["blogui","users","react"]}),r.a.createElement("main",null,r.a.createElement(s,null),r.a.createElement(i,null)))}},154:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),l=t(4),c=t.n(l),s=t(33),i=t.n(s);t.d(a,"a",function(){return i.a});t(155);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},155:function(e,a,t){var n;e.exports=(n=t(156))&&n.default||n},156:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),c=t.n(l),s=t(55),i=t(2),o=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o},157:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){var a,t=e.icon,n=e.title,l=e.color;a=void 0===t?null:r.a.createElement("i",{className:"fas fa-"+t});var c="py-2 bg-"+l+" text-white";return r.a.createElement("header",{id:"main-header",className:c},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h1",{className:"my-1"},a," ",n)))))}},158:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(){return r.a.createElement("footer",{id:"main-footer",className:"bg-dark text-white mt-5 p-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",{className:"lead text-center"},"Copyright © ",(new Date).getFullYear()," BlogUI")))))}},159:function(e,a,t){"use strict";var n=t(160),r=t(0),l=t.n(r),c=t(4),s=t.n(c),i=t(166),o=t.n(i);function m(e){var a=e.description,t=e.lang,r=e.meta,c=e.keywords,s=e.title,i=n.data.site,m=a||i.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)},l.a.createElement("script",{defer:!0,src:"https://use.fontawesome.com/releases/v5.8.1/js/all.js",integrity:"sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ",crossorigin:"anonymous"}))}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},a.a=m},160:function(e){e.exports={data:{site:{siteMetadata:{title:"BlogUI",description:"Blog Admin Control Panel template created in Gatsby using Bootstrap.",author:"Ray Bernard"}}}}},161:function(e){e.exports={data:{site:{siteMetadata:{title:"BlogUI"}}}}},162:function(e,a,t){"use strict";var n=t(161),r=t(0),l=t.n(r),c=t(4),s=t.n(c),i=t(154),o=t(7),m=t.n(o),d=t(164),u=t.n(d),E=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={show:!1},a.dropDownHandler=function(){a.setState({show:!a.state.show})},a}return m()(a,e),a.prototype.render=function(){return l.a.createElement(u.a,{expand:"md",bg:"dark",variant:"dark",className:"p-1"},l.a.createElement("div",{className:"container"},l.a.createElement(u.a.Brand,{href:"/"},this.props.siteTitle),l.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item px-2"},l.a.createElement(i.a,{to:"/",activeClassName:"active",className:"nav-link"},"Dashboard")),l.a.createElement("li",{className:"nav-item px-2"},l.a.createElement(i.a,{to:"/posts/",activeClassName:"active",className:"nav-link"},"Posts")),l.a.createElement("li",{className:"nav-item px-2"},l.a.createElement(i.a,{to:"/categories/",activeClassName:"active",className:"nav-link"},"Categories")),l.a.createElement("li",{className:"nav-item px-2"},l.a.createElement(i.a,{to:"/users/",activeClassName:"active",className:"nav-link"},"Users"))),l.a.createElement("ul",{className:"navbar-nav ml-auto "},l.a.createElement("div",{className:"dropdown nav-item"},l.a.createElement("a",{href:"#",class:"dropdown-toggle nav-link",onClick:this.dropDownHandler},l.a.createElement("i",{className:"fas fa-user"})," Welcome Ray"),l.a.createElement("div",{className:this.state.show?"dropdown-menu show":"dropdown-menu"},l.a.createElement(i.a,{to:"/profile/",className:"dropdown-item"},l.a.createElement("i",{className:"fas fa-user-circle"})," Profile"),l.a.createElement(i.a,{to:"/settings/",className:"dropdown-item"},l.a.createElement("i",{className:"fas fa-cog"})," Settings")))),l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.a,{to:"/login/",className:"nav-link"},l.a.createElement("i",{className:"fas fa-user-times"})," Logout"))))))},a}(r.Component),p=t(157),v=t(158),f=function(e){var a=e.children,t=e.icon,r=e.title,c=e.color;return l.a.createElement(i.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),l.a.createElement(p.a,{icon:t,title:r,color:c}),a,l.a.createElement(v.a,null))},data:n})};f.propTypes={children:s.a.node.isRequired};a.a=f}}]);
//# sourceMappingURL=component---src-pages-users-js-0d3319a9dbdc9337d6d8.js.map