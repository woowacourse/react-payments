export const MASKED_CHARACTER = "•";

export const CREATE_MASKED_CHARACTERS = (repeatCount) =>
  `${MASKED_CHARACTER}`.repeat(repeatCount);

export const CARD_REGISTER_SUCCESS_MESSAGE =
  "카드가 정상적으로 등록되었습니다!";

export const CARD_INFO_RULES = {
  NUMBER_UNIT_LENGTH: 4,
  NUMBER_UNIT_COUNT: 4,
  EXPIRE_DATE_LENGTH: 4,
  HOLDER_NAME_MAX_LENGTH: 30,
  SECURITY_CODE_LENGTH: 3,
  PASSWORD_LENGTH: 2,
  PASSWORD_UNIT_LENGTH: 1,
};

export const INPUT_KEY_TABLE = {
  cardNumbers: [
    "firstCardNumber",
    "secondCardNumber",
    "thirdCardNumber",
    "fourthCardNumber",
  ],
  passwordNumbers: ["firstPassword", "secondPassword"],
};

export const INITIAL_CARD_INFO = [
  {
    cardNumbers: {
      firstCardNumber: {
        name: "firstCardNumber",
        type: "number",
        maxLength: 4,
        value: "",
        placeholder: "1 2 3 4",
      },
      secondCardNumber: {
        name: "secondCardNumber",
        type: "number",
        maxLength: 4,
        value: "",
        placeholder: "5 6 7 8",
      },
      thirdCardNumber: {
        name: "thirdCardNumber",
        type: "password",
        maxLength: 4,
        value: "",
        placeholder: "• • • •",
      },
      fourthCardNumber: {
        name: "fourthCardNumber",
        type: "password",
        maxLength: 4,
        value: "",
        placeholder: "• • • •",
      },
    },
  },
  {
    expireDate: {
      month: {
        name: "MM",
        type: "text",
        value: "",
        width: "40px",
        placeholder: "MM",
      },
      year: {
        name: "YY",
        type: "text",
        value: "",
        width: "40px",
        placeholder: "YY",
      },
    },
  },
  {
    holderName: {
      name: "holderName",
      type: "text",
      width: "100%",
      value: "",
      maxLength: 30,
      textAlign: "left",
      placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
    },
  },
  {
    securityCode: {
      name: "securityCode",
      type: "password",
      maxLength: 3,
      value: "",
      placeholder: "• • •",
      width: "100%",
    },
  },
  {
    passwordNumbers: {
      firstPasswordNumber: {
        name: "firstPassword",
        type: "password",
        value: "",
        maxLength: 1,
        width: "100%",
        placeholder: "•",
      },
      secondPasswordNumber: {
        name: "secondPassword",
        type: "password",
        value: "",
        maxLength: 1,
        width: "100%",
        placeholder: "•",
      },
    },
  },
];
