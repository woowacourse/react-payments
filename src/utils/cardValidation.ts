function isNumeric(value: string): boolean {
  return /^[0-9]*$/.test(value);
}

function isValidSegment(value: string, maxLength: number): boolean {
  return value.length <= maxLength;
}

const ERROR_MESSAGE = {
  INVALID_YEAR: '올바른 유효기간을 입력하세요. (YY: 00~99)',
  INVALID_MONTH: '올바른 유효기간을 입력하세요. (MM: 01~12)',
  INVALID_LENGTH: '올바른 유효기간을 입력하세요. (MM/YY)',
  INVALID_CHARACTER: '숫자만 입력 가능합니다.',
} as const;

const MONTH = { MIN: 1, MAX: 12 } as const;
const YEAR = { MIN: 0, MAX: 99 } as const;

interface ExpirationValidationResult {
  valid: boolean;
  errorMessage: string;
}

function isInRange(value: string, index: number): number {
  const num = Number(value);
  if (index === 0 && (num < MONTH.MIN || num > MONTH.MAX)) return 1;
  if (index === 1 && (num < YEAR.MIN || num > YEAR.MAX)) return 2;
  return 0;
}

function isValidExpirationSegment(
  value: string,
  index: number,
  maxLength: number
): ExpirationValidationResult {
  if (!isNumeric(value)) {
    return { valid: false, errorMessage: ERROR_MESSAGE.INVALID_CHARACTER };
  }
  if (!isValidSegment(value, maxLength)) {
    return { valid: false, errorMessage: ERROR_MESSAGE.INVALID_LENGTH };
  }
  if (value.length < maxLength) {
    return { valid: true, errorMessage: '' };
  }
  if (isInRange(value, index) === 1) {
    return { valid: false, errorMessage: ERROR_MESSAGE.INVALID_MONTH };
  }
  if (isInRange(value, index) === 2) {
    return { valid: false, errorMessage: ERROR_MESSAGE.INVALID_YEAR };
  }
  return { valid: true, errorMessage: '' };
}

export { isNumeric, isValidSegment, isValidExpirationSegment };
