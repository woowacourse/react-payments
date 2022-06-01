export const removeCrucialCardInfo = (card) => {
  const clonedCard = { ...card };

  ['cvc', 'firstPasswordDigit', 'secondPasswordDigit'].forEach((key) => {
    delete clonedCard[key];
  });

  return clonedCard;
};

export const censorString = (string, censoringCharacter = '•') => {
  return censoringCharacter.repeat(string.length);
};
