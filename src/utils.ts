import { CARD_ISSUERS } from './constants';
import type { CardNetwork, CardNumberSegments, ValidationRule } from './types';

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
  const monthArray = Array.from({ length: 12 }).map((_, index) => String(index + 1).padStart(2, "0"));
  return monthArray.includes(input);
}

export function validateYear(input: string) {
  const monthArray = Array.from({ length: 100 }).map((_, index) => String(index).padStart(2, "0"));
  return monthArray.includes(input);
}

export function validateCVC(input: string) {
  const monthArray = Array.from({ length: 1000 }).map((_, index) => String(index).padStart(3, "0"));
  return monthArray.includes(input);
}

export function validateCardIssuer(input: string) {
  return (CARD_ISSUERS.map(issuer => issuer.value) as string[]).includes(input)
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

export function getCardNetwork(cardNumberSegments: CardNumberSegments): CardNetwork | null {
  if (cardNumberSegments[0].startsWith('4')) return 'VISA';
  if (/^(51|52|53|54|55)/.test(cardNumberSegments[0])) return 'MasterCard';
  if (cardNumberSegments[0].startsWith('36')) return 'Diners';
  if (/^(34|37)/.test(cardNumberSegments[0])) return 'AMEX';
  if (/^(62[4-6])/.test(cardNumberSegments[0])) return 'UnionPay';
  if (/^(628[2-8])/.test(cardNumberSegments[0])) return 'UnionPay';
  if (/^(62212[6-9]|6221[3-9]\d|622[2-8]\d{2}|6229[01]\d|62292[0-5])/.test(cardNumberSegments.slice(0, 2).join(""))) return "UnionPay";
  return null;
}

