(()=>{var e,t,r,n,o,a,i,s,c={},l={};function u(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={id:e,loaded:!1,exports:{}};return c[e](r,r.exports,u),r.loaded=!0,r.exports}u.m=c,e="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&(e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},o=e=>!--e.r&&e(),a=(e,t)=>e?e.push(t):o(t),u.a=(i,s,c)=>{var l,u,p,d=c&&[],f=i.exports,m=!0,b=!1,h=(t,r,n)=>{b||(b=!0,r.r+=t.length,t.map(((t,o)=>t[e](r,n))),b=!1)},g=new Promise(((e,t)=>{p=t,u=()=>(e(f),n(d),d=0)}));g[t]=f,g[e]=(e,t)=>{if(m)return o(e);l&&h(l,e,t),a(d,e),g.catch(t)},i.exports=g,s((i=>{var s;l=(i=>i.map((i=>{if(null!==i&&"object"==typeof i){if(i[e])return i;if(i.then){var s=[];i.then((e=>{c[t]=e,n(s),s=0}),(e=>{c[r]=e,n(s),s=0}));var c={};return c[e]=(e,t)=>(a(s,e),i.catch(t)),c}}var l={};return l[e]=e=>o(e),l[t]=i,l})))(i);var c=()=>l.map((e=>{if(e[r])throw e[r];return e[t]})),u=new Promise(((e,t)=>{(s=()=>e(c)).r=0,h(l,s,t)}));return s.r?u:c()}),(e=>(e&&p(g[r]=e),u()))),m=!1},u.d=(e,t)=>{for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((t,r)=>(u.f[r](e,t),t)),[])),u.u=e=>e+".index.js",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},s="image-effects:",u.l=(e,t,r,n)=>{if(i[e])i[e].push(t);else{var o,a;if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var p=c[l];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==s+r){o=p;break}}o||(a=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,u.nc&&o.setAttribute("nonce",u.nc),o.setAttribute("data-webpack",s+r),o.src=e),i[e]=[t];var d=(t,r)=>{o.onerror=o.onload=null,clearTimeout(f);var n=i[e];if(delete i[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),a&&document.head.appendChild(o)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.v=(e,t,r,n)=>{var o=fetch(u.p+""+r+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,n).then((t=>Object.assign(e,t.instance.exports))):o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,n))).then((t=>Object.assign(e,t.instance.exports)))},(()=>{var e;u.g.importScripts&&(e=u.g.location+"");var t=u.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e})(),(()=>{var e={179:0};u.f.j=(t,r)=>{var n=u.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=u.p+u.u(t),i=new Error;u.l(a,(r=>{if(u.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,i,s]=r,c=0;if(a.some((t=>0!==e[t]))){for(n in i)u.o(i,n)&&(u.m[n]=i[n]);s&&s(u)}for(t&&t(r);c<a.length;c++)o=a[c],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkimage_effects=self.webpackChunkimage_effects||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(async()=>{let e=null;try{e=await u.e(235).then(u.bind(u,235))}catch(e){return void console.error(e)}const t=document.getElementById("upload"),r=new FileReader;t.addEventListener("change",(n=>{r.readAsDataURL(t.files[0]),r.onloadend=()=>{const t=r.result.replace(/^data:image\/(png|jpeg|jpg);base64,/,"");let n=e.grayscale(t);document.getElementById("new-img").setAttribute("src",n)}}))})()})();