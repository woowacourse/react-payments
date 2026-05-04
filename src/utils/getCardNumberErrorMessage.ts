// 숫자인지 검증은 isCardNumber에서 담당
// getCardNumberErrorMessage는 4개씩 총 16개의 숫자인지만 검증
const ERROR_MESSAGE = "카드번호는 4개씩 총 16개의 숫자로 이루어져야 합니다.";
export const getCardNumberErrorMessage = (values: {
  first: string;
  second: string;
  third: string;
  fourth: string;
}): {
  message: string;
  key: "first" | "second" | "third" | "fourth";
} | null => {
  if (values.first.length !== 4)
    return { message: ERROR_MESSAGE, key: "first" };
  if (values.second.length !== 4)
    return { message: ERROR_MESSAGE, key: "second" };
  if (values.third.length !== 4)
    return { message: ERROR_MESSAGE, key: "third" };
  if (values.fourth.length !== 4)
    return { message: ERROR_MESSAGE, key: "fourth" };
  return null;
};
