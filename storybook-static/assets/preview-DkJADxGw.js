import{d as O}from"./index-DrFu-skq.js";import{R as r}from"./index-D4lIrffr.js";import{f as S}from"./styled-components.browser.esm-B8VVjnHA.js";const{useParameter:v,addons:P,useEffect:H,useMemo:I,definePreview:j}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:y}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var N=Object.defineProperty,u=(e,t)=>{for(var a in t)N(e,a,{get:t[a],enumerable:!0})},b={};u(b,{initialGlobals:()=>M});var o="themes",K=`storybook/${o}`,h="theme",E={},L={REGISTER_THEMES:`${K}/REGISTER_THEMES`},M={[h]:""},g={};u(g,{initializeThemeState:()=>T,pluckThemeFromContext:()=>p,useThemeParameters:()=>w});function p({globals:e}){return e[h]||""}function w(e){return y(O`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),e?e.parameters[o]??E:v(o,E)}function T(e,t){P.getChannel().emit(L.REGISTER_THEMES,{defaultTheme:t,themes:e})}var A=([e,t])=>t,D=({Provider:e,GlobalStyles:t,defaultTheme:a,themes:n={}})=>{let m=Object.keys(n),s=a||m[0];return T(m,s),(l,i)=>{let{themeOverride:c}=i.parameters[o]??{},_=p(i),d=I(()=>{let R=c||_||s,f=Object.entries(n);return f.length===1?A(f[0]):n[R]},[_,c]);return e?r.createElement(e,{theme:d},t&&r.createElement(t,null),l()):r.createElement(r.Fragment,null,t&&r.createElement(t,null),l())}};const G=""+new URL("NotoSansKR-VariableFont_wght-DJ9_UJ_L.ttf",import.meta.url).href,F=""+new URL("Inter-VariableFont_opsz_wght-c8O0ljhh.ttf",import.meta.url).href,k=S`
  body {
    font-family : "NotoSansKR";
  }
  
  @font-face {
    font-family: 'NotoSansKR';
    src: local('NotoSansKR');
    font-style: normal;
    src: url(${G}) format('truetype');
  }
  
  @font-face {
    font-family: 'Inter';
    src: local('Inter');
    font-style: normal;
    src: url(${F}) format('truetype');
  }
  
  `,C={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[D({GlobalStyles:k})]};export{C as default};
