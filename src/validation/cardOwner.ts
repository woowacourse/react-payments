export const validateCardOwner = (owner: string) => {
  const regExp = /^[A-Z]*$|\s/;

  console.log(regExp.test(owner));
  return regExp.test(owner);
};
