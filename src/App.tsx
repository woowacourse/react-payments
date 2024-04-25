/** @jsxImportSource @emotion/react */
import "./App.css";

import CardExpirationPeriod from "./components/CardExpirationPeriod";
import CardHolder from "./components/CardHolder";
import CardIssuer from "./components/CardIssuer";
import CardNumbers from "./components/CardNumbers";
import CardPreview from "./components/CardPreview";
import { matchCardType } from "./domain/matchCardIssuer";
import useCardExpirationPeriod from "./hooks/useCardExpirationPeriod";
import useCardHolder from "./hooks/useCardHolder";
import useCardNumbers from "./hooks/useCardNumbers";
import { useState } from "react";

const styledCardInfoContainer = {
  width: "315px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",

  margin: "auto",
  marginTop: "50px",
};

const styledForm = {
  width: "100%",
  display: "flex",
  flexDirection: "column" as const,
  gap: "16px",
};

function App() {
  const { cardNumberInputs } = useCardNumbers();
  const [cardIssuer, setCardIssuer] = useState("");
  const { expirationPeriodInputs } = useCardExpirationPeriod();
  const { holderInput } = useCardHolder();

  const cardNumbersValue = cardNumberInputs.map((input) => input.value) as [
    string,
    string,
    string,
    string,
  ];

  const cardExpirationPeriodValue = expirationPeriodInputs.map(
    (input) => input.value
  ) as [string, string];

  return (
    <div css={styledCardInfoContainer}>
      <CardPreview
        cardType={matchCardType(cardNumbersValue.join(""))}
        cardNumbers={cardNumbersValue}
        cardExpirationPeriod={cardExpirationPeriodValue}
        cardHolder={holderInput.value}
      />
      <form css={styledForm}>
        <CardHolder holderInput={holderInput} />
        <CardExpirationPeriod expirationPeriodInputs={expirationPeriodInputs} />
        <CardIssuer value={cardIssuer} setValue={setCardIssuer} />
        <CardNumbers cardNumberInputs={cardNumberInputs} />
      </form>
    </div>
  );
}

export default App;
