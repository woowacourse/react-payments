const inputNumberOnly = (value) => {
  return value
    .replace(/[^0-9.]/g, '')
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '');
};

const inputEnglishOnly = (value) => {
  return value
    .replace(/[^A-Za-z.]/g, '')
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '');
};

const limitInputLength = (value, length) => {
  return value.slice(0, length);
};

const validator = (conditions) => {
  conditions.forEach(({ checker, errorMsg }) => {
    if (checker()) throw new Error(errorMsg);
  });
};

export { inputNumberOnly, inputEnglishOnly, limitInputLength, validator };
