import{z as n,A as c,r,j as i}from"./index-BGzHO4sV.js";function l(t){const{navigate:e}=n(),a=c({strict:!1,select:o=>o.pathname});return r.useCallback(({from:o,...s})=>e({from:s!=null&&s.to?a:void 0,...s}),[])}function m(t){const{navigate:e}=n(),a=c({strict:!1});return r.useEffect(()=>{e({from:t.to?a.pathname:void 0,...t})},[]),null}const h=t=>{const{children:e,overFlowAuto:a}=t;return i.jsx("div",{className:`h-[calc(theme(height.screen)-theme(spacing.10))] px-4 relative ${a?"":"overflow-hidden"}`,children:e})};export{h as B,m as N,l as u};
