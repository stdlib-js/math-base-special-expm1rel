"use strict";var v=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var i=v(function(o,u){
var t=require('@stdlib/math-base-special-expm1/dist'),s=require('@stdlib/math-base-special-abs/dist'),n=require('@stdlib/constants-float64-eps/dist'),p=require('@stdlib/constants-float64-pinf/dist'),q=709.782712893384,E=716.3568913878179;function f(r){var e;return s(r)<=n?1:r<q?t(r)/r:r>=E?p:(e=t(r/2),e/r*(e+2))}u.exports=f
});var m=i();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
