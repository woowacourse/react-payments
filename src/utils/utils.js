export const stringSeparatorFormat = (str, length, separator) => {
  const re = new RegExp(separator, 'gi');
  str = str.replace(re, '');

  if (str === '') return str;
  return str.match(new RegExp('.{1,' + length + '}', 'g')).join(separator);
};

export const isPositiveInteger = (value) => {
  return Number.isInteger(Number(value));
};

export const shuffleNumbers = (min, max) => {
  const numbers = new Set();

  while (numbers.size < max - min + 1) {
    numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return [...numbers];
};
