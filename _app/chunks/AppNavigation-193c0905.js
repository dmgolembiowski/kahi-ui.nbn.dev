import{ad as Ne,ae as Te,af as Ae,S as y,i as G,s as L,Q as ze,R as F,U as H,w as p,x as h,y as m,V as q,q as u,o as _,B as g,E as Q,Y as Pe,Z as Oe,k as S,m as C,g as w,d as b,l as v,ag as Me,n as M,p as E,ah as Ee,I as z,ai as ue,aj as W,ak as X,al as U,am as Ie,an as _e,ao as Be,ap as Fe,t as P,h as O,T as pe,F as He,aq as qe,a3 as V,a4 as J,ar as Ke,as as Re,at as De,au as Ue,av as je,aw as ye,ax as Ge,ay as Le,az as me,aA as ge,aB as he,aC as Ve,j as de,e as Je,c as Qe,a as We,b as Y,K as Xe,aD as Ye,O as K,ab as Ze,aE as xe,aF as et,aG as tt,ac as nt,aH as be,aI as rt,aJ as at,aK as lt,aL as ot,aM as st,aN as ft,G as it,aO as ct,a1 as we,aP as $t,aQ as ut,aR as _t,aS as pt,aT as mt,aU as gt,aV as ht,aW as dt,aX as bt}from"./vendor-2495f879.js";import{b as wt}from"./paths-4b3c6e7e.js";import{A as R,n as kt}from"./AppAnchor-c389142d.js";import{p as Z}from"./preferences-43479d63.js";const vt=(s,e)=>Ne(s,{on_bind:e,binds:"control+/",repeat:!0}),j=Te.version;function x(...s){return JSON.stringify(s)}function St(s){let e=new Map;return[(...n)=>{const t=x(...n);return e.has(t)||e.set(t,s(...n)),e.get(t)},(...n)=>{const t=x(...n);e.delete(t)}]}function Ct(s,e,n){let t=e.offsetTop;switch(n){case"center":t-=e.offsetHeight/2-s.offsetHeight/2;case"end":t+=e.offsetHeight-s.offsetHeight}return t-s.offsetTop}function ee(s,e="start",n="auto",t){const r=typeof s=="string"?document.querySelector(s):s;if(!r)throw ReferenceError(`bad argument #0 to 'scroll_into_container' (target '${s}' is invalid)`);const a=t!=null?t:r.parentElement;if(!a)throw ReferenceError("bad argument #0 to 'scroll_into_container' (target doesn't have parent element)");a.scrollTo({behavior:n,top:Ct(a,r,e)})}async function Nt(){return(await(await fetch("/api/v4/search.json")).json()).data}async function Tt(){const s=new Ae.Document({tokenize:"full",preset:"match",document:{id:"identifier",index:["title","text"]}}),e=new Map,n=await Nt();return await Promise.all(n.map(t=>(e.set(t.identifier,t.title),s.addAsync(t.identifier,t)))),t=>{const r=new Set,a=s.search(t,10);for(const f of a)for(const l of f.result)r.add(l);return Array.from(r).slice(0,9).map(f=>({identifier:f,title:e.get(f)}))}}const At=St(Tt)[0];function te(s){const e=s[2]?s[14](s[2]):null;s[15]=e}function ne(s,e,n){const t=s.slice();return t[16]=e[n],t[18]=n,t}function re(s){let e,n,t={ctx:s,current:null,token:null,hasCatch:!1,pending:Gt,then:Pt,catch:zt,value:14,blocks:[,,,]};return Ee(At(),t),{c(){e=v(),t.block.c()},l(r){e=v(),t.block.l(r)},m(r,a){w(r,e,a),t.block.m(r,t.anchor=a),t.mount=()=>e.parentNode,t.anchor=e,n=!0},p(r,a){s=r,Me(t,s,a)},i(r){n||(u(t.block),n=!0)},o(r){for(let a=0;a<3;a+=1){const f=t.blocks[a];_(f)}n=!1},d(r){r&&b(e),t.block.d(r),t.token=null,t=null}}}function zt(s){return{c:z,l:z,m:z,p:z,i:z,o:z,d:z}}function Pt(s){te(s);let e,n;return e=new ue({props:{palette:"auto",margin_top:"huge",width:"prose",max_width:"viewport-75",actions:[[W,{on_bind:s[5].bind(null,1,s[15])}],[X,{on_bind:s[5].bind(null,-1,s[15])}]],$$slots:{default:[yt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){te(t);const a={};r&4&&(a.actions=[[W,{on_bind:t[5].bind(null,1,t[15])}],[X,{on_bind:t[5].bind(null,-1,t[15])}]]),r&524318&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Ot(s){let e,n,t,r;function a(o){s[8](o)}function f(o){s[9](o)}let l={placeholder:"Search docs...",variation:"block"};return s[1]!==void 0&&(l.element=s[1]),s[2]!==void 0&&(l.value=s[2]),e=new _e({props:l}),F.push(()=>H(e,"element",a)),F.push(()=>H(e,"value",f)),e.$on("focusin",s[7]),{c(){p(e.$$.fragment)},l(o){h(e.$$.fragment,o)},m(o,c){m(e,o,c),r=!0},p(o,c){const i={};!n&&c&2&&(n=!0,i.element=o[1],q(()=>n=!1)),!t&&c&4&&(t=!0,i.value=o[2],q(()=>t=!1)),e.$set(i)},i(o){r||(u(e.$$.fragment,o),r=!0)},o(o){_(e.$$.fragment,o),r=!1},d(o){g(e,o)}}}function ae(s){let e,n;return e=new U({props:{$$slots:{default:[Dt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524316&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Mt(s){let e,n,t;var r=oe(s[16].identifier);function a(f){return{}}return r&&(e=new r(a())),{c(){e&&p(e.$$.fragment),n=v()},l(f){e&&h(e.$$.fragment,f),n=v()},m(f,l){e&&m(e,f,l),w(f,n,l),t=!0},p(f,l){if(r!==(r=oe(f[16].identifier))){if(e){M();const o=e;_(o.$$.fragment,1,0,()=>{g(o,1)}),E()}r?(e=new r(a()),p(e.$$.fragment),u(e.$$.fragment,1),m(e,n.parentNode,n)):e=null}},i(f){t||(e&&u(e.$$.fragment,f),t=!0)},o(f){e&&_(e.$$.fragment,f),t=!1},d(f){f&&b(n),e&&g(e,f)}}}function Et(s){let e=s[16].title+"",n;return{c(){n=P(e)},l(t){n=O(t,e)},m(t,r){w(t,n,r)},p(t,r){r&4&&e!==(e=t[16].title+"")&&de(n,e)},d(t){t&&b(n)}}}function It(s){let e,n;return e=new Ve({props:{href:s[16].identifier,target:"_blank",$$slots:{default:[Et]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4&&(a.href=t[16].identifier),r&524292&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Bt(s){let e,n;return e=new Ge({props:{$$slots:{default:[It]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524292&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Ft(s){let e,n;return e=new Le({props:{size:"1em"}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p:z,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Ht(s){let e,n,t,r,a,f;return e=new Ue({props:{$$slots:{default:[Mt]},$$scope:{ctx:s}}}),t=new je({props:{$$slots:{default:[Bt]},$$scope:{ctx:s}}}),a=new ye({props:{$$slots:{default:[Ft]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=S(),p(t.$$.fragment),r=S(),p(a.$$.fragment)},l(l){h(e.$$.fragment,l),n=C(l),h(t.$$.fragment,l),r=C(l),h(a.$$.fragment,l)},m(l,o){m(e,l,o),w(l,n,o),m(t,l,o),w(l,r,o),m(a,l,o),f=!0},p(l,o){const c={};o&524292&&(c.$$scope={dirty:o,ctx:l}),e.$set(c);const i={};o&524292&&(i.$$scope={dirty:o,ctx:l}),t.$set(i);const $={};o&524288&&($.$$scope={dirty:o,ctx:l}),a.$set($)},i(l){f||(u(e.$$.fragment,l),u(t.$$.fragment,l),u(a.$$.fragment,l),f=!0)},o(l){_(e.$$.fragment,l),_(t.$$.fragment,l),_(a.$$.fragment,l),f=!1},d(l){g(e,l),l&&b(n),g(t,l),l&&b(r),g(a,l)}}}function qt(s){let e,n,t;return e=new Re({props:{palette:s[18]===s[4]?"accent":void 0,elevation:"none",sizing:"tiny",$$slots:{default:[Ht]},$$scope:{ctx:s}}}),e.$on("pointerenter",function(){De(s[6].bind(null,s[18]))&&s[6].bind(null,s[18]).apply(this,arguments)}),{c(){p(e.$$.fragment),n=S()},l(r){h(e.$$.fragment,r),n=C(r)},m(r,a){m(e,r,a),w(r,n,a),t=!0},p(r,a){s=r;const f={};a&20&&(f.palette=s[18]===s[4]?"accent":void 0),a&524292&&(f.$$scope={dirty:a,ctx:s}),e.$set(f)},i(r){t||(u(e.$$.fragment,r),t=!0)},o(r){_(e.$$.fragment,r),t=!1},d(r){g(e,r),r&&b(n)}}}function le(s,e){let n,t,r;return t=new Ke({props:{$$slots:{default:[qt]},$$scope:{ctx:e}}}),{key:s,first:null,c(){n=v(),p(t.$$.fragment),this.h()},l(a){n=v(),h(t.$$.fragment,a),this.h()},h(){this.first=n},m(a,f){w(a,n,f),m(t,a,f),r=!0},p(a,f){e=a;const l={};f&524308&&(l.$$scope={dirty:f,ctx:e}),t.$set(l)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),r=!1},d(a){a&&b(n),g(t,a)}}}function Kt(s){let e=[],n=new Map,t,r,a=s[15];const f=l=>l[16].identifier;for(let l=0;l<a.length;l+=1){let o=ne(s,a,l),c=f(o);n.set(c,e[l]=le(c,o))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=v()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=v()},m(l,o){for(let c=0;c<e.length;c+=1)e[c].m(l,o);w(l,t,o),r=!0},p(l,o){o&84&&(a=l[15],M(),e=V(e,o,f,1,l,a,n,t.parentNode,J,le,t,ne),E())},i(l){if(!r){for(let o=0;o<a.length;o+=1)u(e[o]);r=!0}},o(l){for(let o=0;o<e.length;o+=1)_(e[o]);r=!1},d(l){for(let o=0;o<e.length;o+=1)e[o].d(l);l&&b(t)}}}function Rt(s){let e,n;return e=new He({props:{spacing:"small",$$slots:{default:[Kt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524308&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Dt(s){let e,n,t;function r(f){s[10](f)}let a={max_height:"viewport-50",$$slots:{default:[Rt]},$$scope:{ctx:s}};return s[3]!==void 0&&(a.element=s[3]),e=new Be({props:a}),F.push(()=>H(e,"element",r)),{c(){p(e.$$.fragment)},l(f){h(e.$$.fragment,f)},m(f,l){m(e,f,l),t=!0},p(f,l){const o={};l&524308&&(o.$$scope={dirty:l,ctx:f}),!n&&l&8&&(n=!0,o.element=f[3],q(()=>n=!1)),e.$set(o)},i(f){t||(u(e.$$.fragment,f),t=!0)},o(f){_(e.$$.fragment,f),t=!1},d(f){g(e,f)}}}function Ut(s){let e;return{c(){e=P("Powered by FlexSearch")},l(n){e=O(n,"Powered by FlexSearch")},m(n,t){w(n,e,t)},d(n){n&&b(e)}}}function jt(s){let e,n;return e=new R({props:{class:"anchor",href:"https://github.com/nextapps-de/flexsearch",palette:"accent",$$slots:{default:[Ut]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524288&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function yt(s){let e,n,t,r,a;e=new U({props:{$$slots:{default:[Ot]},$$scope:{ctx:s}}});let f=s[15]&&ae(s);return r=new U({props:{$$slots:{default:[jt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=S(),f&&f.c(),t=S(),p(r.$$.fragment)},l(l){h(e.$$.fragment,l),n=C(l),f&&f.l(l),t=C(l),h(r.$$.fragment,l)},m(l,o){m(e,l,o),w(l,n,o),f&&f.m(l,o),w(l,t,o),m(r,l,o),a=!0},p(l,o){const c={};o&524294&&(c.$$scope={dirty:o,ctx:l}),e.$set(c),l[15]?f?(f.p(l,o),o&4&&u(f,1)):(f=ae(l),f.c(),u(f,1),f.m(t.parentNode,t)):f&&(M(),_(f,1,1,()=>{f=null}),E());const i={};o&524288&&(i.$$scope={dirty:o,ctx:l}),r.$set(i)},i(l){a||(u(e.$$.fragment,l),u(f),u(r.$$.fragment,l),a=!0)},o(l){_(e.$$.fragment,l),_(f),_(r.$$.fragment,l),a=!1},d(l){g(e,l),l&&b(n),f&&f.d(l),l&&b(t),g(r,l)}}}function Gt(s){let e,n;return e=new ue({props:{palette:"auto",margin_top:"huge",width:"prose",max_width:"viewport-75",$$slots:{default:[Qt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524288&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Lt(s){let e,n,t;return n=new qe({}),{c(){e=P("Initializing search engine"),p(n.$$.fragment)},l(r){e=O(r,"Initializing search engine"),h(n.$$.fragment,r)},m(r,a){w(r,e,a),m(n,r,a),t=!0},i(r){t||(u(n.$$.fragment,r),t=!0)},o(r){_(n.$$.fragment,r),t=!1},d(r){r&&b(e),g(n,r)}}}function Vt(s){let e,n;return e=new pe({props:{is:"span",$$slots:{default:[Lt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524288&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Jt(s){let e,n;return e=new Fe({props:{width:"100",$$slots:{default:[Vt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524288&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Qt(s){let e,n;return e=new Ie({props:{$$slots:{default:[Jt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524288&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Wt(s){let e,n,t=s[0]&&re(s);return{c(){t&&t.c(),e=v()},l(r){t&&t.l(r),e=v()},m(r,a){t&&t.m(r,a),w(r,e,a),n=!0},p(r,a){r[0]?t?(t.p(r,a),a&1&&u(t,1)):(t=re(r),t.c(),u(t,1),t.m(e.parentNode,e)):t&&(M(),_(t,1,1,()=>{t=null}),E())},i(r){n||(u(t),n=!0)},o(r){_(t),n=!1},d(r){t&&t.d(r),r&&b(e)}}}function Xt(s){let e,n,t,r;return e=new Pe({}),t=new Oe({props:{animation:"slide",direction:"top",alignment_y:"top",$$slots:{default:[Wt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=S(),p(t.$$.fragment)},l(a){h(e.$$.fragment,a),n=C(a),h(t.$$.fragment,a)},m(a,f){m(e,a,f),w(a,n,f),m(t,a,f),r=!0},p(a,f){const l={};f&524319&&(l.$$scope={dirty:f,ctx:a}),t.$set(l)},i(a){r||(u(e.$$.fragment,a),u(t.$$.fragment,a),r=!0)},o(a){_(e.$$.fragment,a),_(t.$$.fragment,a),r=!1},d(a){g(e,a),a&&b(n),g(t,a)}}}function Yt(s){let e,n,t;function r(f){s[11](f)}let a={class:"search-prompt",logic_id:"search-prompt",dismissible:!0,$$slots:{default:[Xt]},$$scope:{ctx:s}};return s[0]!==void 0&&(a.logic_state=s[0]),e=new ze({props:a}),F.push(()=>H(e,"logic_state",r)),{c(){p(e.$$.fragment)},l(f){h(e.$$.fragment,f)},m(f,l){m(e,f,l),t=!0},p(f,[l]){const o={};l&524319&&(o.$$scope={dirty:l,ctx:f}),!n&&l&1&&(n=!0,o.logic_state=f[0],q(()=>n=!1)),e.$set(o)},i(f){t||(u(e.$$.fragment,f),t=!0)},o(f){_(e.$$.fragment,f),t=!1},d(f){g(e,f)}}}const Zt={blog:me,docs:ge,playground:he};function oe(s){var e;const n=kt(s).split("/")[1];return(e=Zt[n])!==null&&e!==void 0?e:null}function xt(s,e,n){let{logic_state:t=!1}=e,r,a,f=-1,l="";function o(){if(!a)return[null,null];const k=a.querySelectorAll(".tile")[f];if(!k)return[null,null];const A=k.querySelector(".clickable--item");return[k,A]}async function c(k){if(k>-1){await Q();const[A,I]=o();if(!I||!A)return;I.focus(),ee(A,"center","smooth",a)}else if(r&&r.focus(),a){const A=a.querySelector(".tile");A&&ee(A,"center","smooth",a)}}function i(k,A,I){var B;if(I.preventDefault(),!I.detail.active)return;const Ce=(B=A==null?void 0:A.length)!==null&&B!==void 0?B:0;n(4,f=Math.max(Math.min(f+k,Ce-1),-1)),c(f)}async function $(k,A){n(4,f=k),await Q();const[I,B]=o();!B||B.focus()}function d(k){n(4,f=-1),c(f)}function N(k){r=k,n(1,r)}function T(k){l=k,n(2,l),n(0,t)}function ve(k){a=k,n(3,a)}function Se(k){t=k,n(0,t)}return s.$$set=k=>{"logic_state"in k&&n(0,t=k.logic_state)},s.$$.update=()=>{s.$$.dirty&1&&(t||n(2,l="")),s.$$.dirty&3&&t&&r&&r.focus(),s.$$.dirty&4&&n(4,f=-1)},[t,r,l,a,f,i,$,d,N,T,ve,Se]}class en extends y{constructor(e){super();G(this,e,xt,Yt,L,{logic_state:0})}}function se(s){let e;return{c(){e=P(s[2])},l(n){e=O(n,s[2])},m(n,t){w(n,e,t)},p(n,t){t&4&&de(e,n[2])},d(n){n&&b(e)}}}function tn(s){let e,n,t,r,a,f,l;var o=s[3];function c($){return{props:{size:"1em"}}}o&&(n=new o(c()));let i=s[1]&&se(s);return{c(){e=Je("button"),n&&p(n.$$.fragment),t=S(),i&&i.c(),this.h()},l($){e=Qe($,"BUTTON",{class:!0});var d=We(e);n&&h(n.$$.fragment,d),t=C(d),i&&i.l(d),d.forEach(b),this.h()},h(){Y(e,"class",r=s[0]||void 0)},m($,d){w($,e,d),n&&m(n,e,null),Xe(e,t),i&&i.m(e,null),a=!0,f||(l=Ye(e,"click",s[6]),f=!0)},p($,[d]){if(o!==(o=$[3])){if(n){M();const N=n;_(N.$$.fragment,1,0,()=>{g(N,1)}),E()}o?(n=new o(c()),p(n.$$.fragment),u(n.$$.fragment,1),m(n,e,t)):n=null}$[1]?i?i.p($,d):(i=se($),i.c(),i.m(e,null)):i&&(i.d(1),i=null),(!a||d&1&&r!==(r=$[0]||void 0))&&Y(e,"class",r)},i($){a||(n&&u(n.$$.fragment,$),a=!0)},o($){n&&_(n.$$.fragment,$),a=!1},d($){$&&b(e),n&&g(n),i&&i.d(),f=!1,l()}}}function nn(s,e,n){let t,r,a,f,l,o;K(s,Z,T=>n(10,o=T));let{class:c=""}=e,{has_text:i=!1}=e;const $=Ze();K(s,$,T=>n(8,f=T));const d=xe();K(s,d,T=>n(9,l=T));function N(T){nt(Z,o=t,o)}return s.$$set=T=>{"class"in T&&n(0,c=T.class),"has_text"in T&&n(1,i=T.has_text)},s.$$.update=()=>{s.$$.dirty&768&&n(7,t=!f&&l||f==="dark"?"light":"dark"),s.$$.dirty&128&&n(3,r=t==="light"?et:tt),s.$$.dirty&128&&n(2,a=t[0].toUpperCase()+t.slice(1))},[c,i,a,r,$,d,N,t,f,l]}class ke extends y{constructor(e){super();G(this,e,nn,tn,L,{class:0,has_text:1})}}function fe(s,e,n){const t=s.slice();return t[7]=e[n],t}function ie(s,e,n){const t=s.slice();return t[7]=e[n],t}function rn(s){let e;return{c(){e=P("Kahi UI")},l(n){e=O(n,"Kahi UI")},m(n,t){w(n,e,t)},d(n){n&&b(e)}}}function an(s){let e,n;return{c(){e=P("v"),n=P(j)},l(t){e=O(t,"v"),n=O(t,j)},m(t,r){w(t,e,r),w(t,n,r)},p:z,d(t){t&&b(e),t&&b(n)}}}function ln(s){let e,n;return e=new pe({props:{is:"small",$$slots:{default:[an]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4096&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function on(s){let e,n,t,r,a,f;return e=new R({props:{class:"anchor",href:wt||"/",no_handle:!0,prefetch:!0,$$slots:{default:[rn]},$$scope:{ctx:s}}}),t=new it({props:{orientation:"vertical"}}),a=new R({props:{class:"anchor",href:"https://github.com/novacbn/kahi-ui/releases/v"+j,$$slots:{default:[ln]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=S(),p(t.$$.fragment),r=S(),p(a.$$.fragment)},l(l){h(e.$$.fragment,l),n=C(l),h(t.$$.fragment,l),r=C(l),h(a.$$.fragment,l)},m(l,o){m(e,l,o),w(l,n,o),m(t,l,o),w(l,r,o),m(a,l,o),f=!0},p(l,o){const c={};o&4096&&(c.$$scope={dirty:o,ctx:l}),e.$set(c);const i={};o&4096&&(i.$$scope={dirty:o,ctx:l}),a.$set(i)},i(l){f||(u(e.$$.fragment,l),u(t.$$.fragment,l),u(a.$$.fragment,l),f=!0)},o(l){_(e.$$.fragment,l),_(t.$$.fragment,l),_(a.$$.fragment,l),f=!1},d(l){g(e,l),l&&b(n),g(t,l),l&&b(r),g(a,l)}}}function sn(s){let e,n;return e=new _e({props:{type:"search",placeholder:"[CTRL+/] Search",palette:"auto",sizing:"tiny",variation:"block",alignment_x:"center",max_width:"prose"}}),e.$on("focusin",s[3]),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p:z,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function fn(s){let e,n;return e=new gt({props:{size:"1em"}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p:z,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function cn(s){let e,n;return e=new dt({props:{hidden:!s[2],$$slots:{default:[$n]},$$scope:{ctx:s}}}),e.$on("click",s[3]),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4&&(a.hidden=!t[2]),r&4096&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function $n(s){let e,n,t;return e=new bt({props:{size:"1em"}}),{c(){p(e.$$.fragment),n=P(`
                                Search`)},l(r){h(e.$$.fragment,r),n=O(r,`
                                Search`)},m(r,a){m(e,r,a),w(r,n,a),t=!0},p:z,i(r){t||(u(e.$$.fragment,r),t=!0)},o(r){_(e.$$.fragment,r),t=!1},d(r){g(e,r),r&&b(n)}}}function un(s){let e,n,t=s[7].text+"",r,a;var f=s[7].icon;function l(o){return{props:{size:"1em"}}}return f&&(e=new f(l())),{c(){e&&p(e.$$.fragment),n=S(),r=P(t)},l(o){e&&h(e.$$.fragment,o),n=C(o),r=O(o,t)},m(o,c){e&&m(e,o,c),w(o,n,c),w(o,r,c),a=!0},p(o,c){if(f!==(f=o[7].icon)){if(e){M();const i=e;_(i.$$.fragment,1,0,()=>{g(i,1)}),E()}f?(e=new f(l()),p(e.$$.fragment),u(e.$$.fragment,1),m(e,n.parentNode,n)):e=null}},i(o){a||(e&&u(e.$$.fragment,o),a=!0)},o(o){e&&_(e.$$.fragment,o),a=!1},d(o){e&&g(e,o),o&&b(n),o&&b(r)}}}function ce(s,e){let n,t,r;return t=new R({props:{class:"menu--item",href:e[7].href,no_handle:!0,prefetch:!0,$$slots:{default:[un]},$$scope:{ctx:e}}}),{key:s,first:null,c(){n=v(),p(t.$$.fragment),this.h()},l(a){n=v(),h(t.$$.fragment,a),this.h()},h(){this.first=n},m(a,f){w(a,n,f),m(t,a,f),r=!0},p(a,f){e=a;const l={};f&4096&&(l.$$scope={dirty:f,ctx:e}),t.$set(l)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),r=!1},d(a){a&&b(n),g(t,a)}}}function _n(s){let e,n;return e=new ke({props:{class:"menu--item",has_text:!0}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function pn(s){let e,n=[],t=new Map,r,a,f,l=cn(s),o=D;const c=$=>$[7].href;for(let $=0;$<o.length;$+=1){let d=ie(s,o,$),N=c(d);t.set(N,n[$]=ce(N,d))}let i=_n();return{c(){l&&l.c(),e=S();for(let $=0;$<n.length;$+=1)n[$].c();r=S(),i&&i.c(),a=v()},l($){l&&l.l($),e=C($);for(let d=0;d<n.length;d+=1)n[d].l($);r=C($),i&&i.l($),a=v()},m($,d){l&&l.m($,d),w($,e,d);for(let N=0;N<n.length;N+=1)n[N].m($,d);w($,r,d),i&&i.m($,d),w($,a,d),f=!0},p($,d){l.p($,d),d&0&&(o=D,M(),n=V(n,d,c,1,$,o,t,r.parentNode,J,ce,r,ie),E())},i($){if(!f){u(l);for(let d=0;d<o.length;d+=1)u(n[d]);u(i),f=!0}},o($){_(l);for(let d=0;d<n.length;d+=1)_(n[d]);_(i),f=!1},d($){l&&l.d($),$&&b(e);for(let d=0;d<n.length;d+=1)n[d].d($);$&&b(r),i&&i.d($),$&&b(a)}}}function mn(s){let e,n;return e=new we({props:{$$slots:{default:[pn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4100&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function gn(s){let e,n;return e=new ht({props:{variation:"borders",elevation:"medium",padding:"medium",radius:"tiny",$$slots:{default:[mn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4100&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function hn(s){let e,n,t,r;return e=new pt({props:{palette:"inverse",variation:"clear",$$slots:{default:[fn]},$$scope:{ctx:s}}}),t=new mt({props:{alignment_x:"left",spacing:"small",$$slots:{default:[gn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=S(),p(t.$$.fragment)},l(a){h(e.$$.fragment,a),n=C(a),h(t.$$.fragment,a)},m(a,f){m(e,a,f),w(a,n,f),m(t,a,f),r=!0},p(a,f){const l={};f&4096&&(l.$$scope={dirty:f,ctx:a}),e.$set(l);const o={};f&4100&&(o.$$scope={dirty:f,ctx:a}),t.$set(o)},i(a){r||(u(e.$$.fragment,a),u(t.$$.fragment,a),r=!0)},o(a){_(e.$$.fragment,a),_(t.$$.fragment,a),r=!1},d(a){g(e,a),a&&b(n),g(t,a)}}}function dn(s){let e,n,t=(s[7].variation==="flush"?"":s[7].text)+"",r,a;var f=s[7].icon;function l(o){return{props:{size:"1em"}}}return f&&(e=new f(l())),{c(){e&&p(e.$$.fragment),n=S(),r=P(t)},l(o){e&&h(e.$$.fragment,o),n=C(o),r=O(o,t)},m(o,c){e&&m(e,o,c),w(o,n,c),w(o,r,c),a=!0},p(o,c){if(f!==(f=o[7].icon)){if(e){M();const i=e;_(i.$$.fragment,1,0,()=>{g(i,1)}),E()}f?(e=new f(l()),p(e.$$.fragment),u(e.$$.fragment,1),m(e,n.parentNode,n)):e=null}},i(o){a||(e&&u(e.$$.fragment,o),a=!0)},o(o){e&&_(e.$$.fragment,o),a=!1},d(o){e&&g(e,o),o&&b(n),o&&b(r)}}}function $e(s,e){let n,t,r;return t=new R({props:{class:"menu--item",href:e[7].href,no_handle:!0,prefetch:!0,$$slots:{default:[dn]},$$scope:{ctx:e}}}),{key:s,first:null,c(){n=v(),p(t.$$.fragment),this.h()},l(a){n=v(),h(t.$$.fragment,a),this.h()},h(){this.first=n},m(a,f){w(a,n,f),m(t,a,f),r=!0},p(a,f){e=a;const l={};f&4096&&(l.$$scope={dirty:f,ctx:e}),t.$set(l)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),r=!1},d(a){a&&b(n),g(t,a)}}}function bn(s){let e,n;return e=new ke({props:{class:"menu--item"}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function wn(s){let e=[],n=new Map,t,r,a,f=D;const l=c=>c[7].href;for(let c=0;c<f.length;c+=1){let i=fe(s,f,c),$=l(i);n.set($,e[c]=$e($,i))}let o=bn();return{c(){for(let c=0;c<e.length;c+=1)e[c].c();t=S(),o&&o.c(),r=v()},l(c){for(let i=0;i<e.length;i+=1)e[i].l(c);t=C(c),o&&o.l(c),r=v()},m(c,i){for(let $=0;$<e.length;$+=1)e[$].m(c,i);w(c,t,i),o&&o.m(c,i),w(c,r,i),a=!0},p(c,i){i&0&&(f=D,M(),e=V(e,i,l,1,c,f,n,t.parentNode,J,$e,t,fe),E())},i(c){if(!a){for(let i=0;i<f.length;i+=1)u(e[i]);u(o),a=!0}},o(c){for(let i=0;i<e.length;i+=1)_(e[i]);_(o),a=!1},d(c){for(let i=0;i<e.length;i+=1)e[i].d(c);c&&b(t),o&&o.d(c),c&&b(r)}}}function kn(s){let e,n,t,r,a;function f(o){s[5](o)}let l={logic_id:"app-navigation",hidden:["widescreen"],dismissible:!0,$$slots:{default:[hn]},$$scope:{ctx:s}};return s[0]!==void 0&&(l.logic_state=s[0]),e=new ct({props:l}),F.push(()=>H(e,"logic_state",f)),r=new we({props:{hidden:["mobile","tablet","desktop"],orientation:"horizontal",sizing:"tiny",$$slots:{default:[wn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),t=S(),p(r.$$.fragment)},l(o){h(e.$$.fragment,o),t=C(o),h(r.$$.fragment,o)},m(o,c){m(e,o,c),w(o,t,c),m(r,o,c),a=!0},p(o,c){const i={};c&4100&&(i.$$scope={dirty:c,ctx:o}),!n&&c&1&&(n=!0,i.logic_state=o[0],q(()=>n=!1)),e.$set(i);const $={};c&4096&&($.$$scope={dirty:c,ctx:o}),r.$set($)},i(o){a||(u(e.$$.fragment,o),u(r.$$.fragment,o),a=!0)},o(o){_(e.$$.fragment,o),_(r.$$.fragment,o),a=!1},d(o){g(e,o),o&&b(t),g(r,o)}}}function vn(s){let e,n,t,r,a,f;return e=new lt({props:{$$slots:{default:[on]},$$scope:{ctx:s}}}),t=new ot({props:{class:"app-navigation-search",hidden:s[2],margin_x:"medium",$$slots:{default:[sn]},$$scope:{ctx:s}}}),a=new st({props:{$$slots:{default:[kn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=S(),p(t.$$.fragment),r=S(),p(a.$$.fragment)},l(l){h(e.$$.fragment,l),n=C(l),h(t.$$.fragment,l),r=C(l),h(a.$$.fragment,l)},m(l,o){m(e,l,o),w(l,n,o),m(t,l,o),w(l,r,o),m(a,l,o),f=!0},p(l,o){const c={};o&4096&&(c.$$scope={dirty:o,ctx:l}),e.$set(c);const i={};o&4&&(i.hidden=l[2]),o&4096&&(i.$$scope={dirty:o,ctx:l}),t.$set(i);const $={};o&4101&&($.$$scope={dirty:o,ctx:l}),a.$set($)},i(l){f||(u(e.$$.fragment,l),u(t.$$.fragment,l),u(a.$$.fragment,l),f=!0)},o(l){_(e.$$.fragment,l),_(t.$$.fragment,l),_(a.$$.fragment,l),f=!1},d(l){g(e,l),l&&b(n),g(t,l),l&&b(r),g(a,l)}}}function Sn(s){let e,n;return e=new ft({props:{$$slots:{default:[Cn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4098&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Cn(s){let e,n,t;function r(f){s[6](f)}let a={};return s[1]!==void 0&&(a.logic_state=s[1]),e=new en({props:a}),F.push(()=>H(e,"logic_state",r)),{c(){p(e.$$.fragment)},l(f){h(e.$$.fragment,f)},m(f,l){m(e,f,l),t=!0},p(f,l){const o={};!n&&l&2&&(n=!0,o.logic_state=f[1],q(()=>n=!1)),e.$set(o)},i(f){t||(u(e.$$.fragment,f),t=!0)},o(f){_(e.$$.fragment,f),t=!1},d(f){g(e,f)}}}function Nn(s){let e,n,t,r,a,f;e=new rt({props:{class:"app-navigation",$$slots:{default:[vn]},$$scope:{ctx:s}}});let l=Sn(s);return{c(){p(e.$$.fragment),n=S(),l&&l.c(),t=v()},l(o){h(e.$$.fragment,o),n=C(o),l&&l.l(o),t=v()},m(o,c){m(e,o,c),w(o,n,c),l&&l.m(o,c),w(o,t,c),r=!0,a||(f=at(vt.call(null,window,s[3])),a=!0)},p(o,[c]){const i={};c&4101&&(i.$$scope={dirty:c,ctx:o}),e.$set(i),l.p(o,c)},i(o){r||(u(e.$$.fragment,o),u(l),r=!0)},o(o){_(e.$$.fragment,o),_(l),r=!1},d(o){g(e,o),o&&b(n),l&&l.d(o),o&&b(t),a=!1,f()}}}const D=[{href:"/blog",text:"Blog",icon:me},{href:"/docs",text:"Documentation",icon:ge},{href:"/playground",text:"Playground",icon:he},{href:"https://github.com/novacbn/kahi-ui",text:"Source",variation:"flush",icon:$t},{href:"https://github.com/novacbn/kahi-ui/releases",text:"Releases",variation:"flush",icon:ut},{href:"/chat",text:"Chat",variation:"flush",icon:_t}],Tn=be({mobile:!0,tablet:!0,desktop:!0}),An=be({mobile:!0,tablet:!0});function zn(s,e,n){let t,r;K(s,Tn,i=>n(4,t=i)),K(s,An,i=>n(2,r=i));let a=!1,f=!1;function l(i){i.preventDefault();const $=i.target;$&&$.blur(),n(0,a=!1),n(1,f=!0)}function o(i){a=i,n(0,a),n(4,t)}function c(i){f=i,n(1,f)}return s.$$.update=()=>{s.$$.dirty&16&&(t||n(0,a=!1))},[a,f,r,l,t,o,c]}class In extends y{constructor(e){super();G(this,e,zn,Nn,L,{})}}export{In as A,j as P,ee as s};
