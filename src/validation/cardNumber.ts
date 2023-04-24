export const validateCardNumber = (value: string) => {
  const regExp = /^\d{0,4}$/;
  return regExp.test(value);
};
