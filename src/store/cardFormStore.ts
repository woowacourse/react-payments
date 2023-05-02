import { CardFormState } from './type';

const cardFormStore: CardFormState = {
  cardName: 'BC',
  cardNumbers: ['', '', '', ''],
  cardExpirationDate: ['', ''],
  cardOwner: [''],
  cardCVC: [''],
  cardPWD: ['', ''],
};

export const cardCompanyStore = {
  cardColor: 'black',
};

export default cardFormStore;
