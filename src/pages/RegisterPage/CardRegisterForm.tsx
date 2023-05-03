import { ChangeEvent, KeyboardEvent } from "react";
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
import { isInvalidDate } from "validation";
import { VALID_INPUT } from "constants/limit";
import { DIRECTION } from "constants/inputDirection";
const { ONLY_NUMBER } = VALID_INPUT;
const { NEXT, PREV } = DIRECTION;

const CardRegisterForm = () => {
  const allCardInfo = useInitCardInfo().cardInfo;

  const { isFormFilled } = useRequiredCardInfo();

  const navigate = useNavigate();
  const handlePageChange = () => navigate("/completion");

  const handleFocusNext = ({ target }: ChangeEvent<HTMLFormElement>) => {
    if (shouldPreventFocusMovement(target)) return;

    focusFormInput(target.form, target, NEXT);
  };

  const shouldPreventFocusMovement = (
    target: EventTarget & HTMLFormElement
  ) => {
    const { name, value, maxLength } = target;

    if (name === "name") return value.length !== maxLength;

    const { month, year } = allCardInfo;
    const date = { month, year };
    const isValidDate = isInvalidDate(target, date);

    if ((name === "month" || name === "year") && isValidDate) return true;

    const validValue = value.replace(ONLY_NUMBER, "");

    return validValue.length !== maxLength;
  };

  const focusFormInput = (
    form: HTMLFormElement,
    currentInput: EventTarget,
    direction: number
  ) => {
    const formControlList = [...form];

    if (!(currentInput instanceof HTMLInputElement)) return;

    const currentInputIndex = formControlList.indexOf(currentInput);
    const nextInput = formControlList[currentInputIndex + direction];

    if (!nextInput || !(nextInput instanceof HTMLInputElement)) return;

    nextInput.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLFormElement>) => {
    const { key, target, currentTarget: form } = event;

    if (key === "Enter") focusFormInput(form, target, NEXT);

    if (!(target instanceof HTMLInputElement)) return;
    if (key !== "Backspace" || target.value !== "") return;

    focusFormInput(form, target, PREV);
  };

  return (
    <S.Wrapper>
      <Header navigator title="카드 추가" />

      <CardPreview cardInfo={allCardInfo} />

      {useModal().isModalOpen && <CardCompanyModal />}

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
