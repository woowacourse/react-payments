import REGEXP from "constant/regexp";
import { cardInfoValidator } from "lib/validation";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { InputChangeFunction } from "types";
import {
  CardColor,
  CardInfo,
  CardInfoValidation,
  CardName,
  CardNumbers,
  ExpirationDate,
  Password,
} from "types/cardInfo";

type CardInfoAction =
  | { type: "CHANGE_CARD_TYPE"; payload: { name: CardName; color: CardColor } }
  | { type: "CHANGE_CARD_NUMBER"; payload: { cardNumbers: CardNumbers } }
  | { type: "CHANGE_EXPIRATION_DATE"; payload: { expirationDate: ExpirationDate } }
  | { type: "CHANGE_USER_NAME"; payload: { userName: string } }
  | { type: "CHANGE_SECURITY_CODE"; payload: { securityCode: string } }
  | { type: "CHANGE_PASSWORD"; payload: { password: Password } }
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
      const { cardNumbers } = payload;

      return { ...state, cardNumbers };
    }

    case "CHANGE_EXPIRATION_DATE": {
      const { expirationDate } = payload;

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
      const { password } = payload;

      return { ...state, password };
    }

    case "BLUR_USER_NAME":
      return { ...state, useName: state.userName.trim() };
  }
};

const initialCardInfo: CardInfo = {
  cardType: { name: "검정 카드", color: "black" },
  cardNumbers: ["", "", "", ""],
  expirationDate: { month: "", year: "" },
  userName: "",
  securityCode: "",
  password: ["", ""],
};

function useCardInfoInput() {
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

  const resetCardInfo = () => {
    cardInfoDispatch({ type: "RESET_CARD_INFO", payload: null });
  };

  const onChangeCardType = (name: CardName, color: CardColor) => {
    cardInfoDispatch({ type: "CHANGE_CARD_TYPE", payload: { name, color } });
  };

  const onChangeCardNumber: InputChangeFunction = useCallback(
    e => {
      const {
        value,
        dataset: { index },
      } = e.target;

      if (value === "" || REGEXP.NUMBER.test(value)) {
        const cardNumbers: CardNumbers = [...cardInfo.cardNumbers];

        cardNumbers[index] = value;

        cardInfoDispatch({ type: "CHANGE_CARD_NUMBER", payload: { cardNumbers } });
        handleChangeValidation("cardNumbers", cardNumbers, cardInfoValidator["cardNumbers"]);
      }
    },
    [cardInfo.cardNumbers]
  );

  const onChangeExpirationDate: InputChangeFunction = useCallback(
    e => {
      const {
        value,
        dataset: { key },
      } = e.target;

      if (value === "" || REGEXP.NUMBER.test(value)) {
        const expirationDate = {
          ...cardInfo.expirationDate,
        };

        expirationDate[key] = value;

        cardInfoDispatch({ type: "CHANGE_EXPIRATION_DATE", payload: { expirationDate } });
        handleChangeValidation(
          "expirationDate",
          expirationDate,
          cardInfoValidator["expirationDate"]
        );
      }
    },
    [cardInfo.expirationDate]
  );

  const onChangeUserName: InputChangeFunction = useCallback(e => {
    const value = e.target.value;

    if (cardInfo.userName === "" && value === " ") {
      return;
    }

    if (value === "" || REGEXP.ENGLISH.test(value)) {
      cardInfoDispatch({ type: "CHANGE_USER_NAME", payload: { userName: value } });
    }
  }, []);

  const onBlurUserName = useCallback(() => {
    cardInfoDispatch({ type: "BLUR_USER_NAME", payload: null });
  }, []);

  const onChangeSecurityCode: InputChangeFunction = useCallback(e => {
    const value = e.target.value;

    if (value === "" || REGEXP.NUMBER.test(value)) {
      const securityCode = value;

      cardInfoDispatch({ type: "CHANGE_SECURITY_CODE", payload: { securityCode } });
      handleChangeValidation("securityCode", securityCode, cardInfoValidator["securityCode"]);
    }
  }, []);

  const onChangePassword: InputChangeFunction = useCallback(
    e => {
      const {
        value,
        dataset: { index },
      } = e.target;

      if (value === "" || REGEXP.NUMBER.test(value)) {
        const password: Password = [...cardInfo.password];

        password[index] = value;
        cardInfoDispatch({ type: "CHANGE_PASSWORD", payload: { password } });
        handleChangeValidation("password", password, cardInfoValidator["password"]);
      }
    },
    [cardInfo.password]
  );

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

  return {
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
  };
}

export default useCardInfoInput;
