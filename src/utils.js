export const isNumber = (value) => {
  return !Number.isNaN(value) && typeof value === 'number';
};

export const isEnglish = (value) => {
  const regExpression = /^[\sa-zA-Z]*$/;

  return regExpression.test(value);
};
