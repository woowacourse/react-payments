const InputType = {
  CARD_NUMBER: {
    inputLabel: "카드번호",
    inputInfo: Array.from({ length: 4 }, () => ({
      validateType: "cardNumber",
      maxLength: 4,
      placeHolder: "1234",
    })),
  },
  EXPIRY_DATE: {
    inputLabel: "유효기간",
    inputInfo: [
      {
        validateType: "month",
        maxLength: 2,
        placeHolder: "MM",
      },
      {
        validateType: "year",
        maxLength: 2,
        placeHolder: "YY",
      },
    ],
  },
  USER_NAME: {
    inputLabel: "소유자 이름",
    inputInfo: [
      {
        validateType: "userName",
        maxLength: 30,
        placeHolder: "JOHN DOE",
      },
    ],
  },
};

export default InputType;
