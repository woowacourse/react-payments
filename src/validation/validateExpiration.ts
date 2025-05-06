const isNumber = (value: string) => /^\d+$/.test(value);

export const validateExpiration = (field: 'month' | 'year', value: string) => {
  if (!isNumber(value) && value !== '') {
    return '숫자만 입력 가능합니다.';
  }

  if (field === 'month') {
    const month = Number(value);
    if (month < EXPIRATION_RULES.MIN_MONTH || month > EXPIRATION_RULES.MAX_MONTH) {
      return ERROR_MESSAGES.month.INVALID_RANGE;
    }
  }

  if (field === 'year') {
    if (value.length !== EXPIRATION_RULES.YEAR_LENGTH) {
      return ERROR_MESSAGES.year.INVALID_LENGTH;
    }
  }

  return '';
};

export const ERROR_MESSAGES = {
  month: {
    ONLY_NUMBER: '숫자만 입력 가능합니다.',
    INVALID_RANGE: '1부터 12 사이의 숫자를 입력해주세요.'
  },
  year: {
    ONLY_NUMBER: '숫자만 입력 가능합니다.',
    INVALID_LENGTH: '2자리 숫자를 입력해주세요.'
  }
};

export const EXPIRATION_RULES = {
  MONTH_LENGTH: 2,
  YEAR_LENGTH: 2,
  MIN_MONTH: 1,
  MAX_MONTH: 12
};
