import { CARD_INFO } from "./constants";

const replaceExpirationDate = date => {
  if (typeof date !== "string") {
    throw new TypeError("expirationDate should be a string");
  }

  return date.replace(/[\D]/g, "");
};

const replaceOwnerName = name => {
  if (typeof name !== "string") {
    throw new TypeError("ownerName should be a string");
  }

  return name.toUpperCase();
};

const replace = {
  [CARD_INFO.EXPIRATION_MONTH]: replaceExpirationDate,
  [CARD_INFO.EXPIRATION_YEAR]: replaceExpirationDate,
  [CARD_INFO.OWNER_NAME]: replaceOwnerName,
};

const replaceValue = (inputName, value) => {
  try {
    if (!Object.values(CARD_INFO).includes(inputName)) {
      throw new TypeError("Invalid validation name");
    }
    if (!(inputName in replace)) {
      return value;
    }

    return replace[inputName](value);
  } catch (error) {
    throw error;
  }
};

export default replaceValue;
