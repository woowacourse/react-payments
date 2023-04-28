export const validateExpiry = (expiry: string) => {
  const [month, year] = [parseInt(expiry.slice(0, 2), 10), parseInt(expiry.slice(2), 10)];
  if (month < 1 || month > 12 || year <= 22) {
    return true;
  }
  if (expiry.length > 0 && expiry.length < 4) {
    return true;
  }
  return false;
};
export const validateCVC = (cvc: string) => cvc === '' || cvc.length < 3;
export const validateNumber = (number: string) => number.length > 0 && number.length < 16;
export const validatePassword = (first: string, second: string) => !(
  (first.length > 0 && second.length > 0) || (first.length === 0 && second.length === 0)
);
export default {};
