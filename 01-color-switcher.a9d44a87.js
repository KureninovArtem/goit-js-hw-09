!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.querySelector("body"),r=null;t.addEventListener("click",(function(){r=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled"),e.setAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.a9d44a87.js.map
