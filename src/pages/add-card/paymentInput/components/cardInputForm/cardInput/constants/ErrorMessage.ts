const ERROR_MESSAGE = {
  EXPIRATION: {
    MONTH: {
      IS_NUMBER: "숫자를 입력해주세요",
      IS_NUMBER_RANGE: "1월부터 12월을 입력해주세요",
      IS_EXPIRATION: "유효기간을 다시 확인해주세요",
    },
    YEAR: {
      IS_NUMBER: "숫자를 입력해주세요",
      IS_EXPIRATION: "유효기간을 다시 확인해주세요",
    },
  },
  CVC: {
    IS_NUMBER_STRING: "숫자를 입력해주세요",
  },
  PASSWORD: {
    IS_NUMBER_STRING: "비밀번호는 숫자 2자리입니다",
  },
  NUMBER: {
    IS_NUMBER_STRING: "숫자를 입력해주세요",
  },
};

export default ERROR_MESSAGE;
