import{ab as e,af as t,C as n}from"./vendor-e28ff09b.js";function r(e,t=0){let n;return(...r)=>{n&&(n(),n=null),n=function(e,t=0){const n=setTimeout((()=>e()),t);return()=>clearTimeout(n)}((()=>e(...r)),t)}}function i(i){if("undefined"==typeof window)return e(null);const{debounce:o=250,index_name:a,minimum_length:s=3}=i,d=window.stork;if(!d)throw new ReferenceError("bad dispatch to 'search' (Stork namespace not found)");const c=n(null),{set:l,subscribe:u}=c,w=r((e=>{if(e&&e.length>=s){const t=d.search(a,e);l(t)}else l(null)}),o);return{set:w,subscribe:u,update(e){const n=e(t(c));w(n)}}}const o=new Map;async function a(e){const{script_url:t,wasm_url:n}=e;let r=window.stork;if(t)if(r)console.warn("[svelte-stork] Stork Search library was previously mounted and initialized, skipping...");else try{await function(e,t){if(o.has(e))return o.get("id");const{head:n}=document,r=new Promise(((r,i)=>{const o=document.createElement("script"),a=(({id:e})=>`svst-${e}`)({id:e});o.setAttribute("async","true"),o.setAttribute("id",a),o.setAttribute("src",t),o.setAttribute("type","application/javascript"),o.addEventListener("error",(()=>i())),o.addEventListener("load",(()=>r())),n.appendChild(o)}));return o.set(e,r),r}("stork-search",t),r=window.stork}catch(i){throw new ReferenceError("bad dispatch to 'initialize' (failed to mount and initialize Stork Search library)")}if(!r)throw new ReferenceError("bad dispatch to 'initialize' (Stork namespace not found)");try{await r.initialize(n)}catch(i){throw new Error("bad option 'IInitializeOptions.wasm_url' to 'initialize' (failed to download and initialize Stork WASM blob)")}}async function s(e){const{index_name:t,index_url:n,overwrite:r=!1}=e,i=window.stork;if(!i)throw new ReferenceError("bad dispatch to 'register' (Stork namespace not found)");try{await i.downloadIndex(t,n,{forceOverwrite:r})}catch(o){throw new Error("bad option 'IRegisterOptions.index_url' to 'register' (failed to download and register search index)")}}export{a as initialize,s as register,i as search};
