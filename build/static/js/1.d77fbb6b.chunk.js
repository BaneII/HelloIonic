(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[1],{201:function(t,n,o){"use strict";o.r(n),o.d(n,"startFocusVisible",(function(){return s}));var e=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],s=function(){var t=[],n=!0,o=document,s=function(n){t.forEach((function(t){return t.classList.remove("ion-focused")})),n.forEach((function(t){return t.classList.add("ion-focused")})),t=n},i=function(){n=!1,s([])};o.addEventListener("keydown",(function(t){(n=e.includes(t.key))||s([])})),o.addEventListener("focusin",(function(t){if(n&&t.composedPath){var o=t.composedPath().filter((function(t){return!!t.classList&&t.classList.contains("ion-focusable")}));s(o)}})),o.addEventListener("focusout",(function(){o.activeElement===o.body&&s([])})),o.addEventListener("touchstart",i),o.addEventListener("mousedown",i)}}}]);
//# sourceMappingURL=1.d77fbb6b.chunk.js.map