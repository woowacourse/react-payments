import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import Card from "../components/Card/Card";
import CardCompanySelectSection from "../components/CardCompanySelectSection/CardCompanySelectSection";
import CardNumberInputSection from "../components/CardNumberInputSection/CardNumberInputSection";
import CvcInputSection from "../components/CvcInputSection/CvcInputSection";
import ExpiryDateInputSection from "../components/ExpiryDateInputSection/ExpiryDateInputSection";
import PasswordInputSection from "../components/PasswordInputSection/PasswordInputSection";

import { useCardForm } from "../hooks/useCardForm";

const CardFormPage = () => {
  const navigate = useNavigate();
  const { cardInfo, network, maxLength, isSupportedNetwork, completion, handlers } = useCardForm({
    onSubmit: (info) => navigate("/completed", { state: { cardInfo: info } }),
  });

  return (
    <main css={pageStyle}>
      <div css={formContainerStyle}>
        <Card cardInfo={cardInfo} network={network} />
        <div css={sectionsStyle}>
          {completion.cvc && <PasswordInputSection onValueHandler={handlers.password} />}
          {completion.expiry && <CvcInputSection onValueHandler={handlers.cvc} />}
          {completion.company && <ExpiryDateInputSection onValueHandler={handlers.expiry} />}
          {completion.cardNumber && <CardCompanySelectSection onSelect={handlers.cardCompany} />}
          <CardNumberInputSection
            onValueHandler={handlers.cardNumber}
            maxLength={maxLength}
            isSupportedNetwork={isSupportedNetwork}
          />
          {completion.all && <button onClick={handlers.submit}>확인</button>}
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
