import { ChangeEvent, KeyboardEvent } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import CardNumberInput from "./FormInputs/CardNumberInput";
import ExpirationDateInput from "./FormInputs/ExpirationDateInput";
import NameInput from "./FormInputs/NameInput";
import PasswordInput from "./FormInputs/PasswordInput";
import SecurityCodeInput from "./FormInputs/SecurityCodeInput";
import CardCompanyModal from "./CardCompanyModal";
import Header from "components/Header";
import Button, { NextButton } from "components/Button";
import CardPreview from "components/CardPreview";
import useRequiredCardInfo from "hooks/useRequiredCardInfo";
import useInitCardInfo from "hooks/useInitCardInfo";
import { moveFormInputFocus } from "utils/moveFormInputFocus";
import { shouldPreventFocusMovement } from "validation";
import { CARD_NICKNAME_PAGE } from "constants/path";
import { DIRECTION } from "constants/inputDirection";
const { NEXT, PREV } = DIRECTION;

const CardRegisterForm = () => {
  const allCardInfo = useInitCardInfo().cardInfo;

  const { isFormFilled } = useRequiredCardInfo();

  const navigate = useNavigate();
  const handlePageChange = () => navigate(CARD_NICKNAME_PAGE);

  const handleFocusNext = ({ target }: ChangeEvent<HTMLFormElement>) => {
    if (shouldPreventFocusMovement(target, allCardInfo)) return;

    moveFormInputFocus(target.form, target, NEXT);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLFormElement>) => {
    const { key, target, currentTarget: form } = event;

    if (key === "Enter") moveFormInputFocus(form, target, NEXT);

    if (!(target instanceof HTMLInputElement)) return;
    if (key !== "Backspace" || target.value !== "") return;

    moveFormInputFocus(form, target, PREV);
  };

  return (
    <S.Wrapper>
      <Header navigator title="카드 추가" />

      <CardPreview cardInfo={allCardInfo} />

      <CardCompanyModal />

      <form
        onSubmit={handlePageChange}
        onChange={handleFocusNext}
        onKeyDown={handleKeyDown}
      >
        <CardNumberInput />
        <ExpirationDateInput />
        <NameInput />
        <SecurityCodeInput />
        <PasswordInput />

        <Button
          children="다음"
          name="다음 버튼"
          ButtonStyle={NextButton}
          disabled={!isFormFilled}
        />
      </form>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    max-width: 480px;

    & > header {
      margin-bottom: 4px;
    }

    & > header + div:nth-child(2) {
      cursor: pointer;
    }
  `,
};

export default CardRegisterForm;
