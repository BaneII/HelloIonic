(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[62],{151:function(e,r,t){"use strict";t.r(r),t.d(r,"ion_refresher",(function(){return T})),t.d(r,"ion_refresher_content",(function(){return P}));var n=t(17),i=t(2),s=t.n(i),o=t(3),a=t(6),l=t(7),c=t(19),f=t(15),h=(t(68),t(52),t(24)),u=t(5),p=(t(25),t(43),t(44),t(50)),d=(t(49),t(33),t(51),t(28),t(193)),g=t(196),m={getEngine:function(){var e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(e){var r=this.getEngine();if(r){var t=this.isCapacitor()?e.style.toUpperCase():e.style;r.impact({style:t})}},notification:function(e){var r=this.getEngine();if(r){var t=this.isCapacitor()?e.style.toUpperCase():e.style;r.notification({style:t})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())}},b=function(e){var r=e.previousElementSibling;return null!==r&&"ION-HEADER"===r.tagName?"translate":"scale"},v=function(e,r){return"scale"===e?k(r):x(r)},y=function(e){var r=e.querySelector("ion-spinner"),t=r.shadowRoot.querySelector("circle"),n=e.querySelector(".spinner-arrow-container"),i=e.querySelector(".arrow-container"),s=i?i.querySelector("ion-icon"):null,o=Object(u.a)().duration(1e3).easing("ease-out"),a=Object(u.a)().addElement(n).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),l=Object(u.a)().addElement(t).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),c=Object(u.a)().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(i&&s){var f=Object(u.a)().addElement(i).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),h=Object(u.a)().addElement(s).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([f,h])}return o.addAnimation([a,l,c])},k=function(e){var r=e.clientHeight,t=Object(u.a)().addElement(e).keyframes([{offset:0,transform:"scale(0) translateY(-".concat(r+20,"px)")},{offset:1,transform:"scale(1) translateY(100px)"}]);return y(e).addAnimation([t])},x=function(e){var r=e.clientHeight,t=Object(u.a)().addElement(e).keyframes([{offset:0,transform:"translateY(-".concat(r+20,"px)")},{offset:1,transform:"translateY(100px)"}]);return y(e).addAnimation([t])},w=function(e){return Object(u.a)().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)")},j=function(e,r){e.style.setProperty("opacity",r.toString())},O=function(e,r,t,n){Object(c.n)((function(){j(e,t),r.forEach((function(e,r){return e.style.setProperty("opacity",r<=n?"0.99":"0")}))}))},E=function(e,r){if(!e)return Promise.resolve();var t=C(e);return Object(c.n)((function(){e.style.setProperty("transition","0.2s all ease-out"),void 0===r?e.style.removeProperty("transform"):e.style.setProperty("transform","translate3d(0px, ".concat(r,", 0px)"))})),t},S=function(e,r){var t=e.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),n=e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return null!==t&&null!==n&&("ios"===r&&Object(f.e)("mobile")&&void 0!==e.style.webkitOverflowScrolling||"md"===r)},C=function(e){return new Promise((function(r){R(e,r)}))},R=function(e,r){var t,n={passive:!0},i=function(){t&&t()},s=function(t){e===t.target&&(i(),r(t))};return e&&(e.addEventListener("webkitTransitionEnd",s,n),e.addEventListener("transitionend",s,n),t=function(){e.removeEventListener("webkitTransitionEnd",s,n),e.removeEventListener("transitionend",s,n)}),i},T=function(){function e(r){Object(a.a)(this,e),Object(c.l)(this,r),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1,this.ionRefresh=Object(c.f)(this,"ionRefresh",7),this.ionPull=Object(c.f)(this,"ionPull",7),this.ionStart=Object(c.f)(this,"ionStart",7)}return Object(l.a)(e,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"checkNativeRefresher",value:function(){var e=S(this.el,Object(f.b)(this));if(e&&!this.nativeRefresher){var r=this.el.closest("ion-content");this.setupNativeRefresher(r)}else e||this.destroyNativeRefresher()}},{key:"destroyNativeRefresher",value:function(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}},{key:"resetNativeRefresher",value:function(){var e=Object(o.a)(s.a.mark((function e(r,t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state=t,"ios"!==Object(f.b)(this)){e.next=6;break}return e.next=4,E(r,void 0);case 4:e.next=8;break;case 6:return e.next=8,C(this.el.querySelector(".refresher-refreshing-icon"));case 8:this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach((function(e){return e.destroy()})),this.animations=[],this.progress=0,this.state=1;case 15:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}()},{key:"setupiOSNativeRefresher",value:function(){var e=Object(o.a)(s.a.mark((function e(r,n){var i,o,a,l=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.elementToTransform=this.scrollEl,i=r.shadowRoot.querySelectorAll("svg"),o=.16*this.scrollEl.clientHeight,a=i.length,Object(c.n)((function(){return i.forEach((function(e){return e.style.setProperty("animation","none")}))})),this.scrollListenerCallback=function(){(l.pointerDown||1!==l.state)&&Object(c.h)((function(){var e=l.scrollEl.scrollTop,t=l.el.clientHeight;if(e>0){if(8===l.state){var s=Object(h.c)(0,e/(.5*t),1);return void Object(c.n)((function(){return j(n,1-s)}))}Object(c.n)((function(){return j(r,0)}))}else{l.pointerDown&&(l.didStart||(l.didStart=!0,l.ionStart.emit()),l.pointerDown&&l.ionPull.emit());var f,u,p,d=Object(h.c)(0,Math.abs(e)/t,.99),g=l.progress=Object(h.c)(0,(Math.abs(e)-30)/o,1),b=Object(h.c)(0,Math.floor(g*a),a-1);8===l.state||b===a-1?(l.pointerDown&&(u=n,p=l.lastVelocityY,Object(c.n)((function(){u.style.setProperty("--refreshing-rotation-duration",p>=1?"0.5s":"2s"),u.style.setProperty("opacity","1")}))),l.didRefresh||(l.beginRefresh(),l.didRefresh=!0,f={style:"light"},m.impact(f),l.pointerDown||E(l.elementToTransform,"".concat(t,"px")))):(l.state=2,O(r,i,d,b))}}))},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),e.next=9,Promise.resolve().then(t.bind(null,49));case 9:this.gesture=e.sent.createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:5,onStart:function(){l.pointerDown=!0,l.didRefresh||E(l.elementToTransform,"0px")},onMove:function(e){l.lastVelocityY=e.velocityY},onEnd:function(){l.pointerDown=!1,l.didStart=!1,l.needsCompletion?(l.resetNativeRefresher(l.elementToTransform,32),l.needsCompletion=!1):l.didRefresh&&Object(c.h)((function(){return E(l.elementToTransform,"".concat(l.el.clientHeight,"px"))}))}}),this.disabledChanged();case 11:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}()},{key:"setupMDNativeRefresher",value:function(){var e=Object(o.a)(s.a.mark((function e(r,n,i){var a,l,f,u=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.shadowRoot.querySelector("circle"),l=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),f=i.shadowRoot.querySelector("circle"),null!==a&&null!==f&&Object(c.n)((function(){a.style.setProperty("animation","none"),i.style.setProperty("animation-delay","-655ms"),f.style.setProperty("animation-delay","-655ms")})),e.next=6,Promise.resolve().then(t.bind(null,49));case 6:this.gesture=e.sent.createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:5,canStart:function(){return 8!==u.state&&32!==u.state&&0===u.scrollEl.scrollTop},onStart:function(e){e.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:function(e){if(e.velocityY<0&&0===u.progress&&!e.data.didStart||e.data.cancelled)e.data.cancelled=!0;else{if(!e.data.didStart)return e.data.didStart=!0,u.state=2,void Object(c.n)((function(){var t=b(r),n=v(t,l);e.data.animation=n,u.scrollEl.style.setProperty("--overflow","hidden"),n.progressStart(!1,0),u.ionStart.emit(),u.animations.push(n)}));u.progress=Object(h.c)(0,e.deltaY/180*.5,1),e.data.animation.progressStep(u.progress),u.ionPull.emit()}},onEnd:function(e){if(e.data.didStart){if(Object(c.n)((function(){return u.scrollEl.style.removeProperty("--overflow")})),u.progress<=.4)return u.gesture.enable(!1),void e.data.animation.progressEnd(0,u.progress,500).onFinish((function(){u.animations.forEach((function(e){return e.destroy()})),u.animations=[],u.gesture.enable(!0),u.state=1}));var r=Object(p.a)([0,0],[0,0],[1,1],[1,1],u.progress)[0],t=w(l);u.animations.push(t),Object(c.n)(Object(o.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l.style.setProperty("--ion-pulling-refresher-translate","".concat(100*r,"px")),e.data.animation.progressEnd(),n.next=4,t.play();case 4:u.beginRefresh(),e.data.animation.destroy();case 6:case"end":return n.stop()}}),n)}))))}}}),this.disabledChanged();case 8:case"end":return e.stop()}}),e,this)})));return function(r,t,n){return e.apply(this,arguments)}}()},{key:"setupNativeRefresher",value:function(){var e=Object(o.a)(s.a.mark((function e(r){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.scrollListenerCallback&&r&&!this.nativeRefresher&&this.scrollEl){e.next=2;break}return e.abrupt("return");case 2:this.nativeRefresher=!0,t=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),n=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),"ios"===Object(f.b)(this)?this.setupiOSNativeRefresher(t,n):this.setupMDNativeRefresher(r,t,n);case 6:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){this.checkNativeRefresher()}},{key:"connectedCallback",value:function(){var e=Object(o.a)(s.a.mark((function e(){var r,n=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("fixed"===this.el.getAttribute("slot")){e.next=3;break}return console.error('Make sure you use: <ion-refresher slot="fixed">'),e.abrupt("return");case 3:if(r=this.el.closest("ion-content")){e.next=7;break}return console.error("<ion-refresher> must be used inside an <ion-content>"),e.abrupt("return");case 7:return e.next=9,r.getScrollElement();case 9:if(this.scrollEl=e.sent,this.backgroundContentEl=r.shadowRoot.querySelector("#background-content"),!S(this.el,Object(f.b)(this))){e.next=15;break}this.setupNativeRefresher(r),e.next=19;break;case 15:return e.next=17,Promise.resolve().then(t.bind(null,49));case 17:this.gesture=e.sent.createGesture({el:r,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:20,passive:!1,canStart:function(){return n.canStart()},onStart:function(){return n.onStart()},onMove:function(e){return n.onMove(e)},onEnd:function(){return n.onEnd()}}),this.disabledChanged();case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disconnectedCallback",value:function(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:function(){var e=Object(o.a)(s.a.mark((function e(){var r=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||Object(h.k)((function(){return Object(h.k)((function(){return r.resetNativeRefresher(r.elementToTransform,32)}))}))):this.close(32,"120ms");case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){var e=Object(o.a)(s.a.mark((function e(){var r=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.nativeRefresher?this.pointerDown||Object(h.k)((function(){return Object(h.k)((function(){return r.resetNativeRefresher(r.elementToTransform,16)}))})):this.close(16,"");case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getProgress",value:function(){return Promise.resolve(this.progress)}},{key:"canStart",value:function(){return!!this.scrollEl&&(1===this.state&&!(this.scrollEl.scrollTop>0))}},{key:"onStart",value:function(){this.progress=0,this.state=1}},{key:"onMove",value:function(e){if(this.scrollEl){var r=e.event;if(!(r.touches&&r.touches.length>1)&&0===(56&this.state)){var t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,n=e.deltaY*t;if(n<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(n,"0ms",!0,""),0!==n){var i=this.pullMin;this.progress=n/i,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),n<i?this.state=2:n>this.pullMax?this.beginRefresh():this.state=4}else this.progress=0}}}},{key:"onEnd",value:function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}},{key:"beginRefresh",value:function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}},{key:"close",value:function(e,r){var t=this;setTimeout((function(){t.state=1,t.progress=0,t.didStart=!1,t.setCss(0,"0ms",!1,"")}),600),this.state=e,this.setCss(0,this.closeDuration,!0,r)}},{key:"setCss",value:function(e,r,t,n){var i=this;this.nativeRefresher||(this.appliedStyles=e>0,Object(c.n)((function(){if(i.scrollEl&&i.backgroundContentEl){var s=i.scrollEl.style,o=i.backgroundContentEl.style;s.transform=o.transform=e>0?"translateY(".concat(e,"px) translateZ(0px)"):"",s.transitionDuration=o.transitionDuration=r,s.transitionDelay=o.transitionDelay=n,s.overflow=t?"hidden":""}})))}},{key:"render",value:function(){var e,r=Object(f.b)(this);return Object(c.j)(c.b,{slot:"fixed",class:(e={},Object(n.a)(e,r,!0),Object(n.a)(e,"refresher-".concat(r),!0),Object(n.a)(e,"refresher-native",this.nativeRefresher),Object(n.a)(e,"refresher-active",1!==this.state),Object(n.a)(e,"refresher-pulling",2===this.state),Object(n.a)(e,"refresher-ready",4===this.state),Object(n.a)(e,"refresher-refreshing",8===this.state),Object(n.a)(e,"refresher-cancelling",16===this.state),Object(n.a)(e,"refresher-completing",32===this.state),e)})}},{key:"el",get:function(){return Object(c.g)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),e}();T.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid #ececec;background:white;-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};var P=function(){function e(r){Object(a.a)(this,e),Object(c.l)(this,r)}return Object(l.a)(e,[{key:"componentWillLoad",value:function(){if(void 0===this.pullingIcon){var e=Object(f.b)(this),r=void 0!==this.el.style.webkitOverflowScrolling?"lines":"arrow-down";this.pullingIcon=f.c.get("refreshingIcon","ios"===e&&Object(f.e)("mobile")?f.c.get("spinner",r):"circular")}if(void 0===this.refreshingSpinner){var t=Object(f.b)(this);this.refreshingSpinner=f.c.get("refreshingSpinner",f.c.get("spinner","ios"===t?"lines":"circular"))}}},{key:"render",value:function(){var e=this.pullingIcon,r=null!=e&&void 0!==g.a[e],t=Object(f.b)(this);return Object(c.j)(c.b,{class:t},Object(c.j)("div",{class:"refresher-pulling"},this.pullingIcon&&r&&Object(c.j)("div",{class:"refresher-pulling-icon"},Object(c.j)("div",{class:"spinner-arrow-container"},Object(c.j)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===t&&"circular"===this.pullingIcon&&Object(c.j)("div",{class:"arrow-container"},Object(c.j)("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!r&&Object(c.j)("div",{class:"refresher-pulling-icon"},Object(c.j)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&Object(c.j)("div",{class:"refresher-pulling-text",innerHTML:Object(d.a)(this.pullingText)})),Object(c.j)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&Object(c.j)("div",{class:"refresher-refreshing-icon"},Object(c.j)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&Object(c.j)("div",{class:"refresher-refreshing-text",innerHTML:Object(d.a)(this.refreshingText)})))}},{key:"el",get:function(){return Object(c.g)(this)}}]),e}()},193:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n=function(e){try{if("string"!==typeof e||""===e)return e;var r=document.createDocumentFragment(),t=document.createElement("div");r.appendChild(t),t.innerHTML=e,a.forEach((function(e){for(var t=r.querySelectorAll(e),n=t.length-1;n>=0;n--){var o=t[n];o.parentNode?o.parentNode.removeChild(o):r.removeChild(o);for(var a=s(o),l=0;l<a.length;l++)i(a[l])}}));for(var n=s(r),o=0;o<n.length;o++)i(n[o]);var l=document.createElement("div");l.appendChild(r);var c=l.querySelector("div");return null!==c?c.innerHTML:l.innerHTML}catch(f){return console.error(f),""}},i=function e(r){if(!r.nodeType||1===r.nodeType){for(var t=r.attributes.length-1;t>=0;t--){var n=r.attributes.item(t),i=n.name;if(o.includes(i.toLowerCase())){var a=n.value;null!=a&&a.toLowerCase().includes("javascript:")&&r.removeAttribute(i)}else r.removeAttribute(i)}for(var l=s(r),c=0;c<l.length;c++)e(l[c])}},s=function(e){return null!=e.children?e.children:e.childNodes},o=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},196:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n={bubbles:{dur:1e3,circles:9,fn:function(e,r,t){var n="".concat(e*r/t-e,"ms"),i=2*Math.PI*r/t;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:function(e,r,t){var n=r/t,i="".concat(e*n-e,"ms"),s=2*Math.PI*n;return{r:5,style:{top:"".concat(9*Math.sin(s),"px"),left:"".concat(9*Math.cos(s),"px"),"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,r){var t=-110*r+"ms";return{r:6,style:{left:"".concat(9-9*r,"px"),"animation-delay":t}}}},lines:{dur:1e3,lines:12,fn:function(e,r,t){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*r+(r<6?180:-180),"deg)"),"animation-delay":"".concat(e*r/t-e,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,r,t){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*r+(r<6?180:-180),"deg)"),"animation-delay":"".concat(e*r/t-e,"ms")}}}}}}}]);
//# sourceMappingURL=62.4e721e2a.chunk.js.map