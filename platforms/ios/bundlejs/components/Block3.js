// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=90)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={initIconFont:function(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:"url('http://at.alicdn.com/t/font_404010_jgmnakd1zizr529.ttf')"})},setBundleUrl:function(e,t){var n=e,o="",i="",r=void 0,s=n.indexOf("your_current_IP")>=0||n.indexOf("file://assets/")>=0,a=n.indexOf("file:///")>=0&&n.indexOf("WeexDemo.app")>0;if(s)r="file://assets/dist";else if(a)r=n.substring(0,n.lastIndexOf("/")+1);else{var d=/\/\/([^\/]+?)\//.exec(n),l=/\/\/[^\/]+\/([^\/]+)\//.exec(n);d&&d.length>=2&&(o=d[1]),l&&l.length>=2&&(i=l[1]),r="http://"+o+"/"}return("undefined"==typeof navigator||"Mozilla"!==navigator.appCodeName&&"Gecko"!==navigator.product?r+(i?i+"/":""):"web"===i||"dist"===i?"./index.html?page=/dist/":"./index.html?page=")+t},getUrlSearch:function(e,t){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),o=e.slice(e.indexOf("?")+1).match(n);if(null!=o)try{return decodeURIComponent(o[2])}catch(e){return null}return null}};t.default=o},11:function(e,t){e.exports={iconfont:{fontFamily:"iconfont"},wrapper:{backgroundColor:"#ffffff",paddingBottom:10,paddingTop:26,width:750},tlt:{textAlign:"center",color:"#333333",width:750,padding:10,fontSize:30},"gb-box":{padding:16,display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"},"i-gd":{width:350,height:510,marginBottom:20},"gd-img":{width:350,height:350,backgroundColor:"#f4f4f4"},"gd-tlt":{fontSize:28,color:"#333333",width:350,marginTop:15,overflow:"hidden",lines:1,whiteSpace:"nowrap",textOverflow:"ellipsis"},"gd-info":{display:"block",fontSize:28,width:350,height:65,paddingLeft:10,paddingRight:10,paddingTop:15,paddingBottom:15,color:"#9F8A60",backgroundColor:"#F1ECE2",overflow:"hidden",lines:1,whiteSpace:"nowrap",textOverflow:"ellipsis"},"gd-price":{fontSize:28,width:350,marginTop:10,color:"#b4282d",overflow:"hidden",lines:1,whiteSpace:"nowrap",textOverflow:"ellipsis"}}},15:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrapper"]},[n("text",{staticClass:["tlt"]},[e._v("猜你喜欢")]),n("div",{staticClass:["gb-box"]},e._l(e.goods,function(t){return n("div",{staticClass:["i-gd"],on:{click:function(n){e.jumpWeb(t.url)}}},[n("image",{staticClass:["gd-img"],attrs:{resize:"cover",src:t.img}}),n("text",{staticClass:["gd-info"]},[e._v(e._s(t.info))]),n("text",{staticClass:["gd-tlt"]},[e._v(e._s(t.tlt))]),n("text",{staticClass:["gd-price"]},[e._v("¥"+e._s(t.price))])])}))])},staticRenderFns:[]},e.exports.render._withStripped=!0},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o),r=weex.requireModule("navigator");t.default={props:["newGoods","hotGoods","head","hasMore","goods"],data:function(){return{}},methods:{jumpWeb:function(e){e||(e="http%3A%2F%2Fm.you.163.com%2Fitem%2Fdetail%3Fid%3D1009024%23%2F%3F_k%3Dfakdg7");var t=this.$getConfig().bundleUrl;r.push({url:i.default.setBundleUrl(t,"page/web.js?weburl="+e),animated:"true"})}}}},90:function(e,t,n){var o,i,r=[];r.push(n(11)),o=n(6);var s=n(15);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=o=o.default),"function"==typeof i&&(i=i.options),i.__file="/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/src/components/Block3.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-5045b77a",i.style=i.style||{},r.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),e.exports=o,e.exports.el="true",new Vue(e.exports)}});