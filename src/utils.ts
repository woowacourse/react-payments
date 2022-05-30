export const isNumber = (value: number) => {
  return !Number.isNaN(value) && typeof value === 'number';
};

export const isEnglish = (value: string) => {
  const regExpression = /^[\sa-zA-Z]*$/;
  return regExpression.test(value);
};

export const isObject = (value: any) => {
  return typeof value === 'object';
};
