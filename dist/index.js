"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=a(function(c,u){
var t=require('@stdlib/math-base-special-expm1/dist'),v=require('@stdlib/math-base-special-abs/dist'),s=require('@stdlib/constants-float64-eps/dist'),n=require('@stdlib/constants-float64-pinf/dist'),p=709.782712893384,q=716.3568913878179;function E(r){var e;return v(r)<=s?1:r<p?t(r)/r:r>=q?n:(e=t(r/2),e/r*(e+2))}u.exports=E
});var f=i();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
