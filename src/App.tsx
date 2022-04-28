import React, { useEffect, useState } from "react";

import Card from "./components/Card";
import CardInfoForm from "./components/CardInfoForm";
import Header from "./components/Header";
import REGEXP from "./contants/regexp";
import { useCardInfoValidation } from "./hooks/useCardInfoValidation";
import cardInfoValidator from "./lib/validation";
import { CardInfo, CardNumbers, Password } from "./types";

const initialCardInfo: CardInfo = {
  cardNumbers: ["", "", "", ""],
  expiredDate: { month: "", year: "" },
  userName: "",
  securityCode: "",
  password: ["", ""],
};

function App() {
  const [cardInfo, setCardInfo] = useState<CardInfo>(initialCardInfo);

  const cardInfoValidation = useCardInfoValidation(cardInfo, cardInfoValidator);

  const resetCardInfo = () => {
    setCardInfo(initialCardInfo);
  };

  const onChangeCardNumber = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1 | 2 | 3) => {
    const inputValue = e.target.value;

    if (inputValue === "" || REGEXP.NUMBER.test(inputValue)) {
      setCardInfo(prevCardInfo => {
        const newCardNumbers: CardNumbers = [...prevCardInfo.cardNumbers];

        newCardNumbers[index] = inputValue;

        return {
          ...prevCardInfo,
          cardNumbers: newCardNumbers,
        };
      });
    }
  };

  const onChangeExpiredDate = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const inputValue = e.target.value;

    if (inputValue === "" || REGEXP.NUMBER.test(inputValue)) {
      setCardInfo(prevCardInfo => {
        const newExpiredDate = {
          ...prevCardInfo.expiredDate,
        };

        newExpiredDate[index === 0 ? "month" : "year"] = inputValue;

        return {
          ...prevCardInfo,
          expiredDate: newExpiredDate,
        };
      });
    }
  };

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (cardInfo.userName === "" && inputValue === " ") {
      return;
    }

    if (inputValue === "" || REGEXP.ENGLISH.test(inputValue)) {
      const newUserName = inputValue.replace("  ", " ").toUpperCase();

      setCardInfo(prevCardInfo => ({ ...prevCardInfo, userName: newUserName }));
    }
  };

  const onBlurUserName = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setCardInfo(prevCardInfo => ({ ...prevCardInfo, userName: prevCardInfo.userName.trim() }));
  };

  const onChangeSecurityCode = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const inputValue = e.target.value;

    if (inputValue === "" || REGEXP.NUMBER.test(inputValue)) {
      setCardInfo(prevCardInfo => ({
        ...prevCardInfo,
        securityCode: inputValue,
      }));
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const inputValue = e.target.value;

    if (inputValue === "" || REGEXP.NUMBER.test(inputValue)) {
      setCardInfo(prevCardInfo => {
        const newPassword: Password = [...prevCardInfo.password];

        newPassword[index] = inputValue;

        return {
          ...prevCardInfo,
          password: newPassword,
        };
      });
    }
  };

  return (
    <div className="App">
      <Header />
      <Card cardInfo={cardInfo} />
      <CardInfoForm
        cardInfo={cardInfo}
        onChangeCardNumber={onChangeCardNumber}
        onChangeExpiredDate={onChangeExpiredDate}
        onChangeUserName={onChangeUserName}
        onBlurUserName={onBlurUserName}
        onChangeSecurityCode={onChangeSecurityCode}
        onChangePassword={onChangePassword}
        resetCardInfo={resetCardInfo}
        cardInfoValidation={cardInfoValidation}
      />
    </div>
  );
}

export default App;
