import{_ as D}from"./B1ifdru-.js";import{_ as I}from"./C4HzSrHK.js";import{d as l,r as x,o as M,j as S,c as b,h as i,w as m,n as E,y as d,u as V,z as F,P as C,p as P,A as K,B as Q,C as _,a as T,D as Y,E as q,G as h,H as J,I as X,S as G,T as W,J as Z,L as tt,e as y,K as k,M as et,N as ot,s as w,O as nt,Q as at,R as st,m as rt}from"./lq8UTrXd.js";import it from"./DyNclmul.js";import lt from"./CZYBeemz.js";import{K as ut,V as ct}from"./Ce7JBwSC.js";import{u as pt}from"./LzhdYxV1.js";import{u as dt}from"./7m0texM1.js";import{q as mt}from"./DYTR6t_o.js";import{u as ft}from"./CvPflDAZ.js";import{d as gt}from"./Dhw2-6Z-.js";import"./CTfGImWg.js";import"./DlAUqK2U.js";import"./CLdyoHqz.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./BeffDU0J.js";import"./CzWue09X.js";const yt={class:"fixed bottom-36 right-3 z-50 sm:bottom-20"},_t=l({__name:"ScrollToTop",setup(t){const e=x(!1);M(()=>{window.addEventListener("scroll",()=>{e.value=window.scrollY>0})});function o(){window.scrollTo({top:0,behavior:"smooth"})}return(n,a)=>{const s=D,c=I;return S(),b("div",yt,[i(c,{"aria-label":"scroll to top button",class:E(["flex size-10 items-center justify-center p-1 text-muted transition-all duration-200 hover:text-main",{"opacity-100":d(e),"opacity-0":!d(e)}]),rounded:"",onClick:o},{default:m(()=>[i(s,{name:"heroicons-arrow-up",class:"z-20 size-6"})]),_:1},8,["class"])])}}}),ht=Object.assign(_t,{__name:"LayoutScrollToTop"}),St=l({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>h(_[t.name],t.layoutProps,e.slots)}}),bt=l({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const o=V(),n=F(C),a=n===P()?K():n,s=Q(()=>{let r=d(t.name)??a.meta.layout??"default";return r&&!(r in _)&&t.fallback&&(r=d(t.fallback)),r}),c=x();e.expose({layoutRef:c});const u=o.deferHydration();if(o.isHydrating){const r=o.hooks.hookOnce("app:error",u);T().beforeEach(r)}return()=>{const r=s.value&&s.value in _,f=a.meta.layoutTransition??Y;return q(W,r&&f,{default:()=>h(G,{suspensible:!0,onResolve:()=>{X(u)}},{default:()=>h(vt,{layoutProps:J(e.attrs,{ref:c}),key:s.value||void 0,name:s.value,shouldProvide:!t.name,hasTransition:!!f},e.slots)})}).default()}}}),vt=l({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const o=t.name;return t.shouldProvide&&Z(tt,{isCurrent:n=>o===(n.meta.layout??"default")}),()=>{var n,a;return!o||typeof o=="string"&&!(o in _)?(a=(n=e.slots).default)==null?void 0:a.call(n):h(St,{key:o,layoutProps:t.layoutProps,name:o},e.slots)}}}),wt=["width","height","x","y"],xt=["cx","cy","r"],Ct=l({__name:"DotPattern",props:{size:{type:Number,default:16},radius:{type:Number,default:1},offsetX:{type:Number,default:0},offsetY:{type:Number,default:0}},setup(t){return(e,o)=>(S(),b("svg",null,[y("defs",null,[y("pattern",{id:"dot-pattern",width:t.size,height:t.size,patternUnits:"userSpaceOnUse",patternContentUnits:"userSpaceOnUse",x:t.offsetX,y:t.offsetY},[y("circle",{cx:t.size/2,cy:t.size/2,r:t.radius},null,8,xt)],8,wt)]),o[0]||(o[0]=y("rect",{width:"100%",height:"100%","stroke-width":"0",fill:"url(#dot-pattern)"},null,-1))]))}}),Pt=Object.assign(Ct,{__name:"DotPattern"}),Tt=t=>{const e=Object.create(null);for(const o in t){const n=t[o];n!==void 0&&(e[o]=n)}return e},z=(t,e)=>(o,n)=>(k(()=>t({...Tt(o),...n.attrs},n)),()=>{var a,s;return e?(s=(a=n.slots).default)==null?void 0:s.call(a):null}),B={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:[String,Object,Array],tabindex:String,title:String,translate:String},kt=l({name:"Html",inheritAttrs:!1,props:{...B,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:z(t=>({htmlAttrs:t}),!0)}),zt=l({name:"Body",inheritAttrs:!1,props:{...B,renderPriority:[String,Number]},setup:z(t=>({bodyAttrs:t}),!0)}),qt=l({__name:"[...slug]",async setup(t){let e,o;const n=P(),a=T(),{data:s}=([e,o]=et(()=>pt(`${n.path}`,()=>mt(n.path).findOne())),e=await e,o(),e);if(!s.value)throw ot({statusCode:404,statusMessage:"Page not found"});ft(s.value);const c=rt(),u=w(),{appName:r,email:f}=w(),{t:g,locale:v}=nt();k({titleTemplate:`%s - ${r}`}),at({description:()=>g("global.app_description"),author:"Hugo Richard",ogImage:"https://canvas.hrcd.fr/social-preview.jpg",ogType:"website",ogTitle:u.appName,ogDescription:()=>g("global.app_description"),ogUrl:()=>c.public.siteUrl,ogLocale:()=>v.value,twitterTitle:u.appName,twitterDescription:()=>g("global.app_description"),twitterCard:"summary_large_image",twitterSite:u.twitterUsername,twitterCreator:u.twitterUsername,twitterImage:"https://canvas.hrcd.fr/social-preview.jpg"});const{copy:L}=dt({source:f});return gt({meta_o:{usingInput:!0,handler:()=>{L(),ut.success(g("global.email_copied"))}}}),st(()=>n.path,p=>{p==="/bot"?a.push("https://discord.com/oauth2/authorize?client_id=1309244360789069948"):p==="/invite"&&a.push("https://discord.gg/AbMuFaCJ7F")}),(p,Bt)=>{const N=ht,j=it,A=lt,O=bt,R=Pt,U=zt,H=kt;return S(),b("div",null,[i(H,{lang:p.$i18n.locale,class:"bg-zinc-950 text-main font-geist transition-colors duration-300 selection:bg-white/60 selection:text-zinc-800"},{default:m(()=>[i(U,null,{default:m(()=>[i(N),i(O,null,{default:m(()=>[i(A,{path:(p._.provides[C]||p.$route).path,locale:d(v),find:"one"},{default:m(({data:$})=>[i(j,{value:$},null,8,["value"])]),_:1},8,["path","locale"])]),_:1}),i(d(ct),{"close-button":""}),i(R,{class:"absolute inset-0 -z-10 size-full fill-white/5 [mask-image:radial-gradient(white,transparent_85%)]"})]),_:1})]),_:1},8,["lang"])])}}});export{qt as default};