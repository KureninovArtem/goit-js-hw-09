!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=i);var r=i("iU1Pc"),u=document.querySelector(".form"),a=document.querySelector('button[type="submit"]'),c=0,l=0,f=0;function d(n,t){new Promise((function(e,o){setTimeout((function(){Math.random()>.3?e({position:n,delay:t}):o({position:n,delay:t})}),t)})).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("Rejected promise ".concat(t," in ").concat(o,"ms"))}))}u.addEventListener("input",(function(e){e.preventDefault(),c=Number(u.delay.value),l=Number(u.step.value),f=Number(u.amount.value)})),a.addEventListener("click",(function(e){e.preventDefault();for(var n=0;n<f;n++)d(n+1,c),c+=l,n+1===f&&(c=0)}))}();
//# sourceMappingURL=03-promises.2f2d8cd6.js.map