const validator = {
  isDuplicated(cards, alias) {
    return cards.some((card) => card.alias === alias);
  },
};

const validate = (cards, alias) => {
  if (validator.isDuplicated(cards, alias)) {
    throw Error('중복되는 카드 이름이 존재합니다.');
  }
};

export default validate;
