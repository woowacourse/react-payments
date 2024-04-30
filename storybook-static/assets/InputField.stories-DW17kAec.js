import{u as f,j as p}from"./styled-components.browser.esm-BJwir-wm.js";import{c as z,I as $,a as t}from"./Input-CshbQXQq.js";import{F as J}from"./FieldTitle-Bs0A6U58.js";import{F as K}from"./container.style-BJ-iVavo.js";import{r as E}from"./index-CsdIBAqE.js";import{a as x}from"./chunk-MZXVCX43-DWuJqIWT.js";import"./system-B_OG1Cs5.js";import"./v4-D8aEg3BZ.js";const Q=({inputTypes:r,handleComplete:a})=>{const[e,I]=E.useState({}),[n,_]=E.useState({});E.useEffect(()=>{N()?a(!0):a(!1)},[n]);const N=()=>!!(Object.keys(e).length===r.inputInfo.length&&Object.values(n).every(u=>u==="")&&Object.values(e).every((u,s)=>z(u,r.inputInfo[s].minLength)));return{values:e,errorMessages:n,updateInputValue:(u,s)=>{I(d=>({...d,[u]:s}))},updateErrorMessage:(u,s)=>{_(d=>({...d,[u]:s}))}}},Z=({inputTypes:r,handleNext:a})=>{const e=E.useRef([]);return E.useEffect(()=>{e.current[0]&&e.current[0].focus()},[]),{inputRefs:e,handleInputNext:n=>{n<r.inputInfo.length-1&&e.current&&e.current[n+1].focus(),n===r.inputInfo.length-1&&a()}}};function G({title:r,subtitle:a,inputTypes:e,handleInput:I,handleNext:n,handleComplete:_}){const{values:N,errorMessages:T,updateInputValue:y,updateErrorMessage:u}=Q({inputTypes:e,handleComplete:_}),{inputRefs:s,handleInputNext:d}=Z({inputTypes:e,handleNext:n});return p.jsxs(K,{children:[p.jsx(J,{title:r,subtitle:a}),p.jsx(ee,{children:e.inputLabel}),p.jsx(te,{children:e.inputInfo.map((c,m)=>p.jsx($,{ref:o=>s.current[m]=o,info:c,handleInput:o=>{y(c.property,o),I({...N,[c.property]:o})},isError:!!T[m],handleErrorMessage:o=>u(m,o),onNext:()=>d(m)},m))}),p.jsx(ne,{children:Object.values(T).find(c=>c!=="")})]})}const ee=f.p`
  color: var(--Text, #0a0d13);
  font-size: 12px;
  margin-bottom: 8px;
`,te=f.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 8px;
`,ne=f.div`
  color: red;
  font-size: 9.5px;
