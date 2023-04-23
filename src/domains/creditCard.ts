export const convertSecuredCreditCard = (number: string) => {
  const creditCardNumberLength = number.length;
  const securedCreditNumber = creditCardNumberLength <= 8
    ? number
    : number.slice(0, 8) + '●'.repeat(number.length - 8);
  const numberArrays = securedCreditNumber.match(/.{1,4}/g) ?? [];
  return numberArrays.map((n) => n.split(''));
};
export default {};
