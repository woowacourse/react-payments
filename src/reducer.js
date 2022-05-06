const initialCardInfoState = {
  cardCompany: {
    name: '',
    hexColor: '#ffffff',
  },
  cardNumbers: {
    cardNoA: '',
    cardNoB: '',
    cardNoC: '',
    cardNoD: '',
  },
  cardDate: {
    month: '',
    year: '',
  },
  owner: {
    name: '',
  },
  cardCode: {
    cvc: '',
  },
  pwd: {
    pwdNoA: '',
    pwdNoB: '',
  },
};
const cardInfoReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_COMPANY':
      return {
        ...state,
        cardCompany: action.cardCompany,
      };
    case 'UPDATE_NUMBERS':
      return {
        ...state,
        cardNumbers: action.cardNumbers,
      };
    case 'UPDATE_DATE':
      return {
        ...state,
        cardDate: action.cardDate,
      };
    case 'UPDATE_OWNER':
      return {
        ...state,
        owner: action.owner,
      };
    case 'UPDATE_CARD_CODE':
      return {
        ...state,
        cardCode: action.cardCode,
      };
    case 'UPDATE_PWD':
      return {
        ...state,
        pwd: action.pwd,
      };
    case 'RESET_CARD_INFO':
      return { ...initialCardInfoState };
    default:
      return state;
  }
};

const initialCardListState = [];
const cardListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD_ITEM':
      return [...state, action.card];
    default:
      return state;
  }
};

export { initialCardInfoState, initialCardListState, cardInfoReducer, cardListReducer };
