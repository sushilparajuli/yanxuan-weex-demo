// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=130)}({0:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},1:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=d[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(o(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(o(n.parts[a]));d[n.id]={id:n.id,refs:1,parts:i}}}}function a(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return x;r.parentNode.removeChild(r)}if(v){var o=p++;r=u||(u=a()),e=i.bind(null,r,o,!1),n=i.bind(null,r,o,!0)}else r=a(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function i(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function s(t,e){var n=e.css,r=e.media,a=e.sourceMap;if(r&&t.setAttribute("media",r),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),d={},f=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,p=0,h=!1,x=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var a=c(t,e);return r(a),function(e){for(var n=[],o=0;o<a.length;o++){var i=a[o],s=d[i.id];s.refs--,n.push(s)}e?(a=c(t,e),r(a)):a=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete d[s.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},13:function(t,e,n){"use strict";function r(t){s||n(28)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(17),o=n.n(a),i=n(24),s=!1,l=n(2),c=r,d=l(o.a,i.a,c,"data-v-788ff801",null);d.options.__file="src/components/Header2.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] Header2.vue: functional components are not supported with templates, they should use render functions."),e.default=d.exports},130:function(t,e,n){"use strict";var r=n(70);r.el="#root",new Vue(r)},17:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title","leftBtn","rightBtn"],data:function(){return{}},methods:{}}},2:function(t,e){t.exports=function(t,e,n,r,a){var o,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,i=t.default);var l="function"==typeof i?i.options:i;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),r&&(l._scopeId=r);var c;if(a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):n&&(c=n),c){var d=l.functional,f=d?l.render:l.beforeCreate;d?l.render=function(t,e){return c.call(e),f(t,e)}:l.beforeCreate=f?[].concat(f,c):[c]}return{esModule:o,exports:i,options:l}}},20:function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"\n.wrapper[data-v-788ff801]{\n    position: fixed;\n    top: 0;\n    left: 0;right: 0;\n    height: 114px;\n    padding-top: 44px;\n    background-color: #fafafa;\n    opacity: .99;\n    z-index: 101;\n    flex-wrap: nowrap;\n    flex-direction: row;\n    justify-content: space-around;\n    border-bottom-width: 1px;\n    border-bottom-color: #d9d9d9;\n}\n.tlt[data-v-788ff801]{\n    flex: 1;\n    font-size: 36px;\n    padding-top: 10px;\n    color:#333;\n    text-align: center;\n}\n.left[data-v-788ff801],.right[data-v-788ff801]{\n    height: 80px;\n    width: 120px;\n    padding-top:10px;\n}\n.leftTxt[data-v-788ff801],.rightTxt[data-v-788ff801]{\n    font-size: 30px;\n    text-align: center;\n}\n",""])},24:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"left"},[t.leftBtn?n("text",{staticClass:"leftTxt"},[t._v(t._s(t.leftBtn.name))]):t._e()]),t._v(" "),n("text",{staticClass:"tlt"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"right"},[t.rightBtn?n("text",{staticClass:"rightTxt"},[t._v(t._s(t.rightBtn.name))]):t._e()])])},a=[];r._withStripped=!0;var o={render:r,staticRenderFns:a};e.a=o},28:function(t,e,n){var r=n(20);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("72033ed5",r,!1)},3:function(t,e){t.exports=function(t,e){for(var n=[],r={},a=0;a<e.length;a++){var o=e[a],i=o[0],s=o[1],l=o[2],c=o[3],d={id:t+":"+a,css:s,media:l,sourceMap:c};r[i]?r[i].parts.push(d):n.push(r[i]={id:i,parts:[d]})}return n}},31:function(t,e,n){"use strict";function r(t){s||n(61)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(38),o=n.n(a),i=n(54),s=!1,l=n(2),c=r,d=l(o.a,i.a,c,"data-v-5c67df3b",null);d.options.__file="src/components/Block4.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] Block4.vue: functional components are not supported with templates, they should use render functions."),e.default=d.exports},32:function(t,e,n){"use strict";function r(t){s||n(62)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(39),o=n.n(a),i=n(55),s=!1,l=n(2),c=r,d=l(o.a,i.a,c,"data-v-5c75f6bc",null);d.options.__file="src/components/Block5.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] Block5.vue: functional components are not supported with templates, they should use render functions."),e.default=d.exports},38:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["topics"],data:function(){return{}},methods:{}}},39:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),a=function(t){return t&&t.__esModule?t:{default:t}}(r),o=weex.requireModule("navigator");e.default={props:["article","url"],data:function(){return{}},methods:{jumpWeb:function(t){t||(t="http://m.you.163.com/topic/v1/pub/XLymbwEO0J.html");var e=this.$getConfig().bundleUrl;o.push({url:a.default.setBundleUrl(e,"page/web.js?weburl="+t),animated:"true"})}}}},4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={initIconFont:function(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:"url('http://at.alicdn.com/t/font_404010_jgmnakd1zizr529.ttf')"})},setBundleUrl:function(t,e){var n=t,r="",a="",o=void 0,i=n.indexOf("your_current_IP")>=0||n.indexOf("file://assets/")>=0,s=n.indexOf("file:///")>=0&&n.indexOf("WeexDemo.app")>0;if(i)o="file://assets/dist";else if(s)o=n.substring(0,n.lastIndexOf("/")+1);else{var l=/\/\/([^\/]+?)\//.exec(n),c=/\/\/[^\/]+\/([^\/]+)\//.exec(n);l&&l.length>=2&&(r=l[1]),c&&c.length>=2&&(a=c[1]),o="http://"+r+"/"}return("undefined"==typeof navigator||"Mozilla"!==navigator.appCodeName&&"Gecko"!==navigator.product?o+(a?a+"/":""):"web"===a||"dist"===a?"./index.html?page=/dist/":"./index.html?page=")+e},getUrlSearch:function(t,e){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),r=t.slice(t.indexOf("?")+1).match(n);if(null!=r)try{return decodeURIComponent(r[2])}catch(t){return null}return null}};e.default=r},47:function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"\n.iconfont[data-v-5c67df3b] {\n    font-family:iconfont;\n}\n.wrapper[data-v-5c67df3b]{\n    background-color: #fff;\n}\n.tp-box[data-v-5c67df3b]{\n    height: 200px;\n    padding: 20px;\n}\n.i-tp[data-v-5c67df3b]{\n    width: 275px;\n    height: 150px;\n    margin: 10px;\n}\n.tp-img[data-v-5c67df3b]{\n    position: absolute;\n    top:0;\n    left: 0;\n    width: 275px;\n    height: 150px;\n    border-radius: 10px;\n    background-color: #f4f4f4;\n}\n.tp-name[data-v-5c67df3b]{\n    font-size: 28px;\n    margin-left: 20px;\n    margin-right: 20px;\n    margin-top: 57px;\n    overflow: hidden;\n    text-align: center;\n    color:#fff;\n    lines:1;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n",""])},48:function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"\n.iconfont[data-v-5c75f6bc] {\n    font-family:iconfont;\n}\n.wrapper[data-v-5c75f6bc]{\n    background-color: #fff;\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n.auther-box[data-v-5c75f6bc]{\n    height: 75px;\n    padding-top: 10px;\n    padding-left: 25px;\n    display: flex;\n    flex-wrap: nowrap;\n    flex-direction: row;\n}\n.auther-img[data-v-5c75f6bc]{\n    height: 58px;\n    width: 58px;\n    border-radius: 58px;\n}\n.auther-name[data-v-5c75f6bc]{\n    flex:1;\n    font-size: 26px;\n    height: 58px;\n    padding-left: 20px;\n    padding-top: 10px;\n}\n.img-box[data-v-5c75f6bc]{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n}\n.main-img[data-v-5c75f6bc]{\n    flex: 1;\n    height: 380px;\n}\n.sub-imgs-box[data-v-5c75f6bc]{\n    width: 190px;\n    height: 380px;\n}\n.sub-img[data-v-5c75f6bc]{\n    height: 188px;\n    width: 190px;\n    margin-left: 3px;\n    margin-bottom: 3px;\n}\n.tlt-box[data-v-5c75f6bc]{\n    height: 80px;\n    padding: 20px;\n    display: flex;\n    flex-wrap: nowrap;\n    flex-direction: row;\n}\n.tlt[data-v-5c75f6bc]{\n    font-size: 34px;\n    flex: 1;\n    overflow: hidden;\n    lines:1;\n    text-overflow: ellipsis;\n}\n.price[data-v-5c75f6bc]{\n    font-size: 34px;\n    color:#b4282d;\n    padding-left: 10px;\n}\n.info[data-v-5c75f6bc]{\n    font-size: 26px;\n    padding-left: 20px;\n    padding-right: 20px;\n    overflow: hidden;\n    lines:2;\n    text-overflow: ellipsis;\n    color:#666;\n}\n",""])},5:function(t,e,n){"use strict";function r(t){s||n(9)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),o=n.n(a),i=n(8),s=!1,l=n(2),c=r,d=l(o.a,i.a,c,"data-v-7e69b8b7",null);d.options.__file="src/components/refresh.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] refresh.vue: functional components are not supported with templates, they should use render functions."),e.default=d.exports},54:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("scroller",{staticClass:"tp-box",attrs:{"scroll-direction":"horizontal","flex-direction":"row","show-scrollbar":"false"}},t._l(t.topics,function(e){return n("div",{staticClass:"i-tp"},[n("image",{staticClass:"tp-img",attrs:{resize:"cover",src:e.img}}),t._v(" "),n("text",{staticClass:"tp-name"},[t._v(t._s(e.name))])])}))],1)},a=[];r._withStripped=!0;var o={render:r,staticRenderFns:a};e.a=o},55:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",on:{click:function(e){t.jumpWeb(t.url)}}},[n("div",{staticClass:"auther-box"},[n("image",{staticClass:"auther-img",attrs:{resize:"cover",src:t.article.autherImg}}),t._v(" "),n("text",{staticClass:"auther-name"},[t._v(t._s(t.article.auther))])]),t._v(" "),n("div",{staticClass:"img-box"},["string"==typeof t.article.img?[n("image",{staticClass:"main-img",attrs:{resize:"cover",src:t.article.img}})]:"object"==typeof t.article.img&&t.article.img.length>=3?[n("image",{staticClass:"main-img",attrs:{resize:"cover",src:t.article.img[0]}}),t._v(" "),n("div",{staticClass:"sub-imgs-box"},[n("image",{staticClass:"sub-img",attrs:{resize:"cover",src:t.article.img[1]}}),t._v(" "),n("image",{staticClass:"sub-img",attrs:{resize:"cover",src:t.article.img[2]}})])]:t._e()],2),t._v(" "),n("div",{staticClass:"tlt-box"},[n("text",{staticClass:"tlt"},[t._v(t._s(t.article.tlt))]),t._v(" "),t.article.price?n("text",{staticClass:"price"},[t._v(t._s(t.article.price)+"元起")]):t._e()]),t._v(" "),n("text",{staticClass:"info"},[t._v(t._s(t.article.info))])])},a=[];r._withStripped=!0;var o={render:r,staticRenderFns:a};e.a=o},6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=weex.requireModule("animation"),a=weex.requireModule("modal");e.default={props:[],data:function(){return{refreshing:!1,loadingAR:[{ref:"lTxt1",p:[-77,-75],delay:0},{ref:"lTxt2",p:[-47,-81],delay:50},{ref:"lTxt3",p:[-15,-88],delay:100},{ref:"lTxt4",p:[12,-90],delay:150},{ref:"lTxt5",p:[-5,-49],delay:200},{ref:"lTxt6",p:[25,-55],delay:250},{ref:"lTxt7",p:[55,-61],delay:300},{ref:"lTxt8",p:[85,-61],delay:350}]}},methods:{loadingAni:function(){for(var t=0;t<this.loadingAR.length;t++)this.shake(this.$refs[this.loadingAR[t].ref],this.loadingAR[t].p[0],this.loadingAR[t].p[1],3,1,200,this.loadingAR[t].delay)},loadingAniDown:function(){for(var t=0;t<this.loadingAR.length;t++)this.shake(this.$refs[this.loadingAR[t].ref],0,0,0,0,200)},shake:function(t,e,n,a,o,i,s){r.transition(t,{styles:{transform:"translate("+(e-0)+"px,"+(n-a*o)+"px)"},duration:500|i,timingFunction:"ease-out",delay:0|s},function(){this.refreshing&&this.shake(t,e,n,a,-1*o)}.bind(this))},onrefresh:function(t){var e=this;a.toast({message:"refresh",duration:1}),this.loadingAni(),this.refreshing=!0,setTimeout(function(){e.refreshing=!1,e.loadingAniDown()},1300)},onpullingdown:function(t){}}}},61:function(t,e,n){var r=n(47);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("e042c996",r,!1)},62:function(t,e,n){var r=n(48);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("77b03517",r,!1)},7:function(t,e,n){e=t.exports=n(0)(),e.push([t.i,'\n.u-refresh[data-v-7e69b8b7]{\n    height: 170px;\n    width: 750px;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n}\n.loading-bg[data-v-7e69b8b7]{\n    position: absolute;\n    left: 250px;\n    margin-top: 40px;\n    width: 250px;\n    height: 120px;\n}\n.l-txt-box[data-v-7e69b8b7]{\n    height: 106px;\n    width: 200px;\n    overflow: hidden;\n}\n.l-txt[data-v-7e69b8b7]{\n    height: 30px;\n    width: 30px;\n    font-size: 25px;\n    position: absolute;\n    top: 105px;\n    left: 87px;\n    color:#666;\n}\n.box[data-v-7e69b8b7]{margin-top:50px;width:100px;height:70px;transform-style:preserve-3d; transform:rotateX(-10deg) scale(0.7) ;perspective:300px;\n}\n.t[data-v-7e69b8b7]{position:absolute;width:100px;height:70px;background-color:#e6d7c9;\n}\n.top-1[data-v-7e69b8b7]{ height:100px;transform:rotateX(90deg) rotateY(20deg);left:-50px; background: none;\n}\n.g1[data-v-7e69b8b7]{width: 50%;height: 100%;background:#e6d7c9;\n}\n.top-2[data-v-7e69b8b7]{ height:100px;transform:rotateX(90deg) rotateY(160deg);left:50px; background: none;\n}\n.bottom[data-v-7e69b8b7]{ height:100px;transform:rotateX(-90deg) translateZ(70px);background-color: #dbc8b8;\n}\n.left[data-v-7e69b8b7]{transform:rotateY(-90deg) translateZ(50px) translateY(50px);background-color: #dbc8b8;\n}\n.right[data-v-7e69b8b7]{transform:rotateY(90deg) translateZ(50px) translateY(50px);background-color: #dbc8b8;\n}\n.back[data-v-7e69b8b7]{transform:rotateY(180deg) translateZ(50px) translateY(50px); background-color: #cdb69e;\n}\n.front[data-v-7e69b8b7]{transform:translateZ(50px) translateY(50px);\n}\n.box-txt[data-v-7e69b8b7]{text-align:center;line-height:70px;font-size:30px;font-family: "\\6977\\4F53","\\6977\\4F53_GB2312";color:#a49a6f;\n}\n\n',""])},70:function(t,e,n){"use strict";function r(t){s||n(95)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(76),o=n.n(a),i=n(88),s=!1,l=n(2),c=r,d=l(o.a,i.a,c,"data-v-9a1f236e",null);d.options.__file="src/views/topic.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] topic.vue: functional components are not supported with templates, they should use render functions."),e.default=d.exports},76:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),o=r(a),i=n(13),s=r(i),l=n(5),c=r(l),d=n(31),f=r(d),u=n(32),p=r(u),h=weex.requireModule("navigator");e.default={data:function(){return{topics:[{name:"严选look",img:"https://yanxuan.nosdn.127.net/15030393722652401.jpg"},{name:"严选推荐",img:"https://yanxuan.nosdn.127.net/d943675462a06f817d33062d4eb059f5.jpg"},{name:"挑款师推荐",img:"http://yanxuan.nosdn.127.net/437cc656ff529f8f84db6efc48df9bf4.png"},{name:"丁磊私物推荐",img:"https://yanxuan.nosdn.127.net/1de4da49367dd7c01af1f7a2b23b0237.jpg"}],articles:[{auther:"严选推荐",autherImg:"http://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64",tlt:"年中扫一扫，下半年运势好",info:"6个家庭清洁小技巧",price:"6.9",img:"http://yanxuan.nosdn.127.net/5a1df92d48fa3214bec9bb40ab067683.jpg"},{auther:"服装组：小服",autherImg:"https://yanxuan.nosdn.127.net/15041772608140418.png?imageView&thumbnail=64y64",tlt:"小姐姐们的运动衣提前上架啦",info:"前两天推男式运动T恤时，就有小伙伴在专题评论里，问小姐姐们的运动衣在哪儿。大家的...",price:"",img:["https://yanxuan.nosdn.127.net/15041772896010423.jpg","https://yanxuan.nosdn.127.net/15041772789070419.jpg","https://yanxuan.nosdn.127.net/15041772808640420.jpg"]},{auther:"居家组：朵朵",autherImg:"https://yanxuan.nosdn.127.net/15040896357740404.png?imageView&thumbnail=64y64",tlt:"初秋，最想用它来裸睡",info:"连续下了几场雨，杭州的早晚，已透出几丝凉意。再睡席子便有点凉了，于是周末从柜子翻...",price:"",img:["https://yanxuan.nosdn.127.net/15040927525260414.jpg","https://yanxuan.nosdn.127.net/15040927586650416.jpg","https://yanxuan.nosdn.127.net/15040927556820415.jpg"]},{auther:"严选推荐",autherImg:"http://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64",tlt:"不为繁华易匠心",info:"那些值得珍藏的严选手作好物",price:"29",img:"http://yanxuan.nosdn.127.net/4d72145e48e65ee3deaf2e1403e6ec73.jpg"}]}},components:{header2:s.default,refresher:c.default,"block-4":f.default,"block-5":p.default},created:function(){o.default.initIconFont()},methods:{jumpWeb:function(t){var e=this.$getConfig().bundleUrl;h.push({url:o.default.setBundleUrl(e,"page/web.js?weburl="+t),animated:"true"})}}}},8:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("refresh",{staticClass:"u-refresh",attrs:{display:t.refreshing?"show":"hide"},on:{refresh:t.onrefresh,pullingdown:t.onpullingdown}},[n("image",{staticClass:"loading-bg",attrs:{resize:"contain",src:"http://doc.zwwill.com/yanxuan/imgs/yxbox-bg.png?v5"}}),t._v(" "),n("div",{staticClass:"l-txt-box"},[n("text",{ref:"lTxt1",staticClass:"l-txt l-txt-1"},[t._v("好")]),t._v(" "),n("text",{ref:"lTxt2",staticClass:"l-txt l-txt-2"},[t._v("的")]),t._v(" "),n("text",{ref:"lTxt3",staticClass:"l-txt l-txt-3"},[t._v("生")]),t._v(" "),n("text",{ref:"lTxt4",staticClass:"l-txt l-txt-4"},[t._v("活")]),t._v(" "),n("text",{ref:"lTxt5",staticClass:"l-txt l-txt-5"},[t._v("没")]),t._v(" "),n("text",{ref:"lTxt6",staticClass:"l-txt l-txt-6"},[t._v("那")]),t._v(" "),n("text",{ref:"lTxt7",staticClass:"l-txt l-txt-7"},[t._v("么")]),t._v(" "),n("text",{ref:"lTxt8",staticClass:"l-txt l-txt-8"},[t._v("贵")])])])},a=[];r._withStripped=!0;var o={render:r,staticRenderFns:a};e.a=o},82:function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"\n.iconfont[data-v-9a1f236e] {\n    font-family:iconfont;\n}\n.wrapper[data-v-9a1f236e]{\n    background-color: #f4f4f4;\n}\n.main-list[data-v-9a1f236e]{\n    margin-top: 113px;\n    margin-bottom: 90px;\n}\n.cell-button[data-v-9a1f236e]{\n    padding-bottom: 18px;\n}\n\n",""])},88:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("header2",{attrs:{title:"专题"}}),t._v(" "),n("scroller",{staticClass:"main-list"},[n("refresher"),t._v(" "),n("div",{staticClass:"cell-button",on:{click:function(e){t.jumpWeb("http://m.you.163.com/topic/v1/look/list")}}},[n("block-4",{attrs:{topics:t.topics}})],1),t._v(" "),t._l(t.articles,function(t){return n("div",{staticClass:"cell-button"},[n("block-5",{attrs:{article:t,url:""}})],1)})],2)],1)},a=[];r._withStripped=!0;var o={render:r,staticRenderFns:a};e.a=o},9:function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("5a6e010e",r,!1)},95:function(t,e,n){var r=n(82);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("376fd394",r,!1)}});