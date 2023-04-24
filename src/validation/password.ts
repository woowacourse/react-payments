export const validatePassword = (value: string) => {
  const regExp = /^\d{0,1}$/;
  return regExp.test(value);
};
