import {
  CARD_NUMBER,
  CVC,
  DUE_DATE,
  MONTH,
  OWNER,
  PASSWORD,
} from "../constant";

const isValidOwnerLength = (value) => value.length <= OWNER.MAX_LENGTH;

const isValidCvc = (value) => value.length <= CVC.UNIT_LENGTH && !isNaN(value);

const isOverDueDateLength = (value) => value.length > DUE_DATE.UNIT_LENGTH;

const isFilledDueDateLength = (value) => value.length === DUE_DATE.UNIT_LENGTH;

const isOverCardNumberLength = (value) =>
  value.length > CARD_NUMBER.UNIT_LENGTH;

const isFilledCardNumberLength = (value) =>
  value.length === CARD_NUMBER.UNIT_LENGTH;

const isOverPasswordLength = (value) => value.length > PASSWORD.UNIT_LENGTH;

const isFilledPasswordLength = (value) => value.length === PASSWORD.UNIT_LENGTH;

const isExpiredMonth = (value) => value > MONTH.MAX || value < MONTH.MIN;

const isExpiredYear = (value) => {
  const currentYear = new Date().getFullYear().toString().slice(2);
  return value < currentYear;
};

export {
  isValidOwnerLength,
  isValidCvc,
  isOverCardNumberLength,
  isFilledCardNumberLength,
  isOverPasswordLength,
  isFilledPasswordLength,
  isOverDueDateLength,
  isFilledDueDateLength,
  isExpiredMonth,
  isExpiredYear,
};
