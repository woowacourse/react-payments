export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

export const isRequired = (str: unknown) => {
  if (!isString(str)) return false;
  return !!str;
};

export const isNumericString = (str: unknown) => {
  if (!isString(str)) return false;
  const regex = /^\d+$/;
  return regex.test(str);
};

export const isValidMonth = (month: unknown) => {
  if (!isString(month)) return false;
  // ^0[1-9] : 0으로 시작하고 뒤에 1~9가 오거나 (01~09)
  // | : 또는
  // ^1[0-2] : 1로 시작하고 뒤에 0~2가 오는 경우 (10~12)
  const regex = /^(0[1-9]|1[0-2])$/;
  return regex.test(month);
};

export const length = (value: unknown, length: number) => {
  if (!isString(value)) return false;
  return value.length === length;
};

export const minLength = (value: unknown, minLength: number) => {
  if (!isString(value)) return false;
  return value.length >= minLength;
};

export const maxLength = (value: unknown, maxLength: number) => {
  if (!isString(value)) return false;
  return value.length <= maxLength;
};
