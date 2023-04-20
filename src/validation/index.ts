export const areValidInfo = (info: any) => {
  const { month, year, code, password1, password2 } = info;

  const cardNumbers = Array.from(
    { length: 4 },
    (_, index) => info[`number${index + 1}`]
  );

  const validateCardNumber = validation.isAllValidLength(cardNumbers, 4);
  const validateDate = validation.isAllValidLength([month, year], 2);
  const validateCode = validation.isValidLength(code, 3);
  const validatePassword = validation.isAllValidLength(
    [password1, password2],
    1
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
