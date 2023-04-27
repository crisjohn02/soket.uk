import{_ as p}from"./AppLayout-75b21f98.js";import c from"./DeleteUserForm-56450577.js";import l from"./LogoutOtherBrowserSessionsForm-c8903df4.js";import{S as s}from"./SectionBorder-6e3dc660.js";import f from"./TwoFactorAuthenticationForm-a431f037.js";import u from"./UpdatePasswordForm-8de8b0ce.js";import d from"./UpdateProfileInformationForm-3e028910.js";import{c as _,w as n,o,a as i,d as r,b as t,e as a,F as h}from"./app-da2f7037.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ActionSection-b1b6ee9f.js";import"./SectionTitle-9cad67ec.js";import"./DangerButton-ec50ca8f.js";import"./DialogModal-ef57216b.js";import"./Modal-6d6cea12.js";import"./TextInput-5b65efbb.js";import"./SecondaryButton-c367d4da.js";import"./ActionMessage-74c5f52d.js";import"./PrimaryButton-86053f0e.js";import"./InputLabel-d1e655ef.js";import"./FormSection-c132e08f.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},k={key:0},w={key:1},y={key:2},H={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",k,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",w,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{H as default};
