import { CARD_FORM_INPUTS } from '../constants/setting';

export const validateCardNumber = (value: string): string => {
  if (value !== '' && Number.isNaN(Number(value))) {
    return '숫자만 입력 가능합니다.';
  }
  if (
    value !== '' &&
    value.length !== CARD_FORM_INPUTS.CARD_NUMBERS.MAX_LENGTH
  ) {
    return `숫자 ${CARD_FORM_INPUTS.CARD_NUMBERS.MAX_LENGTH}자리를 입력해주세요.`;
  }
  return '';
};

export const validateCardCompany = (value: string): string => {
  if (value === CARD_FORM_INPUTS.CARD_COMPANY.MAIN_TEXT)
    return CARD_FORM_INPUTS.CARD_COMPANY.MAIN_TEXT;
  return '';
};

export const validateCardExpiration = (
  value: string,
  index: number,
): string => {
  if (value !== '' && Number.isNaN(Number(value))) {
    return '숫자만 입력 가능합니다.';
  }

  if (
    value !== '' &&
    value.length !== CARD_FORM_INPUTS.CARD_EXPIRATION.MAX_LENGTH
  ) {
    return `숫자 ${CARD_FORM_INPUTS.CARD_EXPIRATION.MAX_LENGTH}개를 정확히 입력해주세요.`;
  }

  if (
    value !== '' &&
    index === 0 &&
    !(
      Number(value) >= CARD_FORM_INPUTS.CARD_EXPIRATION.MONTH_MIN_NUMBER &&
      Number(value) <= CARD_FORM_INPUTS.CARD_EXPIRATION.MONTH_MAX_NUMBER
    )
  ) {
    return `월은 ${CARD_FORM_INPUTS.CARD_EXPIRATION.MONTH_MIN_NUMBER}이상 ${CARD_FORM_INPUTS.CARD_EXPIRATION.MONTH_MAX_NUMBER}이하여야 합니다.`;
  }
  return '';
};

export const validateUserName = (value: string): string => {
  if (value !== '' && !CARD_FORM_INPUTS.USER_NAME.REGEX.test(value)) {
    return '영어만 입력 가능합니다.';
  }
  return '';
};

export const validateCVC = (value: string): string => {
  if (value !== '' && Number.isNaN(Number(value))) {
    return '숫자만 입력 가능합니다.';
  }
  return '';
};

export const validatePassword = (value: string): string => {
  if (value !== '' && Number.isNaN(Number(value))) {
    return '숫자만 입력 가능합니다.';
  }
  return '';
};
