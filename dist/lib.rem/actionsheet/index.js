/*! vue-ydui v0.2.3 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ActionSheet=void 0;var r=n(48),i=o(r);e.ActionSheet=i.default},1:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},2:function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=u[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(c(o.parts[i],e))}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(c(o.parts[i],e));u[o.id]={id:o.id,refs:1,parts:s}}}}function r(t){for(var e=[],n={},o=0;o<t.length;o++){var r=t[o],i=r[0],s=r[1],a=r[2],c=r[3],f={css:s,media:a,sourceMap:c};n[i]?n[i].parts.push(f):e.push(n[i]={id:i,parts:[f]})}return e}function i(t,e){var n=h(),o=b[b.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function c(t,e){var n,o,r;if(e.singleton){var i=v++;n=m||(m=a(e)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=a(e),o=l.bind(null,n),r=function(){s(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function l(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,b=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=r(t);return o(n,e),function(t){for(var i=[],s=0;s<n.length;s++){var a=n[s],c=u[a.id];c.refs--,i.push(c)}if(t){var f=r(t);o(f,e)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete u[c.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},19:function(t,e,n){e=t.exports=n(1)(),e.push([t.id,'.mask-actionsheet{background-color:rgba(0,0,0,.4);position:fixed;z-index:500;bottom:0;right:0;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.m-actionsheet{text-align:center;position:fixed;bottom:0;left:0;width:100%;z-index:1000;background-color:#efeff4;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.actionsheet-item{display:block;position:relative;font-size:.28rem;color:#555;height:1rem;line-height:1rem;background-color:#fff}.actionsheet-item:after{content:"";position:absolute;z-index:2;bottom:0;left:0;width:100%;height:1px;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.actionsheet-action{display:block;margin-top:.15rem;font-size:.28rem;color:#555;height:1rem;line-height:1rem;background-color:#fff}.actionsheet-active{-webkit-transform:translate(0);transform:translate(0)}',""])},37:function(t,e,n){var o=n(19);"string"==typeof o&&(o=[[t.id,o,""]]);n(2)(o,{});o.locals&&(t.exports=o.locals)},48:function(t,e,n){var o,r;n(37),o=n(121);var i=n(100);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},100:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mask-actionsheet",on:{click:function(e){e.stopPropagation(),t.close(e)}}}),t._v(" "),n("div",{staticClass:"m-actionsheet",class:t.show?"actionsheet-active":""},[t._l(t.items,function(e){return n("a",{staticClass:"actionsheet-item",attrs:{href:"javascript:;"},on:{click:function(n){n.stopPropagation(),t.itemClick(e)}}},[t._v(t._s(e.label))])}),t._v(" "),t.cancel?n("a",{staticClass:"actionsheet-action",attrs:{href:"javascript:;"},on:{click:function(e){e.stopPropagation(),t.close(e)}}},[t._v(t._s(t.cancel))]):t._e()],2)])},staticRenderFns:[]}},121:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-actionsheet",data:function(){return{show:!1}},props:{value:{type:Boolean,default:!1},items:{type:Array,require:!0},cancel:String},watch:{value:function(t){this.show=t}},methods:{itemClick:function(t){t&&("function"==typeof t.method&&t.method(),!t.unclose&&this.close())},close:function(){this.$emit("input",!1)}},destroyed:function(){this.close()}}}})});