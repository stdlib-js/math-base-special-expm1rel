// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"",i=t&&"symbol"==typeof Symbol.toStringTag?function(n){var t,i,f,u,a;if(null==n)return r.call(n);i=n[o],a=o,t=null!=(u=n)&&e.call(u,a);try{n[o]=void 0}catch(t){return r.call(n)}return f=r.call(n),t?n[o]=i:delete n[o],f}:function(n){return r.call(n)},f="function"==typeof Uint32Array,u="function"==typeof Uint32Array?Uint32Array:null,a="function"==typeof Uint32Array?Uint32Array:void 0;n=function(){var n,t,r;if("function"!=typeof u)return!1;try{t=new u(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(f&&r instanceof Uint32Array||"[object Uint32Array]"===i(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?a:function(){throw new Error("not implemented")};var y,c=n,l="function"==typeof Float64Array,p="function"==typeof Float64Array?Float64Array:null,A="function"==typeof Float64Array?Float64Array:void 0;y=function(){var n,t,r;if("function"!=typeof p)return!1;try{t=new p([1,3.14,-3.14,NaN]),r=t,n=(l&&r instanceof Float64Array||"[object Float64Array]"===i(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?A:function(){throw new Error("not implemented")};var b,m=y,U="function"==typeof Uint8Array,d="function"==typeof Uint8Array?Uint8Array:null,v="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var n,t,r;if("function"!=typeof d)return!1;try{t=new d(t=[1,3.14,-3.14,256,257]),r=t,n=(U&&r instanceof Uint8Array||"[object Uint8Array]"===i(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?v:function(){throw new Error("not implemented")};var w,s=b,h="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;w=function(){var n,t,r;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,65536,65537]),r=t,n=(h&&r instanceof Uint16Array||"[object Uint16Array]"===i(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?I:function(){throw new Error("not implemented")};var N,S={uint16:w,uint8:s};(N=new S.uint16(1))[0]=4660;var T=52===new S.uint8(N.buffer)[0],g=!0===T?1:0,j=new m(1),E=new c(j.buffer);function O(n){return j[0]=n,E[g]}var x=!0===T?1:0,P=new m(1),V=new c(P.buffer);function Y(n,t){return P[0]=n,V[x]=t>>>0,P[0]}var _=Number.POSITIVE_INFINITY,G=Number.NEGATIVE_INFINITY,M=.6931471803691238,k=1.9082149292705877e-10,q=1.4426950408889634;return function(n){return function(n){return Math.abs(n)}(n)<=2220446049250313e-31?1:n>=709.782712893384?_:function(n){var t,r,e,o,i,f,u,a,y,c,l,p;if(n===_||function(n){return n!=n}(n))return n;if(n===G)return-1;if(0===n)return n;if(n<0?(r=!0,u=-n):(r=!1,u=n),u>=38.816242111356935){if(r)return-1;if(u>=709.782712893384)return _}if(i=0|O(u),u>.34657359027997264)u<1.0397207708399179?r?(e=n+M,o=-k,p=-1):(e=n-M,o=k,p=1):(p=r?q*n-.5:q*n+.5,e=n-(c=p|=0)*M,o=c*k),y=e-(n=e-o)-o;else{if(i<1016070144)return n;p=0}return f=1+(a=n*(t=.5*n))*function(n){return 0===n?-.03333333333333313:n*(.0015873015872548146+n*(n*(4008217827329362e-21+-2.0109921818362437e-7*n)-793650757867488e-19))-.03333333333333313}(a),l=a*((f-(c=3-f*t))/(6-n*c)),0===p?n-(n*l-a):(l=n*(l-y)-y,l-=a,-1===p?.5*(n-l)-.5:1===p?n<-.25?-2*(l-(n+.5)):1+2*(n-l):p<=-2||p>56?(u=Y(u=1-(l-n),e=O(u)+(p<<20)|0))-1:(c=1,p<20?u=(c=Y(c,e=1072693248-(2097152>>p)|0))-(l-n):(u=n-(l+(c=Y(c,e=1023-p<<20|0))),u+=1),Y(u,e=O(u)+(p<<20)|0)))}(n)/n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).expm1rel=t();
//# sourceMappingURL=browser.js.map
