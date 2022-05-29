export const isOverMaxLength = (value, max) => value.length > max;

export const isOutOfRange = (min, max, value) => value < min || value > max;

export const Card = (
  firstCardNumber = '',
  secondCardNumber = '',
  thirdCardNumber = '',
  fourthCardNumber = '',
  expireMonth = '',
  expireYear = '',
  ownerName = '',
  securityCode = '',
  firstPassword = '',
  secondPassword = ''
) => ({
  firstCardNumber,
  secondCardNumber,
  thirdCardNumber,
  fourthCardNumber,
  expireMonth,
  expireYear,
  ownerName,
  securityCode,
  firstPassword,
  secondPassword,
});
