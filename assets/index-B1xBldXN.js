import{r as o,j as m,f as h}from"./index-CEm0uM7z.js";import{c as b}from"./index-Bb4qSo10.js";import{c as $}from"./card-LMq989mQ.js";function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function v(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function p(...e){return n=>e.forEach(t=>v(t,n))}function S(...e){return o.useCallback(p(...e),e)}const f=o.forwardRef((e,n)=>{const{children:t,...r}=e,s=o.Children.toArray(t),c=s.find(x);if(c){const i=c.props.children,a=s.map(u=>u===c?o.Children.count(i)>1?o.Children.only(null):o.isValidElement(i)?i.props.children:null:u);return o.createElement(d,l({},r,{ref:n}),o.isValidElement(i)?o.cloneElement(i,void 0,a):null)}return o.createElement(d,l({},r,{ref:n}),t)});f.displayName="Slot";const d=o.forwardRef((e,n)=>{const{children:t,...r}=e;return o.isValidElement(t)?o.cloneElement(t,{...y(r,t.props),ref:n?p(n,t.ref):t.ref}):o.Children.count(t)>1?o.Children.only(null):null});d.displayName="SlotClone";const g=({children:e})=>o.createElement(o.Fragment,null,e);function x(e){return o.isValidElement(e)&&e.type===g}function y(e,n){const t={...n};for(const r in n){const s=e[r],c=n[r];/^on[A-Z]/.test(r)?s&&c?t[r]=(...a)=>{c(...a),s(...a)}:s&&(t[r]=s):r==="style"?t[r]={...s,...c}:r==="className"&&(t[r]=[s,c].filter(Boolean).join(" "))}return{...e,...t}}const E=b("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),w=o.forwardRef(({className:e,variant:n,size:t,asChild:r=!1,...s},c)=>{const i=r?f:"button";return m.jsx(i,{className:$(E({variant:n,size:t,className:e})),ref:c,...s})});w.displayName="Button";const C=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],P=C.reduce((e,n)=>{const t=o.forwardRef((r,s)=>{const{asChild:c,...i}=r,a=c?f:n;return o.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.createElement(a,l({},i,{ref:s}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function O(e,n){e&&h.flushSync(()=>e.dispatchEvent(n))}export{P as $,w as B,l as _,f as a,S as b,O as c};
