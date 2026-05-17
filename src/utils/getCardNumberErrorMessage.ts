const ERROR_MESSAGE = {
  default: "카드번호는 4개씩 총 16개의 숫자로 이루어져야 합니다.",
  diners: "Diners 카드번호는 4-4-4-2 형식이어야 합니다.",
  amex: "AMEX 카드번호는 4-4-4-3 형식이어야 합니다.",
};

export const getCardNumberErrorMessage = (
  values: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  },
  cardBrand: "visa" | "master" | "diners" | "amex" | "unionpay" | null,
): {
  message: string;
  key: "first" | "second" | "third" | "fourth";
} | null => {
  const fourthLength =
    cardBrand === "diners" ? 2 : cardBrand === "amex" ? 3 : 4;
  const message =
    cardBrand === "diners"
      ? ERROR_MESSAGE.diners
      : cardBrand === "amex"
        ? ERROR_MESSAGE.amex
        : ERROR_MESSAGE.default;

  if (values.first.length !== 4) return { message, key: "first" };
  if (values.second.length !== 4) return { message, key: "second" };
  if (values.third.length !== 4) return { message, key: "third" };
  if (values.fourth.length !== fourthLength) return { message, key: "fourth" };
  return null;
};
