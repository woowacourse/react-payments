import { css } from "@emotion/react";
import type { CardInfo } from "./types.ts";
import { useState } from "react";
import Card from "./components/Card/Card";
import CardNumberInputSection from "./components/CardNumberInputSection/CardNumberInputSection";
import CvcInputSection from "./components/CvcInputSection/CvcInputSection";
import ExpiryDateInputSection from "./components/ExpiryDateInputSection/ExpiryDateInputSection";
import { decideBrandName } from "./utils/decideBrandName.ts";
import { validateCardNumber, validateExpiryDate, validateCvc } from "./utils/validators.ts";
import { useNavigate } from "react-router-dom";
function App() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    numbers: ["", "", "", ""],
    expiry: ["", ""],
    cvc: "",
  });

  const navigate = useNavigate();

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

  const isComplete =
    cardInfo.numbers.every((n) => n.length === 4) &&
    cardInfo.expiry.every((e) => e.length === 2) &&
    cardInfo.cvc.length === 3;

  const isValid =
    isComplete &&
    validateCardNumber(cardInfo.numbers).errorIndex === -1 &&
    validateExpiryDate(cardInfo.expiry).errorIndex === -1 &&
    validateCvc(cardInfo.cvc).errorIndex === -1;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/complete");
  };
  return (
    <>
      <div
        css={css`
          padding: 45px 0;
        `}
      >
        <Card cardInfo={cardInfo} brand={brand} />
      </div>

      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        `}
      >
        <form onSubmit={handleSubmit}>
          <CardNumberInputSection onValueHandler={cardNumberHandler} inputValues={cardInfo.numbers} />
          <ExpiryDateInputSection onValueHandler={expiryHandler} inputValues={cardInfo.expiry} />
          <CvcInputSection onValueHandler={cvcHandler} inputValue={cardInfo.cvc} />
          {isValid && (
            <button
              css={css`
                width: 100%;
                background: #333333;
                color: #f3f3f3;
                height: 52px;
              `}
            >
              확인
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
