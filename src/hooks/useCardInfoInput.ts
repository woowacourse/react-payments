import React, { useState } from "react";

import REGEXP from "../constant/regexp";
import type { CardInfo, CardNumbers, Password } from "../types";

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

  const onChangeCardType = (name, color) => {
    setCardInfo(prevCardInfo => ({
      ...prevCardInfo,
      cardType: {
        name,
        color,
      },
    }));
  };

  const onChangeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const onChangeExpirationDate = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (cardInfo.userName === "" && value === " ") {
      return;
    }

    if (value === "" || REGEXP.ENGLISH.test(value)) {
      const newUserName = value.replace("  ", " ").toUpperCase();

      setCardInfo(prevCardInfo => ({ ...prevCardInfo, userName: newUserName }));
    }
  };

  const onBlurUserName = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setCardInfo(prevCardInfo => ({ ...prevCardInfo, userName: prevCardInfo.userName.trim() }));
  };

  const onChangeSecurityCode = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const value = e.target.value;

    if (value === "" || REGEXP.NUMBER.test(value)) {
      setCardInfo(prevCardInfo => ({
        ...prevCardInfo,
        securityCode: value,
      }));
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
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
