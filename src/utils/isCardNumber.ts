// 전달받은 값이 숫자가 아니면 false 반환
export const isCardNumber = (cardNumber: string) => {
    if (Number.isNaN(Number(cardNumber))) return false;
    return true;
};
