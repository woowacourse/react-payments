import Input from "components/common/Input";
import InputContainer from "components/common/InputContainer";
import React from "react";
import type { InputChangeFunction } from "types";
import type { Password, Validation } from "types/cardInfo";
interface CardPasswordProps {
  password: Password;
  onChange: InputChangeFunction;
  validation: Validation;
  inputs: HTMLInputElement[];
}

function CardPassword({ password, onChange, validation, inputs }: CardPasswordProps) {
  return (
    <InputContainer title="카드 비밀번호" validation={validation}>
      <Input
        type="password"
        size="tiny"
        value={password[0] || ""}
        onChange={onChange}
        maxLength={1}
        name="password"
        data-index={0}
        className="password-input"
        inputs={inputs}
      />
      <Input
        type="password"
        size="tiny"
        value={password[1] || ""}
        onChange={onChange}
        maxLength={1}
        name="password"
        data-index={1}
        className="password-input"
        inputs={inputs}
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

export default React.memo(CardPassword);
