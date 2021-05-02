import { CARD_INFO } from "./constants";

const replaceValue = (inputName, value) => {
  try {
    if (!Object.values(CARD_INFO).includes(inputName)) {
      throw new TypeError("Invalid validation name");
    }
    if (typeof value !== "string") {
      throw new TypeError(`${inputName} should be a string`);
    }
    if (inputName === CARD_INFO.OWNER_NAME) {
      return value.toUpperCase();
    }

    return value.replace(/[\D]/g, "");
  } catch (error) {
    throw error;
  }
};

export default replaceValue;
