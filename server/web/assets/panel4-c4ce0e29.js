import{d as N,r as O,c as V,b,o as X}from"./index-f6b500e3.js";const z={class:"w-full relative p-[10px]"},K=N({__name:"panel4",setup(G){const t=O(null);let a=null;const Y=async s=>{const o=s.target.files,e=Array.from(o).map(r=>new Promise((d,y)=>{const f=new FileReader;f.onload=M=>{const I=new Image;I.onload=()=>d(I),I.onerror=q=>y(q),I.src=M.target.result},f.onerror=M=>y(M),f.readAsDataURL(r)}));t.value&&(a=t.value.getContext("2d"));const n=500;let c=0;for(const r of await Promise.all(e))c+=r.height*(n/r.width);t.value.width=n,t.value.height=c;let v=0;for(const r of await Promise.all(e)){const d=r.height*(n/r.width);a.drawImage(r,0,v,n,d),v+=d}P(),B(),k()};let u=!1,g=null,_=!0,l={x1:0,y1:100,x2:500,y2:100},p,C,D=0,m=0,w,x,h=0,i=200;const B=()=>{a.beginPath(),a.moveTo(l.x1,l.y1),a.lineTo(l.x2,l.y2),a.stroke()},L=(s,o)=>{const e=(r,d,y,f)=>Math.sqrt((y-r)**2+(f-d)**2),n=e(l.x1,l.y1,l.x2,l.y2),c=e(s,o,l.x1,l.y1),v=e(s,o,l.x2,l.y2);return n>=c+v-5&&n<=c+v+5},k=()=>{t.value.addEventListener("mousedown",s=>{const o=t.value.getBoundingClientRect(),e=s.clientX-o.left,n=s.clientY-o.top;L(e,n)&&(u=!0,p={x:e,y:n})}),t.value.addEventListener("mousemove",s=>{if(u){const o=t.value.getBoundingClientRect(),e=s.clientY-o.top,n=e-p.y;E(),l.y1+=n,l.y2+=n,i=e,p={x:p.x,y:e},B()}}),t.value.addEventListener("mouseup",()=>{u=!1})},P=()=>{C=a.getImageData(0,0,t.value.width,t.value.height)},E=()=>{a.putImageData(C,0,0)},S=()=>{!t.value||!a||(C=a.getImageData(0,0,t.value.width,t.value.height),w=a.getImageData(0,0,t.value.width,i),x=a.getImageData(0,i,t.value.width,t.value.height-i),h=i,R())},R=()=>{a&&(a.clearRect(0,0,t.value.width,t.value.height),w&&a.putImageData(w,0,m),x&&a.putImageData(x,0,h))},A=()=>{S()},F=s=>{var n,c;const o=(n=t.value)==null?void 0:n.getBoundingClientRect(),e=s.clientY-((o==null?void 0:o.top)??0);_||(e>=m&&e<=m+i?(u=!0,g="top",D=e-m):e>=h&&e<=((c=t.value)==null?void 0:c.height)&&(u=!0,g="bottom",D=e-h))},H=s=>{var o;if(u&&g&&a){const e=(o=t.value)==null?void 0:o.getBoundingClientRect(),n=s.clientY-((e==null?void 0:e.top)??0)-D;g==="top"?m=Math.max(0,Math.min(n,i)):g==="bottom"&&(h=Math.max(i,Math.min(n,500-i))),w=a.getImageData(0,0,500,i),x=a.getImageData(0,i,500,500-i),R()}},T=()=>{_=!1},U=()=>{u=!1,g=null};return(s,o)=>(X(),V("div",z,[b("button",{class:"border p-[20px] mb-5",id:"splitButton",onClick:A}," 切割图像 "),b("button",{class:"border p-[20px] mb-5 mx-2",id:"splitButton",onClick:T}," 确定裁剪并保存图像 "),b("input",{class:"",type:"file",multiple:"",onChange:Y},null,32),b("canvas",{class:"border",ref_key:"canvasRef",ref:t,onMousedown:F,onMousemove:H,onMouseup:U,width:"500",height:"500"},null,544)]))}});export{K as default};