import { Card } from '../../../types';
import { isNumberString } from '../../../utils/validator';

export const isValidCardNumber = (value: string) => isNumberString(value) && value.length <= 4;

export const isValidExpMonth = (value: string) => isNumberString(value) && value.length <= 2 && Number(value) <= 12;

export const isValidExpYear = (value: string) => isNumberString(value) && value.length <= 2;

export const isValidOwnerName = (value: string) => value.length <= 30 && !/[^a-zA-Z\s]/g.test(value);

export const isValidCVC = (value: string) => isNumberString(value) && value.length <= 3;

export const isValidPassword = (value: string) => isNumberString(value) && value.length <= 1;

export const isAllInputFilled = ({ cardNumber, cardBrand, CVC, expDate, ownerName, password }: Card) =>
  cardNumber.every(el => el.length === 4) &&
  cardBrand.name &&
  cardBrand.color &&
  expDate.month.length === 2 &&
  expDate.year.length === 2 &&
  CVC.length === 3 &&
  password[0].length === 1 &&
  password[1].length === 1 &&
  ownerName.length > 0;
