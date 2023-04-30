import { CardFormState } from './type';

const initialState: CardFormState = {
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

export default initialState;
