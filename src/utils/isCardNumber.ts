export const isCardNumber = (cardNumber: string) => {
    if (Number.isNaN(Number(cardNumber))) return false;
    return cardNumber.length < 5;
};
