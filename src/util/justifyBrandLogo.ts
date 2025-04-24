export const justifyBrandLogo = (cardNumber: string) => {
  if (cardNumber.startsWith('0')) return 'default';
  if (cardNumber.startsWith('4')) return 'visa';

  if (cardNumber.startsWith('51') || cardNumber.startsWith('52')) return 'mastercard';
  if (Number(cardNumber) >= 2221 && Number(cardNumber) <= 2720) return 'mastercard';

  return 'default';
};
