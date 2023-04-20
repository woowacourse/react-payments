/*! For license information please see components-CardOwnerName-CardOwnerName-stories.b9a4f356.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_payments=self.webpackChunkreact_payments||[]).push([[719],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./src/components/CardOwnerName/CardOwnerName.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardOwnerNameStory:function(){return CardOwnerNameStory},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return CardOwnerName_stories}});var _templateObject,_templateObject2,_CardOwnerNameStory$p,_CardOwnerNameStory$p2,_CardOwnerNameStory$p3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react=__webpack_require__("./node_modules/react/index.js"),CardInput=__webpack_require__("./src/components/CardInput/CardInput.tsx"),CardLabel=__webpack_require__("./src/components/CardLabel/CardLabel.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Wrapper=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #ecebf1;\n  border-radius: 7px;\n  margin-bottom: 20px;\n"]))),LabelContainer=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),CardOwnerName=function CardOwnerName(_ref){var _nameRef$current,cardOwnerName=_ref.cardOwnerName,setCardOwnerName=_ref.setCardOwnerName,nameRef=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(LabelContainer,{children:[(0,jsx_runtime.jsx)(CardLabel.Z,{labelText:"카드 소유자 이름(선택)"}),(0,jsx_runtime.jsx)(CardLabel.Z,{labelText:"".concat((null===(_nameRef$current=nameRef.current)||void 0===_nameRef$current?void 0:_nameRef$current.value.length)||0," / 30")})]}),(0,jsx_runtime.jsx)(Wrapper,{children:(0,jsx_runtime.jsx)(CardInput.Z,{type:"text",maxLength:30,ref:nameRef,onChange:function handleCardInputChange(e){e.target instanceof HTMLInputElement&&(0===e.target.value.length&&setCardOwnerName(""),/[A-Za-z\s]+$/.test(e.target.value)&&setCardOwnerName(e.target.value.toUpperCase()))},value:cardOwnerName,placeholder:"카드에 표시된 영어 이름을 입력하세요."})})]})},CardOwnerName_CardOwnerName=CardOwnerName;try{CardOwnerName.displayName="CardOwnerName",CardOwnerName.__docgenInfo={description:"",displayName:"CardOwnerName",props:{cardOwnerName:{defaultValue:null,description:"",name:"cardOwnerName",required:!0,type:{name:"string"}},setCardOwnerName:{defaultValue:null,description:"",name:"setCardOwnerName",required:!0,type:{name:"Dispatch<SetStateAction<string>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CardOwnerName/CardOwnerName.tsx#CardOwnerName"]={docgenInfo:CardOwnerName.__docgenInfo,name:"CardOwnerName",path:"src/components/CardOwnerName/CardOwnerName.tsx#CardOwnerName"})}catch(__react_docgen_typescript_loader_error){}var CardOwnerName_stories={component:CardOwnerName_CardOwnerName,title:"Section/CardOwnerName"},CardOwnerNameStory={args:{cardOwnerName:"NAME"}};CardOwnerNameStory.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},CardOwnerNameStory.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_CardOwnerNameStory$p=CardOwnerNameStory.parameters)||void 0===_CardOwnerNameStory$p?void 0:_CardOwnerNameStory$p.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    cardOwnerName: 'NAME'\n  }\n}"},null===(_CardOwnerNameStory$p2=CardOwnerNameStory.parameters)||void 0===_CardOwnerNameStory$p2||null===(_CardOwnerNameStory$p3=_CardOwnerNameStory$p2.docs)||void 0===_CardOwnerNameStory$p3?void 0:_CardOwnerNameStory$p3.source)})});var __namedExportsOrder=["CardOwnerNameStory"]},"./src/components/CardInput/CardInput.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_Users_semny_Documents_VSCode_Woowacourse_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Input=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.input(_templateObject||(_templateObject=(0,_Users_semny_Documents_VSCode_Woowacourse_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  width: fill-available;\n  height: 45px;\n  text-align: center;\n"]))),CardInput=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,ref){var type=_ref.type,maxLength=_ref.maxLength,placeholder=_ref.placeholder,onChange=_ref.onChange,value=_ref.value,order=_ref.order,required=_ref.required,autofocus=_ref.autofocus;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Input,{type:type,maxLength:maxLength,placeholder:placeholder,required:required,ref:ref,onChange:onChange,value:value,"data-order":order,autoFocus:autofocus})}));__webpack_exports__.Z=CardInput;try{CardInput.displayName="CardInput",CardInput.__docgenInfo={description:"",displayName:"CardInput",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"number"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},autofocus:{defaultValue:null,description:"",name:"autofocus",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CardInput/CardInput.tsx#CardInput"]={docgenInfo:CardInput.__docgenInfo,name:"CardInput",path:"src/components/CardInput/CardInput.tsx#CardInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/CardLabel/CardLabel.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),CardLabel=function CardLabel(_ref){var labelText=_ref.labelText;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{children:labelText})};__webpack_exports__.Z=CardLabel;try{CardLabel.displayName="CardLabel",CardLabel.__docgenInfo={description:"",displayName:"CardLabel",props:{labelText:{defaultValue:null,description:"",name:"labelText",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CardLabel/CardLabel.tsx#CardLabel"]={docgenInfo:CardLabel.__docgenInfo,name:"CardLabel",path:"src/components/CardLabel/CardLabel.tsx#CardLabel"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);