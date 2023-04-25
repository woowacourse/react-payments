export const validateCardNumbers = (value: string) => {
  if (!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(value)) {
    throw new Error('카드 번호는 0000-0000-0000-0000 형식으로 입력해주세요.');
  }
};

export const validateExpirationDate = (value: [string, string]) => {
  const [month] = value;
  if (!/^(0[1-9]|1[0-2])$/.test(month)) {
    throw new Error('만료 월은 01~12 사이로 입력해주세요.');
  }
};

export const validateCVC = (value: string) => {
  if (!/^\d{3}$/.test(value)) {
    throw new Error('보안 코드는 숫자 3개를 입력해주세요.');
  }
};

export const validateCardPassword = (value: string) => {
  if (!/^\d{2}$/.test(value)) {
    throw new Error('카드 비밀번호는 앞 자리 두 개를 입력해주세요.');
  }
};
