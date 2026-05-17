const PASSWORD_ERROR_MESSAGE = "올바른 비밀번호 앞 두자리를 입력해주세요";

export const getPasswordErrorMessage = (
  value: string,
): { message: string; key: "password" } | null => {
  if (value.length !== 2)
    return { message: PASSWORD_ERROR_MESSAGE, key: "password" };
  return null;
};
