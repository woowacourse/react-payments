import type { CardInfo } from "../types";

import { CVC_LENGTH, EXPIRY_FIELD_MAX_LENGTH, PASSWORD_LENGTH } from "../constants/cardField";
import { detectCardNetwork, getMaxLength } from "./cardNetwork";
import { validateExpiry } from "./validators";

export const getCardCompletion = (cardInfo: CardInfo) => {
  const network = detectCardNetwork(cardInfo.numbers.join(""));
  const maxLength = getMaxLength(network);
  const isSupportedNetwork = network !== "";

  const isCardNumber = cardInfo.numbers.join("").length === maxLength && isSupportedNetwork;
  const isCompany = cardInfo.company !== "";
  const isExpiry =
    cardInfo.expiry[0]?.length === EXPIRY_FIELD_MAX_LENGTH &&
    cardInfo.expiry[1]?.length === EXPIRY_FIELD_MAX_LENGTH &&
    validateExpiry(cardInfo.expiry).message === "";
  const isCvc = cardInfo.cvc.length === CVC_LENGTH;
  const isPassword = cardInfo.password.length === PASSWORD_LENGTH;
  const isAll = isCardNumber && isCompany && isExpiry && isCvc && isPassword;

  return {
    network,
    maxLength,
    isSupportedNetwork,
    completion: {
      cardNumber: isCardNumber,
      company: isCompany,
      expiry: isExpiry,
      cvc: isCvc,
      password: isPassword,
      all: isAll,
    },
  };
};
