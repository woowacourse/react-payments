import REGEXP from "constant/regexp";
import { cardInfoValidator } from "lib/validation";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { InputChangeFunction } from "types";
import {
  CardColor,
  CardInfo,
  CardInfoValidation,
  CardName,
  CardNumbers,
  Password,
} from "types/cardInfo";

type CardInfoAction =
  | { type: "CHANGE_CARD_TYPE"; payload: { name: CardName; color: CardColor } }
  | { type: "CHANGE_CARD_NUMBER"; payload: { index: string; cardNumber: string } }
  | { type: "CHANGE_EXPIRATION_DATE"; payload: { key: string; value: string } }
  | { type: "CHANGE_USER_NAME"; payload: { userName: string } }
  | { type: "CHANGE_SECURITY_CODE"; payload: { securityCode: string } }
  | { type: "CHANGE_PASSWORD"; payload: { index: string; value: string } }
  | { type: "CHANGE_CARD_NAME"; payload: { cardName: string } }
  | { type: "PULL_CARD_INFO"; payload: { cardInfo: CardInfo } }
  | { type: "RESET_CARD_INFO"; payload: null }
  | { type: "BLUR_USER_NAME"; payload: null };

type CardInfoReducer = (state: CardInfo, action: CardInfoAction) => CardInfo;

const reducer: CardInfoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "RESET_CARD_INFO":
      return initialCardInfo;

    case "CHANGE_CARD_TYPE": {
      const { name, color } = payload;

      return { ...state, cardType: { name, color } };
    }

    case "CHANGE_CARD_NUMBER": {
      const { index, cardNumber } = payload;
      const cardNumbers: CardNumbers = [...state.cardNumbers];

      cardNumbers[index] = cardNumber;

      return { ...state, cardNumbers };
    }

    case "CHANGE_EXPIRATION_DATE": {
      const { key, value } = payload;
      const expirationDate = {
        ...state.expirationDate,
      };

      expirationDate[key] = value;

      return { ...state, expirationDate };
    }

    case "CHANGE_USER_NAME": {
      const userName = payload.userName.replace("  ", " ").toUpperCase();

      return { ...state, userName };
    }

    case "CHANGE_SECURITY_CODE": {
      const { securityCode } = payload;

      return { ...state, securityCode };
    }

    case "CHANGE_PASSWORD": {
      const { index, value } = payload;
      const password: Password = [...state.password];

      password[index] = value;

      return { ...state, password };
    }

    case "CHANGE_CARD_NAME": {
      const { cardName } = payload;

      return { ...state, cardName };
    }

    case "PULL_CARD_INFO":
      return payload.cardInfo;

    case "BLUR_USER_NAME":
      return { ...state, useName: state.userName.trim() };
  }
};

interface Context {
  cardInfo: CardInfo;
  onChangeCardNumber: InputChangeFunction;
  onChangeExpirationDate: InputChangeFunction;
  onChangeUserName: InputChangeFunction;
  onBlurUserName: () => void;
  onChangeSecurityCode: InputChangeFunction;
  onChangePassword: InputChangeFunction;
  resetCardInfo: () => void;
  cardInfoValidation: CardInfoValidation;
  onChangeCardType: (name: CardName, color: CardColor) => void;
  onChangeCardName: InputChangeFunction;
  pullCardInfo: (cardInfo: CardInfo) => void;
}

export const CardInfoContext = createContext<Context>(null);

const initialCardInfo: CardInfo = {
  cardType: { name: "검정 카드", color: "black" },
  cardNumbers: ["", "", "", ""],
  expirationDate: { month: "", year: "" },
  userName: "",
  securityCode: "",
  password: ["", ""],
  cardName: "",
};

