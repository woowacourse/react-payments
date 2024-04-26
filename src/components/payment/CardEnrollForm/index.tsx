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

    isCardCvcInputFocused,
    isReadyForSubmit,

    dynamicInputUiFlag,

    cardPasswordInputProps,
    cardCvcInputProps,
    cardOwnerNameInputProps,
    cardExpirationDateInputProps,
    cardIssuerSelectProps,
    cardNumbersInputProps,
  } = useCardEnrollForm();

  return (
    <CardEnrollFormContainer>
      <CardPreview
        cardInformation={cardInformation}
        isFlipped={isCardCvcInputFocused}
      />

      <CardInformationContainer>
        {dynamicInputUiFlag.isCardCvcInputDone && (
          <CardPasswordInput {...cardPasswordInputProps} />
        )}
        {dynamicInputUiFlag.isCardOwnerNameInputDone && (
          <CardCvcInput {...cardCvcInputProps} />
        )}
        {dynamicInputUiFlag.isCardExpirationDateInputDone && (
          <CardOwnerNameInput {...cardOwnerNameInputProps} />
        )}
        {dynamicInputUiFlag.isCardIssuerInputDone && (
          <CardExpirationDateInput {...cardExpirationDateInputProps} />
        )}
        {dynamicInputUiFlag.isCardNumbersInputDone && (
          <CardIssuerSelect {...cardIssuerSelectProps} />
        )}
        <CardNumbersInput {...cardNumbersInputProps} />
      </CardInformationContainer>

      {isReadyForSubmit && (
        <FormSubmitButton
          onClick={() =>
            navigate("/card-enroll-complete", { state: { cardInformation } })
          }
        />
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
