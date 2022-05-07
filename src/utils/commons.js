export const convertFormDataToObject = (formData) => {
  const object = {};

  formData.forEach((value, key) => {
    object[key] = value;
  });

  return object;
};

export const removeCrucialCardInfo = (card) => ({
  id: card.id,
  firstCardNumber: card.firstCardNumber,
  secondCardNumber: card.secondCardNumber,
  thirdCardNumber: card.thirdCardNumber,
  fourthCardNumber: card.fourthCardNumber,
  owner: card.owner,
  expiredMonth: card.expiredMonth,
  expiredYear: card.expiredYear,
});

export const censorString = (string, censoringCharacter = '•') => {
  return censoringCharacter.repeat(string.length);
};
