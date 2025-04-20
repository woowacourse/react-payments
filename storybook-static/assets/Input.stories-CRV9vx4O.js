import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as u}from"./Input-Cb4POsrH.js";import{r as S}from"./index-D4lIrffr.js";import"./styled-components.browser.esm-B8VVjnHA.js";const h={component:u,tags:["autodocs"]},e={args:{placeholder:"defaultStatus",isError:!1,name:"inputName",type:"text",value:"inputValue"},render:function(r){const[n,a]=S.useState("");return i.jsx(u,{...r,value:n,onChange:({value:s})=>a(s)})}},t={args:{placeholder:"errorStatus",isError:!0,name:"inputName",type:"text",value:"inputValue"},render:function(r){const[n,a]=S.useState("");return i.jsx(u,{...r,value:n,onChange:({value:s})=>a(s)})}};var o,l,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    placeholder: 'defaultStatus',
    isError: false,
    name: 'inputName',
    type: 'text',
    value: 'inputValue'
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('');
    return <Input {...args} value={selected} onChange={({
      value
    }) => setSelected(value)} />;
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'errorStatus',
    isError: true,
    name: 'inputName',
    type: 'text',
    value: 'inputValue'
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('');
    return <Input {...args} value={selected} onChange={({
      value
    }) => setSelected(value)} />;
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const R=["Default","Error"];export{e as Default,t as Error,R as __namedExportsOrder,h as default};
