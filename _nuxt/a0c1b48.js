(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{459:function(e,t,n){"use strict";(function(e){var r=n(24),o=(n(73),n(455)),c=n(82),l=n.n(c);t.a={name:"list",data:function(){return{originData:o}},methods:{checkIssue:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.get("https://api.github.com/search/issues?q=".concat(encodeURIComponent(t+" is:issue is:open repo:campsearch/website label:rating")),{headers:{Authorization:"Bearer "+e.env.GITHUB_ACCESS_TOKEN},timeout:2e4});case 2:if(r=n.sent,o=r.data,console.log("有沒有找到? "),console.log(o.items.length),0!==o.items.length){n.next=11;break}return n.next=9,l.a.post("https://api.github.com/repos/campsearch/website/issues",JSON.stringify({title:t,labels:["rating"],body:"https://camp.hsuan.app/detail/"+t}),{headers:{Authorization:"Bearer "+e.env.GITHUB_ACCESS_TOKEN},timeout:2e4});case 9:c=n.sent,console.log(c.headers["x-ratelimit-remaining"]);case 11:case"end":return n.stop()}}),n)})))()}}}}).call(this,n(210))},582:function(e,t,n){"use strict";n.r(t);var r=n(459).a,o=n(94),c=n(129),l=n.n(c),h=n(221),m=n(430),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[e._v("\n    營隊清單\n    "),n("ul",e._l(e.originData,(function(t){return n("li",{key:t.name},[e._v(e._s(t.name)+"\n            "),n("v-btn",{on:{click:function(n){return e.checkIssue(t.name)}}},[e._v("Check")])],1)})),0)])}),[],!1,null,"85885d34",null);t.default=component.exports;l()(component,{VBtn:h.a,VContainer:m.a})}}]);