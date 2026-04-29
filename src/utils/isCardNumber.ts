// 전달받은 값이 숫자가 아니면 false 반환
export const isCardNumber = (cardNumber: string) => {
    if (Number.isNaN(Number(cardNumber))) return false;
    return true;
};

// TODO 리팩토링하다 보니까 길이 검증 빠지게 돼서 그냥 `Number.isNaN(Number(cardNumber))` 그대로 박아두면 될 것 같은데 어떻게 할지 고민
// isMonthNumberLength, isYearNumber도 똑같음
