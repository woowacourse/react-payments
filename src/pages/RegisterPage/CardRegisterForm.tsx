import styled from "styled-components";
import { useState, createContext, useContext } from "react";
import CardNumberInput from "./FormInputs/CardNumberInput";
import ExpirationDateInput from "./FormInputs/ExpirationDateInput";
import NameInput from "./FormInputs/NameInput";
import PasswordInput from "./FormInputs/PasswordInput";
import SecurityCodeInput from "./FormInputs/SecurityCodeInput";
import CardPreview from "components/CardPreview";
import Header from "components/Header";
import { NextButton } from "components/ButtonStyle";
import { CardInfoContext } from "components/CardInfoProvider";
import useRequiredCardInfo from "hooks/useRequiredCardInfo";
import CardCompanyModal from "./CardCompanyModal";
import { SetModalState } from "types";
import { useNavigate } from "react-router";

const CardRegisterForm = () => {
  const allCardInfo = useContext(CardInfoContext).cardInfo;
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  const { isFormFilled } = useRequiredCardInfo();
  const handleFormSubmit = () => navigate("/completion");

  return (
    <S.Wrapper>
      <Header navigator title="카드 추가" />

      <ModalState.Provider value={setIsModalOpen}>
        <CardPreview cardInfo={allCardInfo} />

        {isModalOpen && <CardCompanyModal />}
      </ModalState.Provider>

      <form onSubmit={handleFormSubmit}>
        <CardNumberInput />
        <ExpirationDateInput />
        <NameInput />
        <SecurityCodeInput />
        <PasswordInput />

        {isFormFilled && <NextButton>다음</NextButton>}
      </form>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    max-width: 480px;
    width: 88%;
  `,
};

export default CardRegisterForm;

export const ModalState = createContext<SetModalState>(() => {});
