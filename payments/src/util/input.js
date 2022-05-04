const blockCharacter = (value) => {
  return value.replace(/[^\d]/g, "").replace(".", "");
};

const limitInputLength = (value, maxLength) => {
  return value.substring(0, maxLength);
};

const limitExceptUpperCase = (value) => {
  return value
    .replace(/[^A-Za-z\s]*/g, "")
    .replace(".", "")
    .toUpperCase();
};

export { blockCharacter, limitExceptUpperCase, limitInputLength };
