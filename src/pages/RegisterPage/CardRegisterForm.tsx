import styled from "styled-components";
import { useContext } from "react";
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
import { useNavigate } from "react-router";
import { ModalStateContext } from "components/ModalStateProvider";

const CardRegisterForm = () => {
  const allCardInfo = useContext(CardInfoContext).cardInfo;
  const isModalOpen = useContext(ModalStateContext).isModalOpen;

  const { isFormFilled } = useRequiredCardInfo();

  const navigate = useNavigate();
  const handlePageChange = () => navigate("/completion");

  return (
    <S.Wrapper>
      <Header navigator title="카드 추가" />

      <CardPreview cardInfo={allCardInfo} />

      {isModalOpen && <CardCompanyModal />}

      <form onSubmit={handlePageChange}>
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
