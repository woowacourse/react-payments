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
  const { cardInfo, network, maxLength, isSupportedNetwork, completion, handlers } = useCardForm();

  const handleConfirm = () => {
    const publicCardInfo = {
      numberHead: cardInfo.numbers[0],
      company: cardInfo.company,
    }
    navigate("/completed", { state: publicCardInfo });
  };

  return (
    <main css={pageStyle}>
      <div css={formContainerStyle}>
        <div css={contentStyle}>
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
          </div>
        </div>
        {completion.all && (
          <button css={confirmButtonStyle} onClick={handleConfirm}>
            확인
          </button>
        )}
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
  height: 700px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const contentStyle = css`
  flex: 1;
  overflow-y: auto;
  padding: 62px 30px 20px;
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

const confirmButtonStyle = css`
  width: 100%;
  height: 52px;
  background-color: #333;
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
