(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{539:function(t,e,n){"use strict";n.r(e);var r=n(127),l=(n(5),n(471),n(42),n(472),n(474),n(475),n(476),n(477),n(478),n(479),n(480),n(481),n(482),n(483),n(484),n(485),n(486),n(487),n(488),n(44),n(489),n(490),n(56),n(65),n(454)),o={name:"IndexPage",data:function(){return{expanded:[],originData:l,search:"",tags:[],categories:Object(r.a)(new Set(l.flatMap((function(t){return t.tags})))),perPage:500}},computed:{headers:function(){return[{text:"名稱",value:"name"},{text:"主辦單位",value:"school"},{text:"地點",value:"location"},{text:"報名截止時間",value:"apply"},{text:"營隊開始時間",value:"start"},{text:"營隊結束時間",value:"end"},{text:"價格",value:"price"},{text:"網站",value:"website"},{text:"標籤",value:"tags",filter:this.tagsFilter}]}},methods:{tagClick:function(t){this.tags.includes(t)||this.tags.push(t)},tagsFilter:function(t){var e=this;return!this.tags||0===this.tags.length||(t.some((function(t){return e.tags.includes(t)}))||0===this.tags.length)}},mounted:function(){this.perPage=5}},c=n(93),d=n(129),v=n.n(d),m=n(542),h=n(533),f=n(453),x=n(418),_=n(443),w=n(530),k=n(415),V=n(535),y=n(186),C=n(534),I=n(162),P=n(531),S=n(532),D=n(458),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{staticStyle:{"min-height":"calc(50vh)"},attrs:{cols:"12"}},[n("v-card",[n("v-card-title",[t._v("\n                    111暑假營隊\n                    "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"搜尋","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-autocomplete",{staticClass:"px-4 mb-3",attrs:{items:t.categories,chips:"","small-chips":"",label:"篩選標籤",multiple:"",solo:"","hide-details":""},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}}),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.originData,"items-per-page":t.perPage,"item-key":"name",search:t.search,expanded:t.expanded,"show-expand":""},on:{"update:expanded":function(e){t.expanded=e}},scopedSlots:t._u([{key:"expanded-item",fn:function(e){var r=e.headers,l=e.item;return[n("td",{attrs:{colspan:r.length}},[t._v("\n                            "+t._s(l.comment)+"\n                            "),l.comment?t._e():n("span",{staticClass:"font-weight-bold"},[t._v("目前沒有詳細資料")])])]}},{key:"no-results",fn:function(){return[n("v-alert",{staticClass:"my-2",attrs:{type:"warning"}},[t._v("目前沒有符合的資料")])]},proxy:!0},{key:"item.tags",fn:function(e){var r=e.item;return[n("v-item-group",{attrs:{multiple:""}},t._l(r.tags,(function(e){return n("v-item",{key:e},[n("v-chip",{on:{click:function(n){return t.tagClick(e)}}},[t._v("\n                                    "+t._s(e)+"\n                                ")])],1)})),1)]}},{key:"item.website",fn:function(e){var r=e.item;return[n("a",{staticClass:"text-decoration-none",attrs:{href:r.website,target:"_blank",rel:"nofollow"}},[n("v-icon",[t._v("mdi-open-in-new")])],1),t._v(" "),n("router-link",{staticClass:"text-decoration-none",attrs:{to:"/detail/"+r.name}},[n("v-icon",[t._v("mdi-eye")])],1)]}}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAlert:m.a,VAutocomplete:h.a,VCard:f.a,VCardTitle:x.c,VChip:_.a,VCol:w.a,VContainer:k.a,VDataTable:V.a,VIcon:y.a,VItem:C.a,VItemGroup:I.b,VRow:P.a,VSpacer:S.a,VTextField:D.a})}}]);