"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=t(function(m,u){
var a=require('@stdlib/math-base-special-expm1/dist'),s=require('@stdlib/math-base-special-abs/dist'),v=require('@stdlib/constants-float64-eps/dist'),n=require('@stdlib/constants-float64-pinf/dist'),p=709.782712893384;function q(r){return s(r)<=v?1:r>=p?n:a(r)/r}u.exports=q
});var c=i();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
