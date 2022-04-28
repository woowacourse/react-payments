const validator = {
  checkCardNumber(cardNumber) {
    if (cardNumber.some((number) => !Number.isInteger(Number(number)))) {
      throw new Error('카드번호에 숫자만 입력해주세요.');
    }

    if (0 < cardNumber.join('').length && cardNumber.join('').length < 16) {
      throw new Error('카드번호에 총 16개의 수를 모두 입력해주세요.');
    }
  },

  checkCardExpiration(cardExpiration) {
    if (cardExpiration.some((number) => !Number.isInteger(Number(number)))) {
      throw new Error('카드 만료일에 숫자만 입력해주세요.');
    }

    if (0 < cardExpiration.join('').length && cardExpiration.join('').length < 4) {
      throw new Error('카드 만료일에 월 2자리(MM) 및 년 2자리(MM)를 모두 입력해주세요.');
    }

    if (Number(cardExpiration[0]) < 1 || Number(cardExpiration[0]) > 12) {
      throw new Error('카드 만료월은 1월부터 12월 이내의 수만 입력해주세요.');
    }

    const today = new Date();
    const year = today.getFullYear() % 2000;
    const month = today.getMonth() + 1;

    if (
      Number(cardExpiration[1]) < year ||
      (Number(cardExpiration[1]) === year && Number(cardExpiration[0]) < month)
    ) {
      throw new Error('입력하신 만료일은 이미 경과되었습니다.');
    }
  },
};

export default validator;
