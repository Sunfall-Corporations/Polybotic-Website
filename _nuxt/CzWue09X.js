import{r as b,ap as g,aq as y,ar as T,as as S,y as h,o as v,I as w,ak as P}from"./lq8UTrXd.js";function m(e){return y()?(T(e),!0):!1}function W(e){let n=0,r,t;const i=()=>{n-=1,t&&n<=0&&(t.stop(),r=void 0,t=void 0)};return(...o)=>(n+=1,t||(t=S(!0),r=t.run(()=>e(...o))),m(i),r)}function f(e){return typeof e=="function"?e():h(e)}const j=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const _=e=>e!=null,C=Object.prototype.toString,k=e=>C.call(e)==="[object Object]",p=()=>{};function O(e,n){function r(...t){return new Promise((i,o)=>{Promise.resolve(e(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})).then(i).catch(o)})}return r}function x(e,n={}){let r,t,i=p;const o=s=>{clearTimeout(s),i(),i=p};return s=>{const a=f(e),u=f(n.maxWait);return r&&o(r),a<=0||u!==void 0&&u<=0?(t&&(o(t),t=null),Promise.resolve(s())):new Promise((l,d)=>{i=n.rejectOnCancel?d:l,u&&!t&&(t=setTimeout(()=>{r&&o(r),t=null,l(s())},u)),r=setTimeout(()=>{t&&o(t),t=null,l(s())},a)})}}function G(e){let n;function r(){return n||(n=e()),n}return r.reset=async()=>{const t=n;n=void 0,t&&await t},r}function D(e){return P()}function I(e,n=200,r={}){return O(x(n,r),e)}function M(e,n=!0,r){D()?v(e,r):n?e():w(e)}function q(e,n,r={}){const{immediate:t=!0}=r,i=b(!1);let o=null;function c(){o&&(clearTimeout(o),o=null)}function s(){i.value=!1,c()}function a(...u){c(),i.value=!0,o=setTimeout(()=>{i.value=!1,o=null,e(...u)},f(n))}return t&&(i.value=!0,j&&a()),m(s),{isPending:g(i),start:a,stop:s}}export{q as a,m as b,W as c,j as d,G as e,M as f,_ as g,k as i,p as n,f as t,I as u};