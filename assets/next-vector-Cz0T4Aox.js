import{r as t,M as r,j as l}from"./index-CjbSPF6V.js";function E(){const[o,s]=t.useState(0),[n,g]=t.useState(0);return{setPage:s,prevPage:()=>{s(e=>Math.max(e-1,0))},nextPage:()=>{s(e=>Math.min(e+1,n-1))},PaginationDiv:({children:e,containerStyle:c={},slideStyle:d={},...p})=>{const u=r.Children.count(e);t.useEffect(()=>{g(u)},[u]),t.useEffect(()=>{o>=n&&n>0&&s(n-1)},[n]);const i=t.useRef(null),[a,f]=t.useState(null);t.useEffect(()=>{i.current&&f(i.current.offsetHeight)},[e]);const v={position:"relative",width:"100%",height:c.height||(a?`${a}px`:"auto"),...c};return l.jsxs("div",{style:v,...p,children:[a===null&&r.Children.count(e)>0&&l.jsx("div",{ref:i,style:{visibility:"hidden",position:"static"},children:r.Children.toArray(e)[0]}),r.Children.map(e,(x,h)=>{const w={display:h===o?"block":"none",width:"100%",height:"100%",position:"absolute",top:0,left:0,...d};return l.jsx("div",{style:w,children:x},h)})]})},page:o,totalPages:n}}const L=o=>t.createElement("svg",{width:10,height:17,viewBox:"0 0 10 17",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...o},t.createElement("path",{d:"M8.5 1.52344L1.5 8.52344L8.5 15.5234",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),j=o=>t.createElement("svg",{width:10,height:17,viewBox:"0 0 10 17",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...o},t.createElement("path",{d:"M1.5 15.5234L8.5 8.52344L1.5 1.52344",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));export{L as S,j as a,E as u};
