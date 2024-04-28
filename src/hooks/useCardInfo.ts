import {
  validateLength,
  validateOnlyDigit,
} from "../domain/validateForCardInfo";

import { useState } from "react";

type CardInfoField =
  | "cardNumbers"
  | "cardIssuer"
  | "cardExpirationPeriod"
  | "cardHolder"
  | "cardCvcNumber"
  | "cardPassword";

interface EachCardInfo {
  value: string[];
  errorMessage: string[];
  isComplete: boolean;
}

interface EachValidate {
  validator: (string: string) => void;
}

type CardInfoType = Record<CardInfoField, EachCardInfo>;

type CardInfoValidateType = Record<CardInfoField, EachValidate>;

const initCardInfo: CardInfoType = {
  cardNumbers: {
    value: ["", "", "", ""],
    errorMessage: ["", "", "", ""],
    isComplete: false,
  },
  cardIssuer: {
    value: [""],
    errorMessage: [""],
    isComplete: false,
  },
  cardExpirationPeriod: {
    value: ["", ""],
    errorMessage: [""],
    isComplete: false,
  },
  cardHolder: {
    value: [""],
    errorMessage: [""],
    isComplete: false,
  },
  cardCvcNumber: {
    value: [""],
    errorMessage: [""],
    isComplete: false,
  },
  cardPassword: {
    value: [""],
    errorMessage: [""],
    isComplete: false,
  },
};

export const cardInfoValidate: CardInfoValidateType = {
  cardNumbers: {
    validator: (string: string) => {
      validateOnlyDigit(string);
      validateLength(string, 4);
    },
  },
  cardIssuer: {
    validator: () => {},
  },
  cardExpirationPeriod: {
    validator: () => {},
  },
  cardHolder: {
    validator: () => {},
  },
  cardCvcNumber: {
    validator: () => {},
  },
  cardPassword: {
    validator: () => {},
  },
};

export default function useCardInfo() {
  const [cardInfo, setCardInfo] = useState(initCardInfo);

  const getValue = (field: CardInfoField) => {
    return cardInfo[field]?.value;
  };

  const setErrorMessage = (field: CardInfoField, newErrorMessage: string[]) => {
    const newCardInfo = { ...cardInfo };
    newCardInfo[field] = { ...cardInfo[field], errorMessage: newErrorMessage };

    setCardInfo(newCardInfo);
  };

  const setValue = (field: CardInfoField, newValue: string[]) => {
    const newCardInfo = { ...cardInfo };
    newCardInfo[field] = { ...cardInfo[field], value: newValue };

    setCardInfo(newCardInfo);
  };

  return { getValue, setValue, setErrorMessage };
}
