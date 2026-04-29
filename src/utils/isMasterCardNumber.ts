export const isMasterCardNumber = (cardNumbers: string[]) => {
    if (cardNumbers[0].length < 2) return false;
    if (cardNumbers[0][0] !== '5') return false;
    const secondNumber = Number(cardNumbers[0][1]);
    return 1 <= secondNumber && secondNumber <= 5;
};
