import {
  BACKSPASE_KEY,
  CARD_NUMBER_ERASE_SYMBOL,
  ERASE_UNTIL_CARD_NUMBER,
  EXPIRED_DATE_ERASE_SYMBOL,
  EXPIRED_DATE_PLUS_SYMBOL,
  INPUT_MAX_LENGTH,
  SEPERATED_CARD_NUMBER_LENGTH,
} from '../constants';

export const handleCardNumberChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
  cardNumberSecureMode(e);

  cardNumberPlusSymbol(e);
};

export const cardNumberSecureMode = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.value.length > SEPERATED_CARD_NUMBER_LENGTH.SECOND)
    e.target.value =
      e.target.value.substring(
        SEPERATED_CARD_NUMBER_LENGTH.NUMBER_START,
        SEPERATED_CARD_NUMBER_LENGTH.SECURE_NUMBER_START
      ) +
      e.target.value
        .substring(SEPERATED_CARD_NUMBER_LENGTH.SECURE_NUMBER_START, e.target.value.length)
        .replace(/[0-9]/g, '•');
};

export const cardNumberPlusSymbol = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (
    e.target.value.length === SEPERATED_CARD_NUMBER_LENGTH.FIRST ||
    e.target.value.length === SEPERATED_CARD_NUMBER_LENGTH.SECOND ||
    e.target.value.length === SEPERATED_CARD_NUMBER_LENGTH.THIRD
  ) {
    e.target.value = e.target.value + ' - ';
  }
};

export const handleCardNumberKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === BACKSPASE_KEY) {
    if (e.currentTarget.value.length < CARD_NUMBER_ERASE_SYMBOL.FIRST)
      e.currentTarget.value = e.currentTarget.value.substring(0, ERASE_UNTIL_CARD_NUMBER.FIRST);
    if (e.currentTarget.value.length < CARD_NUMBER_ERASE_SYMBOL.SECOND)
      e.currentTarget.value = e.currentTarget.value.substring(0, ERASE_UNTIL_CARD_NUMBER.SECOND);
    if (e.currentTarget.value.length < CARD_NUMBER_ERASE_SYMBOL.THIRD)
      e.currentTarget.value = e.currentTarget.value.substring(0, ERASE_UNTIL_CARD_NUMBER.THIRD);
    if (e.currentTarget.value.length < CARD_NUMBER_ERASE_SYMBOL.FOURTH)
      e.currentTarget.value = e.currentTarget.value.substring(0, ERASE_UNTIL_CARD_NUMBER.FOURTH);
  }
};

export const handleExpiredDateChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.value.length > INPUT_MAX_LENGTH.expiredDate) return;

  if (e.target.value.length === EXPIRED_DATE_PLUS_SYMBOL) {
    e.target.value = e.target.value + ' / ';
  }
};

export const handleExpiredDateKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === BACKSPASE_KEY) {
    if (e.currentTarget.value.length <= EXPIRED_DATE_ERASE_SYMBOL.SEPARATE_FIRST) {
      e.currentTarget.value = e.currentTarget.value.substring(
        EXPIRED_DATE_ERASE_SYMBOL.FROM,
        EXPIRED_DATE_ERASE_SYMBOL.TO_FIRST
      );
    }
    if (e.currentTarget.value.length <= EXPIRED_DATE_ERASE_SYMBOL.SEPARATE_SECOND) {
      e.currentTarget.value = e.currentTarget.value.substring(
        EXPIRED_DATE_ERASE_SYMBOL.FROM,
        EXPIRED_DATE_ERASE_SYMBOL.TO_SECOND
      );
    }
  }
};

export const handleOwnerChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.target.value = e.target.value.toLocaleUpperCase();
};
