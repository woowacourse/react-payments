import CVCInput from "./CVCInput";
import CardNumberInput from "./CardNumberInput";
import ExpiryDateInput from "./ExpiryDateInput";
import OwnerInput from "./OwnerInput";
import PasswordInput from "./PasswordInput";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useContext, FormEvent } from "react";
import { useCheckForm } from "../../hook/useCheckForm";
import { useHelpSubmitForm } from "../../hook/useHelpSubmitForm";

import { CardsContext } from "../../contexts/CardsContext";
import { NewCardContext } from "../../contexts/NewCardContext";

const CardForm = () => {
  const { cards, addNewCard } = useContext(CardsContext);
  const { newCard } = useContext(NewCardContext);
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate("/setAlias", { state: { newCard } });
  };

  const {
    isInputsCompleted,
    setIsNumbersCompleted,
    setExpriyDateCompleted,
    setIsCVCCompleted,
    setIsPassWordCompleted,

    isInputsValid,
    setIsNumbersValid,
    setIsExpiryDateValid,

    isAllCompleted,
  } = useCheckForm();

  const { isAllValid, makeCardFormData } = useHelpSubmitForm({
    newCard,
    cards,
    setIsNumbersValid,
    setIsExpiryDateValid,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAllCompleted()) return;
    if (!isAllValid()) return;

    const cardInfo = makeCardFormData(e.target as HTMLFormElement);
    addNewCard(cardInfo);
    moveToHome();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardNumberInput
        isInputsValid={isInputsValid}
        setIsNumbersCompleted={setIsNumbersCompleted}
        setIsNumbersValid={setIsNumbersValid}
      />
      <ExpiryDateInput
        isInputsValid={isInputsValid}
        setExpriyDateCompleted={setExpriyDateCompleted}
        setIsExpiryDateValid={setIsExpiryDateValid}
      />
      <OwnerInput />
      <CVCInput setIsCVCCompleted={setIsCVCCompleted} />
      <PasswordInput setIsPassWordCompleted={setIsPassWordCompleted} />
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

export default CardForm;
