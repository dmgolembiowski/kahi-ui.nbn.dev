var t,e,a=Object.defineProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,e,s)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,i=(t,e)=>{for(var a in e||(e={}))r.call(e,a)&&n(t,a,e[a]);if(s)for(var a of s(e))o.call(e,a)&&n(t,a,e[a]);return t};(e=t||(t={})).mobile="mobile",e.tablet="tablet",e.desktop="desktop",e.widescreen="widescreen";const l=Object.values(t),c=i(i({},t),p(t));function p(t){const e=Object.values(t).map((t=>l.map((e=>{const a=`${e}:${t}`;return[a,a]})))).flat(1);return Object.fromEntries(e)}var u,v,m,h,d,g;(v=u||(u={})).center="center",v.stretch="stretch",(h=m||(m={})).left="left",h.center="center",h.right="right",h.stretch="stretch",(g=d||(d={})).top="top",g.center="center",g.bottom="bottom",g.stretch="stretch";const b=i(i({},u),p(u)),f=i(i({},m),p(m)),w=i({},m),y=i(i({},d),p(d)),j=i({},d);var O;(O||(O={})).pulse="pulse";const k=i({},O);var z,x;(x=z||(z={})).date="date",x.location="location",x.page="page",x.step="step",x.time="time",x.true="true";const P=i({},z);var E,$;($=E||(E={})).lowest="lowest",$.low="low",$.medium="medium",$.high="high",$.highest="highest";const I=i({},E);var S,q;(q=S||(S={})).contain="contain",q.cover="cover",q.fill="fill",q.none="none",q["scale-down"]="scale-down";const A=i({},S);var B,C;(C=B||(B={})).mobile="mobile",C.tablet="tablet",C.desktop="desktop",C.widescreen="widescreen";const D=i({},B);var F,G,H,J;(G=F||(F={})).horizontal="horizontal",G.vertical="vertical",(H||(H={})).vertical="vertical",(J||(J={})).horizontal="horizontal";const K=i(i({},F),p(F)),L=i(i({},H),p(H)),M=i(i({},J),p(J));var N,Q;(Q=N||(N={})).auto="auto",Q["auto-inverse"]="auto-inverse",Q.inherit="inherit",Q.accent="accent",Q.dark="dark",Q.light="light",Q.alert="alert",Q.affirmative="affirmative",Q.negative="negative";const R=i({},N);var T,U,V,W,X,Y,Z,_;(U=T||(T={})).top="top",U.left="left",U.bottom="bottom",U.right="right",(W=V||(V={})).left="left",W.right="right",(Y=X||(X={})).top="top",Y.bottom="bottom",(_=Z||(Z={})).start="start",_.center="center",_.end="end";const tt=i({},T),et=i({},V),at=i({},X),st={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12"},rt=i(i({},st),p(st));var ot,nt;(nt=ot||(ot={})).floated="floated",nt.raised="raised";const it=i({},ot);var lt,ct;(ct=lt||(lt={})).x="x",ct.y="y";const pt=i({},lt);var ut,vt;(vt=ut||(ut={})).pill="pill",vt.rounded="rounded";const mt=i({},ut);var ht,dt;(dt=ht||(ht={})).tiny="tiny",dt.small="small",dt.medium="medium",dt.large="large",dt.huge="huge";const gt=i({},ht),bt={auto:"auto","content-fit":"content-fit","content-max":"content-max","content-min":"content-min",prose:"prose",stretch:"stretch",25:"25","viewport-25":"viewport-25",33:"33","viewport-33":"viewport-33",50:"50","viewport-50":"viewport-50",66:"66","viewport-66":"viewport-66",75:"75","viewport-75":"viewport-75",100:"100","viewport-100":"viewport-100"};var ft,wt;(wt=ft||(ft={})).tiny="tiny",wt.small="small",wt.medium="medium",wt.large="large",wt.huge="huge";const yt=i(i({},bt),p(bt)),jt=i(i({},ft),p(ft));var Ot,kt;(kt=Ot||(Ot={})).none="none",kt.auto="auto",kt.tiny="tiny",kt.small="small",kt.medium="medium",kt.large="large",kt.huge="huge";const zt=i(i({},Ot),p(Ot)),xt=i({},Ot);var Pt,Et,$t,It,St,qt;(Et=Pt||(Pt={})).center="center",Et.justify="justify",Et.left="left",Et.right="right",(It=$t||($t={})).capitalize="capitalize",It.lowercase="lowercase",It.uppercase="uppercase",(St||(St={})).truncate="truncate",(qt||(qt={})).headline="headline";const At=i({},Pt),Bt=i({},$t),Ct=i({},St),Dt=i({},qt);var Ft,Gt,Ht,Jt,Kt;(Gt=Ft||(Ft={})).block="block",Gt.clear="clear",Gt.flush="flush",Gt.outline="outline",(Ht||(Ht={})).wrap="wrap",(Kt=Jt||(Jt={})).borders="borders",Kt.stripes="stripes";const Lt=i({},Ft),Mt=i({},Ht),Nt=i({},Jt);export{qt as $,z as A,X as B,Z as C,u as D,tt as E,et as F,at as G,st as H,rt as I,ot as J,it as K,lt as L,pt as M,ut as N,mt as O,ht as P,gt as Q,bt as R,ft as S,yt as T,jt as U,Ot as V,zt as W,xt as X,Pt as Y,$t as Z,St as _,m as a,At as a0,Bt as a1,Ct as a2,Dt as a3,Ft as a4,Ht as a5,Jt as a6,Lt as a7,Mt as a8,Nt as a9,t as aa,c as ab,p as ac,d as b,b as c,f as d,w as e,y as f,j as g,O as h,k as i,P as j,E as k,I as l,S as m,A as n,B as o,D as p,F as q,H as r,J as s,K as t,L as u,M as v,N as w,R as x,T as y,V as z};
