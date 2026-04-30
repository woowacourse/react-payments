import { css } from "@emotion/react";
import type { CardInfo } from "./types.ts";
import { useState } from "react";
import Card from "./components/Card.tsx";
import CardNumberInputSection from "../src/components/CardNumberInputSection.tsx";
import CvcInputSection from "../src/components/CvcInputSection.tsx";
import ExpiryDateInputSection from "../src/components/ExpiryDateInputSection.tsx";
import { decideBrandName } from "./utils/decideBrandName.ts";
import { useEffect } from "react";

function App() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({ numbers: [], expiry: [], cvc: "", brand: "" });

  console.log(cardInfo);
  useEffect(() => {
    const brandName = decideBrandName(cardInfo.numbers[0]);
    setCardInfo((prev) => {
      return { ...prev, brand: brandName };
    });
  }, [cardInfo.numbers[0]]);

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
        height: 100vh;
        width: 100vw;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 315px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 45px;
        `}
      >
        <Card cardInfo={cardInfo} />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 16px;
          `}
        >
          {/* form */}
          <CardNumberInputSection onValueHandler={cardNumberHandler} />
          <ExpiryDateInputSection onValueHandler={expiryHandler} />
          <CvcInputSection onValueHandler={cvcHandler} />
        </div>
      </div>
    </main>
  );
}

export default App;
