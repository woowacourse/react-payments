const CARD_LABEL_INPUT_CONFIG = {
  cardNumber: {
    id: 'card-number',
    label: '카드 번호',
    InputKeys: ['first', 'second', 'third', 'fourth'],
    placeholder: '1234',
    maxLength: 4,
  },
  expirationDate: {
    id: 'expiration-date',
    label: '유효기간',
    InputKeys: ['MM', 'YY'],
    placeholder: 'MM/YY',
    maxLength: 2,
  },
  CVC: {
    id: 'CVC',
    label: 'CVC',
    InputKeys: ['CVC'],
    placeholder: '123',
    maxLength: 3,
  },
  password: {
    id: 'password',
    label: '비밀번호',
    InputKeys: ['password'],
    placeholder: '**',
    maxLength: 2,
  },
};

export default CARD_LABEL_INPUT_CONFIG;
