import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{d as c}from"./styled-components.browser.esm-B8VVjnHA.js";function g({placeholder:e,isError:i,value:u,name:o,type:r,onChange:n,onBlur:s}){const p=d=>{const{value:t,name:a}=d.target;if(r==="number"){const m=t.replace(/[^0-9]/g,"");return n({value:m,name:a})}return n({value:t,name:a})};return l.jsx(v,{placeholder:e,value:u,inputMode:r==="number"?"numeric":"text",$isError:i??!1,onChange:p,name:o,type:"text",onBlur:s})}const v=c.input`
  width: 100%;
  height: 32px;
  border: 1px solid;
  border-radius: 2px;
  padding: 8px;
  box-sizing: border-box;
  border-color: ${e=>e.$isError?"red":"#acacac"};

  &:focus {
    outline: none;
    border-color: ${e=>e.$isError?"red":"black"};
  }

  &::placeholder {
    font-weight: 400;
    font-size: 11px;
    color: #acacac;
  }
`;g.__docgenInfo={description:"",methods:[],displayName:"Input",props:{placeholder:{required:!0,tsType:{name:"string"},description:""},isError:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'text' | 'number'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'number'"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"({ name, value }: { name: string; value: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ name: string; value: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},name:""}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent) => void",signature:{arguments:[{type:{name:"ChangeEvent"},name:"e"}],return:{name:"void"}}},description:""}}};export{g as I};
