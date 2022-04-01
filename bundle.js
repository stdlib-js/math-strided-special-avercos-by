// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).avercosBy=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,f=n.__lookupSetter__;var l=t,c=function(r,e,t){var l,c,v,_;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(i.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),v="get"in t,_="set"in t,c&&(v||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&a&&a.call(r,e,t.get),_&&u&&u.call(r,e,t.set),r},v=e()?l:c;var _=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})};var d=function(r,e,t,n,o,a,u,i){var f,l,c,v;if(r<=0)return n;for(f=t<0?(1-r)*t:0,l=o<0?(1-r)*o:0,v=0;v<r;v++)void 0!==(c=u.call(i,e[f],v,f,l,e,n))&&(n[l]=a(c)),f+=t,l+=o;return n};_(d,"ndarray",(function(r,e,t,n,o,a,u,i,f,l){var c,v,_,d;if(r<=0)return o;for(c=n,v=u,d=0;d<r;d++)void 0!==(_=f.call(l,e[c],d,c,v,e,o))&&(o[v]=i(_)),c+=t,v+=a;return o}));var p=d;var y=function(r){return r!=r},s=Math.sqrt,b=.7853981633974483;var j=y,m=s,g=b,h=function(r){var e,t;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(e=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,t=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(e=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),t=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),e/t)},w=function(r){var e,t;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(e=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),t=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(e=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),t=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),e/t)};var N=y,O=function(r){var e,t,n,o,a;if(j(r))return NaN;if(r>0?n=r:(e=!0,n=-r),n>1)return NaN;if(n>.625)o=(t=1-n)*w(t),t=m(t+t),a=g-t,a-=t=t*o-6123233995736766e-32,a+=g;else{if(n<1e-8)return r;a=n*(a=(t=n*n)*h(t))+n}return e?-a:a},P=s,T=b;var x=function(r){var e;return N(r)||r<-1||r>1?NaN:r>.5?2*O(P(.5-.5*r)):(e=T-O(r),e+=6123233995736766e-32,e+=T)};var E=function(r){return x(1+r)},S=p,k=E;var A=p.ndarray,G=E;var V=function(r,e,t,n,o,a,u){return S(r,e,t,n,o,k,a,u)};return _(V,"ndarray",(function(r,e,t,n,o,a,u,i,f){return A(r,e,t,n,o,a,u,G,i,f)})),V}));
//# sourceMappingURL=bundle.js.map
