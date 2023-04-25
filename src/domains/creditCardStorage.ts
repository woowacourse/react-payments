import * as Type from '@Types/index';

import localStorageHelper from '@Utils/localStorageHelper';

const CREDIT_CARD = 'creditCard';

const creditCardStorage = {
  getCreditCard: () => localStorageHelper.getValue(CREDIT_CARD, []),

  saveCreditCard: (newCreditCard: Type.CreditCard) => {
    const existCreditCard = localStorageHelper.getValue(CREDIT_CARD, []);
    localStorageHelper.setValue(CREDIT_CARD, [...existCreditCard, newCreditCard]);
  },
};

export default creditCardStorage;
