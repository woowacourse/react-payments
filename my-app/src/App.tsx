import { css } from "@emotion/react";
import type { CardInfo } from "./types.ts";
import { useState } from "react";
import Card from "./components/Card/Card";
import CardNumberInputSection from "./components/CardNumberInputSection/CardNumberInputSection.tsx";
import CardCompanySelectSection from "./components/CardCompanySelectSection/CardCompanySelectSection.tsx";
import ExpiryDateInputSection from "./components/ExpiryDateInputSection/ExpiryDateInputSection.tsx";
import CvcInputSection from "./components/CvcInputSection/CvcInputSection.tsx";
import { decideBrandName } from "./utils/decideCardInfo.ts";
import { validateCardNumber, validateExpiryDate, validateCvc } from "./utils/validators.ts";
import { useNavigate } from "react-router-dom";
function App() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    numbers: ["", "", "", ""],
    expiry: ["", ""],
    cvc: "",
    company: "",
  });
  const [step, setStep] = useState(0);

  const navigate = useNavigate();

  const brand = decideBrandName(cardInfo.numbers[0] ?? "");

  const cardNumberHandler = (numbers: string[]) => {
    setCardInfo((prev) => ({ ...prev, numbers }));
    if (numbers.every((n) => n.length === 4) && validateCardNumber(numbers).errorIndex === -1) {
      setStep((prev) => Math.max(prev, 1));
    }
  };

  const expiryHandler = (expiry: string[]) => {
    setCardInfo((prev) => ({ ...prev, expiry }));
    if (expiry.every((e) => e.length === 2) && validateExpiryDate(expiry).errorIndex === -1) {
      setStep((prev) => Math.max(prev, 3));
    }
  };

  const cvcHandler = (cvc: string) => {
    setCardInfo((prev) => {
      return { ...prev, cvc: cvc };
    });
  };

  const selectCompanyHandler = (company: string) => {
    setCardInfo((prev) => ({ ...prev, company }));
    setStep((prev) => Math.max(prev, 2));
  };

  const isComplete =
    cardInfo.numbers.every((n) => n.length === 4) &&
    cardInfo.company !== "" &&
    cardInfo.expiry.every((e) => e.length === 2) &&
    cardInfo.cvc.length === 3;

  const isValid =
    isComplete &&
    validateCardNumber(cardInfo.numbers).errorIndex === -1 &&
    validateExpiryDate(cardInfo.expiry).errorIndex === -1 &&
    validateCvc(cardInfo.cvc).errorIndex === -1;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/complete", { state: { numbers: cardInfo.numbers, brand } });
  };

  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          padding: 30px;
          align-items: center;
        `}
      >
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
            flex: 1;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 16px;
          `}
        >
          <form id="card-form" onSubmit={handleSubmit}>
            {step >= 3 && <CvcInputSection onValueHandler={cvcHandler} inputValue={cardInfo.cvc} />}
            {step >= 2 && (
              <ExpiryDateInputSection onValueHandler={expiryHandler} inputValues={cardInfo.expiry} />
            )}
            {step >= 1 && (
              <CardCompanySelectSection onValueHandler={selectCompanyHandler} inputValue={cardInfo.company} />
            )}
            <CardNumberInputSection onValueHandler={cardNumberHandler} inputValues={cardInfo.numbers} />
          </form>
        </div>
      </div>
      {isValid && (
        <button
          form="card-form"
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
    </>
  );
}

export default App;
