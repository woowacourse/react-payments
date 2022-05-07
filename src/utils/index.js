export const pareCardFormState = ({
  firstCardNumber,
  secondCardNumber,
  thirdCardNumber,
  fourthCardNumber,
  ownerName,
  secureCode,
  expiredMonth,
  expiredYear,
  firstPassword,
  secondPassword,
  cardType,
}) => {
  const parsedState = {
    firstCardNumber,
    secondCardNumber,
    thirdCardNumber,
    fourthCardNumber,
    ownerName,
    secureCode,
    expiredMonth,
    expiredYear,
    firstPassword,
    secondPassword,
    cardType,
  };

  return parsedState;
};
