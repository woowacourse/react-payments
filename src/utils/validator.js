export const isNumber = (value) => {
  const numberReg = /^[0-9]/gi;

  if (!numberReg.test(Number(value))) {
    return false;
  }
  return true;
};
