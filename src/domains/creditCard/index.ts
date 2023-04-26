const creditCard = {
  convertSecuredCreditCard: (number: string) => {
    const creditCardNumberLength = number.length;
    const securedCreditNumber =
      creditCardNumberLength <= 8 ? number : number.slice(0, 8) + '●'.repeat(number.length - 8);
    return securedCreditNumber.split('').reduce(
      (a, b, i) => {
        a[Math.floor(i / 4)].push(b);
        return a;
      },
      [[], [], [], []] as string[][],
    );
  },

  addDashInCreditCardNumber(number: string) {
    return this.convertSecuredCreditCard(number)
      .filter((numbers) => !!numbers.length)
      .map((numbers) => numbers.join(''))
      .join(' - ');
  },

  removeDashInCreditCardNumber: (number: string) => number.replaceAll(' - ', ''),
};

export default creditCard;
