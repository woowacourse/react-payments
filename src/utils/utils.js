export const stringSeparatorFormat = (str, length, separator) => {
  const re = new RegExp(separator, 'gi');
  str = str.replace(re, '');

  if (str === '') return str;
  return str.match(new RegExp('.{1,' + length + '}', 'g')).join(separator);
};

export const isPositiveInteger = (value) => {
  return Number.isInteger(Number(value));
};
