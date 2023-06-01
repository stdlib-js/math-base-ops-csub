// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,a=r.__lookupGetter__,u=r.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var c,p,f,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((p="value"in l)&&(a.call(t,e)||u.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=c):t[e]=l.value),f="get"in l,y="set"in l,p&&(f||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&o&&o.call(t,e,l.get),y&&i&&i.call(t,e,l.set),t};function c(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(t){return"number"==typeof t}var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return f&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var s="function"==typeof Symbol?Symbol.toStringTag:"";var _=y()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[s],i=s,e=null!=(o=t)&&m.call(o,i);try{t[s]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[s]=r:delete t[s],n}:function(t){return b.call(t)},v=Number,h=v.prototype.toString;var g=y();function w(t){return"object"==typeof t&&(t instanceof v||(g?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function d(t){return p(t)||w(t)}function E(t,e){if(!(this instanceof E))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!p(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!p(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}function S(t){return t.re}function j(t){return t.im}function T(t,e){return new E(S(t)-S(e),j(t)-j(e))}c(d,"isPrimitive",p),c(d,"isObject",w),c(E,"BYTES_PER_ELEMENT",8),c(E.prototype,"BYTES_PER_ELEMENT",8),c(E.prototype,"byteLength",16),c(E.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),c(E.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t}));export{T as default};
//# sourceMappingURL=mod.js.map
