import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{B as u}from"./BaseInputField-DmkNwW-m.js";import{I as f}from"./Input-Cb4POsrH.js";import{r as t}from"./index-D4lIrffr.js";import"./styled-components.browser.esm-B8VVjnHA.js";const B={component:u,tags:["autodocs"]},r={args:{label:"BaseInputField",errorMessage:""},render:function(e){const[o,n]=t.useState(!1);return t.useEffect(()=>{e.errorMessage!==void 0&&n(!!e.errorMessage.length)},[e.errorMessage]),a.jsx(u,{...e,children:a.jsx(f,{placeholder:"1234",isError:o,value:"",name:"inputName",type:"text",onChange:()=>{}})})}},s={args:{label:"BaseInputField",errorMessage:"errorMessage"},render:function(e){const[o,n]=t.useState(!1);return t.useEffect(()=>{e.errorMessage!==void 0&&n(!!e.errorMessage.length)},[e.errorMessage]),a.jsx(u,{...e,children:a.jsx(f,{placeholder:"1234",isError:o,value:"",name:"inputName",type:"text",onChange:()=>{}})})}};var l,i,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'BaseInputField',
    errorMessage: ''
  },
  render: function Render(args) {
    const [isError, setIsError] = useState(false);
    useEffect(() => {
      if (args.errorMessage !== undefined) setIsError(args.errorMessage.length ? true : false);
    }, [args.errorMessage]);
    return <BaseInputField {...args} children={<Input placeholder="1234" isError={isError} value="" name="inputName" type="text" onChange={() => {}} />} />;
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,d,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'BaseInputField',
    errorMessage: 'errorMessage'
  },
  render: function Render(args) {
    const [isError, setIsError] = useState(false);
    useEffect(() => {
      if (args.errorMessage !== undefined) setIsError(args.errorMessage.length ? true : false);
    }, [args.errorMessage]);
    return <BaseInputField {...args} children={<Input placeholder="1234" isError={isError} value="" name="inputName" type="text" onChange={() => {}} />} />;
  }
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const F=["Default","Error"];export{r as Default,s as Error,F as __namedExportsOrder,B as default};
