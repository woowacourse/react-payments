const PASSWORD_ERROR_MESSAGE = "올바른 비밀번호 앞 두자리를 입력해주세요";

export const getPasswordErrorMessage = (value: string) => {
  if (value.length !== 2) return PASSWORD_ERROR_MESSAGE;
  return null;
};
