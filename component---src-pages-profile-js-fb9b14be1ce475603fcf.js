(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{152:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(165),l=t(160),s=function(){return r.a.createElement("section",{id:"profile-actions",className:"py-4 mb-4 bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("a",{href:"/",className:"btn btn-light btn-block"},r.a.createElement("i",{className:"fas fa-arrow-left"})," Back To Dashboard")),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("a",{href:"/",className:"btn btn-success btn-block"},r.a.createElement("i",{className:"fas fa-lock"})," Change Password")),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("a",{href:"/",className:"btn btn-danger btn-block"},r.a.createElement("i",{className:"fas fa-trash"})," Delete Account")))))},i=t(262),m=t(173),o=t.n(m),d=t(155),u=t(263),E=t.n(u),p=function(){return r.a.createElement(d.b,{query:"2050190582",render:function(e){return r.a.createElement("section",{id:"posts"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,"Edit Profile")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",value:"Ray Bernard"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",className:"form-control",value:"ray@test.com"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Bio"),r.a.createElement(o.a,{data:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quibusdam ratione quisquam quidem culpa animi voluptatibus veniam incidunt eaque, eos impedit! Praesentium sed eaque aperiam corporis recusandae iusto pariatur molestiae? Molestias, tenetur? Omnis, rerum! Laborum illo exercitationem, modi, debitis fuga non eligendi porro cumque at dignissimos, dolorem aliquid vero natus!",className:"form-control"})))))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("h3",null,"Your Avatar"),r.a.createElement("div",{className:"mb-3"},r.a.createElement(E.a,{fluid:e.placeholderImage.childImageSharp.fluid})),r.a.createElement("button",{className:"btn btn-primary btn-block"},"Edit Image"),r.a.createElement("button",{className:"btn btn-danger btn-block"},"Delete Image")))))},data:i})};a.default=function(){return r.a.createElement(c.a,{icon:"user",title:"Edit Profile",color:"primary"},r.a.createElement(l.a,{title:"Home",keywords:["blogui","profile","react"]}),r.a.createElement("main",null,r.a.createElement(s,null),r.a.createElement(p,null)))}},155:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(0),r=t.n(n),c=t(4),l=t.n(c),s=t(33),i=t.n(s);t.d(a,"a",function(){return i.a});t(156);var m=r.a.createContext({}),o=function(e){return r.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},156:function(e,a,t){var n;e.exports=(n=t(163))&&n.default||n},158:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){var a,t=e.icon,n=e.title,c=e.color;a=void 0===t?null:r.a.createElement("i",{className:"fas fa-"+t});var l="py-2 bg-"+c+" text-white";return r.a.createElement("header",{id:"main-header",className:l},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h1",{className:"my-1"},a," ",n)))))}},159:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(){return r.a.createElement("footer",{id:"main-footer",className:"bg-dark text-white mt-5 p-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",{className:"lead text-center"},"Copyright © ",(new Date).getFullYear()," BlogUI")))))}},160:function(e,a,t){"use strict";var n=t(161),r=t(0),c=t.n(r),l=t(4),s=t.n(l),i=t(168),m=t.n(i);function o(e){var a=e.description,t=e.lang,r=e.meta,l=e.keywords,s=e.title,i=n.data.site,o=a||i.siteMetadata.description;return c.a.createElement(m.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)},c.a.createElement("script",{defer:!0,src:"https://use.fontawesome.com/releases/v5.8.1/js/all.js",integrity:"sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ",crossorigin:"anonymous"}))}o.defaultProps={lang:"en",meta:[],keywords:[],description:""},o.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},a.a=o},161:function(e){e.exports={data:{site:{siteMetadata:{title:"BlogUI",description:"Blog Admin Control Panel template created in Gatsby using Bootstrap.",author:"Ray Bernard"}}}}},162:function(e){e.exports={data:{site:{siteMetadata:{title:"BlogUI"}}}}},163:function(e,a,t){"use strict";t.r(a);t(35);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),s=t(55),i=t(2),m=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=m},165:function(e,a,t){"use strict";var n=t(162),r=t(0),c=t.n(r),l=t(4),s=t.n(l),i=t(155),m=t(166),o=t.n(m),d=t(169),u=t.n(d),E=function(e){var a=e.siteTitle;return c.a.createElement(o.a,{expand:"md",bg:"dark",variant:"dark",className:"p-1"},c.a.createElement("div",{className:"container"},c.a.createElement(o.a.Brand,{href:"/"},a),c.a.createElement(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(o.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item px-2"},c.a.createElement(i.a,{to:"/",activeClassName:"active",className:"nav-link"},"Dashboard")),c.a.createElement("li",{className:"nav-item px-2"},c.a.createElement(i.a,{to:"/posts/",activeClassName:"active",className:"nav-link"},"Posts")),c.a.createElement("li",{className:"nav-item px-2"},c.a.createElement(i.a,{to:"/categories/",activeClassName:"active",className:"nav-link"},"Categories")),c.a.createElement("li",{className:"nav-item px-2"},c.a.createElement(i.a,{to:"/users/",activeClassName:"active",className:"nav-link"},"Users"))),c.a.createElement("ul",{className:"navbar-nav ml-auto "},c.a.createElement(u.a,{title:"👤 Welcome Ray",id:"basic-nav-dropdown"},c.a.createElement(u.a.Item,{href:"/profile/"},c.a.createElement("i",{className:"fas fa-user-circle"})," Profile"),c.a.createElement(u.a.Item,{href:"/settings/"},c.a.createElement("i",{className:"fas fa-cog"})," Settings"))),c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.a,{to:"/login/",className:"nav-link"},c.a.createElement("i",{className:"fas fa-user-times"})," Logout"))))))},p=t(158),v=t(159),g=function(e){var a=e.children,t=e.icon,r=e.title,l=e.color;return c.a.createElement(i.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),c.a.createElement(p.a,{icon:t,title:r,color:l}),a,c.a.createElement(v.a,null))},data:n})};g.propTypes={children:s.a.node.isRequired};a.a=g},262:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAACWUlEQVQ4y52UT2sTQRjGJ2nFPwjePPglxG8gIvgFvPgJ9OShokexLRa8eREv4kEEsQgeFFGMqM0f0mY3bQkitt3N5t8mtdoarRQExeeZPNMMMScXfrw7OzvPvM/MO2MKQfwQPAZPwFPwDLwAr0AOvAFvQR6UQQhWQA18BGsgAkm+ErdNvhLtgG+K2+Ir+AK2wB74A36D76ALNkFPdEVaCKIUgnET6i1ER1vtDuJnObgCroKXgJPzn84oHGMGA6OUcYgdsAUuGe+p1HpZfLsDtj3R1PGPoDratI342gmhPQkO8L1UTQ6jbxVtZt8ejIk6A8tjMhzYjfqIDyjwfnE9UwwTUwjqVhxxghvFdXaCToxxRNB2OMFHFMgVahCJLXyK1eQg3he5YUPBocaoZYpyk36AWdnNMjty/sIZZRnPszI4uQRlO07HCTYQ98BFDZ60mYV1s7C0kdW32/hvF7E53JDI7oHx/Y+z/K78SZYHa4j1PMoC9y278RxrvIZXT1EPMUZWJ5RRBrjszoEdVzaesy7H7Fv2ZuIPTVm6rnWcWFhaz0jwnhy0RpKg4JpxQhLtqA7rPGZ4vzxG8L4EE/+EyNUH3zKFmjqfv9BeLlUbh6xIyF3et3wW9HWuU1UFx26y4F2GLVX+rm6RW9iEk8ougwy4GWb+ec4EtR7X8zSt22SC6KcuB2YYGqn3dRVNYSOOuyOHNk4F6zDKsmRwaixe/ylwE2xAg7VbstcXj1l5pXXE/OdTWm4c051Z4Sx1cBcWr4E5MIs1mykK9E1j0mlGjxtiRhlO6VIu/wWIvdpvk4L6EgAAAABJRU5ErkJggg==",aspectRatio:1.1208333333333333,src:"/static/5f92255b37e341a0638e2243bd205832/fdbb0/avatar.png",srcSet:"/static/5f92255b37e341a0638e2243bd205832/e22c9/avatar.png 75w,\n/static/5f92255b37e341a0638e2243bd205832/d3809/avatar.png 150w,\n/static/5f92255b37e341a0638e2243bd205832/fdbb0/avatar.png 300w,\n/static/5f92255b37e341a0638e2243bd205832/b5207/avatar.png 450w,\n/static/5f92255b37e341a0638e2243bd205832/59139/avatar.png 600w,\n/static/5f92255b37e341a0638e2243bd205832/16cbf/avatar.png 807w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-profile-js-fb9b14be1ce475603fcf.js.map