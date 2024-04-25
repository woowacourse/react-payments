import CardCVCInput from "./CardCVCInput";
import CardExpirationDateInput from "./CardExpirationDateInput";
import CardIssuerSelect from "./CardIssuerSelect";
import CardNumbersInput from "./CardNumbersInput";
import CardOwnerNameInput from "./CardOwnerNameInput";
import CardPasswordInput from "./CardPasswordInput";
import CardPreview from "./CardPreview";
import FormSubmitButton from "./FormSubmitButton";
import styled from "styled-components";
import useBoolean from "../../../hooks/useBoolean";
import useCardInformation from "../../../hooks/useCardInformation";
import useCardInformationErrorState from "../../../hooks/useCardInformationErrorState";
import useReadyForSubmit from "../../../hooks/useReadyForSubmit";

const CardEnrollFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 77px;
`;

const CardInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 376px;
  padding: 45px 30px;
  gap: 16px;
`;

export default function CardEnrollForm() {
  const {
    cardInformation,
    setCardNumbers,
    setCardIssuer,
    setCardExpiration,
    setCardOwnerName,
    setCardCVC,
    setCardPassword,
  } = useCardInformation();

  const {
    errorState,
    updateCardNumbersErrorState,
    updateCardIssuerErrorState,
    updateCardExpirationErrorState,
    updateCardOwnerNameErrorState,
    updateCVCErrorState,
    updatePasswordErrorState,
  } = useCardInformationErrorState();

  const { isReadyForSubmit } = useReadyForSubmit([cardInformation, errorState]);

  const {
    flag: isCVCFocused,
    setTrue: setCVCFocused,
    setFalse: setCVCBlur,
  } = useBoolean(false);

  return (
    <CardEnrollFormContainer>
      <CardPreview cardInformation={cardInformation} isFlipped={isCVCFocused} />
      <CardInformationContainer>
        <CardPasswordInput
          cardPassword={cardInformation.cardPassword}
          errorState={errorState.cardPassword}
          onChange={setCardPassword}
          updateErrorState={updatePasswordErrorState}
        />
        <CardCVCInput
          cardCVC={cardInformation.cardCVC}
          errorState={errorState.cardCVC}
          onChange={setCardCVC}
          onBlur={setCVCBlur}
          onFocus={setCVCFocused}
          updateErrorState={updateCVCErrorState}
        />
        <CardNumbersInput
          cardNumbers={cardInformation.cardNumbers}
          errorState={errorState.cardNumbers}
          onChange={setCardNumbers}
          updateErrorState={updateCardNumbersErrorState}
        />
        <CardExpirationDateInput
          cardExpiration={cardInformation.cardExpiration}
          errorState={errorState.cardExpiration}
          onChange={setCardExpiration}
          updateErrorState={updateCardExpirationErrorState}
        />
        <CardOwnerNameInput
          cardOwnerName={cardInformation.cardOwnerName}
          errorState={errorState.cardOwnerName}
          onChange={setCardOwnerName}
          updateErrorState={updateCardOwnerNameErrorState}
        />
        <CardIssuerSelect
          cardIssuer={cardInformation.cardIssuer}
          errorState={errorState.cardIssuer}
          onChange={setCardIssuer}
          updateErrorState={updateCardIssuerErrorState}
        />
      </CardInformationContainer>
      <FormSubmitButton disabled={!isReadyForSubmit} />
    </CardEnrollFormContainer>
  );
}
