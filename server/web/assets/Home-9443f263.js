import{E as g}from"./el-select-0287147d.js";import{a as h}from"./api-379b948a.js";import{d as f}from"./dayjs.min-5433e12a.js";import{d as v,r as s,c as n,b as a,F as d,e as b,u as r,i as y,o as c,t as l,_ as C}from"./index-f6b500e3.js";const N={class:"list"},k={class:"text-[#cdcccc] mr-5"},x=["onClick"],D={class:"date"},Y={class:"clear-both overflow-hidden py-2"},$=v({__name:"Home",setup(B){const _=s([]),o=s(1),i=s(1),u=async()=>{const e=await h({parentName:"博客文章",categoryName:"技术",page:o.value,limit:10});_.value=e.list,o.value=Number(e.currentPage),i.value=Number(e.totalItems)};u();const p=e=>{console.log(`当前页: ${e}`),o.value=e,u()};return(e,E)=>{const m=g;return c(),n(d,null,[a("ul",N,[(c(!0),n(d,null,b(r(_),t=>(c(),n("li",{key:t._id},[a("b",k,"No."+l(t.serialNumber),1),a("h3",{onClick:H=>e.$router.push(`./detail/${t._id}`)},l(t.title),9,x),a("div",D,l(r(f)(t.date).format("YYYY-MM-DD")),1)]))),128))]),a("div",Y,[y(m,{class:"float-right",background:"",layout:"prev, pager, next",onCurrentChange:p,total:r(i)},null,8,["total"])])],64)}}});const M=C($,[["__scopeId","data-v-b8104784"]]);export{M as default};