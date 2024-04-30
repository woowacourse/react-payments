import SIGN from "./sign";

const CARD_EMPTY = {
  cardNumber: {
    firstValue: SIGN.empty,
    secondValue: SIGN.empty,
    thirdValue: SIGN.empty,
    fourthValue: SIGN.empty,
  },

  expiration: {
    month: SIGN.empty,
    year: SIGN.empty,
  },

  owner: {
    name: SIGN.empty,
  },

  info: {
    cvc: SIGN.empty,
  },

  authentication: {
    password: SIGN.empty,
  },
};

export default CARD_EMPTY;
