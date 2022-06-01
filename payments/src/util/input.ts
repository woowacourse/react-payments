const blockCharacter = (value: string) => {
  return value.replace(/[^\d]/g, "").replace(".", "");
};

const limitInputLength = (value: string, maxLength: number) => {
  return value.substring(0, maxLength);
};

const limitExceptUpperCase = (value: string) => {
  return value
    .replace(/[^A-Za-z\s]*/g, "")
    .replace(".", "")
    .toUpperCase();
};

export { blockCharacter, limitExceptUpperCase, limitInputLength };
