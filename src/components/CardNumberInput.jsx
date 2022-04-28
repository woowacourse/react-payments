import React from "react";
import { CREATE_MASKED_CHARACTERS } from "../constants";
import Input from "./UIComponents/Input/Input";
import InputField from "./UIComponents/InputField/InputField";

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
        placeholder={CREATE_MASKED_CHARACTERS(4)}
      />
      <p>-</p>
      <Input
        type="password"
        value={cardNumber[3]}
        onChange={(e) => onChange(e, 3)}
        placeholder={CREATE_MASKED_CHARACTERS(4)}
      />
    </InputField>
  );
}
