(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(162),s=t(159),c=t(154),i=function(){return r.a.createElement("section",{id:"details-actions",className:"py-4 mb-4 bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement(c.a,{to:"/",className:"btn btn-light btn-block"},r.a.createElement("i",{className:"fas fa-arrow-left"})," Back To Dashboard")),r.a.createElement("div",{className:"col-md-3"},r.a.createElement(c.a,{to:"/",className:"btn btn-success btn-block"},r.a.createElement("i",{className:"fas fa-check"})," Save Changes")),r.a.createElement("div",{className:"col-md-3"},r.a.createElement(c.a,{to:"/",className:"btn btn-danger btn-block"},r.a.createElement("i",{className:"fas fa-trash"})," Delete Post")))))},o=function(){return r.a.createElement("section",{id:"details"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,"Edit Post")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",className:"form-control",value:"Post One"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("select",{className:"form-control"},r.a.createElement("option",{value:"",selected:!0},"Web Development"),r.a.createElement("option",{value:""},"Tech Gadgets"),r.a.createElement("option",{value:""},"Business"),r.a.createElement("option",{value:""},"Health & Wellness"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"image"},"Upload Image"),r.a.createElement("div",{className:"custom-file"},r.a.createElement("input",{type:"file",className:"custom-file-input",id:"image"}),r.a.createElement("label",{htmlFor:"image",className:"custom-file-label"},"Choose File")),r.a.createElement("small",{className:"form-text text-muted"},"Max Size 3MB")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"body"},"Body"),r.a.createElement("textarea",{className:"form-control"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt obcaecati laudantium quisquam cumque distinctio repellat qui aliquam vitae ipsa harum soluta impedit eum aspernatur odit ratione, quae possimus ea. Dolore tempora, saepe distinctio accusamus earum facilis nihil adipisci animi debitis quo labore repellat, eos ipsa sint commodi voluptatem magni vitae.")))))))))};a.default=function(){return r.a.createElement(l.a,{title:"Post One",color:"primary"},r.a.createElement(s.a,{title:"Post One",keywords:["blogui","post one details","react"]}),r.a.createElement("main",null,r.a.createElement(i,null),r.a.createElement(o,null)))}},154:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),l=t(4),s=t.n(l),c=t(33),i=t.n(c);t.d(a,"a",function(){return i.a});t(155);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},155:function(e,a,t){var n;e.exports=(n=t(156))&&n.default||n},156:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),s=t.n(l),c=t(55),i=t(2),o=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=o},157:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){var a,t=e.icon,n=e.title,l=e.color;a=void 0===t?null:r.a.createElement("i",{className:"fas fa-"+t});var s="py-2 bg-"+l+" text-white";return r.a.createElement("header",{id:"main-header",className:s},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h1",{className:"my-1"},a," ",n)))))}},158:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(){return r.a.createElement("footer",{id:"main-footer",className:"bg-dark text-white mt-5 p-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",{className:"lead text-center"},"Copyright © ",(new Date).getFullYear()," BlogUI")))))}},159:function(e,a,t){"use strict";var n=t(160),r=t(0),l=t.n(r),s=t(4),c=t.n(s),i=t(166),o=t.n(i);function m(e){var a=e.description,t=e.lang,r=e.meta,s=e.keywords,c=e.title,i=n.data.site,m=a||i.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)},l.a.createElement("script",{defer:!0,src:"https://use.fontawesome.com/releases/v5.8.1/js/all.js",integrity:"sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ",crossorigin:"anonymous"}))}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},a.a=m},160:function(e){e.exports={data:{site:{siteMetadata:{title:"BlogUI",description:"Blog Admin Control Panel template created in Gatsby using Bootstrap.",author:"Ray Bernard"}}}}},161:function(e){e.exports={data:{site:{siteMetadata:{title:"BlogUI"}}}}},162:function(e,a,t){"use strict";var n=t(161),r=t(0),l=t.n(r),s=t(4),c=t.n(s),i=t(154),o=t(7),m=t.n(o),d=t(164),u=t.n(d),p=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={show:!1},a.dropDownHandler=function(){a.setState({show:!a.state.show})},a}return m()(a,e),a.prototype.render=function(){return l.a.createElement(u.a,{expand:"md",bg:"dark",variant:"dark",className:"p-1"},l.a.createElement("div",{className:"container"},l.a.createElement(u.a.Brand,{href:"/"},this.props.siteTitle),l.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item px-2"},l.a.createElement(i.a,{to:"/",activeClassName:"active",className:"nav-link"},"Dashboard")),l.a.createElement("li",{className:"nav-item px-2"},l.a.createElement(i.a,{to:"/posts/",activeClassName:"active",className:"nav-link"},"Posts")),l.a.createElement("li",{className:"nav-item px-2"},l.a.createElement(i.a,{to:"/categories/",activeClassName:"active",className:"nav-link"},"Categories")),l.a.createElement("li",{className:"nav-item px-2"},l.a.createElement(i.a,{to:"/users/",activeClassName:"active",className:"nav-link"},"Users"))),l.a.createElement("ul",{className:"navbar-nav ml-auto "},l.a.createElement("div",{className:"dropdown nav-item"},l.a.createElement("a",{href:"#",class:"dropdown-toggle nav-link",onClick:this.dropDownHandler},l.a.createElement("i",{className:"fas fa-user"})," Welcome Ray"),l.a.createElement("div",{className:this.state.show?"dropdown-menu show":"dropdown-menu"},l.a.createElement(i.a,{to:"/profile/",className:"dropdown-item"},l.a.createElement("i",{className:"fas fa-user-circle"})," Profile"),l.a.createElement(i.a,{to:"/settings/",className:"dropdown-item"},l.a.createElement("i",{className:"fas fa-cog"})," Settings")))),l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.a,{to:"/login/",className:"nav-link"},l.a.createElement("i",{className:"fas fa-user-times"})," Logout"))))))},a}(r.Component),E=t(157),v=t(158),f=function(e){var a=e.children,t=e.icon,r=e.title,s=e.color;return l.a.createElement(i.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),l.a.createElement(E.a,{icon:t,title:r,color:s}),a,l.a.createElement(v.a,null))},data:n})};f.propTypes={children:c.a.node.isRequired};a.a=f}}]);
//# sourceMappingURL=component---src-pages-details-js-df50cfa5e6d08fa3c474.js.map