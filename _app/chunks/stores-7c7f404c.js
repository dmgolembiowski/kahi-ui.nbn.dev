import{C as o,y as n,aH as i}from"./vendor-326671fa.js";function a(e){return{init(r){const t=o(r);return n(e,{subscribe:t.subscribe}),t},subscribe(r,t){const s=i(e);if(!s)throw ReferenceError(`bad dispatch to 'subscribe' (failed to lookup context '${e.toString()}')`);return s.subscribe(r,t)}}}export{a as m};
