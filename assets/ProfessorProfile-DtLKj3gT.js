import{r as l,u as L,j as e,n as U,T as c,p as f,v as W,A as b}from"./index-Bg4uQE68.js";const z="_background_12ukd_1",D="_container_12ukd_5",M="_contentContainer_12ukd_15",S="_title_12ukd_21",F="_content_12ukd_15",O="_profileContent_12ukd_34",A="_subTitle_12ukd_48",q="_profileWrapper_12ukd_53",G="_profileImageContainer_12ukd_59",H="_profileImage_12ukd_59",J="_profileInput_12ukd_89",K="_profileButtonContainer_12ukd_93",Q="_text_12ukd_98",V="_accountContentText_12ukd_113",X="_subDescription_12ukd_119",t={background:z,container:D,contentContainer:M,title:S,content:F,profileContent:O,subTitle:A,profileWrapper:q,profileImageContainer:G,profileImage:H,profileInput:J,profileButtonContainer:K,text:Q,accountContentText:V,subDescription:X},w=({onEdit:s,onCancel:i})=>e.jsxs(e.Fragment,{children:[e.jsx(c,{color:"white",size:"web3",width:"91px",height:"53px",text:"확인",onClick:s}),e.jsx(c,{color:"gray",size:"web3",width:"91px",height:"53px",text:"취소",onClick:i})]}),Z=()=>{const[s,i]=l.useState({profileImage:null,name:""}),[a,p]=l.useState({profileImage:!1,name:!1}),[v,m]=l.useState(null),d=l.useRef(null),x=l.useRef(""),g=l.useRef(""),j=l.useRef(null),{openModal:C,closeModal:R,setModal:h,popupError:u}=L();l.useEffect(()=>{async function n(){try{const o=await f.getProfessor();let r=null;o.profileURL&&o.profileURL!==""&&(r=new Image,r.src=o.profileURL,d.current=r),i({profileImage:r,name:o.name}),x.current=o.name,g.current=o.email}catch(o){u(o)}}n()},[]),l.useEffect(()=>()=>{var n;(n=s.profileImage)!=null&&n.src.startsWith("blob:")&&URL.revokeObjectURL(s.profileImage.src)},[s.profileImage]);const T=async()=>{try{const n=await f.updateProfessorProfile(v);if(n!==""){const o=new Image;o.src=n,d.current=o}else d.current=null;m(null),i({...s,profileImage:d.current}),p({...a,profileImage:!1})}catch(n){u(n)}},y=async()=>{try{const n=await f.updateProfessorName(s.name);x.current=n,i({...s,name:x.current}),p({...a,name:!1})}catch(n){u(n)}},P=n=>{var o;try{const r=n.target.files;if(r&&r[0]){W(r[0]),(o=s.profileImage)!=null&&o.src.startsWith("blob:")&&URL.revokeObjectURL(s.profileImage.src);const k=r[0],N=new Image;N.src=URL.createObjectURL(k),i({...s,profileImage:N}),m(k),n.target.value=""}}catch(r){u(r)}},_=n=>{n==="profile"?(p({...a,profileImage:!1}),i({...s,profileImage:d.current}),m(null)):n==="name"&&(p({...a,name:!1}),i({...s,name:x.current}))},I=()=>{R(),h(null)},B=()=>{h(e.jsx(b,{type:"ask",message:"정말 로그아웃하시겠습니까?",description:"언제든지 다시 로그인 할 수 있습니다. 로그아웃 하시겠습니까?",buttonText:"로그아웃 하기",onClickModalButton:async()=>{try{await f.logout()}catch(n){u(n)}},onClickCloseButton:I})),C()},E=()=>{h(e.jsx(b,{type:"caution",message:"정말 탈퇴하시겠습니까?",description:"모든 데이터가 삭제되며 취소할 수 없습니다. 정말 탈퇴하시겠습니까?",buttonText:"회원탈퇴하기",onClickModalButton:async()=>{try{await f.deleteProfessor()}catch(n){u(n)}},onClickCloseButton:I})),C()};return e.jsx("div",{className:t.background,children:e.jsxs("div",{className:t.container,children:[e.jsxs("div",{className:t.contentContainer,children:[e.jsx("h2",{className:t.title,children:"계정 정보"}),e.jsxs("div",{className:t.content,children:[e.jsxs("div",{className:t.profileContent,children:[e.jsx("h3",{className:t.subTitle,children:"프로필 사진"}),e.jsxs("div",{className:t.profileWrapper,children:[e.jsxs("div",{className:t.profileImageContainer,children:[e.jsx("div",{className:t.profileImage,children:s.profileImage&&s.profileImage.src!==""?e.jsx("img",{src:s.profileImage.src,alt:"profile"}):e.jsx(U,{})}),a.profileImage&&e.jsxs(e.Fragment,{children:[e.jsx("input",{className:t.profileInput,type:"file",accept:"image/*",ref:j,onChange:P}),e.jsx(c,{color:"white",size:"web3",width:"182px",height:"53px",text:"다시 고르기",onClick:n=>{var o;n.preventDefault(),(o=j.current)==null||o.click()}}),e.jsx(c,{color:"red",size:"web3",width:"93px",height:"53px",text:"삭제",onClick:()=>{i({...s,profileImage:null}),m(null)}})]})]}),e.jsx("div",{className:t.profileButtonContainer,children:a.profileImage?w({onEdit:()=>T(),onCancel:()=>_("profile")}):e.jsx(c,{color:"white",size:"web3",width:"91px",height:"53px",text:"수정",onClick:()=>p({...a,profileImage:!0})})})]})]}),e.jsxs("div",{className:t.profileContent,children:[e.jsx("h3",{className:t.subTitle,children:"사용자 이름"}),e.jsxs("div",{className:t.profileWrapper,children:[a.name?e.jsx("input",{className:t.text,type:"text",value:s.name,onChange:n=>i({...s,name:n.target.value})}):e.jsx("span",{className:t.text,children:s.name}),e.jsx("div",{className:t.profileButtonContainer,children:a.name?w({onEdit:()=>y(),onCancel:()=>_("name")}):e.jsx(c,{color:"white",size:"web3",width:"91px",height:"53px",text:"수정",onClick:()=>p({...a,name:!0})})})]})]}),e.jsxs("div",{className:t.profileContent,children:[e.jsx("h3",{className:t.subTitle,children:"이메일 주소"}),e.jsx("span",{className:t.text,children:g.current})]})]})]}),e.jsxs("div",{className:t.contentContainer,children:[e.jsx("h2",{className:t.title,children:"계정 관리"}),e.jsxs("div",{className:t.content,children:[e.jsx("div",{className:t.profileContent,children:e.jsxs("div",{className:t.profileWrapper,children:[e.jsxs("div",{className:t.accountContentText,children:[e.jsx("h3",{className:t.subTitle,children:"로그아웃"}),e.jsx("span",{className:t.subDescription,children:"언제든지 다시 이메일로 로그인 할 수 있습니다"})]}),e.jsx(c,{color:"white",size:"web3",width:"185px",height:"53px",text:"로그아웃",onClick:B})]})}),e.jsx("div",{className:t.profileContent,children:e.jsxs("div",{className:t.profileWrapper,children:[e.jsxs("div",{className:t.accountContentText,children:[e.jsx("h3",{className:t.subTitle,children:"회원탈퇴"}),e.jsx("span",{className:t.subDescription,children:"탈퇴시 모든 데이터가 삭제되며 취소할 수 없습니다"})]}),e.jsx(c,{color:"red",size:"web3",width:"185px",height:"53px",text:"회원탈퇴",onClick:E})]})})]})]})]})})};export{Z as default};
