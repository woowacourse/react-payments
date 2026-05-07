import { css } from "@emotion/react";
import type { CardInfo } from "./types.ts";
import { useState } from "react";
import Card from "./components/Card/Card";
import CardNumberInputSection from "./components/CardNumberInputSection/CardNumberInputSection";
import CvcInputSection from "./components/CvcInputSection/CvcInputSection";
import ExpiryDateInputSection from "./components/ExpiryDateInputSection/ExpiryDateInputSection";
import { decideBrandName } from "./utils/decideBrandName.ts";

function App() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    numbers: ["", "", "", ""],
    expiry: ["", ""],
    cvc: "",
  });

  const brand = decideBrandName(cardInfo.numbers[0] ?? "");

  const cardNumberHandler = (cardInfo: string[]) => {
    setCardInfo((prev) => {
      return { ...prev, numbers: cardInfo };
    });
  };

  const expiryHandler = (cardInfo: string[]) => {
    setCardInfo((prev) => {
      return { ...prev, expiry: cardInfo };
    });
  };

  const cvcHandler = (cardInfo: string) => {
    setCardInfo((prev) => {
      return { ...prev, cvc: cardInfo };
    });
  };

  return (
    <main
      css={css`
        display: flex;
        min-height: 100vh;
        width: 100vw;
        align-items: flex-start;
        justify-content: center;
        padding-top: 60px;
        background-color: #f5f5f5;
      `}
    >
      <div
        css={css`
          width: 376px;
          padding: 77px 30px 20px;
          background-color: #ffffff;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 45px;
        `}
      >
        <Card cardInfo={cardInfo} brand={brand} />
        <div
          css={css`
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 16px;
          `}
        >
          {/* form */}

          <CardNumberInputSection onValueHandler={cardNumberHandler} inputValues={cardInfo.numbers} />
          <ExpiryDateInputSection onValueHandler={expiryHandler} inputValues={cardInfo.expiry} />
          <CvcInputSection onValueHandler={cvcHandler} inputValue={cardInfo.cvc} />
        </div>
      </div>
    </main>
  );
}

export default App;
