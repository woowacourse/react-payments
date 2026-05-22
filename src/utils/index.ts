import { CARD_EXPIRY_MONTH_RANGE, CARD_ISSUER_CODES, CARD_NETWORK } from '../constants';
import type { CardNetwork, CardNumberSegments, ValidationRule } from '../types';

export function validateDigits(input: string) {
  return /^\d+$/.test(input);
}

export function validateStringLength(input: string, length: number,) {
  return input.length === length
}

export function validateStringMaxLength(input: string, maxLength: number,) {
  return input.length <= maxLength
}

export function validateMonth(input: string) {
  return CARD_EXPIRY_MONTH_RANGE.includes(input);
}

export function validateCardIssuer(input: string) {
  return (CARD_ISSUER_CODES as string[]).includes(input);
}

export function createDigitFieldValidations(length: number): ValidationRule[] {
  return [
    {
      type: 'onChange',
      validator: validateDigits,
      message: '숫자만 입력 가능합니다.',
    },
    {
      type: 'onChange',
      validator: (input: string) => validateStringMaxLength(input, length),
      message: `${length}자리까지 입력 가능합니다.`,
    },
    {
      type: 'onBlur',
      validator: (input: string) => validateStringLength(input, length),
      message: `${length}자리를 입력해주세요.`,
    },
  ]
}

export function getCardNetwork(cardNumberSegments: CardNumberSegments): CardNetwork | undefined {
  const cardNumber = cardNumberSegments.join("");

  for (const [network, config] of Object.entries(CARD_NETWORK)) {
    const matches = config.startPatterns.some(
      ({ regex, minMatchLength }) => cardNumber.length >= minMatchLength && regex.test(cardNumber)
    );
    if (matches) return network as CardNetwork;
  }

  return undefined;
}

