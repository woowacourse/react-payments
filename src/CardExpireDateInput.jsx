import React from "react";
import Input from "./Input.jsx";
import InputField from "./InputField.jsx";

export default function CardExpireDateInput({ expireDate, onChange }) {
  return (
    <InputField
      labelText="만료일"
      wrapperWidth="135px"
      horizontalAlign="center"
    >
      <Input
        placeholder="MM"
        type="text"
        value={expireDate[0]}
        onChange={(e) => onChange(e, 0)}
        width="40px"
      />
      <p>/</p>
      <Input
        placeholder="YY"
        type="text"
        value={expireDate[1]}
        onChange={(e) => onChange(e, 1)}
        width="40px"
      />
    </InputField>
  );
}
