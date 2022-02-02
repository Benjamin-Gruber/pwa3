(function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],p=0,d=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"networkAddress",(function(){return C}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container d-flex flex-column justify-content-center align-items-center mt-5",attrs:{id:"app"}},[n("h3",[e._v("Willkommen bei der Service Worker Untersuchung!")]),n("ButtonGet",{on:{get:e.fetchData}}),n("CardView",{attrs:{employees:e.employees},on:{del:e.delEmployee}})],1)},a=[],c=n("1da1"),i=(n("96cf"),n("bc3a")),s=n.n(i),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"btn btn-outline-primary",on:{click:function(t){return e.$emit("get")}}},[e._v("Get Employees")])])},u=[],p={},d=p,f=n("2877"),m=Object(f["a"])(d,l,u,!1,null,"d62479b4",null),h=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.employees.length>0,expression:"employees.length > 0"}]},[n("div",{staticClass:"row justify-content-center mt-4"},e._l(e.employees,(function(t){return n("div",{key:t.email,staticClass:"card p-2 m-2 bg-light",staticStyle:{width:"22rem"}},[n("img",{staticClass:"mx-auto d-block",attrs:{src:t.picture.large,alt:"picture of employee"}}),n("div",{staticClass:"mx-auto d-block mt-2"},[n("h4",[e._v("Name: "+e._s(t.name.title)+" "+e._s(t.name.first)+" "+e._s(t.name.last))]),n("p",{staticClass:"card-text"},[e._v("Email: "+e._s(t.email))]),n("p",{staticClass:"card-text"},[e._v("Phone: "+e._s(t.phone))])]),n("button",{staticClass:"btn btn-outline-danger mx-auto d-block mt-3",on:{click:function(n){return e.$emit("del",t)}}},[e._v("Delete")])])})),0)])])},b=[],g={props:{employees:{type:Array}}},y=g,w=(n("e30a"),Object(f["a"])(y,v,b,!1,null,"45eab157",null)),_=w.exports,x={name:"app",components:{ButtonGet:h,CardView:_},data:function(){return{employees:[]}},created:function(){document.addEventListener("swUpdated",this.updateAvailable,{once:!0})},methods:{fetchData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s()({url:"http://localhost:3000/employees",method:"GET"});case 3:n=t.sent,r=n.data,e.employees=r,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:console.log("fetchData called");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},delEmployee:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s()({url:"http://localhost:3000/employees/".concat(e.id),method:"DELETE"});case 3:t.fetchData(),n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),console.error(n.t0);case 9:console.log("delEmployee called");case 10:case"end":return n.stop()}}),n,null,[[0,6]])})))()}}},k=x,j=Object(f["a"])(k,o,a,!1,null,null,null),O=j.exports,E=n("9483");Object(E["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("ab8b");r["a"].config.productionTip=!1;var C="http://127.0.0.1:3000";new r["a"]({render:function(e){return e(O)}}).$mount("#app")},"958f":function(e,t,n){},e30a:function(e,t,n){"use strict";n("958f")}});
//# sourceMappingURL=app.b7078447.js.map