import styled from "styled-components";
import { CardType } from "../../types/card";

import { CVCInput } from "./CVCInput";
import { CardNumberInput } from "./CardNumberInput";
import { ExpiryDateInput } from "./ExpiryDateInput";
import { OwnerInput } from "./OwnerInput";
import { PasswordInput } from "./PasswordInput";

import useAddCardForm from "../../hook/useAddCardForm";

interface CardFormProps {
  cardInfo: CardType;
  setCardInfo: (value: CardType) => void;
  addNewCard: (newCard: CardType) => void;
}

export const CardForm = ({ cardInfo, setCardInfo, addNewCard }: CardFormProps) => {
  const {
    handleSubmit,

    setCardNumbers,
    setExpiryDate,
    setOwner,

    setCardNumbersCompleted,
    setExpriyDateCompleted,
    setCVCCompleted,
    setPasswordCompleted,

    setValidExpiryDateValid,

    isInputValid,
    isAllCompleted,
  } = useAddCardForm({ cardInfo, setCardInfo, addNewCard });

  return (
    <Form onSubmit={handleSubmit}>
      <CardNumberInput
        cardNumbers={cardInfo.numbers}
        setCardNumbers={setCardNumbers}
        setIsCompleted={setCardNumbersCompleted}
      />
      <ExpiryDateInput
        isValid={isInputValid.isExpiryDateValid}
        setIsValid={setValidExpiryDateValid}
        setExpiryDate={setExpiryDate}
        setIsCompleted={setExpriyDateCompleted}
      />
      <OwnerInput owner={cardInfo.owner} setOwner={setOwner} />
      <CVCInput setIsCompleted={setCVCCompleted} />
      <PasswordInput setIsCompleted={setPasswordCompleted} />
      <SubmitButton color={isAllCompleted() ? "#525252" : "#D3D3D3"} type="submit">
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

const SubmitButton = styled.button<{ color: string }>`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: right;

  color: ${(props) => props.color};
`;
