export const PASSWORD_LENGTH = 2;

const ERROR_MESSAGE = {
  RANGE: 'PASSWORD를 전부 채워주세요.',
};

export const getErrorPassword = (password: string): string | undefined => {
  if (password.length !== PASSWORD_LENGTH) return ERROR_MESSAGE.RANGE;
  return;
};

export const validatePassword = (password: string): boolean => {
  return getErrorPassword(password) === undefined;
};
