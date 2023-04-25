export const validateCardOwner = (owner: string) => {
  const regExp = /^[A-Z\s]+$/;

  return regExp.test(owner);
};
