/*! vue-ydui v0.3.2 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Vue")):"function"==typeof define&&define.amd?define(["Vue"],t):"object"==typeof exports?exports.ydui=t(require("Vue")):e.ydui=t(e.Vue)}(this,function(e){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}({0:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.KeyBoard=void 0;var n=r(71),i=o(n);t.KeyBoard=i.default},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(o[i]=!0)}for(n=0;n<t.length;n++){var s=t[n];"number"==typeof s[0]&&o[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},2:function(e,t,r){function o(e,t){for(var r=0;r<e.length;r++){var o=e[r],n=f[o.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](o.parts[i]);for(;i<o.parts.length;i++)n.parts.push(l(o.parts[i],t))}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(l(o.parts[i],t));f[o.id]={id:o.id,refs:1,parts:s}}}}function n(e){for(var t=[],r={},o=0;o<e.length;o++){var n=e[o],i=n[0],s=n[1],a=n[2],l=n[3],d={css:s,media:a,sourceMap:l};r[i]?r[i].parts.push(d):t.push(r[i]={id:i,parts:[d]})}return t}function i(e,t){var r=b(),o=g[g.length-1];if("top"===e.insertAt)o?o.nextSibling?r.insertBefore(t,o.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e,t){var r,o,n;if(t.singleton){var i=h++;r=m||(m=a(t)),o=d.bind(null,r,i,!1),n=d.bind(null,r,i,!0)}else r=a(t),o=c.bind(null,r),n=function(){s(r)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}function d(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=k(t,n);else{var i=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function c(e,t){var r=t.css,o=t.media,n=t.sourceMap;if(o&&e.setAttribute("media",o),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=u(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,h=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=n(e);return o(r,t),function(e){for(var i=[],s=0;s<r.length;s++){var a=r[s],l=f[a.id];l.refs--,i.push(l)}if(e){var d=n(e);o(d,t)}for(var s=0;s<i.length;s++){var l=i[s];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete f[l.id]}}}};var k=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(){t||(t=!0,document.addEventListener("touchmove",e))},unlock:function(){t=!1,document.removeEventListener("touchmove",e)}}}(),o=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,r=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,o=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||r.test(e)||o.test(e)},n=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var r=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===r||"auto"===r)return t;t=t.parentNode}return window},i=function(e,t){var r=e==window?document.body.offsetHeight:e.offsetHeight,o=e===window?0:e.getBoundingClientRect().top,n=t.getBoundingClientRect().top-o,i=n+t.offsetHeight;return n>=0&&n<r||i>0&&i<=r},s=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},a=function(e,t){s(e,t)||(e.className=""==e.className?t:e.className+" "+t)},l=function(e,t){if(s(e,t)){for(var r=" "+e.className.replace(/[\t\r\n]/g,"")+" ";r.indexOf(" "+t+" ")>=0;)r=r.replace(" "+t+" "," ");e.className=r.replace(/^\s+|\s+$/g,"")}};t.pageScroll=r,t.isColor=o,t.getScrollview=n,t.checkInview=i,t.addClass=a,t.removeClass=l},6:function(t,r){t.exports=e},13:function(e,t,r){t=e.exports=r(1)(),t.push([e.id,'.mask-keyboard{background-color:rgba(0,0,0,.4);z-index:500;right:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.m-keyboard,.mask-keyboard{position:fixed;bottom:0;left:0}.m-keyboard{width:100%;z-index:1000;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;background-color:#f7f7f7}.m-keyboard.keyboard-active{-webkit-transform:translate(0);transform:translate(0)}.keyboard-content{background-color:#fff;margin-top:.3rem;position:relative}.keyboard-content:before{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;height:1px;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.keyboard-title{overflow:hidden;padding:.2rem 0 .12rem;color:#222;margin-bottom:1px;font-size:.24rem;text-align:center;background-color:#fff}.keyboard-title:before{font-family:YDUI-INLAY;content:"\\E60A";font-size:.26rem;color:#ff2424;line-height:1;margin-right:.06rem}.keyboard-numbers{font-size:.48rem;background-color:#fff}.keyboard-numbers>li{width:100%}.keyboard-numbers>li,.keyboard-numbers>li>a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.keyboard-numbers>li>a{width:1%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#222;height:1rem;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#fff}.keyboard-numbers>li>a:active{background-color:#f2f2f2}.keyboard-numbers>li>a:not(:last-child):after{content:"";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.keyboard-numbers>li>a:before{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;height:1px;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.keyboard-numbers>li:last-child>a:last-child,.keyboard-numbers>li:last-child>a:nth-last-child(3){background-color:#f7f7f7;font-size:.3rem;color:#686868}.keyboard-numbers>li:last-child>a:last-child:after{font-family:YDUI-INLAY;content:"\\E609";font-size:.6rem}.keyboard-head{height:.8rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#1f2324;font-size:.3rem;position:relative}.keyboard-head:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;height:1px;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.keyboard-password{margin:0 .8rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;background-color:#fff}.keyboard-password:after{content:"";width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);position:absolute;border:1px solid #d9d9d9;top:0;left:0;-webkit-transform-origin:0 0;transform-origin:0 0;border-radius:4px}.keyboard-password li{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:1rem}.keyboard-password li:not(:last-child):after{content:"";width:1px;height:50%;position:absolute;right:0;top:25%;background-color:#d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.keyboard-password li i{width:6px;height:6px;border-radius:50%;background-color:#000}.keyboard-error{padding:2px .8rem;color:red;overflow:hidden;height:.5rem;line-height:.5rem;font-size:.24rem}',""])},34:function(e,t,r){var o=r(13);"string"==typeof o&&(o=[[e.id,o,""]]);r(2)(o,{});o.locals&&(e.exports=o.locals)},71:function(e,t,r){var o,n;r(34),o=r(156);var i=r(98);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,e.exports=o},98:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"mask-keyboard",on:{click:function(t){t.stopPropagation(),e.close(t)}}}),e._v(" "),r("div",{staticClass:"m-keyboard",class:e.show?"keyboard-active":""},[r("div",{staticClass:"keyboard-head"},[r("strong",{ref:"laoxu"},[e._v("输入数字密码")])]),e._v(" "),r("div",{staticClass:"keyboard-error"},[e._v(e._s(e.error))]),e._v(" "),r("ul",{staticClass:"keyboard-password"},e._l(6,function(t){return r("li",[r("i",{directives:[{name:"show",rawName:"v-show",value:e.nums.length>=t,expression:"nums.length >= n"}]})])})),e._v(" "),r("div",{staticClass:"keyboard-content"},[r("div",{staticClass:"keyboard-title"},[e._v(e._s(e.title))]),e._v(" "),r("ul",{staticClass:"keyboard-numbers"},e._l(4,function(t){return r("li",[4==t?r("a",{attrs:{href:"javascript:;"},on:{click:function(t){t.stopPropagation(),e.close(t)}}},[e._v("取消")]):e._e(),e._v(" "),e._l(e.numsArr.slice(3*(t-1),3*t),function(t){return r("a",{attrs:{href:"javascript:;"},on:{click:function(r){r.stopPropagation(),e.numclick(t)}}},[e._v(e._s(t))])}),e._v(" "),4==t?r("a",{attrs:{href:"javascript:;"},on:{click:function(t){t.stopPropagation(),e.backspace(t)}}}):e._e()],2)}))])])])},staticRenderFns:[]}},156:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(6),i=o(n),s=r(3);t.default={name:"yd-keyboard",data:function(){return{nums:"",show:!1,error:"",numsArr:[1,2,3,4,5,6,7,8,9,0]}},props:{inputDone:{type:Function},disorder:{type:Boolean,default:!1},value:{type:Boolean,default:!1},title:{type:String,default:"YDUI安全键盘"}},watch:{value:function(e){e&&this.isIOS&&(0,s.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"),this.nums="",this.error="",this.show=e,this.show&&this.disorder&&(this.numsArr=this.upsetOrder(this.numsArr))},nums:function(e){e.length>=6&&this.inputDone&&"function"==typeof this.inputDone&&this.inputDone(e)}},methods:{numclick:function(e){this.error="",this.nums.length>=6||(this.nums+=e)},backspace:function(){var e=this.nums;e&&(this.nums=e.substr(0,e.length-1))},upsetOrder:function(e){for(var t=Math.floor,r=Math.random,o=e.length,n=void 0,i=void 0,s=void 0,a=t(o/2)+1;a--;)n=t(r()*o),i=t(r()*o),n!==i&&(s=e[n],e[n]=e[i],e[i]=s);return e},close:function(){this.isIOS&&(0,s.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"),this.$emit("input",!1)},setError:function(e){this.error=e,this.nums=""}},mounted:function(){var e=this;i.default.prototype.$yduiBus=this.$yduiBus||new i.default,this.$yduiBus.$on("keyboard.error",function(t){e.setError(t)}),this.$yduiBus.$on("keyboard.close",this.close),this.scrollView=(0,s.getScrollview)(this.$el),this.isIOS=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},destroyed:function(){this.close()}}}})});