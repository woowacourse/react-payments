export const isNumeric = (value: string) => {
  return value === "" || /^\d+$/.test(value);
};
