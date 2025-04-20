import { CARD_OWNER_ERROR_MESSAGE } from "../constants";

export const validateCardOwner = (value: string) => {
  if (value === "") {
    return "";
  }

  if (value.length > 20) {
    return CARD_OWNER_ERROR_MESSAGE.LENGTH;
  }

  const languageRegex = /^[가-힣a-zA-Z]+$/;
  if (!languageRegex.test(value)) {
    return CARD_OWNER_ERROR_MESSAGE.LANGUAGE;
  }

  return "";
};
