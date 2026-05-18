import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import { useCardForm } from "../../../hooks/useCardForm";
import { useCreateCard } from "../../../hooks/queries/useCreateCard";
import { ROUTES } from "../../../constants/routes";

import CardRegisterationPreview from "../CardRegisterationPreview/CardRegisterationPreview";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import CardRegisterationIssuerSelectSection from "../CardCompanySelectSection/CardRegisterationIssuerSelectSection";
import CardRegisterationNumberInputSection from "../CardRegisterationNumberInputSection/CardRegisterationNumberInputSection";
import CvcRegisterationInputSection from "../CvcRegisterationInputSection/CvcRegisterationInputSection";
import ExpiryDateRegisterationInputSection from "../ExpiryDateInputSection/ExpiryDateRegisterationInputSection";
import PasswordRegisterationInputSection from "../PasswordInputSection/PasswordRegisterationInputSection";

const CardRegisterationForm = () => {
  const navigate = useNavigate();
  const { cardInfo, maxLength, isSupportedNetwork, completion, handlers } = useCardForm();
  const { state, submit } = useCreateCard();

  const handleConfirm = async () => {
    const result = await submit(cardInfo);
    if (result.status === "success") {
      navigate(ROUTES.CARD_LIST);
    }
  };

  const serverError = state.status === "error" ? state : null;

  return (
    <div css={formContainerStyle}>
      <div css={contentStyle}>
        <CardRegisterationPreview cardInfo={cardInfo} />
        <div css={sectionsStyle}>
          {completion.cvc && <PasswordRegisterationInputSection onValueHandler={handlers.password} />}
          {completion.expiry && (
            <CvcRegisterationInputSection
              onValueHandler={handlers.cvc}
              serverErrorMessage={serverError?.field === "cvc" ? serverError.message : undefined}
            />
          )}
          {completion.issuerCode && (
            <ExpiryDateRegisterationInputSection
              onValueHandler={handlers.expiry}
              serverErrorMessage={serverError?.field === "expiry" ? serverError.message : undefined}
            />
          )}
          {completion.cardNumber && <CardRegisterationIssuerSelectSection onSelect={handlers.cardIssuer} />}
          <CardRegisterationNumberInputSection
            onValueHandler={handlers.cardNumber}
            maxLength={maxLength}
            isSupportedNetwork={isSupportedNetwork}
            serverErrorMessage={serverError?.field === "numbers" ? serverError.message : undefined}
          />
        </div>
      </div>
      {completion.all && (
        <PrimaryButton onClick={handleConfirm} disabled={state.status === "loading"}>
          확인
        </PrimaryButton>
      )}
    </div>
  );
};

export default CardRegisterationForm;

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
