import{u as t,j as e,I as c}from"./Input-DEHNku81.js";import{r as m}from"./index-CsdIBAqE.js";const C=t.h2`
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  text-align: left;
`,w=t.span`
  font-family: Noto Sans KR;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13.76px;
  text-align: left;
  color: rgba(139, 149, 161, 1);
`,b=t.span`
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: rgba(10, 13, 19, 1);
`,L=t.div`
  height: 14px;
  font-family: Noto Sans KR;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13px;
  text-align: left;
  color: rgba(255, 61, 61, 1);
`;function A({message:r}){return e.jsx(L,{children:r})}A.__docgenInfo={description:"",methods:[],displayName:"ErrorMessage",props:{message:{required:!0,tsType:{name:"string"},description:""}}};const V=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,F=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,O=t.div`
  display: flex;
  gap: 10px;
`;function R({cardNumber1:r,cardNumber2:o,cardNumber3:s,cardNumber4:p,inputHandler:a}){const[l,d]=m.useState(""),g=i=>i.length!==0&&!Number.isInteger(Number(i))?(d("숫자만 입력해주세요"),!1):(d(""),!0),N=i=>i.length!==4?(d("네 자리 수를 입력해주세요"),!1):(d(""),!0),u=(i,n)=>g(i)?(a(i,n),!1):!0,x=i=>!N(i);return e.jsxs(V,{children:[e.jsxs("div",{children:[e.jsx(C,{children:"결제할 카드 번호를 입력해 주세요"}),e.jsx(w,{children:"본인 명의의 카드만 결제 가능합니다."})]}),e.jsxs(F,{children:[e.jsx(b,{children:"카드 번호"}),e.jsxs(O,{children:[e.jsx(c,{maxLength:4,placeholder:"1234",onChange:i=>u(i,"cardNumber1"),value:r,onBlur:x}),e.jsx(c,{maxLength:4,placeholder:"1234",onChange:i=>u(i,"cardNumber2"),value:o,onBlur:x}),e.jsx(c,{type:"password",maxLength:4,placeholder:"1234",onChange:i=>u(i,"cardNumber3"),value:s,onBlur:x}),e.jsx(c,{type:"password",maxLength:4,placeholder:"1234",onChange:i=>u(i,"cardNumber4"),value:p,onBlur:x})]}),e.jsx(A,{message:l})]})]})}R.__docgenInfo={description:"",methods:[],displayName:"CardNumbers",props:{cardNumber1:{required:!0,tsType:{name:"string"},description:""},cardNumber2:{required:!0,tsType:{name:"string"},description:""},cardNumber3:{required:!0,tsType:{name:"string"},description:""},cardNumber4:{required:!0,tsType:{name:"string"},description:""},inputHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue: string, inputId: string) => void",signature:{arguments:[{type:{name:"string"},name:"inputValue"},{type:{name:"string"},name:"inputId"}],return:{name:"void"}}},description:""}}};const B=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,H=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,z=t.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;function q({cardExpirationMonth:r,cardExpirationYear:o,inputHandler:s}){const[p,a]=m.useState(""),l=n=>n.length!==0&&!Number.isInteger(Number(n))?(a("숫자만 입력해주세요"),!1):(a(""),!0),d=n=>n.length!==2?(a("두 자리 수를 입력해주세요"),!1):(a(""),!0),g=n=>Number(n)<1||Number(n)>12?(a("1~12월 중 하나를 입력해주세요"),!1):(a(""),!0),N=n=>Number(n)<24?(a("유효한 년도를 입력해주세요"),!1):(a(""),!0),u=(n,Y)=>l(n)?(s(n,Y),!1):!0,x=n=>!d(n)||!g(n),i=n=>!d(n)||!N(n);return e.jsxs(B,{children:[e.jsxs("div",{children:[e.jsx(C,{children:"카드 유효기간을 입력해 주세요"}),e.jsx(w,{children:"월/년도(MMYY)를 순서대로 입력해 주세요."})]}),e.jsxs(H,{children:[e.jsx(b,{children:"유효기간"}),e.jsxs(z,{children:[e.jsx(c,{maxLength:2,placeholder:"MM",onChange:n=>u(n,"cardExpirationMonth"),value:r,onBlur:x}),e.jsx(c,{maxLength:2,placeholder:"YY",onChange:n=>u(n,"cardExpirationYear"),value:o,onBlur:i})]}),e.jsx(A,{message:p})]})]})}q.__docgenInfo={description:"",methods:[],displayName:"CardExpirationDate",props:{cardExpirationMonth:{required:!0,tsType:{name:"string"},description:""},cardExpirationYear:{required:!0,tsType:{name:"string"},description:""},inputHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue: string, inputId: string) => void",signature:{arguments:[{type:{name:"string"},name:"inputValue"},{type:{name:"string"},name:"inputId"}],return:{name:"void"}}},description:""}}};const K=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Q=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,G=t.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;function k({cardOwnerName:r,inputHandler:o}){const[s,p]=m.useState(""),a=l=>{const d=l.toUpperCase(),g=/^[A-Z\s]*$/;return d.length!==0&&!g.test(d)?(p("영문자만 입력해주세요"),!0):(o(d,"cardOwnerName"),p(""),!1)};return e.jsxs(K,{children:[e.jsx(C,{children:"카드 소유자 이름을 입력해 주세요"}),e.jsxs(Q,{children:[e.jsx(b,{children:"소유자 이름"}),e.jsx(G,{children:e.jsx(c,{maxLength:15,placeholder:"JOHN DOE",onChange:l=>a(l),value:r})}),e.jsx(A,{message:s})]})]})}k.__docgenInfo={description:"",methods:[],displayName:"CardOwnerName",props:{cardOwnerName:{required:!0,tsType:{name:"string"},description:""},inputHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue: string, inputId: string) => void",signature:{arguments:[{type:{name:"string"},name:"inputValue"},{type:{name:"string"},name:"inputId"}],return:{name:"void"}}},description:""}}};const T="data:image/png;base64,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",D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAA5CAYAAABK3Rc8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAW/SURBVHgB7ZzPbxRlGMe/78zudndZSgtpxARhWwmkHGh74GQixIsnoHA3FuNRQzV4VIz+A0U8GmHlqmn1ZjS2kOABE9pqwgYEu1QPmA3dbZiW7XZmXp9nym7a0h+7+z5LVeaTTDq7M5m0nz7v8/543ozCMsbHx9tSqdRZ3/f76WMvQtZjwrKsEdd1M93d3bnKl6pycvv2bRZ4KZFIsFC0tLQgGo0iZCWLi4vB8fDhQ5DMKfrq/YMHD47wtUDmE5HDHR0daG9vR0htsFA6NJ2eZqEqm82mKWRHd+3alaYDIfVRKBSQz+cL8/PzXRH6PEDNORTZINySHcdpp35mkILSOhmKNIP7GPJ4wqLz3kgkgpDGicfj/KOXZSIWiyGkcSrBaCFEjFCmIKFMQbas5/Fzueq5lU5DAu3kqucqlcaz5pnI1MUi3IlJlDNXsDh2jUTef+oeu/dwIDXWfxyxkyeg2to2fma5CMxMwLuXgX4wtkJkBbWTlhdIqv1SP9Tek1CxjZ9piqKppO7q6kIzhkcssXThIkpDnwfn9RAbeAPJ8x+S4H0rn0kS/ewF+LeGloTWgbV/AHbPefGo5bn61NSUbprM8sh3mH/v3JpRWCscnfHBd5AgqYw/PQLv+pm6Ja6AotM+NBhIlaKpMlliaegipIj2n0Dygz3wfh+CFGrvKURe+VKk6Vdkirdt58zbKF++Akli+WFYGQ9eH31IQAQ9PQyXcm7k+E2xXCo6NOKIlBaZPOKh5WUPqkQR+ht94UIM7UzB/f41s7SxDDGZSx2NXNNmEj0e4t1e9bNyqNf/A6LomXH4k59AAhGZ3MnMD56DJFZKBzJXY/9FUmUCqYrHIwMaXpkiInP+408hTeKwt+61yC0Io+FefwumGMvkqOTBuCQclS37/XWvc/5UeYjCg349PQITjGU+66isYP8JYSg6s5/BBGOZ7tVrkCa6W296j8V5U7BnZ4JpqUHPbiTTo/m2yQxnLeydftDMa8ESbuqMnv4WjWIm876sSMbeVvu96hGE0fBnJtEoxpEpjb2ztqhk1ALEWWv1qVaMZOriLKRR9ZSjFiHPVuXMepfVakHFao/MfxtGMlevNUqgywr/VYxkbrYa3gieU8fNQitIyzFZODaSaff0QBpvpvbI1CkIo6jU0fjfZCQzQnUbabxC7b+Svx3iWFslk5t55NirkESXaWLzYPPo1HE6pLMMNXG1+xgaxXg6GT/7LqQp3dv819JN2EZqvXAMJhjLjFF9RrpXL9+zgwjdCK8TwigqN38EE0TWMyvVQ0nmfrHXvebtWWrmkljdZ41LwCIyW6jGLZ07OTrXyp0s0e+CLKlOikrz0q9YDSh16Qvx5u78HIG/atzp0gBCtqaqEH39J5EKpZhMFrl9+GvRgbzvKDwajVbzp9stPbakPMm1c6EdHqKlXt4vtGP8hmiEegUF50YHvCNp+C9Cjlh7INLePwApxLcUssjW0R/Ecig/L/nNj7AGRpc2YklAOZKbtqRIpin7MytCtxnkUU4XPErgSOeI56YYPT5O0XQpGFw3BO8z6jlPz7kp949ZRlN3wVVYuHwFC5mv4I5tXi/iiI4ePRps2Noo/3p3L8O/m4H+e2yzR0LRYNzafRTWocGmbCts+i64tVjap/krvEmqHU1RaXV2FmrHDqj2Nlj7KPJIZL2RzAUwPTNBx2Sw3QVlWrCO0TMpJ6rUvmB62OyNr1si8/9KRWa4p12QUKYgoUxBQpmCsMxiuVxGSOO47tI+HUspNbGw0IRq/nNEqVSC1nrM8jzvquPUUxIMWU2hUNAUlBkrHo8PPX78OMevSAipnyfv6sj5vn/V6uzsLJLVU/RlMRRaH/l8nmUWyN9pfotMdSn7zp07vdTuh/kVE62trUgmkwh5GorAIEfO0lSY3x7DIg8cODDB156qC2Sz2QG64U06TSNkPXL8XqO5ublMX19fdcPVP6MXRMIRb+8rAAAAAElFTkSuQmCC",X=t.div`
  width: 212px;
  height: 132px;
  background: rgba(51, 51, 51, 1);
  border-radius: 4px;
  color: rgba(255, 255, 255, 1);
`,W=t.div`
  padding: 8px 12px 0;
  display: flex;
  justify-content: space-between;

  & > div {
    width: 36px;
    height: 22px;
    background: rgba(221, 205, 120, 1);
    border: 0.5px solid rgba(221, 205, 120, 0.1);
    border-radius: 4px;
  }

  & > img {
    width: 36px;
    height: 22px;
  }
`,Z=t.div`
  display: flex;
  flex-direction: column;
  padding: 14px 25px 12px 17px;
  gap: 8px;
`,j=t.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 20px;
  gap: 10px;
`,h=t.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-align: left;
  min-width: 38px;
`,v=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,y=t.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 1);
`;function U({cardInformation:r}){const[o,s]=m.useState("");return m.useEffect(()=>{if(r.cardNumber1[0]==="4"){s(T);return}if(Number(r.cardNumber1.slice(0,2))>=51&&Number(r.cardNumber1.slice(0,2))<=55){s(D);return}s("")},[r.cardNumber1]),e.jsxs(X,{children:[e.jsxs(W,{children:[e.jsx("div",{}),o&&e.jsx("img",{src:o})]}),e.jsxs(Z,{children:[e.jsxs(j,{children:[e.jsx(h,{children:r.cardNumber1}),e.jsx(h,{children:r.cardNumber2}),e.jsx(v,{children:Array.from({length:r.cardNumber3.length}).map((p,a)=>e.jsx(y,{},a))}),e.jsx(v,{children:Array.from({length:r.cardNumber4.length}).map((p,a)=>e.jsx(y,{},a))})]}),e.jsx(j,{children:e.jsxs("div",{children:[e.jsx(h,{children:r.cardExpirationMonth}),r.cardExpirationMonth.length===2&&"/",e.jsx(h,{children:r.cardExpirationYear})]})}),e.jsx(j,{children:e.jsx(h,{children:r.cardOwnerName})})]})]})}U.__docgenInfo={description:"",methods:[],displayName:"CardPreview",props:{cardInformation:{required:!0,tsType:{name:"TCardInformation"},description:""}}};const J=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 77px;
`,_=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 376px;
  padding: 45px 30px;
  gap: 16px;
`;function S(){const[r,o]=m.useState({cardNumber1:"",cardNumber2:"",cardNumber3:"",cardNumber4:"",cardExpirationMonth:"",cardExpirationYear:"",cardOwnerName:""}),s=(p,a)=>{o(l=>({...l,[a]:p}))};return e.jsxs(J,{children:[e.jsx(U,{cardInformation:r}),e.jsxs(_,{children:[e.jsx(R,{cardNumber1:r.cardNumber1,cardNumber2:r.cardNumber2,cardNumber3:r.cardNumber3,cardNumber4:r.cardNumber4,inputHandler:s}),e.jsx(q,{cardExpirationMonth:r.cardExpirationMonth,cardExpirationYear:r.cardExpirationYear,inputHandler:s}),e.jsx(k,{cardOwnerName:r.cardOwnerName,inputHandler:s})]})]})}S.__docgenInfo={description:"",methods:[],displayName:"CardEnrollForm"};function P(){return e.jsx(e.Fragment,{children:e.jsx(S,{})})}P.__docgenInfo={description:"",methods:[],displayName:"App"};const re={title:"App",component:P},f={};var M,E,I;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(I=(E=f.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const ne=["Default"];export{f as Default,ne as __namedExportsOrder,re as default};
