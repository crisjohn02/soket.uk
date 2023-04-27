import{T as B,r as f,c as P,w as a,o as d,f as r,d as x,a as l,b as o,k as p,L as v,x as j,h,e as _,u as t,i as E,n as A,O as F}from"./app-da2f7037.js";import{_ as L}from"./ActionMessage-74c5f52d.js";import{_ as O}from"./FormSection-c132e08f.js";import{a as g,_ as S}from"./TextInput-5b65efbb.js";import{_ as k}from"./InputLabel-d1e655ef.js";import{_ as R}from"./PrimaryButton-86053f0e.js";import{_ as V}from"./SecondaryButton-c367d4da.js";import"./SectionTitle-9cad67ec.js";import"./_plugin-vue_export-helper-c27b6911.js";const T={key:0,class:"col-span-6 sm:col-span-4"},z={class:"mt-2"},D=["src","alt"],M={class:"mt-2"},Y={class:"col-span-6 sm:col-span-4"},q={class:"col-span-6 sm:col-span-4"},G={key:0},H={class:"text-sm mt-2 dark:text-white"},J={class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},ae={__name:"UpdateProfileInformationForm",props:{user:Object},setup(c){const y=c,e=B({_method:"PUT",name:y.user.name,email:y.user.email,photo:null}),b=f(null),u=f(null),n=f(null),C=()=>{n.value&&(e.photo=n.value.files[0]),e.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>w()})},$=()=>{b.value=!0},I=()=>{n.value.click()},N=()=>{const s=n.value.files[0];if(!s)return;const i=new FileReader;i.onload=m=>{u.value=m.target.result},i.readAsDataURL(s)},U=()=>{F.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{u.value=null,w()}})},w=()=>{var s;(s=n.value)!=null&&s.value&&(n.value.value=null)};return(s,i)=>(d(),P(O,{onSubmitted:C},{title:a(()=>[r(" Profile Information ")]),description:a(()=>[r(" Update your account's profile information and email address. ")]),form:a(()=>[s.$page.props.jetstream.managesProfilePhotos?(d(),x("div",T,[l("input",{ref_key:"photoInput",ref:n,type:"file",class:"hidden",onChange:N},null,544),o(k,{for:"photo",value:"Photo"}),p(l("div",z,[l("img",{src:c.user.profile_photo_url,alt:c.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,D)],512),[[v,!u.value]]),p(l("div",M,[l("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:j("background-image: url('"+u.value+"');")},null,4)],512),[[v,u.value]]),o(V,{class:"mt-2 mr-2",type:"button",onClick:h(I,["prevent"])},{default:a(()=>[r(" Select A New Photo ")]),_:1},8,["onClick"]),c.user.profile_photo_path?(d(),P(V,{key:0,type:"button",class:"mt-2",onClick:h(U,["prevent"])},{default:a(()=>[r(" Remove Photo ")]),_:1},8,["onClick"])):_("",!0),o(g,{message:t(e).errors.photo,class:"mt-2"},null,8,["message"])])):_("",!0),l("div",Y,[o(k,{for:"name",value:"Name"}),o(S,{id:"name",modelValue:t(e).name,"onUpdate:modelValue":i[0]||(i[0]=m=>t(e).name=m),type:"text",class:"mt-1 block w-full",autocomplete:"name"},null,8,["modelValue"]),o(g,{message:t(e).errors.name,class:"mt-2"},null,8,["message"])]),l("div",q,[o(k,{for:"email",value:"Email"}),o(S,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":i[1]||(i[1]=m=>t(e).email=m),type:"email",class:"mt-1 block w-full",autocomplete:"username"},null,8,["modelValue"]),o(g,{message:t(e).errors.email,class:"mt-2"},null,8,["message"]),s.$page.props.jetstream.hasEmailVerification&&c.user.email_verified_at===null?(d(),x("div",G,[l("p",H,[r(" Your email address is unverified. "),o(t(E),{href:s.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",onClick:h($,["prevent"])},{default:a(()=>[r(" Click here to re-send the verification email. ")]),_:1},8,["href","onClick"])]),p(l("div",J," A new verification link has been sent to your email address. ",512),[[v,b.value]])])):_("",!0)])]),actions:a(()=>[o(L,{on:t(e).recentlySuccessful,class:"mr-3"},{default:a(()=>[r(" Saved. ")]),_:1},8,["on"]),o(R,{class:A({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:a(()=>[r(" Save ")]),_:1},8,["class","disabled"])]),_:1}))}};export{ae as default};
