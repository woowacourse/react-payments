import { InputType } from '../types/input';

const INPUT_TYPE_CATEGORIES: Record<string, InputType> = {
  CARD_NUMBER: {
    inputLabel: '카드번호',
    inputInfo: Array.from({ length: 4 }, (_, index) => ({
      property: `cardNumber${index + 1}`,
      validateType: 'cardNumber',
      maxLength: 4,
      placeHolder: '1234',
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
  CVC: {
    inputLabel: 'CVC',
    inputInfo: [
      {
        property: 'cvc',
        validateType: 'cvc',
        maxLength: 3,
        placeHolder: '123',
      },
    ],
  },
  PASSWORD: {
    inputLabel: '비밀번호 앞 2자리',
    inputInfo: [
      {
        property: 'password',
        validateType: 'password',
        maxLength: 2,
        placeHolder: '',
        type: 'password',
      },
    ],
  },
};

export default INPUT_TYPE_CATEGORIES;
