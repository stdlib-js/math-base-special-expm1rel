// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,i="function"==typeof o?o.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(n){var t,o,f,u,a;if(null==n)return r.call(n);o=n[i],a=i,t=null!=(u=n)&&e.call(u,a);try{n[i]=void 0}catch(t){return r.call(n)}return f=r.call(n),t?n[i]=o:delete n[i],f}:function(n){return r.call(n)},u="function"==typeof Uint32Array,a="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;n=function(){var n,t,r;if("function"!=typeof a)return!1;try{t=new a(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(u&&r instanceof Uint32Array||"[object Uint32Array]"===f(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")};var c,l=n,p="function"==typeof Float64Array,A="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;c=function(){var n,t,r;if("function"!=typeof A)return!1;try{t=new A([1,3.14,-3.14,NaN]),r=t,n=(p&&r instanceof Float64Array||"[object Float64Array]"===f(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?b:function(){throw new Error("not implemented")};var d,m=c,v="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,U="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var n,t,r;if("function"!=typeof w)return!1;try{t=new w(t=[1,3.14,-3.14,256,257]),r=t,n=(v&&r instanceof Uint8Array||"[object Uint8Array]"===f(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?U:function(){throw new Error("not implemented")};var s,h=d,I="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,N="function"==typeof Uint16Array?Uint16Array:void 0;s=function(){var n,t,r;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,65536,65537]),r=t,n=(I&&r instanceof Uint16Array||"[object Uint16Array]"===f(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?N:function(){throw new Error("not implemented")};var S,T={uint16:s,uint8:h};(S=new T.uint16(1))[0]=4660;var g=52===new T.uint8(S.buffer)[0],j=!0===g?1:0,E=new m(1),O=new l(E.buffer);function H(n){return E[0]=n,O[j]}var x,G,L=!0===g?1:0,P=new m(1),V=new l(P.buffer);function W(n,t){return P[0]=n,V[L]=t>>>0,P[0]}!0===g?(x=1,G=0):(x=0,G=1);var Y={HIGH:x,LOW:G},_=new m(1),M=new l(_.buffer),k=Y.HIGH,q=Y.LOW,z=Number.POSITIVE_INFINITY,B=Number.NEGATIVE_INFINITY,C=.6931471803691238,D=1.9082149292705877e-10,J=1.4426950408889634;function K(n){var t,r,e,o,i,f,u,a,y,c,l,p,A,b,d;if(n===z||function(n){return n!=n}(n))return n;if(n===B)return-1;if(0===n)return n;if(n<0?(e=!0,a=-n):(e=!1,a=n),a>=38.816242111356935){if(e)return-1;if(a>=709.782712893384)return z}if(f=0|H(a),a>.34657359027997264)a<1.0397207708399179?e?(o=n+C,i=-D,A=-1):(o=n-C,i=D,A=1):(A=e?J*n-.5:J*n+.5,o=n-(l=A|=0)*C,i=l*D),c=o-(n=o-i)-i;else{if(f<1016070144)return n;A=0}return u=1+(y=n*(t=.5*n))*function(n){return 0===n?-.03333333333333313:n*(.0015873015872548146+n*(n*(4008217827329362e-21+-2.0109921818362437e-7*n)-793650757867488e-19))-.03333333333333313}(y),p=y*((u-(l=3-u*t))/(6-n*l)),0===A?n-(n*p-y):(b=1023+A<<20,d=0,M[k]=b,M[q]=d,r=_[0],p=n*(p-c)-c,p-=y,-1===A?.5*(n-p)-.5:1===A?n<-.25?-2*(p-(n+.5)):1+2*(n-p):A<=-2||A>56?(a=1-(p-n),1024===A?a=W(a,o=H(a)+(A<<20)|0):a*=r,a-1):(l=1,A<20?a=(l=W(l,o=1072693248-(2097152>>A)|0))-(p-n):(a=n-(p+(l=W(l,o=1023-A<<20|0))),a+=1),a*=r))}return function(n){return function(n){return Math.abs(n)}(n)<=2220446049250313e-31?1:n>=709.782712893384?z:K(n)/n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).expm1rel=t();
//# sourceMappingURL=index.js.map
