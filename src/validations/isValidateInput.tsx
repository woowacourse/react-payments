interface isValidateInputTableType {
  number: () => void;
  month: () => void;
  year: () => void;
  owner: () => void;
}

const isValidateInput = (value: string, section: 'number' | 'month' | 'year' | 'owner'): boolean => {
  const isValidateInputTable: isValidateInputTableType = {
    number: () => isCardNumberValidated(value),
    month: () => isCardMonthValidated(value),
    year: () => isCardYearValidated(value),
    owner: () => isCardOwnerValidated(value),
  };

  const validateFunction = isValidateInputTable[section];
  validateFunction();
};

function isCardNumberValidated(value: string) {
  const valueToNumber = Number(value);
  isNumber(valueToNumber);
  isNumberCount(value, 4);
}

function isCardMonthValidated(value: string) {
  const valueToNumber = Number(value);
  isNumber(valueToNumber);
  isInRange(valueToNumber, 1, 12);
}

function isCardYearValidated(value: string) {
  const valueToNumber = Number(value);
  const now = new Date();
  const year = now.getFullYear();
  const lastTwoDigits = year % 100;
  isNumber(valueToNumber);
  isInRange(valueToNumber, lastTwoDigits, lastTwoDigits + 10);
}

function isCardOwnerValidated(value: string) {
  isUpperCase(value);
  isInRange(value.length, 1, 30);
}

function isNumber(value: number) {
  if (isNaN(value)) {
    throw new Error('숫자를 입력해주세요.');
  }
  return true;
}

function isInRange(value: number, min: number, max: number) {
  if (value < min || value > max) {
    throw new Error(`${min} 이상 ${max} 이하로 작성해주세요.`);
  }
  return true;
}

function isUpperCase(value: string) {
  if (value !== value.toUpperCase()) {
    throw new Error('이름은 영대문자로 입력해주세요.');
  }
  return true;
}

function isNumberCount(value: string, count: number) {
  const valueLength = value.length;
  if (valueLength !== count) {
    throw new Error(`${count}글자를 입력해주세요.`);
  }
  return true;
}

export default isValidateInput;
