import{r as m,j as e,C as D,o as N,b as L,k as E,T as b,G as P,A as B,d as y,H as W,I as H}from"./index-15zwhHhN.js";import{S as M,a as R}from"./next-vector-D99fAMzB.js";const V=t=>m.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("path",{d:"M20 2.5V37.5M2.5 20H37.5",stroke:"currentColor",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"})),O="_chipContainer_flbnv_1",U="_green_flbnv_13",G="_purple_flbnv_20",K="_gray_flbnv_27",S={chipContainer:O,green:U,purple:G,gray:K},Z=({color:t,text:o,isActive:i})=>{const s=S[t]||"";return e.jsx("div",{className:`${S.chipContainer} ${i?s:""} `,children:o})},q="_buttonContainer_1c1pe_1",J={buttonContainer:q},ne=({onButtonClick:t,type:o,isActive:i})=>e.jsxs("button",{className:`${J.buttonContainer}  `,onClick:t,disabled:!i,children:[o==="prev"&&e.jsx(M,{width:"7px",height:"14px",fill:"none"}),o==="next"&&e.jsx(R,{width:"7px",height:"14px",fill:"none"})]}),Q="_courseModal_daof5_1",X="_closeButton_daof5_14",Y="_closeIcon_daof5_26",tt="_title_daof5_32",et="_modalContent_daof5_39",nt="_inputContainer_daof5_55",st="_inputTitle_daof5_61",ot="_categoryContainer_daof5_72",it="_categoryChip_daof5_80",at="_errorText_daof5_86",lt="_scheduleList_daof5_92",ct="_scheduleContainer_daof5_99",rt="_timeInputContainer_daof5_110",dt="_timeDivider_daof5_120",ut="_deleteButton_daof5_125",pt="_addButton_daof5_129",ht="_buttonContainer_daof5_133",u={courseModal:Q,closeButton:X,closeIcon:Y,title:tt,modalContent:et,inputContainer:nt,inputTitle:st,categoryContainer:ot,categoryChip:it,errorText:at,scheduleList:lt,scheduleContainer:ct,timeInputContainer:rt,timeDivider:dt,deleteButton:ut,addButton:pt,buttonContainer:ht},_t="_inputContainer_1tsfh_1",Ct="_inputTitle_1tsfh_6",mt="_input_1tsfh_1",ft="_full_1tsfh_25",xt="_withDesc_1tsfh_29",jt="_inputDesc_1tsfh_41",j={inputContainer:_t,inputTitle:Ct,input:mt,full:ft,withDesc:xt,inputDesc:jt},g=({size:t="half",title:o,desc:i,placeholder:s,value:r,onInputChange:l,onBlur:a})=>e.jsxs("div",{className:j.inputContainer,children:[e.jsx("div",{className:j.inputTitle,children:o}),e.jsx("input",{className:`${j.input} ${t==="full"&&j.full} ${i&&j.withDesc}`,placeholder:s,value:r,onChange:d=>l(d.target.value),onBlur:a}),t==="half"&&i&&e.jsx("div",{className:j.inputDesc,children:i})]}),vt="_dropDown_ezoy3_1",yt="_dropDownActive_ezoy3_5",gt="_dropDownWrapper_ezoy3_9",wt="_dropDownContainer_ezoy3_27",Dt="_titleContainer_ezoy3_33",Nt="_dropDownTitle_ezoy3_45",bt="_dropDownIcon_ezoy3_49",Bt="_labelContainer_ezoy3_54",kt="_label_ezoy3_54",x={dropDown:vt,dropDownActive:yt,dropDownWrapper:gt,dropDownContainer:wt,titleContainer:Dt,dropDownTitle:Nt,dropDownIcon:bt,labelContainer:Bt,label:kt},It=t=>m.createElement("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("path",{d:"M7 7.66602L0.937822 0.666016L13.0622 0.666015L7 7.66602Z",fill:"#0028FD"})),St=({width:t,title:o,options:i,setTitle:s})=>{const[r,l]=m.useState(!1),a=d=>{l(!1),s(d)};return e.jsx("div",{className:`${x.dropDown} ${r?x.dropDownActive:""}`,tabIndex:0,onBlur:()=>l(!1),style:{width:t},children:e.jsx("div",{className:x.dropDownWrapper,onClick:()=>l(d=>!d),children:e.jsxs("div",{className:x.dropDownContainer,children:[e.jsxs("div",{className:x.titleContainer,children:[e.jsx("span",{className:x.dropDownTitle,children:r?"   ":o}),e.jsx(It,{className:x.dropDownIcon})]}),r&&e.jsx("ul",{className:x.labelContainer,children:i.map(d=>e.jsx("li",{className:x.label,onClick:p=>{p.stopPropagation(),a(d)},children:d},d))})]})})})},Tt="_timeInputContainer_uj4un_1",$t="_timeInput_uj4un_1",zt="_timeDivider_uj4un_20",w={timeInputContainer:Tt,timeInput:$t,timeDivider:zt},T=({time:t,setTime:o})=>{const[i,s]=t.split(":"),[r,l]=m.useState(i),[a,d]=m.useState(s);return m.useEffect(()=>{l(i),d(s)},[i,s]),e.jsxs("div",{className:w.timeInputContainer,children:[e.jsx("input",{type:"text",className:w.timeInput,value:r,onClick:()=>l(""),onChange:p=>{const C=p.target.value;/^\d*$/.test(C)&&l(p.target.value)},onBlur:p=>{const C=p.target.value;C===""?(l("00"),o(`00:${a}`)):parseInt(C)>23?o(`23:${a}`):o(`${parseInt(C).toString().padStart(2,"0")}:${a}`)}}),e.jsx("span",{className:w.timeDivider,children:":"}),e.jsx("input",{type:"text",className:w.timeInput,value:a,onClick:()=>d(""),onChange:p=>{const C=p.target.value;/^\d*$/.test(C)&&d(p.target.value)},onBlur:p=>{const C=p.target.value;C===""?(d("00"),o(`${r}:00`)):parseInt(C)>59?o(`${r}:59`):o(`${r}:${parseInt(C).toString().padStart(2,"0")}`)}})]})},Ft=t=>m.createElement("svg",{width:24,height:4,viewBox:"0 0 24 4",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("path",{d:"M2.08337 1.52344H21.9167",stroke:"currentColor",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),At="_buttonContainer_iiz3k_1",Lt="_plus_iiz3k_10",Et="_minus_iiz3k_16",$={buttonContainer:At,plus:Lt,minus:Et},z=({onButtonClick:t,type:o})=>{const i=$[o]||"";return e.jsxs("button",{className:`${$.buttonContainer}  ${i}`,onClick:s=>{s.preventDefault(),t()},children:[o==="plus"&&e.jsx(V,{width:"20px",height:"20px"}),o==="minus"&&e.jsx(Ft,{width:"20px",height:"20px"})]})},Pt=t=>t===""?"":t.endsWith("대학")?t+"교":t.endsWith("대")?t+"학교":t,Wt=t=>!!(t.name||t.code||t.capacity||t.university||t.classType||t.schedule),Ht=({course:t,onSubmit:o,onClose:i})=>{const[s,r]=m.useState({name:(t==null?void 0:t.name)||"",code:(t==null?void 0:t.code)||"",capacity:(t==null?void 0:t.capacity.toString())||"",university:(t==null?void 0:t.university)||"",classType:(t==null?void 0:t.classType)||"",schedule:(t==null?void 0:t.schedule)||[{day:D[0],start:"00:00",end:"00:00"}]}),[l,a]=m.useState({name:"",code:"",capacity:"",university:"",classType:s.classType===""?"강의 유형을 선택해 주세요":"",schedule:""}),d=()=>{o({...s,id:(t==null?void 0:t.id)||"",capacity:parseInt(s.capacity),accessCode:(t==null?void 0:t.accessCode)||0,fileName:(t==null?void 0:t.fileName)||""})},p=(n,c)=>{r(_=>({..._,[n]:c}))},C=(n,c,_)=>{r(v=>({...v,schedule:v.schedule.map((I,A)=>A===n?{...I,[c]:_}:I)}))},k=n=>{r(c=>({...c,schedule:c.schedule.filter((_,v)=>v!==n)}))},h=()=>{s.schedule.length>=10||r(n=>({...n,schedule:[...n.schedule,{day:D[0],start:"00:00",end:"00:00"}]}))};return m.useEffect(()=>{s.classType===""?a(n=>({...n,classType:"강의 유형을 선택해 주세요"})):a(n=>({...n,classType:""}))},[s.classType]),m.useEffect(()=>{s.schedule.forEach((n,c)=>{if(n.day===""){a(_=>({..._,schedule:`${c+1}번째 강의 요일을 선택해 주세요`}));return}else if(n.start>n.end){a(_=>({..._,schedule:`${c+1}번째 강의 시간을 확인해 주세요`}));return}else a(_=>({..._,schedule:""}))})},[s.schedule]),e.jsxs("form",{onClick:n=>{n.stopPropagation()},onSubmit:n=>{n.preventDefault(),d()},className:u.courseModal,children:[e.jsx("button",{className:u.closeButton,onClick:n=>{n.preventDefault(),i()},children:e.jsx(N,{className:u.closeIcon})}),e.jsx("h2",{className:u.title,children:t?"강의 정보 수정하기":"새 강의 만들기"}),e.jsxs("div",{className:u.modalContent,children:[e.jsx(g,{size:"full",title:"강의 이름",desc:l.name,placeholder:"강의 이름을 입력해 주세요",value:s.name,onInputChange:n=>p("name",n),onBlur:()=>{s.name===""?a(n=>({...n,name:"강의 이름을 입력해 주세요"})):a(n=>({...n,name:""}))}}),e.jsxs("div",{className:u.inputContainer,children:[e.jsx("div",{className:u.inputTitle,children:e.jsx("span",{children:"강의 유형"})}),e.jsxs("div",{className:u.categoryContainer,children:[L.map(n=>e.jsx("button",{className:u.categoryChip,onClick:c=>{c.preventDefault(),p("classType",n)},children:e.jsx(Z,{color:E(n),text:n,isActive:s.classType===n})},n)),l.classType&&e.jsx("span",{className:u.errorText,children:l.classType})]})]}),e.jsxs("div",{className:u.inputContainer,children:[e.jsx("div",{className:u.inputTitle,children:e.jsx("span",{children:"강의 시간"})}),e.jsx("div",{className:u.scheduleList,children:s.schedule.map((n,c)=>e.jsxs("div",{className:u.scheduleContainer,children:[e.jsx(St,{width:"109px",title:n.day,options:[...D],setTitle:_=>C(c,"day",_)}),e.jsxs("div",{className:u.timeInputContainer,children:[e.jsx(T,{time:n.start,setTime:_=>C(c,"start",_)}),e.jsx("span",{className:u.timeDivider,children:"-"}),e.jsx(T,{time:n.end,setTime:_=>C(c,"end",_)})]}),c!==0&&e.jsx("div",{className:u.deleteButton,children:e.jsx(z,{onButtonClick:()=>k(c),type:"minus"})}),c===s.schedule.length-1&&c<9&&e.jsx("div",{className:u.addButton,children:e.jsx(z,{onButtonClick:h,type:"plus"})})]},c))})]}),e.jsx(g,{title:"학수번호",placeholder:"학수번호를 입력해 주세요",desc:l.code,value:s.code,onInputChange:n=>p("code",n),onBlur:()=>{s.code===""?a(n=>({...n,code:"학수번호를 입력해 주세요"})):a(n=>({...n,code:""}))}}),e.jsx(g,{title:"인원 수",placeholder:"수업정원을 입력해 주세요",desc:l.capacity,value:s.capacity,onInputChange:n=>p("capacity",n),onBlur:()=>{s.capacity===""?a(n=>({...n,capacity:"수업정원을 입력해 주세요"})):/^\d*$/.test(s.capacity)?a(n=>({...n,capacity:""})):a(n=>({...n,capacity:"숫자만 입력해 주세요"}))}}),e.jsx(g,{title:"대학교",placeholder:"대학이름을 입력해 주세요",desc:l.university,value:s.university,onInputChange:n=>p("university",n),onBlur:()=>{s.university===""?a(n=>({...n,university:"대학이름을 입력해 주세요"})):(a(n=>({...n,university:""})),r(n=>({...n,university:Pt(n.university)})))}})]}),e.jsx("div",{className:u.buttonContainer,children:e.jsx(b,{type:"submit",color:"blue",size:"web4",height:"80px",text:t?"정보 수정하기":"강의 만들기",onClick:()=>{},isActive:!Wt(l)})})]})},Mt="_modal_1tsnt_1",Rt="_closeButton_1tsnt_11",Vt="_modalContent_1tsnt_19",Ot="_modalText_1tsnt_29",Ut="_modalTitle_1tsnt_36",Gt="_modalDescription_1tsnt_41",Kt="_fileContainer_1tsnt_46",Zt="_fileInfo_1tsnt_56",qt="_fileSize_1tsnt_66",Jt="_deleteButton_1tsnt_72",Qt="_buttonContainer_1tsnt_84",Xt="_fileInput_1tsnt_91",f={modal:Mt,closeButton:Rt,modalContent:Vt,modalText:Ot,modalTitle:Ut,modalDescription:Gt,fileContainer:Kt,fileInfo:Zt,fileSize:qt,deleteButton:Jt,buttonContainer:Qt,fileInput:Xt},Yt=({onClickCloseButton:t,onClickSaveButton:o})=>{const[i,s]=m.useState(null),r=m.useRef(null);function l(a){const d=a.target.files;d&&(P(d[0]),s(d[0]))}return e.jsxs("div",{className:f.modal,onClick:a=>a.stopPropagation(),children:[e.jsx("button",{className:f.closeButton,onClick:t,children:e.jsx(N,{width:"19px",height:"19px",color:"var(--gray-600)"})}),e.jsxs("div",{className:f.modalContent,children:[e.jsxs("div",{className:f.modalText,children:[e.jsx("h1",{className:f.modalTitle,children:"강의 자료 업로드하기"}),e.jsxs("p",{className:f.modalDescription,children:["강의 자료를 업로드해 놓으면, ",e.jsx("br",{})," 강의 시작 후 수동으로 파일을 열지 않아도 자동으로 열려요."]})]}),i&&e.jsxs("div",{className:f.fileContainer,children:[e.jsxs("span",{className:f.fileInfo,children:[i.name," "]}),e.jsxs("p",{className:f.fileSize,children:["(",Math.floor(i.size/1e3),"K)"]}),e.jsx("button",{className:f.deleteButton,onClick:()=>{s(null),r.current&&(r.current.value="")},children:e.jsx(N,{width:"16px",height:"16px",color:"white"})})]}),e.jsxs("div",{className:f.buttonContainer,children:[e.jsx("input",{type:"file",accept:".pdf",onChange:l,className:f.fileInput,ref:r}),e.jsx(b,{color:"white",size:"web4",height:"80px",text:"내 PC에서 업로드하기",onClick:()=>{var a;return(a=r.current)==null?void 0:a.click()},isActive:!0}),e.jsx(b,{color:"blue",size:"web4",height:"80px",text:"저장하기",onClick:()=>i&&o(i),isActive:!!i})]})]})]})},F=(t,o,i)=>{t(e.jsx(B,{type:"success",message:"파일이 성공적으로 업로드되었습니다.",buttonText:"확인",onClickCloseButton:()=>{i(),t(null)},onClickModalButton:async()=>{i(),t(null)}})),o()},se=({setModal:t,openModal:o,closeModal:i,navigate:s,popupError:r})=>{const l=()=>{t(null),i()};return{handleDeleteCourse:h=>{t(e.jsx(B,{type:"caution",message:"강의를 삭제하시겠습니까?",description:"삭제된 강의는 복구가 불가능합니다. 정말 삭제하시겠습니까?",buttonText:"삭제",onClickCloseButton:()=>{l()},onClickModalButton:async()=>{try{await y.deleteCourse(h.id),l(),t(null),s(0)}catch(n){r(n)}}})),o()},handleEditCourse:h=>{t(e.jsx(Ht,{course:h,onClose:()=>{l()},onSubmit:async n=>{try{await y.updateCourse(n),l(),t(null),s(0)}catch(c){r(c)}}})),o()},handleStartCourse:h=>{h&&(t(e.jsx(W,{course:h,handleClickBackButton:l,handleClickStartButton:async()=>{try{await H.startCourse(h.id),localStorage.clear()}catch{}l(),s(`/professor/course/${h.id}/classroom`)}})),o())},handleDetailCourse:h=>{s(`/professor/course/${h.id}`)},handleFileCourse:h=>{const n=async c=>{try{h!=null&&h.fileName?t(e.jsx(B,{type:"caution",message:"새 파일을 저장하시겠습니까?",description:"이미 저장된 강의자료가 있습니다. 삭제하고 새 파일을 저장하시겠습니까?",buttonText:"새 파일 저장",onClickModalButton:async()=>{await y.uploadCourseFile(h.id,c),F(t,o,i)},onClickCloseButton:()=>{l()}})):(await y.uploadCourseFile(h.id,c),F(t,o,i))}catch(_){r(_)}};t(e.jsx(Yt,{onClickCloseButton:()=>{l()},onClickSaveButton:c=>{n(c)}})),o()}}};export{Ht as C,ne as P,V as S,Z as a,se as c};
