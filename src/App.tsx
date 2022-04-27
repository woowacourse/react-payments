import React, { useState } from "react";

import CardInfoForm from "./components/CardInfoForm";
import REGEXP from "./contants/regexp";
interface CardInfo {
  cardNumbers: CardNumbers;
  expiredDate: ExpiredDate;
  userName: string;
  securityCode: string;
  password: number[];
}

type CardNumbers = [string, string, string, string];

interface ExpiredDate {
  month: string;
  year: string;
}

const initialCardInfo: CardInfo = {
  cardNumbers: ["", "", "", ""],
  expiredDate: { month: "", year: "" },
  userName: "",
  securityCode: "",
  password: [],
};

function App() {
  const [cardInfo, setCardInfo] = useState<CardInfo>(initialCardInfo);

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
        const newExpiredDate: ExpiredDate = {
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

  // 재사용가능한 컴포넌트가 비즈니스 로직을 가지기 어렵다.
  // onChange 6개 이 정도 될것이다.
  // Input을 컴포넌트를 수정하는 방향보다, useInput custom hook 으로 분리하는 방향이

  return (
    <div className="App">
      <CardInfoForm
        cardInfo={cardInfo}
        onChangeCardNumber={onChangeCardNumber}
        onChangeExpiredDate={onChangeExpiredDate}
      />
    </div>
  );
}

export default App;
