(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{458:function(t,e,n){"use strict";(function(t){var r=n(24),o=(n(73),n(28),n(12),n(5),n(11),n(64),n(453)),c=n(82),l=n.n(c),m=n(488),v=n.n(m);n(273);e.a={data:function(){return{rating:4,comment:"",submitDialog:!1}},methods:{submit:function(){this.submitDialog=!0},finalSubmit:function(){this.submitDialog=!1,v()(this.generatedPayload),window.open(this.issue.html_url+"#new_comment_field")}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,m,v,d,h,_,f,y,x,w;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c=e.params,m=c.name,v=null!==(r=o.filter((function(t){return t.name===m}))[0])&&void 0!==r?r:{name:"查無資料",school:"查無資料",location:"查無資料",price:"查無資料",start:"查無資料",end:"查無資料",apply:"查無資料",website:"https://google.com/search?q="+m,comment:"查無資料",tags:[]},_=1;case 4:if(0===(null===(f=h)||void 0===f||null===(y=f.data)||void 0===y?void 0:y.length)){n.next=12;break}return n.next=7,l.a.get("https://api.github.com/repos/campsearch/website/issues?per_page=100&labels=rating&page=".concat(_),{headers:{Authorization:"Bearer "+t.env.GITHUB_ACCESS_TOKEN}});case 7:(h=n.sent).data.forEach((function(t){t.title===m&&(d=t)})),_++,n.next=4;break;case 12:if(x=[],void 0!==d){n.next=17;break}console.warn(m),n.next=22;break;case 17:return n.next=19,l.a.get(d.comments_url);case 19:w=n.sent,x=(x=w.data).filter((function(t){try{JSON.parse(t.body)}catch(t){return!1}return!0}));case 22:return n.abrupt("return",{name:m,camp:v,ratings:x,issue:d});case 23:case"end":return n.stop()}}),n)})))()},head:function(){return{title:this.name+" 營隊評價、營隊內容",meta:[{hid:"description",name:"description",content:"要價"+this.camp.price+"元的"+this.name+"營隊好嗎? 實際參與學生心得分享及家長評價 "+this.camp.comment},{hid:"og:title",name:"og:title",content:this.name+" 營隊評價、營隊內容"},{hid:"og:description",name:"og:description",content:"要價"+this.camp.price+"元的"+this.name+"營隊好嗎? 實際參與學生心得分享及家長評價 "+this.camp.comment}]}},jsonld:function(){return{"@context":"https://schema.org","@type":"Event",name:this.name,location:this.camp.location,organizer:this.camp.school,startDate:this.camp.start,endDate:this.camp.end,offers:{"@type":"Offer",price:String(this.camp.price),priceCurrency:"TWD"},review:this.ratings.map((function(t){return{"@type":"Review",reviewRating:{"@type":"Rating",ratingValue:JSON.parse(t.body).rating},author:{"@type":"Person",name:t.user.login},reviewBody:JSON.parse(t.body).comment}})),aggregateRating:{"@type":"AggregateRating",ratingValue:this.ratings.reduce((function(t,e){return t+JSON.parse(e.body).rating}),0)/this.ratings.length,ratingCount:this.ratings.length}}},computed:{breadcrumbs:function(){return[{text:"營隊資訊",disabled:!1,href:"list"},{text:this.name,disabled:!0,href:"detail/"+this.name}]},generatedPayload:function(){return JSON.stringify({rating:this.rating,comment:this.comment})}}}}).call(this,n(208))},573:function(t,e,n){"use strict";n.r(e);var r=n(458).a,o=n(94),c=n(129),l=n.n(c),m=n(575),v=n(574),d=n(218),h=n(466),_=n(431),f=n(467),y=n(561),x=n(428),w=n(564),C=n(471),k=n(188),V=n(162),S=n(189),D=n(122),O=n(194),I=n(87),J=n(191),N=n(107),R=n(576),L=n(562),T=n(563),A=n(472),j=n(566),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-breadcrumbs",{attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])}),t._v(" "),n("h1",{staticClass:"d-inline-block"},[t._v("\n        "+t._s(this.name)+"\n    ")]),t._v(" "),t._l(t.camp.tags,(function(e){return n("v-chip",{key:e},[t._v("\n        "+t._s(e)+"\n    ")])})),t._v(" "),n("br"),t._v(" "),n("v-rating",{staticClass:"d-inline-block",attrs:{"empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",disabled:"",length:"5",size:"32",value:this.ratings.reduce((function(t,e){return t+JSON.parse(e.body).rating}),0)/this.ratings.length}}),t._v("\n    ("+t._s(this.ratings.length)+")\n    "),n("v-list",{attrs:{disabled:""}},[n("v-subheader",[t._v("營隊資訊")]),t._v(" "),n("v-list-item-group",{attrs:{color:"primary"}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-school")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n                        "+t._s(this.camp.school)+"\n                    ")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-currency-usd")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n                        新台幣 "),n("span",{staticClass:"font-weight-bold"},[t._v(" "+t._s(this.camp.price)+" ")]),t._v("元\n                    ")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-map-marker")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n                        "+t._s(this.camp.location)+"\n                    ")])],1)],1),t._v(" "),n("v-list-item",[t._v("\n                "+t._s(this.camp.comment)+"\n            ")])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"3"}},t._l(this.ratings,(function(e){return n("v-card",{key:e.id,staticClass:"mx-auto",attrs:{color:"#26c6da",dark:"","min-width":"300"}},[n("v-rating",{staticClass:"ml-2 pt-2 pb-0",attrs:{"empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",disabled:"",color:"yellow darken-3","background-color":"grey darken-1",length:"5",size:"32",value:JSON.parse(e.body).rating}}),t._v(" "),n("v-card-text",{staticClass:"text-h5 font-weight-bold pb-2",staticStyle:{color:"black"},domProps:{textContent:t._s(JSON.parse(e.body).comment)}}),t._v(" "),n("v-card-actions",[n("v-list-item",{staticClass:"grow"},[n("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[n("v-img",{staticClass:"elevation-6",attrs:{alt:"",src:e.user.avatar_url}})],1),t._v(" "),n("a",{staticClass:"text-decoration-none",staticStyle:{color:"white"},attrs:{href:e.user.html_url,target:"_blank"}},[t._v(t._s(e.user.login))]),t._v(" "),n("v-row",{attrs:{align:"center",justify:"end"}},[n("v-icon",{staticClass:"mr-1"},[t._v("\n                            mdi-heart\n                        ")]),t._v(" "),n("span",{staticClass:"subheading mr-2"},[t._v(t._s(e.reactions.total_count))])],1)],1)],1)],1)})),1),t._v(" "),n("v-card",{staticClass:"mx-auto mt-4",attrs:{"max-width":"400"}},[n("v-card-title",[n("v-icon",{attrs:{large:"",left:""}},[t._v("\n                mdi-comment\n            ")]),t._v(" "),n("span",{staticClass:"text-h6 font-weight-bold"},[t._v("評論、評分")])],1),t._v(" "),n("div",{staticClass:"text-md-body-1 px-4"},[t._v("\n            有參加過 "+t._s(this.name)+"? 快來評論一下吧\n        ")]),t._v(" "),n("v-rating",{staticClass:"px-4",attrs:{color:"yellow darken-3","background-color":"grey darken-1","empty-icon":"$ratingFull","half-increments":"",hover:"",large:""},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}}),t._v(" "),n("v-textarea",{staticClass:"px-4",attrs:{outlined:"",label:"留下評論"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),t._v(" "),n("v-card-actions",{staticClass:"justify-end pt-0"},[n("v-btn",{attrs:{color:"primary"},on:{click:t.submit}},[t._v("\n                送出!\n            ")])],1)],1),t._v(" "),n("v-dialog",{attrs:{width:"500"},model:{value:t.submitDialog,callback:function(e){t.submitDialog=e},expression:"submitDialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v("\n                評價營隊\n            ")]),t._v(" "),n("v-alert",{attrs:{type:"warning"}},[t._v("因為技術及開發時程緣故，目前只能以複製、貼上方式評價")]),t._v(" "),n("v-card-text",[t._v("\n                複製下面這段程式碼貼上至Github Issue\n                "),n("br"),t._v(" "),n("code",[t._v("\n                    "+t._s(t.generatedPayload)+"\n                ")])]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:t.finalSubmit}},[t._v("\n                    複製並開啟網頁\n                ")])],1)],1)],1)],2)}),[],!1,null,"36a3125e",null);e.default=component.exports;l()(component,{VAlert:m.a,VBreadcrumbs:v.a,VBtn:d.a,VCard:h.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VChip:f.a,VCol:y.a,VContainer:x.a,VDialog:w.a,VDivider:C.a,VIcon:k.a,VImg:V.a,VList:S.a,VListItem:D.a,VListItemAvatar:O.a,VListItemContent:I.a,VListItemGroup:J.a,VListItemIcon:N.a,VListItemTitle:I.b,VRating:R.a,VRow:L.a,VSpacer:T.a,VSubheader:A.a,VTextarea:j.a})}}]);