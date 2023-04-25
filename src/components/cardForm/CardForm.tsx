import styled from "styled-components";
import { CardType } from "../../types/card";

import { CVCInput } from "./CVCInput";
import { CardNumberInput } from "./CardNumberInput";
import { ExpiryDateInput } from "./ExpiryDateInput";
import { OwnerInput } from "./OwnerInput";
import { PasswordInput } from "./PasswordInput";

import useAddCardForm from "../../hook/useAddCardForm";

interface CardFormProps {
  cards: CardType[];
  newCard: CardType;
  setNewCard: (value: CardType) => void;
  addNewCard: (newCard: CardType) => void;
}

export const CardForm = (props: CardFormProps) => {
  const { numbers, owner } = props.newCard;
  const {
    handleSubmit,

    setCardNumbers,
    setExpiryDate,
    setOwner,

    setCardNumbersCompleted,
    setExpriyDateCompleted,
    setCVCCompleted,
    setPasswordCompleted,

    setExpiryDateValid,
    setCardNumbersValid,
    isInputValid,

    isAllCompleted,
  } = useAddCardForm(props);

  return (
    <Form onSubmit={handleSubmit}>
      <CardNumberInput
        cardNumbers={numbers}
        isValid={isInputValid.isCardNumbersValid}
        setIsValid={setCardNumbersValid}
        setCardNumbers={setCardNumbers}
        setIsCompleted={setCardNumbersCompleted}
      />
      <ExpiryDateInput
        isValid={isInputValid.isExpiryDateValid}
        setIsValid={setExpiryDateValid}
        setExpiryDate={setExpiryDate}
        setIsCompleted={setExpriyDateCompleted}
      />
      <OwnerInput owner={owner} setOwner={setOwner} />
      <CVCInput setIsCompleted={setCVCCompleted} />
      <PasswordInput setIsCompleted={setPasswordCompleted} />
      <SubmitButton $color={isAllCompleted() ? "#525252" : "#D3D3D3"} type="submit">
        다음
      </SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-top: 20px;
`;

const SubmitButton = styled.button<{ $color: string }>`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: right;

  color: ${(props) => props.$color};
`;
