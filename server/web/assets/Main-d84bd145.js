import{b as p}from"./api-0b26dce1.js";import{d as _,r as u,a as d,c as n,b as e,F as h,e as m,u as v,f,g,o,n as k,t as y,p as $,h as C,_ as b}from"./index-3b0451fd.js";const l=a=>($("data-v-36093298"),a=a(),C(),a),x={class:"wrap flex"},M={class:"content"},S={class:"menu"},w=["onClick"],I=l(()=>e("header",{class:"header"},[e("div",{class:"content"},[e("div",{class:"solgen"},"乘风破浪 激流勇进")])],-1)),B={class:"main"},N={class:"container"},z={key:0,class:"p-[10px] text-[14px]"},F=l(()=>e("footer",{class:"flex p-[20px]"},[e("div",{class:"copyright"},[e("p",null,"make by expressjs"),e("span",null,[e("a",{href:"http://beian.miit.gov.cn/",target:"_blank"},"粤ICP备14062482号")])])],-1)),T=_({__name:"Main",setup(a){const r=u([]);return(async()=>{try{const s=await p({parentName:"博客文章"});r.value=s,localStorage.menu=JSON.stringify(s)}catch(s){console.error(s.message)}})(),(s,c)=>{const i=d("router-view");return o(),n("section",x,[e("nav",null,[e("div",M,[e("div",{class:"logo",onClick:c[0]||(c[0]=t=>s.$router.push("/"))},"Tuziki的个人记录"),e("ul",S,[(o(!0),n(h,null,m(v(r),t=>(o(),n("li",{key:t._id,class:k({current:`/${t.typeUrl}`===s.$route.path}),onClick:V=>s.$router.push(`/${t.typeUrl}`)},y(t.name),11,w))),128))])])]),I,e("div",B,[e("div",N,[s.$route.path==="/"?(o(),n("div",z," 你好！欢迎来Tuziki ! ")):f("",!0),(o(),g(i,{key:s.$route.path}))])]),F])}}});const E=b(T,[["__scopeId","data-v-36093298"]]);export{E as default};