const CardInfoProvider = ({ children }) => {
  const [cardInfo, cardInfoDispatch] = useReducer<CardInfoReducer>(reducer, initialCardInfo);
  const [cardInfoValidation, setCardInfoValidation] = useState<CardInfoValidation>({
    cardNumbers: {
      isValid: false,
      successMsg: "카드넘버 입력 성공!",
      errorMsg: null,
    },
    expirationDate: {
      isValid: false,
      successMsg: "만료일 입력 성공!",
      errorMsg: null,
    },
    securityCode: {
      isValid: false,
      successMsg: "CVC 입력 성공!",
      errorMsg: null,
    },
    password: {
      isValid: false,
      successMsg: "비밀번호 입력 성공!",
      errorMsg: null,
    },
  });

  const pullCardInfo = (cardInfo: CardInfo) => {
    cardInfoDispatch({ type: "PULL_CARD_INFO", payload: { cardInfo } });
  };

  const resetCardInfo = () => {
    cardInfoDispatch({ type: "RESET_CARD_INFO", payload: null });
  };

  const onChangeCardType = (name: CardName, color: CardColor) => {
    cardInfoDispatch({ type: "CHANGE_CARD_TYPE", payload: { name, color } });
  };

  const onChangeCardNumber: InputChangeFunction = e => {
    const {
      value,
      dataset: { index },
    } = e.target;

    if (value === "" || REGEXP.NUMBER.test(value)) {
      cardInfoDispatch({ type: "CHANGE_CARD_NUMBER", payload: { index, cardNumber: value } });
    }
  };

  const onChangeExpirationDate: InputChangeFunction = e => {
    const {
      value,
      dataset: { key },
    } = e.target;

    if (value === "" || REGEXP.NUMBER.test(value)) {
      cardInfoDispatch({ type: "CHANGE_EXPIRATION_DATE", payload: { key, value } });
    }
  };

  const onChangeUserName: InputChangeFunction = e => {
    const value = e.target.value;

    if (cardInfo.userName === "" && value === " ") {
      return;
    }

    if (value === "" || REGEXP.ENGLISH.test(value)) {
      cardInfoDispatch({ type: "CHANGE_USER_NAME", payload: { userName: value } });
    }
  };

  const onBlurUserName = () => {
    cardInfoDispatch({ type: "BLUR_USER_NAME", payload: null });
  };

  const onChangeSecurityCode: InputChangeFunction = e => {
    const value = e.target.value;

    if (value === "" || REGEXP.NUMBER.test(value)) {
      cardInfoDispatch({ type: "CHANGE_SECURITY_CODE", payload: { securityCode: value } });
    }
  };

  const onChangePassword: InputChangeFunction = e => {
    const {
      value,
      dataset: { index },
    } = e.target;

    if (value === "" || REGEXP.NUMBER.test(value)) {
      cardInfoDispatch({ type: "CHANGE_PASSWORD", payload: { index, value } });
    }
  };

  const onChangeCardName: InputChangeFunction = e => {
    const value = e.target.value;

    cardInfoDispatch({ type: "CHANGE_CARD_NAME", payload: { cardName: value } });
  };

  // Validation
  const handleChangeValidation = <T,>(
    key: keyof CardInfoValidation,
    value: T,
    validator: (value: T) => boolean
  ) => {
    try {
      const isValid = validator(value);

      setCardInfoValidation(prev => ({
        ...prev,
        [key]: { ...prev[key], isValid, errorMsg: null },
      }));
    } catch (error) {
      setCardInfoValidation(prev => ({
        ...prev,
        [key]: { ...prev[key], isValid: false, errorMsg: error.message },
      }));
    }
  };

  useEffect(() => {
    handleChangeValidation("cardNumbers", cardInfo.cardNumbers, cardInfoValidator["cardNumbers"]);
  }, [cardInfo.cardNumbers]);

  useEffect(() => {
    handleChangeValidation(
      "expirationDate",
      cardInfo.expirationDate,
      cardInfoValidator["expirationDate"]
    );
  }, [cardInfo.expirationDate]);

  useEffect(() => {
    handleChangeValidation(
      "securityCode",
      cardInfo.securityCode,
      cardInfoValidator["securityCode"]
    );
  }, [cardInfo.securityCode]);

  useEffect(() => {
    handleChangeValidation("password", cardInfo.password, cardInfoValidator["password"]);
  }, [cardInfo.password]);

  // @TODO Context를 도메인별로 나눠서 분류해야할까?
  return (
    <CardInfoContext.Provider
      value={{
        cardInfo,
        cardInfoValidation,
        onChangeCardType,
        resetCardInfo,
        onChangeCardNumber,
        onChangeExpirationDate,
        onChangeUserName,
        onBlurUserName,
        onChangeSecurityCode,
        onChangePassword,
        onChangeCardName,
        pullCardInfo,
      }}
    >
      {children}
    </CardInfoContext.Provider>
  );
};

export { CardInfoProvider };
