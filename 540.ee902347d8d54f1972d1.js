"use strict";(self.webpackChunkquantumca=self.webpackChunkquantumca||[]).push([[540],{17540:function(b,p,c){c.r(p),c.d(p,{ExceptionModule:function(){return z}});var u=c(61116),r=c(33330),a=c(5095),s=c(34375),l=c(33464),n=c(55548),m=function(){function t(){}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["exception-403"]],decls:1,vars:0,consts:[["type","403",2,"min-height","500px","height","80%"]],template:function(o,i){1&o&&n._UZ(0,"exception",0)},directives:[r.S],encapsulation:2}),t}(),g=c(58468),f=function(){function t(){}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["exception-500"]],decls:1,vars:0,consts:[["type","500",2,"min-height","500px","height","80%"]],template:function(o,i){1&o&&n._UZ(0,"exception",0)},directives:[r.S],encapsulation:2}),t}(),h=c(43362),v=c(88262),d=c(64897),E=c(75728);function T(t,e){if(1&t){var o=n.EpF();n.TgZ(0,"button",3),n.NdJ("click",function(){var M=n.CHM(o).$implicit;return n.oxw().go(M)}),n._uU(1),n.qZA()}if(2&t){var i=e.$implicit;n.xp6(1),n.hij("\u89e6\u53d1",i,"")}}var C=[{path:"403",component:m},{path:"404",component:g.Z},{path:"500",component:f},{path:"trigger",component:function(){function t(e,o){this.http=e,this.tokenService=o,this.types=[401,403,404,500]}return t.prototype.go=function(e){this.http.get("/api/"+e).subscribe()},t.prototype.refresh=function(){this.tokenService.set({token:"invalid-token"}),this.http.post("https://localhost:5001/auth").subscribe(function(e){return console.warn("\u6210\u529f",e)},function(e){console.log("\u6700\u540e\u7ed3\u679c\u5931\u8d25",e)})},t.\u0275fac=function(o){return new(o||t)(n.Y36(v.lP),n.Y36(h.T))},t.\u0275cmp=n.Xpm({type:t,selectors:[["exception-trigger"]],decls:5,vars:1,consts:[[1,"pt-lg"],["nz-button","","nzType","danger",3,"click",4,"ngFor","ngForOf"],["nz-button","","nzType","link",3,"click"],["nz-button","","nzType","danger",3,"click"]],template:function(o,i){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"nz-card"),n.YNc(2,T,2,1,"button",1),n.TgZ(3,"button",2),n.NdJ("click",function(){return i.refresh()}),n._uU(4,"\u89e6\u53d1\u5237\u65b0Token"),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(2),n.Q6J("ngForOf",i.types))},directives:[s.bd,u.sg,a.ix,d.w,E.dQ],encapsulation:2}),t}()}],y=function(){function t(){}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[l.Bz.forChild(C)],l.Bz]}),t}(),z=function(){function t(){}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[u.ez,r.p,a.sL,s.vh,y]]}),t}()}}]);