import { CardInputProps } from '../../types/CardInputTypes';

export const formatCardNumber = (cardInput: CardInputProps): string => {
  const { first, second, third, fourth } = cardInput;
  return `${first || '****'} ${second || '****'} ${third || '****'} ${fourth || '****'}`;
};

export const formatExpiryDate = (cardInput: CardInputProps): string => {
  const { MM, YY } = cardInput;
  return MM && YY ? `${MM}/${YY}` : 'MM/YY';
};

export const getCardBrandByNumber = (firstDigits: number | null): string => {
  if (!firstDigits) return 'default';

  const firstDigit = String(firstDigits).charAt(0);

  if (firstDigit === '4') return 'visa';
  if (firstDigit === '5') return 'mastercard';

  return 'default';
};