`;G.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},inputTypes:{required:!0,tsType:{name:"InputType"},description:""},handleInput:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: Record<string, string>) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},name:"value"}],return:{name:"void"}}},description:""},handleNext:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handleComplete:{required:!0,tsType:{name:"signature",type:"function",raw:"(isComplete: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isComplete"}],return:{name:"void"}}},description:""}}};const ie={title:"InputField",component:G,tags:["autodocs"],argTypes:{inputTypes:{options:["CARD_NUMBER","EXPIRY_DATE","USER_NAME","CVC","PASSWORD"],mapping:{CARD_NUMBER:t.CARD_NUMBER,EXPIRY_DATE:t.EXPIRY_DATE,USER_NAME:t.USER_NAME,CVC:t.CVC,PASSWORD:t.PASSWORD}}}},l=x("handleInput"),C=x("handleNext"),i=x("handleComplete"),h={args:{title:"기본 입력 필드 제목",subtitle:"기본 입력 필드 부제목",inputTypes:{inputLabel:"기본 입력 필드",inputInfo:Array.from({length:1},(r,a)=>({property:`기본 ${a+1}`,validateType:"기본 타입",maxLength:10,minLength:3,placeHolder:"기본 입력 필드 플레이스홀더",error:"기본 입력 필드 에러 메시지"}))},handleInput:l,handleNext:C,handleComplete:i}},D={args:{title:"결제할 카드 번호를 입력해 주세요",subtitle:"본인 명의의 카드만 결제 가능합니다.",inputTypes:t.CARD_NUMBER,handleInput:l,handleNext:C,handleComplete:i}},B={args:{title:"카드 유효기간을 입력해 주세요",subtitle:"월/년도(MMYY)를 순서대로 입력해 주세요.",inputTypes:t.EXPIRY_DATE,handleInput:l,handleNext:C,handleComplete:i}},g={args:{title:"카드 소유자 이름을 입력해 주세요",inputTypes:t.USER_NAME,handleInput:l,handleNext:C,handleComplete:i}},A={args:{title:"CVC 번호를 입력해 주세요",inputTypes:t.CVC,handleInput:l,handleNext:C,handleComplete:i}},R={args:{title:"비밀번호를 입력해 주세요",inputTypes:t.PASSWORD,handleInput:l,handleNext:C,handleComplete:i}};var S,F,P;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: '기본 입력 필드 제목',
    subtitle: '기본 입력 필드 부제목',
    inputTypes: {
      inputLabel: '기본 입력 필드',
      inputInfo: Array.from({
        length: 1
      }, (_, index) => ({
        property: \`기본 \${index + 1}\`,
        validateType: '기본 타입',
        maxLength: 10,
        minLength: 3,
        placeHolder: '기본 입력 필드 플레이스홀더',
        error: '기본 입력 필드 에러 메시지'
      }))
    },
    handleInput: mockHandleInput,
    handleNext: mockHandleNext,
    handleComplete: mockHandleComplete
  }
}`,...(P=(F=h.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var M,k,H;D.parameters={...D.parameters,docs:{...(M=D.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: '결제할 카드 번호를 입력해 주세요',
    subtitle: '본인 명의의 카드만 결제 가능합니다.',
    inputTypes: INPUT_TYPE_CATEGORIES.CARD_NUMBER,
    handleInput: mockHandleInput,
    handleNext: mockHandleNext,
    handleComplete: mockHandleComplete
  }
}`,...(H=(k=D.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var b,L,U;B.parameters={...B.parameters,docs:{...(b=B.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: '카드 유효기간을 입력해 주세요',
    subtitle: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    inputTypes: INPUT_TYPE_CATEGORIES.EXPIRY_DATE,
    handleInput: mockHandleInput,
    handleNext: mockHandleNext,
    handleComplete: mockHandleComplete
  }
}`,...(U=(L=B.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var v,O,Y;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: '카드 소유자 이름을 입력해 주세요',
    inputTypes: INPUT_TYPE_CATEGORIES.USER_NAME,
    handleInput: mockHandleInput,
    handleNext: mockHandleNext,
    handleComplete: mockHandleComplete
  }
}`,...(Y=(O=g.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var j,V,W;A.parameters={...A.parameters,docs:{...(j=A.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'CVC 번호를 입력해 주세요',
    inputTypes: INPUT_TYPE_CATEGORIES.CVC,
    handleInput: mockHandleInput,
    handleNext: mockHandleNext,
    handleComplete: mockHandleComplete
  }
}`,...(W=(V=A.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,q,w;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    title: '비밀번호를 입력해 주세요',
    inputTypes: INPUT_TYPE_CATEGORIES.PASSWORD,
    handleInput: mockHandleInput,
    handleNext: mockHandleNext,
    handleComplete: mockHandleComplete
  }
}`,...(w=(q=R.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const de=["Default","CARD_NUMBER_FIELD","EXPIRY_DATE_FIELD","USER_NAME_FIELD","CVC_FIELD","PASSWORD_FIELD"];export{D as CARD_NUMBER_FIELD,A as CVC_FIELD,h as Default,B as EXPIRY_DATE_FIELD,R as PASSWORD_FIELD,g as USER_NAME_FIELD,de as __namedExportsOrder,ie as default};
