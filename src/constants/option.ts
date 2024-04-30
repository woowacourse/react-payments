export const OPTION = {
  cardNumberInputCount: 4,
  cardNumberMaxLength: 4,
  expirationDateInputCount: 2,
  expirationDateMaxLength: 2,
  nameInputCount: 1,
  nameMaxLength: 50,
  cvcInputCount: 1,
  cvcMaxLength: 3,
  passwordInputCount: 1,
  passwordMaxLength: 2,
  cardCompanyInputCount: 1,
  minMonth: '01',
  maxMonth: '12',
};

export const STEP = {
  cardNumber: 'cardNumber',
  cardCompany: 'cardCompany',
  expirationDate: 'expirationDate',
  name: 'name',
  cvc: 'cvc',
  password: 'password',
};

export const CARD_COMPANY = [
  ['BC카드', 'BC'],
  ['신한카드', 'shinhan'],
  ['카카오뱅크', 'kakao'],
  ['현대카드', 'hyundai'],
  ['우리카드', 'woori'],
  ['롯데카드', 'lotte'],
  ['하나카드', 'kebhana'],
  ['국민카드', 'kbstar'],
];
