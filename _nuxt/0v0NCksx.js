const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CM9y0Dul.js","./CeaDeM8i.js","./entry.BcYi-H6B.css","./fs4CwKpd.js","./D0uhzcld.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{m as v,ay as c,_ as f,d as g,az as d,B as l,l as _,ai as h,G as r,R as C}from"./CeaDeM8i.js";import{u as y}from"./D-dxumu5.js";import{q as w,w as m,e as N,s as $,j as P,u as j}from"./fs4CwKpd.js";import{u as T}from"./D0uhzcld.js";const D=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=w(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${c(a)}.${t.integrity}`}/${N(a)}.json`):m(`/navigation/${c(a)}.${t.integrity}.json`);if($())return(await f(()=>import("./CM9y0Dul.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:P(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await y(`content-navigation-${c(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=h(),{navigation:a}=e,s=o=>r(C,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),b=E,Q=Object.assign(b,{__name:"ContentNavigation"});export{Q as default};