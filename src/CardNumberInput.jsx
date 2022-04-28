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
        placeholder="1 2 3 4"
      />
      <p>-</p>
      <Input
        type="number"
        value={cardNumber[1]}
        onChange={(e) => onChange(e, 1)}
        placeholder="5 6 7 8"
      />
      <p>-</p>
      <Input
        type="password"
        value={cardNumber[2]}
        onChange={(e) => onChange(e, 2)}
        placeholder="• • • •"
      />
      <p>-</p>
      <Input
        type="password"
        value={cardNumber[3]}
        onChange={(e) => onChange(e, 3)}
        placeholder="• • • •"
      />
    </InputField>
  );
}
