import { useNavigate } from "react-router";
import styled from "styled-components";
import CardNumberInput from "./FormInputs/CardNumberInput";
import ExpirationDateInput from "./FormInputs/ExpirationDateInput";
import NameInput from "./FormInputs/NameInput";
import PasswordInput from "./FormInputs/PasswordInput";
import SecurityCodeInput from "./FormInputs/SecurityCodeInput";
import CardCompanyModal from "./CardCompanyModal";
import CardPreview from "components/CardPreview";
import Header from "components/Header";
import { NextButton } from "components/style/ButtonStyle";
import useRequiredCardInfo from "hooks/useRequiredCardInfo";
import useInitCardInfo from "hooks/useInitCardInfo";
import useModal from "hooks/useModal";

const CardRegisterForm = () => {
  const allCardInfo = useInitCardInfo().cardInfo;

  const { isFormFilled } = useRequiredCardInfo();

  const navigate = useNavigate();
  const handlePageChange = () => navigate("/completion");

  return (
    <S.Wrapper>
      <Header navigator title="카드 추가" />

      <CardPreview cardInfo={allCardInfo} />

      {useModal().isModalOpen && <CardCompanyModal />}

      <form onSubmit={handlePageChange}>
        <CardNumberInput />
        <ExpirationDateInput />
        <NameInput />
        <SecurityCodeInput />
        <PasswordInput />

        <NextButton disabled={!isFormFilled}>다음</NextButton>
      </form>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    max-width: 480px;
    width: 88%;

    & > header {
      margin-bottom: 4px;
    }

    & > header + div:nth-child(2) {
      cursor: pointer;
    }
  `,
};

export default CardRegisterForm;
