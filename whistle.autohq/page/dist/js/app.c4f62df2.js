(function(e){function t(t){for(var n,a,c=t[0],u=t[1],o=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,o||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==s[c]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},s={app:0},i=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a2898081"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"b4fec240"}[e]+".css",s=u.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var o=i[c],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===n||l===s))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){o=d[c],l=o.getAttribute("data-href");if(l===n||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=s;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=i);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}s[e]=void 0}};var f=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},2395:function(e,t,r){},4095:function(e,t,r){"use strict";r("c7a7")},"79f6":function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"d",(function(){return u})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return f}));var n=r("1da1"),a=(r("96cf"),r("159b"),r("7338")),s=r.n(a);function i(){return c.apply(this,arguments)}function c(){return c=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="cgi-bin/get-reports",e.next=3,s.a.get(t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function u(){return o.apply(this,arguments)}function o(){return o=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="cgi-bin/query-reportmanage",e.next=3,s.a.get(t);case 3:return r=e.sent,e.abrupt("return",p(r.data.result.data));case 5:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function l(){return d.apply(this,arguments)}function d(){return d=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="cgi-bin/query-class",e.next=3,s.a.get(t);case 3:return r=e.sent,e.abrupt("return",h(r.data.result.data));case 5:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return v=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="cgi-bin/add-subgroup",e.next=3,s.a.get(r,{params:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function p(e){var t={};return e.forEach((function(e){t[e.event_code]=e})),t}function h(e){var t={level1:[],level2:[],level3:[]};return e.forEach((function(e){3===e.level?t["level3"].push(e):2===e.level?t["level2"].push(e):1===e.level&&t["level1"].push(e)})),t}},"7c55":function(e,t,r){"use strict";r("2395")},c7a7:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/allStat"}},[e._v("所有统计点")])],1),r("router-view")],1)},s=[],i=(r("7c55"),r("2877")),c={},u=Object(i["a"])(c,a,s,!1,null,null,null),o=u.exports,l=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",{staticClass:"stat-list"},e._l(e.statList,(function(t,n){return r("div",{key:n,staticClass:"stat-item",class:{clicked:e.clickIndex===n},on:{click:function(r){return e.clickStatItem(t,n)}}},[r("div",{staticClass:"stat-item-code"},[e._v(e._s(t.event_code))]),r("div",{staticClass:"stat-item-desc"},[e._v(e._s(t.event_desc))])])})),0),r("div",{staticClass:"stat-detail-box"},[r("div",{staticClass:"stat-detail"},[e._v(" { "),e._l(e.statExt,(function(t,n){return r("div",{key:n,staticClass:"stat-ext"},[r("div",{staticClass:"stat-ext-key"},[e._v('"'+e._s(n)+'"')]),r("div",{staticClass:"stat-ext-val"},[e._v(': "'+e._s(t)+'",')])])})),e._v(" } ")],2),r("div",{staticClass:"add-stat-class"},[r("div",[e._v("需要添加"+e._s(e.statClass.levelText))]),r("div",[e._v("代码："+e._s(e.statClass.code))]),r("div",[e._v("名称："+e._s(e.statClass.desc))]),1!==e.statClass.level?r("div",[e._v("父级id："+e._s(e.statClass.fatherId))]):e._e(),1!==e.statClass.level?r("div",[e._v(" 父级名称："+e._s(e.statClass.fatherName)+" ")]):e._e()])])])},f=[],v=r("3835"),p=r("1da1"),h=r("d4ec"),b=r("bee2"),m=r("262e"),_=r("2caf"),g=(r("ac1f"),r("1276"),r("96cf"),r("9ab4")),y=r("1b40"),w=r("79f6");r("159b"),r("7db0"),r("b0c0");function x(e,t,r){var n=[];return e.forEach((function(e){t[e.stat]?n.push(Object.assign({isEntry:!0},t[e.stat])):n.push(Object.assign({ext:e.ext},O(e,r)))})),n}function O(e,t){var r=e.stat.split("."),n=Object(v["a"])(r,4),a=n[0],s=n[1],i=n[2],c=(n[3],{event_code:e.stat,event_desc:""}),u={},o=t.level1.find((function(e){return e.code===a}));if(o){c.first_level_id=o.id,c.first_level_name=o.name,c.event_desc=o.name;var l=t.level2.find((function(e){return e.father_id===o.id&&e.code===s}));if(l){c.second_level_id=l.id,c.second_level_name=l.name,c.event_desc+="."+l.name;var d=t.level3.find((function(e){return e.father_id===l.id&&e.code===i}));d?(c.third_level_id=d.id,c.third_level_name=d.name,c.event_desc+="."+d.name):u.third_level_code=i}else u.second_level_code=s}else u.first_level_code=a;return c}var j=r("f00f"),k=function(e){Object(m["a"])(r,e);var t=Object(_["a"])(r);function r(){var e;return Object(h["a"])(this,r),e=t.apply(this,arguments),e.pageShow=!1,e.clickIndex=-1,e.statList=[],e.statExt={},e.statClass={},e.allStat={},e.allClass={},e}return Object(b["a"])(r,[{key:"created",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.queryReportmanage(),this.queryClass(),this.getReports(),t=[{subgroupCode:"b_test3.c_test3",rule:[],firstClassId:515013,launchSite:0,groupid:10078,secondClassId:515014,subgroupDesc:"组件插入测试3333",appkey:"rta_access",develepor:"zenchen",productor:"zenchen",status:3,tempId:109}],this.addSubgroup({data:JSON.stringify(t)});case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"queryReportmanage",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(j["a"])(Object(w["d"])());case 2:if(t=e.sent,r=Object(v["a"])(t,2),n=r[0],a=r[1],!n){e.next=9;break}throw this.showBusinessError(n),new Error(n);case 9:this.allStat=a,console.log(a);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"queryClass",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(j["a"])(Object(w["c"])());case 2:if(t=e.sent,r=Object(v["a"])(t,2),n=r[0],a=r[1],!n){e.next=9;break}throw this.showBusinessError(n),new Error(n);case 9:this.allClass=a,console.log("allClass",a);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getReports",value:function(){this.getSubReports(),setInterval(this.getSubReports,1e3)}},{key:"getSubReports",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(j["a"])(Object(w["b"])());case 2:if(t=e.sent,r=Object(v["a"])(t,2),n=r[0],a=r[1],!n){e.next=9;break}throw this.showBusinessError(n),new Error(n);case 9:this.statList=x(a.statArr,this.allStat,this.allClass),console.log(this.statList);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"addSubgroup",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(j["a"])(Object(w["a"])(t));case 2:if(r=e.sent,n=Object(v["a"])(r,2),a=n[0],s=n[1],!a){e.next=9;break}throw this.showBusinessError(a),new Error(a);case 9:console.log(s);case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"showBusinessError",value:function(e){console.log(e)}},{key:"clickStatItem",value:function(e,t){this.statExt=JSON.parse(e.ext),this.clickIndex=t;var r=e.event_code.split("."),n=Object(v["a"])(r,4),a=n[0],s=n[1],i=n[2];n[3];e.first_level_id?e.second_level_id?e.third_level_id||(this.statClass={level:3,levelText:"三级分类",code:i,fatherId:e.second_level_id,fatherName:e.second_level_name,name:""}):this.statClass={level:2,levelText:"二级分类",code:s,fatherId:e.first_level_id,fatherName:e.first_level_name,name:""}:this.statClass={level:1,levelText:"一级分类",code:a,fatherId:"",fatherName:"",name:""}}}]),r}(y["d"]);k=Object(g["a"])([y["a"]],k);var C=k,E=C,S=(r("4095"),Object(i["a"])(E,d,f,!1,null,"1949d415",null)),R=S.exports;n["a"].use(l["a"]);var I=[{path:"/",name:"Home",component:R},{path:"/allStat",name:"AllStat",component:function(){return r.e("about").then(r.bind(null,"8221"))}}],T=new l["a"]({routes:I}),N=T,P=r("2f62");n["a"].use(P["a"]);var L=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:N,store:L,render:function(e){return e(o)}}).$mount("#app")},f00f:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){return e.then((function(e){return[null,e]})).catch((function(e){return[e,null]}))}}});
//# sourceMappingURL=app.c4f62df2.js.map