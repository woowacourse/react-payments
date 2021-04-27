export const hasObjectAnyValue = obj => {
  return Object.values(obj).some(value => value);
};
