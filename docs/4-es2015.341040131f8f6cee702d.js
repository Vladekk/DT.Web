(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1u0J":function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");function u(n,l,e,t){var u,o=arguments.length,r=o<3?l:null===t?t=Object.getOwnPropertyDescriptor(l,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(n,l,e,t);else for(var i=n.length-1;i>=0;i--)(u=n[i])&&(r=(o<3?u(r):o>3?u(l,e,r):u(l,e))||r);return o>3&&r&&Object.defineProperty(l,e,r),r}var o=e("quSY"),r=e("HDdC"),i=e("D0XW"),s=e("Y7HM");function c(n){const{subscriber:l,counter:e,period:t}=n;l.next(e),this.schedule({subscriber:l,counter:e+1,period:t},t)}var b=e("cp0P"),a=e("SxV6"),p=e("lJxs"),d=e("7wIv"),h=e.n(d);let f=(()=>{class n{constructor(n,l,e,t){this.scheduleService=n,this.activatedRoute=l,this.spinner=e,this.logService=t,this.now=new Date,this.subscription=new o.a}ngOnDestroy(){this.subscription.unsubscribe()}ngOnInit(){const n=function(n=0,l=i.a){return(!Object(s.a)(n)||n<0)&&(n=0),l&&"function"==typeof l.schedule||(l=i.a),new r.a(e=>(e.add(l.schedule(c,n,{subscriber:e,counter:0,period:n})),e))}(1e3).subscribe(()=>{this.now=new Date});this.subscription.add(n),this.activatedRoute.paramMap.subscribe(n=>{this.spinner.show();const l=n.get("routeNumber");return this.logService.Log(`Route selected is ${l}, getting schedule`),this.GetSchedule(l),l})}IsClosestToNow(n,l){let e=l.filter(n=>n>=this.now);return e.length>0&&e[0]==n}suppressUpdates(n){}MapToVm(n){return n.map(l=>({RunTime:l,IsClosest:this.IsClosestToNow(l,n)}))}GetSchedule(n){this.fromCenterSchedule$=this.scheduleService.GetScheduleInfo(n).pipe(Object(a.a)(),Object(p.a)(([n])=>n),Object(p.a)(this.MapToVm)),this.toCenterSchedule$=this.scheduleService.GetScheduleInfo(n).pipe(Object(a.a)(),Object(p.a)(([,n])=>n),Object(p.a)(this.MapToVm)),Object(b.a)(this.fromCenterSchedule$,this.toCenterSchedule$).subscribe({complete:()=>this.spinner.hide(),error:()=>this.spinner.hide()})}}return u([h.a],n.prototype,"IsClosestToNow",null),u([h.a],n.prototype,"MapToVm",null),n})();class w{}var g=e("pMnS"),m=e("9AJC"),v=e("SVse"),C=e("G0yt"),y=e("iInd");class k{constructor(n,l){this.scheduleService=n,this.activatedRoute=l,this.Routes=[],this.open=new t.m,this.close=new t.m}onOpenChange(n){n?this.open.emit(null):this.close.emit(null)}ngOnInit(){this.routes$=this.scheduleService.GetAllRoutes(),this.activatedRoute.paramMap.subscribe(n=>{this.RouteNumber=n.get("routeNumber")})}}class A{static DateToUtcAndBack(n,l){return new Date(n.getTime()+60*(new Date).getTimezoneOffset()*1e3*(l?-1:1))}}var O=function(n){return n[n.ToUtc=0]="ToUtc",n[n.FromUtc=1]="FromUtc",n}({});let S=(()=>{class n{constructor(n,l,e){this.http=n,this.configService=l,this.logService=e,this.takeHowMuch=4,this.routeDataSupplier=this.http.post(l.ScheduleServiceUrl+"GetAllRoutes",{},{headers:{"Content-Type":"application/json"}})}getProperDate(n){const l=new Date(Date.parse(n));return A.DateToUtcAndBack(l,O.FromUtc)}fixDates([n,l]){return[n.map(this.getProperDate).slice(0,this.takeHowMuch),l.map(this.getProperDate).slice(0,this.takeHowMuch)]}GetScheduleInfo(n){return this.logService.Log(`Subscribing to fetch route data ${n}`),this.http.post(this.configService.ScheduleServiceUrl+"GetClosestRuns",{BusNumber:n},{headers:{"Content-Type":"application/json"}}).pipe(Object(p.a)(this.fixDates))}GetAllRoutes(){return this.routeDataSupplier}}return u([h.a],n.prototype,"getProperDate",null),u([h.a],n.prototype,"fixDates",null),n})();var D=t.ob({encapsulation:0,styles:[["button[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{font-size:4vh}.outerRow[_ngcontent-%COMP%]{margin-top:4vh}div[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{font-size:3.5vh}"]],data:{}});function M(n){return t.Mb(0,[(n()(),t.qb(0,0,null,null,4,"div",[["class","dropdown-item"],["ngbDropdownItem",""]],[[2,"disabled",null]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.Cb(n,2).click()&&u),u},null,null)),t.pb(1,16384,[[4,4]],0,C.u,[t.k],null,null),(n()(),t.qb(2,0,[["routeLink",1]],null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.Cb(n,3).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t.pb(3,671744,null,0,y.l,[y.k,y.a,v.j],{routerLink:[0,"routerLink"]},null),(n()(),t.Kb(4,null,[""," "]))],function(n,l){n(l,3,0,t.ub(1,"/Route/",l.context.$implicit.Number,""))},function(n,l){n(l,0,0,t.Cb(l,1).disabled),n(l,2,0,t.Cb(l,3).target,t.Cb(l,3).href),n(l,4,0,l.context.$implicit.Number)})}function I(n){return t.Mb(0,[(n()(),t.qb(0,0,null,null,4,"div",[["style","float:left;"]],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,3,null,M)),t.pb(2,278528,null,0,v.l,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),t.Eb(131072,v.b,[t.h]),t.Eb(0,v.t,[])],function(n,l){var e=l.component;n(l,2,0,t.Lb(l,2,0,t.Cb(l,4).transform(t.Lb(l,2,0,t.Cb(l,3).transform(e.routes$)),l.parent.context.index,l.parent.context.index+10)))},null)}function T(n){return t.Mb(0,[(n()(),t.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,1,null,I)),t.pb(2,16384,null,0,v.m,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,l.context.index%10==0)},null)}function q(n){return t.Mb(2,[(n()(),t.qb(0,0,null,null,15,"div",[["class","row outerRow"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,14,"div",[["class","col-xs-4 offset-1"]],null,null,null,null,null)),(n()(),t.qb(2,0,null,null,13,"div",[["ngbDropdown",""]],[[2,"show",null]],null,null,null,null)),t.pb(3,1720320,[["dropRoute",4]],3,C.r,[t.h,C.t,v.d,t.y,t.k,t.C,[2,C.fb]],null,null),t.Ib(603979776,1,{_menu:0}),t.Ib(603979776,2,{_menuElement:0}),t.Ib(603979776,3,{_anchor:0}),(n()(),t.qb(7,0,null,null,2,"button",[["aria-haspopup","true"],["class","btn btn-outline-primary mr-2 dropdown-toggle"],["id","dropdownManual"],["ngbDropdownAnchor",""]],[[1,"aria-expanded",0]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.Cb(n,3).toggle()&&u),u},null,null)),t.pb(8,16384,[[3,4]],0,C.s,[C.r,t.k],null,null),(n()(),t.Kb(9,null,["",""])),(n()(),t.qb(10,0,[[2,0]],null,5,"div",[["aria-labelledby","dropdownManual"],["ngbDropdownMenu",""],["style","width: 40vh;"]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],[[null,"keydown.ArrowUp"],[null,"keydown.ArrowDown"],[null,"keydown.Home"],[null,"keydown.End"],[null,"keydown.Enter"],[null,"keydown.Space"]],function(n,l,e){var u=!0;return"keydown.ArrowUp"===l&&(u=!1!==t.Cb(n,11).dropdown.onKeyDown(e)&&u),"keydown.ArrowDown"===l&&(u=!1!==t.Cb(n,11).dropdown.onKeyDown(e)&&u),"keydown.Home"===l&&(u=!1!==t.Cb(n,11).dropdown.onKeyDown(e)&&u),"keydown.End"===l&&(u=!1!==t.Cb(n,11).dropdown.onKeyDown(e)&&u),"keydown.Enter"===l&&(u=!1!==t.Cb(n,11).dropdown.onKeyDown(e)&&u),"keydown.Space"===l&&(u=!1!==t.Cb(n,11).dropdown.onKeyDown(e)&&u),u},null,null)),t.pb(11,16384,[[1,4]],1,C.v,[C.r],null,null),t.Ib(603979776,4,{menuItems:1}),(n()(),t.fb(16777216,null,null,2,null,T)),t.pb(14,278528,null,0,v.l,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),t.Eb(131072,v.b,[t.h])],function(n,l){var e=l.component;n(l,14,0,t.Lb(l,14,0,t.Cb(l,15).transform(e.routes$)))},function(n,l){var e=l.component;n(l,2,0,t.Cb(l,3).isOpen()),n(l,7,0,t.Cb(l,8).dropdown.isOpen()),n(l,9,0,e.RouteNumber),n(l,10,0,!0,t.Cb(l,11).dropdown.isOpen(),t.Cb(l,11).placement)})}var R=e("7g+E"),x=e("xWc1"),K=t.ob({encapsulation:0,styles:[["ul[_ngcontent-%COMP%]{font-size:4vh;display:block;float:left;list-style-type:none;font-family:Calibri,Verdana,sans-serif;margin-top:0}li[_ngcontent-%COMP%]:first-child{font-weight:700;font-size:4vh;color:#1a5600}.to[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{color:#8b0000}.highlight[_ngcontent-%COMP%]{color:red;font-weight:bolder}"]],data:{}});function j(n){return t.Mb(0,[(n()(),t.qb(0,0,null,null,5,"li",[],null,null,null,null,null)),t.Hb(512,null,v.C,v.D,[t.r,t.s,t.k,t.C]),t.pb(2,278528,null,0,v.k,[v.C],{ngClass:[0,"ngClass"]},null),t.Fb(3,{highlight:0}),(n()(),t.Kb(4,null,[" "," "])),t.Gb(5,2)],function(n,l){var e=n(l,3,0,l.context.$implicit.IsClosest);n(l,2,0,e)},function(n,l){var e=t.Lb(l,4,0,n(l,5,0,t.Cb(l.parent,0),l.context.$implicit.RunTime,"shortTime"));n(l,4,0,e)})}function F(n){return t.Mb(0,[(n()(),t.qb(0,0,null,null,6,"li",[],null,null,null,null,null)),t.Hb(512,null,v.C,v.D,[t.r,t.s,t.k,t.C]),t.pb(2,278528,null,0,v.k,[v.C],{ngClass:[0,"ngClass"]},null),t.Fb(3,{highlight:0}),(n()(),t.Kb(4,null,[" "," "])),t.Db(5,1),t.Gb(6,2)],function(n,l){var e=n(l,3,0,l.context.$implicit.IsClosest);n(l,2,0,e)},function(n,l){var e=t.Lb(l,4,0,n(l,6,0,t.Cb(l.parent,0),n(l,5,0,l.context.$implicit.RunTime),"shortTime"));n(l,4,0,e)})}function N(n){return t.Mb(2,[t.Eb(0,v.e,[t.t]),(n()(),t.qb(1,0,null,null,1,"app-route-selector",[],null,[[null,"close"],[null,"open"]],function(n,l,e){var t=!0,u=n.component;return"close"===l&&(t=!1!==u.suppressUpdates(!1)&&t),"open"===l&&(t=!1!==u.suppressUpdates(!0)&&t),t},q,D)),t.pb(2,114688,null,0,k,[S,y.a],null,{open:"open",close:"close"}),(n()(),t.qb(3,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.qb(4,0,null,null,5,"ul",[["class","from"]],null,null,null,null,null)),(n()(),t.qb(5,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t.Kb(-1,null,["From autoosta"])),(n()(),t.fb(16777216,null,null,2,null,j)),t.pb(8,278528,null,0,v.l,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),t.Eb(131072,v.b,[t.h]),(n()(),t.qb(10,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),t.qb(11,0,null,null,5,"ul",[["class","to"]],null,null,null,null,null)),(n()(),t.qb(12,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t.Kb(-1,null,["From end station"])),(n()(),t.fb(16777216,null,null,2,null,F)),t.pb(15,278528,null,0,v.l,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),t.Eb(131072,v.b,[t.h])],function(n,l){var e=l.component;n(l,2,0),n(l,8,0,t.Lb(l,8,0,t.Cb(l,9).transform(e.fromCenterSchedule$))),n(l,15,0,t.Lb(l,15,0,t.Cb(l,16).transform(e.toCenterSchedule$)))},null)}function P(n){return t.Mb(0,[(n()(),t.qb(0,0,null,null,1,"app-schedule",[],null,null,null,N,K)),t.pb(1,245760,null,0,f,[S,y.a,R.c,x.b],null,null)],function(n,l){n(l,1,0)},null)}var $=t.mb("app-schedule",f,P,{},{},[]),U=e("s7LF"),E=e("IheW"),_=e("AytR");let L=(()=>{class n{constructor(){this.ScheduleServiceUrl=_.a.ScheduleServiceUrl}}return n.ngInjectableDef=t.Qb({factory:function(){return new n},token:n,providedIn:"root"}),n})();e.d(l,"ScheduleModuleNgFactory",function(){return G});var G=t.nb(w,[f],function(n){return t.zb([t.Ab(512,t.j,t.Y,[[8,[g.a,m.a,m.b,m.f,m.g,m.c,m.d,m.e,$]],[3,t.j],t.w]),t.Ab(4608,v.o,v.n,[t.t,[2,v.H]]),t.Ab(4608,U.f,U.f,[]),t.Ab(4608,C.y,C.y,[t.j,t.q,C.nb,C.z]),t.Ab(4608,S,S,[E.c,L,x.b]),t.Ab(1073742336,v.c,v.c,[]),t.Ab(1073742336,y.m,y.m,[[2,y.r],[2,y.k]]),t.Ab(1073742336,C.w,C.w,[]),t.Ab(1073742336,C.c,C.c,[]),t.Ab(1073742336,C.f,C.f,[]),t.Ab(1073742336,C.g,C.g,[]),t.Ab(1073742336,C.k,C.k,[]),t.Ab(1073742336,C.l,C.l,[]),t.Ab(1073742336,U.e,U.e,[]),t.Ab(1073742336,U.a,U.a,[]),t.Ab(1073742336,C.q,C.q,[]),t.Ab(1073742336,C.A,C.A,[]),t.Ab(1073742336,C.E,C.E,[]),t.Ab(1073742336,C.H,C.H,[]),t.Ab(1073742336,C.K,C.K,[]),t.Ab(1073742336,C.N,C.N,[]),t.Ab(1073742336,C.Q,C.Q,[]),t.Ab(1073742336,C.V,C.V,[]),t.Ab(1073742336,C.Y,C.Y,[]),t.Ab(1073742336,C.Z,C.Z,[]),t.Ab(1073742336,C.ab,C.ab,[]),t.Ab(1073742336,C.B,C.B,[]),t.Ab(1073742336,w,w,[]),t.Ab(1024,y.i,function(){return[[{path:":routeNumber",component:f}]]},[])])})},"7wIv":function(n,l,e){"use strict";var t;function u(n,l,e){if(!e||typeof e.value!==t.typeOfFunction)throw new TypeError("Only methods can be decorated with @bind. <"+l+"> is not a method!");return{configurable:t.boolTrue,get:function(){var n=e.value.bind(this);return Object.defineProperty(this,l,{value:n,configurable:t.boolTrue,writable:t.boolTrue}),n}}}Object.defineProperty(l,"__esModule",{value:!0}),function(n){n.typeOfFunction="function",n.boolTrue=!0}(t||(t={})),l.bind=u,l.default=u}}]);