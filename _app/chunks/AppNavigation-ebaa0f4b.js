import{ad as Ne,ae as ze,S as V,i as Q,s as Y,Q as Pe,R as q,U as K,w as p,x as h,y as m,V as D,q as u,o as _,B as g,E as Z,Y as Te,Z as Me,k as C,m as S,g as w,d as b,l as v,af as Ae,n as O,p as B,ag as Oe,I as T,ah as ue,ai as G,aj as H,ak as E,al as Be,am as _e,an as Fe,ao as Ie,ap as qe,t as M,h as A,T as pe,F as Ke,aq as De,a3 as J,a4 as X,ar as Ue,as as ye,at as je,au as Ee,av as Le,aw as Re,ax as Ve,ay as Qe,az as Ye,aA as me,aB as ge,aC as he,aD as Je,j as de,e as Xe,c as Ze,a as Ge,b as W,K as He,aE as We,O as U,ab as xe,aF as et,aG as tt,aH as nt,ac as rt,aI as be,aJ as at,aK as lt,aL as ot,aM as st,aN as ft,aO as it,G as ct,aP as $t,a1 as we,aQ as ut,aR as _t,aS as pt,aT as mt,aU as gt,aV as ht,aW as dt,aX as bt,aY as wt}from"./vendor-1d888328.js";import{b as kt}from"./paths-4b3c6e7e.js";import{A as y,n as vt}from"./AppAnchor-fded1b5a.js";import{p as x}from"./preferences-075f76bc.js";import{m as Ct}from"./functional-5d85894f.js";const St=(s,e)=>Ne(s,{on_bind:e,binds:"control+/",repeat:!0}),L=ze.version;function Nt(s,e,n){let t=e.offsetTop;switch(n){case"center":t-=e.offsetHeight/2-s.offsetHeight/2;case"end":t+=e.offsetHeight-s.offsetHeight}return t-s.offsetTop}function ee(s,e="start",n="auto",t){const r=typeof s=="string"?document.querySelector(s):s;if(!r)throw ReferenceError(`bad argument #0 to 'scroll_into_container' (target '${s}' is invalid)`);const a=t!=null?t:r.parentElement;if(!a)throw ReferenceError("bad argument #0 to 'scroll_into_container' (target doesn't have parent element)");a.scrollTo({behavior:n,top:Nt(a,r,e)})}const{Map:zt}=Ue;function te(s){const e=s[2]?s[14](s[2]):null;s[15]=e}function ne(s,e,n){const t=s.slice();return t[16]=e[n],t[18]=n,t}function re(s){let e,n,t={ctx:s,current:null,token:null,hasCatch:!1,pending:Rt,then:Tt,catch:Pt,value:14,blocks:[,,,]};return Oe(en(),t),{c(){e=v(),t.block.c()},l(r){e=v(),t.block.l(r)},m(r,a){w(r,e,a),t.block.m(r,t.anchor=a),t.mount=()=>e.parentNode,t.anchor=e,n=!0},p(r,a){s=r,Ae(t,s,a)},i(r){n||(u(t.block),n=!0)},o(r){for(let a=0;a<3;a+=1){const f=t.blocks[a];_(f)}n=!1},d(r){r&&b(e),t.block.d(r),t.token=null,t=null}}}function Pt(s){return{c:T,l:T,m:T,p:T,i:T,o:T,d:T}}function Tt(s){te(s);let e,n;return e=new ue({props:{palette:"auto",margin_top:"huge",width:"prose",max_width:"viewport-75",actions:[[G,{on_bind:s[5].bind(null,1,s[15])}],[H,{on_bind:s[5].bind(null,-1,s[15])}]],$$slots:{default:[Lt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){te(t);const a={};r&4&&(a.actions=[[G,{on_bind:t[5].bind(null,1,t[15])}],[H,{on_bind:t[5].bind(null,-1,t[15])}]]),r&524318&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Mt(s){let e,n,t,r;function a(o){s[8](o)}function f(o){s[9](o)}let l={placeholder:"Search docs...",variation:"block"};return s[1]!==void 0&&(l.element=s[1]),s[2]!==void 0&&(l.value=s[2]),e=new _e({props:l}),q.push(()=>K(e,"element",a)),q.push(()=>K(e,"value",f)),e.$on("focusin",s[7]),{c(){p(e.$$.fragment)},l(o){h(e.$$.fragment,o)},m(o,c){m(e,o,c),r=!0},p(o,c){const i={};!n&&c&2&&(n=!0,i.element=o[1],D(()=>n=!1)),!t&&c&4&&(t=!0,i.value=o[2],D(()=>t=!1)),e.$set(i)},i(o){r||(u(e.$$.fragment,o),r=!0)},o(o){_(e.$$.fragment,o),r=!1},d(o){g(e,o)}}}function ae(s){let e,n;return e=new E({props:{$$slots:{default:[yt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524316&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function At(s){let e,n,t;var r=oe(s[16].identifier);function a(f){return{}}return r&&(e=new r(a())),{c(){e&&p(e.$$.fragment),n=v()},l(f){e&&h(e.$$.fragment,f),n=v()},m(f,l){e&&m(e,f,l),w(f,n,l),t=!0},p(f,l){if(r!==(r=oe(f[16].identifier))){if(e){O();const o=e;_(o.$$.fragment,1,0,()=>{g(o,1)}),B()}r?(e=new r(a()),p(e.$$.fragment),u(e.$$.fragment,1),m(e,n.parentNode,n)):e=null}},i(f){t||(e&&u(e.$$.fragment,f),t=!0)},o(f){e&&_(e.$$.fragment,f),t=!1},d(f){f&&b(n),e&&g(e,f)}}}function Ot(s){let e=s[16].title+"",n;return{c(){n=M(e)},l(t){n=A(t,e)},m(t,r){w(t,n,r)},p(t,r){r&4&&e!==(e=t[16].title+"")&&de(n,e)},d(t){t&&b(n)}}}function Bt(s){let e,n;return e=new Je({props:{href:s[16].identifier,target:"_blank",$$slots:{default:[Ot]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4&&(a.href=t[16].identifier),r&524292&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Ft(s){let e,n;return e=new Qe({props:{$$slots:{default:[Bt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524292&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function It(s){let e,n;return e=new Ye({props:{size:"1em"}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p:T,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function qt(s){let e,n,t,r,a,f;return e=new Le({props:{$$slots:{default:[At]},$$scope:{ctx:s}}}),t=new Re({props:{$$slots:{default:[Ft]},$$scope:{ctx:s}}}),a=new Ve({props:{$$slots:{default:[It]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=C(),p(t.$$.fragment),r=C(),p(a.$$.fragment)},l(l){h(e.$$.fragment,l),n=S(l),h(t.$$.fragment,l),r=S(l),h(a.$$.fragment,l)},m(l,o){m(e,l,o),w(l,n,o),m(t,l,o),w(l,r,o),m(a,l,o),f=!0},p(l,o){const c={};o&524292&&(c.$$scope={dirty:o,ctx:l}),e.$set(c);const i={};o&524292&&(i.$$scope={dirty:o,ctx:l}),t.$set(i);const $={};o&524288&&($.$$scope={dirty:o,ctx:l}),a.$set($)},i(l){f||(u(e.$$.fragment,l),u(t.$$.fragment,l),u(a.$$.fragment,l),f=!0)},o(l){_(e.$$.fragment,l),_(t.$$.fragment,l),_(a.$$.fragment,l),f=!1},d(l){g(e,l),l&&b(n),g(t,l),l&&b(r),g(a,l)}}}function Kt(s){let e,n,t;return e=new je({props:{palette:s[18]===s[4]?"accent":void 0,elevation:"none",sizing:"tiny",$$slots:{default:[qt]},$$scope:{ctx:s}}}),e.$on("pointerenter",function(){Ee(s[6].bind(null,s[18]))&&s[6].bind(null,s[18]).apply(this,arguments)}),{c(){p(e.$$.fragment),n=C()},l(r){h(e.$$.fragment,r),n=S(r)},m(r,a){m(e,r,a),w(r,n,a),t=!0},p(r,a){s=r;const f={};a&20&&(f.palette=s[18]===s[4]?"accent":void 0),a&524292&&(f.$$scope={dirty:a,ctx:s}),e.$set(f)},i(r){t||(u(e.$$.fragment,r),t=!0)},o(r){_(e.$$.fragment,r),t=!1},d(r){g(e,r),r&&b(n)}}}function le(s,e){let n,t,r;return t=new ye({props:{$$slots:{default:[Kt]},$$scope:{ctx:e}}}),{key:s,first:null,c(){n=v(),p(t.$$.fragment),this.h()},l(a){n=v(),h(t.$$.fragment,a),this.h()},h(){this.first=n},m(a,f){w(a,n,f),m(t,a,f),r=!0},p(a,f){e=a;const l={};f&524308&&(l.$$scope={dirty:f,ctx:e}),t.$set(l)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),r=!1},d(a){a&&b(n),g(t,a)}}}function Dt(s){let e=[],n=new zt,t,r,a=s[15];const f=l=>l[16].identifier;for(let l=0;l<a.length;l+=1){let o=ne(s,a,l),c=f(o);n.set(c,e[l]=le(c,o))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=v()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=v()},m(l,o){for(let c=0;c<e.length;c+=1)e[c].m(l,o);w(l,t,o),r=!0},p(l,o){o&84&&(a=l[15],O(),e=J(e,o,f,1,l,a,n,t.parentNode,X,le,t,ne),B())},i(l){if(!r){for(let o=0;o<a.length;o+=1)u(e[o]);r=!0}},o(l){for(let o=0;o<e.length;o+=1)_(e[o]);r=!1},d(l){for(let o=0;o<e.length;o+=1)e[o].d(l);l&&b(t)}}}function Ut(s){let e,n;return e=new Ke({props:{spacing:"small",$$slots:{default:[Dt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524308&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function yt(s){let e,n,t;function r(f){s[10](f)}let a={max_height:"viewport-50",$$slots:{default:[Ut]},$$scope:{ctx:s}};return s[3]!==void 0&&(a.element=s[3]),e=new Fe({props:a}),q.push(()=>K(e,"element",r)),{c(){p(e.$$.fragment)},l(f){h(e.$$.fragment,f)},m(f,l){m(e,f,l),t=!0},p(f,l){const o={};l&524308&&(o.$$scope={dirty:l,ctx:f}),!n&&l&8&&(n=!0,o.element=f[3],D(()=>n=!1)),e.$set(o)},i(f){t||(u(e.$$.fragment,f),t=!0)},o(f){_(e.$$.fragment,f),t=!1},d(f){g(e,f)}}}function jt(s){let e;return{c(){e=M("Powered by FlexSearch")},l(n){e=A(n,"Powered by FlexSearch")},m(n,t){w(n,e,t)},d(n){n&&b(e)}}}function Et(s){let e,n;return e=new y({props:{class:"anchor",href:"https://github.com/nextapps-de/flexsearch",palette:"informative",$$slots:{default:[jt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524288&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Lt(s){let e,n,t,r,a;e=new E({props:{$$slots:{default:[Mt]},$$scope:{ctx:s}}});let f=s[15]&&ae(s);return r=new E({props:{$$slots:{default:[Et]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=C(),f&&f.c(),t=C(),p(r.$$.fragment)},l(l){h(e.$$.fragment,l),n=S(l),f&&f.l(l),t=S(l),h(r.$$.fragment,l)},m(l,o){m(e,l,o),w(l,n,o),f&&f.m(l,o),w(l,t,o),m(r,l,o),a=!0},p(l,o){const c={};o&524294&&(c.$$scope={dirty:o,ctx:l}),e.$set(c),l[15]?f?(f.p(l,o),o&4&&u(f,1)):(f=ae(l),f.c(),u(f,1),f.m(t.parentNode,t)):f&&(O(),_(f,1,1,()=>{f=null}),B());const i={};o&524288&&(i.$$scope={dirty:o,ctx:l}),r.$set(i)},i(l){a||(u(e.$$.fragment,l),u(f),u(r.$$.fragment,l),a=!0)},o(l){_(e.$$.fragment,l),_(f),_(r.$$.fragment,l),a=!1},d(l){g(e,l),l&&b(n),f&&f.d(l),l&&b(t),g(r,l)}}}function Rt(s){let e,n;return e=new ue({props:{palette:"auto",margin_top:"huge",width:"prose",max_width:"viewport-75",$$slots:{default:[Jt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524288&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Vt(s){let e,n,t;return n=new De({}),{c(){e=M("Initializing search engine"),p(n.$$.fragment)},l(r){e=A(r,"Initializing search engine"),h(n.$$.fragment,r)},m(r,a){w(r,e,a),m(n,r,a),t=!0},i(r){t||(u(n.$$.fragment,r),t=!0)},o(r){_(n.$$.fragment,r),t=!1},d(r){r&&b(e),g(n,r)}}}function Qt(s){let e,n;return e=new pe({props:{is:"span",$$slots:{default:[Vt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524288&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Yt(s){let e,n;return e=new Ie({props:{width:"100",$$slots:{default:[Qt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524288&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Jt(s){let e,n;return e=new Be({props:{$$slots:{default:[Yt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524288&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Xt(s){let e,n,t=s[0]&&re(s);return{c(){t&&t.c(),e=v()},l(r){t&&t.l(r),e=v()},m(r,a){t&&t.m(r,a),w(r,e,a),n=!0},p(r,a){r[0]?t?(t.p(r,a),a&1&&u(t,1)):(t=re(r),t.c(),u(t,1),t.m(e.parentNode,e)):t&&(O(),_(t,1,1,()=>{t=null}),B())},i(r){n||(u(t),n=!0)},o(r){_(t),n=!1},d(r){t&&t.d(r),r&&b(e)}}}function Zt(s){let e,n,t,r;return e=new Te({}),t=new Me({props:{animation:"slide",direction:"top",alignment_y:"top",$$slots:{default:[Xt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=C(),p(t.$$.fragment)},l(a){h(e.$$.fragment,a),n=S(a),h(t.$$.fragment,a)},m(a,f){m(e,a,f),w(a,n,f),m(t,a,f),r=!0},p(a,f){const l={};f&524319&&(l.$$scope={dirty:f,ctx:a}),t.$set(l)},i(a){r||(u(e.$$.fragment,a),u(t.$$.fragment,a),r=!0)},o(a){_(e.$$.fragment,a),_(t.$$.fragment,a),r=!1},d(a){g(e,a),a&&b(n),g(t,a)}}}function Gt(s){let e,n,t;function r(f){s[11](f)}let a={class:"search-prompt",logic_id:"search-prompt",dismissible:!0,$$slots:{default:[Zt]},$$scope:{ctx:s}};return s[0]!==void 0&&(a.logic_state=s[0]),e=new Pe({props:a}),q.push(()=>K(e,"logic_state",r)),{c(){p(e.$$.fragment)},l(f){h(e.$$.fragment,f)},m(f,l){m(e,f,l),t=!0},p(f,[l]){const o={};l&524319&&(o.$$scope={dirty:l,ctx:f}),!n&&l&1&&(n=!0,o.logic_state=f[0],D(()=>n=!1)),e.$set(o)},i(f){t||(u(e.$$.fragment,f),t=!0)},o(f){_(e.$$.fragment,f),t=!1},d(f){g(e,f)}}}const Ht={blog:me,docs:ge,playground:he};var R;(function(s){s[s.text=0]="text",s[s.title=1]="title",s[s.identifier=2]="identifier"})(R||(R={}));async function Wt(){return(await(await fetch("/api/v4/search.json")).json()).data}function oe(s){var e;const n=vt(s).split("/")[1];return(e=Ht[n])!==null&&e!==void 0?e:null}async function xt(){const s=new qe.Document({tokenize:"full",preset:"match",document:{id:"identifier",index:["identifier","text","title"]}}),e=await Wt(),n=new Map;return await Promise.all(e.map(t=>{const{identifier:r,text:a,title:f}=t;return n.set(r,f),s.addAsync(t.identifier,{identifier:r,text:a,title:f})})),t=>{var r;const a=new Map,f=s.search(t,10);for(const l of f){const o=R[l.field];for(const c of l.result){const i=(r=a.get(c))!==null&&r!==void 0?r:0;a.set(c,i+o)}}return Array.from(a.entries()).sort((l,o)=>o[1]-l[1]).slice(0,9).map(l=>{const[o]=l,c=n.get(o);return{identifier:o,title:c}})}}const en=Ct(xt)[0];function tn(s,e,n){let{logic_state:t=!1}=e,r,a,f=-1,l="";function o(){if(!a)return[null,null];const k=a.querySelectorAll(".tile")[f];if(!k)return[null,null];const P=k.querySelector(".clickable--item");return[k,P]}async function c(k){if(k>-1){await Z();const[P,F]=o();if(!F||!P)return;F.focus(),ee(P,"center","smooth",a)}else if(r&&r.focus(),a){const P=a.querySelector(".tile");P&&ee(P,"center","smooth",a)}}function i(k,P,F){var I;if(F.preventDefault(),!F.detail.active)return;const Se=(I=P==null?void 0:P.length)!==null&&I!==void 0?I:0;n(4,f=Math.max(Math.min(f+k,Se-1),-1)),c(f)}async function $(k,P){n(4,f=k),await Z();const[F,I]=o();!I||I.focus()}function d(k){n(4,f=-1),c(f)}function N(k){r=k,n(1,r)}function z(k){l=k,n(2,l),n(0,t)}function ve(k){a=k,n(3,a)}function Ce(k){t=k,n(0,t)}return s.$$set=k=>{"logic_state"in k&&n(0,t=k.logic_state)},s.$$.update=()=>{s.$$.dirty&1&&(t||n(2,l="")),s.$$.dirty&3&&t&&r&&r.focus(),s.$$.dirty&4&&n(4,f=-1)},[t,r,l,a,f,i,$,d,N,z,ve,Ce]}class nn extends V{constructor(e){super();Q(this,e,tn,Gt,Y,{logic_state:0})}}function se(s){let e;return{c(){e=M(s[2])},l(n){e=A(n,s[2])},m(n,t){w(n,e,t)},p(n,t){t&4&&de(e,n[2])},d(n){n&&b(e)}}}function rn(s){let e,n,t,r,a,f,l;var o=s[3];function c($){return{props:{size:"1em"}}}o&&(n=new o(c()));let i=s[1]&&se(s);return{c(){e=Xe("button"),n&&p(n.$$.fragment),t=C(),i&&i.c(),this.h()},l($){e=Ze($,"BUTTON",{class:!0});var d=Ge(e);n&&h(n.$$.fragment,d),t=S(d),i&&i.l(d),d.forEach(b),this.h()},h(){W(e,"class",r=s[0]||void 0)},m($,d){w($,e,d),n&&m(n,e,null),He(e,t),i&&i.m(e,null),a=!0,f||(l=We(e,"click",s[6]),f=!0)},p($,[d]){if(o!==(o=$[3])){if(n){O();const N=n;_(N.$$.fragment,1,0,()=>{g(N,1)}),B()}o?(n=new o(c()),p(n.$$.fragment),u(n.$$.fragment,1),m(n,e,t)):n=null}$[1]?i?i.p($,d):(i=se($),i.c(),i.m(e,null)):i&&(i.d(1),i=null),(!a||d&1&&r!==(r=$[0]||void 0))&&W(e,"class",r)},i($){a||(n&&u(n.$$.fragment,$),a=!0)},o($){n&&_(n.$$.fragment,$),a=!1},d($){$&&b(e),n&&g(n),i&&i.d(),f=!1,l()}}}function an(s,e,n){let t,r,a,f,l,o;U(s,x,z=>n(10,o=z));let{class:c=""}=e,{has_text:i=!1}=e;const $=xe();U(s,$,z=>n(8,f=z));const d=et();U(s,d,z=>n(9,l=z));function N(z){rt(x,o=t,o)}return s.$$set=z=>{"class"in z&&n(0,c=z.class),"has_text"in z&&n(1,i=z.has_text)},s.$$.update=()=>{s.$$.dirty&768&&n(7,t=!f&&l||f==="dark"?"light":"dark"),s.$$.dirty&128&&n(3,r=t==="light"?tt:nt),s.$$.dirty&128&&n(2,a=t[0].toUpperCase()+t.slice(1))},[c,i,a,r,$,d,N,t,f,l]}class ke extends V{constructor(e){super();Q(this,e,an,rn,Y,{class:0,has_text:1})}}function fe(s,e,n){const t=s.slice();return t[7]=e[n],t}function ie(s,e,n){const t=s.slice();return t[7]=e[n],t}function ln(s){let e;return{c(){e=M("Kahi UI")},l(n){e=A(n,"Kahi UI")},m(n,t){w(n,e,t)},d(n){n&&b(e)}}}function on(s){let e,n;return{c(){e=M("v"),n=M(L)},l(t){e=A(t,"v"),n=A(t,L)},m(t,r){w(t,e,r),w(t,n,r)},p:T,d(t){t&&b(e),t&&b(n)}}}function sn(s){let e,n;return e=new pe({props:{is:"small",$$slots:{default:[on]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4096&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function fn(s){let e,n,t,r,a,f;return e=new y({props:{class:"anchor",href:kt||"/",no_handle:!0,prefetch:!0,$$slots:{default:[ln]},$$scope:{ctx:s}}}),t=new ct({props:{orientation:"vertical"}}),a=new y({props:{class:"anchor",href:"https://github.com/novacbn/kahi-ui/releases/v"+L,$$slots:{default:[sn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=C(),p(t.$$.fragment),r=C(),p(a.$$.fragment)},l(l){h(e.$$.fragment,l),n=S(l),h(t.$$.fragment,l),r=S(l),h(a.$$.fragment,l)},m(l,o){m(e,l,o),w(l,n,o),m(t,l,o),w(l,r,o),m(a,l,o),f=!0},p(l,o){const c={};o&4096&&(c.$$scope={dirty:o,ctx:l}),e.$set(c);const i={};o&4096&&(i.$$scope={dirty:o,ctx:l}),a.$set(i)},i(l){f||(u(e.$$.fragment,l),u(t.$$.fragment,l),u(a.$$.fragment,l),f=!0)},o(l){_(e.$$.fragment,l),_(t.$$.fragment,l),_(a.$$.fragment,l),f=!1},d(l){g(e,l),l&&b(n),g(t,l),l&&b(r),g(a,l)}}}function cn(s){let e,n;return e=new _e({props:{type:"search",placeholder:"[CTRL+/] Search",palette:"auto",sizing:"tiny",variation:"block",alignment_x:"center",max_width:"prose"}}),e.$on("focusin",s[3]),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p:T,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function $n(s){let e,n;return e=new ht({props:{size:"1em"}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p:T,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function un(s){let e,n;return e=new bt({props:{hidden:!s[2],$$slots:{default:[_n]},$$scope:{ctx:s}}}),e.$on("click",s[3]),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4&&(a.hidden=!t[2]),r&4096&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function _n(s){let e,n,t;return e=new wt({props:{size:"1em"}}),{c(){p(e.$$.fragment),n=M(`
                                Search`)},l(r){h(e.$$.fragment,r),n=A(r,`
                                Search`)},m(r,a){m(e,r,a),w(r,n,a),t=!0},p:T,i(r){t||(u(e.$$.fragment,r),t=!0)},o(r){_(e.$$.fragment,r),t=!1},d(r){g(e,r),r&&b(n)}}}function pn(s){let e,n,t=s[7].text+"",r,a;var f=s[7].icon;function l(o){return{props:{size:"1em"}}}return f&&(e=new f(l())),{c(){e&&p(e.$$.fragment),n=C(),r=M(t)},l(o){e&&h(e.$$.fragment,o),n=S(o),r=A(o,t)},m(o,c){e&&m(e,o,c),w(o,n,c),w(o,r,c),a=!0},p(o,c){if(f!==(f=o[7].icon)){if(e){O();const i=e;_(i.$$.fragment,1,0,()=>{g(i,1)}),B()}f?(e=new f(l()),p(e.$$.fragment),u(e.$$.fragment,1),m(e,n.parentNode,n)):e=null}},i(o){a||(e&&u(e.$$.fragment,o),a=!0)},o(o){e&&_(e.$$.fragment,o),a=!1},d(o){e&&g(e,o),o&&b(n),o&&b(r)}}}function ce(s,e){let n,t,r;return t=new y({props:{class:"menu--item",href:e[7].href,no_handle:!0,prefetch:!0,$$slots:{default:[pn]},$$scope:{ctx:e}}}),{key:s,first:null,c(){n=v(),p(t.$$.fragment),this.h()},l(a){n=v(),h(t.$$.fragment,a),this.h()},h(){this.first=n},m(a,f){w(a,n,f),m(t,a,f),r=!0},p(a,f){e=a;const l={};f&4096&&(l.$$scope={dirty:f,ctx:e}),t.$set(l)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),r=!1},d(a){a&&b(n),g(t,a)}}}function mn(s){let e,n;return e=new ke({props:{class:"menu--item",has_text:!0}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function gn(s){let e,n=[],t=new Map,r,a,f,l=un(s),o=j;const c=$=>$[7].href;for(let $=0;$<o.length;$+=1){let d=ie(s,o,$),N=c(d);t.set(N,n[$]=ce(N,d))}let i=mn();return{c(){l&&l.c(),e=C();for(let $=0;$<n.length;$+=1)n[$].c();r=C(),i&&i.c(),a=v()},l($){l&&l.l($),e=S($);for(let d=0;d<n.length;d+=1)n[d].l($);r=S($),i&&i.l($),a=v()},m($,d){l&&l.m($,d),w($,e,d);for(let N=0;N<n.length;N+=1)n[N].m($,d);w($,r,d),i&&i.m($,d),w($,a,d),f=!0},p($,d){l.p($,d),d&0&&(o=j,O(),n=J(n,d,c,1,$,o,t,r.parentNode,X,ce,r,ie),B())},i($){if(!f){u(l);for(let d=0;d<o.length;d+=1)u(n[d]);u(i),f=!0}},o($){_(l);for(let d=0;d<n.length;d+=1)_(n[d]);_(i),f=!1},d($){l&&l.d($),$&&b(e);for(let d=0;d<n.length;d+=1)n[d].d($);$&&b(r),i&&i.d($),$&&b(a)}}}function hn(s){let e,n;return e=new we({props:{$$slots:{default:[gn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4100&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function dn(s){let e,n;return e=new dt({props:{variation:"borders",elevation:"medium",padding:"medium",radius:"tiny",$$slots:{default:[hn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4100&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function bn(s){let e,n,t,r;return e=new mt({props:{palette:"inverse",variation:"clear",$$slots:{default:[$n]},$$scope:{ctx:s}}}),t=new gt({props:{alignment_x:"left",spacing:"small",$$slots:{default:[dn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=C(),p(t.$$.fragment)},l(a){h(e.$$.fragment,a),n=S(a),h(t.$$.fragment,a)},m(a,f){m(e,a,f),w(a,n,f),m(t,a,f),r=!0},p(a,f){const l={};f&4096&&(l.$$scope={dirty:f,ctx:a}),e.$set(l);const o={};f&4100&&(o.$$scope={dirty:f,ctx:a}),t.$set(o)},i(a){r||(u(e.$$.fragment,a),u(t.$$.fragment,a),r=!0)},o(a){_(e.$$.fragment,a),_(t.$$.fragment,a),r=!1},d(a){g(e,a),a&&b(n),g(t,a)}}}function wn(s){let e,n,t=(s[7].variation==="flush"?"":s[7].text)+"",r,a;var f=s[7].icon;function l(o){return{props:{size:"1em"}}}return f&&(e=new f(l())),{c(){e&&p(e.$$.fragment),n=C(),r=M(t)},l(o){e&&h(e.$$.fragment,o),n=S(o),r=A(o,t)},m(o,c){e&&m(e,o,c),w(o,n,c),w(o,r,c),a=!0},p(o,c){if(f!==(f=o[7].icon)){if(e){O();const i=e;_(i.$$.fragment,1,0,()=>{g(i,1)}),B()}f?(e=new f(l()),p(e.$$.fragment),u(e.$$.fragment,1),m(e,n.parentNode,n)):e=null}},i(o){a||(e&&u(e.$$.fragment,o),a=!0)},o(o){e&&_(e.$$.fragment,o),a=!1},d(o){e&&g(e,o),o&&b(n),o&&b(r)}}}function $e(s,e){let n,t,r;return t=new y({props:{class:"menu--item",href:e[7].href,no_handle:!0,prefetch:!0,$$slots:{default:[wn]},$$scope:{ctx:e}}}),{key:s,first:null,c(){n=v(),p(t.$$.fragment),this.h()},l(a){n=v(),h(t.$$.fragment,a),this.h()},h(){this.first=n},m(a,f){w(a,n,f),m(t,a,f),r=!0},p(a,f){e=a;const l={};f&4096&&(l.$$scope={dirty:f,ctx:e}),t.$set(l)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),r=!1},d(a){a&&b(n),g(t,a)}}}function kn(s){let e,n;return e=new ke({props:{class:"menu--item"}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function vn(s){let e=[],n=new Map,t,r,a,f=j;const l=c=>c[7].href;for(let c=0;c<f.length;c+=1){let i=fe(s,f,c),$=l(i);n.set($,e[c]=$e($,i))}let o=kn();return{c(){for(let c=0;c<e.length;c+=1)e[c].c();t=C(),o&&o.c(),r=v()},l(c){for(let i=0;i<e.length;i+=1)e[i].l(c);t=S(c),o&&o.l(c),r=v()},m(c,i){for(let $=0;$<e.length;$+=1)e[$].m(c,i);w(c,t,i),o&&o.m(c,i),w(c,r,i),a=!0},p(c,i){i&0&&(f=j,O(),e=J(e,i,l,1,c,f,n,t.parentNode,X,$e,t,fe),B())},i(c){if(!a){for(let i=0;i<f.length;i+=1)u(e[i]);u(o),a=!0}},o(c){for(let i=0;i<e.length;i+=1)_(e[i]);_(o),a=!1},d(c){for(let i=0;i<e.length;i+=1)e[i].d(c);c&&b(t),o&&o.d(c),c&&b(r)}}}function Cn(s){let e,n,t,r,a;function f(o){s[5](o)}let l={logic_id:"app-navigation",hidden:["widescreen"],dismissible:!0,$$slots:{default:[bn]},$$scope:{ctx:s}};return s[0]!==void 0&&(l.logic_state=s[0]),e=new $t({props:l}),q.push(()=>K(e,"logic_state",f)),r=new we({props:{hidden:["mobile","tablet","desktop"],orientation:"horizontal",sizing:"tiny",$$slots:{default:[vn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),t=C(),p(r.$$.fragment)},l(o){h(e.$$.fragment,o),t=S(o),h(r.$$.fragment,o)},m(o,c){m(e,o,c),w(o,t,c),m(r,o,c),a=!0},p(o,c){const i={};c&4100&&(i.$$scope={dirty:c,ctx:o}),!n&&c&1&&(n=!0,i.logic_state=o[0],D(()=>n=!1)),e.$set(i);const $={};c&4096&&($.$$scope={dirty:c,ctx:o}),r.$set($)},i(o){a||(u(e.$$.fragment,o),u(r.$$.fragment,o),a=!0)},o(o){_(e.$$.fragment,o),_(r.$$.fragment,o),a=!1},d(o){g(e,o),o&&b(t),g(r,o)}}}function Sn(s){let e,n,t,r,a,f;return e=new ot({props:{$$slots:{default:[fn]},$$scope:{ctx:s}}}),t=new st({props:{class:"app-navigation-search",hidden:s[2],margin_x:"medium",$$slots:{default:[cn]},$$scope:{ctx:s}}}),a=new ft({props:{$$slots:{default:[Cn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=C(),p(t.$$.fragment),r=C(),p(a.$$.fragment)},l(l){h(e.$$.fragment,l),n=S(l),h(t.$$.fragment,l),r=S(l),h(a.$$.fragment,l)},m(l,o){m(e,l,o),w(l,n,o),m(t,l,o),w(l,r,o),m(a,l,o),f=!0},p(l,o){const c={};o&4096&&(c.$$scope={dirty:o,ctx:l}),e.$set(c);const i={};o&4&&(i.hidden=l[2]),o&4096&&(i.$$scope={dirty:o,ctx:l}),t.$set(i);const $={};o&4101&&($.$$scope={dirty:o,ctx:l}),a.$set($)},i(l){f||(u(e.$$.fragment,l),u(t.$$.fragment,l),u(a.$$.fragment,l),f=!0)},o(l){_(e.$$.fragment,l),_(t.$$.fragment,l),_(a.$$.fragment,l),f=!1},d(l){g(e,l),l&&b(n),g(t,l),l&&b(r),g(a,l)}}}function Nn(s){let e,n;return e=new it({props:{$$slots:{default:[zn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4098&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function zn(s){let e,n,t;function r(f){s[6](f)}let a={};return s[1]!==void 0&&(a.logic_state=s[1]),e=new nn({props:a}),q.push(()=>K(e,"logic_state",r)),{c(){p(e.$$.fragment)},l(f){h(e.$$.fragment,f)},m(f,l){m(e,f,l),t=!0},p(f,l){const o={};!n&&l&2&&(n=!0,o.logic_state=f[1],D(()=>n=!1)),e.$set(o)},i(f){t||(u(e.$$.fragment,f),t=!0)},o(f){_(e.$$.fragment,f),t=!1},d(f){g(e,f)}}}function Pn(s){let e,n,t,r,a,f;e=new at({props:{class:"app-navigation",$$slots:{default:[Sn]},$$scope:{ctx:s}}});let l=Nn(s);return{c(){p(e.$$.fragment),n=C(),l&&l.c(),t=v()},l(o){h(e.$$.fragment,o),n=S(o),l&&l.l(o),t=v()},m(o,c){m(e,o,c),w(o,n,c),l&&l.m(o,c),w(o,t,c),r=!0,a||(f=lt(St.call(null,window,s[3])),a=!0)},p(o,[c]){const i={};c&4101&&(i.$$scope={dirty:c,ctx:o}),e.$set(i),l.p(o,c)},i(o){r||(u(e.$$.fragment,o),u(l),r=!0)},o(o){_(e.$$.fragment,o),_(l),r=!1},d(o){g(e,o),o&&b(n),l&&l.d(o),o&&b(t),a=!1,f()}}}const j=[{href:"/blog",text:"Blog",icon:me},{href:"/docs",text:"Documentation",icon:ge},{href:"/playground",text:"Playground",icon:he},{href:"https://github.com/novacbn/kahi-ui",text:"Source",variation:"flush",icon:ut},{href:"https://github.com/novacbn/kahi-ui/releases",text:"Releases",variation:"flush",icon:_t},{href:"/chat",text:"Chat",variation:"flush",icon:pt}],Tn=be({mobile:!0,tablet:!0,desktop:!0}),Mn=be({mobile:!0,tablet:!0});function An(s,e,n){let t,r;U(s,Tn,i=>n(4,t=i)),U(s,Mn,i=>n(2,r=i));let a=!1,f=!1;function l(i){i.preventDefault();const $=i.target;$&&$.blur(),n(0,a=!1),n(1,f=!0)}function o(i){a=i,n(0,a),n(4,t)}function c(i){f=i,n(1,f)}return s.$$.update=()=>{s.$$.dirty&16&&(t||n(0,a=!1))},[a,f,r,l,t,o,c]}class Kn extends V{constructor(e){super();Q(this,e,An,Pn,Y,{})}}export{Kn as A,L as P,ee as s};
