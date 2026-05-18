import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import type { CardDisplayInfo, PublicCardInfo } from "../../../types";
import { useCardForm } from "../../../hooks/useCardForm";
import { ROUTES } from "../../../constants/routes";

import Card from "../Card/Card";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import CardCompanySelectSection from "../CardCompanySelectSection/CardIssuerSelectSection";
import CardNumberInputSection from "../CardNumberInputSection/CardNumberInputSection";
import CvcInputSection from "../CvcInputSection/CvcInputSection";
import ExpiryDateInputSection from "../ExpiryDateInputSection/ExpiryDateInputSection";
import PasswordInputSection from "../PasswordInputSection/PasswordInputSection";

const toPublicCardInfo = (cardInfo: CardDisplayInfo): PublicCardInfo => ({
  numberHead: cardInfo.numbers[0],
  issuerCode: cardInfo.issuerCode,
});

const CardForm = () => {
  const navigate = useNavigate();
  const { cardInfo, maxLength, isSupportedNetwork, completion, handlers } = useCardForm();

  const handleConfirm = () => {
    navigate(ROUTES.CARD_LIST, { state: toPublicCardInfo(cardInfo) });
  };

  return (
    <div css={formContainerStyle}>
      <div css={contentStyle}>
        <Card cardInfo={cardInfo} />
        <div css={sectionsStyle}>
          {completion.cvc && <PasswordInputSection onValueHandler={handlers.password} />}
          {completion.expiry && <CvcInputSection onValueHandler={handlers.cvc} />}
          {completion.issuerCode && <ExpiryDateInputSection onValueHandler={handlers.expiry} />}
          {completion.cardNumber && <CardCompanySelectSection onSelect={handlers.cardIssuer} />}
          <CardNumberInputSection
            onValueHandler={handlers.cardNumber}
            maxLength={maxLength}
            isSupportedNetwork={isSupportedNetwork}
          />
        </div>
      </div>
      {completion.all && <PrimaryButton onClick={handleConfirm}>확인</PrimaryButton>}
    </div>
  );
};

export default CardForm;

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
