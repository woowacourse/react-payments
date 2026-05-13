const CVC_LENGTH_ERROR_MESSAGE = "CVC는 3개의 숫자로 이루어져야 합니다.";

export const getCvcNumberErrorMessage = (value: string) => {
  if (value.length !== 3) return CVC_LENGTH_ERROR_MESSAGE;
  return null;
};
