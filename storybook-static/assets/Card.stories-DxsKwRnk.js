import{u as a,j as e}from"./styled-components.browser.esm-BJwir-wm.js";import{r as g}from"./index-CsdIBAqE.js";import{C as m,S as f,a as K}from"./system-B_OG1Cs5.js";import{C as Q}from"./container.style-BJ-iVavo.js";import{C as l}from"./cardCompany-oNsCdPdW.js";const P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAABbCAYAAAB3XrfMAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMFSURBVHgB7dg7axRhFIfxc2Z3J5uYGMVUYhPwAppCsVDBJo1iL/oVRLBRtN5CEBSjhQj6EUJ6jU3QIilMYWEsDGIRwcJEjQlkLzPzOoMI2VxMsvyr+PzKd89u9TA75zUDAGDX8p0Mz87e6ErT7nhP0qq0Qnel2UpKhl0vrpTTVqORht5S49ixn3X3562N5rYVUxFRthj3xRYPJJ5e9eDn8q+ecLdDhl0vBPuSlzIXLBsPofQyWPNTfKBveXCwVl895//+kVo0M7W4L46rRyIPj/Lhc4b/XjAfzYKN1FfCx4WkujQ8XEuK801jmpiolQe6mweqleSaW3QzH9xrwCpZCCP1pHR/fiVeKILaMKa/IfWU0zvmftOATawOqrzRwKH+xv4oywgJW4ryRqrl1A72Ld1b92Sanq717I/ql/I/xjEDtsvtcrT2rCtp9oXMHhuwA/nGd6stpuKp1BNn51n5sVPFpt8WU7xS7wrBrxjQgbaYQpRUPLLjBnSgLaau7qic73pDBnQgMkCEmCBDTJAhJsgQE2SICTLEBBliggwxQYaYIENMkCEmyBATZIgJMsQEGWKCDDFBhpggQ0yQISbIEBNkiAkyxAQZYoIMMUGGmCBDTJAhJsgQE2SICTLEBBliggwxQYaYIENMkCEmyBATZIgJMsQEGWKCDDFBhpggQ0yQISbIEBNkiAkyxAQZYoIMMUGGmCBDTJAhJsgQE2SICTLEBBliggwxQYaYIENMkCEmyBATZIgJMsQEGWKCDDFBhpggsy6mYPbLgA60xdSqlNO8JmJCR9pi6u2NG1HJXxjQgbaYvr5dbIQQxg3oQFtMrz70NxpZfTJ/b5oyYEd8ztcezUxc7632772YvzuNGbBdbpfXbXMnhp8uJ1nrtbs9NGAbQt5KZv5mw3umo6fP/LBK9ICgsJUipChv5fCpU99906EwWvr8/t2AtbLbIdgtA1Yp7iPdw0OvlJ4NDp2cd7+SbnoDXnz4Z6h6Nw1+NpiPGlBwm8yCX1ipN58MDsXfilaK49/uZc1lJ6tUDAAAAABJRU5ErkJggg==",_=""+new URL("Visa-Dn0od9UD.png",import.meta.url).href,X=""+new URL("Mastercard-CJof_f93.png",import.meta.url).href,F=r=>{if(Math.floor(r/10)===m.VISA)return!0},W=r=>{if(m.MASTER.START<=r&&r<=m.MASTER.END)return!0},A=r=>r.length===1?`0${r}`:r;function V({cardInfo:r}){const{cardNumbers:s,expiryDate:t,userName:U,cardCompany:G}=r,z=n=>{const o=parseInt(n.substring(0,2),10);if(F(o))return"visa";if(W(o))return"master"},C=(n=>{if(n.length<2)return;const o=z(n);if(o==="visa")return _;if(o==="master")return X})(s.cardNumber1);return e.jsxs(q,{color:G.color,children:[e.jsxs(O,{children:[e.jsx(x,{src:P}),C&&e.jsx(x,{src:C})]}),e.jsxs(H,{children:[e.jsx(h,{children:s.cardNumber1}),e.jsx(h,{children:s.cardNumber2}),e.jsx(b,{children:f.repeat(s.cardNumber3.length)}),e.jsx(b,{children:f.repeat(s.cardNumber4.length)})]}),e.jsxs(u,{children:[A(t.month),t.year.length>0?K:"",A(t.year)]}),e.jsx(u,{children:U})]})}const q=a(Q)`
  box-sizing: border-box;
  padding: 15px;
  background-color: ${({color:r})=>r||"black"};
