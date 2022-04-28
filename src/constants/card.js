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
