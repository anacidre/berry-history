!function(n){var e={};function o(t){if(e[t])return e[t].exports;var l=e[t]={i:t,l:!1,exports:{}};return n[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},o.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s=5)}([function(n,e){n.exports=ng.core},function(n,e){n.exports=ng.platformBrowser},function(n,e){n.exports=ng.common},function(n,e){n.exports=ng.elements},function(n,e,o){"use strict";o.r(e);var t=o(0);var l=o(3);class r{constructor(){this._title="<no title set>",this._description="<no description set>",this._src="https://goo.gl/STZhS6"}set title(n){this._title=n}get title(){return this._title}set description(n){this._description=n}get description(){return this._description}set src(n){this._src=n}get src(){return this._src}ngOnInit(){}}class a{constructor(n){this.injector=n;const e=Object(l.createCustomElement)(r,{injector:this.injector});console.log(e),customElements.define("bb-card",e)}ngDoBootstrap(){}}var i=[['.main__shadow {\n  \n  width: 320px;\n  height: 300px;\n  background-color: var(--background-color, #fff);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 2px; }\n  .main__shadow .shadow__image {\n    width: 320px;\n    height: 220px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px; }\n  .main__shadow .shadow__info {\n    font-family: "Lato", sans-serif;\n    padding: 1% 4% 0 4%;\n    color: var(--color, #4a4a4a);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n  .main__shadow .shadow__info .shadow__title {\n      font-size: 1em; }\n  .main__shadow .shadow__info .shadow__description {\n      font-size: 0.7em; }\n']],s=t["ɵcrt"]({encapsulation:1,styles:i,data:{}});function c(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,6,"div",[["class","main__shadow"]],null,null,null,null,null)),(n()(),t["ɵeld"](1,0,null,null,0,"img",[["alt","title"],["class","shadow__image"],["id","shadow-image"]],[[8,"src",4]],null,null,null,null)),(n()(),t["ɵeld"](2,0,null,null,4,"div",[["class","shadow__info"],["id","shadow-info"]],null,null,null,null,null)),(n()(),t["ɵeld"](3,0,null,null,1,"h1",[["class","shadow__title"],["id","title"],["name","title"],["role","header"]],null,null,null,null,null)),(n()(),t["ɵted"](4,null,["",""])),(n()(),t["ɵeld"](5,0,null,null,1,"p",[["class","shadow__description"],["id","description"],["name","description"]],null,null,null,null,null)),(n()(),t["ɵted"](6,null,["",""]))],null,function(n,e){var o=e.component;n(e,1,0,t["ɵinlineInterpolate"](1,"",o._src,"")),n(e,4,0,o._title),n(e,6,0,o._description)})}var d=t["ɵccf"]("bb-card",r,function(n){return t["ɵvid"](0,[(n()(),t["ɵeld"](0,0,null,null,1,"bb-card",[],null,null,null,c,s)),t["ɵdid"](1,114688,null,0,r,[],null,null)],function(n,e){n(e,1,0)},null)},{title:"title",description:"description",src:"src"},{},[]),u=o(2),p=o(1),_=t["ɵcmf"](a,[],function(n){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[d]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](5120,t.LOCALE_ID,t["ɵangular_packages_core_core_k"],[[3,t.LOCALE_ID]]),t["ɵmpd"](4608,u.NgLocalization,u.NgLocaleLocalization,[t.LOCALE_ID,[2,u["ɵangular_packages_common_common_a"]]]),t["ɵmpd"](4608,t.Compiler,t.Compiler,[]),t["ɵmpd"](5120,t.APP_ID,t["ɵangular_packages_core_core_f"],[]),t["ɵmpd"](5120,t.IterableDiffers,t["ɵangular_packages_core_core_i"],[]),t["ɵmpd"](5120,t.KeyValueDiffers,t["ɵangular_packages_core_core_j"],[]),t["ɵmpd"](4608,p.DomSanitizer,p["ɵDomSanitizerImpl"],[u.DOCUMENT]),t["ɵmpd"](6144,t.Sanitizer,null,[p.DomSanitizer]),t["ɵmpd"](4608,p.HAMMER_GESTURE_CONFIG,p.HammerGestureConfig,[]),t["ɵmpd"](5120,p.EVENT_MANAGER_PLUGINS,function(n,e,o,t,l,r,a,i){return[new p["ɵDomEventsPlugin"](n,e,o),new p["ɵKeyEventsPlugin"](t),new p["ɵHammerGesturesPlugin"](l,r,a,i)]},[u.DOCUMENT,t.NgZone,t.PLATFORM_ID,u.DOCUMENT,u.DOCUMENT,p.HAMMER_GESTURE_CONFIG,t["ɵConsole"],[2,p.HAMMER_LOADER]]),t["ɵmpd"](4608,p.EventManager,p.EventManager,[p.EVENT_MANAGER_PLUGINS,t.NgZone]),t["ɵmpd"](135680,p["ɵDomSharedStylesHost"],p["ɵDomSharedStylesHost"],[u.DOCUMENT]),t["ɵmpd"](4608,p["ɵDomRendererFactory2"],p["ɵDomRendererFactory2"],[p.EventManager,p["ɵDomSharedStylesHost"]]),t["ɵmpd"](6144,t.RendererFactory2,null,[p["ɵDomRendererFactory2"]]),t["ɵmpd"](6144,p["ɵSharedStylesHost"],null,[p["ɵDomSharedStylesHost"]]),t["ɵmpd"](4608,t.Testability,t.Testability,[t.NgZone]),t["ɵmpd"](1073742336,u.CommonModule,u.CommonModule,[]),t["ɵmpd"](1024,t.ErrorHandler,p["ɵangular_packages_platform_browser_platform_browser_a"],[]),t["ɵmpd"](1024,t.APP_INITIALIZER,function(n){return[p["ɵangular_packages_platform_browser_platform_browser_j"](n)]},[[2,t.NgProbeToken]]),t["ɵmpd"](512,t.ApplicationInitStatus,t.ApplicationInitStatus,[[2,t.APP_INITIALIZER]]),t["ɵmpd"](131584,t.ApplicationRef,t.ApplicationRef,[t.NgZone,t["ɵConsole"],t.Injector,t.ErrorHandler,t.ComponentFactoryResolver,t.ApplicationInitStatus]),t["ɵmpd"](1073742336,t.ApplicationModule,t.ApplicationModule,[t.ApplicationRef]),t["ɵmpd"](1073742336,p.BrowserModule,p.BrowserModule,[[3,p.BrowserModule]]),t["ɵmpd"](1073742336,a,a,[t.Injector]),t["ɵmpd"](256,t["ɵAPP_ROOT"],!0,[])])});Object(t.enableProdMode)(),p.platformBrowser().bootstrapModuleFactory(_).catch(n=>console.log(n))},function(n,e,o){n.exports=o(4)}]);