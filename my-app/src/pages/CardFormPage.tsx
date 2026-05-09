import { css } from "@emotion/react";
import { useState } from "react";
import type { CardInfo } from "../types";
import Card from "../components/Card/Card";
import CardNumberInputSection from "../components/CardNumberInputSection/CardNumberInputSection";
import ExpiryDateInputSection from "../components/ExpiryDateInputSection/ExpiryDateInputSection";
import CardCompanySelectSection from "../components/CardCompanySelectSection/CardCompanySelectSection";
import CvcInputSection from "../components/CvcInputSection/CvcInputSection";
import PasswordInputSection from "../components/PasswordInputSection/PasswordInputSection";
import { decideBrandName } from "../utils/decideBrandName";
import { getMaxLength } from "../utils/getMaxLength";
import { useNavigate } from "react-router-dom";

const CardFormPage = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    numbers: [],
    expiry: [],
    cvc: "",
    network: "",
    company: "",
    password: "",
  });

  const network = decideBrandName(cardInfo.numbers[0] ?? "");
  const maxLength = getMaxLength(network);
  const isSupportedNetwork = network !== "";
  const isCardNumberCompleted = cardInfo.numbers.join("").length === maxLength && isSupportedNetwork;
  const isCvcCompleted = cardInfo.cvc.length === 3;
  const isExpiryCompleted = cardInfo.expiry[0]?.length === 2 && cardInfo.expiry[1]?.length === 2;
  const isCompanySelected = cardInfo.company !== "";
  const isPasswordCompleted = cardInfo.password.length === 2;
  const isAllCompleted =
    isCardNumberCompleted && isCvcCompleted && isExpiryCompleted && isCompanySelected && isPasswordCompleted;

  const cardNumberHandler = (numbers: string[]) => {
    setCardInfo((prev) => ({ ...prev, numbers, network: decideBrandName(numbers[0] ?? ""), company: "" }));
  };

  const cardCompanyHandler = (company: string) => {
    setCardInfo((prev) => ({ ...prev, company }));
  };

  const expiryHandler = (expiry: string[]) => {
    setCardInfo((prev) => ({ ...prev, expiry }));
  };

  const cvcHandler = (cvc: string) => {
    setCardInfo((prev) => ({ ...prev, cvc }));
  };

  const passwordHandler = (password: string) => {
    setCardInfo((prev) => ({ ...prev, password }));
  };
  const navigate = useNavigate();

  return (
    <main css={pageStyle}>
      <div css={formContainerStyle}>
        <Card cardInfo={cardInfo} />
        <div css={sectionsStyle}>
          {isCvcCompleted && <PasswordInputSection onValueHandler={passwordHandler} />}
          {isExpiryCompleted && <CvcInputSection onValueHandler={cvcHandler} />}
          {isCompanySelected && <ExpiryDateInputSection onValueHandler={expiryHandler} />}
          {isCardNumberCompleted && <CardCompanySelectSection onSelect={cardCompanyHandler} />}
          <CardNumberInputSection
            onValueHandler={cardNumberHandler}
            maxLength={maxLength}
            isSupportedNetwork={isSupportedNetwork}
          />
          {isAllCompleted && <button onClick={() => navigate("/completed", {state: {cardInfo}})}>확인</button>}
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
