import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d}from"./styled-components.browser.esm-B8VVjnHA.js";import{C as A}from"./CardPreview-CALqVTsO.js";import{r as u}from"./index-D4lIrffr.js";import{B as C}from"./BaseInputField-DmkNwW-m.js";import{I as y}from"./Input-Cb4POsrH.js";const j={noneCardType:"유효하지 않은 카드 번호입니다. 카드 번호를 확인해주세요",shortCardSegment:"카드 번호는 4자리씩 입력해주세요."},h=["cardNumberPart1","cardNumberPart2","cardNumberPart3","cardNumberPart4"],v={expirationDatePart1:"MM",expirationDatePart2:"YY"},q=["expirationDatePart1","expirationDatePart2"];function N({inputValue:i,setInputValue:s,cardType:o,setCardType:p}){const[t,n]=u.useState({cardNumberPart1:[],cardNumberPart2:[],cardNumberPart3:[],cardNumberPart4:[]}),[c,g]=u.useState(""),I=(e,a)=>{const l=t[e];if(a.isError){const x=new Set(l);x.add(a.errorType),n(m=>({...m,[e]:Array.from(x)}))}else{const x=l.filter(m=>m!==a.errorType);n(m=>({...m,[e]:x}))}},R=e=>{if(e.length<=2)e[0]==="4"?p("visa"):e>="51"&&e<="55"?p("master"):p(null);else if(o===null)return!0;return!1},D=({name:e,value:a})=>{if(a.length<=4){if(e===h[0]){const l=R(a);I(h[0],{errorType:"noneCardType",isError:l})}s(l=>({...l,[e]:a}))}},w=e=>{const{value:a,name:l}=e.target;I(l,{errorType:"shortCardSegment",isError:a.length>0&&a.length<4})};return u.useEffect(()=>{const e=Object.values(t).find(a=>a.length);e&&(e==null?void 0:e.length)!==0?g(j[e[0]]):g("")},[t]),r.jsx(C,{label:"카드 번호",errorMessage:c,children:h.map(e=>r.jsx(y,{type:"number",placeholder:"1234",value:i[e],onChange:D,onBlur:w,name:e,isError:!!t[e].length},e))})}N.__docgenInfo={description:"",methods:[],displayName:"CardNumberInputField",props:{inputValue:{required:!0,tsType:{name:"Record",elements:[{name:"unknown[number]",raw:"(typeof CARD_NUMBER_INPUT_TYPE)[number]"},{name:"string"}],raw:"Record<CardNumberInputType, string>"},description:""},setInputValue:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Record",elements:[{name:"unknown[number]",raw:"(typeof CARD_NUMBER_INPUT_TYPE)[number]"},{name:"string"}],raw:"Record<CardNumberInputType, string>"}],raw:"SetStateAction<Record<CardNumberInputType, string>>"}],raw:"Dispatch<SetStateAction<Record<CardNumberInputType, string>>>"},description:""},cardType:{required:!0,tsType:{name:"union",raw:"'visa' | 'master' | null",elements:[{name:"literal",value:"'visa'"},{name:"literal",value:"'master'"},{name:"null"}]},description:""},setCardType:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"union",raw:"'visa' | 'master' | null",elements:[{name:"literal",value:"'visa'"},{name:"literal",value:"'master'"},{name:"null"}]}],raw:"SetStateAction<CardType>"}],raw:"Dispatch<SetStateAction<CardType>>"},description:""}}};function f({title:i,caption:s,children:o}){return r.jsxs(Y,{children:[r.jsxs(M,{children:[r.jsx(U,{children:i}),r.jsx(O,{children:s})]}),o]})}const Y=d.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`,M=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,U=d.p`
  font-weight: 700;
  font-size: 18px;
`,O=d.p`
  font-weight: 400;
  font-size: 9.5px;
  color: #8b95a1;
`;f.__docgenInfo={description:"",methods:[],displayName:"InputSection",props:{title:{required:!0,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function S({inputValue:i,setInputValue:s}){const o=({name:t,value:n})=>{if(n.length<=2){if(t==="expirationDatePart1"&&Number(n)>12)return;s(c=>({...c,[t]:n}))}},p=t=>{const{value:n,name:c}=t.target;n.length===1&&s({...i,[c]:`0${n}`})};return r.jsx(C,{label:"유효기간",children:q.map(t=>r.jsx(y,{type:"number",placeholder:v[t],value:i[t],onChange:o,name:t,onBlur:p},t))})}S.__docgenInfo={description:"",methods:[],displayName:"ExpirationDateInputField",props:{inputValue:{required:!0,tsType:{name:"Record",elements:[{name:"unknown[number]",raw:"(typeof EXPIRATION_DATE_INPUT_TYPE)[number]"},{name:"string"}],raw:"Record<ExpirationDateInputType, string>"},description:""},setInputValue:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Record",elements:[{name:"unknown[number]",raw:"(typeof EXPIRATION_DATE_INPUT_TYPE)[number]"},{name:"string"}],raw:"Record<ExpirationDateInputType, string>"}],raw:"SetStateAction<Record<ExpirationDateInputType, string>>"}],raw:`Dispatch<
  SetStateAction<Record<ExpirationDateInputType, string>>
>`},description:""}}};function _({inputValue:i,setInputValue:s}){const o=({name:p,value:t})=>{t.length<=3&&s(n=>({...n,[p]:t}))};return r.jsx(C,{label:"CVC",children:r.jsx(y,{type:"number",placeholder:"123",value:i.CVCPart1,onChange:o,name:"CVCPart1"})})}_.__docgenInfo={description:"",methods:[],displayName:"CVCInputField",props:{inputValue:{required:!0,tsType:{name:"Record",elements:[{name:"literal",value:"'CVCPart1'"},{name:"string"}],raw:"Record<CVCInputValueType, string>"},description:""},setInputValue:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Record",elements:[{name:"literal",value:"'CVCPart1'"},{name:"string"}],raw:"Record<CVCInputValueType, string>"}],raw:"SetStateAction<Record<CVCInputValueType, string>>"}],raw:"Dispatch<SetStateAction<Record<CVCInputValueType, string>>>"},description:""}}};function V(){const[i,s]=u.useState({cardNumberPart1:"",cardNumberPart2:"",cardNumberPart3:"",cardNumberPart4:""}),[o,p]=u.useState({expirationDatePart1:"",expirationDatePart2:""}),[t,n]=u.useState({CVCPart1:""}),[c,g]=u.useState(null);return r.jsx(B,{children:r.jsxs(F,{children:[r.jsx(A,{cardNumberInputValue:i,expirationDateInputValue:o,cardType:c}),r.jsx(f,{title:"결제할 카드 번호를 입력해 주세요",caption:"본인 명의의 카드만 결제 가능합니다.",children:r.jsx(N,{inputValue:i,setInputValue:s,cardType:c,setCardType:g})}),r.jsx(f,{title:"카드 유효기간을 입력해 주세요",caption:"월/년도(MMYY)를 순서대로 입력해 주세요.",children:r.jsx(S,{inputValue:o,setInputValue:p})}),r.jsx(f,{title:"CVC 번호를 입력해 주세요",children:r.jsx(_,{inputValue:t,setInputValue:n})})]})})}const B=d.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,F=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  padding: 44px 28px;
  align-items: center;
  width: 376px;
  min-height: 100%;
  background-color: white;
  border: 1px solid lightgray;
`;V.__docgenInfo={description:"",methods:[],displayName:"App"};const W={title:"App",component:V},T={};var P,E,b;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:"{}",...(b=(E=T.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const $=["Default"];export{T as Default,$ as __namedExportsOrder,W as default};
