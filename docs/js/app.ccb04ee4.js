(function(t){function e(e){for(var a,r,o=e[0],i=e[1],l=e[2],u=0,m=[];u<o.length;u++)r=o[u],n[r]&&m.push(n[r][0]),n[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(m.length)m.shift()();return c.push.apply(c,l||[]),s()}function s(){for(var t,e=0;e<c.length;e++){for(var s=c[e],a=!0,o=1;o<s.length;o++){var i=s[o];0!==n[i]&&(a=!1)}a&&(c.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},c=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/bug-report/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=i;c.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),n=s.n(a);n.a},1557:function(t,e,s){},2922:function(t,e,s){"use strict";var a=s("1557"),n=s.n(a);n.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=c(t);return s(e)}function c(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}n.keys=function(){return Object.keys(a)},n.resolve=c,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},c=[],r=(s("034f"),s("2877")),o={},i=Object(r["a"])(o,n,c,!1,null,null,null),l=i.exports,d=s("8c4f"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home container-fluid"},[t._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addBug(e)}}},[s("div",{staticClass:"form-inline my-4 col-12 d-flex justify-content-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.creator,expression:"newBug.creator"}],staticClass:"form-control",attrs:{required:"",type:"text",placeholder:"Your Name"},domProps:{value:t.newBug.creator},on:{input:function(e){e.target.composing||t.$set(t.newBug,"creator",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.title,expression:"newBug.title"}],staticClass:"form-control",attrs:{required:"",type:"text",placeholder:"Bug"},domProps:{value:t.newBug.title},on:{input:function(e){e.target.composing||t.$set(t.newBug,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.description,expression:"newBug.description"}],staticClass:"form-control",attrs:{required:"",type:"text",placeholder:"Description"},domProps:{value:t.newBug.description},on:{input:function(e){e.target.composing||t.$set(t.newBug,"description",e.target.value)}}}),s("button",{staticClass:"btn ml-2",attrs:{type:"submit"}},[t._v("Submit")])])])]),s("bugs")],1)])},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("h1",{staticClass:"title mt-4 col-12 text-center"},[t._v("Bug Reporter")])])}],f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bugs col-12 d-flex justify-content-center mt-5"},[s("table",{staticClass:"table col-md-10 table-hover"},[s("thead",{staticClass:"thead"},[s("tr",[s("th",[t._v("Title")]),s("th",[t._v("Reported By "),s("i",{staticClass:"fas fa-caret-down",on:{click:t.nameFilter}})]),s("th",[t._v("Status "),s("i",{staticClass:"fas fa-caret-down",on:{click:t.statusFilter}})]),s("th",[t._v("Date "),s("i",{staticClass:"fas fa-caret-down",on:{click:t.dateFilter}})])])]),t._l(t.allBugs,function(e){return s("tbody",{key:e._id},[s("tr",{class:{"table-success":!e.closed,"table-danger":e.closed},on:{click:function(s){t.setActiveBug(e),t.$router.push({name:"bugDetails",params:{id:e._id}})}}},[s("td",[t._v(t._s(e.title))]),s("td",[t._v(t._s(e.creator))]),s("td",[t._v(t._s(e.closed?"Closed":"Open"))]),s("td",[t._v(t._s(t._f("formatTime")(e.createdAt)))])])])})],2)])},b=[],g=s("c1df"),p=s.n(g),v={name:"bugs",props:[],data(){return{}},computed:{allBugs(){return this.$store.state.bugs}},methods:{setActiveBug(t){this.$store.dispatch("setActiveBug",t)},sortNewest(){this.$store.dispatch("sortNewest")},statusFilter(){let t=this.$store.state.bugs;t.sort((t,e)=>t.closed-e.closed)},nameFilter(){let t=this.$store.state.bugs;t.sort((t,e)=>t.creator.localeCompare(e.creator))},dateFilter(){let t=this.$store.state.bugs;t.sort((t,e)=>e.createdAt.localeCompare(t.createdAt))}},filters:{formatTime(t){return p()(String(t)).format("MMMM Do YYYY, h:mm:ss a")}},components:{}},h=v,j=(s("2922"),Object(r["a"])(h,f,b,!1,null,"668fca8a",null)),_=j.exports,C={name:"home",mounted(){this.$store.dispatch("getAllBugs")},data(){return{newBug:{creator:"",title:"",description:""}}},components:{Bugs:_},methods:{addBug(){this.$store.dispatch("addBug",this.newBug),event.target.reset()}}},w=C,B=(s("cccb"),Object(r["a"])(w,u,m,!1,null,null,null)),y=B.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bugDetails container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-1"},[s("i",{staticClass:"fas fa-home fa-2x",on:{click:t.leave}})]),t._m(0)]),s("div",{staticClass:"row"},[s("table",{staticClass:"table offset-1 col-md-10 table"},[t._m(1),s("tbody",[s("tr",{class:{"table-success":!t.activeBug.closed,"table-danger":t.activeBug.closed}},[s("td",[t._v(t._s(t.activeBug.title))]),s("td",[t._v(t._s(t.activeBug.creator))]),s("td",[s("span",{staticClass:"closed-type",on:{click:function(e){return t.bugStatus(t.activeBug._id)}}},[t._v(t._s(t.activeBug.closed?"Closed":"Open"))])]),s("td",[t._v(t._s(t._f("formatTime")(t.activeBug.createdAt)))])])])])]),s("div",{staticClass:"row justify-content-center "},[s("div",{staticClass:"col-8"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v("Description")]),t._v("\n          "+t._s(t.activeBug.description)+"\n        ")])])])]),t._m(2),s("div",{staticClass:"row"},[t.activeBug.closed?t._e():s("div",{staticClass:"col-12"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[s("div",{staticClass:"form-inline my-4 col-12 d-flex justify-content-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.creator,expression:"newComment.creator"}],staticClass:"form-control",attrs:{required:"",type:"text",placeholder:"Your Name"},domProps:{value:t.newComment.creator},on:{input:function(e){e.target.composing||t.$set(t.newComment,"creator",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.content,expression:"newComment.content"}],staticClass:"form-control",attrs:{required:"",type:"text",placeholder:"Comment"},domProps:{value:t.newComment.content},on:{input:function(e){e.target.composing||t.$set(t.newComment,"content",e.target.value)}}}),s("button",{staticClass:"btn btn-primary ml-2",attrs:{type:"submit"}},[t._v("Add Comment")])])])])]),s("bug-comments")],1)},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-10"},[s("h1",[t._v("Bug Details")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",[t._v("Title")]),s("th",[t._v("Reported By")]),s("th",[t._v("Status")]),s("th",[t._v("Date")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("h1",{staticClass:"title mt-4 col-12 text-center"},[t._v("Comments")])])}],x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},t._l(t.allComments,function(e){return s("div",{key:e.id,staticClass:"col-12"},[s("div",{staticClass:"card",class:{pending:"pending"==e.flagged,completed:"completed"==e.flagged,rejected:"rejected"==e.flagged}},[s("div",{staticClass:"card-body"},[s("h6",{staticClass:"card-title"},[t._v("Comment By: "+t._s(e.creator))]),s("h4",[t._v(t._s(e.content))]),s("p",[t._v(t._s(t._f("formatTime")(e.createdAt)))]),s("i",{staticClass:"fas fa-trash-alt",on:{click:function(s){return t.deleteComment(e._id)}}}),s("div",{staticClass:"dropdown"},[s("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Flag\n          ")]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenu1"}},[s("a",{staticClass:"dropdown-item",on:{click:function(s){return t.changeFlag(e._id,"completed")}}},[t._v("Complete ")]),s("a",{staticClass:"dropdown-item",on:{click:function(s){return t.changeFlag(e._id,"rejected")}}},[t._v("Reject")]),s("a",{staticClass:"dropdown-item",on:{click:function(s){return t.changeFlag(e._id,"pending")}}},[t._v("Pending")])])])])])])}),0)},A=[],z={name:"bugComments",mounted(){this.$store.dispatch("getAllComments",this.$route.params.id)},props:[],data(){return{}},computed:{allComments(){return this.$store.state.comments}},filters:{formatTime(t){return p()(String(t)).format("MMMM Do YYYY, h:mm:ss a")}},methods:{deleteComment(t){this.$store.dispatch("deleteComment",t)},changeFlag(t,e){this.$store.dispatch("changeFlag",{commentID:t,str:e})}},components:{}},O=z,D=(s("c4bd"),Object(r["a"])(O,x,A,!1,null,null,null)),M=D.exports,S={name:"bugDetails",mounted(){this.activeBug._id||this.$store.dispatch("setActiveBugParam",this.$route.params.id)},data(){return{newComment:{creator:"",content:"",flagged:"pending"}}},computed:{activeBug(){return this.$store.state.activeBug}},filters:{formatTime(t){return p()(String(t)).format("MMMM Do YYYY, h:mm:ss a")}},components:{BugComments:M},methods:{addComment(){this.$store.dispatch("addComment",this.newComment),event.target.reset()},bugStatus(t){this.$store.dispatch("bugStatus",t)},leave(){this.$router.push({name:"home"}),this.$store.dispatch("getAllComments")}}},P=S,F=(s("ee61"),Object(r["a"])(P,$,k,!1,null,"c5c69b78",null)),Y=F.exports;a["a"].use(d["a"]);var T=new d["a"]({routes:[{path:"/",name:"home",component:y},{path:"/bugs/:id",props:!0,name:"bugDetails",component:Y},{path:"*",redirect:"/"}]}),E=s("2f62"),N=s("bc3a"),q=s.n(N);const R=q.a.create({baseURL:"https://bcw-sandbox.herokuapp.com/api/contineur",timeout:3e3});a["a"].use(E["a"]);var U=new E["a"].Store({state:{bugs:[],activeBug:{},bugDetails:[],comments:[]},mutations:{setBugs(t,e){t.bugs=e},setComments(t,e){t.comments=e},setActiveBug(t,e){t.activeBug=e}},actions:{getAllBugs({commit:t,dispatch:e}){R.get("bugs").then(e=>{t("setBugs",e.data.results)})},getAllComments({commit:t,dispatch:e},s){if(!s)return t("setComments",[]);R.get(`bugs/${s}/notes`).then(e=>{t("setComments",e.data.results)})},addBug({commit:t,dispatch:e},s){R.post("bugs",s).then(t=>{e("getAllBugs")}).catch(t=>{console.log(t)})},addComment({commit:t,dispatch:e},s){R.post(`bugs/${this.state.activeBug._id}/notes`,s).then(t=>{e("getAllComments",`${this.state.activeBug._id}`)}).catch(t=>{console.log(t)})},changeFlag({commit:t,dispatch:e},{commentID:s,str:a}){R.put(`bugs/${this.state.activeBug._id}/notes/${s}`,{flagged:a}).then(t=>{e("getAllComments",`${this.state.activeBug._id}`)}).catch(t=>{console.log(t)})},deleteComment({commit:t,dispatch:e},s){R.delete(`bugs/${this.state.activeBug._id}/notes/${s}`).then(t=>{e("getAllComments",`${this.state.activeBug._id}`)}).catch(t=>{console.log(t)})},bugStatus({commit:t,dispatch:e},s){R.delete(`bugs/${s}`).then(t=>{e("setActiveBugParam",s)}).catch(t=>{console.log(t)})},setActiveBugParam({commit:t,dispatch:e},s){R.get("bugs/"+s).then(e=>{t("setActiveBug",e.data.results)})},setActiveBug({commit:t,dispatch:e},s){t("setActiveBug",s)}}});a["a"].config.productionTip=!1,new a["a"]({router:T,store:U,render:function(t){return t(l)}}).$mount("#app")},"63f3":function(t,e,s){},"64a9":function(t,e,s){},"838b":function(t,e,s){},c4bd:function(t,e,s){"use strict";var a=s("63f3"),n=s.n(a);n.a},cccb:function(t,e,s){"use strict";var a=s("d563"),n=s.n(a);n.a},d563:function(t,e,s){},ee61:function(t,e,s){"use strict";var a=s("838b"),n=s.n(a);n.a}});
//# sourceMappingURL=app.ccb04ee4.js.map