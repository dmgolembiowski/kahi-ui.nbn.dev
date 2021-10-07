var e=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(r,o,s)=>o in r?e(r,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[o]=s,c=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&i(e,o,r[o]);if(s)for(var o of s(r))a.call(r,o)&&i(e,o,r[o]);return e},d=(e,s)=>r(e,o(s));import"./snippet-4e36d5f7.js";import{a9 as f,Y as n,aa as h,ab as l}from"./vendor-e985c1e8.js";import{i as p,a as u}from"./url-b5fabed9.js";function m(e,r={}){const{base:o="",default_no_scroll:s=!1,default_prefetch:t=!1,default_title:a="",title_map:i={}}=r;return e.map((e=>{var f;if(function(e){return"object"==typeof e&&"href"in e}(e)){const{href:r,text:n}=e;let{is_external:h=!1,no_scroll:l=s,prefetch:m=t}=e;return h||(h=p(r)),d(c({},e),{is_external:h,href:h?r:u(o,r),no_scroll:h?void 0:l||void 0,prefetch:h?void 0:m||void 0,text:null!=(f=null!=n?n:i[r])?f:a})}if(function(e){return"object"==typeof e&&"items"in e&&"separator"in e}(e)&&e.items.length>0){const{items:o,separator:s}=e;return d(c({},e),{items:m(o,r),separator:null!=s?s:a})}if(function(e){return"object"==typeof e&&"text"in e}(e)){const{text:r}=e;return d(c({},e),{text:null!=r?r:a})}return c({},e)}))}var b=function(e={}){const{application:r=[],documentation:o=[]}=e;return{application:r,documentation:o}}({application:[{href:"/docs/framework/getting-started",text:"Documentation",icon:f},{href:"https://github.com/novacbn/kahi-ui",text:"Source",icon:n},{href:"https://github.com/novacbn/kahi-ui/releases",text:"Releases",icon:h},{href:"/chat",text:"Chat",icon:l}],documentation:[{separator:"Resources",items:[{href:"/docs/resources/official"},{href:"/docs/resources/community"}]},{separator:"Framework",items:[{href:"/docs/framework/getting-started"},{href:"/docs/framework/faq"},{href:"/docs/framework/browser-support"},{href:"/docs/framework/responsivity"},{href:"/docs/framework/events"}]},{separator:"Typography",items:[{href:"/docs/typography/blockquote"},{href:"/docs/typography/code"},{href:"/docs/typography/heading"},{href:"/docs/typography/text"}]},{separator:"Embedded",items:[{href:"/docs/embedded/figure"}]},{separator:"Display",items:[{href:"/docs/display/badge",badge:"UPDATED"},{href:"/docs/display/list"},{href:"/docs/display/table"}]},{separator:"Disclosure",items:[{href:"/docs/disclosure/tab"}]},{separator:"Feedback",items:[{href:"/docs/feedback/dot",badge:"UPDATED"},{href:"/docs/feedback/ellipsis"},{href:"/docs/feedback/progress"},{href:"/docs/feedback/spinner"},{href:"/docs/feedback/wave"}]},{separator:"Interactables",items:[{href:"/docs/interactables/button"},{href:"/docs/interactables/check"},{href:"/docs/interactables/form"},{href:"/docs/interactables/radio"},{href:"/docs/interactables/switch"},{href:"/docs/interactables/textinput"}]},{separator:"Layouts",items:[{href:"/docs/layouts/center",badge:"NEW"},{href:"/docs/layouts/container"},{href:"/docs/layouts/divider"},{href:"/docs/layouts/grid"},{href:"/docs/layouts/group"},{href:"/docs/layouts/mosaic"},{href:"/docs/layouts/position",badge:"NEW"},{href:"/docs/layouts/scrollable"},{href:"/docs/layouts/spacer"},{href:"/docs/layouts/stack"}]},{separator:"Surfaces",items:[{href:"/docs/surfaces/box"},{href:"/docs/surfaces/card"},{href:"/docs/surfaces/hero"},{href:"/docs/surfaces/tile"}]},{separator:"Navigation",items:[{href:"/docs/navigation/anchor"},{href:"/docs/navigation/aside"},{href:"/docs/navigation/breadcrumb"},{href:"/docs/navigation/menu"},{href:"/docs/navigation/omni"}]},{separator:"Overlays",items:[{href:"/docs/overlays/popover"},{href:"/docs/overlays/offscreen"},{href:"/docs/overlays/overlay"}]},{separator:"Utilities",items:[{href:"/docs/utilities/browserrender"},{href:"/docs/utilities/contextbackdrop"},{href:"/docs/utilities/contextbutton"},{href:"/docs/utilities/intersectionrender"},{href:"/docs/utilities/portal"},{href:"/docs/utilities/serverrender"},{href:"/docs/utilities/transition",badge:"UPDATED"}]},{separator:"Modifiers",items:[{href:"/docs/modifiers/html5"},{href:"/docs/modifiers/hidden"},{href:"/docs/modifiers/sizings"},{href:"/docs/modifiers/spacings"}]},{separator:"Actions",items:[{href:"/docs/actions/click_outside"},{href:"/docs/actions/keybind"},{href:"/docs/actions/intersection_observer"},{href:"/docs/actions/mutation_observer"}]},{separator:"Stores",items:[{href:"/docs/stores/darkmode"},{href:"/docs/stores/htmlpalette"},{href:"/docs/stores/mediaquery"},{href:"/docs/stores/prefersscheme"},{href:"/docs/stores/scrolllock"},{href:"/docs/stores/viewport"}]}]});export{b as N,m};
