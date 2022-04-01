// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,a=n.toString,o=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,f=function(r,e,t){var c,f,v,_;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),v="get"in t,_="set"in t,f&&(v||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&o&&o.call(r,e,t.get),_&&u&&u.call(r,e,t.set),r},v=e()?c:f;var _=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r,e,t,n,a,o,u,i){var l,c,f,v;if(r<=0)return n;for(l=t<0?(1-r)*t:0,c=a<0?(1-r)*a:0,v=0;v<r;v++)void 0!==(f=u.call(i,e[l],v,l,c,e,n))&&(n[c]=o(f)),l+=t,c+=a;return n};_(p,"ndarray",(function(r,e,t,n,a,o,u,i,l,c){var f,v,_,p;if(r<=0)return a;for(f=n,v=u,p=0;p<r;p++)void 0!==(_=l.call(c,e[f],p,f,v,e,a))&&(a[v]=i(_)),f+=t,v+=o;return a}));var d=p;var y=function(r){return r!=r},b=Math.sqrt,s=.7853981633974483;var j=y,g=b,m=function(r){var e,t;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(e=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,t=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(e=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),t=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),e/t)},w=function(r){var e,t;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(e=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),t=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(e=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),t=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),e/t)};var h=y,N=function(r){var e,t,n,a,o;if(j(r))return NaN;if(r>0?n=r:(e=!0,n=-r),n>1)return NaN;if(n>.625)a=(t=1-n)*w(t),o=.7853981633974483-(t=g(t+t)),o-=t=t*a-6123233995736766e-32,o+=.7853981633974483;else{if(n<1e-8)return r;o=n*(o=(t=n*n)*m(t))+n}return e?-o:o},O=b,P=s;var E=function(r){var e;return h(r)||r<-1||r>1?NaN:r>.5?2*N(O(.5-.5*r)):(e=P-N(r),e+=6123233995736766e-32,e+=P)};var S=function(r){return E(1+r)},k=d,x=S;var A=d.ndarray,G=S;var T=function(r,e,t,n,a,o,u){return k(r,e,t,n,a,x,o,u)},V=function(r,e,t,n,a,o,u,i,l){return A(r,e,t,n,a,o,u,G,i,l)};_(T,"ndarray",V);var q=T;export{q as default,V as ndarray};
//# sourceMappingURL=mod.js.map
