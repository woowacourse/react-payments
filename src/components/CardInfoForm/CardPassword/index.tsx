import React from "react";

import useInputValidation from "../../../hooks/useInputValidation";
import { Password } from "../../../types";
import Input from "../../../common/Input";
import InputContainer from "../../../common/InputContainer";
import { checkCardPassword } from "../../../validations/cardInfoForm";

interface CardPasswordProps {
  password: Password;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CardPassword({ password, onChange }: CardPasswordProps) {
  const { inputValidation, validateInput } = useInputValidation(false);

  const handleChangeCardPassword = e => {
    const { value } = e.target;
    const { index } = e.target.dataset;
    const targetCardPassword = password;

    targetCardPassword[index] = value;

    validateInput(targetCardPassword, checkCardPassword);
    onChange(e);
  };

  return (
    <InputContainer inputTitle="카드 비밀번호" validation={inputValidation}>
      <Input
        type="password"
        size="tiny"
        value={password[0] || ""}
        onChange={handleChangeCardPassword}
        maxLength={1}
        name="password"
        data-index={0}
        classes="password-input"
        pattern="^[0-9]{0,1}$"
      />
      <Input
        type="password"
        size="tiny"
        value={password[1] || ""}
        onChange={handleChangeCardPassword}
        maxLength={1}
        name="password"
        data-index={1}
        classes="password-input"
        pattern="^[0-9]{0,1}$"
      />
      <input
        className="input-basic rest-password-box w-15 password-input"
        type="password"
        value={1}
        maxLength={1}
        disabled
      />
      <input
        className="input-basic rest-password-box w-15 password-input"
        type="password"
        value={1}
        maxLength={1}
        disabled
      />
    </InputContainer>
  );
}
