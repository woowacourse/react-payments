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
    cardInformation,

    isCvcFocused,
    isReadyForSubmit,

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
        <CardPasswordInput {...cardPassword} />
        <CardCvcInput {...cardCvc} />
        <CardNumbersInput {...cardNumbers} />
        <CardExpirationDateInput {...cardExpiration} />
        <CardOwnerNameInput {...cardOwnerName} />
        <CardIssuerSelect {...cardIssuer} />
      </CardInformationContainer>

      <FormSubmitButton disabled={!isReadyForSubmit} />
    </CardEnrollFormContainer>
  );
}
