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
import { useNavigate } from "react-router-dom";

export default function CardEnrollForm() {
  const navigate = useNavigate();

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

      {isReadyForSubmit && (
        <FormSubmitButton onClick={() => navigate("/card-enroll-complete")} />
      )}
    </CardEnrollFormContainer>
  );
}

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
