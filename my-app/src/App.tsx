import { css } from "@emotion/react";
import "./App.css";
import Container from "./components/container";
import type { CardInfo } from "./types.ts";
import { useState } from "react";
import Card from "./components/Card.tsx";

function App() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({ numbers: [], expiry: [], cvc: [], brand: "" });

  const cardNumberHandler = (cardInfo: string[], brand?: string) => {
    setCardInfo((prev) => {
      return { ...prev, numbers: cardInfo, brand: brand ?? "" };
    });
  };
  const expiryHandler = (cardInfo: string[]) => {
    setCardInfo((prev) => {
      return { ...prev, expiry: cardInfo };
    });
  };
  const cvcHandler = (cardInfo: string[]) => {
    setCardInfo((prev) => {
      return { ...prev, cvc: cardInfo };
    });
  };

  return (
    <main
      css={css`
        display: flex;
        height: 100vh;
        width: 100vw;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 376px;
          height: 700px;
          margin: auto;
        `}
      >
        <Card cardInfo={cardInfo} />
        {/* form */}
        <Container mode="CARD" onValueHandler={cardNumberHandler} />
        <Container mode="EXP" onValueHandler={expiryHandler} />
        <Container mode="CVC" onValueHandler={cvcHandler} />
      </div>
    </main>
  );
}

export default App;
