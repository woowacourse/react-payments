import { NAME_INPUT_MAX_LENGTH, SECURITY_MAX_NUMBER_LENGTH } from './constants';
import { isAlphabetInput, isNumberInput } from './util';

export const cardExpireCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
  const length = e.target.value.length;
  const lastWord = length === 0 ? '' : e.target.value[length - 1];
  return (
    length <= 5 && length >= 0 && (isNumberInput(lastWord) || lastWord === '/' || lastWord === '')
  );
};

export const securityCodeCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
  return e.target.value.length <= SECURITY_MAX_NUMBER_LENGTH;
};

export const cardOwnerCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
  const length = e.target.value.length;
  const lastWord = e.target.value[length - 1];
  return (
    length <= NAME_INPUT_MAX_LENGTH && !(length > 0 && !isAlphabetInput(lastWord.toUpperCase()))
  );
};

export const cardPasswordCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
  return e.target.value.length <= 1;
};
