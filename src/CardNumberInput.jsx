import React from "react";
import Input from "./Input";
import InputField from "./InputField";

export default function CardNumberInput({ cardNumber, onChange }) {
  return (
    <InputField
      labelText="카드 번호"
      wrapperWidth="100%"
      horizontalAlign="space-around"
    >
      <Input
        type="number"
        value={cardNumber[0]}
        onChange={(e) => onChange(e, 0)}
      />
      <p>-</p>
      <Input
        type="number"
        value={cardNumber[1]}
        onChange={(e) => onChange(e, 1)}
      />
      <p>-</p>
      <Input
        type="password"
        value={cardNumber[2]}
        onChange={(e) => onChange(e, 2)}
      />
      <p>-</p>
      <Input
        type="password"
        value={cardNumber[3]}
        onChange={(e) => onChange(e, 3)}
      />
    </InputField>
  );
}
