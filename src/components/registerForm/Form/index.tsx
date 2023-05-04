import React from "react";
import CardNumber from "src/components/registerForm/Number";
import ExpireDate from "src/components/registerForm/Date";
import OwnerNameInput from "src/components/registerForm/Owner";
import SecurityCode from "src/components/registerForm/Code";
import CardPassword from "src/components/registerForm/Password";
import { Styled as S } from "./CardRegisterForm.styles";
import useRegisterCardInfo from "src/hooks/useRegisterCardInfo";
import Button from "src/components/@common/Button";

function CardRegisterForm() {
  const { onSubmit, isValidateInfo, submitKeyDown } = useRegisterCardInfo();

  return (
    <S.Form onSubmit={onSubmit} onKeyDown={submitKeyDown}>
      <CardNumber />
      <ExpireDate />
      <OwnerNameInput />
      <SecurityCode />
      <CardPassword />
      <S.ButtonContainer>
        <Button text="다음" disabled={!isValidateInfo} />
      </S.ButtonContainer>
    </S.Form>
  );
}

export default CardRegisterForm;
