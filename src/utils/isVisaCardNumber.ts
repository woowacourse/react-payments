export const isVisaCardNumber = (cardNumbers: string[]) => {
    if (cardNumbers[0].length < 1) {
        return;
    }
    if (cardNumbers[0][0] === '4') return true;
};
