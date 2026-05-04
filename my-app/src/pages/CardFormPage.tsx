import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import type { CardInfo } from "../types";
import Card from "../components/Card/Card";
import CardNumberInputSection from "../components/CardNumberInputSection/CardNumberInputSection";
import ExpiryDateInputSection from "../components/ExpiryDateInputSection/ExpiryDateInputSection";
import CvcInputSection from "../components/CvcInputSection/CvcInputSection";
import { decideBrandName } from "../utils/decideBrandName";

const CardFormPage = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({ numbers: [], expiry: [], cvc: "", brand: "" });

  useEffect(() => {
    const brandName = decideBrandName(cardInfo.numbers[0]);
    setCardInfo((prev) => ({ ...prev, brand: brandName }));
  }, [cardInfo.numbers[0]]);

  const cardNumberHandler = (numbers: string[]) => {
    setCardInfo((prev) => ({ ...prev, numbers }));
  };

  const expiryHandler = (expiry: string[]) => {
    setCardInfo((prev) => ({ ...prev, expiry }));
  };

  const cvcHandler = (cvc: string) => {
    setCardInfo((prev) => ({ ...prev, cvc }));
  };

  return (
    <main css={pageStyle}>
      <div css={formContainerStyle}>
        <Card cardInfo={cardInfo} />
        <div css={sectionsStyle}>
          <CardNumberInputSection onValueHandler={cardNumberHandler} />
          <ExpiryDateInputSection onValueHandler={expiryHandler} />
          <CvcInputSection onValueHandler={cvcHandler} />
        </div>
      </div>
    </main>
  );
};

export default CardFormPage;

const pageStyle = css`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  align-items: flex-start;
  justify-content: center;
  padding-top: 60px;
  background-color: #f5f5f5;
`;

const formContainerStyle = css`
  width: 376px;
  padding: 77px 30px 20px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
`;

const sectionsStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
