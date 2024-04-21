/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import "./App.css";
import CreditCard from "./Components/CreditCard";
import Form from "./Components/Form";

const mainStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "376px",
  margin: "auto",
});

const initCardNumbersValue: CardNumbers = {
  firstNumbers: undefined,
  secondNumbers: undefined,
  thirdNumbers: undefined,
  fourthNumbers: undefined,
};

const initCardValidityPeriodValue: CardValidityPeriod = {
  month: undefined,
  year: undefined,
};

const initCardOwnerInfoValue: CardOwnerInfo = {
  name: undefined,
};

export const CardNumbersContext = createContext<[CardNumbers, Dispatch<SetStateAction<CardNumbers>>] | null>(null);
export const CardValidityPeriodContext = createContext<
  [CardValidityPeriod, Dispatch<SetStateAction<CardValidityPeriod>>] | null
>(null);
export const CardOwnerInfoContext = createContext<[CardOwnerInfo, Dispatch<SetStateAction<CardOwnerInfo>>] | null>(
  null
);

function App() {
  const cardNumbersState = useState(initCardNumbersValue);
  const cardValidityPeriodState = useState(initCardValidityPeriodValue);
  const cardOwnerInfoState = useState(initCardOwnerInfoValue);

  return (
    <div css={mainStyle}>
      <CardNumbersContext.Provider value={cardNumbersState}>
        <CardValidityPeriodContext.Provider value={cardValidityPeriodState}>
          <CardOwnerInfoContext.Provider value={cardOwnerInfoState}>
            <CreditCard />
            <Form />
          </CardOwnerInfoContext.Provider>
        </CardValidityPeriodContext.Provider>
      </CardNumbersContext.Provider>
    </div>
  );
}

export default App;
