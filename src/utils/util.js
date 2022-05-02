export const objectToString = (object, separator = ' ', hideStartIndex) => {
  if (hideStartIndex) {
    return Object.values(object)
      .map((value, index) => (index >= hideStartIndex ? '*'.repeat(value.length) : value))
      .join(separator);
  }
  return Object.values(object).join(separator);
};
