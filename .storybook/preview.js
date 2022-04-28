import CardContext from '../src/CardContext';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const initialState = {
  cardNumber: ['', '', '', ''],
  cardNumberErrorMessage: '',
  cardExpiration: ['', ''],
  cardExpirationErrorMessage: '',
  cardOwner: '',
  cardOwnerErrorMessage: '',
  cardCvc: '',
  cardCvcErrorMessage: '',
  cardPassword: ['', ''],
  cardPasswordErrorMessage: '',
  cardCompanyIndex: -1,
  modalFlag: false,
  dispatch: () => null,
};

export const decorators = [
  (Story) => {
    return <CardContext.Provider value={initialState}>{Story()}</CardContext.Provider>;
  },
];
