(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c}));const r={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{r.selection()},o=()=>{r.selectionStart()},s=()=>{r.selectionChanged()},c=()=>{r.selectionEnd()},a=t=>{r.impact(t)}},"2g2N":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("mrSG"),i=n("fXoL"),o=n("TEn/");let s=(()=>{class t{constructor(t){this.toastController=t}presentToast(t){return Object(r.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:t,duration:2e3,color:"primary",position:"bottom",cssClass:"toast-error",translucent:!1,animated:!0,mode:"ios"})).present()}))}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(o.y))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"5dVO":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("mrSG"),i=n("fXoL"),o=n("TEn/");let s=(()=>{class t{constructor(t){this.loadingController=t}loadingPresent(t=null,e=null){return Object(r.a)(this,void 0,void 0,(function*(){const n=yield this.loadingController.create({message:t,duration:e,spinner:"bubbles",mode:"ios"});return yield n.present()}))}loadingDismiss(){return Object(r.a)(this,void 0,void 0,(function*(){setTimeout(()=>this.loadingController.dismiss(),1e3)}))}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(o.u))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const r=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const r=e/n,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},NKIX:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("QX1p"),i=n("ItpF"),o=n("2c9M");const s=(t,e)=>{let n,s;const c=(t,r,i)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,r);o&&e(o)?o!==n&&(u(),a(o,i)):u()},a=(t,e)=>{n=t,s||(s=n);const i=n;Object(r.n)(()=>i.classList.add("ion-activated")),e()},u=(t=!1)=>{if(!n)return;const e=n;Object(r.n)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,o.a),onMove:t=>c(t.currentX,t.currentY,o.b),onEnd:()=>{u(!0),Object(o.e)(),s=void 0}})}},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));const r=async(t,e,n,r,i)=>{if(t)return t.attachViewToDom(e,n,i,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return r&&r.forEach(t=>o.classList.add(t)),i&&Object.assign(o,i),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},i=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},hcCc:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return c}));const r=(t,e)=>null!==e.closest(t),i=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,n,r)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n,r)}return!1}},lGQG:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("2Vo4"),i=n("fXoL"),o=n("tk/3"),s=n("AytR");let c=(()=>{class t{constructor(t){this.http=t}post(t,e){const n=new o.c;return n.append("Accept","application/json"),n.append("Content-Type","application/x-www-form-urlencoded"),n.append("Access-Control-Allow-Origin","*"),this.http.post(s.a.apiUrl+t,e,{headers:n,withCredintials:!1})}get(t){const e=new o.c({});return this.http.get(s.a.apiUrl+t,{headers:e})}postData(t,e){const n=new o.c({});return this.http.post(s.a.apiUrl+t,e,{headers:n,withCredintials:!1})}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(o.a))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var a=n("e8h1");let u=(()=>{class t{constructor(t){this.storage=t}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(a.b))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=n("tyNb"),p=n("TEn/");let d=(()=>{class t{constructor(t,e,n,i,o){this.httpService=t,this.storageService=e,this.storage=n,this.router=i,this.nav=o,this.userData$=new r.a([])}GetMasterEbook(){return this.httpService.get("GetMasterEbook")}GetEbookTermAlphabetical(t){return this.httpService.post("GetEbookTermAlphabetical",t)}GetEbookTerm(t){return this.httpService.post("GetEbookTerm",t)}GetEbookTermSearch(t){return this.httpService.post("GetEbookTerm",t)}GetTermDescription(t){return this.httpService.post("GetTermDescription",t)}GetDrugTerm(t){return this.httpService.post("GetDrugTerm",t)}GetDrugTermDescription(t){return this.httpService.get("GetDrugTermDescription/"+t)}GetCriticalName(t){return this.httpService.post("GetCriticalName",t)}GetCriticalNameDescription(t){return this.httpService.get("GetCriticalNameDescription/"+t)}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(c),i.Qb(u),i.Qb(a.b),i.Qb(l.g),i.Qb(p.v))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);