(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{DYX1:function(t,e,o){"use strict";o.r(e),o.d(e,"SearchpagePageModule",(function(){return u}));var n=o("ofXK"),i=o("3Pt+"),r=o("TEn/"),s=o("tyNb"),a=o("fXoL"),c=o("lGQG"),l=o("2g2N"),b=o("5dVO");function h(t,e){if(1&t){const t=a.Nb();a.Mb(0,"div"),a.Mb(1,"ion-item",6),a.Ub("click",(function(){a.cc(t);const o=e.$implicit;return a.Wb().getEbookTermDescription(o.id,o.term)})),a.Mb(2,"ion-label"),a.hc(3),a.Lb(),a.Lb(),a.Lb()}if(2&t){const t=e.$implicit;a.zb(3),a.jc(" ",t.term," ")}}const g=[{path:"",component:(()=>{class t{constructor(t,e,o,n){this.authService=t,this.toastService=e,this.loader=o,this.router=n,this.dummy=Array(10),this.dummyRest=[],this.Term=localStorage.getItem("term"),this.id=localStorage.getItem("ebook-term"),this.MasterEbook()}ngOnInit(){}MasterEbook(t){this.loader.loadingPresent();const e={MEbookID:this.id,TermChar:""};console.log(e),this.authService.GetEbookTerm(e).subscribe(t=>{if(!0===t.status){this.loader.loadingDismiss();for(let e=0;e<t.result.length;e++)this.allData=t.result[e].terms,null!=this.allData&&(console.log(JSON.stringify(this.allData)),this.allData.forEach(t=>{this.allData.push(t),this.dummyRest.push(t),console.log(JSON.stringify(t))}))}else this.loader.loadingDismiss(),this.dummy=[],this.toastService.presentToast(t.msg)},t=>{this.dummy=[],this.loader.loadingDismiss(),null!=JSON.stringify(t.error.errors)?this.toastService.presentToast(JSON.stringify(t.error.errors)):this.toastService.presentToast("Network Issue...")})}onSearchChange(t){console.log(t.detail.value),this.allData=this.dummyRest.filter(e=>e.term.toLowerCase().includes(t.detail.value.toLowerCase()))}getEbookTermDescription(t,e){localStorage.setItem("iddesc",t),localStorage.setItem("namedesc",e),this.router.navigateByUrl("term-description")}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(c.a),a.Jb(l.a),a.Jb(b.a),a.Jb(s.g))},t.\u0275cmp=a.Db({type:t,selectors:[["app-searchpage"]],decls:10,vars:1,consts:[["mode","ios"],["slot","start"],["color","light"],[1,"div_searchbar"],["mode","ios","placeholder","Search",1,"search_bar",2,"margin-top","15px",3,"ionChange"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(t,e){1&t&&(a.Mb(0,"ion-header",0),a.Mb(1,"ion-toolbar"),a.Mb(2,"ion-buttons",1),a.Kb(3,"ion-back-button",2),a.Lb(),a.Mb(4,"ion-title",2),a.hc(5," Search "),a.Lb(),a.Lb(),a.Lb(),a.Mb(6,"div",3),a.Mb(7,"ion-searchbar",4),a.Ub("ionChange",(function(t){return e.onSearchChange(t)})),a.Lb(),a.Lb(),a.Mb(8,"ion-content"),a.gc(9,h,4,1,"div",5),a.Lb()),2&t&&(a.zb(9),a.Zb("ngForOf",e.allData))},directives:[r.i,r.q,r.e,r.b,r.c,r.p,r.o,r.x,r.g,n.h,r.j,r.l],styles:["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:#1f58be;--background:linear-gradient(90deg,#1f58be,#197ac9)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{text-align:center}"]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(g)],s.i]}),t})(),u=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[n.b,i.a,r.s,d]]}),t})()}}]);