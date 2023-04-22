import { isAlphabetInput, isNumberInput } from '../utils/util';

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