`,O=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,x=a.img`
  width: 36px;
  height: 22px;
`,u=a.span`
  display: flex;
  align-items: flex-end;
  height: 30px;
`,H=a(u)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`,h=a.div`
  width: 100px;
  letter-spacing: 3px;
`,b=a.div`
  width: 100px;
  font-size: 11px;
  letter-spacing: 0px;
`;V.__docgenInfo={description:"",methods:[],displayName:"CardFrontView",props:{cardInfo:{required:!0,tsType:{name:"Card"},description:""}}};function R({cvc:r}){return e.jsx(Z,{children:e.jsx($,{children:e.jsx(rr,{children:r})})})}const Z=a(Q)`
  background-color: #d5d5d5;
  position: relative;
`,$=a.div`
  position: absolute;
  top: 60%;
  width: 100%;
  height: 24px;
  background-color: #cbba64;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,rr=a.p`
  font-size: 16px;
  margin-right: 20px;
`;R.__docgenInfo={description:"",methods:[],displayName:"CardBackView",props:{cvc:{required:!0,tsType:{name:"string"},description:""}}};function T({cardInfo:r}){const[s,t]=g.useState(!1);return g.useEffect(()=>{r.cvc&&t(!0),r.cvc.length===3&&t(!1)},[r.cvc]),e.jsxs(er,{showBack:s,children:[e.jsxs(ar,{children:[" ",!s&&e.jsx(V,{cardInfo:r})]}),e.jsxs(sr,{children:[" ",s&&e.jsx(R,{cvc:r.cvc})]})]})}const er=a.div`
  display: inline-grid;
  display: inline-block;
  color: white;
  transition: transform 0.3s;
  transform-style: preserve-3d;
  cursor: pointer;
  transform: ${r=>r.showBack?"rotateY(180deg)":"rotateY(0deg)"};
`,ar=a.div`
  backface-visibility: hidden;
`,sr=a.div`
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;T.__docgenInfo={description:"",methods:[],displayName:"CardView",props:{cardInfo:{required:!0,tsType:{name:"Card"},description:""}}};const tr={cardNumbers:{cardNumber1:"",cardNumber2:"",cardNumber3:"",cardNumber4:""},expiryDate:{month:"",year:""},userName:"",cardCompany:{name:"",color:""},cvc:"",password:""},Y=tr,J={cardNumbers:{cardNumber1:"4123",cardNumber2:"1234",cardNumber3:"1234",cardNumber4:"1234"},expiryDate:{month:"1",year:"1"},userName:"HAILEY CHOI",cardCompany:l[6],cvc:"123",password:"1234"},L={cardNumbers:{cardNumber1:"5123",cardNumber2:"1234",cardNumber3:"1234",cardNumber4:"1234"},expiryDate:{month:"12",year:"30"},userName:"HAILEY CHOI",cardCompany:l[4],cvc:"123",password:"1234"},or={cardNumbers:{cardNumber1:"5123",cardNumber2:"1234",cardNumber3:"1234",cardNumber4:"1234"},expiryDate:{month:"12",year:"30"},userName:"HAILEY CHOI",cardCompany:l[4],cvc:"21",password:""},ur={title:"CardView",component:T,tags:["autodocs"],argTypes:{cardInfo:{options:["Default","Visa","Master"],mapping:{Default:Y,Visa:J,Master:L}}}},c={args:{cardInfo:Y}},i={args:{cardInfo:J}},d={args:{cardInfo:L}},p={args:{cardInfo:or}};var I,N,y;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    cardInfo: mockDefaultCardInfo
  }
}`,...(y=(N=c.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var B,E,w;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    cardInfo: mockVisaCardInfo
  }
}`,...(w=(E=i.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var D,M,v;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    cardInfo: mockMasterCardInfo
  }
}`,...(v=(M=d.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var j,S,k;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    cardInfo: mockCVCcardInfo
  }
}`,...(k=(S=p.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const lr=["Default","Visa","Master","CARD_BACK_VIEW"];export{p as CARD_BACK_VIEW,c as Default,d as Master,i as Visa,lr as __namedExportsOrder,ur as default};
