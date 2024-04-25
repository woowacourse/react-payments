import CardCvcInput from "./CardCvcInput";
import CardExpirationDateInput from "./CardExpirationDateInput";
import CardIssuerSelect from "./CardIssuerSelect";
import CardNumbersInput from "./CardNumbersInput";
import CardOwnerNameInput from "./CardOwnerNameInput";
import CardPasswordInput from "./CardPasswordInput";
import CardPreview from "./CardPreview";
import FormSubmitButton from "./FormSubmitButton";
import styled from "styled-components";
import useCardEnrollForm from "../../../hooks/useCardEnrollForm";

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
    isCvcFocused,
    isReadyForSubmit,

    cardInformation,

    cardPassword,
    cardCvc,
    cardNumbers,
    cardExpiration,
    cardOwnerName,
    cardIssuer,
  } = useCardEnrollForm();

  return (
    <CardEnrollFormContainer>
      <CardPreview cardInformation={cardInformation} isFlipped={isCvcFocused} />
      <CardInformationContainer>
        <CardPasswordInput
          cardPassword={cardPassword.valueState}
          errorState={cardPassword.errorState}
          onChange={cardPassword.onCardPasswordChange}
          onBlur={cardPassword.onCardPasswordBlur}
        />
        <CardCvcInput
          cardCvc={cardCvc.valueState}
          errorState={cardCvc.errorState}
          onChange={cardCvc.onCardCvcChange}
          onBlur={cardCvc.onCardCvcBlur}
          onFocus={cardCvc.onCardCvcFocus}
        />
        <CardNumbersInput
          cardNumbers={cardNumbers.valueState}
          errorState={cardNumbers.errorState}
          onChange={cardNumbers.onCardNumberChange}
          onBlur={cardNumbers.onCardNumberBlur}
        />
        <CardExpirationDateInput
          cardExpiration={cardExpiration.valueState}
          errorState={cardExpiration.errorState}
          onChange={cardExpiration.onExpirationChange}
          onBlur={cardExpiration.onExpirationBlur}
        />
        <CardOwnerNameInput
          cardOwnerName={cardOwnerName.valueState}
          errorState={cardOwnerName.errorState}
          onChange={cardOwnerName.onOwnerNameChange}
          onBlur={cardOwnerName.onOwnerNameBlur}
        />
        <CardIssuerSelect
          cardIssuer={cardIssuer.valueState}
          errorState={cardIssuer.errorState}
          onChange={cardIssuer.onCardIssuerChange}
          onBlur={cardIssuer.onCardIssuerBlur}
        />
      </CardInformationContainer>
      <FormSubmitButton disabled={!isReadyForSubmit} />
    </CardEnrollFormContainer>
  );
}
