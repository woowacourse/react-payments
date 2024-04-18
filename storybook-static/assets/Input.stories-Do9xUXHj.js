import{I as o,j as a}from"./Input-DEHNku81.js";import{r as y}from"./index-CsdIBAqE.js";const f={component:o},e={args:{placeholder:"1234",maxLength:4,type:"string"},argTypes:{maxLength:{options:[4,2],control:{type:"radio"}},type:{options:["string","number"],control:{type:"radio"}}},render:({...n})=>a.jsx(o,{...n})},x=({...n})=>{const[g,m]=y.useState(""),d=t=>(m(t),!1),h=t=>t.length<4;return a.jsx(o,{type:n.type,maxLength:n.maxLength,placeholder:n.placeholder,onChange:d,onBlur:h,value:g})},r={args:{type:"string",maxLength:4,placeholder:"1234"},argTypes:{type:{options:["string","number"],control:{type:"radio"}},maxLength:{options:[4,2],control:{type:"radio"}}},render:({...n})=>a.jsx(x,{...n})};var s,p,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    placeholder: "1234",
    maxLength: 4,
    type: "string"
  },
  argTypes: {
    maxLength: {
      options: [4, 2],
      control: {
        type: "radio"
      }
    },
    type: {
      options: ["string", "number"],
      control: {
        type: "radio"
      }
    }
  },
  render: ({
    ...args
  }) => <Input {...args} />
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var i,l,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: "string",
    maxLength: 4,
    placeholder: "1234"
  },
  argTypes: {
    type: {
      options: ["string", "number"],
      control: {
        type: "radio"
      }
    },
    maxLength: {
      options: [4, 2],
      control: {
        type: "radio"
      }
    }
  },
  render: ({
    ...args
  }) => <InputWithHooks {...args} />
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const b=["DefaultInput","NumberInput"];export{e as DefaultInput,r as NumberInput,b as __namedExportsOrder,f as default};
