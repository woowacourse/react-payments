import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import useCardAddForm from "../hooks/useCardAddForm";

import CardPreview from "../components/CardPreview/CardPreview";

import CardPasswordInputField from "../components/CardFormField/CardPasswordInputField";
import CardOwnerInputField from "../components/CardFormField/CardOwnerInputField";
import CVCNumberInputField from "../components/CardFormField/CVCNumberInputFiled";
import ExpirationDateInputField from "../components/CardFormField/ExpirationDateInputField";
import CardCompanySelectField from "../components/CardFormField/CardCompanySelectField";
import CardNumberInputField from "../components/CardFormField/CardNumberInputField";

import { CARD_APP_PATH } from "../constants/card-app";

const CardFormPage = () => {
  const navigate = useNavigate();

  const {
    formState,
    isCardCompanySelectCompleted,
    isCardNumbersInputCompleted,
    isExpirationDateInputCompleted,
    isFormInputCompleted,
  } = useCardAddForm();

  return (
    <>
      <CardPreview />

      {formState.cardPassword.displayed && <CardPasswordInputField />}

      {formState.cvcNumber.displayed && <CVCNumberInputField />}

      {(isExpirationDateInputCompleted || formState.ownerName.displayed) && (
        <CardOwnerInputField />
      )}

      {(isCardCompanySelectCompleted || formState.expirationDate.displayed) && (
        <ExpirationDateInputField />
      )}

      {(isCardNumbersInputCompleted || formState.cardCompany.displayed) && (
        <CardCompanySelectField />
      )}

      <CardNumberInputField />

      {isFormInputCompleted && (
        <StyledButton onClick={() => navigate(CARD_APP_PATH.complete)}>
          확인
        </StyledButton>
      )}
    </>
  );
};

export default CardFormPage;
const StyledButton = styled.button`
  height: 52px;
  width: 376px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.25);
  background-color: #333333;
  color: #f3f3f3;
  font-weight: 700;

  cursor: pointer;
`;
