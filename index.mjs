// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-expm1@v0.2.4-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.2.3-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.3-esm/index.mjs";function n(n){var m;return t(n)<=e?1:n<709.782712893384?s(n)/n:n>=716.3568913878179?i:(m=s(n/2))/n*(m+2)}export{n as default};
//# sourceMappingURL=index.mjs.map
