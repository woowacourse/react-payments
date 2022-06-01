import { ADD_CARD_FORM_CONDITION } from '../constants';

const isValidCardNumberUnit = (value: string): boolean => {
  return Number.isInteger(Number(value)) && value.length <= ADD_CARD_FORM_CONDITION.NUMBER_UNIT_LENGTH;
};

const isValidCardExpireDateUnit = (value: string, index: number): boolean => {
  const parsedValue = value.startsWith('0') && value.length !== 1 ? value.slice(1) : value;

  if (index === 0) {
    return (
      /^\d{0,2}$/.test(parsedValue) &&
      (value === '0' || value === '' || (1 <= Number(parsedValue) && Number(parsedValue) <= 12))
    );
  }

  return /^\d{0,2}$/.test(parsedValue);
};

const isValidCardHolderName = (value: string): boolean => {
  return /^[a-z]*$/i.test(value) && value.length <= ADD_CARD_FORM_CONDITION.HOLDER_NAME_MAX_LENGTH;
};

const isValidCardSecurityCode = (value: string): boolean => {
  return Number.isInteger(Number(value)) && value.length <= ADD_CARD_FORM_CONDITION.SECURITY_CODE_LENGTH;
};

const isValidCardPasswordUnit = (value: string): boolean => {
  return Number.isInteger(Number(value)) && value.length <= 1;
};

export {
  isValidCardNumberUnit,
  isValidCardExpireDateUnit,
  isValidCardHolderName,
  isValidCardSecurityCode,
  isValidCardPasswordUnit,
};
