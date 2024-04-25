import ERROR_MESSAGES from '../constants/error';
import {
  DOUBLE_BLANK,
  MONTH_RANGE,
  UPPERCASE_AND_SPACE_ONLY,
  YEAR_RANGE,
} from '../constants/system';
import {
  CardNumbers,
  CVC,
  ExpirationDate,
  Password,
  UserName,
} from '../types/card';

function checkMaxLength(n: string, maxLength: number) {
  if (n.length !== maxLength) {
    throw new Error(`${maxLength} 자리를 입력해주세요.`);
  }
}
function checkTrimBlank(n: string) {
  if ((n.trim() === '' && n !== '') || n.trim().length !== n.length) {
    throw new Error(ERROR_MESSAGES.INVALID_TRIM_BLANK);
  }
}

function checkDoubleBlank(n: string) {
  if (DOUBLE_BLANK.test(n)) {
    throw new Error(ERROR_MESSAGES.INVALID_DOUBLE_BLANK);
  }
}

function validateNumber(n: string) {
  if (!Number.isInteger(Number(n))) {
    throw new Error(ERROR_MESSAGES.INVALID_ONLY_NUMBER);
  }
}

function checkEmpty(n: string) {
  if (n.length === 0) {
    return true;
  }
}

function validateMonth(n: string) {
  if (checkEmpty(n)) return;
  const month = Number(n);
  if (!(MONTH_RANGE.MIN <= month && month <= MONTH_RANGE.MAX)) {
    throw new Error(ERROR_MESSAGES.INVALID_MONTH);
  }
}

function validateYear(n: string) {
  if (checkEmpty(n)) return;
  const year = Number(n);
  if (!(YEAR_RANGE.MIN <= year && year <= YEAR_RANGE.MAX)) {
    throw new Error(ERROR_MESSAGES.INVALID_YEAR);
  }
}

function validateUpperCase(str: string) {
  if (!UPPERCASE_AND_SPACE_ONLY.test(str) && str.length !== 0) {
    throw new Error(ERROR_MESSAGES.INVALID_ONLY_UPPERCASE);
  }
}

interface ValidationMap {
  [key: string]: (n: string, maxLength: number) => void;
}

const Validation: ValidationMap = {
  cardNumber: (n: string, maxLength: number) => {
    checkTrimBlank(n);
    validateNumber(n);
    // checkMaxLength(n, maxLength);
  },
  month: (n: string, maxLength: number) => {
    checkTrimBlank(n);
    validateNumber(n);
    validateMonth(n);
    checkMaxLength(n, maxLength);
  },
  year: (n: string, maxLength: number) => {
    checkTrimBlank(n);
    validateNumber(n);
    validateYear(n);
    checkMaxLength(n, maxLength);
  },
  userName: (n: string, maxLength = 0) => {
    checkTrimBlank(n);
    checkDoubleBlank(n);
    validateUpperCase(n);
  },
  CVC: (n: string, maxLength: number) => {
    checkTrimBlank(n);
    validateNumber(n);
  },

  password: (n: string, maxLength: number) => {
    checkTrimBlank(n);
    validateNumber(n);
  },
};

export const validateCarNumbers = (cardNumbers: CardNumbers) => {
  const isNotAllError = Object.values(cardNumbers).reduce((pre, cur) => {
    if (!cur.isError && cur.value !== '' && cur.value.length === 4) {
      return pre + 1;
    }
    return pre;
  }, 0);
  if (isNotAllError !== 4) {
    throw new Error('');
  }
};

export const validateExpirationDate = (expirationDate: ExpirationDate) => {
  const isNotAllError = Object.values(expirationDate).reduce((pre, cur) => {
    if (!cur.isError && cur.value !== '' && cur.value.length === 2) {
      return pre + 1;
    }
    return pre;
  }, 0);
  if (isNotAllError !== 2) {
    throw new Error('');
  }
};

export const validateUserName = (userName: UserName) => {
  const isNotAllError = Object.values(userName).reduce((pre, cur) => {
    if (!cur.isError && cur.value !== '' && cur.value.length > 3) {
      return pre + 1;
    }
    return pre;
  }, 0);
  if (isNotAllError !== 1) {
    throw new Error('');
  }
};
export const validateCVC = (CVC: CVC) => {
  const isNotAllError = Object.values(CVC).reduce((pre, cur) => {
    if (!cur.isError && cur.value !== '' && cur.value.length === 3) {
      return pre + 1;
    }
    return pre;
  }, 0);
  if (isNotAllError !== 1) {
    throw new Error('');
  }
};

export const validatePassword = (password: Password) => {
  const isNotAllError = Object.values(password).reduce((pre, cur) => {
    if (!cur.isError && cur.value !== '' && cur.value.length === 2) {
      return pre + 1;
    }
    return pre;
  }, 0);
  if (isNotAllError !== 1) {
    throw new Error('');
  }
};

export default Validation;
