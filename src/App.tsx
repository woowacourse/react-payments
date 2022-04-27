import React, { useState } from "react";

import CardInfoForm from "./components/CardInfoForm";
import REGEXP from "./contants/regexp";
interface CardInfo {
  cardNumbers: CardNumbers; // 4자리 이면 좋겠다.
  expiredDate: ExpiredDate;
  userName: string;
  securityCode: number | null; // 3자리
  password: number[];
}

type CardNumbers = [string, string, string, string];

interface ExpiredDate {
  month: number | null;
  year: number | null;
}

const initialCardInfo: CardInfo = {
  cardNumbers: ["", "", "", ""],
  expiredDate: { month: null, year: null },
  userName: "",
  securityCode: null,
  password: [],
};

function App() {
  const [cardInfo, setCardInfo] = useState<CardInfo>(initialCardInfo);

  const onChangeCardNumber = (e: React.ChangeEvent<HTMLInputElement>, index) => {
    const inputValue = e.target.value;

    console.log(e.target);
    if (inputValue === "" || REGEXP.NUMBER.test(inputValue)) {
      setCardInfo(prevCardInfo => {
        const newCardNumbers: CardNumbers = [...prevCardInfo.cardNumbers];

        newCardNumbers[index] = inputValue;

        return { ...prevCardInfo, cardNumbers: newCardNumbers };
      });
    }
  };
  // maxLength 구현
  // 숫자만 들어가게
  // type="text" 로 하고 숫자만 들어가게 만들자.

  return (
    <div className="App">
      <CardInfoForm cardInfo={cardInfo} onChangeCardNumber={onChangeCardNumber} />
    </div>
  );
}

export default App;
