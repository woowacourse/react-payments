import React from "react";
import Input from "./Input.jsx";
import InputField from "./InputField.jsx";

export default function CardSecurityCodeInput({ securityCode, onChange }) {
  return (
    <InputField labelText="보안 코드(CVC/CVV)">
      <Input type="password" value={securityCode} onChange={onChange} />
    </InputField>
  );
}
