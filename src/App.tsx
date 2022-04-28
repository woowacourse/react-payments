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

  // cardInfo의 종류는 name으로 구분하고 (cardNumbers, expiredDate..)
  // cardNumbers의 index, expiredDate의 key, 이런 것들을 date-set

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

  const onChangeExpiredDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      value,
      dataset: { key },
    } = e.target;

    if (value === "" || REGEXP.NUMBER.test(value)) {
      setCardInfo(prevCardInfo => {
        const newExpiredDate = {
          ...prevCardInfo.expiredDate,
        };

        newExpiredDate[key] = value;

        return {
          ...prevCardInfo,
          expiredDate: newExpiredDate,
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
