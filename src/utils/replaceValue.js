import { CARD_INFO, LENGTH } from "./constants";

const replaceOwnerName = ownerName => {
  if (ownerName.length > LENGTH.OWNER_NAME.MAX) {
    ownerName = ownerName.slice(LENGTH.OWNER_NAME.MIN, LENGTH.OWNER_NAME.MAX);
  }

  return ownerName.toUpperCase();
};

const replaceNickname = nickname => {
  return nickname.slice(0, LENGTH.NICKNAME.MAX);
};

const replace = {
  [CARD_INFO.OWNER_NAME]: replaceOwnerName,
  [CARD_INFO.NICKNAME]: replaceNickname,
};

const replaceValue = (inputName, value) => {
  try {
    if (!Object.values(CARD_INFO).includes(inputName)) {
      throw new TypeError("Invalid validation name");
    }
    if (typeof value !== "string") {
      throw new TypeError(`${inputName} should be a string`);
    }

    return replace[inputName] ? replace[inputName](value) : value.replace(/[\D]/g, "");
  } catch (error) {
    throw error;
  }
};

export default replaceValue;
