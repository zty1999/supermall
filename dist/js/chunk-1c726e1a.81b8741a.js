(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c726e1a"],{"092a":function(t,e,n){"use strict";var o=n("f479"),r=n.n(o);r.a},"1cd8":function(t,e,n){"use strict";var o=n("d3a2"),r=n.n(o);r.a},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.794b6628.jpg"},a880:function(t,e,n){"use strict";var o=n("e6627"),r=n.n(o);r.a},b3d7:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("nav-bar",{staticClass:"home-nav"},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物街")])]),n("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],ref:"tabControl1",staticClass:"tab-control",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("better-scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0},on:{scroll:t.contentScroll,pullingUp:t.loadMore}},[n("home-swiper",{attrs:{banners:t.banners},on:{swiperImageLoad:t.swiperImageLoad}}),n("recommend-view",{attrs:{recommends:t.recommends}}),n("feature-view"),n("tab-control",{ref:"tabControl2",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("goods-list",{attrs:{goods:t.showGoods}})],1),n("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.BackTop(e)}}})],1)},r=[];function s(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){return s(t)||a(t)||i()}var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",t._l(t.banners,(function(e){return n("swiper-item",{key:e.image},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""},on:{load:t.imageLoad}})])])})),1)},u=[],f=n("dc2c"),d={name:"homeSwiper",components:{Swiper:f["a"],SwiperItem:f["b"]},data:function(){return{isLoad:!1}},props:{banners:{type:Array,default:function(){return[]}}},methods:{imageLoad:function(){this.isLoad||(this.$emit("swiperImageLoad"),this.isLoad=!0)}}},m=d,p=n("6691"),h=Object(p["a"])(m,l,u,!1,null,"4373926e",null),b=h.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},t._l(t.recommends,(function(e){return n("div",{key:e.link,staticClass:"recommend-item"},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""}}),n("div",[t._v(t._s(e.title))])])])})),0)},v=[],w={name:"RecommendView",props:{recommends:{type:Array,default:function(){return[]}}}},y=w,k=(n("1cd8"),Object(p["a"])(y,g,v,!1,null,"728fe4e6",null)),C=k.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"featureview"},[o("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[o("img",{attrs:{src:n("5cbe"),alt:""}})])])}],$={name:"FeatureView"},x=$,I=(n("092a"),Object(p["a"])(x,T,_,!1,null,"364853a4",null)),O=I.exports,S=n("a7ac"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,o){return n("div",{key:o,staticClass:"tab-control-item ",class:{active:t.currentIndex===o},on:{click:function(e){return t.itemClick(o)}}},[n("span",[t._v(t._s(e))])])})),0)},L=[],A={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},G=A,H=(n("f277"),Object(p["a"])(G,j,L,!1,null,"9bfeafc4",null)),E=H.exports,B=n("6d71"),F=n("9863"),Y=n("1bab");function M(){return Object(Y["a"])({url:"home/multidata"})}function V(t,e){return Object(Y["a"])({url:"home/data",params:{type:t,page:e}})}n("90b9");var N=n("eecb"),z={name:"home",components:{HomeSwiper:b,RecommendView:C,FeatureView:O,NavBar:S["a"],TabControl:E,GoodsList:B["a"],BetterScroll:F["a"]},mixins:[N["b"],N["a"]],data:function(){return{result:null,banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",tabOffsetTop:0,isTabFixed:!1,saveY:0}},computed:{showGoods:function(){return this.goods[this.currentType].list}},destroyed:function(){console.log("home destroyed")},activated:function(){console.log("home  activated"),this.$refs.scroll.scrollTo(0,this.saveY,0),this.$refs.scroll.refresh()},deactivated:function(){console.log(this.saveY),this.saveY=this.$refs.scroll.getScrollY(),this.$bus.$off("itemImgLoad",this.itemImgListener)},created:function(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},mounted:function(){},methods:{tabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl1.currentIndex=t,this.$refs.tabControl2.currentIndex=t},contentScroll:function(t){this.listenShowBackTop(t),this.isTabFixed=-t.y>this.tabOffsetTop},loadMore:function(){console.log("加载更多的方法"),this.getHomeGoods(this.currentType)},swiperImageLoad:function(){console.log(this.$refs.tabControl2.$el.offsetTop),this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop},getHomeMultidata:function(){var t=this;M().then((function(e){console.log(e),t.result=e,t.banners=e.data.banner.list,t.recommends=e.data.recommend.list}))},getHomeGoods:function(t){var e=this,n=this.goods[t].page+1;V(t,n).then((function(n){var o;(o=e.goods[t].list).push.apply(o,c(n.data.list)),console.log(n),e.goods[t].page+=1,e.$refs.scroll.finishPullUp()}))}}},J=z,R=(n("a880"),Object(p["a"])(J,o,r,!1,null,"9fbbe974",null));e["default"]=R.exports},c0fc:function(t,e,n){},d3a2:function(t,e,n){},e6627:function(t,e,n){},f277:function(t,e,n){"use strict";var o=n("c0fc"),r=n.n(o);r.a},f479:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1c726e1a.81b8741a.js.map