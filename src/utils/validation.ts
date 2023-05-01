import { INPUT_MIN_LENGTH, PASSWORD_DIGIT_INDEX } from '../constants';
import { CardType } from '../types';

export const cardNumberValidation = (cardNumber: string) => {
  const cardNumberArray = cardNumber.trim();

  if (isNaN(Number(cardNumberArray))) return false;

  return true;
};

export const expiredDateValidation = (expiredDate: string) => {
  const [month, year] = expiredDate.split(' / ');
  if (month.length === 1) {
    if (Number(month) * 10 > 10) return false;
  }

  if (!month && !year) return true;

  if (month === '00' || Number(month) > 12) return false;

  if (year && Number(year) < 23) return false;

  if ((month && isNaN(Number(month))) || (year && isNaN(Number(year)))) return false;

  return true;
};

export const ownerNameValidation = (ownerName: string) => {
  const regExp = /[a-zA-Z]/g;

  if (!ownerName) return true;

  if (!regExp.test(ownerName)) return false;

  return true;
};

export const cvcValidation = (cvc: string) => {
  const regExp = /[0-9]/g;

  if (!cvc) return true;

  if (!regExp.test(cvc)) return false;

  return true;
};

export const passwordValidation = (password1: string, password2: string) => {
  const regExp1 = /[0-9]/g;
  const regExp2 = /[0-9]/g;

  if (!password1 && !password2) return true;
  if (password1 && !regExp1.test(password1)) return false;
  if (password2 && !regExp2.test(password2)) return false;

  return true;
};

const inputLengthValidation = (card: CardType) => {
  if (card.cardNumber.length !== INPUT_MIN_LENGTH.cardNumber) return false;
  if (card.expiredDate.length !== INPUT_MIN_LENGTH.expiredDate) return false;
  if (card.ownerName.length < INPUT_MIN_LENGTH.ownerName) return false;
  if (card.cvc.length !== INPUT_MIN_LENGTH.cvc) return false;
  if (card.password[PASSWORD_DIGIT_INDEX.FIRST].length !== INPUT_MIN_LENGTH.passwordFirst) return false;
  if (card.password[PASSWORD_DIGIT_INDEX.SECOND].length !== INPUT_MIN_LENGTH.passwordSecond) return false;
  return true;
};

export const inputFormValidation = (realCardNumber: string, card: CardType) => {
  if (
    cardNumberValidation(realCardNumber) &&
    expiredDateValidation(card.expiredDate) &&
    ownerNameValidation(card.ownerName) &&
    cvcValidation(card.cvc) &&
    passwordValidation(card.password[PASSWORD_DIGIT_INDEX.FIRST], card.password[PASSWORD_DIGIT_INDEX.SECOND]) &&
    inputLengthValidation(card)
  )
    return true;

  return false;
};
