export const isNumberValue = (value) => {
  // TODO: 더 좋은 방법? not not 너낌..
  return !/[^0-9]/g.test(value);
};
