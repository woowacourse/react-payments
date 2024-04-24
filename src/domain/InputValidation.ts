import ERROR_MESSAGES from '../constants/error';
import {
  DOUBLE_BLANK,
  MONTH_RANGE,
  UPPERCASE_AND_SPACE_ONLY,
  YEAR_RANGE,
} from '../constants/system';
import { CardNumbers, ExpirationDate } from '../types/card';

function checkMaxLength (n : string, maxLength : number){
  if(n.length !== maxLength){
    throw new Error(`${maxLength} 자리를 입력해주세요.`);
  }
}
function checkTrimBlank(n: string) {
  console.log(n);
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
  
  [key: string]: (n: string, maxLength:number) => void;
}

const Validation: ValidationMap = {
  cardNumber: (n: string, maxLength:number) => {
    checkTrimBlank(n);
    validateNumber(n);
    checkMaxLength(n, maxLength);
  },
  month: (n: string, maxLength:number) => {
    checkTrimBlank(n);
    validateNumber(n);
    validateMonth(n);
    checkMaxLength(n, maxLength);
  },
  year: (n: string, maxLength:number) => {
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

};

export const validateCarNumbers = (cardNumbers : CardNumbers) => {
  const values = Object.values(cardNumbers)
  values.forEach(cardNumber => {
    Validation['cardNumber'](cardNumber, 4)
  });
}


export const validateExpirationDate = (expirationDate : ExpirationDate) => {
  const values = Object.entries(expirationDate);
  values.forEach(([key, value]) => {
    Validation[key](value, 2)
  });
}


export default Validation;
