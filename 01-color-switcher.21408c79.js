!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),d=null;e.addEventListener("click",(function(){e.disabled=!0,n.disabled=!1,d=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(){e.disabled=!1,n.disabled=!0,clearInterval(d)})),n.disabled=!0}();
//# sourceMappingURL=01-color-switcher.21408c79.js.map