import{j as n}from"./jsx-runtime-BnIj46N_.js";import{u as s}from"./styled-components.browser.esm-BDDUX98t.js";const o=s.input`
  width: 100%;
  height: 16px;
  padding: 8px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #acacac;

  ${e=>e.isError&&`
    border-color: red;
  `}
`,p=({value:e,maxLength:t,placeholder:r,isError:a,onChange:i})=>n.jsx(n.Fragment,{children:n.jsx(o,{type:"text",value:e,maxLength:t,placeholder:r,isError:a,onChange:i})});p.__docgenInfo={description:"",methods:[],displayName:"Input",props:{value:{required:!1,tsType:{name:"string"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},isError:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};export{p as I};
