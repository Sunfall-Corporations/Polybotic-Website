import{d as N,O as S,p as T,M as V,N as A,r as B,c as I,e as t,h as o,w as l,t as a,y as i,P as K,m as P,U,j as q}from"./lq8UTrXd.js";import{_ as z,a as D}from"./xNYHI7Vl.js";import{_ as E}from"./BZpthdwG.js";import M from"./DyNclmul.js";import O from"./CZYBeemz.js";import{K as g,V as Q}from"./Ce7JBwSC.js";import{u as j}from"./LzhdYxV1.js";import{q as F}from"./DYTR6t_o.js";import{u as H}from"./CvPflDAZ.js";import{u as G}from"./7m0texM1.js";import{d as J}from"./Dhw2-6Z-.js";import{_ as W}from"./DlAUqK2U.js";import"./BPiEYADn.js";import"./CuTbAs8P.js";import"./CC_HpPV3.js";import"./B8VbKaBQ.js";import"./CLdyoHqz.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./BeffDU0J.js";import"./CzWue09X.js";const X={class:"selection:bg-white/60 selection:text-zinc-800"},Y={class:"text-sm font-extralight"},Z={class:"writing prose mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"},tt={class:"info-section mt-1 flex flex-col gap-2 sm:flex-row sm:gap-4"},ot=N({__name:"[...slug]",async setup(et){let r,m;const{t:c,locale:x}=S(),p=T(),{data:e}=([r,m]=V(()=>j(`${p.path}`,()=>F(p.path).findOne())),r=await r,m(),r);if(!e.value)throw A({statusCode:404,statusMessage:"Page not found"});H(e.value);const h=P(),w=B(`${h.public.siteUrl}${e.value._path}`),{copy:u}=G({source:w.value});function b(){u(),g.success(c("global.article_link_copied"))}return J({meta_k:{usingInput:!0,handler:()=>{u(),g.success(c("global.article_link_copied"))}}}),(n,s)=>{var _,d,f;const v=U,y=z,C=E,k=M,$=O,L=D;return q(),I("div",X,[t("div",null,[o(v,{to:"/writing",class:"mx-auto my-8 flex cursor-pointer items-center gap-2 px-4 text-muted transition-colors duration-200 hover:text-main sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"},{default:l(()=>[s[0]||(s[0]=t("span",{class:"i-lucide-arrow-left size-4"},null,-1)),t("span",Y,a(n.$t("navigation.writing")),1)]),_:1}),o(y,{class:"fixed bottom-4 right-4 sm:bottom-4"}),t("article",Z,[t("h1",null,a((_=i(e))==null?void 0:_.title),1),t("div",tt,[t("p",null,a((d=i(e))==null?void 0:d.date),1),s[1]||(s[1]=t("p",{class:"hidden sm:block"}," | ",-1)),t("p",null,a((f=i(e))==null?void 0:f.readingTime)+" "+a(n.$t("writing.readingTime")),1),s[2]||(s[2]=t("p",{class:"hidden sm:block"}," | ",-1)),o(C,{text:n.$t("writing.copy_link"),shortcuts:["⌘","K"]},{default:l(()=>[t("p",{class:"flex cursor-pointer select-none items-center gap-1 transition-colors duration-200 hover:text-main",onClick:b},a(n.$t("writing.share")),1)]),_:1},8,["text"])]),o($,{path:(n._.provides[K]||n.$route).path,locale:i(x),find:"one"},{default:l(({data:R})=>[o(k,{value:R},null,8,["value"])]),_:1},8,["path","locale"])]),o(L,{class:"pt-6"}),o(i(Q),{"close-button":""})])])}}}),kt=W(ot,[["__scopeId","data-v-cb85bb81"]]);export{kt as default};
