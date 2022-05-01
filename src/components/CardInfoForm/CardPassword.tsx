import React from "react";

import type { InputChangeFunction } from "../../types";
import type { Password } from "../../types/cardInfo";
import Input from "../common/Input";
import InputContainer from "../common/InputContainer";

interface CardPasswordProps {
  password: Password;
  onChange: InputChangeFunction;
  isValid: boolean;
}

export default function CardPassword({ password, onChange, isValid }: CardPasswordProps) {
  return (
    <InputContainer title="카드 비밀번호" isValid={isValid}>
      <Input
        type="password"
        size="tiny"
        value={password[0] || ""}
        onChange={onChange}
        maxLength={1}
        name="password"
        data-index={0}
        className="password-input"
        formSelector="#card-info-form"
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
        formSelector="#card-info-form"
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
