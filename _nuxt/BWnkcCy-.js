import d from"./CZYBeemz.js";import{d as c,ai as l,G as n}from"./lq8UTrXd.js";import"./LzhdYxV1.js";import"./DYTR6t_o.js";import"./BeffDU0J.js";const u=(r,t)=>n("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:r,data:t},null,2)),y=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(r){const t=l(),{path:p,query:o}=r,f={...o||{},path:p||(o==null?void 0:o.path)||"/"};return n(d,f,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:m})=>t.default({list:e,refresh:a,isPartial:m,...this.$attrs}):e=>u("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):u("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):u("not-found",e==null?void 0:e.data)}})}}),h=y,O=Object.assign(h,{__name:"ContentList"});export{O as default};