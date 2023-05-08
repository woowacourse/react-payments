export const validateCardNumbers = (value: unknown): asserts value is string => {
  if (typeof value !== 'string') {
    throw new TypeError('타입은 string이어야 합니다.');
  }
  if (!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(value)) {
    throw new Error('카드 번호는 0000-0000-0000-0000 형식으로 입력해주세요.');
  }
};

export const validateExpirationDate = (value: unknown): asserts value is [string, string] => {
  if (!Array.isArray(value) || value.length !== 2) {
    throw new TypeError('타입은 [string, string] 이어야 합니다.');
  }
  const [month] = value;
  if (!/^(0[1-9]|1[0-2])$/.test(month)) {
    throw new Error('만료 월은 01~12 사이로 입력해주세요.');
  }
};

export const validateCVC = (value: unknown): asserts value is string => {
  if (typeof value !== 'string') {
    throw new TypeError('타입은 string이어야 합니다.');
  }
  if (!/^\d{3}$/.test(value)) {
    throw new Error('보안 코드는 숫자 3개를 입력해주세요.');
  }
};

export const validateCardPassword = (value: unknown): asserts value is string => {
  if (typeof value !== 'string') {
    throw new TypeError('타입은 string이어야 합니다.');
  }
  if (!/^\d{2}$/.test(value)) {
    throw new Error('카드 비밀번호는 앞 자리 두 개를 입력해주세요.');
  }
};
