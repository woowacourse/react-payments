import { ERROR_MESSAGE } from 'constants';

const validator = {
  isDuplicated(cards, alias) {
    return cards.some((card) => card.alias === alias);
  },
};

const validate = (cards, alias) => {
  if (validator.isDuplicated(cards, alias)) {
    throw Error(ERROR_MESSAGE.DUPLICATED_NAME);
  }
};

export default validate;
