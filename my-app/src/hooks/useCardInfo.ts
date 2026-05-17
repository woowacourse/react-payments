import { useState } from "react";

import type { CardInfo } from "../types";

const INITIAL_CARD_INFO: CardInfo = {
  numbers: [],
  expiry: [],
  cvc: "",
  company: "",
  password: "",
};

export const useCardInfo = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo>(INITIAL_CARD_INFO);

  const setFields = (partial: Partial<CardInfo>) => {
    setCardInfo((prev) => ({ ...prev, ...partial }));
  };

  const cardNumberHandler = (numbers: string[]) => setFields({ numbers, company: "" });
  const cardCompanyHandler = (company: string) => setFields({ company });
  const expiryHandler = (expiry: string[]) => setFields({ expiry });
  const cvcHandler = (cvc: string) => setFields({ cvc });
  const passwordHandler = (password: string) => setFields({ password });

  return {
    cardInfo,
    handlers: {
      cardNumber: cardNumberHandler,
      cardCompany: cardCompanyHandler,
      expiry: expiryHandler,
      cvc: cvcHandler,
      password: passwordHandler,
    },
  };
};
