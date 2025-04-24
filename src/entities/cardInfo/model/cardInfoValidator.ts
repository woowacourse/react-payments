import { isValidCardType } from './cardType';

export interface InputValidationResultProps {
  [key: string]: [number, string];
}

export const cardNumberValidator = (inputs: string[]) => {
  const validations = [
    { check: (input: string) => !isNumeric(input), message: '카드 번호는 숫자만 입력 가능합니다.' },
    {
      check: (input: string) => !isFourDigit(Number(input)),
      message: '카드 번호는 4자리어야 합니다.',
    },
    {
      check: (input: string, index: number) => index === 0 && !isValidCardType(input),
      message: '카드 번호는 4 또는 51~55로 시작해야 합니다.',
    },
  ];

  const errorIndex = inputs.findIndex((input, index) =>
    validations.some((validation) => validation.check(input, index)),
  );

  if (errorIndex !== -1) {
    const input = inputs[errorIndex];
    const error = validations.find((validation) => validation.check(input, errorIndex));
    return [errorIndex, error?.message || ''];
  }

  return [-1, ''];
};

export const cardExpirationDateValidator = (date: { month: string; year: string }) => {
  const validations = [
    { check: () => !isNumeric(date.month), index: 0, message: '유효 월은 숫자만 입력 가능합니다.' },
    {
      check: () => !isValidExpirationMonth(date.month),
      index: 0,
      message: '유효 월은 1월과 12월 사이만 입력 가능합니다.',
    },
    {
      check: () => !isTwoDigit(date.month),
      index: 0,
      message: '유효 월은 2자리 숫자여야 합니다.',
    },
    {
      check: () => !isNumeric(date.year),
      index: 1,
      message: '유효 연도는 숫자만 입력 가능합니다.',
    },
    {
      check: () => !isTwoDigit(date.year),
      index: 1,
      message: '유효 연도는 2자리 숫자여야 합니다.',
    },
  ];

  const failedValidation = validations.find((validation) => validation.check());
  if (failedValidation) return [failedValidation.index, failedValidation.message];

  return [-1, ''];
};

export const cardCVCValidator = (input: string) => {
  const validations = [
    { check: () => !isNumeric(input), index: 0, message: 'CVC는 숫자만 입력 가능합니다.' },
  ];

  const failedValidation = validations.find((validation) => validation.check());
  if (failedValidation) return [failedValidation.index, failedValidation.message];

  return [-1, ''];
};

const isNumeric = (input: string) => {
  const numericRegex = /^\d+$/;
  return numericRegex.test(input);
};

const isFourDigit = (cardNumber: number) => {
  return String(cardNumber).length === 4;
};

const isValidExpirationMonth = (month: string) => {
  const num = Number(month);
  return num >= 1 && num <= 12;
};

const isTwoDigit = (input: string) => {
  return input.length === 2;
};
