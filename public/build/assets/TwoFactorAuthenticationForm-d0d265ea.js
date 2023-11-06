import{r as _,H as E,o as e,d as s,a as c,l as N,b as r,w as t,f as n,t as b,G as B,n as w,j as Q,T as I,k as O,I as Y,c as y,Q as D,e as d,u as $,F as G,g as U,O as R}from"./app-db33d1ae.js";import{_ as j}from"./ActionSection-535d70a3.js";import{_ as z}from"./DialogModal-f693f6b6.js";import{_ as H,a as L}from"./TextInput-d6d1bad4.js";import{_ as V}from"./PrimaryButton-752a1df6.js";import{_ as C}from"./SecondaryButton-f88166e3.js";import{_ as W}from"./DangerButton-e966e374.js";import{_ as J}from"./InputLabel-c8479285.js";import"./SectionTitle-8bd65d77.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-20159be7.js";const X={class:"mt-4"},h={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(g,{emit:T}){const i=T,a=_(!1),o=E({password:"",error:"",processing:!1}),f=_(null),v=()=>{axios.get(route("password.confirmation")).then(l=>{l.data.confirmed?i("confirmed"):(a.value=!0,setTimeout(()=>f.value.focus(),250))})},p=()=>{o.processing=!0,axios.post(route("password.confirm"),{password:o.password}).then(()=>{o.processing=!1,u(),Q().then(()=>i("confirmed"))}).catch(l=>{o.processing=!1,o.error=l.response.data.errors.password[0],f.value.focus()})},u=()=>{a.value=!1,o.password="",o.error=""};return(l,x)=>(e(),s("span",null,[c("span",{onClick:v},[N(l.$slots,"default")]),r(z,{show:a.value,onClose:u},{title:t(()=>[n(b(g.title),1)]),content:t(()=>[n(b(g.content)+" ",1),c("div",X,[r(H,{ref_key:"passwordInput",ref:f,modelValue:o.password,"onUpdate:modelValue":x[0]||(x[0]=S=>o.password=S),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:B(p,["enter"])},null,8,["modelValue","onKeyup"]),r(L,{message:o.error,class:"mt-2"},null,8,["message"])])]),footer:t(()=>[r(C,{onClick:u},{default:t(()=>[n(" Cancel ")]),_:1}),r(V,{class:w(["ml-3",{"opacity-25":o.processing}]),disabled:o.processing,onClick:p},{default:t(()=>[n(b(g.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},Z={key:0,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},ee={key:1,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},te={key:2,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},oe=c("div",{class:"mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400"},[c("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1),ae={key:3},se={key:0},re={class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},ne={key:0,class:"font-semibold"},le={key:1},ce=["innerHTML"],ie={key:0,class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},ue={class:"font-semibold"},de=["innerHTML"],me={key:1,class:"mt-4"},fe={key:1},pe=c("div",{class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},[c("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1),_e={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 rounded-lg"},ve={class:"mt-5"},ye={key:0},he={key:1},Ke={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(g){const T=g,i=_(!1),a=_(!1),o=_(!1),f=_(null),v=_(null),p=_([]),u=I({code:""}),l=O(()=>{var m;return!i.value&&((m=D().props.auth.user)==null?void 0:m.two_factor_enabled)});Y(l,()=>{l.value||(u.reset(),u.clearErrors())});const x=()=>{i.value=!0,R.post(route("two-factor.enable"),{},{preserveScroll:!0,onSuccess:()=>Promise.all([S(),M(),F()]),onFinish:()=>{i.value=!1,a.value=T.requiresConfirmation}})},S=()=>axios.get(route("two-factor.qr-code")).then(m=>{f.value=m.data.svg}),M=()=>axios.get(route("two-factor.secret-key")).then(m=>{v.value=m.data.secretKey}),F=()=>axios.get(route("two-factor.recovery-codes")).then(m=>{p.value=m.data}),K=()=>{u.post(route("two-factor.confirm"),{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{a.value=!1,f.value=null,v.value=null}})},q=()=>{axios.post(route("two-factor.recovery-codes")).then(()=>F())},A=()=>{o.value=!0,R.delete(route("two-factor.disable"),{preserveScroll:!0,onSuccess:()=>{o.value=!1,a.value=!1}})};return(m,P)=>(e(),y(j,null,{title:t(()=>[n(" Two Factor Authentication ")]),description:t(()=>[n(" Add additional security to your account using two factor authentication. ")]),content:t(()=>[l.value&&!a.value?(e(),s("h3",Z," You have enabled two factor authentication. ")):l.value&&a.value?(e(),s("h3",ee," Finish enabling two factor authentication. ")):(e(),s("h3",te," You have not enabled two factor authentication. ")),oe,l.value?(e(),s("div",ae,[f.value?(e(),s("div",se,[c("div",re,[a.value?(e(),s("p",ne," To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")):(e(),s("p",le," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))]),c("div",{class:"mt-4",innerHTML:f.value},null,8,ce),v.value?(e(),s("div",ie,[c("p",ue,[n(" Setup Key: "),c("span",{innerHTML:v.value},null,8,de)])])):d("",!0),a.value?(e(),s("div",me,[r(J,{for:"code",value:"Code"}),r(H,{id:"code",modelValue:$(u).code,"onUpdate:modelValue":P[0]||(P[0]=k=>$(u).code=k),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:B(K,["enter"])},null,8,["modelValue","onKeyup"]),r(L,{message:$(u).errors.code,class:"mt-2"},null,8,["message"])])):d("",!0)])):d("",!0),p.value.length>0&&!a.value?(e(),s("div",fe,[pe,c("div",_e,[(e(!0),s(G,null,U(p.value,k=>(e(),s("div",{key:k},b(k),1))),128))])])):d("",!0)])):d("",!0),c("div",ve,[l.value?(e(),s("div",he,[r(h,{onConfirmed:K},{default:t(()=>[a.value?(e(),y(V,{key:0,type:"button",class:w(["mr-3",{"opacity-25":i.value}]),disabled:i.value},{default:t(()=>[n(" Confirm ")]),_:1},8,["class","disabled"])):d("",!0)]),_:1}),r(h,{onConfirmed:q},{default:t(()=>[p.value.length>0&&!a.value?(e(),y(C,{key:0,class:"mr-3"},{default:t(()=>[n(" Regenerate Recovery Codes ")]),_:1})):d("",!0)]),_:1}),r(h,{onConfirmed:F},{default:t(()=>[p.value.length===0&&!a.value?(e(),y(C,{key:0,class:"mr-3"},{default:t(()=>[n(" Show Recovery Codes ")]),_:1})):d("",!0)]),_:1}),r(h,{onConfirmed:A},{default:t(()=>[a.value?(e(),y(C,{key:0,class:w({"opacity-25":o.value}),disabled:o.value},{default:t(()=>[n(" Cancel ")]),_:1},8,["class","disabled"])):d("",!0)]),_:1}),r(h,{onConfirmed:A},{default:t(()=>[a.value?d("",!0):(e(),y(W,{key:0,class:w({"opacity-25":o.value}),disabled:o.value},{default:t(()=>[n(" Disable ")]),_:1},8,["class","disabled"]))]),_:1})])):(e(),s("div",ye,[r(h,{onConfirmed:x},{default:t(()=>[r(V,{type:"button",class:w({"opacity-25":i.value}),disabled:i.value},{default:t(()=>[n(" Enable ")]),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Ke as default};