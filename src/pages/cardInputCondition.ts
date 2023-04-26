import { isAlphabetInput, isNumberInput } from '../utils/util';

// TODO: 훅 분리 고민
export const cardExpireCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
  const length = e.target.value.length;
  const lastWord = e.target.value[length - 1];
  return length <= 5 && length > 0 && (isNumberInput(lastWord) || lastWord === '/');
};

export const securityCodeCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
  return e.target.value.length <= 3;
};

export const cardOwnerCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
  const length = e.target.value.length;
  const lastWord = e.target.value[length - 1];
  return length <= 30 && !(length > 0 && !isAlphabetInput(lastWord.toUpperCase()));
};

export const cardPasswordCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
  return e.target.value.length <= 1;
};

export const cardExpireMonthCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
  const inputValue = e.target.value;
  const month = +inputValue;
  return month >= 0 && month <= 12 && inputValue.length <= 2;
};

const now = new Date();

export const cardExpireYearCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
  const inputValue = e.target.value;
  return inputValue.length <= 2;
};
