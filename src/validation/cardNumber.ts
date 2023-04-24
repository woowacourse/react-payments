export const validateCardNumber = (value: string) => {
  const regExp = /^\d{1}$/;

  return regExp.test(value);
};
