import{$ as w,r as I,j as _,c as Mt,u as rt,a as Ot,g as Bt,s as Pt}from"./index-BiFf_Ng5.js";import{u as $t,B as qt}from"./BaseLayout-C7pQkym0.js";import{$ as Wt,_ as Ht,a as Kt,B as zt}from"./index-D984-yMA.js";import{c as le,a as Gt,C as Yt,b as Jt,d as Qt,e as Xt,f as Zt,g as er}from"./card-CiRKOvfl.js";var de=e=>e.type==="checkbox",ae=e=>e instanceof Date,T=e=>e==null;const dt=e=>typeof e=="object";var C=e=>!T(e)&&!Array.isArray(e)&&dt(e)&&!ae(e),yt=e=>C(e)&&e.target?de(e.target)?e.target.checked:e.target.value:e,tr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ht=(e,i)=>e.has(tr(i)),rr=e=>{const i=e.constructor&&e.constructor.prototype;return C(i)&&i.hasOwnProperty("isPrototypeOf")},Pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function M(e){let i;const t=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Pe&&(e instanceof Blob||e instanceof FileList))&&(t||C(e)))if(i=t?[]:{},!t&&!rr(e))i=e;else for(const r in e)e.hasOwnProperty(r)&&(i[r]=M(e[r]));else return e;return i}var ye=e=>Array.isArray(e)?e.filter(Boolean):[],S=e=>e===void 0,d=(e,i,t)=>{if(!i||!C(e))return t;const r=ye(i.split(/[,[\].]+?/)).reduce((n,l)=>T(n)?n:n[l],e);return S(r)||r===e?S(e[i])?t:e[i]:r},P=e=>typeof e=="boolean";const xe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},$={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Q={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},gt=w.createContext(null),Ae=()=>w.useContext(gt),sr=e=>{const{children:i,...t}=e;return w.createElement(gt.Provider,{value:t},i)};var mt=(e,i,t,r=!0)=>{const n={defaultValues:i._defaultValues};for(const l in e)Object.defineProperty(n,l,{get:()=>{const u=l;return i._proxyFormState[u]!==$.all&&(i._proxyFormState[u]=!r||$.all),t&&(t[u]=!0),e[u]}});return n},B=e=>C(e)&&!Object.keys(e).length,vt=(e,i,t,r)=>{t(e);const{name:n,...l}=e;return B(l)||Object.keys(l).length>=Object.keys(i).length||Object.keys(l).find(u=>i[u]===(!r||$.all))},ve=e=>Array.isArray(e)?e:[e],bt=(e,i,t)=>!e||!i||e===i||ve(e).some(r=>r&&(t?r===i:r.startsWith(i)||i.startsWith(r)));function $e(e){const i=w.useRef(e);i.current=e,w.useEffect(()=>{const t=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function ir(e){const i=Ae(),{control:t=i.control,disabled:r,name:n,exact:l}=e||{},[u,v]=w.useState(t._formState),g=w.useRef(!0),E=w.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),p=w.useRef(n);return p.current=n,$e({disabled:r,next:V=>g.current&&bt(p.current,V.name,l)&&vt(V,E.current,t._updateFormState)&&v({...t._formState,...V}),subject:t._subjects.state}),w.useEffect(()=>(g.current=!0,E.current.isValid&&t._updateValid(!0),()=>{g.current=!1}),[t]),mt(u,t,E.current,!1)}var z=e=>typeof e=="string",xt=(e,i,t,r,n)=>z(e)?(r&&i.watch.add(e),d(t,e,n)):Array.isArray(e)?e.map(l=>(r&&i.watch.add(l),d(t,l))):(r&&(i.watchAll=!0),t);function nr(e){const i=Ae(),{control:t=i.control,name:r,defaultValue:n,disabled:l,exact:u}=e||{},v=w.useRef(r);v.current=r,$e({disabled:l,subject:t._subjects.values,next:p=>{bt(v.current,p.name,u)&&E(M(xt(v.current,t._names,p.values||t._formValues,!1,n)))}});const[g,E]=w.useState(t._getWatch(r,n));return w.useEffect(()=>t._removeUnmounted()),g}var qe=e=>/^\w*$/.test(e),_t=e=>ye(e.replace(/["|']|\]/g,"").split(/\.|\[/)),D=(e,i,t)=>{let r=-1;const n=qe(i)?[i]:_t(i),l=n.length,u=l-1;for(;++r<l;){const v=n[r];let g=t;if(r!==u){const E=e[v];g=C(E)||Array.isArray(E)?E:isNaN(+n[r+1])?{}:[]}e[v]=g,e=e[v]}return e};function ar(e){const i=Ae(),{name:t,disabled:r,control:n=i.control,shouldUnregister:l}=e,u=ht(n._names.array,t),v=nr({control:n,name:t,defaultValue:d(n._formValues,t,d(n._defaultValues,t,e.defaultValue)),exact:!0}),g=ir({control:n,name:t}),E=w.useRef(n.register(t,{...e.rules,value:v,...P(e.disabled)?{disabled:e.disabled}:{}}));return w.useEffect(()=>{const p=n._options.shouldUnregister||l,V=(m,q)=>{const N=d(n._fields,m);N&&(N._f.mount=q)};if(V(t,!0),p){const m=M(d(n._options.defaultValues,t));D(n._defaultValues,t,m),S(d(n._formValues,t))&&D(n._formValues,t,m)}return()=>{(u?p&&!n._state.action:p)?n.unregister(t):V(t,!1)}},[t,n,u,l]),w.useEffect(()=>{d(n._fields,t)&&n._updateDisabledField({disabled:r,fields:n._fields,name:t,value:d(n._fields,t)._f.value})},[r,t,n]),{field:{name:t,value:v,...P(r)||g.disabled?{disabled:g.disabled||r}:{},onChange:w.useCallback(p=>E.current.onChange({target:{value:yt(p),name:t},type:xe.CHANGE}),[t]),onBlur:w.useCallback(()=>E.current.onBlur({target:{value:d(n._formValues,t),name:t},type:xe.BLUR}),[t,n]),ref:p=>{const V=d(n._fields,t);V&&p&&(V._f.ref={focus:()=>p.focus(),select:()=>p.select(),setCustomValidity:m=>p.setCustomValidity(m),reportValidity:()=>p.reportValidity()})}},formState:g,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!d(g.errors,t)},isDirty:{enumerable:!0,get:()=>!!d(g.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!d(g.touchedFields,t)},error:{enumerable:!0,get:()=>d(g.errors,t)}})}}const lr=e=>e.render(ar(e));var or=(e,i,t,r,n)=>i?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[r]:n||!0}}:{},st=e=>({isOnSubmit:!e||e===$.onSubmit,isOnBlur:e===$.onBlur,isOnChange:e===$.onChange,isOnAll:e===$.all,isOnTouch:e===$.onTouched}),it=(e,i,t)=>!t&&(i.watchAll||i.watch.has(e)||[...i.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const fe=(e,i,t,r)=>{for(const n of t||Object.keys(e)){const l=d(e,n);if(l){const{_f:u,...v}=l;if(u){if(u.refs&&u.refs[0]&&i(u.refs[0],n)&&!r)break;if(u.ref&&i(u.ref,u.name)&&!r)break;fe(v,i)}else C(v)&&fe(v,i)}}};var ur=(e,i,t)=>{const r=ye(d(e,t));return D(r,"root",i[t]),D(e,t,r),e},We=e=>e.type==="file",Z=e=>typeof e=="function",_e=e=>{if(!Pe)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},be=e=>z(e),He=e=>e.type==="radio",Fe=e=>e instanceof RegExp;const nt={value:!1,isValid:!1},at={value:!0,isValid:!0};var Ft=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!S(e[0].attributes.value)?S(e[0].value)||e[0].value===""?at:{value:e[0].value,isValid:!0}:at:nt}return nt};const lt={isValid:!1,value:null};var Vt=e=>Array.isArray(e)?e.reduce((i,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:i,lt):lt;function ot(e,i,t="validate"){if(be(e)||Array.isArray(e)&&e.every(be)||P(e)&&!e)return{type:t,message:be(e)?e:"",ref:i}}var ne=e=>C(e)&&!Fe(e)?e:{value:e,message:""},ut=async(e,i,t,r,n)=>{const{ref:l,refs:u,required:v,maxLength:g,minLength:E,min:p,max:V,pattern:m,validate:q,name:N,valueAsNumber:he,mount:pe,disabled:X}=e._f,x=d(i,N);if(!pe||X)return{};const G=u?u[0]:l,Y=F=>{r&&G.reportValidity&&(G.setCustomValidity(P(F)?"":F||""),G.reportValidity())},L={},oe=He(l),se=de(l),Se=oe||se,W=(he||We(l))&&S(l.value)&&S(x)||_e(l)&&l.value===""||x===""||Array.isArray(x)&&!x.length,ee=or.bind(null,N,t,L),J=(F,b,k,U=Q.maxLength,O=Q.minLength)=>{const H=F?b:k;L[N]={type:F?U:O,message:H,ref:l,...ee(F?U:O,H)}};if(n?!Array.isArray(x)||!x.length:v&&(!Se&&(W||T(x))||P(x)&&!x||se&&!Ft(u).isValid||oe&&!Vt(u).isValid)){const{value:F,message:b}=be(v)?{value:!!v,message:v}:ne(v);if(F&&(L[N]={type:Q.required,message:b,ref:G,...ee(Q.required,b)},!t))return Y(b),L}if(!W&&(!T(p)||!T(V))){let F,b;const k=ne(V),U=ne(p);if(!T(x)&&!isNaN(x)){const O=l.valueAsNumber||x&&+x;T(k.value)||(F=O>k.value),T(U.value)||(b=O<U.value)}else{const O=l.valueAsDate||new Date(x),H=ge=>new Date(new Date().toDateString()+" "+ge),te=l.type=="time",ue=l.type=="week";z(k.value)&&x&&(F=te?H(x)>H(k.value):ue?x>k.value:O>new Date(k.value)),z(U.value)&&x&&(b=te?H(x)<H(U.value):ue?x<U.value:O<new Date(U.value))}if((F||b)&&(J(!!F,k.message,U.message,Q.max,Q.min),!t))return Y(L[N].message),L}if((g||E)&&!W&&(z(x)||n&&Array.isArray(x))){const F=ne(g),b=ne(E),k=!T(F.value)&&x.length>+F.value,U=!T(b.value)&&x.length<+b.value;if((k||U)&&(J(k,F.message,b.message),!t))return Y(L[N].message),L}if(m&&!W&&z(x)){const{value:F,message:b}=ne(m);if(Fe(F)&&!x.match(F)&&(L[N]={type:Q.pattern,message:b,ref:l,...ee(Q.pattern,b)},!t))return Y(b),L}if(q){if(Z(q)){const F=await q(x,i),b=ot(F,G);if(b&&(L[N]={...b,...ee(Q.validate,b.message)},!t))return Y(b.message),L}else if(C(q)){let F={};for(const b in q){if(!B(F)&&!t)break;const k=ot(await q[b](x,i),G,b);k&&(F={...k,...ee(b,k.message)},Y(k.message),t&&(L[N]=F))}if(!B(F)&&(L[N]={ref:G,...F},!t))return L}}return Y(!0),L};function cr(e,i){const t=i.slice(0,-1).length;let r=0;for(;r<t;)e=S(e)?r++:e[i[r++]];return e}function fr(e){for(const i in e)if(e.hasOwnProperty(i)&&!S(e[i]))return!1;return!0}function R(e,i){const t=Array.isArray(i)?i:qe(i)?[i]:_t(i),r=t.length===1?e:cr(e,t),n=t.length-1,l=t[n];return r&&delete r[l],n!==0&&(C(r)&&B(r)||Array.isArray(r)&&fr(r))&&R(e,t.slice(0,-1)),e}var Re=()=>{let e=[];return{get observers(){return e},next:n=>{for(const l of e)l.next&&l.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(l=>l!==n)}}),unsubscribe:()=>{e=[]}}},Ve=e=>T(e)||!dt(e);function re(e,i){if(Ve(e)||Ve(i))return e===i;if(ae(e)&&ae(i))return e.getTime()===i.getTime();const t=Object.keys(e),r=Object.keys(i);if(t.length!==r.length)return!1;for(const n of t){const l=e[n];if(!r.includes(n))return!1;if(n!=="ref"){const u=i[n];if(ae(l)&&ae(u)||C(l)&&C(u)||Array.isArray(l)&&Array.isArray(u)?!re(l,u):l!==u)return!1}}return!0}var wt=e=>e.type==="select-multiple",dr=e=>He(e)||de(e),Ie=e=>_e(e)&&e.isConnected,At=e=>{for(const i in e)if(Z(e[i]))return!0;return!1};function we(e,i={}){const t=Array.isArray(e);if(C(e)||t)for(const r in e)Array.isArray(e[r])||C(e[r])&&!At(e[r])?(i[r]=Array.isArray(e[r])?[]:{},we(e[r],i[r])):T(e[r])||(i[r]=!0);return i}function Dt(e,i,t){const r=Array.isArray(e);if(C(e)||r)for(const n in e)Array.isArray(e[n])||C(e[n])&&!At(e[n])?S(i)||Ve(t[n])?t[n]=Array.isArray(e[n])?we(e[n],[]):{...we(e[n])}:Dt(e[n],T(i)?{}:i[n],t[n]):t[n]=!re(e[n],i[n]);return t}var me=(e,i)=>Dt(e,i,we(i)),pt=(e,{valueAsNumber:i,valueAsDate:t,setValueAs:r})=>S(e)?e:i?e===""?NaN:e&&+e:t&&z(e)?new Date(e):r?r(e):e;function Ne(e){const i=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):i.disabled))return We(i)?i.files:He(i)?Vt(e.refs).value:wt(i)?[...i.selectedOptions].map(({value:t})=>t):de(i)?Ft(e.refs).value:pt(S(i.value)?e.ref.value:i.value,e)}var yr=(e,i,t,r)=>{const n={};for(const l of e){const u=d(i,l);u&&D(n,l,u._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:r}},ce=e=>S(e)?e:Fe(e)?e.source:C(e)?Fe(e.value)?e.value.source:e.value:e,hr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ct(e,i,t){const r=d(e,t);if(r||qe(t))return{error:r,name:t};const n=t.split(".");for(;n.length;){const l=n.join("."),u=d(i,l),v=d(e,l);if(u&&!Array.isArray(u)&&t!==l)return{name:t};if(v&&v.type)return{name:l,error:v};n.pop()}return{name:t}}var gr=(e,i,t,r,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(i||e):(t?r.isOnBlur:n.isOnBlur)?!e:(t?r.isOnChange:n.isOnChange)?e:!0,mr=(e,i)=>!ye(d(e,i)).length&&R(e,i);const vr={mode:$.onSubmit,reValidateMode:$.onChange,shouldFocusError:!0};function br(e={},i){let t={...vr,...e},r={submitCount:0,isDirty:!1,isLoading:Z(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:t.errors||{},disabled:t.disabled||!1},n={},l=C(t.values)||C(t.defaultValues)?M(t.values||t.defaultValues)||{}:{},u=t.shouldUnregister?{}:M(l),v={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},E,p=0;const V={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:Re(),array:Re(),state:Re()},q=st(t.mode),N=st(t.reValidateMode),he=t.criteriaMode===$.all,pe=s=>a=>{clearTimeout(p),p=setTimeout(s,a)},X=async s=>{if(V.isValid||s){const a=t.resolver?B((await W()).errors):await J(n,!0);a!==r.isValid&&m.state.next({isValid:a})}},x=s=>V.isValidating&&m.state.next({isValidating:s}),G=(s,a=[],o,y,f=!0,c=!0)=>{if(y&&o){if(v.action=!0,c&&Array.isArray(d(n,s))){const h=o(d(n,s),y.argA,y.argB);f&&D(n,s,h)}if(c&&Array.isArray(d(r.errors,s))){const h=o(d(r.errors,s),y.argA,y.argB);f&&D(r.errors,s,h),mr(r.errors,s)}if(V.touchedFields&&c&&Array.isArray(d(r.touchedFields,s))){const h=o(d(r.touchedFields,s),y.argA,y.argB);f&&D(r.touchedFields,s,h)}V.dirtyFields&&(r.dirtyFields=me(l,u)),m.state.next({name:s,isDirty:b(s,a),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else D(u,s,a)},Y=(s,a)=>{D(r.errors,s,a),m.state.next({errors:r.errors})},L=s=>{r.errors=s,m.state.next({errors:r.errors,isValid:!1})},oe=(s,a,o,y)=>{const f=d(n,s);if(f){const c=d(u,s,S(o)?d(l,s):o);S(c)||y&&y.defaultChecked||a?D(u,s,a?c:Ne(f._f)):O(s,c),v.mount&&X()}},se=(s,a,o,y,f)=>{let c=!1,h=!1;const A={name:s},j=!!(d(n,s)&&d(n,s)._f.disabled);if(!o||y){V.isDirty&&(h=r.isDirty,r.isDirty=A.isDirty=b(),c=h!==A.isDirty);const K=j||re(d(l,s),a);h=!!(!j&&d(r.dirtyFields,s)),K||j?R(r.dirtyFields,s):D(r.dirtyFields,s,!0),A.dirtyFields=r.dirtyFields,c=c||V.dirtyFields&&h!==!K}if(o){const K=d(r.touchedFields,s);K||(D(r.touchedFields,s,o),A.touchedFields=r.touchedFields,c=c||V.touchedFields&&K!==o)}return c&&f&&m.state.next(A),c?A:{}},Se=(s,a,o,y)=>{const f=d(r.errors,s),c=V.isValid&&P(a)&&r.isValid!==a;if(e.delayError&&o?(E=pe(()=>Y(s,o)),E(e.delayError)):(clearTimeout(p),E=null,o?D(r.errors,s,o):R(r.errors,s)),(o?!re(f,o):f)||!B(y)||c){const h={...y,...c&&P(a)?{isValid:a}:{},errors:r.errors,name:s};r={...r,...h},m.state.next(h)}x(!1)},W=async s=>t.resolver(u,t.context,yr(s||g.mount,n,t.criteriaMode,t.shouldUseNativeValidation)),ee=async s=>{const{errors:a}=await W(s);if(s)for(const o of s){const y=d(a,o);y?D(r.errors,o,y):R(r.errors,o)}else r.errors=a;return a},J=async(s,a,o={valid:!0})=>{for(const y in s){const f=s[y];if(f){const{_f:c,...h}=f;if(c){const A=g.array.has(c.name),j=await ut(f,u,he,t.shouldUseNativeValidation&&!a,A);if(j[c.name]&&(o.valid=!1,a))break;!a&&(d(j,c.name)?A?ur(r.errors,j,c.name):D(r.errors,c.name,j[c.name]):R(r.errors,c.name))}h&&await J(h,a,o)}}return o.valid},F=()=>{for(const s of g.unMount){const a=d(n,s);a&&(a._f.refs?a._f.refs.every(o=>!Ie(o)):!Ie(a._f.ref))&&ke(s)}g.unMount=new Set},b=(s,a)=>(s&&a&&D(u,s,a),!re(Ke(),l)),k=(s,a,o)=>xt(s,g,{...v.mount?u:S(a)?l:z(s)?{[s]:a}:a},o,a),U=s=>ye(d(v.mount?u:l,s,e.shouldUnregister?d(l,s,[]):[])),O=(s,a,o={})=>{const y=d(n,s);let f=a;if(y){const c=y._f;c&&(!c.disabled&&D(u,s,pt(a,c)),f=_e(c.ref)&&T(a)?"":a,wt(c.ref)?[...c.ref.options].forEach(h=>h.selected=f.includes(h.value)):c.refs?de(c.ref)?c.refs.length>1?c.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(f)?!!f.find(A=>A===h.value):f===h.value)):c.refs[0]&&(c.refs[0].checked=!!f):c.refs.forEach(h=>h.checked=h.value===f):We(c.ref)?c.ref.value="":(c.ref.value=f,c.ref.type||m.values.next({name:s,values:{...u}})))}(o.shouldDirty||o.shouldTouch)&&se(s,f,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&Ee(s)},H=(s,a,o)=>{for(const y in a){const f=a[y],c=`${s}.${y}`,h=d(n,c);(g.array.has(s)||!Ve(f)||h&&!h._f)&&!ae(f)?H(c,f,o):O(c,f,o)}},te=(s,a,o={})=>{const y=d(n,s),f=g.array.has(s),c=M(a);D(u,s,c),f?(m.array.next({name:s,values:{...u}}),(V.isDirty||V.dirtyFields)&&o.shouldDirty&&m.state.next({name:s,dirtyFields:me(l,u),isDirty:b(s,c)})):y&&!y._f&&!T(c)?H(s,c,o):O(s,c,o),it(s,g)&&m.state.next({...r}),m.values.next({name:s,values:{...u}}),!v.mount&&i()},ue=async s=>{const a=s.target;let o=a.name,y=!0;const f=d(n,o),c=()=>a.type?Ne(f._f):yt(s),h=A=>{y=Number.isNaN(A)||A===d(u,o,A)};if(f){let A,j;const K=c(),ie=s.type===xe.BLUR||s.type===xe.FOCUS_OUT,Nt=!hr(f._f)&&!t.resolver&&!d(r.errors,o)&&!f._f.deps||gr(ie,d(r.touchedFields,o),r.isSubmitted,N,q),Le=it(o,g,ie);D(u,o,K),ie?(f._f.onBlur&&f._f.onBlur(s),E&&E(0)):f._f.onChange&&f._f.onChange(s);const je=se(o,K,ie,!1),Tt=!B(je)||Le;if(!ie&&m.values.next({name:o,type:s.type,values:{...u}}),Nt)return V.isValid&&X(),Tt&&m.state.next({name:o,...Le?{}:je});if(!ie&&Le&&m.state.next({...r}),x(!0),t.resolver){const{errors:et}=await W([o]);if(h(K),y){const Ut=ct(r.errors,n,o),tt=ct(et,n,Ut.name||o);A=tt.error,o=tt.name,j=B(et)}}else A=(await ut(f,u,he,t.shouldUseNativeValidation))[o],h(K),y&&(A?j=!1:V.isValid&&(j=await J(n,!0)));y&&(f._f.deps&&Ee(f._f.deps),Se(o,j,A,je))}},ge=(s,a)=>{if(d(r.errors,a)&&s.focus)return s.focus(),1},Ee=async(s,a={})=>{let o,y;const f=ve(s);if(x(!0),t.resolver){const c=await ee(S(s)?s:f);o=B(c),y=s?!f.some(h=>d(c,h)):o}else s?(y=(await Promise.all(f.map(async c=>{const h=d(n,c);return await J(h&&h._f?{[c]:h}:h)}))).every(Boolean),!(!y&&!r.isValid)&&X()):y=o=await J(n);return m.state.next({...!z(s)||V.isValid&&o!==r.isValid?{}:{name:s},...t.resolver||!s?{isValid:o}:{},errors:r.errors,isValidating:!1}),a.shouldFocus&&!y&&fe(n,ge,s?f:g.mount),y},Ke=s=>{const a={...l,...v.mount?u:{}};return S(s)?a:z(s)?d(a,s):s.map(o=>d(a,o))},ze=(s,a)=>({invalid:!!d((a||r).errors,s),isDirty:!!d((a||r).dirtyFields,s),isTouched:!!d((a||r).touchedFields,s),error:d((a||r).errors,s)}),Lt=s=>{s&&ve(s).forEach(a=>R(r.errors,a)),m.state.next({errors:s?r.errors:{}})},Ge=(s,a,o)=>{const y=(d(n,s,{_f:{}})._f||{}).ref;D(r.errors,s,{...a,ref:y}),m.state.next({name:s,errors:r.errors,isValid:!1}),o&&o.shouldFocus&&y&&y.focus&&y.focus()},jt=(s,a)=>Z(s)?m.values.subscribe({next:o=>s(k(void 0,a),o)}):k(s,a,!0),ke=(s,a={})=>{for(const o of s?ve(s):g.mount)g.mount.delete(o),g.array.delete(o),a.keepValue||(R(n,o),R(u,o)),!a.keepError&&R(r.errors,o),!a.keepDirty&&R(r.dirtyFields,o),!a.keepTouched&&R(r.touchedFields,o),!t.shouldUnregister&&!a.keepDefaultValue&&R(l,o);m.values.next({values:{...u}}),m.state.next({...r,...a.keepDirty?{isDirty:b()}:{}}),!a.keepIsValid&&X()},Ye=({disabled:s,name:a,field:o,fields:y,value:f})=>{if(P(s)){const c=s?void 0:S(f)?Ne(o?o._f:d(y,a)._f):f;D(u,a,c),se(a,c,!1,!1,!0)}},Ce=(s,a={})=>{let o=d(n,s);const y=P(a.disabled);return D(n,s,{...o||{},_f:{...o&&o._f?o._f:{ref:{name:s}},name:s,mount:!0,...a}}),g.mount.add(s),o?Ye({field:o,disabled:a.disabled,name:s,value:a.value}):oe(s,!0,a.value),{...y?{disabled:a.disabled}:{},...t.progressive?{required:!!a.required,min:ce(a.min),max:ce(a.max),minLength:ce(a.minLength),maxLength:ce(a.maxLength),pattern:ce(a.pattern)}:{},name:s,onChange:ue,onBlur:ue,ref:f=>{if(f){Ce(s,a),o=d(n,s);const c=S(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,h=dr(c),A=o._f.refs||[];if(h?A.find(j=>j===c):c===o._f.ref)return;D(n,s,{_f:{...o._f,...h?{refs:[...A.filter(Ie),c,...Array.isArray(d(l,s))?[{}]:[]],ref:{type:c.type,name:s}}:{ref:c}}}),oe(s,!1,void 0,c)}else o=d(n,s,{}),o._f&&(o._f.mount=!1),(t.shouldUnregister||a.shouldUnregister)&&!(ht(g.array,s)&&v.action)&&g.unMount.add(s)}}},Je=()=>t.shouldFocusError&&fe(n,ge,g.mount),Rt=s=>{P(s)&&(m.state.next({disabled:s}),fe(n,(a,o)=>{let y=s;const f=d(n,o);f&&P(f._f.disabled)&&(y||(y=f._f.disabled)),a.disabled=y},0,!1))},Qe=(s,a)=>async o=>{let y;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let f=M(u);if(m.state.next({isSubmitting:!0}),t.resolver){const{errors:c,values:h}=await W();r.errors=c,f=h}else await J(n);if(R(r.errors,"root"),B(r.errors)){m.state.next({errors:{}});try{await s(f,o)}catch(c){y=c}}else a&&await a({...r.errors},o),Je(),setTimeout(Je);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:B(r.errors)&&!y,submitCount:r.submitCount+1,errors:r.errors}),y)throw y},It=(s,a={})=>{d(n,s)&&(S(a.defaultValue)?te(s,M(d(l,s))):(te(s,a.defaultValue),D(l,s,M(a.defaultValue))),a.keepTouched||R(r.touchedFields,s),a.keepDirty||(R(r.dirtyFields,s),r.isDirty=a.defaultValue?b(s,M(d(l,s))):b()),a.keepError||(R(r.errors,s),V.isValid&&X()),m.state.next({...r}))},Xe=(s,a={})=>{const o=s?M(s):l,y=M(o),f=s&&!B(s)?y:l;if(a.keepDefaultValues||(l=o),!a.keepValues){if(a.keepDirtyValues)for(const c of g.mount)d(r.dirtyFields,c)?D(f,c,d(u,c)):te(c,d(f,c));else{if(Pe&&S(s))for(const c of g.mount){const h=d(n,c);if(h&&h._f){const A=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(_e(A)){const j=A.closest("form");if(j){j.reset();break}}}}n={}}u=e.shouldUnregister?a.keepDefaultValues?M(l):{}:M(f),m.array.next({values:{...f}}),m.values.next({values:{...f}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!v.mount&&i(),v.mount=!V.isValid||!!a.keepIsValid||!!a.keepDirtyValues,v.watch=!!e.shouldUnregister,m.state.next({submitCount:a.keepSubmitCount?r.submitCount:0,isDirty:a.keepDirty?r.isDirty:!!(a.keepDefaultValues&&!re(s,l)),isSubmitted:a.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:a.keepDirtyValues?a.keepDefaultValues&&u?me(l,u):r.dirtyFields:a.keepDefaultValues&&s?me(l,s):{},touchedFields:a.keepTouched?r.touchedFields:{},errors:a.keepErrors?r.errors:{},isSubmitSuccessful:a.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Ze=(s,a)=>Xe(Z(s)?s(u):s,a);return{control:{register:Ce,unregister:ke,getFieldState:ze,handleSubmit:Qe,setError:Ge,_executeSchema:W,_getWatch:k,_getDirty:b,_updateValid:X,_removeUnmounted:F,_updateFieldArray:G,_updateDisabledField:Ye,_getFieldArray:U,_reset:Xe,_resetDefaultValues:()=>Z(t.defaultValues)&&t.defaultValues().then(s=>{Ze(s,t.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:s=>{r={...r,...s}},_disableForm:Rt,_subjects:m,_proxyFormState:V,_setErrors:L,get _fields(){return n},get _formValues(){return u},get _state(){return v},set _state(s){v=s},get _defaultValues(){return l},get _names(){return g},set _names(s){g=s},get _formState(){return r},set _formState(s){r=s},get _options(){return t},set _options(s){t={...t,...s}}},trigger:Ee,register:Ce,handleSubmit:Qe,watch:jt,setValue:te,getValues:Ke,reset:Ze,resetField:It,clearErrors:Lt,unregister:ke,setError:Ge,setFocus:(s,a={})=>{const o=d(n,s),y=o&&o._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),a.shouldSelect&&f.select())}},getFieldState:ze}}function xr(e={}){const i=w.useRef(),t=w.useRef(),[r,n]=w.useState({isDirty:!1,isValidating:!1,isLoading:Z(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Z(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...br(e,()=>n(u=>({...u}))),formState:r});const l=i.current.control;return l._options=e,$e({subject:l._subjects.state,next:u=>{vt(u,l._proxyFormState,l._updateFormState,!0)&&n({...l._formState})}}),w.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),w.useEffect(()=>{if(l._proxyFormState.isDirty){const u=l._getDirty();u!==r.isDirty&&l._subjects.state.next({isDirty:u})}},[l,r.isDirty]),w.useEffect(()=>{e.values&&!re(e.values,t.current)?(l._reset(e.values,l._options.resetOptions),t.current=e.values,n(u=>({...u}))):l._resetDefaultValues()},[e.values,l]),w.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),w.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),w.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),i.current.formState=mt(r,l),i.current}const _r=I.forwardRef((e,i)=>I.createElement(Wt.label,Ht({},e,{ref:i,onMouseDown:t=>{var r;(r=e.onMouseDown)===null||r===void 0||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}}))),St=_r,Fr=Gt("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Et=I.forwardRef(({className:e,...i},t)=>_.jsx(St,{ref:t,className:le(Fr(),e),...i}));Et.displayName=St.displayName;const Vr=sr,kt=I.createContext({}),ft=({...e})=>_.jsx(kt.Provider,{value:{name:e.name},children:_.jsx(lr,{...e})}),De=()=>{const e=I.useContext(kt),i=I.useContext(Ct),{getFieldState:t,formState:r}=Ae(),n=t(e.name,r);if(!e)throw new Error("useFormField should be used within <FormField>");const{id:l}=i;return{id:l,name:e.name,formItemId:`${l}-form-item`,formDescriptionId:`${l}-form-item-description`,formMessageId:`${l}-form-item-message`,...n}},Ct=I.createContext({}),Te=I.forwardRef(({className:e,...i},t)=>{const r=I.useId();return _.jsx(Ct.Provider,{value:{id:r},children:_.jsx("div",{ref:t,className:le("space-y-2",e),...i})})});Te.displayName="FormItem";const Ue=I.forwardRef(({className:e,...i},t)=>{const{error:r,formItemId:n}=De();return _.jsx(Et,{ref:t,className:le(r&&"text-destructive",e),htmlFor:n,...i})});Ue.displayName="FormLabel";const Me=I.forwardRef(({...e},i)=>{const{error:t,formItemId:r,formDescriptionId:n,formMessageId:l}=De();return _.jsx(Kt,{ref:i,id:r,"aria-describedby":t?`${n} ${l}`:`${n}`,"aria-invalid":!!t,...e})});Me.displayName="FormControl";const wr=I.forwardRef(({className:e,...i},t)=>{const{formDescriptionId:r}=De();return _.jsx("p",{ref:t,id:r,className:le("text-[0.8rem] text-muted-foreground",e),...i})});wr.displayName="FormDescription";const Oe=I.forwardRef(({className:e,children:i,...t},r)=>{const{error:n,formMessageId:l}=De(),u=n?String(n==null?void 0:n.message):i;return u?_.jsx("p",{ref:r,id:l,className:le("text-[0.8rem] font-medium text-destructive",e),...t,children:u}):null});Oe.displayName="FormMessage";const Be=I.forwardRef(({className:e,type:i,...t},r)=>_.jsx("input",{type:i,className:le("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...t}));Be.displayName="Input";const Ar=()=>{const e=$t(),i=xr({defaultValues:{email:"",password:""}}),t=rt(u=>u.auth),r=rt(u=>u.auth.isLoading);I.useEffect(()=>{var u;(u=t==null?void 0:t.session)!=null&&u.access_token&&e({to:"/",replace:!0})},[t,e]);const n=Ot(),l=u=>{n(Pt(u))};return I.useEffect(()=>{n(Bt())},[n]),_.jsx(qt,{children:_.jsx(Vr,{...i,children:_.jsx("form",{className:"h-screen flex items-center justify-center w-full",onSubmit:i.handleSubmit(l),children:_.jsxs(Yt,{className:"w-1/2",children:[_.jsxs(Jt,{children:[_.jsx(Qt,{children:"Log In"}),_.jsx(Xt,{children:"Log in with email"})]}),_.jsxs(Zt,{className:"flex flex-col gap-2",children:[_.jsx(ft,{control:i.control,name:"email",render:({field:u})=>_.jsxs(Te,{children:[_.jsx(Ue,{children:"Email"}),_.jsx(Me,{children:_.jsx(Be,{placeholder:"Enter Email Address",...u})}),_.jsx(Oe,{})]})}),_.jsx(ft,{control:i.control,name:"password",render:({field:u})=>_.jsxs(Te,{children:[_.jsx(Ue,{children:"Password"}),_.jsx(Me,{children:_.jsx(Be,{placeholder:"Enter Password",type:"password",...u})}),_.jsx(Oe,{})]})})]}),_.jsx(er,{className:"flex items-center justify-end",children:_.jsx(zt,{type:"submit",disabled:r,children:r?"Please wait...":"Sign In"})})]})})})})},jr=Mt("/login")({component:Ar});export{jr as Route};
