import{u as p,j as x,F as I}from"./index-DLah5RWi.js";import{N as J}from"./BaseLayout-DoaTUjwY.js";import{c as $,a as U}from"./card-mJxHECm7.js";const z=t=>{const n=p(i=>i.auth.user),e=p(i=>i.auth.error),r=p(i=>i.auth.isLoading),{children:a}=t;return r?x.jsx(I,{}):!n||e?x.jsx(J,{to:"/login"}):x.jsx(x.Fragment,{children:a})},se=(t,n)=>{const e=()=>x.jsx(z,{children:x.jsx(t,{})});return e.displayName=n,e},K=U("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function ue({className:t,variant:n,...e}){return x.jsx("div",{className:$(K({variant:n}),t),...e})}function m(t){const n=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&n==="[object Date]"?new t.constructor(+t):typeof t=="number"||n==="[object Number]"||typeof t=="string"||n==="[object String]"?new Date(t):new Date(NaN)}function P(t,n){return t instanceof Date?new t.constructor(n):new Date(n)}const _=6048e5,Z=864e5;let tt={};function S(){return tt}function D(t,n){var u,c,d,f;const e=S(),r=(n==null?void 0:n.weekStartsOn)??((c=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:c.weekStartsOn)??e.weekStartsOn??((f=(d=e.locale)==null?void 0:d.options)==null?void 0:f.weekStartsOn)??0,a=m(t),i=a.getDay(),o=(i<r?7:0)+i-r;return a.setDate(a.getDate()-o),a.setHours(0,0,0,0),a}function Y(t){return D(t,{weekStartsOn:1})}function X(t){const n=m(t),e=n.getFullYear(),r=P(t,0);r.setFullYear(e+1,0,4),r.setHours(0,0,0,0);const a=Y(r),i=P(t,0);i.setFullYear(e,0,4),i.setHours(0,0,0,0);const o=Y(i);return n.getTime()>=a.getTime()?e+1:n.getTime()>=o.getTime()?e:e-1}function q(t){const n=m(t);return n.setHours(0,0,0,0),n}function j(t){const n=m(t),e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return e.setUTCFullYear(n.getFullYear()),+t-+e}function A(t,n){const e=q(t),r=q(n),a=+e-j(e),i=+r-j(r);return Math.round((a-i)/Z)}function et(t){const n=X(t),e=P(t,0);return e.setFullYear(n,0,4),e.setHours(0,0,0,0),Y(e)}function nt(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function rt(t){if(!nt(t)&&typeof t!="number")return!1;const n=m(t);return!isNaN(Number(n))}function at(t){const n=m(t),e=P(t,0);return e.setFullYear(n.getFullYear(),0,1),e.setHours(0,0,0,0),e}const it={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ot=(t,n,e)=>{let r;const a=it[t];return typeof a=="string"?r=a:n===1?r=a.one:r=a.other.replace("{{count}}",n.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+r:r+" ago":r};function E(t){return(n={})=>{const e=n.width?String(n.width):t.defaultWidth;return t.formats[e]||t.formats[t.defaultWidth]}}const st={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ut={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ct={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},dt={date:E({formats:st,defaultWidth:"full"}),time:E({formats:ut,defaultWidth:"full"}),dateTime:E({formats:ct,defaultWidth:"full"})},ft={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ht=(t,n,e,r)=>ft[t];function M(t){return(n,e)=>{const r=e!=null&&e.context?String(e.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,u=e!=null&&e.width?String(e.width):o;a=t.formattingValues[u]||t.formattingValues[o]}else{const o=t.defaultWidth,u=e!=null&&e.width?String(e.width):t.defaultWidth;a=t.values[u]||t.values[o]}const i=t.argumentCallback?t.argumentCallback(n):n;return a[i]}}const lt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},mt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},gt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},wt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},yt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},bt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ot=(t,n)=>{const e=Number(t),r=e%100;if(r>20||r<10)switch(r%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},xt={ordinalNumber:Ot,era:M({values:lt,defaultWidth:"wide"}),quarter:M({values:mt,defaultWidth:"wide",argumentCallback:t=>t-1}),month:M({values:gt,defaultWidth:"wide"}),day:M({values:wt,defaultWidth:"wide"}),dayPeriod:M({values:yt,defaultWidth:"wide",formattingValues:bt,defaultFormattingWidth:"wide"})};function W(t){return(n,e={})=>{const r=e.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=n.match(a);if(!i)return null;const o=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?vt(u,g=>g.test(o)):Pt(u,g=>g.test(o));let d;d=t.valueCallback?t.valueCallback(c):c,d=e.valueCallback?e.valueCallback(d):d;const f=n.slice(o.length);return{value:d,rest:f}}}function Pt(t,n){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&n(t[e]))return e}function vt(t,n){for(let e=0;e<t.length;e++)if(n(t[e]))return e}function kt(t){return(n,e={})=>{const r=n.match(t.matchPattern);if(!r)return null;const a=r[0],i=n.match(t.parsePattern);if(!i)return null;let o=t.valueCallback?t.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;const u=n.slice(a.length);return{value:o,rest:u}}}const Mt=/^(\d+)(th|st|nd|rd)?/i,Wt=/\d+/i,Dt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},St={any:[/^b/i,/^(a|c)/i]},Yt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Tt={any:[/1/i,/2/i,/3/i,/4/i]},pt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Et={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ft={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Nt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ct={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},qt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},jt={ordinalNumber:kt({matchPattern:Mt,parsePattern:Wt,valueCallback:t=>parseInt(t,10)}),era:W({matchPatterns:Dt,defaultMatchWidth:"wide",parsePatterns:St,defaultParseWidth:"any"}),quarter:W({matchPatterns:Yt,defaultMatchWidth:"wide",parsePatterns:Tt,defaultParseWidth:"any",valueCallback:t=>t+1}),month:W({matchPatterns:pt,defaultMatchWidth:"wide",parsePatterns:Et,defaultParseWidth:"any"}),day:W({matchPatterns:Ft,defaultMatchWidth:"wide",parsePatterns:Nt,defaultParseWidth:"any"}),dayPeriod:W({matchPatterns:Ct,defaultMatchWidth:"any",parsePatterns:qt,defaultParseWidth:"any"})},B={code:"en-US",formatDistance:ot,formatLong:dt,formatRelative:ht,localize:xt,match:jt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Lt(t){const n=m(t);return A(n,at(n))+1}function Ht(t){const n=m(t),e=+Y(n)-+et(n);return Math.round(e/_)+1}function G(t,n){var f,g,w,y;const e=m(t),r=e.getFullYear(),a=S(),i=(n==null?void 0:n.firstWeekContainsDate)??((g=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((y=(w=a.locale)==null?void 0:w.options)==null?void 0:y.firstWeekContainsDate)??1,o=P(t,0);o.setFullYear(r+1,0,i),o.setHours(0,0,0,0);const u=D(o,n),c=P(t,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const d=D(c,n);return e.getTime()>=u.getTime()?r+1:e.getTime()>=d.getTime()?r:r-1}function Qt(t,n){var u,c,d,f;const e=S(),r=(n==null?void 0:n.firstWeekContainsDate)??((c=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:c.firstWeekContainsDate)??e.firstWeekContainsDate??((f=(d=e.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??1,a=G(t,n),i=P(t,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),D(i,n)}function Rt(t,n){const e=m(t),r=+D(e,n)-+Qt(e,n);return Math.round(r/_)+1}function s(t,n){const e=t<0?"-":"",r=Math.abs(t).toString().padStart(n,"0");return e+r}const b={y(t,n){const e=t.getFullYear(),r=e>0?e:1-e;return s(n==="yy"?r%100:r,n.length)},M(t,n){const e=t.getMonth();return n==="M"?String(e+1):s(e+1,2)},d(t,n){return s(t.getDate(),n.length)},a(t,n){const e=t.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h(t,n){return s(t.getHours()%12||12,n.length)},H(t,n){return s(t.getHours(),n.length)},m(t,n){return s(t.getMinutes(),n.length)},s(t,n){return s(t.getSeconds(),n.length)},S(t,n){const e=n.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,e-3));return s(a,n.length)}},v={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},L={G:function(t,n,e){const r=t.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return e.era(r,{width:"abbreviated"});case"GGGGG":return e.era(r,{width:"narrow"});case"GGGG":default:return e.era(r,{width:"wide"})}},y:function(t,n,e){if(n==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return e.ordinalNumber(a,{unit:"year"})}return b.y(t,n)},Y:function(t,n,e,r){const a=G(t,r),i=a>0?a:1-a;if(n==="YY"){const o=i%100;return s(o,2)}return n==="Yo"?e.ordinalNumber(i,{unit:"year"}):s(i,n.length)},R:function(t,n){const e=X(t);return s(e,n.length)},u:function(t,n){const e=t.getFullYear();return s(e,n.length)},Q:function(t,n,e){const r=Math.ceil((t.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return s(r,2);case"Qo":return e.ordinalNumber(r,{unit:"quarter"});case"QQQ":return e.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,n,e){const r=Math.ceil((t.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return s(r,2);case"qo":return e.ordinalNumber(r,{unit:"quarter"});case"qqq":return e.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,n,e){const r=t.getMonth();switch(n){case"M":case"MM":return b.M(t,n);case"Mo":return e.ordinalNumber(r+1,{unit:"month"});case"MMM":return e.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(r,{width:"wide",context:"formatting"})}},L:function(t,n,e){const r=t.getMonth();switch(n){case"L":return String(r+1);case"LL":return s(r+1,2);case"Lo":return e.ordinalNumber(r+1,{unit:"month"});case"LLL":return e.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(r,{width:"wide",context:"standalone"})}},w:function(t,n,e,r){const a=Rt(t,r);return n==="wo"?e.ordinalNumber(a,{unit:"week"}):s(a,n.length)},I:function(t,n,e){const r=Ht(t);return n==="Io"?e.ordinalNumber(r,{unit:"week"}):s(r,n.length)},d:function(t,n,e){return n==="do"?e.ordinalNumber(t.getDate(),{unit:"date"}):b.d(t,n)},D:function(t,n,e){const r=Lt(t);return n==="Do"?e.ordinalNumber(r,{unit:"dayOfYear"}):s(r,n.length)},E:function(t,n,e){const r=t.getDay();switch(n){case"E":case"EE":case"EEE":return e.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(r,{width:"short",context:"formatting"});case"EEEE":default:return e.day(r,{width:"wide",context:"formatting"})}},e:function(t,n,e,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(i);case"ee":return s(i,2);case"eo":return e.ordinalNumber(i,{unit:"day"});case"eee":return e.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(a,{width:"short",context:"formatting"});case"eeee":default:return e.day(a,{width:"wide",context:"formatting"})}},c:function(t,n,e,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(i);case"cc":return s(i,n.length);case"co":return e.ordinalNumber(i,{unit:"day"});case"ccc":return e.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(a,{width:"narrow",context:"standalone"});case"cccccc":return e.day(a,{width:"short",context:"standalone"});case"cccc":default:return e.day(a,{width:"wide",context:"standalone"})}},i:function(t,n,e){const r=t.getDay(),a=r===0?7:r;switch(n){case"i":return String(a);case"ii":return s(a,n.length);case"io":return e.ordinalNumber(a,{unit:"day"});case"iii":return e.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(r,{width:"short",context:"formatting"});case"iiii":default:return e.day(r,{width:"wide",context:"formatting"})}},a:function(t,n,e){const a=t.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,n,e){const r=t.getHours();let a;switch(r===12?a=v.noon:r===0?a=v.midnight:a=r/12>=1?"pm":"am",n){case"b":case"bb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,n,e){const r=t.getHours();let a;switch(r>=17?a=v.evening:r>=12?a=v.afternoon:r>=4?a=v.morning:a=v.night,n){case"B":case"BB":case"BBB":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,n,e){if(n==="ho"){let r=t.getHours()%12;return r===0&&(r=12),e.ordinalNumber(r,{unit:"hour"})}return b.h(t,n)},H:function(t,n,e){return n==="Ho"?e.ordinalNumber(t.getHours(),{unit:"hour"}):b.H(t,n)},K:function(t,n,e){const r=t.getHours()%12;return n==="Ko"?e.ordinalNumber(r,{unit:"hour"}):s(r,n.length)},k:function(t,n,e){let r=t.getHours();return r===0&&(r=24),n==="ko"?e.ordinalNumber(r,{unit:"hour"}):s(r,n.length)},m:function(t,n,e){return n==="mo"?e.ordinalNumber(t.getMinutes(),{unit:"minute"}):b.m(t,n)},s:function(t,n,e){return n==="so"?e.ordinalNumber(t.getSeconds(),{unit:"second"}):b.s(t,n)},S:function(t,n){return b.S(t,n)},X:function(t,n,e){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return Q(r);case"XXXX":case"XX":return O(r);case"XXXXX":case"XXX":default:return O(r,":")}},x:function(t,n,e){const r=t.getTimezoneOffset();switch(n){case"x":return Q(r);case"xxxx":case"xx":return O(r);case"xxxxx":case"xxx":default:return O(r,":")}},O:function(t,n,e){const r=t.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+H(r,":");case"OOOO":default:return"GMT"+O(r,":")}},z:function(t,n,e){const r=t.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+H(r,":");case"zzzz":default:return"GMT"+O(r,":")}},t:function(t,n,e){const r=Math.trunc(t.getTime()/1e3);return s(r,n.length)},T:function(t,n,e){const r=t.getTime();return s(r,n.length)}};function H(t,n=""){const e=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),i=r%60;return i===0?e+String(a):e+String(a)+n+s(i,2)}function Q(t,n){return t%60===0?(t>0?"-":"+")+s(Math.abs(t)/60,2):O(t,n)}function O(t,n=""){const e=t>0?"-":"+",r=Math.abs(t),a=s(Math.trunc(r/60),2),i=s(r%60,2);return e+a+n+i}const R=(t,n)=>{switch(t){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},V=(t,n)=>{switch(t){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},_t=(t,n)=>{const e=t.match(/(P+)(p+)?/)||[],r=e[1],a=e[2];if(!a)return R(t,n);let i;switch(r){case"P":i=n.dateTime({width:"short"});break;case"PP":i=n.dateTime({width:"medium"});break;case"PPP":i=n.dateTime({width:"long"});break;case"PPPP":default:i=n.dateTime({width:"full"});break}return i.replace("{{date}}",R(r,n)).replace("{{time}}",V(a,n))},Xt={p:V,P:_t},At=/^D+$/,Bt=/^Y+$/,Gt=["D","DD","YY","YYYY"];function Vt(t){return At.test(t)}function It(t){return Bt.test(t)}function Jt(t,n,e){const r=$t(t,n,e);if(console.warn(r),Gt.includes(t))throw new RangeError(r)}function $t(t,n,e){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${n}\`) for formatting ${r} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ut=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,zt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Kt=/^'([^]*?)'?$/,Zt=/''/g,te=/[a-zA-Z]/;function ee(t,n,e){var f,g,w,y,k,F,N,C;const r=S(),a=(e==null?void 0:e.locale)??r.locale??B,i=(e==null?void 0:e.firstWeekContainsDate)??((g=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??r.firstWeekContainsDate??((y=(w=r.locale)==null?void 0:w.options)==null?void 0:y.firstWeekContainsDate)??1,o=(e==null?void 0:e.weekStartsOn)??((F=(k=e==null?void 0:e.locale)==null?void 0:k.options)==null?void 0:F.weekStartsOn)??r.weekStartsOn??((C=(N=r.locale)==null?void 0:N.options)==null?void 0:C.weekStartsOn)??0,u=m(t);if(!rt(u))throw new RangeError("Invalid time value");let c=n.match(zt).map(l=>{const h=l[0];if(h==="p"||h==="P"){const T=Xt[h];return T(l,a.formatLong)}return l}).join("").match(Ut).map(l=>{if(l==="''")return{isToken:!1,value:"'"};const h=l[0];if(h==="'")return{isToken:!1,value:ne(l)};if(L[h])return{isToken:!0,value:l};if(h.match(te))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:l}});a.localize.preprocessor&&(c=a.localize.preprocessor(u,c));const d={firstWeekContainsDate:i,weekStartsOn:o,locale:a};return c.map(l=>{if(!l.isToken)return l.value;const h=l.value;(!(e!=null&&e.useAdditionalWeekYearTokens)&&It(h)||!(e!=null&&e.useAdditionalDayOfYearTokens)&&Vt(h))&&Jt(h,n,String(t));const T=L[h[0]];return T(u,h,a.localize,d)}).join("")}function ne(t){const n=t.match(Kt);return n?n[1].replace(Zt,"'"):t}function re(t,n,e){var g,w,y,k;const r=m(t),a=m(n),i=S(),o=(e==null?void 0:e.locale)??i.locale??B,u=(e==null?void 0:e.weekStartsOn)??((w=(g=e==null?void 0:e.locale)==null?void 0:g.options)==null?void 0:w.weekStartsOn)??i.weekStartsOn??((k=(y=i.locale)==null?void 0:y.options)==null?void 0:k.weekStartsOn)??0,c=A(r,a);if(isNaN(c))throw new RangeError("Invalid time value");let d;c<-6?d="other":c<-1?d="lastWeek":c<0?d="yesterday":c<1?d="today":c<2?d="tomorrow":c<7?d="nextWeek":d="other";const f=o.formatRelative(d,r,a,{locale:o,weekStartsOn:u});return ee(r,f,{locale:o,weekStartsOn:u})}const ce=t=>re(t,new Date);export{ue as B,ce as g,se as w};
