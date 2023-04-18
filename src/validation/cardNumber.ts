export const validateCardNumber = (value: string) => {
  const regExp = /^\d{1,4}$/;
  return regExp.test(value);
};
