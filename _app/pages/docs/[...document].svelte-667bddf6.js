import{S as t,i as n,s as e,k as o,l as a,a9 as i,d as s,n as r,aK as c,f as u,K as d,E as l,aL as p}from"../../chunks/vendor-7318edf3.js";import{a as f}from"../../chunks/partialsconfig-bfa6fda9.js";function m(t){let n,e,l,f,m=t[0].render+"";return document.title=n=t[0].properties.title+" — "+t[1].application.title,{c(){e=o(),l=new p,f=a(),this.h()},l(t){i('[data-svelte="svelte-1f1iq3w"]',document.head).forEach(s),e=r(t),l=c(t),f=a(),this.h()},h(){l.a=f},m(t,n){u(t,e,n),l.m(m,t,n),u(t,f,n)},p(t,[e]){3&e&&n!==(n=t[0].properties.title+" — "+t[1].application.title)&&(document.title=n),1&e&&m!==(m=t[0].render+"")&&l.p(m)},i:d,o:d,d(t){t&&s(e),t&&s(f),t&&l.d()}}}var h=function(t,n,e,o){return new(e||(e=Promise))((function(a,i){function s(t){try{c(o.next(t))}catch(n){i(n)}}function r(t){try{c(o.throw(t))}catch(n){i(n)}}function c(t){var n;t.done?a(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(s,r)}c((o=o.apply(t,n||[])).next())}))};const v=({fetch:t,page:n})=>h(void 0,void 0,void 0,(function*(){const{document:e=""}=n.params,o=yield t(`/api/v2/content/documentation/${e}.json`);if(!o.ok){const t=yield o.json();return{status:o.status,error:t.code}}return{props:{documentation:(yield o.json()).data}}}));function y(t,n,e){let o;l(t,f,(t=>e(1,o=t)));let{documentation:a}=n;return t.$$set=t=>{"documentation"in t&&e(0,a=t.documentation)},[a,o]}export default class extends t{constructor(t){super(),n(this,t,y,m,e,{documentation:0})}}export{v as load};
