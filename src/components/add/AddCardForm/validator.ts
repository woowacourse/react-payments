import { CardNumberState, PasswordState } from '.';
import { Card } from '../../../types';
import { isNumberString } from '../../../utils/validator';
import {
  CARD_NUMBER_DIGITS,
  CVC_DIGITS,
  EXP_DATE_DIGITS,
  LAST_MONTH,
  MAX_OWNER_NAME_LENGTH,
} from '../../../constants/creditCard';

export const isValidCardNumber = (value: string) => isNumberString(value) && value.length <= CARD_NUMBER_DIGITS;

export const isValidExpMonth = (value: string) =>
  isNumberString(value) && value.length <= EXP_DATE_DIGITS && Number(value) <= LAST_MONTH;

export const isValidExpYear = (value: string) => isNumberString(value) && value.length <= EXP_DATE_DIGITS;

export const isValidOwnerName = (value: string) => value.length <= MAX_OWNER_NAME_LENGTH && !/[^a-zA-Z\s]/g.test(value);

export const isValidCVC = (value: string) => isNumberString(value) && value.length <= CVC_DIGITS;

export const isValidPassword = (value: string) => isNumberString(value) && value.length <= 1;

interface isAllInputFilledParamType extends Omit<Card, 'cardNumber' | 'password' | 'id' | 'nickname'> {
  cardNumber: CardNumberState;
  password: PasswordState;
}

export const isAllInputFilled = ({
  cardNumber,
  cardBrand,
  CVC,
  expDate,
  ownerName,
  password,
}: isAllInputFilledParamType) =>
  cardNumber.every(el => el.length === CARD_NUMBER_DIGITS) &&
  cardBrand.name &&
  cardBrand.color &&
  expDate.month.length === EXP_DATE_DIGITS &&
  expDate.year.length === EXP_DATE_DIGITS &&
  CVC.length === CVC_DIGITS &&
  password[0].length === 1 &&
  password[1].length === 1 &&
  ownerName.length > 0;
