(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{538:function(t,e,n){"use strict";n.r(e);n(28),n(11),n(5);var c=n(454),o={asyncData:function(t){var e,n=t.params.name,o=null!==(e=c.filter((function(t){return t.name===n}))[0])&&void 0!==e?e:{name:"查無資料",school:"查無資料",location:"查無資料",price:"查無資料",start:"查無資料",end:"查無資料",apply:"查無資料",website:"https://google.com/search?q="+n,comment:"查無資料",tags:[]};return{name:n,camp:o}},head:function(){return{title:this.name+" 營隊評價、營隊內容",meta:[{hid:"description",name:"description",content:"要價"+this.camp.price+"元的"+this.name+"營隊好嗎? 實際參與學生心得分享及家長評價 "+this.camp.comment},{hid:"og:title",name:"og:title",content:this.name+" 營隊評價、營隊內容"},{hid:"og:description",name:"og:description",content:"要價"+this.camp.price+"元的"+this.name+"營隊好嗎? 實際參與學生心得分享及家長評價 "+this.camp.comment}]}},jsonld:function(){return null},computed:{breadcrumbs:function(){return[{text:"營隊資訊",disabled:!1,href:"list"},{text:this.name,disabled:!0,href:"detail/"+this.name}]}}},r=n(93),m=n(129),l=n.n(m),v=n(540),h=n(443),d=n(415),_=n(186),f=n(187),V=n(121),y=n(84),w=n(189),I=n(106),L=n(541),k=n(446),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-breadcrumbs",{attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])}),t._v(" "),n("h1",[t._v("\n        "+t._s(this.name)+"\n    ")]),t._v(" "),n("v-rating",{attrs:{"empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",disabled:"",length:"5",size:"32",value:3}}),t._v(" "),t._l(t.camp.tags,(function(e){return n("v-chip",{key:e},[t._v("\n        "+t._s(e)+"\n    ")])})),t._v(" "),n("v-list",{attrs:{disabled:""}},[n("v-subheader",[t._v("營隊資訊")]),t._v(" "),n("v-list-item-group",{attrs:{color:"primary"}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-school")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n                        "+t._s(this.camp.school)+"\n                    ")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-currency-usd")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n                        新台幣 "),n("span",{staticClass:"font-weight-bold"},[t._v(" "+t._s(this.camp.price)+" ")]),t._v("元\n                    ")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-map-marker")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n                        "+t._s(this.camp.location)+"\n                    ")])],1)],1),t._v(" "),n("v-list-item",[t._v("\n                "+t._s(this.camp.comment)+"\n            ")])],1)],1),t._v(" "),n("script",{attrs:{src:"https://camp-rating.hsuan.app/client.js",repo:"hsuan1117/CampSearchNuxt","issue-term":"title",theme:"github-light",crossorigin:"anonymous",async:""}})],2)}),[],!1,null,"77c9c310",null);e.default=component.exports;l()(component,{VBreadcrumbs:v.a,VChip:h.a,VContainer:d.a,VIcon:_.a,VList:f.a,VListItem:V.a,VListItemContent:y.a,VListItemGroup:w.a,VListItemIcon:I.a,VListItemTitle:y.b,VRating:L.a,VSubheader:k.a})}}]);