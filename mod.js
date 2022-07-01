// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r};var n=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return n&&"symbol"==typeof Symbol.toStringTag},o=Object.prototype.toString,e=o;var i=function(r){return e.call(r)},u=Object.prototype.hasOwnProperty;var a=function(r,n){return null!=r&&u.call(r,n)},f="function"==typeof Symbol?Symbol.toStringTag:"",c=a,y=f,l=o;var v=i,p=function(r){var n,t,o;if(null==r)return l.call(r);t=r[y],n=c(r,y);try{r[y]=void 0}catch(n){return l.call(r)}return o=l.call(r),n?r[y]=t:delete r[y],o},A=t()?p:v,U=A,b="function"==typeof Uint32Array;var w="function"==typeof Uint32Array?Uint32Array:null,m=function(r){return b&&r instanceof Uint32Array||"[object Uint32Array]"===U(r)},d=w;var h=function(){var r,n;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,4294967296,4294967297]),r=m(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var s="function"==typeof Uint32Array?Uint32Array:void 0,F=function(){throw new Error("not implemented")},I=h()?s:F,N=A,S="function"==typeof Float64Array;var E="function"==typeof Float64Array?Float64Array:null,j=function(r){return S&&r instanceof Float64Array||"[object Float64Array]"===N(r)},T=E;var g=function(){var r,n;if("function"!=typeof T)return!1;try{n=new T([1,3.14,-3.14,NaN]),r=j(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var O="function"==typeof Float64Array?Float64Array:void 0,P=function(){throw new Error("not implemented")},V=g()?O:P,Y=A,_="function"==typeof Uint8Array;var x="function"==typeof Uint8Array?Uint8Array:null,G=function(r){return _&&r instanceof Uint8Array||"[object Uint8Array]"===Y(r)},M=x;var k=function(){var r,n;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,256,257]),r=G(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var q="function"==typeof Uint8Array?Uint8Array:void 0,z=function(){throw new Error("not implemented")},B=k()?q:z,C=A,D="function"==typeof Uint16Array;var H="function"==typeof Uint16Array?Uint16Array:null,J=function(r){return D&&r instanceof Uint16Array||"[object Uint16Array]"===C(r)},K=H;var L=function(){var r,n;if("function"!=typeof K)return!1;try{n=new K(n=[1,3.14,-3.14,65536,65537]),r=J(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Q,R="function"==typeof Uint16Array?Uint16Array:void 0,W=function(){throw new Error("not implemented")},X={uint16:L()?R:W,uint8:B};(Q=new X.uint16(1))[0]=4660;var Z=52===new X.uint8(Q.buffer)[0],$=I,rr=!0===Z?1:0,nr=new V(1),tr=new $(nr.buffer);var or=function(r){return nr[0]=r,tr[rr]},er=I,ir=!0===Z?1:0,ur=new V(1),ar=new er(ur.buffer);var fr=function(r,n){return ur[0]=r,ar[ir]=n>>>0,ur[0]},cr=fr,yr=Number.POSITIVE_INFINITY,lr=Number.NEGATIVE_INFINITY;var vr=r,pr=or,Ar=cr,Ur=yr,br=lr,wr=function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313},mr=.6931471803691238,dr=1.9082149292705877e-10;var hr=function(r){var n,t,o,e,i,u,a,f,c,y,l,v;if(r===Ur||vr(r))return r;if(r===br)return-1;if(0===r)return r;if(r<0?(t=!0,a=-r):(t=!1,a=r),a>=38.816242111356935){if(t)return-1;if(a>=709.782712893384)return Ur}if(i=0|pr(a),a>.34657359027997264)a<1.0397207708399179?t?(o=r+mr,e=-dr,v=-1):(o=r-mr,e=dr,v=1):(v=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,o=r-(y=v|=0)*mr,e=y*dr),c=o-(r=o-e)-e;else{if(i<1016070144)return r;v=0}return l=(f=r*(n=.5*r))*(((u=1+f*wr(f))-(y=3-u*n))/(6-r*y)),0===v?r-(r*l-f):(l=r*(l-c)-c,l-=f,-1===v?.5*(r-l)-.5:1===v?r<-.25?-2*(l-(r+.5)):1+2*(r-l):v<=-2||v>56?(o=pr(a=1-(l-r))+(v<<20)|0,(a=Ar(a,o))-1):(y=1,v<20?a=(y=Ar(y,o=1072693248-(2097152>>v)|0))-(l-r):(a=r-(l+(y=Ar(y,o=1023-v<<20|0))),a+=1),o=pr(a)+(v<<20)|0,Ar(a,o)))};var sr=function(r){return Math.abs(r)};function Fr(r){return sr(r)<=2220446049250313e-31?1:r>=709.782712893384?yr:hr(r)/r}export{Fr as default};
//# sourceMappingURL=mod.js.map
