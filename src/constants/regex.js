const REGEX = {
  NUMBER: /^[0-9]*$/,
  NOT_NUMBER: /[^0-9]/g,
  RGB: /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/,
  EXPIRY_DATE: /^(0[1-9]|1[012])\s\/\s([0-9]){2}$/,
  TEXT_WITH_LENGTH: (length) => new RegExp(`.{1,${length}}`, 'g'),
  NUMBER_WITH_LENGTH: (length) => new RegExp(`^[0-9]{${length}}$`, 'g'),
};

export default REGEX;
