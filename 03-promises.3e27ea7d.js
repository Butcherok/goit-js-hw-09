function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("7Y9D8");const u=document.querySelector(".form");console.log(u),u.addEventListener("input",(function(e){l[e.target.name]=e.target.value})),u.addEventListener("submit",(function(e){e.preventDefault(),function(){const e=l.amount;a=Number(l.delay);for(var n=0;n<e;n+=1)d+=1,a=Number(l.delay)+Number(l.step)*(d-1),s(d,a)}(),u.reset()}));let l={},d=0,a=null;function s(n,t){const o=Math.random()>.3;return new Promise(((r,u)=>{setTimeout((()=>{var l,d,a,s;o?r((a=n,s=t,void e(i).Notify.success(`Fulfilled promise ${a} in ${s}ms`))):u((l=n,d=t,void e(i).Notify.failure(`Rejected promise ${l} in ${d}ms`)))}),t)}))}
//# sourceMappingURL=03-promises.3e27ea7d.js.map
