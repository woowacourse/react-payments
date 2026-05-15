const CVC_LENGTH_ERROR_MESSAGE = "CVC는 3개의 숫자로 이루어져야 합니다.";

export const getCvcNumberErrorMessage = (
  value: string,
): { message: string; key: "cvc" } | null => {
  if (value.length !== 3)
    return { message: CVC_LENGTH_ERROR_MESSAGE, key: "cvc" };
  return null;
};
