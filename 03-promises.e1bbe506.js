function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector(".form");console.log(l),l.addEventListener("input",(function(e){u[e.target.name]=e.target.value})),l.addEventListener("submit",(function(e){e.preventDefault(),function(){const e=u.amount;d=Number(u.delay);for(var n=0;n<e;n+=1)a=n+1,d=Number(u.delay)+Number(u.step)*n,s(a,d).then((({position:e,delay:n})=>{f(e,n)})).catch((({position:e,delay:n})=>{c(e,n)}))}()}));let u={},a=null,d=null;function s(e,n){const t=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{t?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))}function f(n,t){e(r).Notify.success(`Fulfilled promise ${n} in ${t}ms`)}function c(n,t){e(r).Notify.failure(`Rejected promise ${n} in ${t}ms`)}
//# sourceMappingURL=03-promises.e1bbe506.js.map
