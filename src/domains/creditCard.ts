import creditCardCompanies from 'assets/data/creditCardCompanies';

export const convertSecuredCreditCard = (number: string) => {
  const creditCardNumberLength = number.length;
  const securedCreditNumber = creditCardNumberLength <= 8
    ? number
    : number.slice(0, 8) + '●'.repeat(number.length - 8);
  const numberArrays = securedCreditNumber.match(/.{1,4}/g) ?? [];
  return numberArrays.map((n) => n.split(''));
};

export const findCreditCardCompanyById = (id: string) => {
  const index = creditCardCompanies.findIndex((c) => c.id === id);
  if (index === -1) {
    return {
      id: 'default',
      name: 'COMPANY',
      color: 'white',
      backgroundColor: 'black'
    };
  }
  return creditCardCompanies[index];
};
export default {};
