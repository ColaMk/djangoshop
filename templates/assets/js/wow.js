/* WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/
(function(){var h,i,j,k,l,m=function(c,d){return function(){return c.apply(d,arguments)}},n=[].indexOf||function(d){for(var e=0,f=this.length;f>e;e++){if(e in this&&this[e]===d){return e}}return -1};i=function(){function b(){}return b.prototype.extend=function(e,f){var g,o;for(g in f){o=f[g],null==e[g]&&(e[g]=o)}return e},b.prototype.isMobile=function(c){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c)},b.prototype.createEvent=function(f,g,o,p){var q;return null==g&&(g=!1),null==o&&(o=!1),null==p&&(p=null),null!=document.createEvent?(q=document.createEvent("CustomEvent"),q.initCustomEvent(f,g,o,p)):null!=document.createEventObject?(q=document.createEventObject(),q.eventType=f):q.eventName=f,q},b.prototype.emitEvent=function(c,d){return null!=c.dispatchEvent?c.dispatchEvent(d):d in (null!=c)?c[d]():"on"+d in (null!=c)?c["on"+d]():void 0},b.prototype.addEvent=function(d,e,f){return null!=d.addEventListener?d.addEventListener(e,f,!1):null!=d.attachEvent?d.attachEvent("on"+e,f):d[e]=f},b.prototype.removeEvent=function(d,e,f){return null!=d.removeEventListener?d.removeEventListener(e,f,!1):null!=d.detachEvent?d.detachEvent("on"+e,f):delete d[e]},b.prototype.innerHeight=function(){return"innerHeight" in window?window.innerHeight:document.documentElement.clientHeight},b}(),j=this.WeakMap||this.MozWeakMap||(j=function(){function b(){this.keys=[],this.values=[]}return b.prototype.get=function(g){var o,p,q,r,s;for(s=this.keys,o=q=0,r=s.length;r>q;o=++q){if(p=s[o],p===g){return this.values[o]}}},b.prototype.set=function(o,p){var q,r,s,t,u;for(u=this.keys,q=s=0,t=u.length;t>s;q=++s){if(r=u[q],r===o){return void (this.values[q]=p)}}return this.keys.push(o),this.values.push(p)},b}()),h=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(h=function(){function b(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return b.notSupported=!0,b.prototype.observe=function(){},b}()),k=this.getComputedStyle||function(c,d){return this.getPropertyValue=function(a){var e;return"float"===a&&(a="styleFloat"),l.test(a)&&a.replace(l,function(f,g){return g.toUpperCase()}),(null!=(e=c.currentStyle)?e[a]:void 0)||null},this},l=/(\-([a-z]){1})/g,this.WOW=function(){function a(b){null==b&&(b={}),this.scrollCallback=m(this.scrollCallback,this),this.scrollHandler=m(this.scrollHandler,this),this.resetAnimation=m(this.resetAnimation,this),this.start=m(this.start,this),this.scrolled=!0,this.config=this.util().extend(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new j,this.wowEvent=this.util().createEvent(this.config.boxClass)}return a.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},a.prototype.init=function(){var b;return this.element=window.document.documentElement,"interactive"===(b=document.readyState)||"complete"===b?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},a.prototype.start=function(){var f,g,o,p;if(this.stopped=!1,this.boxes=function(){var b,q,r,s;for(r=this.element.querySelectorAll("."+this.config.boxClass),s=[],b=0,q=r.length;q>b;b++){f=r[b],s.push(f)}return s}.call(this),this.all=function(){var b,q,r,s;for(r=this.boxes,s=[],b=0,q=r.length;q>b;b++){f=r[b],s.push(f)}return s}.call(this),this.boxes.length){if(this.disabled()){this.resetStyle()}else{for(p=this.boxes,g=0,o=p.length;o>g;g++){f=p[g],this.applyStyle(f,!0)}}}return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new h(function(b){return function(q){var r,s,t,u,v;for(v=[],r=0,s=q.length;s>r;r++){u=q[r],v.push(function(){var e,w,x,y;for(x=u.addedNodes||[],y=[],e=0,w=x.length;w>e;e++){t=x[e],y.push(this.doSync(t))}return y}.call(b))}return v}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},a.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},a.prototype.sync=function(c){return h.notSupported?this.doSync(this.element):void 0},a.prototype.doSync=function(g){var o,p,q,r,s;if(null==g&&(g=this.element),1===g.nodeType){for(g=g.parentNode||g,r=g.querySelectorAll("."+this.config.boxClass),s=[],p=0,q=r.length;q>p;p++){o=r[p],n.call(this.all,o)<0?(this.boxes.push(o),this.all.push(o),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(o,!0),s.push(this.scrolled=!0)):s.push(void 0)}return s}},a.prototype.show=function(b){return this.applyStyle(b),b.className=b.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(b),this.util().emitEvent(b,this.wowEvent),this.util().addEvent(b,"animationend",this.resetAnimation),this.util().addEvent(b,"oanimationend",this.resetAnimation),this.util().addEvent(b,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(b,"MSAnimationEnd",this.resetAnimation),b},a.prototype.applyStyle=function(f,g){var o,p,q;return p=f.getAttribute("data-wow-duration"),o=f.getAttribute("data-wow-delay"),q=f.getAttribute("data-wow-iteration"),this.animate(function(b){return function(){return b.customStyle(f,g,p,o,q)}}(this))},a.prototype.animate=function(){return"requestAnimationFrame" in window?function(b){return window.requestAnimationFrame(b)}:function(b){return b()}}(),a.prototype.resetStyle=function(){var f,g,o,p,q;for(p=this.boxes,q=[],g=0,o=p.length;o>g;g++){f=p[g],q.push(f.style.visibility="visible")}return q},a.prototype.resetAnimation=function(c){var d;return c.type.toLowerCase().indexOf("animationend")>=0?(d=c.target||c.srcElement,d.className=d.className.replace(this.config.animateClass,"").trim()):void 0},a.prototype.customStyle=function(f,g,o,p,q){return g&&this.cacheAnimationName(f),f.style.visibility=g?"hidden":"visible",o&&this.vendorSet(f.style,{animationDuration:o}),p&&this.vendorSet(f.style,{animationDelay:p}),q&&this.vendorSet(f.style,{animationIterationCount:q}),this.vendorSet(f.style,{animationName:g?"none":this.cachedAnimationName(f)}),f},a.prototype.vendors=["moz","webkit"],a.prototype.vendorSet=function(g,o){var p,q,r,s;q=[];for(p in o){r=o[p],g[""+p]=r,q.push(function(){var c,e,f,t;for(f=this.vendors,t=[],c=0,e=f.length;e>c;c++){s=f[c],t.push(g[""+s+p.charAt(0).toUpperCase()+p.substr(1)]=r)}return t}.call(this))}return q},a.prototype.vendorCSS=function(d,o){var p,q,r,s,t,u;for(t=k(d),s=t.getPropertyCSSValue(o),r=this.vendors,p=0,q=r.length;q>p;p++){u=r[p],s=s||t.getPropertyCSSValue("-"+u+"-"+o)}return s},a.prototype.animationName=function(d){var e;try{e=this.vendorCSS(d,"animation-name").cssText}catch(f){e=k(d).getPropertyValue("animation-name")}return"none"===e?"":e},a.prototype.cacheAnimationName=function(b){return this.animationNameCache.set(b,this.animationName(b))},a.prototype.cachedAnimationName=function(b){return this.animationNameCache.get(b)},a.prototype.scrollHandler=function(){return this.scrolled=!0},a.prototype.scrollCallback=function(){var b;return !this.scrolled||(this.scrolled=!1,this.boxes=function(){var f,g,o,p;for(o=this.boxes,p=[],f=0,g=o.length;g>f;f++){b=o[f],b&&(this.isVisible(b)?this.show(b):p.push(b))}return p}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},a.prototype.offsetTop=function(c){for(var d;void 0===c.offsetTop;){c=c.parentNode}for(d=c.offsetTop;c=c.offsetParent;){d+=c.offsetTop}return d},a.prototype.isVisible=function(g){var o,p,q,r,s;return p=g.getAttribute("data-wow-offset")||this.config.offset,s=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,r=s+Math.min(this.element.clientHeight,this.util().innerHeight())-p,q=this.offsetTop(g),o=q+g.clientHeight,r>=q&&o>=s},a.prototype.util=function(){return null!=this._util?this._util:this._util=new i},a.prototype.disabled=function(){return !this.config.mobile&&this.util().isMobile(navigator.userAgent)},a}()}).call(this);