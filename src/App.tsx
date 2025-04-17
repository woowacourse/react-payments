import "./App.css";
import styled from "styled-components";
import CardPreview from "./components/cardPreview/CardPreview";
import CardNumberSection from "./components/cardNumberSection/CardNumberSection";
import CardExpirationPeriodSection from "./components/cardExpirationPeriodSection/CardExpirationPeriodSection";
import CardCVCNumberSection from "./components/cardCVCNumberSection/CardCVCNumberSection";
import { useState } from "react";
import { ExpirationPeriod, Position } from "./\btypes/index.types";
import { INITIALIZE_VALUE } from "./constants/constant";

const StyledApp = styled.div`
display: flex;
justify-content : center;
`


const StyledFrame = styled.div`
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
  [key in keyof ExpirationPeriod]: string;
}


function App() {
  const [cardNumber, setCardNumber] = useState<CardNumberState>({
    first: INITIALIZE_VALUE,
    second: INITIALIZE_VALUE,
    third: INITIALIZE_VALUE,
    fourth : INITIALIZE_VALUE,
  });

  const [expirationPeriod, setExpirationPeriod] = useState<ExpirationPeriodState >({
    month: INITIALIZE_VALUE,
    year: INITIALIZE_VALUE,
  });

  const [CVCNumber, setCVCNumber] = useState(INITIALIZE_VALUE);


  function changeCardNumber(position: Position, cardNumber: string) {
    setCardNumber((prev) => {
      prev[position] = cardNumber;
      return {...prev}
    })
  }

  function changeExpirationPeriod(expirationPeriod: keyof ExpirationPeriod, date: string) {
    setExpirationPeriod((prev) => {
      prev[expirationPeriod] = date;
      return {...prev}
    })
  }

   function changeCVCNumber(CVCNumber : string ) {
    setCVCNumber(CVCNumber);
  }


  return (
    <StyledApp>
    <StyledFrame>
      <CardPreview cardNumber={cardNumber} expirationPeriod={expirationPeriod}  />
      <CardNumberSection cardNumber={cardNumber} changeCardNumber={changeCardNumber} />
      <CardExpirationPeriodSection expirationPeriod={expirationPeriod} changeExpirationPeriod={changeExpirationPeriod}/>
      <CardCVCNumberSection CVCNumber={CVCNumber} changeCVCNumber={changeCVCNumber} />
    </StyledFrame>
    </StyledApp>
  );
}

export default App;
