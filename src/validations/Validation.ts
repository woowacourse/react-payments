import { ERROR_MESSAGE } from '../constants/validation';

export const validateCardNumbers = (value: string) => {
  if (!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(value)) {
    throw new Error(ERROR_MESSAGE.cardNumber);
  }
};

export const validateExpirationDate = (value: [string, string]) => {
  const [month] = value;
  if (!/^(0[1-9]|1[0-2])$/.test(month)) {
    throw new Error(ERROR_MESSAGE.expirationDate);
  }
};

export const validateCVC = (value: string) => {
  if (!/^\d{3}$/.test(value)) {
    throw new Error(ERROR_MESSAGE.cvc);
  }
};

export const validateCardPassword = (value: string) => {
  if (!/^\d{2}$/.test(value)) {
    throw new Error(ERROR_MESSAGE.cardPassword);
  }
};
