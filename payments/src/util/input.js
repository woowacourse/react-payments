const blockCharacter = (value) => {
  return value.replace(/[^\d]/g, "").replace(".", "");
};

const limitInputLength = (value, maxLength) => {
  return value.substring(0, maxLength);
};

const limitExceptUpperCase = (value) => {
  return value.replace(/[^A-Z\s]*/g, "").replace(".", "");
};

export { blockCharacter, limitExceptUpperCase, limitInputLength };
