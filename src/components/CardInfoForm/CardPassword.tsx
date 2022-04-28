import React from "react";

import Input from "../common/Input";
import InputContainer from "../common/InputContainer";

export default function CardPassword({ password, onChange, isValid }) {
  return (
    <InputContainer inputTitle="카드 비밀번호" isValid={isValid}>
      <Input
        type="password"
        size="tiny"
        value={password[0] || ""}
        onChange={onChange}
        maxLength={1}
        name="password"
        data-index={0}
        classes="password-input"
      />
      <Input
        type="password"
        size="tiny"
        value={password[1] || ""}
        onChange={onChange}
        maxLength={1}
        name="password"
        data-index={1}
        classes="password-input"
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
