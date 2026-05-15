import { css } from "@emotion/react";

import type { CardDisplayInfo, PublicCardInfo } from "../../../types";
import { useCardForm } from "../../../hooks/useCardForm";

import Card from "../Card/Card";
import CardCompanySelectSection from "../CardCompanySelectSection/CardCompanySelectSection";
import CardNumberInputSection from "../CardNumberInputSection/CardNumberInputSection";
import CvcInputSection from "../CvcInputSection/CvcInputSection";
import ExpiryDateInputSection from "../ExpiryDateInputSection/ExpiryDateInputSection";
import PasswordInputSection from "../PasswordInputSection/PasswordInputSection";

type CardFormProps = {
  onSubmit: (publicCardInfo: PublicCardInfo) => void;
};

const toPublicCardInfo = (cardInfo: CardDisplayInfo): PublicCardInfo => ({
  numberHead: cardInfo.numbers[0],
  company: cardInfo.company,
});

const CardForm = ({ onSubmit }: CardFormProps) => {
  const { cardInfo, maxLength, isSupportedNetwork, completion, handlers } = useCardForm();

  const handleConfirm = () => {
    onSubmit(toPublicCardInfo(cardInfo));
  };

  return (
    <div css={formContainerStyle}>
      <div css={contentStyle}>
        <Card cardInfo={cardInfo} />
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
