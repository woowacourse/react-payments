export function validateNumberError(value: string) {
  if (!/^[0-9]*$/.test(value)) {
    return '숫자만 입력 가능합니다.';
  }
}

export function validateMonthRangeError(value: string) {
  const month = Number(value);
  if (value !== '' && (month < 1 || month > 12)) {
    return '1부터 12 사이의 숫자를 입력해주세요.';
  }
}

export function validateYearLengthError(value: string) {
  if (value !== '' && value.length !== 2) {
    return '2자리 숫자를 입력해주세요.';
  }
}

export function validateCvcLengthError(value: string) {
  if (value !== '' && value.length !== 3) {
    return 'CVC는 3자리여야 합니다.';
  }
}

export function validateCardPasswordLengthError(value: string) {
  if (value !== '' && value.length !== 2) {
    return '비밀번호는 2자리여야 합니다.';
  }
}
