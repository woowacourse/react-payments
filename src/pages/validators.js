import { CARD_INFO_RULES } from '../constants';

const isValidCardNumberUnit = value => {
  return Number.isInteger(Number(value)) && value.length <= CARD_INFO_RULES.NUMBER_UNIT_LENGTH;
};

const isValidCardExpireDateUnit = (value, index) => {
  const parsedValue = value.startsWith('0') && value.length !== 1 ? value.slice(1) : value;
  if (index === 0) {
    return value !== '0' && value !== '' && 1 <= Number(parsedValue) && Number(parsedValue) <= 12;
  }
  return /^\d{0,2}$/.test(parsedValue);
};

const isValidCardHolderName = value => {
  return /^[a-z]*$/i.test(value) && value.length <= CARD_INFO_RULES.HOLDER_NAME_MAX_LENGTH;
};

const isValidCardSecurityCode = value => {
  return Number.isInteger(Number(value)) && value.length <= CARD_INFO_RULES.SECURITY_CODE_LENGTH;
};

const isValidCardPasswordUnit = value => {
  return Number.isInteger(Number(value)) && value.length <= 1;
};

export {
  isValidCardNumberUnit,
  isValidCardExpireDateUnit,
  isValidCardHolderName,
  isValidCardSecurityCode,
  isValidCardPasswordUnit,
};
