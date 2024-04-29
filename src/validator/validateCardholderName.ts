import { ErrorDetail } from '../types/error';

const validateEnglish = (cardholderName: string): ErrorDetail => {
  const isEnglish = /^$|^[a-zA-Z ]+$/.test(cardholderName);

  if (!isEnglish) {
    return { isError: true, errorMessage: '카드 소유자 이름을 영어로만 입력해주세요' };
  }

  return { isError: false, errorMessage: '' };
};

const validateCardholderName = (cardholderName: string): ErrorDetail => {
  const containSideBlankOrMultipleBlanks = !/^(?!\s)(?!.*\s\s)(?!.*\s$)/.test(cardholderName);

  if (containSideBlankOrMultipleBlanks) {
    return {
      isError: true,
      errorMessage: '양 끝에 공백이 포함되면 안 되며, 사이 공백의 길이는 최대 1입니다.',
    };
  }

  return { isError: false, errorMessage: '' };
};

export { validateEnglish, validateCardholderName };
