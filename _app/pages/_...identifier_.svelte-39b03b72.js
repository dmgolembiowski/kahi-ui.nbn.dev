import{bf as ge,S as H,i as D,s as P,bg as de,w as g,x as d,y as b,q as i,o as u,B as h,O as M,l as C,g as m,n as N,p as L,d as p,T as E,t as w,h as v,bh as fe,bi as se,I as R,k as T,m as A,bj as oe,H as V,j,al as be,bc as z,bk as he,bl as ke,bm as we,bn as ae,bo as q,bp as B,F as G,a3 as $e,a4 as ce,$ as ve,ak as Ce,Z as Te,_ as Ae,aY as Ne,J as Le,L as Ee,M as Se,N as je,a7 as Ie,e as He,c as De,a as Pe,K as Re,aX as Me,aZ as Oe,a_ as qe,bq as Be,br as W,bs as ie,bt as ue}from"../chunks/vendor-b10044b0.js";import{r as Z}from"../chunks/singletons-a6a7384f.js";import{p as O}from"../chunks/stores-e763cd27.js";import{R as Fe}from"../chunks/REPLEmbed-6ffd01ea.js";import{A as _e}from"../chunks/AppAnchor-eef73d8c.js";import"../chunks/preferences-f3c864d1.js";import"../chunks/REPLSplit-fed70b2a.js";import"../chunks/preload-helper-ec9aa979.js";const pe=Ue;function Ue(a){Z&&Z.after_navigate(a)}const J=(a,e)=>{function n(){f.disconnect();const $=t();for(const c of $)c.remove()}function t(){if(e.metadata.snippets.length===0)return[];const $=e.metadata.snippets.map(c=>`.repl-snippet[data-identifier="${c.identifier}"]`).join(",");return Array.from(a.querySelectorAll($))}function r(){if(e.metadata.snippets.length===0)return[];const $=e.metadata.snippets.map(c=>`.highlight[data-identifier="${c.identifier}"][data-mode="repl"]:not([data-observing])`).join(",");return Array.from(a.querySelectorAll($))}function l(){const $=r();for(const c of $)c.setAttribute("data-observing","true"),f.observe(c)}function s($){const c=$.filter(_=>_.isIntersecting).map(_=>_.target);for(const _ of c){f.unobserve(_);const k=_.getAttribute("data-identifier"),S=_.innerText,I=document.createElement("DIV");I.setAttribute("class","repl-snippet"),I.setAttribute("data-identifier",k),I.setAttribute("data-palette","auto"),_.after(I),_.innerHTML="",_.style.display="none",new Fe({target:I,context:o,props:{identifier:k,value:S}})}}const o=ge(),f=new IntersectionObserver(s,{threshold:.1});return e&&l(),{destroy(){n()},update($){n(),e=$,e&&l()}}};function Ve(a){let e,n,t;return e=new E({props:{is:"strong",palette:"negative",$$slots:{default:[Ge]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=w(": failed to load content render")},l(r){d(e.$$.fragment,r),n=v(r,": failed to load content render")},m(r,l){b(e,r,l),m(r,n,l),t=!0},p(r,l){const s={};l&2&&(s.$$scope={dirty:l,ctx:r}),e.$set(s)},i(r){t||(i(e.$$.fragment,r),t=!0)},o(r){u(e.$$.fragment,r),t=!1},d(r){h(e,r),r&&p(n)}}}function ze(a){let e,n=a[0].stuff.content.render+"",t;return{c(){e=new fe,t=C(),this.h()},l(r){e=se(r),t=C(),this.h()},h(){e.a=t},m(r,l){e.m(n,r,l),m(r,t,l)},p(r,l){l&1&&n!==(n=r[0].stuff.content.render+"")&&e.p(n)},i:R,o:R,d(r){r&&p(t),r&&e.d()}}}function Ge(a){let e;return{c(){e=w("Error")},l(n){e=v(n,"Error")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function We(a){let e,n,t,r;const l=[ze,Ve],s=[];function o(f,$){return f[0].stuff.content?0:1}return e=o(a),n=s[e]=l[e](a),{c(){n.c(),t=C()},l(f){n.l(f),t=C()},m(f,$){s[e].m(f,$),m(f,t,$),r=!0},p(f,$){let c=e;e=o(f),e===c?s[e].p(f,$):(N(),u(s[c],1,1,()=>{s[c]=null}),L(),n=s[e],n?n.p(f,$):(n=s[e]=l[e](f),n.c()),i(n,1),n.m(t.parentNode,t))},i(f){r||(i(n),r=!0)},o(f){u(n),r=!1},d(f){s[e].d(f),f&&p(t)}}}function Ze(a){let e,n;return e=new de({props:{class:"content-article",actions:[[J,a[0].stuff.content]],$$slots:{default:[We]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,[r]){const l={};r&1&&(l.actions=[[J,t[0].stuff.content]]),r&3&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function Je(a,e,n){let t;return M(a,O,r=>n(0,t=r)),[t]}class me extends H{constructor(e){super();D(this,e,Je,Ze,P,{})}}function K(a,e,n){const t=a.slice();return t[5]=e[n][0],t[6]=e[n][1],t}function X(a,e,n){const t=a.slice();return t[9]=e[n],t}function Y(a,e,n){const t=a.slice();return t[12]=e[n],t}function Q(a){let e,n,t,r;e=new V({props:{is:"h2",id:"api-reference-"+a[0],margin_y:"medium",$$slots:{default:[Ke]},$$scope:{ctx:a}}});let l=a[1],s=[];for(let f=0;f<l.length;f+=1)s[f]=te(K(a,l,f));const o=f=>u(s[f],1,1,()=>{s[f]=null});return{c(){g(e.$$.fragment),n=T();for(let f=0;f<s.length;f+=1)s[f].c();t=C()},l(f){d(e.$$.fragment,f),n=A(f);for(let $=0;$<s.length;$+=1)s[$].l(f);t=C()},m(f,$){b(e,f,$),m(f,n,$);for(let c=0;c<s.length;c+=1)s[c].m(f,$);m(f,t,$),r=!0},p(f,$){const c={};if($&1&&(c.id="api-reference-"+f[0]),$&32769&&(c.$$scope={dirty:$,ctx:f}),e.$set(c),$&3){l=f[1];let _;for(_=0;_<l.length;_+=1){const k=K(f,l,_);s[_]?(s[_].p(k,$),i(s[_],1)):(s[_]=te(k),s[_].c(),i(s[_],1),s[_].m(t.parentNode,t))}for(N(),_=l.length;_<s.length;_+=1)o(_);L()}},i(f){if(!r){i(e.$$.fragment,f);for(let $=0;$<l.length;$+=1)i(s[$]);r=!0}},o(f){u(e.$$.fragment,f),s=s.filter(Boolean);for(let $=0;$<s.length;$+=1)u(s[$]);r=!1},d(f){h(e,f),f&&p(n),oe(s,f),f&&p(t)}}}function Ke(a){let e;return{c(){e=w(a[0])},l(n){e=v(n,a[0])},m(n,t){m(n,e,t)},p(n,t){t&1&&j(e,n[0])},d(n){n&&p(e)}}}function Xe(a){let e=a[5]+"",n;return{c(){n=w(e)},l(t){n=v(t,e)},m(t,r){m(t,n,r)},p(t,r){r&2&&e!==(e=t[5]+"")&&j(n,e)},d(t){t&&p(n)}}}function Ye(a){let e,n;return e=new z({props:{$$slots:{default:[Xe]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&32770&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function Qe(a){let e;return{c(){e=w("Name")},l(n){e=v(n,"Name")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function ye(a){let e;return{c(){e=w("Description")},l(n){e=v(n,"Description")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function xe(a){let e;return{c(){e=w("Types")},l(n){e=v(n,"Types")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function et(a){let e,n,t,r,l,s;return e=new q({props:{$$slots:{default:[Qe]},$$scope:{ctx:a}}}),t=new q({props:{$$slots:{default:[ye]},$$scope:{ctx:a}}}),l=new q({props:{$$slots:{default:[xe]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment),r=T(),g(l.$$.fragment)},l(o){d(e.$$.fragment,o),n=A(o),d(t.$$.fragment,o),r=A(o),d(l.$$.fragment,o)},m(o,f){b(e,o,f),m(o,n,f),b(t,o,f),m(o,r,f),b(l,o,f),s=!0},p(o,f){const $={};f&32768&&($.$$scope={dirty:f,ctx:o}),e.$set($);const c={};f&32768&&(c.$$scope={dirty:f,ctx:o}),t.$set(c);const _={};f&32768&&(_.$$scope={dirty:f,ctx:o}),l.$set(_)},i(o){s||(i(e.$$.fragment,o),i(t.$$.fragment,o),i(l.$$.fragment,o),s=!0)},o(o){u(e.$$.fragment,o),u(t.$$.fragment,o),u(l.$$.fragment,o),s=!1},d(o){h(e,o),o&&p(n),h(t,o),o&&p(r),h(l,o)}}}function tt(a){let e,n;return e=new ae({props:{$$slots:{default:[et]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&32768&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function nt(a){let e=a[9].name+"",n;return{c(){n=w(e)},l(t){n=v(t,e)},m(t,r){m(t,n,r)},p(t,r){r&2&&e!==(e=t[9].name+"")&&j(n,e)},d(t){t&&p(n)}}}function rt(a){let e,n;return e=new z({props:{$$slots:{default:[nt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&32770&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function lt(a){let e,n=a[9].description+"",t;return{c(){e=new fe,t=C(),this.h()},l(r){e=se(r),t=C(),this.h()},h(){e.a=t},m(r,l){e.m(n,r,l),m(r,t,l)},p(r,l){l&2&&n!==(n=r[9].description+"")&&e.p(n)},d(r){r&&p(t),r&&e.d()}}}function y(a){let e,n;return e=new E({props:{is:"strong",$$slots:{default:[ft]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function ft(a){let e;return{c(){e=w("(DEFAULT)")},l(n){e=v(n,"(DEFAULT)")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function st(a){let e=a[12]+"",n,t,r,l,s=a[12]===a[9].default&&y(a);return{c(){n=w(e),t=T(),s&&s.c(),r=T()},l(o){n=v(o,e),t=A(o),s&&s.l(o),r=A(o)},m(o,f){m(o,n,f),m(o,t,f),s&&s.m(o,f),m(o,r,f),l=!0},p(o,f){(!l||f&2)&&e!==(e=o[12]+"")&&j(n,e),o[12]===o[9].default?s?f&2&&i(s,1):(s=y(o),s.c(),i(s,1),s.m(r.parentNode,r)):s&&(N(),u(s,1,1,()=>{s=null}),L())},i(o){l||(i(s),l=!0)},o(o){u(s),l=!1},d(o){o&&p(n),o&&p(t),s&&s.d(o),o&&p(r)}}}function x(a,e){let n,t,r;return t=new z({props:{$$slots:{default:[st]},$$scope:{ctx:e}}}),{key:a,first:null,c(){n=C(),g(t.$$.fragment),this.h()},l(l){n=C(),d(t.$$.fragment,l),this.h()},h(){this.first=n},m(l,s){m(l,n,s),b(t,l,s),r=!0},p(l,s){e=l;const o={};s&32770&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(l){r||(i(t.$$.fragment,l),r=!0)},o(l){u(t.$$.fragment,l),r=!1},d(l){l&&p(n),h(t,l)}}}function ot(a){let e=[],n=new Map,t,r,l=a[9].types;const s=o=>o[12];for(let o=0;o<l.length;o+=1){let f=Y(a,l,o),$=s(f);n.set($,e[o]=x($,f))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=C()},l(o){for(let f=0;f<e.length;f+=1)e[f].l(o);t=C()},m(o,f){for(let $=0;$<e.length;$+=1)e[$].m(o,f);m(o,t,f),r=!0},p(o,f){f&2&&(l=o[9].types,N(),e=$e(e,f,s,1,o,l,n,t.parentNode,ce,x,t,Y),L())},i(o){if(!r){for(let f=0;f<l.length;f+=1)i(e[f]);r=!0}},o(o){for(let f=0;f<e.length;f+=1)u(e[f]);r=!1},d(o){for(let f=0;f<e.length;f+=1)e[f].d(o);o&&p(t)}}}function at(a){let e,n;return e=new G({props:{orientation:"horizontal",alignment_x:"right",spacing:"small",variation:"wrap",max_width:"prose",$$slots:{default:[ot]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&32770&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function $t(a){let e,n,t,r,l,s,o;return e=new B({props:{$$slots:{default:[rt]},$$scope:{ctx:a}}}),t=new B({props:{$$slots:{default:[lt]},$$scope:{ctx:a}}}),l=new B({props:{$$slots:{default:[at]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment),r=T(),g(l.$$.fragment),s=T()},l(f){d(e.$$.fragment,f),n=A(f),d(t.$$.fragment,f),r=A(f),d(l.$$.fragment,f),s=A(f)},m(f,$){b(e,f,$),m(f,n,$),b(t,f,$),m(f,r,$),b(l,f,$),m(f,s,$),o=!0},p(f,$){const c={};$&32770&&(c.$$scope={dirty:$,ctx:f}),e.$set(c);const _={};$&32770&&(_.$$scope={dirty:$,ctx:f}),t.$set(_);const k={};$&32770&&(k.$$scope={dirty:$,ctx:f}),l.$set(k)},i(f){o||(i(e.$$.fragment,f),i(t.$$.fragment,f),i(l.$$.fragment,f),o=!0)},o(f){u(e.$$.fragment,f),u(t.$$.fragment,f),u(l.$$.fragment,f),o=!1},d(f){h(e,f),f&&p(n),h(t,f),f&&p(r),h(l,f),f&&p(s)}}}function ee(a){let e,n;return e=new ae({props:{$$slots:{default:[$t]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&32770&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function ct(a){let e,n,t=a[6],r=[];for(let s=0;s<t.length;s+=1)r[s]=ee(X(a,t,s));const l=s=>u(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=C()},l(s){for(let o=0;o<r.length;o+=1)r[o].l(s);e=C()},m(s,o){for(let f=0;f<r.length;f+=1)r[f].m(s,o);m(s,e,o),n=!0},p(s,o){if(o&2){t=s[6];let f;for(f=0;f<t.length;f+=1){const $=X(s,t,f);r[f]?(r[f].p($,o),i(r[f],1)):(r[f]=ee($),r[f].c(),i(r[f],1),r[f].m(e.parentNode,e))}for(N(),f=t.length;f<r.length;f+=1)l(f);L()}},i(s){if(!n){for(let o=0;o<t.length;o+=1)i(r[o]);n=!0}},o(s){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)u(r[o]);n=!1},d(s){oe(r,s),s&&p(e)}}}function it(a){let e,n,t,r;return e=new ke({props:{$$slots:{default:[tt]},$$scope:{ctx:a}}}),t=new we({props:{$$slots:{default:[ct]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment)},l(l){d(e.$$.fragment,l),n=A(l),d(t.$$.fragment,l)},m(l,s){b(e,l,s),m(l,n,s),b(t,l,s),r=!0},p(l,s){const o={};s&32768&&(o.$$scope={dirty:s,ctx:l}),e.$set(o);const f={};s&32770&&(f.$$scope={dirty:s,ctx:l}),t.$set(f)},i(l){r||(i(e.$$.fragment,l),i(t.$$.fragment,l),r=!0)},o(l){u(e.$$.fragment,l),u(t.$$.fragment,l),r=!1},d(l){h(e,l),l&&p(n),h(t,l)}}}function ut(a){let e,n,t;return e=new he({props:{"min-width":["mobile:content-max","tablet:content-max"],$$slots:{default:[it]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T()},l(r){d(e.$$.fragment,r),n=A(r)},m(r,l){b(e,r,l),m(r,n,l),t=!0},p(r,l){const s={};l&32770&&(s.$$scope={dirty:l,ctx:r}),e.$set(s)},i(r){t||(i(e.$$.fragment,r),t=!0)},o(r){u(e.$$.fragment,r),t=!1},d(r){h(e,r),r&&p(n)}}}function te(a){let e,n,t,r;return e=new V({props:{is:"h3",id:"api-reference-"+a[0]+"-"+a[5].toLowerCase(),margin_y:"medium",$$slots:{default:[Ye]},$$scope:{ctx:a}}}),t=new be({props:{$$slots:{default:[ut]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment)},l(l){d(e.$$.fragment,l),n=A(l),d(t.$$.fragment,l)},m(l,s){b(e,l,s),m(l,n,s),b(t,l,s),r=!0},p(l,s){const o={};s&3&&(o.id="api-reference-"+l[0]+"-"+l[5].toLowerCase()),s&32770&&(o.$$scope={dirty:s,ctx:l}),e.$set(o);const f={};s&32770&&(f.$$scope={dirty:s,ctx:l}),t.$set(f)},i(l){r||(i(e.$$.fragment,l),i(t.$$.fragment,l),r=!0)},o(l){u(e.$$.fragment,l),u(t.$$.fragment,l),r=!1},d(l){h(e,l),l&&p(n),h(t,l)}}}function _t(a){let e,n,t=a[1].length>0&&Q(a);return{c(){t&&t.c(),e=C()},l(r){t&&t.l(r),e=C()},m(r,l){t&&t.m(r,l),m(r,e,l),n=!0},p(r,[l]){r[1].length>0?t?(t.p(r,l),l&2&&i(t,1)):(t=Q(r),t.c(),i(t,1),t.m(e.parentNode,e)):t&&(N(),u(t,1,1,()=>{t=null}),L())},i(r){n||(i(t),n=!0)},o(r){u(t),n=!1},d(r){t&&t.d(r),r&&p(e)}}}function pt(a,e,n){let t,{id:r}=e,{filter:l=""}=e,{references:s}=e,o;return a.$$set=f=>{"id"in f&&n(0,r=f.id),"filter"in f&&n(2,l=f.filter),"references"in f&&n(3,s=f.references)},a.$$.update=()=>{a.$$.dirty&4&&n(4,t=l.toLowerCase()),a.$$.dirty&25&&n(1,o=Object.entries(s).map(([f,$])=>{var c;return r.toLowerCase().startsWith(t)||f.toLowerCase().startsWith(t)?[f,$!=null?$:[]]:[f,(c=$==null?void 0:$.filter(_=>_.name.toLowerCase().includes(t)||_.types.filter(k=>k.toLowerCase().includes(t)).length>0))!==null&&c!==void 0?c:[]]}).filter(([f,$])=>f.toLowerCase().startsWith(t)||$.length>0))},[r,o,l,s,t]}class F extends H{constructor(e){super();D(this,e,pt,_t,P,{id:0,filter:2,references:3})}}function mt(a){let e,n,t;return e=new E({props:{is:"strong",palette:"negative",$$slots:{default:[dt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=w(": failed to load content api reference")},l(r){d(e.$$.fragment,r),n=v(r,": failed to load content api reference")},m(r,l){b(e,r,l),m(r,n,l),t=!0},p(r,l){const s={};l&8&&(s.$$scope={dirty:l,ctx:r}),e.$set(s)},i(r){t||(i(e.$$.fragment,r),t=!0)},o(r){u(e.$$.fragment,r),t=!1},d(r){h(e,r),r&&p(n)}}}function gt(a){let e,n,t,r,l,s,o,f=bt(a);return n=new F({props:{id:"Properties",references:a[1].stuff.content.references.properties,filter:a[0]}}),r=new F({props:{id:"Events",references:a[1].stuff.content.references.events,filter:a[0]}}),s=new F({props:{id:"Slots",references:a[1].stuff.content.references.slots,filter:a[0]}}),{c(){f&&f.c(),e=T(),g(n.$$.fragment),t=T(),g(r.$$.fragment),l=T(),g(s.$$.fragment)},l($){f&&f.l($),e=A($),d(n.$$.fragment,$),t=A($),d(r.$$.fragment,$),l=A($),d(s.$$.fragment,$)},m($,c){f&&f.m($,c),m($,e,c),b(n,$,c),m($,t,c),b(r,$,c),m($,l,c),b(s,$,c),o=!0},p($,c){f.p($,c);const _={};c&2&&(_.references=$[1].stuff.content.references.properties),c&1&&(_.filter=$[0]),n.$set(_);const k={};c&2&&(k.references=$[1].stuff.content.references.events),c&1&&(k.filter=$[0]),r.$set(k);const S={};c&2&&(S.references=$[1].stuff.content.references.slots),c&1&&(S.filter=$[0]),s.$set(S)},i($){o||(i(f),i(n.$$.fragment,$),i(r.$$.fragment,$),i(s.$$.fragment,$),o=!0)},o($){u(f),u(n.$$.fragment,$),u(r.$$.fragment,$),u(s.$$.fragment,$),o=!1},d($){f&&f.d($),$&&p(e),h(n,$),$&&p(t),h(r,$),$&&p(l),h(s,$)}}}function dt(a){let e;return{c(){e=w("Error")},l(n){e=v(n,"Error")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function bt(a){let e,n,t;function r(s){a[2](s)}let l={placeholder:"Filter API..."};return a[0]!==void 0&&(l.value=a[0]),e=new Ce({props:l}),Te.push(()=>Ae(e,"value",r)),{c(){g(e.$$.fragment)},l(s){d(e.$$.fragment,s)},m(s,o){b(e,s,o),t=!0},p(s,o){const f={};!n&&o&1&&(n=!0,f.value=s[0],ve(()=>n=!1)),e.$set(f)},i(s){t||(i(e.$$.fragment,s),t=!0)},o(s){u(e.$$.fragment,s),t=!1},d(s){h(e,s)}}}function ht(a){let e,n,t,r;const l=[gt,mt],s=[];function o(f,$){return f[1].stuff.content?0:1}return e=o(a),n=s[e]=l[e](a),{c(){n.c(),t=C()},l(f){n.l(f),t=C()},m(f,$){s[e].m(f,$),m(f,t,$),r=!0},p(f,[$]){let c=e;e=o(f),e===c?s[e].p(f,$):(N(),u(s[c],1,1,()=>{s[c]=null}),L(),n=s[e],n?n.p(f,$):(n=s[e]=l[e](f),n.c()),i(n,1),n.m(t.parentNode,t))},i(f){r||(i(n),r=!0)},o(f){u(n),r=!1},d(f){s[e].d(f),f&&p(t)}}}function kt(a,e,n){let t;M(a,O,s=>n(1,t=s));let r="";pe(()=>{n(0,r="")});function l(s){r=s,n(0,r)}return[r,t,l]}class wt extends H{constructor(e){super();D(this,e,kt,ht,P,{})}}function vt(a){let e;const n=a[0].default,t=Le(n,a,a[1],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,l){t&&t.m(r,l),e=!0},p(r,l){t&&t.p&&(!e||l&2)&&Ee(t,n,r,r[1],e?je(n,r[1],l,null):Se(r[1]),null)},i(r){e||(i(t,r),e=!0)},o(r){u(t,r),e=!1},d(r){t&&t.d(r)}}}function Ct(a){let e,n;return e=new Ne({props:{is:"main",class:"content-container",width:"100",padding_y:"large",$$slots:{default:[vt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,[r]){const l={};r&2&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function Tt(a,e,n){let{$$slots:t={},$$scope:r}=e;return a.$$set=l=>{"$$scope"in l&&n(1,r=l.$$scope)},[t,r]}class At extends H{constructor(e){super();D(this,e,Tt,Ct,P,{})}}function ne(a,e,n){const t=a.slice();return t[3]=e[n][0],t[4]=e[n][1],t[6]=n,t}function Nt(a){let e,n,t;return e=new E({props:{is:"strong",palette:"negative",$$slots:{default:[Et]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=w(": failed to load content metadata")},l(r){d(e.$$.fragment,r),n=v(r,": failed to load content metadata")},m(r,l){b(e,r,l),m(r,n,l),t=!0},p(r,l){const s={};l&128&&(s.$$scope={dirty:l,ctx:r}),e.$set(s)},i(r){t||(i(e.$$.fragment,r),t=!0)},o(r){u(e.$$.fragment,r),t=!1},d(r){h(e,r),r&&p(n)}}}function Lt(a){let e,n,t,r;return e=new V({props:{margin_bottom:"small",$$slots:{default:[St]},$$scope:{ctx:a}}}),t=new G({props:{orientation:"horizontal",alignment_y:"center",spacing:"small",margin_bottom:"medium",$$slots:{default:[Ut]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment)},l(l){d(e.$$.fragment,l),n=A(l),d(t.$$.fragment,l)},m(l,s){b(e,l,s),m(l,n,s),b(t,l,s),r=!0},p(l,s){const o={};s&129&&(o.$$scope={dirty:s,ctx:l}),e.$set(o);const f={};s&135&&(f.$$scope={dirty:s,ctx:l}),t.$set(f)},i(l){r||(i(e.$$.fragment,l),i(t.$$.fragment,l),r=!0)},o(l){u(e.$$.fragment,l),u(t.$$.fragment,l),r=!1},d(l){h(e,l),l&&p(n),h(t,l)}}}function Et(a){let e;return{c(){e=w("Error")},l(n){e=v(n,"Error")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function St(a){let e=a[0].stuff.content.metadata.title+"",n;return{c(){n=w(e)},l(t){n=v(t,e)},m(t,r){m(t,n,r)},p(t,r){r&1&&e!==(e=t[0].stuff.content.metadata.title+"")&&j(n,e)},d(t){t&&p(n)}}}function jt(a){let e,n;return e=new E({props:{is:"small",$$slots:{default:[Ht]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&130&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function It(a){let e,n,t,r,l;return n=new G({props:{orientation:"horizontal",alignment_y:"center",spacing:"small",$$slots:{default:[Ot]},$$scope:{ctx:a}}}),r=new E({props:{is:"small",$$slots:{default:[qt]},$$scope:{ctx:a}}}),{c(){e=He("div"),g(n.$$.fragment),t=T(),g(r.$$.fragment)},l(s){e=De(s,"DIV",{});var o=Pe(e);d(n.$$.fragment,o),t=A(o),d(r.$$.fragment,o),o.forEach(p)},m(s,o){m(s,e,o),b(n,e,null),Re(e,t),b(r,e,null),l=!0},p(s,o){const f={};o&129&&(f.$$scope={dirty:o,ctx:s}),n.$set(f);const $={};o&130&&($.$$scope={dirty:o,ctx:s}),r.$set($)},i(s){l||(i(n.$$.fragment,s),i(r.$$.fragment,s),l=!0)},o(s){u(n.$$.fragment,s),u(r.$$.fragment,s),l=!1},d(s){s&&p(e),h(n),h(r)}}}function Ht(a){let e;return{c(){e=w(a[1])},l(n){e=v(n,a[1])},m(n,t){m(n,e,t)},p(n,t){t&2&&j(e,n[1])},d(n){n&&p(e)}}}function re(a){let e;return{c(){e=w("\u2022")},l(n){e=v(n,"\u2022")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function Dt(a){let e=a[3]+"",n;return{c(){n=w(e)},l(t){n=v(t,e)},m(t,r){m(t,n,r)},p(t,r){r&1&&e!==(e=t[3]+"")&&j(n,e)},i:R,o:R,d(t){t&&p(n)}}}function Pt(a){let e,n;return e=new _e({props:{class:"anchor",href:a[4].href,palette:"informative",$$slots:{default:[Rt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&1&&(l.href=t[4].href),r&129&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function Rt(a){let e=a[3]+"",n;return{c(){n=w(e)},l(t){n=v(t,e)},m(t,r){m(t,n,r)},p(t,r){r&1&&e!==(e=t[3]+"")&&j(n,e)},d(t){t&&p(n)}}}function Mt(a){let e,n,t,r;const l=[Pt,Dt],s=[];function o(f,$){var c;return((c=f[4])==null?void 0:c.href)?0:1}return e=o(a),n=s[e]=l[e](a),{c(){n.c(),t=T()},l(f){n.l(f),t=A(f)},m(f,$){s[e].m(f,$),m(f,t,$),r=!0},p(f,$){let c=e;e=o(f),e===c?s[e].p(f,$):(N(),u(s[c],1,1,()=>{s[c]=null}),L(),n=s[e],n?n.p(f,$):(n=s[e]=l[e](f),n.c()),i(n,1),n.m(t.parentNode,t))},i(f){r||(i(n),r=!0)},o(f){u(n),r=!1},d(f){s[e].d(f),f&&p(t)}}}function le(a,e){let n,t,r,l,s=e[6]>0&&re();return r=new E({props:{is:"small",$$slots:{default:[Mt]},$$scope:{ctx:e}}}),{key:a,first:null,c(){n=C(),s&&s.c(),t=T(),g(r.$$.fragment),this.h()},l(o){n=C(),s&&s.l(o),t=A(o),d(r.$$.fragment,o),this.h()},h(){this.first=n},m(o,f){m(o,n,f),s&&s.m(o,f),m(o,t,f),b(r,o,f),l=!0},p(o,f){e=o,e[6]>0?s||(s=re(),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null);const $={};f&129&&($.$$scope={dirty:f,ctx:e}),r.$set($)},i(o){l||(i(r.$$.fragment,o),l=!0)},o(o){u(r.$$.fragment,o),l=!1},d(o){o&&p(n),s&&s.d(o),o&&p(t),h(r,o)}}}function Ot(a){let e=[],n=new Map,t,r,l=Object.entries(a[0].stuff.content.metadata.authors);const s=o=>o[3];for(let o=0;o<l.length;o+=1){let f=ne(a,l,o),$=s(f);n.set($,e[o]=le($,f))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=C()},l(o){for(let f=0;f<e.length;f+=1)e[f].l(o);t=C()},m(o,f){for(let $=0;$<e.length;$+=1)e[$].m(o,f);m(o,t,f),r=!0},p(o,f){f&1&&(l=Object.entries(o[0].stuff.content.metadata.authors),N(),e=$e(e,f,s,1,o,l,n,t.parentNode,ce,le,t,ne),L())},i(o){if(!r){for(let f=0;f<l.length;f+=1)i(e[f]);r=!0}},o(o){for(let f=0;f<e.length;f+=1)u(e[f]);r=!1},d(o){for(let f=0;f<e.length;f+=1)e[f].d(o);o&&p(t)}}}function qt(a){let e;return{c(){e=w(a[1])},l(n){e=v(n,a[1])},m(n,t){m(n,e,t)},p(n,t){t&2&&j(e,n[1])},d(n){n&&p(e)}}}function Bt(a){let e;return{c(){e=w("View Source")},l(n){e=v(n,"View Source")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function Ft(a){let e,n;return e=new _e({props:{class:"anchor",href:a[2],palette:"informative",$$slots:{default:[Bt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&4&&(l.href=t[2]),r&128&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function Ut(a){let e,n,t,r,l,s,o;const f=[It,jt],$=[];function c(_,k){return _[0].stuff.content.metadata.authors?0:1}return e=c(a),n=$[e]=f[e](a),r=new Ie({}),s=new E({props:{is:"small",$$slots:{default:[Ft]},$$scope:{ctx:a}}}),{c(){n.c(),t=T(),g(r.$$.fragment),l=T(),g(s.$$.fragment)},l(_){n.l(_),t=A(_),d(r.$$.fragment,_),l=A(_),d(s.$$.fragment,_)},m(_,k){$[e].m(_,k),m(_,t,k),b(r,_,k),m(_,l,k),b(s,_,k),o=!0},p(_,k){let S=e;e=c(_),e===S?$[e].p(_,k):(N(),u($[S],1,1,()=>{$[S]=null}),L(),n=$[e],n?n.p(_,k):(n=$[e]=f[e](_),n.c()),i(n,1),n.m(t.parentNode,t));const I={};k&132&&(I.$$scope={dirty:k,ctx:_}),s.$set(I)},i(_){o||(i(n),i(r.$$.fragment,_),i(s.$$.fragment,_),o=!0)},o(_){u(n),u(r.$$.fragment,_),u(s.$$.fragment,_),o=!1},d(_){$[e].d(_),_&&p(t),h(r,_),_&&p(l),h(s,_)}}}function Vt(a){let e,n,t,r;const l=[Lt,Nt],s=[];function o(f,$){return f[0].stuff.content?0:1}return e=o(a),n=s[e]=l[e](a),{c(){n.c(),t=C()},l(f){n.l(f),t=C()},m(f,$){s[e].m(f,$),m(f,t,$),r=!0},p(f,[$]){let c=e;e=o(f),e===c?s[e].p(f,$):(N(),u(s[c],1,1,()=>{s[c]=null}),L(),n=s[e],n?n.p(f,$):(n=s[e]=l[e](f),n.c()),i(n,1),n.m(t.parentNode,t))},i(f){r||(i(n),r=!0)},o(f){u(n),r=!1},d(f){s[e].d(f),f&&p(t)}}}const zt=({identifier:a})=>`https://github.com/kahi-framework/kahi-ui.nbn.dev/tree/main/content${a}.md`;function Gt(a,e,n){let t,r,l;return M(a,O,s=>n(0,l=s)),a.$$.update=()=>{a.$$.dirty&1&&n(2,t=l.stuff.content?zt({identifier:l.stuff.content.metadata.identifier}):""),a.$$.dirty&1&&n(1,r=l.stuff.content?new Date(l.stuff.content.metadata.modified_at).toLocaleString(navigator.language):"")},[l,r,t]}class Wt extends H{constructor(e){super();D(this,e,Gt,Vt,P,{})}}function Zt(a){let e,n;return e=new Me({props:{palette:"negative",$$slots:{default:[yt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&64&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function Jt(a){let e,n;return e=new At({props:{$$slots:{default:[an]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&70&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function Kt(a){let e;return{c(){e=w("404")},l(n){e=v(n,"404")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function Xt(a){let e;return{c(){e=w("page")},l(n){e=v(n,"page")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function Yt(a){let e;return{c(){e=w("was not")},l(n){e=v(n,"was not")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function Qt(a){let e,n,t,r,l,s;return n=new E({props:{is:"strong",$$slots:{default:[Xt]},$$scope:{ctx:a}}}),r=new E({props:{is:"strong",$$slots:{default:[Yt]},$$scope:{ctx:a}}}),{c(){e=w("The "),g(n.$$.fragment),t=w(" you were looking for "),g(r.$$.fragment),l=w(" found.")},l(o){e=v(o,"The "),d(n.$$.fragment,o),t=v(o," you were looking for "),d(r.$$.fragment,o),l=v(o," found.")},m(o,f){m(o,e,f),b(n,o,f),m(o,t,f),b(r,o,f),m(o,l,f),s=!0},p(o,f){const $={};f&64&&($.$$scope={dirty:f,ctx:o}),n.$set($);const c={};f&64&&(c.$$scope={dirty:f,ctx:o}),r.$set(c)},i(o){s||(i(n.$$.fragment,o),i(r.$$.fragment,o),s=!0)},o(o){u(n.$$.fragment,o),u(r.$$.fragment,o),s=!1},d(o){o&&p(e),h(n,o),o&&p(t),h(r,o),o&&p(l)}}}function yt(a){let e,n,t,r;return e=new Oe({props:{$$slots:{default:[Kt]},$$scope:{ctx:a}}}),t=new qe({props:{$$slots:{default:[Qt]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment)},l(l){d(e.$$.fragment,l),n=A(l),d(t.$$.fragment,l)},m(l,s){b(e,l,s),m(l,n,s),b(t,l,s),r=!0},p(l,s){const o={};s&64&&(o.$$scope={dirty:s,ctx:l}),e.$set(o);const f={};s&64&&(f.$$scope={dirty:s,ctx:l}),t.$set(f)},i(l){r||(i(e.$$.fragment,l),i(t.$$.fragment,l),r=!0)},o(l){u(e.$$.fragment,l),u(t.$$.fragment,l),r=!1},d(l){h(e,l),l&&p(n),h(t,l)}}}function xt(a){let e,n;return e=new me({}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p:R,i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function en(a){let e,n;return e=new Be({props:{logic_name:"content-switcher",alignment_x:"stretch",logic_state:a[1],$$slots:{default:[on]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&2&&(l.logic_state=t[1]),r&64&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function tn(a){let e;return{c(){e=w("Guide")},l(n){e=v(n,"Guide")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function nn(a){let e,n;return e=new me({}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function rn(a){let e,n,t,r;return e=new ie({props:{palette:"accent",$$slots:{default:[tn]},$$scope:{ctx:a}}}),t=new ue({props:{padding_top:"medium",$$slots:{default:[nn]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment)},l(l){d(e.$$.fragment,l),n=A(l),d(t.$$.fragment,l)},m(l,s){b(e,l,s),m(l,n,s),b(t,l,s),r=!0},p(l,s){const o={};s&64&&(o.$$scope={dirty:s,ctx:l}),e.$set(o);const f={};s&64&&(f.$$scope={dirty:s,ctx:l}),t.$set(f)},i(l){r||(i(e.$$.fragment,l),i(t.$$.fragment,l),r=!0)},o(l){u(e.$$.fragment,l),u(t.$$.fragment,l),r=!1},d(l){h(e,l),l&&p(n),h(t,l)}}}function ln(a){let e;return{c(){e=w("API Reference")},l(n){e=v(n,"API Reference")},m(n,t){m(n,e,t)},d(n){n&&p(e)}}}function fn(a){let e,n;return e=new wt({}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function sn(a){let e,n,t,r;return e=new ie({props:{palette:"accent",$$slots:{default:[ln]},$$scope:{ctx:a}}}),t=new ue({props:{padding_top:"medium",$$slots:{default:[fn]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment)},l(l){d(e.$$.fragment,l),n=A(l),d(t.$$.fragment,l)},m(l,s){b(e,l,s),m(l,n,s),b(t,l,s),r=!0},p(l,s){const o={};s&64&&(o.$$scope={dirty:s,ctx:l}),e.$set(o);const f={};s&64&&(f.$$scope={dirty:s,ctx:l}),t.$set(f)},i(l){r||(i(e.$$.fragment,l),i(t.$$.fragment,l),r=!0)},o(l){u(e.$$.fragment,l),u(t.$$.fragment,l),r=!1},d(l){h(e,l),l&&p(n),h(t,l)}}}function on(a){let e,n,t,r;return e=new W({props:{logic_id:"content-switcher-guide",$$slots:{default:[rn]},$$scope:{ctx:a}}}),t=new W({props:{logic_id:"content-switcher-api-reference",$$slots:{default:[sn]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment)},l(l){d(e.$$.fragment,l),n=A(l),d(t.$$.fragment,l)},m(l,s){b(e,l,s),m(l,n,s),b(t,l,s),r=!0},p(l,s){const o={};s&64&&(o.$$scope={dirty:s,ctx:l}),e.$set(o);const f={};s&64&&(f.$$scope={dirty:s,ctx:l}),t.$set(f)},i(l){r||(i(e.$$.fragment,l),i(t.$$.fragment,l),r=!0)},o(l){u(e.$$.fragment,l),u(t.$$.fragment,l),r=!1},d(l){h(e,l),l&&p(n),h(t,l)}}}function an(a){let e,n,t,r,l,s;e=new Wt({});const o=[en,xt],f=[];function $(c,_){return c[2]?0:1}return t=$(a),r=f[t]=o[t](a),{c(){g(e.$$.fragment),n=T(),r.c(),l=C()},l(c){d(e.$$.fragment,c),n=A(c),r.l(c),l=C()},m(c,_){b(e,c,_),m(c,n,_),f[t].m(c,_),m(c,l,_),s=!0},p(c,_){let k=t;t=$(c),t===k?f[t].p(c,_):(N(),u(f[k],1,1,()=>{f[k]=null}),L(),r=f[t],r?r.p(c,_):(r=f[t]=o[t](c),r.c()),i(r,1),r.m(l.parentNode,l))},i(c){s||(i(e.$$.fragment,c),i(r),s=!0)},o(c){u(e.$$.fragment,c),u(r),s=!1},d(c){h(e,c),c&&p(n),f[t].d(c),c&&p(l)}}}function $n(a){let e,n,t,r;const l=[Jt,Zt],s=[];function o(f,$){return f[0].stuff.content?0:1}return e=o(a),n=s[e]=l[e](a),{c(){n.c(),t=C()},l(f){n.l(f),t=C()},m(f,$){s[e].m(f,$),m(f,t,$),r=!0},p(f,[$]){let c=e;e=o(f),e===c?s[e].p(f,$):(N(),u(s[c],1,1,()=>{s[c]=null}),L(),n=s[e],n?n.p(f,$):(n=s[e]=l[e](f),n.c()),i(n,1),n.m(t.parentNode,t))},i(f){r||(i(n),r=!0)},o(f){u(n),r=!1},d(f){s[e].d(f),f&&p(t)}}}const kn=async({fetch:a,params:e})=>{const{identifier:n=""}=e,t=await a(`/api/v4/content/${n}.json`);if(!t.ok){const o=await t.json();return{status:t.status,error:o.code}}const l=(await t.json()).data,s=l.metadata.snippets.map(o=>`/api/v4/snippets/${o.identifier}.json`);return{stuff:{content:l,prerender:s}}};function U(a){return a?Object.keys(a).length>0:!1}function cn(a,e,n){let t,r;M(a,O,$=>n(0,r=$));var l,s,o;let f="content-switcher-guide";return pe(()=>{n(1,f="content-switcher-guide")}),a.$$.update=()=>{a.$$.dirty&57&&n(2,t=U(n(3,l=r.stuff.content)===null||l===void 0?void 0:l.references.events)||U(n(4,s=r.stuff.content)===null||s===void 0?void 0:s.references.properties)||U(n(5,o=r.stuff.content)===null||o===void 0?void 0:o.references.slots))},[r,f,t,l,s,o]}class wn extends H{constructor(e){super();D(this,e,cn,$n,P,{})}}export{wn as default,kn as load};
