import { CARD_INFO, LENGTH } from "./constants";

const replaceOwnerName = name => {
  if (name.length > LENGTH.OWNER_NAME.MAX) {
    name = name.slice(LENGTH.OWNER_NAME.MIN, LENGTH.OWNER_NAME.MAX);
  }

  return name.toUpperCase();
};

const replaceValue = (inputName, value) => {
  try {
    if (!Object.values(CARD_INFO).includes(inputName)) {
      throw new TypeError("Invalid validation name");
    }
    if (typeof value !== "string") {
      throw new TypeError(`${inputName} should be a string`);
    }
    if (inputName === CARD_INFO.OWNER_NAME) {
      return replaceOwnerName(value);
    }

    return value.replace(/[\D]/g, "");
  } catch (error) {
    throw error;
  }
};

export default replaceValue;
