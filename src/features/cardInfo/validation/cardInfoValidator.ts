import { useCardInfoContext } from '../context/CardInfoContext';
import {
  MASTERCARD_FIRST_DIGIT,
  MASTERCARD_MAX_SECOND_DIGIT,
  MASTERCARD_MIN_SECOND_DIGIT,
  VISA_CARD_FIRST_DIGIT,
} from '../../../shared/constants/cardInfoConstants';
import { MONTH_ERROR, NO_ERROR, YEAR_ERROR } from '../../../shared/constants/errorConstants';
import { CARD_NUMBER_MAX_LENGTH } from '../../../shared/constants/validationConstants';

export const cardNumberValidator = (inputs: string[]) => {
  for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];
    if (!isNumber(input)) {
      return [index, '카드 번호는 숫자만 입력 가능합니다.'];
    }
    if (!isFourDigit(Number(input))) {
      return [index, '카드 번호는 4자리어야 합니다.'];
    }
    if (index === 0 && !isValidCardNumber(input)) {
      return [0, '카드 번호는 4 또는 51~55로 시작해야 합니다.'];
    }
  }

  return [NO_ERROR, ''];
};

const isNumber = (input: string) => {
  return Number.isInteger(Number(input));
};

const isFourDigit = (cardNumber: number) => {
  return String(cardNumber).length === CARD_NUMBER_MAX_LENGTH;
};

export const isValidCardNumber = (input: string): boolean => {
  if (input[0] === VISA_CARD_FIRST_DIGIT) return true;
  if (input[0] === MASTERCARD_FIRST_DIGIT) {
    const secondDigit = Number(input[1]);
    return secondDigit >= MASTERCARD_MIN_SECOND_DIGIT && secondDigit <= MASTERCARD_MAX_SECOND_DIGIT;
  }
  return false;
};

export const cardExpirationDateValidator = (date: { month: string; year: string }) => {
  if (!isNumber(date.month)) {
    return [MONTH_ERROR, '유효 월은 숫자만 입력 가능합니다.'];
  }

  if (!isValidExpirationMonth(date.month)) {
    return [MONTH_ERROR, '유효 월은 1월과 12월 사이만 입력 가능합니다.'];
  }

  if (!isTwoDigit(date.month)) {
    return [MONTH_ERROR, '유효 월은 2자리 숫자여야 합니다.'];
  }

  if (!isNumber(date.year)) {
    return [YEAR_ERROR, '유효 연도는 숫자만 입력 가능합니다.'];
  }

  if (!isTwoDigit(date.year)) {
    return [YEAR_ERROR, '유효 연도는 2자리 숫자여야 합니다.'];
  }
  return [NO_ERROR, ''];
};

const isValidExpirationMonth = (month: string) => {
  const num = Number(month);
  return num >= 1 && num <= 12;
};

const isTwoDigit = (input: string) => {
  return input.length === 2;
};

export const cardCVCValidator = (input: string) => {
  if (!isNumber(input)) {
    return [0, 'CVC는 숫자만 입력 가능합니다.'];
  }
  if (input.length !== 3) {
    return [0, 'CVC는 3자리 숫자여야 합니다.'];
  }
  return [NO_ERROR, ''];
};

export const cardIssuerValidator = (input: string) => {
  if (input.length === 0) {
    return [0, '카드사를 선택해 주세요.'];
  }
  return [NO_ERROR, ''];
};

export const cardPasswordValidator = (input: string) => {
  if (!isNumber(input)) {
    return [0, '카드 비밀번호는 숫자만 입력 가능합니다.'];
  }
  if (input.length !== 2) {
    return [0, '카드 비밀번호 앞 2자리를 입력해 주세요.'];
  }
  return [NO_ERROR, ''];
};

export const confirmButtonValidator = () => {
  const { cardInfo } = useCardInfoContext();

  return (
    cardNumberValidator(cardInfo.cardNumber)[0] === NO_ERROR &&
    cardExpirationDateValidator(cardInfo.cardExpirationDate)[0] === NO_ERROR &&
    cardCVCValidator(cardInfo.cardCVC)[0] === NO_ERROR &&
    cardIssuerValidator(cardInfo.cardIssuer)[0] === NO_ERROR &&
    cardPasswordValidator(cardInfo.cardPassword)[0] === NO_ERROR
  );
};
