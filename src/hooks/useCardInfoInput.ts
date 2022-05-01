import React, { useState } from "react";

import REGEXP from "../constant/regexp";
import { InputChangeFunction } from "../types";
import type { CardColor, CardInfo, CardName, CardNumbers, Password } from "../types/cardInfo";

const initialCardInfo: CardInfo = {
  cardType: { name: "검정 카드", color: "black" },
  cardNumbers: ["", "", "", ""],
  expirationDate: { month: "", year: "" },
  userName: "",
  securityCode: "",
  password: ["", ""],
};

const useCardInfoInput = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo>(initialCardInfo);
  const resetCardInfo = () => {
    setCardInfo(initialCardInfo);
  };

  const onChangeCardType = (name: CardName, color: CardColor) => {
    setCardInfo(prevCardInfo => ({
      ...prevCardInfo,
      cardType: {
        name,
        color,
      },
    }));
  };

  const onChangeCardNumber: InputChangeFunction = e => {
    const {
      value,
      dataset: { index },
    } = e.target;

    if (value === "" || REGEXP.NUMBER.test(value)) {
      setCardInfo(prevCardInfo => {
        const newCardNumbers: CardNumbers = [...prevCardInfo.cardNumbers];

        newCardNumbers[index] = value;

        return {
          ...prevCardInfo,
          cardNumbers: newCardNumbers,
        };
      });
    }
  };

  const onChangeExpirationDate: InputChangeFunction = e => {
    const {
      value,
      dataset: { key },
    } = e.target;

    if (value === "" || REGEXP.NUMBER.test(value)) {
      setCardInfo(prevCardInfo => {
        const newExpirationDate = {
          ...prevCardInfo.expirationDate,
        };

        newExpirationDate[key] = value;

        return {
          ...prevCardInfo,
          expirationDate: newExpirationDate,
        };
      });
    }
  };

  const onChangeUserName: InputChangeFunction = e => {
    const value = e.target.value;

    if (cardInfo.userName === "" && value === " ") {
      return;
    }

    if (value === "" || REGEXP.ENGLISH.test(value)) {
      const newUserName = value.replace("  ", " ").toUpperCase();

      setCardInfo(prevCardInfo => ({ ...prevCardInfo, userName: newUserName }));
    }
  };

  const onBlurUserName = () => {
    setCardInfo(prevCardInfo => ({ ...prevCardInfo, userName: prevCardInfo.userName.trim() }));
  };

  const onChangeSecurityCode: InputChangeFunction = e => {
    const value = e.target.value;

    if (value === "" || REGEXP.NUMBER.test(value)) {
      setCardInfo(prevCardInfo => ({
        ...prevCardInfo,
        securityCode: value,
      }));
    }
  };

  const onChangePassword: InputChangeFunction = e => {
    const {
      value,
      dataset: { index },
    } = e.target;

    if (value === "" || REGEXP.NUMBER.test(value)) {
      setCardInfo(prevCardInfo => {
        const newPassword: Password = [...prevCardInfo.password];

        newPassword[index] = value;

        return {
          ...prevCardInfo,
          password: newPassword,
        };
      });
    }
  };

  return {
    cardInfo,
    onChangeCardType,
    resetCardInfo,
    onChangeCardNumber,
    onChangeExpirationDate,
    onChangeUserName,
    onBlurUserName,
    onChangeSecurityCode,
    onChangePassword,
  };
};

export default useCardInfoInput;
