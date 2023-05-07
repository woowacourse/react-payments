export const validateCardNumber = (cardNumber: string) => {
  if (!Number.isInteger(Number(cardNumber))) {
    throw new Error('카드 번호는 4자리씩 16자리 숫자입니다.');
  }
};

export const validateMonth = (month: string) => {
  if (!Number.isInteger(Number(month))) {
    throw new Error('카드의 만료 달(MM)을 2자리 입력해주세요.');
  }
};

export const validateYear = (year: string) => {
  if (!Number.isInteger(Number(year))) {
    throw new Error('카드의 만료 년도(YY)를 2자리 입력해주세요.');
  }
};

export const validateOwner = (owner: string) => {
  if (/[^A-Za-z\s]/g.test(owner)) {
    throw new Error('소유자 이름은 영어만 입력해주세요.');
  }
};

export const validateSecurityCode = (securityCode: string) => {
  if (!Number.isInteger(Number(securityCode))) {
    throw new Error('보안 코드는 카드 뒷면의 번호 3자리 숫자입니다.');
  }
};

export const validateCardPassword = (cardPassword: string) => {
  if (!Number.isInteger(Number(cardPassword))) {
    throw new Error('카드 비밀번호');
  }
};

export const validateExpirationDate = ({ month: _month, year: _year }: { month: string; year: string }) => {
  const month = Number(_month);
  const year = Number(_year);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear() % 100;

  const isExpired = year < currentYear || (year === currentYear && month < currentMonth);

  if (month > 12 || month < 1) {
    throw new Error('01월 부터 12월 사이를 입력해주세요.');
  }

  if (isExpired) {
    throw new Error('유효기간이 지난 카드입니다.');
  }
};
