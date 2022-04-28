export const cardInfoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'setCardNumber': {
      const { key, cardNumber } = payload;

      return {
        ...state,
        cardNumbers: { ...state.cardNumbers, [key]: cardNumber },
      };
    }
    case 'setExpireDate': {
      const { key, date } = payload;

      return { ...state, expireDate: { ...state.expireDate, [key]: date } };
    }
    case 'setOwnerName': {
      const { ownerName } = payload;

      return { ...state, ownerName };
    }
    case 'setCVC': {
      const { CVC } = payload;

      return { ...state, CVC };
    }
    case 'setPassword': {
      const { key, password } = payload;

      return {
        ...state,
        password: { ...state.password, [key]: password },
      };
    }
    case 'setCardType': {
      const { cardType } = payload;

      return {
        ...state,
        cardType,
      };
    }
    default:
      throw new Error('NO SUCH TYPE');
  }
};
