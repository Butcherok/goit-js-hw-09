const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");let n=null;e.addEventListener("click",(function(){e.disabled=!0,d.disabled=!1,n=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),d.addEventListener("click",(function(){e.disabled=!1,d.disabled=!0,clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.1fa4f401.js.map