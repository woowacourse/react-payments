const useCardPreview = () => {
  const getCardInfo = ({
    firstCardNumber,
    secondCardNumber,
    thirdCardNumber,
    fourthCardNumber,
    expiredMonth,
    expiredYear,
    owner,
    cvc,
    firstPasswordDigit,
    secondPasswordDigit,
  }) => ({
    brand: '우아한카드',
    cardNumber: [
      firstCardNumber,
      secondCardNumber,
      thirdCardNumber,
      fourthCardNumber,
    ],
    expiredDate: {
      month: expiredMonth,
      year: expiredYear,
    },
    owner: owner.toUpperCase(),
    cvc,
    password: `${firstPasswordDigit}${secondPasswordDigit}`,
  });

  return {
    getCardInfo,
  };
};

export default useCardPreview;
