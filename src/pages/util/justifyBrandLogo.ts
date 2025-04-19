export const justifyBrandLogo = (cardNumber: number) => {
  const cardNumberStr = cardNumber.toString();
  if (cardNumberStr.startsWith('0')) return 'default';
  if (cardNumberStr.startsWith('4')) return 'visa';

  if (cardNumberStr.startsWith('51') || cardNumberStr.startsWith('52'))
    return 'mastercard';
  if (cardNumber >= 2221 && cardNumber <= 2720) return 'mastercard';

  return 'default';
};
