export const initialCardNumber = {
  firstCardNumber: {
    name: "cardNumber",
    value: "",
    type: "number",
    keyType: "firstCardNumber",
    placeholder: "1 2 3 4",
    maxLength: 4,
    index: 0,
  },
  secondCardNumber: {
    name: "cardNumber",
    value: "",
    type: "number",
    keyType: "secondCardNumber",
    placeholder: "5 6 7 8",
    maxLength: 4,
    index: 1,
  },
  thirdCardNumber: {
    name: "cardNumber",
    value: "",
    type: "password",
    keyType: "thirdCardNumber",
    placeholder: "• • • •",
    maxLength: 4,
    index: 2,
  },
  fourthCardNumber: {
    name: "cardNumber",
    value: "",
    type: "password",
    keyType: "fourthCardNumber",
    placeholder: "• • • •",
    maxLength: 4,
    index: 3,
  },
};

export const initialExpireDate = {
  month: {
    name: "expireDate",
    value: "",
    type: "text",
    keyType: "month",
    placeholder: "MM",
    width: "40px",
    maxLength: 2,
    index: 0,
  },
  year: {
    name: "expireDate",
    value: "",
    type: "text",
    keyType: "year",
    placeholder: "YY",
    width: "40px",
    maxLength: 2,
    index: 1,
  },
};

export const initialHolderName = {
  name: "holderName",
  value: "",
  type: "text",
  keyType: "holderName",
  placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
  width: "100%",
  textAlign: "left",
  maxLength: 30,
  index: 0,
};

export const initialSecurityCode = {
  name: "securityCode",
  value: "",
  type: "password",
  keyType: "securityCode",
  placeholder: "• • •",
  width: "100%",
  maxLength: 3,
  index: 0,
};

export const initialPassword = {
  firstPassword: {
    name: "password",
    value: "",
    type: "password",
    keyType: "firstPassword",
    placeholder: "•",
    width: "100%",
    maxLength: 1,
    index: 0,
  },
  secondPassword: {
    name: "password",
    value: "",
    type: "password",
    keyType: "secondPassword",
    placeholder: "•",
    width: "100%",
    maxLength: 1,
    index: 1,
  },
};
