import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as n}from"./styled-components.browser.esm-B8VVjnHA.js";function p({cardNumber:r,expirationDate:i}){return e.jsxs(s,{children:[e.jsxs(x,{children:[e.jsx(t,{children:e.jsx(a,{children:r.cardNumberPart1})}),e.jsx(t,{children:e.jsx(a,{children:r.cardNumberPart2})}),e.jsx(t,{children:Array.from({length:r.cardNumberPart3.length},()=>e.jsx(d,{}))}),e.jsx(t,{children:Array.from({length:r.cardNumberPart4.length},()=>e.jsx(d,{}))})]}),e.jsx(t,{children:e.jsxs(a,{children:[i.expirationDatePart1,"/",i.expirationDatePart2]})})]})}const s=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,x=n.div`
  display: flex;
  gap: 10px;
`,t=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 34px;
  min-height: 20px;
  border-bottom: 1px solid white;
`,a=n.p`
  font-family: Inter;
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  vertical-align: center;
  color: white;
`,d=n.div`
  width: 4px;
  height: 4px;
  background-color: white;
  border-radius: 50%;
`;p.__docgenInfo={description:"",methods:[],displayName:"CardInfoBox",props:{cardNumber:{required:!0,tsType:{name:"Record",elements:[{name:"unknown[number]",raw:"(typeof CARD_NUMBER_INPUT_TYPE)[number]"},{name:"string"}],raw:"Record<CardNumberInputType, string>"},description:""},expirationDate:{required:!0,tsType:{name:"Record",elements:[{name:"unknown[number]",raw:"(typeof EXPIRATION_DATE_INPUT_TYPE)[number]"},{name:"string"}],raw:"Record<ExpirationDateInputType, string>"},description:""}}};function c({cardNumberInputValue:r,expirationDateInputValue:i,cardType:o}){return e.jsxs(u,{children:[e.jsx(l,{}),e.jsx(m,{src:`./img/${o}.png`,$cardType:o}),e.jsx(p,{cardNumber:r,expirationDate:i})]})}const u=n.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 44px;
  margin: 40px 0px;
  width: 212px;
  height: 132px;
  background: #333333;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px #00000040;
  box-sizing: border-box;
`,l=n.div`
  position: absolute;
  width: 36px;
  height: 22px;
  top: 8px;
  left: 12px;
  border-radius: 4px;
  background: #ddcd78;
`,m=n.img`
  visibility: ${r=>r.$cardType===null?"hidden":"visible"};
  position: absolute;
  width: 36px;
  height: 22px;
  top: 8px;
  right: 12px;
`;c.__docgenInfo={description:"",methods:[],displayName:"CardPreview",props:{cardNumberInputValue:{required:!0,tsType:{name:"Record",elements:[{name:"unknown[number]",raw:"(typeof CARD_NUMBER_INPUT_TYPE)[number]"},{name:"string"}],raw:"Record<CardNumberInputType, string>"},description:""},expirationDateInputValue:{required:!0,tsType:{name:"Record",elements:[{name:"unknown[number]",raw:"(typeof EXPIRATION_DATE_INPUT_TYPE)[number]"},{name:"string"}],raw:"Record<ExpirationDateInputType, string>"},description:""},cardType:{required:!0,tsType:{name:"union",raw:"'visa' | 'master' | null",elements:[{name:"literal",value:"'visa'"},{name:"literal",value:"'master'"},{name:"null"}]},description:""}}};export{c as C};
