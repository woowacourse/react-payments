export const isNumber = (value: string) => {
  const regex = /^\d*$/;
  return regex.test(value);
};

export const isEnglish = (value: string) => {
  const regex = /^[a-zA-Z\s]*$/;
  return regex.test(value);
};

export const isOverMaxLength = (value: string, maxLength: number) => {
  return value.length > maxLength;
};
