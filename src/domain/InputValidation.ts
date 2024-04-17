function checkBlank(n: string) {
  if ((n.trim() === '' && n !== '') || n.trim().length !== n.length) {
    throw new Error('불필요한 공백이 포함되어 있습니다.');
  }
}

function checkDoubleBlank(n: string) {
  if (/ {2,}/.test(n)) {
    throw new Error('공백이 2번 이상 반복되고 있습니다.');
  }
}

function validateNumber(n: string) {
  if (!Number.isInteger(Number(n))) {
    throw new Error('숫자만 입력해주세요.');
  }
}

function validateMonth(n: string) {
  const month = Number(n);
  if (!(1 <= month && month <= 12)) {
    throw new Error('카드의 유효한 유효기간(월)을 입력해주세요.');
  }
}

function validateYear(n: string) {
  const year = Number(n);
  if (!(0 <= year && year <= 99)) {
    throw new Error('카드의 유효한 유효기간(년도)을 입력해주세요.');
  }
}

function validateUpperCase(str: string) {
  if (!/^[A-Z\s]+$/.test(str) && str.length !== 0) {
    throw new Error('영대문자로만 입력해주세요.');
  }
}

interface ValidationMap {
  [key: string]: (n: string) => void;
}

const Validation: ValidationMap = {
  cardNumber: (n: string) => {
    checkBlank(n);
    validateNumber(n);
  },
  month: (n: string) => {
    checkBlank(n);
    validateNumber(n);
    validateMonth(n);
  },
  year: (n: string) => {
    checkBlank(n);
    validateNumber(n);
    validateYear(n);
  },
  userName: (n: string) => {
    checkBlank(n);
    checkDoubleBlank(n);
    validateUpperCase(n);
  },
};

export default Validation;
