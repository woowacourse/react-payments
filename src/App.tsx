/** @jsxImportSource @emotion/react */
import "./App.css";

import CardForm from "./components/CardForm";
import CardPreview from "./components/CardPreview";
import { css } from "@emotion/react";
import { matchCardIssuer } from "./domain/matchCardIssuer";
import useCardExpirationPeriod from "./hooks/useCardExpirationPeriod";
import useCardHolder from "./hooks/useCardHolder";
import useCardNumbers from "./hooks/useCardNumbers";

const styledCardInfoContainer = css`
  width: 315px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  margin: auto;
  margin-top: 50px;
`;

function App() {
  const cardNumbers = useCardNumbers();
  const cardExpirationPeriod = useCardExpirationPeriod();
  const cardHolder = useCardHolder();

  const cardNumbersValue = cardNumbers.cardNumberInputs.map(
    (input) => input.value
  ) as [string, string, string, string];

  const cardExpirationPeriodValue =
    cardExpirationPeriod.expirationPeriodInputs.map((input) => input.value) as [
      string,
      string,
    ];

  return (
    <div css={styledCardInfoContainer}>
      <CardPreview
        cardIssuer={matchCardIssuer(cardNumbersValue.join(""))}
        cardNumbers={cardNumbersValue}
        cardExpirationPeriod={cardExpirationPeriodValue}
        cardHolder={cardHolder.holderInput.value}
      />
      <CardForm
        cardNumbers={cardNumbers}
        cardExpirationPeriod={cardExpirationPeriod}
        cardHolder={cardHolder}
      />
    </div>
  );
}

export default App;
