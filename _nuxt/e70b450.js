(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{201:function(t,e,n){"use strict";var r=n(0),o=n(283),l=n.n(o);r.a.use(l.a)},202:function(t,e,n){"use strict";var r=n(82),o=n.n(r),l=n(276),c=n.n(l);e.a=function(t){t.ssrContext;var e=null;(e=c()(o.a.defaults.adapter,{cacheBrowserEnable:!0}))&&o.a.create({adapter:e})}},203:function(t,e,n){"use strict";var r=n(0),o=n(284);r.a.use(o.a,{config:{id:"G-0KLT59ZKBX"}})},257:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("dc093880",content,!0,{sourceMap:!1})},287:function(t,e,n){"use strict";var r={name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"搜尋營隊",to:"/"},{icon:"mdi-chart-bubble",title:"關於",to:"/about"},{icon:"mdi-eye",title:"營隊資訊",to:"/detail/list"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"營隊搜尋工具箱"}}},o=n(94),l=n(129),c=n.n(l),d=n(427),v=n(431),f=n(428),m=n(432),_=n(429),h=n(190),w=n(191),x=n(122),V=n(192),y=n(87),L=n(430),k=n(433),N=n(281),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}})],1),t._v(" "),n("v-main",[n("v-container",[n("Nuxt")],1)],1),t._v(" "),n("v-footer",{attrs:{absolute:!t.fixed,app:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear())+" "),n("a",{attrs:{href:"https://hsuan.app",target:"_blank"}},[t._v("Hsuan")])])])],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a,VAppBar:v.a,VAppBarNavIcon:f.a,VContainer:m.a,VFooter:_.a,VIcon:h.a,VList:w.a,VListItem:x.a,VListItemAction:V.a,VListItemContent:y.a,VListItemTitle:y.b,VMain:L.a,VNavigationDrawer:k.a,VToolbarTitle:N.a})},297:function(t,e,n){n(298),t.exports=n(299)},327:function(t,e,n){"use strict";n(257)},328:function(t,e,n){var r=n(20)(!1);r.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=r},83:function(t,e,n){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(327),n(94)),l=n(129),c=n.n(l),d=n(427),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[297,11,4,12]]]);