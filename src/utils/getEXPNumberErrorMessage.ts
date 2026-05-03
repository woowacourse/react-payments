const EXP_MONTH_RANGE_ERROR_MESSAGE =
  "유효기간 월은 1에서 12 사이의 숫자여야 합니다.";
const EXP_MONTH_LENGTH_ERROR_MESSAGE =
  "유효기간 월은 2개의 숫자로 이루어져야 합니다.";
const EXP_YEAR_LENGTH_ERROR_MESSAGE =
  "유효기간 연도는 2개의 숫자로 이루어져야 합니다.";

export const getEXPNumberErrorMessage = (
  values: string[],
): { message: string; index: number } | null => {
  if (values.length !== 2)
    throw new Error(
      "EXP 에러 메세지를 받기 위해선 length가 2인 배열이 필요합니다.",
    );

  const monthString = values[0];
  const monthNumber = Number(values[0]);
  const yearString = values[1];

  if (!(monthString.length === 2))
    return { message: EXP_MONTH_LENGTH_ERROR_MESSAGE, index: 0 };

  if (monthNumber > 12 || monthNumber < 1)
    return { message: EXP_MONTH_RANGE_ERROR_MESSAGE, index: 0 };

  if (!(yearString.length === 2))
    return { message: EXP_YEAR_LENGTH_ERROR_MESSAGE, index: 1 };

  return null;
};
