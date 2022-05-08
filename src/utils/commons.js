export const convertFormDataToObject = (formData) => {
  const object = {};

  formData.forEach((value, key) => {
    object[key] = value;
  });

  return object;
};

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
