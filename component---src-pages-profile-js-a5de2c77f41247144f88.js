(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{151:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(162),i=a(159),l=function(){return n.a.createElement("section",{id:"profile-actions",className:"py-4 mb-4 bg-light"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-3"},n.a.createElement("a",{href:"/",className:"btn btn-light btn-block"},n.a.createElement("i",{className:"fas fa-arrow-left"})," Back To Dashboard")),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("a",{href:"/",className:"btn btn-success btn-block"},n.a.createElement("i",{className:"fas fa-lock"})," Change Password")),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("a",{href:"/",className:"btn btn-danger btn-block"},n.a.createElement("i",{className:"fas fa-trash"})," Delete Account")))))},o=a(238),c=a(154),d=a(239),u=a.n(d),m=function(){return n.a.createElement(c.b,{query:"3765421307",render:function(e){return n.a.createElement("section",{id:"posts"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-9"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h4",null,"Edit Profile")),n.a.createElement("div",{className:"card-body"},n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"name"},"Name"),n.a.createElement("input",{type:"text",className:"form-control",value:"Ray Bernard"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",className:"form-control",value:"ray@test.com"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"name"},"Bio"),n.a.createElement("textarea",{className:"form-control"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, odit debitis? Magnam corrupti tempore illo nihil nam, nobis nesciunt minima! Aspernatur eveniet eius et, quia at sit officiis vitae commodi dolorum sint neque deleniti architecto. Beatae quidem quasi voluptate repellendus incidunt consectetur labore, suscipit pariatur dolorem cum totam ratione voluptatum.")))))),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("h3",null,"Your Avatar"),n.a.createElement("div",{className:"mb-3"},n.a.createElement(u.a,{fluid:e.placeholderImage.childImageSharp.fluid})),n.a.createElement("button",{className:"btn btn-primary btn-block"},"Edit Image"),n.a.createElement("button",{className:"btn btn-danger btn-block"},"Delete Image")))))},data:o})};t.default=function(){return n.a.createElement(s.a,{icon:"user",title:"Edit Profile",color:"primary"},n.a.createElement(i.a,{title:"Home",keywords:["blogui","profile","react"]}),n.a.createElement("main",null,n.a.createElement(l,null),n.a.createElement(m,null)))}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),n=a.n(r),s=a(4),i=a.n(s),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(155);var c=n.a.createContext({}),d=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},155:function(e,t,a){var r;e.exports=(r=a(156))&&r.default||r},156:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),s=a(4),i=a.n(s),l=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},157:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t,a=e.icon,r=e.title,s=e.color;t=void 0===a?null:n.a.createElement("i",{className:"fas fa-"+a});var i="py-2 bg-"+s+" text-white";return n.a.createElement("header",{id:"main-header",className:i},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("h1",{className:"my-1"},t," ",r)))))}},158:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(){return n.a.createElement("footer",{id:"main-footer",className:"bg-dark text-white mt-5 p-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("p",{className:"lead text-center"},"Copyright © ",(new Date).getFullYear()," BlogUI")))))}},159:function(e,t,a){"use strict";var r=a(160),n=a(0),s=a.n(n),i=a(4),l=a.n(i),o=a(166),c=a.n(o);function d(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,l=e.title,o=r.data.site,d=t||o.siteMetadata.description;return s.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)},s.a.createElement("script",{defer:!0,src:"https://use.fontawesome.com/releases/v5.8.1/js/all.js",integrity:"sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ",crossorigin:"anonymous"}))}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},160:function(e){e.exports={data:{site:{siteMetadata:{title:"BlogUI",description:"Blog Admin Control Panel template created in Gatsby using Bootstrap.",author:"Ray Bernard"}}}}},161:function(e){e.exports={data:{site:{siteMetadata:{title:"BlogUI"}}}}},162:function(e,t,a){"use strict";var r=a(161),n=a(0),s=a.n(n),i=a(4),l=a.n(i),o=a(154),c=a(7),d=a.n(c),u=a(164),m=a.n(u),f=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={show:!1},t.dropDownHandler=function(){t.setState({show:!t.state.show})},t}return d()(t,e),t.prototype.render=function(){return s.a.createElement(m.a,{expand:"md",bg:"dark",variant:"dark",className:"p-1"},s.a.createElement("div",{className:"container"},s.a.createElement(m.a.Brand,{href:"/"},this.props.siteTitle),s.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),s.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},s.a.createElement("ul",{className:"navbar-nav"},s.a.createElement("li",{className:"nav-item px-2"},s.a.createElement(o.a,{to:"/",activeClassName:"active",className:"nav-link"},"Dashboard")),s.a.createElement("li",{className:"nav-item px-2"},s.a.createElement(o.a,{to:"/posts/",activeClassName:"active",className:"nav-link"},"Posts")),s.a.createElement("li",{className:"nav-item px-2"},s.a.createElement(o.a,{to:"/categories/",activeClassName:"active",className:"nav-link"},"Categories")),s.a.createElement("li",{className:"nav-item px-2"},s.a.createElement(o.a,{to:"/users/",activeClassName:"active",className:"nav-link"},"Users"))),s.a.createElement("ul",{className:"navbar-nav ml-auto "},s.a.createElement("div",{className:"dropdown nav-item"},s.a.createElement("a",{href:"#",class:"dropdown-toggle nav-link",onClick:this.dropDownHandler},s.a.createElement("i",{className:"fas fa-user"})," Welcome Ray"),s.a.createElement("div",{className:this.state.show?"dropdown-menu show":"dropdown-menu"},s.a.createElement(o.a,{to:"/profile/",className:"dropdown-item"},s.a.createElement("i",{className:"fas fa-user-circle"})," Profile"),s.a.createElement(o.a,{to:"/settings/",className:"dropdown-item"},s.a.createElement("i",{className:"fas fa-cog"})," Settings")))),s.a.createElement("ul",{className:"navbar-nav"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(o.a,{to:"/login/",className:"nav-link"},s.a.createElement("i",{className:"fas fa-user-times"})," Logout"))))))},t}(n.Component),p=a(157),g=a(158),h=function(e){var t=e.children,a=e.icon,n=e.title,i=e.color;return s.a.createElement(o.b,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),s.a.createElement(p.a,{icon:a,title:n,color:i}),t,s.a.createElement(g.a,null))},data:r})};h.propTypes={children:l.a.node.isRequired};t.a=h},238:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAACWUlEQVQ4y52UT2sTQRjGJ2nFPwjePPglxG8gIvgFvPgJ9OShokexLRa8eREv4kEEsQgeFFGMqM0f0mY3bQkitt3N5t8mtdoarRQExeeZPNMMMScXfrw7OzvPvM/MO2MKQfwQPAZPwFPwDLwAr0AOvAFvQR6UQQhWQA18BGsgAkm+ErdNvhLtgG+K2+Ir+AK2wB74A36D76ALNkFPdEVaCKIUgnET6i1ER1vtDuJnObgCroKXgJPzn84oHGMGA6OUcYgdsAUuGe+p1HpZfLsDtj3R1PGPoDratI342gmhPQkO8L1UTQ6jbxVtZt8ejIk6A8tjMhzYjfqIDyjwfnE9UwwTUwjqVhxxghvFdXaCToxxRNB2OMFHFMgVahCJLXyK1eQg3he5YUPBocaoZYpyk36AWdnNMjty/sIZZRnPszI4uQRlO07HCTYQ98BFDZ60mYV1s7C0kdW32/hvF7E53JDI7oHx/Y+z/K78SZYHa4j1PMoC9y278RxrvIZXT1EPMUZWJ5RRBrjszoEdVzaesy7H7Fv2ZuIPTVm6rnWcWFhaz0jwnhy0RpKg4JpxQhLtqA7rPGZ4vzxG8L4EE/+EyNUH3zKFmjqfv9BeLlUbh6xIyF3et3wW9HWuU1UFx26y4F2GLVX+rm6RW9iEk8ougwy4GWb+ec4EtR7X8zSt22SC6KcuB2YYGqn3dRVNYSOOuyOHNk4F6zDKsmRwaixe/ylwE2xAg7VbstcXj1l5pXXE/OdTWm4c051Z4Sx1cBcWr4E5MIs1mykK9E1j0mlGjxtiRhlO6VIu/wWIvdpvk4L6EgAAAABJRU5ErkJggg==",aspectRatio:1.1208333333333333,src:"/blogui/static/5f92255b37e341a0638e2243bd205832/3fa08/avatar.png",srcSet:"/blogui/static/5f92255b37e341a0638e2243bd205832/6dea1/avatar.png 125w,\n/blogui/static/5f92255b37e341a0638e2243bd205832/69781/avatar.png 250w,\n/blogui/static/5f92255b37e341a0638e2243bd205832/3fa08/avatar.png 500w,\n/blogui/static/5f92255b37e341a0638e2243bd205832/5a67f/avatar.png 750w,\n/blogui/static/5f92255b37e341a0638e2243bd205832/16cbf/avatar.png 807w",sizes:"(max-width: 500px) 100vw, 500px"}}}}}},239:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,s=r(a(7)),i=r(a(37)),l=r(a(75)),o=r(a(74)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return m[a]||!1},p=new WeakMap;var g=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+n+t+i+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,s=e.style,i=e.onLoad,d=e.onError,u=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:n},u,{onLoad:i,onError:d,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,s=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var o=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:n,fadeIn:s,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)((0,i.default)(a))),a.handleRef=a.handleRef.bind((0,i.default)((0,i.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,m[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,s=void 0===n?{}:n,i=e.imgStyle,l=void 0===i?{}:i,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,g=e.fixed,E=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,w=e.itemProp,N=this.state.imgLoaded||!1===this.state.fadeIn,S=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,o.default)({opacity:N?1:0,transition:S?"opacity "+v+"ms":"none"},l),A="boolean"==typeof E?"lightgray":E,I={transitionDelay:v+"ms"},L=(0,o.default)({opacity:this.state.imgLoaded?0:1},S&&I,l,m),k={title:t,alt:this.state.isVisible?"":a,style:L,className:f};if(p){var x=p;return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),A&&c.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:A,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},S&&I)}),x.base64&&c.default.createElement(b,(0,o.default)({src:x.base64},k)),x.tracedSVG&&c.default.createElement(b,(0,o.default)({src:x.tracedSVG},k)),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:a,title:t},x))}}))}if(g){var C=g,O=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},s);return"inherit"===s.display&&delete O.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:O,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},A&&c.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:A,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},S&&I)}),C.base64&&c.default.createElement(b,(0,o.default)({src:C.base64},k)),C.tracedSVG&&c.default.createElement(b,(0,o.default)({src:C.tracedSVG},k)),this.state.isVisible&&c.default.createElement("picture",null,C.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),c.default.createElement(b,{alt:a,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:a,title:t},C))}}))}return null},t}(c.default.Component);E.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),y=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});E.propTypes={resolutions:v,sizes:y,fixed:v,fluid:y,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var w=E;t.default=w}}]);
//# sourceMappingURL=component---src-pages-profile-js-a5de2c77f41247144f88.js.map