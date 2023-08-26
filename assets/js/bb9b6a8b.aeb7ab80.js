"use strict";(self.webpackChunkpunchfolio=self.webpackChunkpunchfolio||[]).push([[187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3616:(e,t,n)=>{n.d(t,{E:()=>l,j:()=>s});const r="imageRow_Q6xq",o="imageGrid_VLdf";var a=n(5893);function i(e){return e.children.props.children.filter((e=>null!==e&&"object"==typeof e))}const s=e=>(0,a.jsx)("div",{className:r,children:i(e),style:{gap:e.gap}}),l=e=>(0,a.jsx)("div",{className:o,children:i(e),style:{gap:e.gap,gridTemplateRows:e.rows&&`repeat(${e.rows}, 1fr)`,gridTemplateColumns:e.columns&&`repeat(${e.columns}, 1fr)`}})},2786:(e,t,n)=>{n.d(t,{Z:()=>a});const r="vimeo_BzlC";var o=n(5893);const a=e=>(0,o.jsx)("iframe",{className:r,src:`${e.src}?muted=true&portrait=false&title=false`,frameborder:"0",allow:"fullscreen"})},6169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),a=n(3616),i=n(2786);const s={},l="Designing a Rule Builder on Promotion Software",c={unversionedId:"rule-builder/index",id:"rule-builder/index",title:"Designing a Rule Builder on Promotion Software",description:"Company & Product Background",source:"@site/content/projects/rule-builder/index.md",sourceDirName:"rule-builder",slug:"/rule-builder/",permalink:"/projects/rule-builder/",draft:!1,tags:[],version:"current",frontMatter:{}},u={},p=[{value:"Company &amp; Product Background",id:"company--product-background",level:2},{value:"Problem &amp; Goal",id:"problem--goal",level:2},{value:"Understanding use cases",id:"understanding-use-cases",level:2},{value:"Requirements &amp; user flow",id:"requirements--user-flow",level:2},{value:"Concept &amp; Design",id:"concept--design",level:2},{value:"Navigation patterns",id:"navigation-patterns",level:2},{value:"Final prototype",id:"final-prototype",level:2}],d={toc:p},f="wrapper";function m(e){let{components:t,...s}=e;return(0,o.kt)(f,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"designing-a-rule-builder-on-promotion-software"},"Designing a Rule Builder on Promotion Software"),(0,o.kt)("h2",{id:"company--product-background"},"Company & Product Background"),(0,o.kt)("p",null,"Marley Spoon is a meal kit subscription service that sends customers\npre-portioned food ingredients and recipes to prepare home-cooked meals. Marley\nSpoon is available in a two-person or four-person plan that customers can select\nup to 6 meals for their weekly deliveries. Marley Spoon is currently operating\nin 7 countries with Australia and the USA being the largest markets."),(0,o.kt)("h2",{id:"problem--goal"},"Problem & Goal"),(0,o.kt)("p",null,"Aggressively offering vouchers has been one of the key incentives for the\nfirst-time customers for the meal kit industry. The profit margin the company\nloses through discounting has been growing over time due to the competitiveness\namong brands. The current flat percent discount applied to both two-person and\nfour-person plans leads to a loss of revenue in higher value plans."),(0,o.kt)("p",null,"Marketing Tech team came up with a solution to have different discount applied\nto different plans, which would allow the company to generate more revenue for\nthe user acquisition. However, the promotion software did not support\ncustomizing discount based on different plans. My contribution was to ",(0,o.kt)("strong",{parentName:"p"},"design a\nnew interface that allows our marketing managers to customize vouchers for\ndifferent plans"),"."),(0,o.kt)("h2",{id:"understanding-use-cases"},"Understanding use cases"),(0,o.kt)("p",null,"Generally, vouchers used in meal kit service often are split vouchers which is\nnot a one-time voucher. The split vouchers allow users to continue getting a\ndiscount on the product for several weeks in order to increase long term value\n(LTV) for subscription products. For the plan-based voucher, there will be 2\ndifferent users."),(0,o.kt)("p",null,"The first use case is acquisition voucher for new customers who sign up for the\nfirst time with the brand. Usually users will get the voucher via marketing\ncampaign and it will be applied automatically with a deeplink from the campaign\nin the signup process. The value of the discount will change regarding to a plan\nthat users select."),(0,o.kt)("p",null,"The second use case is reactivation voucher, which will be offering to users who\nhave unsubscribed and would like to come back again. We target this group of\nusers with reactivation campaign via email communication."),(0,o.kt)("h2",{id:"requirements--user-flow"},"Requirements & user flow"),(0,o.kt)("p",null,"Discussing with Product Managers and Marketing Managers, I documented the\nrequirements of the MVP for the feature. For them, the feature will allow them\nto set a distinct discount value based on different numbers of people on a plan\n(such as a couple plan, or a family plan) and different numbers of meal on a\nplan (such as 2-6 meals per week)."),(0,o.kt)("p",null,"The feature should also allow them to have different type of discounts in one\nvoucher and it must be easily to create and duplicate to one another."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"user-flow",src:n(4516).Z,width:"1412",height:"1324"})),(0,o.kt)("h2",{id:"concept--design"},"Concept & Design"),(0,o.kt)("p",null,"I introduced a ",(0,o.kt)("strong",{parentName:"p"},"rule builder concept")," into the promotion software enabling\nusers to define logics in voucher value for different plans. For example, when\nthe voucher is used in two-person and three-meal plan, the discount will be 50\npercent off instead of 75 percent. Due to a rule builder being a new concept, I\nworked on the design and prototype at the same time in order to do rapid testing\nand get feedback fast and frequently from users."),(0,o.kt)(a.E,{columns:"2",mdxType:"ImageGrid"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"concept-design-1",src:n(1710).Z,width:"1050",height:"746"}),"\n",(0,o.kt)("img",{alt:"concept-design-2",src:n(2142).Z,width:"1050",height:"746"}),"\n",(0,o.kt)("img",{alt:"concept-design-3",src:n(4371).Z,width:"1050",height:"746"}),"\n",(0,o.kt)("img",{alt:"concept-design-4",src:n(580).Z,width:"1050",height:"746"}))),(0,o.kt)("h2",{id:"navigation-patterns"},"Navigation patterns"),(0,o.kt)("p",null,"I also optimized the navigation and introduced a new hierarchy of the components\nin the application so that users can understand better where to focus on the\nnext step for each task when customizing vouchers."),(0,o.kt)("p",null,'I added "Rules" as a part of navigation for users to get an overview of the rule\ntemplates that they have added into their system. This section will also provide\nan opportunity for us to develop a new function where users can build a campaign\nbased on available rule templates, as rule will be a major part for future\nmarketing campaigns.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"navigation-patterns",src:n(2689).Z,width:"2137",height:"1122"})),(0,o.kt)("h2",{id:"final-prototype"},"Final prototype"),(0,o.kt)("p",null,"Here a demo of the final design for rule building for voucher configuration."),(0,o.kt)(i.Z,{src:"https://player.vimeo.com/video/854720575",mdxType:"Vimeo"}))}m.isMDXComponent=!0},1710:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/concept-design-1-e207ee0af538977072ad5633a52c8510.webp"},2142:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/concept-design-2-9e439ec61a7c1a4dc9357474b9ab3f7b.webp"},4371:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/concept-design-3-754ff371d89a16fe36756a7fa94722e7.webp"},580:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/concept-design-4-ed41b54246d7dec2e3475c7bdeaa379f.webp"},2689:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/navigation-patterns-e473181262a1ffac66f2f09c9de6419b.webp"},4516:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/user-flow-ce75be32bdff66c4f485b0ce1e75f2c2.webp"}}]);