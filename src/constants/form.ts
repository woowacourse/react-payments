interface InitialValues {
  cardNumbers: CardNumbers;
  expirationDate: ExpirationDate;
  ownerName: OwnerName;
  cardIssuer: CardIssuer;
  cvc: CVC;
  password: Password;
}

export const INITIAL_VALUES: InitialValues = {
  cardNumbers: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },

  expirationDate: {
    month: '',
    year: '',
  },

  ownerName: {
    ownerName: '',
  },

  cardIssuer: {
    cardIssuer: '',
  },

  cvc: {
    cvc: '',
  },

  password: {
    password: '',
  },
};
