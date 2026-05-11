import { useState } from "react";

import { CVC_LENGTH, EXPIRY_FIELD_MAX_LENGTH, PASSWORD_LENGTH } from "../constants/cardField";
import type { CardInfo } from "../types";
import { detectCardNetwork, getMaxLength } from "../utils/cardNetwork";
import { validateExpiry } from "../utils/validators";

const INITIAL_CARD_INFO: CardInfo = {
  numbers: [],
  expiry: [],
  cvc: "",
  company: "",
  password: "",
};

type UseCardFormParams = {
  onSubmit: (cardInfo: CardInfo) => void;
};

export const useCardForm = ({ onSubmit }: UseCardFormParams) => {
  const [cardInfo, setCardInfo] = useState<CardInfo>(INITIAL_CARD_INFO);

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

  const cardNumberHandler = (numbers: string[]) => {
    setCardInfo((prev) => ({ ...prev, numbers, company: "" }));
  };

  const cardCompanyHandler = (company: string) => {
    setCardInfo((prev) => ({ ...prev, company }));
  };

  const expiryHandler = (expiry: string[]) => {
    setCardInfo((prev) => ({ ...prev, expiry }));
  };

  const cvcHandler = (cvc: string) => {
    setCardInfo((prev) => ({ ...prev, cvc }));
  };

  const passwordHandler = (password: string) => {
    setCardInfo((prev) => ({ ...prev, password }));
  };

  const submitHandler = () => {
    onSubmit(cardInfo);
  };

  return {
    cardInfo,
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
    handlers: {
      cardNumber: cardNumberHandler,
      cardCompany: cardCompanyHandler,
      expiry: expiryHandler,
      cvc: cvcHandler,
      password: passwordHandler,
      submit: submitHandler,
    },
  };
};
