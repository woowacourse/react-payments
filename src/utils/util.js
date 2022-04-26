export const objectToString = (object, separator = ' ') => {
  return Object.values(object).join(separator);
};
