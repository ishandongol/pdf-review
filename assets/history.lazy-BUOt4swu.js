import{c as p,u as o,a as h,r as g,b as j,j as s,F as f}from"./index-DLah5RWi.js";import{w as y,B as c,g as N}from"./date.utils-CCGyndNx.js";import{C,b as v,d as F,f as b,g as L}from"./card-mJxHECm7.js";import{B as P}from"./BaseLayout-DoaTUjwY.js";const R=()=>{const r=o(e=>e.history.previousData),l=o(e=>e.history.isLoading),n=o(e=>{var a;return(a=e.auth.user)==null?void 0:a.id}),i=h();return g.useEffect(()=>{n&&i(j(n))},[i,n]),s.jsxs(P,{overFlowAuto:!0,children:[l&&s.jsx(f,{}),s.jsx("div",{className:"py-4 flex flex-col gap-10",children:r==null?void 0:r.map(e=>{const{id:a,file_name:d,student_folder:m,created_at:x,reviews:u}=e;return s.jsxs("div",{children:[s.jsxs("div",{className:"flex gap-4 items-center",children:[s.jsxs("p",{className:"font-mono text-md",children:[`${m}/${d}`,"  "]}),s.jsxs(c,{variant:"outline",children:["Reviewed ",N(x)]})]}),s.jsx("div",{className:"grid gap-4 grid-cols-4",children:u.map(t=>s.jsxs(C,{className:"cursor-pointer mt-2",role:"button",children:[s.jsx(v,{children:s.jsx(F,{className:" leading-relaxed",children:t.comment.text})}),s.jsxs(b,{children:[t.content.text?s.jsx("blockquote",{className:" font-thin my-2",children:t.content.text}):null,t.content.image?s.jsx("div",{className:" my-2",children:s.jsx("img",{src:t.content.image,alt:"Screenshot"})}):null]}),s.jsxs(L,{className:"flex items-center justify-start gap-2",children:["Page ",t.position.pageNumber," ",s.jsx(c,{variant:"secondary",children:"PDF"})]})]},t.id))})]},a)})})]})},E=p("/history")({component:y(R,"History Page")});export{E as Route};
