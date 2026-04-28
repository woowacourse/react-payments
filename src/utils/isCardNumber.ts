export const isCardNumber = (cardNumber: string) => {
    if (Number.isNaN(cardNumber)) return false;
    return cardNumber.length >= 5;
};
