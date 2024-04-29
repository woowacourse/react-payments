import CONDITION from '../constants/condition';
import { CardType } from '../types/card';
import {
  UseCVCReturnType,
  UseCardNumberReturnType,
  UseCardPasswordReturnType,
  UseCardholderNameReturnType,
  UseExpiryDateReturnType,
  UseSelectReturnType,
} from '../types/hooks';

const isValidCardNumberForm = (cardNumberInfo: UseCardNumberReturnType) => {
  const { first, second, third, fourth } = cardNumberInfo.errorInfo;
  const {
    first: firstValue,
    second: secondValue,
    third: thirdValue,
    fourth: fourthValue,
  } = cardNumberInfo.value;

  const isFirst = Boolean(firstValue) && !first.isError;
  const isSecond = Boolean(secondValue) && !second.isError;
  const isThird = Boolean(thirdValue) && !third.isError;
  const isFourth = Boolean(fourthValue) && !fourth.isError;

  const totalLength =
    firstValue.length + secondValue.length + thirdValue.length + fourthValue.length;
  const isValidLength = totalLength === CONDITION.TOTAL_CARD_NUMBER_LENGTH;
  return isValidLength && isFirst && isSecond && isThird && isFourth;
};

const isValidCardCompanyForm = (cardCompanyInfo: UseSelectReturnType<CardType>) => {
  return cardCompanyInfo.value.length > CONDITION.TEXT_LENGTH_MIN;
};

const isValidExpiryDateForm = (expiryDateInfo: {
  month: UseExpiryDateReturnType;
  year: UseExpiryDateReturnType;
}) => {
  const { month, year } = expiryDateInfo;
  const isValidMonth = Boolean(month.value) && !month.errorInfo.isError;
  const isValidYear = Boolean(year.value) && !year.errorInfo.isError;

  const totalLength = month.value.length + year.value.length;
  const isValidLength = totalLength === CONDITION.TOTAL_DATE_LENGTH;
  return isValidLength && isValidMonth && isValidYear;
};

const isValidCardholderNameForm = (cardholderNameInfo: UseCardholderNameReturnType) => {
  return cardholderNameInfo.isEnter && Boolean(cardholderNameInfo.value);
};

const isValidCVCForm = (cardCVCInfo: UseCVCReturnType) => {
  const isValidCVC = Boolean(cardCVCInfo.value) && !cardCVCInfo.errorInfo.isError;
  const isValidLength = cardCVCInfo.value.length >= CONDITION.CVC_LENGTH_MIN;
  return isValidLength && isValidCVC;
};

const isValidPasswordForm = (cardPasswordInfo: UseCardPasswordReturnType) => {
  const isValidPassword = Boolean(cardPasswordInfo.value) && !cardPasswordInfo.errorInfo.isError;
  const isValidLength = cardPasswordInfo.value.length === CONDITION.PASSWORD_LENGTH_MAX;
  return isValidLength && isValidPassword;
};

export {
  isValidCardNumberForm,
  isValidExpiryDateForm,
  isValidCardholderNameForm,
  isValidCardCompanyForm,
  isValidCVCForm,
  isValidPasswordForm,
};
