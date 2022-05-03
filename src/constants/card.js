export const CARD_TYPES = [
  { name: '포코', color: 'gold' },
  { name: '준', color: '#04c09e' },
  { name: '공원', color: 'green' },
  { name: '후이', color: '#9198e5' },
  { name: '유세지', color: '#AB46D2' },
  { name: '마르코', color: '#E76E9A' },
  { name: '아놀드', color: '#FF5F00' },
  { name: '록바', color: '#FBCD58' },
];

export const COMPONENTS = {
  NUMBERS: 'cardNumbers',
  EXPIRE_DATE: 'cardExpireDate',
  CVC: 'cardCVC',
  PASSWORD: 'cardPassword',
  CARD_TYPE: 'cardType',
};

export const MAX_LENGTH = {
  CVC: 3,
  OWNER_NAME: 30,
  EACH_CARD_NUMBER: 4,
};

export const initialCardInfo = {
  cardNumbers: {
    firstNumber: '',
    secondNumber: '',
    thirdNumber: '',
    fourthNumber: '',
  },
  expireDate: {
    month: '',
    year: '',
  },
  ownerName: '',
  CVC: '',
  password: {
    firstNumber: '',
    secondNumber: '',
  },
  cardType: {
    name: '',
    backgroundColor: '',
  },
};
