(function(t){function e(e){for(var n,c,o=e[0],i=e[1],u=e[2],d=0,l=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&l.push(s[c][0]),s[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);f&&f(e);while(l.length)l.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},c={app:0},s={app:0},r=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-348d8c94":"9a357319","chunk-08684941":"7c94a92c","chunk-62227b3d":"7a2a0504","chunk-1c726e1a":"81b8741a","chunk-6be23c52":"47ee8429","chunk-c641ae0c":"e60f6206","chunk-3dfb56b8":"c1720666","chunk-3c697d10":"a767ac67"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"chunk-348d8c94":1,"chunk-62227b3d":1,"chunk-1c726e1a":1,"chunk-6be23c52":1,"chunk-c641ae0c":1,"chunk-3dfb56b8":1,"chunk-3c697d10":1};c[t]?e.push(c[t]):0!==c[t]&&a[t]&&e.push(c[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-348d8c94":"0e611772","chunk-08684941":"31d6cfe0","chunk-62227b3d":"93a9be57","chunk-1c726e1a":"b433ef0a","chunk-6be23c52":"03de113b","chunk-c641ae0c":"56d789ae","chunk-3dfb56b8":"7cfca3c1","chunk-3c697d10":"140b3434"}[t]+".css",s=i.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var u=r[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===s))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],d=u.getAttribute("data-href");if(d===n||d===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete c[t],f.parentNode.removeChild(f),a(r)},f.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){c[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(t);var l=new Error;u=function(e){d.onerror=d.onload=null,clearTimeout(f);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+c+")",l.name="ChunkLoadError",l.type=n,l.request=c,a[1](l)}s[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=d;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85da"),c=a.n(n);c.a},2872:function(t,e,a){t.exports=a.p+"img/shopcart.c68224ce.svg"},"56b0":function(t,e,a){"use strict";var n=a("c739"),c=a.n(n);c.a},"56d7":function(t,e,a){"use strict";a.r(e);a("dac5"),a("6e26"),a("9604"),a("df67");var n=a("6e6d"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("keep-alive",{attrs:{exclude:"Detail"}},[a("router-view")],1),a("main-tab-bar")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tab-bar",[n("tab-bar-item",{attrs:{path:"/home",activeColor:"var(--color-high-text)"}},[n("img",{attrs:{slot:"item-icon",src:a("9443"),alt:""},slot:"item-icon"}),n("img",{attrs:{slot:"item-icon-active",src:a("b508"),alt:""},slot:"item-icon-active"}),n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),n("tab-bar-item",{attrs:{path:"/category",activeColor:"var(--color-high-text)"}},[n("img",{attrs:{slot:"item-icon",src:a("57cd"),alt:""},slot:"item-icon"}),n("img",{attrs:{slot:"item-icon-active",src:a("a5ef"),alt:""},slot:"item-icon-active"}),n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),n("tab-bar-item",{attrs:{path:"/cart",activeColor:"var(--color-high-text)"}},[n("img",{attrs:{slot:"item-icon",src:a("2872"),alt:""},slot:"item-icon"}),n("img",{attrs:{slot:"item-icon-active",src:a("c3f8"),alt:""},slot:"item-icon-active"}),n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),n("tab-bar-item",{attrs:{path:"/profile",activeColor:"var(--color-high-text)"}},[n("img",{attrs:{slot:"item-icon",src:a("e55d"),alt:""},slot:"item-icon"}),n("img",{attrs:{slot:"item-icon-active",src:a("d151"),alt:""},slot:"item-icon-active"}),n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},u=[],d={name:"TabBar"},l=d,f=(a("ab98"),a("6691")),b=Object(f["a"])(l,i,u,!1,null,"92329e6c",null),h=b.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?a("div",[t._t("item-icon-active")],2):a("div",[t._t("item-icon")],2),a("div",{style:t.activeStyle},[t._t("item-text")],2)])},j=[],p=(a("34a3"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"red"}},data:function(){return{}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.replace(this.path).catch((function(t){}))}}}),v=p,g=(a("d2d9"),Object(f["a"])(v,m,j,!1,null,"4dd7787d",null)),k=g.exports,y={name:"MainTabBar",components:{TabBar:h,TabBarItem:k},data:function(){return{flag:!1}}},x=y,w=Object(f["a"])(x,r,o,!1,null,"338ba4a4",null),_=w.exports,S={name:"app",components:{MainTabBar:_}},O=S,z=(a("034f"),Object(f["a"])(O,c,s,!1,null,null,null)),C=z.exports,E=a("c478"),L=function(){return Promise.all([a.e("chunk-348d8c94"),a.e("chunk-08684941"),a.e("chunk-62227b3d"),a.e("chunk-1c726e1a")]).then(a.bind(null,"b3d7"))},T=function(){return Promise.all([a.e("chunk-348d8c94"),a.e("chunk-08684941"),a.e("chunk-c641ae0c")]).then(a.bind(null,"bb51"))},P=function(){return Promise.all([a.e("chunk-348d8c94"),a.e("chunk-3dfb56b8")]).then(a.bind(null,"c228"))},$=function(){return a.e("chunk-3c697d10").then(a.bind(null,"3b42"))},A=function(){return Promise.all([a.e("chunk-348d8c94"),a.e("chunk-08684941"),a.e("chunk-62227b3d"),a.e("chunk-6be23c52")]).then(a.bind(null,"6ab7"))};n["a"].use(E["a"]);var N=new E["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home",component:L},{path:"/category",component:T},{path:"/cart",component:P},{path:"/profile",component:$},{path:"/detail/:iid",component:A}],mode:"history"}),B=N,M=a("591a"),D={addCarts:function(t,e){var a=!1;t.cartList.some((function(t){if(t.iid===e.iid)return t.count+=parseInt(e.count),a=!0,!0})),a||(e.checked=!0,t.cartList.push(e)),localStorage.setItem("cartList",JSON.stringify(t.cartList))}},I=a("63e0"),q=a.n(I),H=(a("f763"),{getAllCount:function(t){var e=0;return t.cartList.forEach((function(t){e+=t.count})),e},cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList}});n["a"].use(M["a"]);var J={cartList:[]},Y=new M["a"].Store({state:J,mutations:D,actions:q.a,getters:H}),F=Y,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[a("div",[t._v(t._s(t.message))])])},G=[],K={name:"Toast",props:{},data:function(){return{message:"",isShow:!1}},methods:{show:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"默认文字",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;this.isShow=!0,this.message=e,setTimeout((function(){t.isShow=!1,t.message=""}),a)}}},Q=K,R=(a("56b0"),Object(f["a"])(Q,U,G,!1,null,"3ad478cd",null)),V=R.exports,W={install:function(t){var e=t.extend(V),a=new e;a.$mount(document.createElement("div")),document.body.appendChild(a.$el),t.prototype.$toast=a}},X=W,Z=a("816c"),tt=a.n(Z),et=a("27f3"),at=a("6bf2"),nt=a.n(at);n["a"].filter("dateFormat",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return nt()(t).format(e)}));JSON.parse(localStorage.getItem("cartList")||"[]");n["a"].config.productionTip=!1,n["a"].prototype.$bus=new n["a"],n["a"].use(X),tt.a.attach(document.body),n["a"].use(et["a"],{loading:a("f614")}),new n["a"]({render:function(t){return t(C)},router:B,store:F}).$mount("#app")},"57cd":function(t,e,a){t.exports=a.p+"img/category.12bedb89.svg"},"63e0":function(t,e){},"6dea":function(t,e,a){},"77d2":function(t,e,a){var n={"./af":"fbac","./af.js":"fbac","./ar":"f96f","./ar-dz":"e63c","./ar-dz.js":"e63c","./ar-kw":"b7bd","./ar-kw.js":"b7bd","./ar-ly":"968f","./ar-ly.js":"968f","./ar-ma":"9f9d","./ar-ma.js":"9f9d","./ar-sa":"aea5","./ar-sa.js":"aea5","./ar-tn":"d44b","./ar-tn.js":"d44b","./ar.js":"f96f","./az":"c7ed","./az.js":"c7ed","./be":"5a28","./be.js":"5a28","./bg":"1251","./bg.js":"1251","./bm":"2809","./bm.js":"2809","./bn":"b4fc","./bn.js":"b4fc","./bo":"5484","./bo.js":"5484","./br":"5adc","./br.js":"5adc","./bs":"ac10","./bs.js":"ac10","./ca":"e381","./ca.js":"e381","./cs":"aef2","./cs.js":"aef2","./cv":"6566","./cv.js":"6566","./cy":"1390","./cy.js":"1390","./da":"1ece","./da.js":"1ece","./de":"5f10","./de-at":"09c4","./de-at.js":"09c4","./de-ch":"89a2","./de-ch.js":"89a2","./de.js":"5f10","./dv":"e662","./dv.js":"e662","./el":"196b","./el.js":"196b","./en-SG":"0a32","./en-SG.js":"0a32","./en-au":"94ed","./en-au.js":"94ed","./en-ca":"2806","./en-ca.js":"2806","./en-gb":"b0dd","./en-gb.js":"b0dd","./en-ie":"7a6e","./en-ie.js":"7a6e","./en-il":"1f0f","./en-il.js":"1f0f","./en-nz":"1606","./en-nz.js":"1606","./eo":"f214","./eo.js":"f214","./es":"7d58","./es-do":"737b","./es-do.js":"737b","./es-us":"a894","./es-us.js":"a894","./es.js":"7d58","./et":"a888","./et.js":"a888","./eu":"1357","./eu.js":"1357","./fa":"0a48","./fa.js":"0a48","./fi":"c2b1","./fi.js":"c2b1","./fo":"52c4","./fo.js":"52c4","./fr":"04e6","./fr-ca":"6ad1","./fr-ca.js":"6ad1","./fr-ch":"b12f","./fr-ch.js":"b12f","./fr.js":"04e6","./fy":"ad13","./fy.js":"ad13","./ga":"369e","./ga.js":"369e","./gd":"22de","./gd.js":"22de","./gl":"f808","./gl.js":"f808","./gom-latn":"50d5","./gom-latn.js":"50d5","./gu":"e67a","./gu.js":"e67a","./he":"037c","./he.js":"037c","./hi":"3d53","./hi.js":"3d53","./hr":"678b","./hr.js":"678b","./hu":"1783","./hu.js":"1783","./hy-am":"2873","./hy-am.js":"2873","./id":"de99","./id.js":"de99","./is":"6aa2","./is.js":"6aa2","./it":"1f93","./it-ch":"2db9","./it-ch.js":"2db9","./it.js":"1f93","./ja":"6bf8","./ja.js":"6bf8","./jv":"6e55","./jv.js":"6e55","./ka":"e65f","./ka.js":"e65f","./kk":"7167","./kk.js":"7167","./km":"4668","./km.js":"4668","./kn":"e3d2","./kn.js":"e3d2","./ko":"b058","./ko.js":"b058","./ku":"017e","./ku.js":"017e","./ky":"b2bd","./ky.js":"b2bd","./lb":"e50c","./lb.js":"e50c","./lo":"ca14","./lo.js":"ca14","./lt":"3e84","./lt.js":"3e84","./lv":"ce1d","./lv.js":"ce1d","./me":"9d38","./me.js":"9d38","./mi":"3e2e","./mi.js":"3e2e","./mk":"d532","./mk.js":"d532","./ml":"db61","./ml.js":"db61","./mn":"7493","./mn.js":"7493","./mr":"52d8","./mr.js":"52d8","./ms":"b559","./ms-my":"7462","./ms-my.js":"7462","./ms.js":"b559","./mt":"c055","./mt.js":"c055","./my":"49e0","./my.js":"49e0","./nb":"eb1c","./nb.js":"eb1c","./ne":"0acb","./ne.js":"0acb","./nl":"7497","./nl-be":"3114","./nl-be.js":"3114","./nl.js":"7497","./nn":"9a9c","./nn.js":"9a9c","./pa-in":"c595","./pa-in.js":"c595","./pl":"801c","./pl.js":"801c","./pt":"5b08","./pt-br":"155f","./pt-br.js":"155f","./pt.js":"5b08","./ro":"05fc","./ro.js":"05fc","./ru":"90b3","./ru.js":"90b3","./sd":"99bf","./sd.js":"99bf","./se":"20d6","./se.js":"20d6","./si":"7c0b","./si.js":"7c0b","./sk":"90fc","./sk.js":"90fc","./sl":"871b","./sl.js":"871b","./sq":"b045","./sq.js":"b045","./sr":"ac81","./sr-cyrl":"a2d0","./sr-cyrl.js":"a2d0","./sr.js":"ac81","./ss":"b093","./ss.js":"b093","./sv":"12e5","./sv.js":"12e5","./sw":"38a0","./sw.js":"38a0","./ta":"a462","./ta.js":"a462","./te":"18cb","./te.js":"18cb","./tet":"0c11","./tet.js":"0c11","./tg":"d707","./tg.js":"d707","./th":"883f","./th.js":"883f","./tl-ph":"6cc0","./tl-ph.js":"6cc0","./tlh":"ab53","./tlh.js":"ab53","./tr":"e523","./tr.js":"e523","./tzl":"b192","./tzl.js":"b192","./tzm":"5604","./tzm-latn":"9f95","./tzm-latn.js":"9f95","./tzm.js":"5604","./ug-cn":"9f4f","./ug-cn.js":"9f4f","./uk":"8bd6","./uk.js":"8bd6","./ur":"9a78","./ur.js":"9a78","./uz":"4d4c","./uz-latn":"da73","./uz-latn.js":"da73","./uz.js":"4d4c","./vi":"b766","./vi.js":"b766","./x-pseudo":"2a69","./x-pseudo.js":"2a69","./yo":"fd2e","./yo.js":"fd2e","./zh-cn":"35d0","./zh-cn.js":"35d0","./zh-hk":"7b45","./zh-hk.js":"7b45","./zh-tw":"fa66","./zh-tw.js":"fa66"};function c(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}c.keys=function(){return Object.keys(n)},c.resolve=s,t.exports=c,c.id="77d2"},"855a":function(t,e,a){},"85da":function(t,e,a){},9443:function(t,e,a){t.exports=a.p+"img/home.7210ddcb.svg"},a5ef:function(t,e,a){t.exports=a.p+"img/category_active.cb2cc09f.svg"},ab98:function(t,e,a){"use strict";var n=a("6dea"),c=a.n(n);c.a},b508:function(t,e,a){t.exports=a.p+"img/home_active.cc40b6f2.svg"},c3f8:function(t,e,a){t.exports=a.p+"img/shopcart_active.3f0a2016.svg"},c739:function(t,e,a){},d151:function(t,e,a){t.exports=a.p+"img/profile_active.fd66b281.svg"},d2d9:function(t,e,a){"use strict";var n=a("855a"),c=a.n(n);c.a},e55d:function(t,e,a){t.exports=a.p+"img/profile.42d7cf12.svg"},f614:function(t,e,a){t.exports=a.p+"img/lazy-load-placeHolder.9593694a.gif"}});
//# sourceMappingURL=app.cf572878.js.map