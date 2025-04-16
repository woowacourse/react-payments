import Announcement from "./components/Announcement";
import Card from "./components/Card";
import CardNumberForm from "./components/CardNumberForm";
import CardExpirationForm from "./components/CardExpirationForm";
import CardCVCForm from "./components/CardCVCForm";
import { useState } from "react";
import styled from "@emotion/styled";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [thirdNumber, setThirdNumber] = useState("");
  const [fourthNumber, setFourthNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <AppContainer>
      <Card
        cardNumber={[firstNumber, secondNumber, thirdNumber, fourthNumber]}
        expiration={[month, year]}
      ></Card>
      <div>
        <Announcement
          main="결제할 카드 번호를 입력해 주세요"
          caption="본인 명의의 카드만 결제 가능합니다."
        ></Announcement>
        <CardNumberForm
          firstNumber={firstNumber}
          setFirstNumber={setFirstNumber}
          secondNumber={secondNumber}
          setSecondNumber={setSecondNumber}
          thirdNumber={thirdNumber}
          setThirdNumber={setThirdNumber}
          fourthNumber={fourthNumber}
          setFourthNumber={setFourthNumber}
          maxLength={4}
        />
        <Announcement
          main="카드 유효기간을 입력해 주세요"
          caption="월/년도(MMYY)를 순서대로 입력해 주세요."
        ></Announcement>
        <CardExpirationForm
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          maxLength={2}
        />
        <Announcement main="CVC 번호를 입력해 주세요"></Announcement>
        <CardCVCForm cvc={cvc} setCvc={setCvc} maxLength={3} />
      </div>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 376px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
