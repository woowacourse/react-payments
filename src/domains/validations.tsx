export const validateExpiry = (expiry: string) => {
  const [month, year] = [parseInt(expiry.slice(0, 2), 10), parseInt(expiry.slice(2), 10)];
  if (month < 1 || month > 12 || year <= 22) {
    return true;
  }
  if (expiry.length < 4) {
    return true;
  }
  return false;
};
export const validateCVC = (cvc: string) => cvc.length !== 3;
export const validateNumber = (number: string) => number.length < 16;
export const validatePassword = (
  first: string,
  second: string
) => first.length !== 1 || second.length !== 1;
export default {};
