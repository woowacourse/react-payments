export const checkValidCVCNumber = (value: string) => {
  if (value.length === 3) return true;
  return false;
};
