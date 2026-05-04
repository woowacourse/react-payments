const EXP_MONTH_RANGE_ERROR_MESSAGE =
  "유효기간 월은 1에서 12 사이의 숫자여야 합니다.";
const EXP_MONTH_LENGTH_ERROR_MESSAGE =
  "유효기간 월은 2개의 숫자로 이루어져야 합니다.";
const EXP_YEAR_LENGTH_ERROR_MESSAGE =
  "유효기간 연도는 2개의 숫자로 이루어져야 합니다.";

export const getEXPNumberErrorMessage = (values: {
  mm: string;
  yy: string;
}): { message: string; key: "mm" | "yy" } | null => {
  const monthString = values.mm;
  const monthNumber = Number(values.mm);
  const yearString = values.yy;

  if (!(monthString.length === 2))
    return { message: EXP_MONTH_LENGTH_ERROR_MESSAGE, key: "mm" };

  if (monthNumber > 12 || monthNumber < 1)
    return { message: EXP_MONTH_RANGE_ERROR_MESSAGE, key: "mm" };

  if (!(yearString.length === 2))
    return { message: EXP_YEAR_LENGTH_ERROR_MESSAGE, key: "yy" };

  return null;
};
