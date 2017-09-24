// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=103)}({0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={initIconFont:function(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:"url('http://at.alicdn.com/t/font_404010_jgmnakd1zizr529.ttf')"})},setBundleUrl:function(t,e){var n=t,r="",a="",i=void 0,o=n.indexOf("your_current_IP")>=0||n.indexOf("file://assets/")>=0,s=n.indexOf("file:///")>=0&&n.indexOf("WeexDemo.app")>0;if(o)i="file://assets/dist";else if(s)i=n.substring(0,n.lastIndexOf("/")+1);else{var l=/\/\/([^\/]+?)\//.exec(n),c=/\/\/[^\/]+\/([^\/]+)\//.exec(n);l&&l.length>=2&&(r=l[1]),c&&c.length>=2&&(a=c[1]),i="http://"+r+"/"}return("undefined"==typeof navigator||"Mozilla"!==navigator.appCodeName&&"Gecko"!==navigator.product?i+(a?a+"/":""):"web"===a||"dist"===a?"./index.html?page=/dist/":"./index.html?page=")+e},getUrlSearch:function(t,e){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),r=t.slice(t.indexOf("?")+1).match(n);if(null!=r)try{return decodeURIComponent(r[2])}catch(t){return null}return null}};e.default=r},1:function(t,e,n){var r,a,i=[];i.push(n(3)),r=n(2);var o=n(4);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a=r=r.default),"function"==typeof a&&(a=a.options),a.__file="/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/src/components/refresh.vue",a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-07fbc0f7",a.style=a.style||{},i.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,i),t.exports=r},103:function(t,e,n){var r,a,i=[];i.push(n(50)),r=n(43);var o=n(56);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a=r=r.default),"function"==typeof a&&(a=a.options),a.__file="/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/src/views/class.vue",a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-2bc0bdd2",a.style=a.style||{},i.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,i),t.exports=r,t.exports.el="true",new Vue(t.exports)},2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=weex.requireModule("animation"),a=weex.requireModule("modal");e.default={props:[],data:function(){return{refreshing:!1,loadingAR:[{ref:"lTxt1",p:[-77,-75],delay:0},{ref:"lTxt2",p:[-47,-81],delay:50},{ref:"lTxt3",p:[-15,-88],delay:100},{ref:"lTxt4",p:[12,-90],delay:150},{ref:"lTxt5",p:[-5,-49],delay:200},{ref:"lTxt6",p:[25,-55],delay:250},{ref:"lTxt7",p:[55,-61],delay:300},{ref:"lTxt8",p:[85,-61],delay:350}]}},methods:{loadingAni:function(){for(var t=0;t<this.loadingAR.length;t++)this.shake(this.$refs[this.loadingAR[t].ref],this.loadingAR[t].p[0],this.loadingAR[t].p[1],3,1,200,this.loadingAR[t].delay)},loadingAniDown:function(){for(var t=0;t<this.loadingAR.length;t++)this.shake(this.$refs[this.loadingAR[t].ref],0,0,0,0,200)},shake:function(t,e,n,a,i,o,s){r.transition(t,{styles:{transform:"translate("+(e-0)+"px,"+(n-a*i)+"px)"},duration:500|o,timingFunction:"ease-out",delay:0|s},function(){this.refreshing&&this.shake(t,e,n,a,-1*i)}.bind(this))},onrefresh:function(t){var e=this;a.toast({message:"refresh",duration:1}),this.loadingAni(),this.refreshing=!0,setTimeout(function(){e.refreshing=!1,e.loadingAniDown()},1300)},onpullingdown:function(t){}}}},24:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},created:function(){},methods:{}}},28:function(t,e){t.exports={iconfont:{fontFamily:"iconfont"},wrapper:{position:"fixed",top:0,left:0,right:0,height:114,paddingTop:44,display:"flex",flexWrap:"nowrap",flexDirection:"row",justifyContent:"space-around",zIndex:101,backgroundColor:"#fafafa",opacity:.99,borderBottomWidth:1,borderBottomColor:"#d9d9d9"},search:{flex:1,height:60,fontSize:26,paddingTop:13,backgroundColor:"#ededed",borderRadius:8,marginRight:26,marginLeft:26,textAlign:"center",color:"#666666"}}},3:function(t,e){t.exports={"u-refresh":{height:170,width:750,flexDirection:"row",flexWrap:"nowrap",justifyContent:"center"},"loading-bg":{position:"absolute",left:250,marginTop:40,width:250,height:120},"l-txt-box":{height:106,width:200,overflow:"hidden"},"l-txt":{height:30,width:30,fontSize:25,position:"absolute",top:105,left:87,color:"#666666"},box:{marginTop:50,width:100,height:70,transformStyle:"preserve-3d",transform:"rotateX(-10deg) scale(0.7)",perspective:300},t:{position:"absolute",width:100,height:70,backgroundColor:"#e6d7c9"},"top-1":{height:100,transform:"rotateX(90deg) rotateY(20deg)",left:-50,background:"none"},g1:{width:50,height:100,background:"#e6d7c9"},"top-2":{height:100,transform:"rotateX(90deg) rotateY(160deg)",left:50,background:"none"},bottom:{height:100,transform:"rotateX(-90deg) translateZ(70px)",backgroundColor:"#dbc8b8"},left:{transform:"rotateY(-90deg) translateZ(50px) translateY(50px)",backgroundColor:"#dbc8b8"},right:{transform:"rotateY(90deg) translateZ(50px) translateY(50px)",backgroundColor:"#dbc8b8"},back:{transform:"rotateY(180deg) translateZ(50px) translateY(50px)",backgroundColor:"#cdb69e"},front:{transform:"translateZ(50px) translateY(50px)"},"box-txt":{textAlign:"center",lineHeight:70,fontSize:30,fontFamily:'"楷体","楷体_GB2312"',color:"#a49a6f"}}},35:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("text",{staticClass:["search","iconfont"]},[t._v(" 搜索商品，共8888款好物")])])}]},t.exports.render._withStripped=!0},4:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("refresh",{staticClass:["u-refresh"],attrs:{display:t.refreshing?"show":"hide"},on:{refresh:t.onrefresh,pullingdown:t.onpullingdown}},[n("image",{staticClass:["loading-bg"],attrs:{resize:"contain",src:"http://doc.zwwill.com/yanxuan/imgs/yxbox-bg.png?v5"}}),n("div",{staticClass:["l-txt-box"]},[n("text",{ref:"lTxt1",staticClass:["l-txt","l-txt-1"]},[t._v("好")]),n("text",{ref:"lTxt2",staticClass:["l-txt","l-txt-2"]},[t._v("的")]),n("text",{ref:"lTxt3",staticClass:["l-txt","l-txt-3"]},[t._v("生")]),n("text",{ref:"lTxt4",staticClass:["l-txt","l-txt-4"]},[t._v("活")]),n("text",{ref:"lTxt5",staticClass:["l-txt","l-txt-5"]},[t._v("没")]),n("text",{ref:"lTxt6",staticClass:["l-txt","l-txt-6"]},[t._v("那")]),n("text",{ref:"lTxt7",staticClass:["l-txt","l-txt-7"]},[t._v("么")]),n("text",{ref:"lTxt8",staticClass:["l-txt","l-txt-8"]},[t._v("贵")])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},43:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),i=r(a),o=n(1),s=r(o),l=n(64),c=r(l),d=weex.requireModule("navigator");e.default={components:{refresher:s.default,header3:c.default},data:function(){return{classes:["推荐区","家装区","居家","餐厨","配件","服装","电器","洗护","杂货","饮食","婴童","志趣"],subclasses:[{name:"中秋系列",img:"http://yanxuan.nosdn.127.net/82ae05c313b93355239ca1795917a5ac.png?imageView&quality=85&thumbnail=144x144"},{name:"超值套装",img:"http://yanxuan.nosdn.127.net/bd6f7deba69c8af2f6bb80025d7b98de.png?imageView&quality=85&thumbnail=144x144"},{name:"热卖爆品",img:"http://yanxuan.nosdn.127.net/c3418cc60d3968263c5b2ac7fb153c34.png?imageView&quality=85&thumbnail=144x144"},{name:"999+好评",img:"http://yanxuan.nosdn.127.net/87d1cb1bc196c5775b17788aea1c2239.png?imageView&quality=85&thumbnail=144x144"},{name:"boss推荐",img:"http://yanxuan.nosdn.127.net/fbee769af73c0f63f6120eb27ff3ce96.png?imageView&quality=85&thumbnail=144x144"},{name:"明星推荐",img:"http://yanxuan.nosdn.127.net/7dea8f7e0e706804c3307504e2e7c463.png?imageView&quality=85&thumbnail=144x144"},{name:"黑凤梨系列",img:"http://yanxuan.nosdn.127.net/a4a14669ce1fa497aece9a20c669196e.png?imageView&quality=85&thumbnail=144x144"},{name:"趣味粉系列",img:"http://yanxuan.nosdn.127.net/87fc01e5876482d521ecca13aea42653.png?imageView&quality=85&thumbnail=144x144"}]}},created:function(){i.default.initIconFont()},methods:{jumpWeb:function(t){var e=this.$getConfig().bundleUrl;d.push({url:i.default.setBundleUrl(e,"page/web.js?weburl="+t),animated:"true"})}}}},50:function(t,e){t.exports={iconfont:{fontFamily:"iconfont"},wrapper:{backgroundColor:"#f4f4f4",display:"flex",flexWrap:"nowrap",flexDirection:"row"},"class-list":{width:162,marginTop:113,marginBottom:90,paddingTop:20,borderRightWidth:1,borderRightColor:"#d9d9d9",backgroundColor:"#ffffff"},"class-txt":{fontSize:28,marginTop:22,marginBottom:26,marginLeft:10,marginRight:10,textAlign:"center",color:"#333333"},"main-list":{flex:1,display:"flex",flexDirection:"column",flexWrap:"nowrap",marginTop:113,marginBottom:90,backgroundColor:"#ffffff"},"ad-img":{width:532,height:194,borderRadius:6,margin:28},"sub-tlt":{textAlign:"center",fontSize:24,color:"#333333",marginTop:10,marginBottom:30},"sub-box":{paddingLeft:26,display:"flex",flexDirection:"row",flexWrap:"wrap"},"sub-i":{width:178,height:200},"i-img":{width:150,marginLeft:14,marginRight:14,height:150},"i-name":{fontSize:22,textAlign:"center"}}},56:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("header3"),n("div",{staticClass:["class-list"]},[n("scroller",t._l(t.classes,function(e){return n("text",{staticClass:["class-txt"]},[t._v(t._s(e))])}))]),n("scroller",{staticClass:["main-list"],attrs:{offsetAccuracy:"1000px"}},[n("refresh",{staticClass:["refresh"],attrs:{display:"hide"}},[n("text",{staticClass:["indicator"]},[t._v("Refreshing ...")])]),n("image",{staticClass:["ad-img"],attrs:{resize:"cover",src:"http://yanxuan.nosdn.127.net/3ebd7addcc0d101d116052a57cec2f16.png"}}),n("text",{staticClass:["sub-tlt"]},[t._v(" --- 推荐区分类 --- ")]),n("div",{staticClass:["sub-box"]},t._l(t.subclasses,function(e){return n("div",{staticClass:["sub-i"],on:{click:function(e){t.jumpWeb("http%3A%2F%2Fm.you.163.com%2Fitem%2Flist%3FcategoryId%3D1022001%26subCategoryId%3D1040031")}}},[n("image",{staticClass:["i-img"],attrs:{resize:"contain",src:e.img}}),n("text",{staticClass:["i-name"]},[t._v(t._s(e.name))])])}))],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},64:function(t,e,n){var r,a,i=[];i.push(n(28)),r=n(24);var o=n(35);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a=r=r.default),"function"==typeof a&&(a=a.options),a.__file="/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/src/components/Header3.vue",a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-023017c2",a.style=a.style||{},i.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,i),t.exports=r}});