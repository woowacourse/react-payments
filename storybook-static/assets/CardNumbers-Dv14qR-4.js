import{j as t}from"./jsx-runtime-BnIj46N_.js";import{u as i}from"./styled-components.browser.esm-BDDUX98t.js";const o=i.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  div {
    width: 34px;
  }
`,m="•",u={MASTERCARD:{NAME:"MasterCard",MIN_NUMBER:51,MAX_NUMBER:55},VISA:{NAME:"Visa",MIN_NUMBER:40,MAX_NUMBER:49}},p=({cardNumbers:n})=>t.jsx(o,{children:n.map((e,s)=>{const r=e!==0&&!Number.isNaN(e),a=r?m.repeat(e.toString().length):null;return t.jsx("div",{children:s>1?a:r&&e},s)})});p.__docgenInfo={description:"",methods:[],displayName:"CardNumbers",props:{cardNumbers:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};export{p as C,u as a};
