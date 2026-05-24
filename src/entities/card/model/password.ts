export const PASSWORD_LENGTH = 2;

export const validatePassword = (password: string): boolean => {
  return password.length === PASSWORD_LENGTH;
};
