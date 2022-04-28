const inputNumberOnly = (value) => {
  return value
    .replace(/[^0-9.]/g, '')
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '');
};

const limitInputLength = (value, length) => {
  return value.slice(0, length);
};

export { inputNumberOnly, limitInputLength };
