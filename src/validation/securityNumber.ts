export const validateSecurityNumber = (value: string) => {
  const regExp = /^\d{0,3}$/;
  return regExp.test(value);
};
