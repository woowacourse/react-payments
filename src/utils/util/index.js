export const objectToString = ({ targetObject, separator = ' ', hideStartIndex }) => {
  if (hideStartIndex) {
    return Object.values(targetObject)
      .map((value, index) => (index >= hideStartIndex ? '*'.repeat(value.length) : value))
      .join(' ');
  }
  return Object.values(targetObject).join(separator);
};
