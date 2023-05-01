import React from "react";
import CardNumber from "src/components/registerForm/CardNumber";
import ExpireDate from "src/components/registerForm/ExpireDate";
import OwnerNameInput from "src/components/registerForm/OwnerNameInput";
import SecurityCode from "src/components/registerForm/SecurityCode";
import CardPassword from "src/components/registerForm/CardPassword";
import { Styled as S } from "./CardRegisterForm.styles";
import useRegisterCardInfo from "src/hooks/useRegisterCardInfo";
import Button from "src/components/@common/Button";

function CardRegisterForm() {
  const { onSubmit, isValidateInfo } = useRegisterCardInfo();

  return (
    <>
      <S.Form onSubmit={onSubmit}>
        <CardNumber />
        <ExpireDate />
        <OwnerNameInput />
        <SecurityCode />
        <CardPassword />
        <S.ButtonContainer>
          <Button text="다음" disabled={!isValidateInfo} />
        </S.ButtonContainer>
      </S.Form>
    </>
  );
}

export default CardRegisterForm;
