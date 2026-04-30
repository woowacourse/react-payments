// 숫자인지 검증은 isCardNumber에서 담당
// getCardNumberErrorMessage는 4개씩 총 16개의 숫자인지만 검증
const ERROR_MESSAGE = '카드번호는 4개씩 총 16개의 숫자로 이루어져야 합니다.';
export const getCardNumberErrorMessage = (values: string[]) => {
    if (values.some((value) => value.length !== 4)) return ERROR_MESSAGE;
    return null;
};
