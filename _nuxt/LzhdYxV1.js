import{u as B,aA as d,r as D,aj as O,a1 as M,aB as R,b as E,R as H,ar as g,N as S,y as P,ak as V,aq as j}from"./lq8UTrXd.js";const z=s=>s==="defer"||s===!1;function q(...s){var p;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[t,u,a={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=B(),C=u,w=()=>d.value,b=()=>e.isHydrating?e.payload.data[t]:e.static.data[t];a.server=a.server??!0,a.default=a.default??w,a.getCachedData=a.getCachedData??b,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??d.deep,a.dedupe=a.dedupe??"cancel";const f=a.getCachedData(t,e),_=f!=null;if(!e._asyncData[t]||!a.immediate){(p=e.payload._errors)[t]??(p[t]=d.errorValue);const o=a.deep?D:O;e._asyncData[t]={data:o(_?f:a.default()),pending:D(!_),error:M(e.payload._errors,t),status:D("idle"),_default:a.default}}const r={...e._asyncData[t]};delete r._default,r.refresh=r.execute=(o={})=>{if(e._asyncDataPromises[t]){if(z(o.dedupe??a.dedupe))return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if(o._initial||e.isHydrating&&o._initial!==!1){const c=o._initial?f:a.getCachedData(t,e);if(c!=null)return Promise.resolve(c)}r.pending.value=!0,r.status.value="pending";const l=new Promise((c,i)=>{try{c(C(e))}catch(y){i(y)}}).then(async c=>{if(l.cancelled)return e._asyncDataPromises[t];let i=c;a.transform&&(i=await a.transform(c)),a.pick&&(i=K(i,a.pick)),e.payload.data[t]=i,r.data.value=i,r.error.value=d.errorValue,r.status.value="success"}).catch(c=>{if(l.cancelled)return e._asyncDataPromises[t];r.error.value=S(c),r.data.value=P(a.default()),r.status.value="error"}).finally(()=>{l.cancelled||(r.pending.value=!1,delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=l,e._asyncDataPromises[t]},r.clear=()=>N(e,t);const h=()=>r.refresh({_initial:!0}),m=a.server!==!1&&e.payload.serverRendered;{const o=V();if(o&&m&&a.immediate&&!o.sp&&(o.sp=[]),o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const i=o._nuxtOnBeforeMountCbs;R(()=>{i.forEach(y=>{y()}),i.splice(0,i.length)}),E(()=>i.splice(0,i.length))}m&&e.isHydrating&&(r.error.value||f!=null)?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):o&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?o._nuxtOnBeforeMountCbs.push(h):a.immediate&&h();const l=j();if(a.watch){const i=H(a.watch,()=>r.refresh());l&&g(i)}const c=e.hook("app:data:refresh",async i=>{(!i||i.includes(t))&&await r.refresh()});l&&g(c)}const v=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(v,r),v}function N(s,n){n in s.payload.data&&(s.payload.data[n]=void 0),n in s.payload._errors&&(s.payload._errors[n]=d.errorValue),s._asyncData[n]&&(s._asyncData[n].data.value=P(s._asyncData[n]._default()),s._asyncData[n].error.value=d.errorValue,s._asyncData[n].pending.value=!1,s._asyncData[n].status.value="idle"),n in s._asyncDataPromises&&(s._asyncDataPromises[n]&&(s._asyncDataPromises[n].cancelled=!0),s._asyncDataPromises[n]=void 0)}function K(s,n){const t={};for(const u of n)t[u]=s[u];return t}export{q as u};
