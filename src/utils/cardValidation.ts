function isNumeric(value: string): boolean {
  return /^[0-9]*$/.test(value);
}

function isValidSegment(value: string, maxLength: number): boolean {
  return value.length <= maxLength;
}

const isValidNumberSegment = (value: string, _: number, maxLength: number) => {
  const isValidValue = isNumeric(value) && isValidSegment(value, maxLength);
  return {
    isValid: isValidValue,
    errorMessage: isValidValue ? '' : '숫자만 입력 가능합니다.',
  };
};

const ERROR_MESSAGE = {
  INVALID_YEAR: '올바른 유효기간을 입력하세요. (YY: 00~99)',
  INVALID_MONTH: '올바른 유효기간을 입력하세요. (MM: 01~12)',
  INVALID_LENGTH: '올바른 입력 길이를 확인하세요.',
  INVALID_CHARACTER: '숫자만 입력 가능합니다.',
} as const;

interface ExpirationValidationResult {
  isValid: boolean;
  errorMessage: string;
}

const MONTH_RANGE = { MIN: 1, MAX: 12 } as const;
const YEAR_RANGE = { MIN: 0, MAX: 99 } as const;

function getExpirationError(value: string, index: number): string {
  const num = Number(value);
  if (index === 0 && (num < MONTH_RANGE.MIN || num > MONTH_RANGE.MAX)) {
    return ERROR_MESSAGE.INVALID_MONTH;
  }
  if (index === 1 && (num < YEAR_RANGE.MIN || num > YEAR_RANGE.MAX)) {
    return ERROR_MESSAGE.INVALID_YEAR;
  }
  return '';
}

function isValidExpirationSegment(
  value: string,
  index: number,
  maxLength: number
): ExpirationValidationResult {
  if (!isNumeric(value)) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_CHARACTER };
  }
  if (!isValidSegment(value, maxLength)) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_LENGTH };
  }
  if (value.length < maxLength) {
    return { isValid: true, errorMessage: '' };
  }
  const rangeError = getExpirationError(value, index);
  if (rangeError) {
    return { isValid: false, errorMessage: rangeError };
  }
  return { isValid: true, errorMessage: '' };
}

function validateCvcNumber(value: string): {
  isValid: boolean;
  errorMessage: string;
} {
  if (!isNumeric(value)) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_CHARACTER };
  }
  if (!isValidSegment(value, 3)) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_LENGTH };
  }
  return { isValid: true, errorMessage: '' };
}

function validatePasswordSegment(value: string): {
  isValid: boolean;
  errorMessage: string;
} {
  if (!isNumeric(value)) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_CHARACTER };
  }
  if (!isValidSegment(value, 2)) {
    return { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_LENGTH };
  }
  return { isValid: true, errorMessage: '' };
}

export type { ExpirationValidationResult };
export {
  isValidNumberSegment,
  isValidExpirationSegment,
  validateCvcNumber,
  validatePasswordSegment,
  getExpirationError,
  ERROR_MESSAGE,
};
