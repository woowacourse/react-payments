import { CARD_INFO_RULES } from "../constants/constants";

export const isInValidCardNumber = (value) => {
  return (
    !Number.isInteger(Number(value)) ||
    value.length > CARD_INFO_RULES.NUMBER_UNIT_LENGTH
  );
};

export const isInValidExpireDate = (value, order) => {
  if (order === 0) {
    return !/^$|0|(^[1-9]$)|(^1?[0-2]$)/.test(value);
  }

  return !/^\d{0,2}$/.test(value);
};

export const isInValidHolderName = (value) =>
  !/(^[a-z]*$)/i.test(value) ||
  value.length > CARD_INFO_RULES.HOLDER_NAME_MAX_LENGTH;

export const isInvalidSecurityCode = (value) =>
  !Number.isInteger(Number(value)) ||
  value.length > CARD_INFO_RULES.SECURITY_CODE_LENGTH;

export const isInvalidPassword = (value) =>
  !Number.isInteger(Number(value)) || value.length > 1;
