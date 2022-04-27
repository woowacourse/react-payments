import React from "react";
import Input from "./Input.jsx";
import InputField from "./InputField.jsx";

export default function CardPasswordInput({ password, onChange }) {
  return (
    <InputField labelText="카드 비밀번호">
      <Input
        type="password"
        value={password[0]}
        onChange={(e) => onChange(e, 0)}
      />
      <Input
        type="password"
        value={password[1]}
        onChange={(e) => onChange(e, 1)}
      />
    </InputField>
  );
}
