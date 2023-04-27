import { CREDIT_CARD_NUMBER } from '@Constants/creditCard';

const creditCard = {
  convertSecuredCreditCard: (number: string) => {
    const creditCardNumberLength = number.length;
    const securedCreditNumber =
      creditCardNumberLength <= CREDIT_CARD_NUMBER.iilLength
        ? number
        : number.slice(0, CREDIT_CARD_NUMBER.iilLength) + '●'.repeat(number.length - CREDIT_CARD_NUMBER.iilLength);
    return securedCreditNumber.split('').reduce(
      (a, b, i) => {
        a[Math.floor(i / 4)].push(b);
        return a;
      },
      [[], [], [], []] as string[][],
    );
  },

  addDashInCreditCardNumbers(number: string) {
    return this.convertSecuredCreditCard(number)
      .filter((numbers) => !!numbers.length)
      .map((numbers) => numbers.join(''))
      .join(' - ');
  },

  removeDashInCreditCardNumber: (number: string) => number.replaceAll(' - ', ''),
};

export default creditCard;
