const trimStartZeroPad = (value) => {
  return value.length > 1 && value.startsWith("0") ? value.slice(1) : value;
};

export const cardInfoValidations = {
  cardNumber: {
    testFunc: (value) => /^\d{0,4}$/.test(value),
    errorMessage: "16자 길이의 숫자만 입력해주세요.",
  },
  expireDate: {
    testFunc: (value, order) => {
      const parsedValue = trimStartZeroPad(value);

      if (order === 0) {
        return /^$|(^[0-9]$)|(^1?[0-2]$)/.test(parsedValue);
      }

      return /^$|^0$|^2$|(^2?[2-6]$)/.test(parsedValue);
    },
    errorMessage: "유효한 날짜를 입력해주세요.",
  },
  holderName: {
    testFunc: (value) => /^[a-z]{0,30}$/i.test(value),
    errorMessage: "30자 이내의 영문만 입력해주세요.",
  },
  securityCode: {
    testFunc: (value) => /^\d{0,3}$/.test(value),
    errorMessage: "3자 길이의 숫자만 입력해주세요.",
  },
  password: {
    testFunc: (value) => /^\d{0,1}$/.test(value),
    errorMessage: "2자 길이의 숫자만 입력해주세요.",
  },
};
