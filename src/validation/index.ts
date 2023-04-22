import { LENGTH } from 'constants/constants';

export const areValidInfo = (info: any) => {
  const { month, year, code, password1, password2 } = info;

  const cardNumbers = Array.from(
    { length: 4 },
    (_, index) => info[`number${index + 1}`]
  );

  const validateCardNumber = validation.isAllValidLength(
    cardNumbers,
    LENGTH.EACH_CARD_NUMBER
  );
  const validateDate = validation.isAllValidLength(
    [month, year],
    LENGTH.EXPIRATION
  );
  const validateCode = validation.isValidLength(code, LENGTH.SECURITY_CODE);
  const validatePassword = validation.isAllValidLength(
    [password1, password2],
    LENGTH.EACH_PASSWORD
  );

  const validationResult = [
    validateCardNumber,
    validateDate,
    validateCode,
    validatePassword,
  ];

  return validationResult.every((result) => result === true);
};

const validation = {
  isAllValidLength(array: string[], length: number) {
    return array.every((value) => value.length === length);
  },

  isValidLength(value: string, length: number) {
    return value.length === length;
  },
};
