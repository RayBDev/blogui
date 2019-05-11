(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{152:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(162),l=t(158),s=function(){return r.a.createElement("section",{id:"settings-actions",className:"py-4 mb-4 bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("a",{href:"/",className:"btn btn-light btn-block"},r.a.createElement("i",{className:"fas fa-arrow-left"})," Back To Dashboard")),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("a",{href:"/",className:"btn btn-success btn-block"},r.a.createElement("i",{className:"fas fa-check"})," Save Changes")))))},i=function(){return r.a.createElement("section",{id:"settings"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,"Edit Settings")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("legend",null,"Allow User Registration"),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"radio",className:"form-check-input",value:"Yes",checked:!0})," ","Yes")),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"radio",className:"form-check-input",value:"No"})," ","No"))),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("legend",null,"Homepage Format"),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"radio",className:"form-check-input",value:"posts",checked:!0})," ","Blog Page")),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"radio",className:"form-check-input",value:"page"})," ","Home Page"))))))))))};a.default=function(){return r.a.createElement(c.a,{icon:"cog",title:"Settings",color:"primary"},r.a.createElement(l.a,{title:"Settings",keywords:["blogui","settings","react"]}),r.a.createElement("main",null,r.a.createElement(s,null),r.a.createElement(i,null)))}},154:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),c=t(4),l=t.n(c),s=t(33),i=t.n(s);t.d(a,"a",function(){return i.a});t(155);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},155:function(e,a,t){var n;e.exports=(n=t(161))&&n.default||n},156:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){var a,t=e.icon,n=e.title,c=e.color;a=void 0===t?null:r.a.createElement("i",{className:"fas fa-"+t});var l="py-2 bg-"+c+" text-white";return r.a.createElement("header",{id:"main-header",className:l},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h1",{className:"my-1"},a," ",n)))))}},157:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(){return r.a.createElement("footer",{id:"main-footer",className:"bg-dark text-white mt-5 p-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",{className:"lead text-center"},"Copyright © ",(new Date).getFullYear()," BlogUI")))))}},158:function(e,a,t){"use strict";var n=t(159),r=t(0),c=t.n(r),l=t(4),s=t.n(l),i=t(166),o=t.n(i);function m(e){var a=e.description,t=e.lang,r=e.meta,l=e.keywords,s=e.title,i=n.data.site,m=a||i.siteMetadata.description;return c.a.createElement(o.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)},c.a.createElement("script",{defer:!0,src:"https://use.fontawesome.com/releases/v5.8.1/js/all.js",integrity:"sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ",crossorigin:"anonymous"}))}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},a.a=m},159:function(e){e.exports={data:{site:{siteMetadata:{title:"BlogUI",description:"Blog Admin Control Panel template created in Gatsby using Bootstrap.",author:"Ray Bernard"}}}}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"BlogUI"}}}}},161:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),s=t(55),i=t(2),o=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=o},162:function(e,a,t){"use strict";var n=t(160),r=t(0),c=t.n(r),l=t(4),s=t.n(l),i=t(154),o=t(7),m=t.n(o),d=t(164),u=t.n(d),p=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={show:!1},a.dropDownHandler=function(){a.setState({show:!a.state.show})},a}return m()(a,e),a.prototype.render=function(){return c.a.createElement(u.a,{expand:"md",bg:"dark",variant:"dark",className:"p-1"},c.a.createElement("div",{className:"container"},c.a.createElement(u.a.Brand,{href:"/"},this.props.siteTitle),c.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item px-2"},c.a.createElement(i.a,{to:"/",activeClassName:"active",className:"nav-link"},"Dashboard")),c.a.createElement("li",{className:"nav-item px-2"},c.a.createElement(i.a,{to:"/posts/",activeClassName:"active",className:"nav-link"},"Posts")),c.a.createElement("li",{className:"nav-item px-2"},c.a.createElement(i.a,{to:"/categories/",activeClassName:"active",className:"nav-link"},"Categories")),c.a.createElement("li",{className:"nav-item px-2"},c.a.createElement(i.a,{to:"/users/",activeClassName:"active",className:"nav-link"},"Users"))),c.a.createElement("ul",{className:"navbar-nav ml-auto "},c.a.createElement("div",{className:"dropdown nav-item"},c.a.createElement("a",{href:"#",class:"dropdown-toggle nav-link",onClick:this.dropDownHandler},c.a.createElement("i",{className:"fas fa-user"})," Welcome Ray"),c.a.createElement("div",{className:this.state.show?"dropdown-menu show":"dropdown-menu"},c.a.createElement(i.a,{to:"/profile/",className:"dropdown-item"},c.a.createElement("i",{className:"fas fa-user-circle"})," Profile"),c.a.createElement(i.a,{to:"/settings/",className:"dropdown-item"},c.a.createElement("i",{className:"fas fa-cog"})," Settings")))),c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.a,{to:"/login/",className:"nav-link"},c.a.createElement("i",{className:"fas fa-user-times"})," Logout"))))))},a}(r.Component),E=t(156),f=t(157),v=function(e){var a=e.children,t=e.icon,r=e.title,l=e.color;return c.a.createElement(i.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),c.a.createElement(E.a,{icon:t,title:r,color:l}),a,c.a.createElement(f.a,null))},data:n})};v.propTypes={children:s.a.node.isRequired};a.a=v}}]);
//# sourceMappingURL=component---src-pages-settings-js-1be33da3cea3afc69d15.js.map