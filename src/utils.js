export const isNumberValue = (value) => {
  return !/[^0-9]/g.test(value);
};
