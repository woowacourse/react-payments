import "./App.css";
import styled from "styled-components";
import CardPreview from "./components/cardPreview/CardPreview";
import CardNumberSection from "./components/cardNumberSection/CardNumberSection";
import CardExpirationPeriodSection from "./components/cardExpirationPeriodSection/CardExpirationPeriodSection";
import CardCVCNumberSection from "./components/cardCVCNumberSection/CardCVCNumberSection";
import { useState } from "react";
import { ExpirationPeriod, Position } from "./\btypes/index.types";


const StyleFrame = styled.div`
display: inline-flex;
padding: 77px 30px 19px 31px;
flex-direction: column;
justify-content: flex-end;
align-items : center;
gap: 45px;
background-color: white;
width: 100%;
max-width: 600px;
box-sizing: border-box;
`


type CardNumberState = {
  [key in Position]: string;
};

type ExpirationPeriodState = {
  [key in ExpirationPeriod]: string;
}


function App() {

  const [cardNumber, setCardNumber] = useState<CardNumberState>({
    first: "",
    second: "",
    third: "",
    forth : "",
  });

  const [expirationPeriod, setExpirationPeriod] = useState<ExpirationPeriodState >({
    month: "",
    year: "",
  });


  function changeCardNumber(position: Position, cardNumber: string) {
    setCardNumber((prev) => {
      prev[position] = cardNumber;
      return {...prev}
    })
  }

  function changeExpirationPeriod(expirationPeriod: ExpirationPeriod, date: string) {
    setExpirationPeriod((prev) => {
      prev[expirationPeriod] = date;
      return {...prev}
    })
  }

  return (
    <StyleFrame>
      <CardPreview cardNumber={cardNumber} expirationPeriod={expirationPeriod}  />
      <CardNumberSection cardNumber={cardNumber} changeCardNumber={changeCardNumber} />
      <CardExpirationPeriodSection expirationPeriod={expirationPeriod} changeExpirationPeriod={changeExpirationPeriod}/>
      <CardCVCNumberSection />
    </StyleFrame>
  );
}

export default App;
