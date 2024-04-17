const InputType = {
  CARD_NUMBER: {
    inputLabel: '카드번호',
    inputInfo: Array.from({ length: 4 }, (_, index) => ({
      property: `cardNumber${index + 1}`,
      validateType: 'cardNumber',
      maxLength: 4,
      placeHolder: '1234',
      error: '숫자만 입력 가능합니다.',
    })),
  },
  EXPIRY_DATE: {
    inputLabel: '유효기간',
    inputInfo: [
      {
        property: 'month',
        validateType: 'month',
        maxLength: 2,
        placeHolder: 'MM',
      },
      {
        property: 'year',
        validateType: 'year',
        maxLength: 2,
        placeHolder: 'YY',
      },
    ],
  },
  USER_NAME: {
    inputLabel: '소유자 이름',
    inputInfo: [
      {
        property: 'userName',
        validateType: 'userName',
        maxLength: 30,
        placeHolder: 'JOHN DOE',
      },
    ],
  },
};

export default InputType;
