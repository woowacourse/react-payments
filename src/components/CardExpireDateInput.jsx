import React from "react";
import { CARD_INFO_RULES } from "../constants";
import Input from "./common/Input.jsx";
import InputField from "./common/InputField.jsx";

export default function CardExpireDateInput({ expireDate, onChange }) {
  return (
    <InputField
      labelText="만료일 (MM/YY)"
      wrapperWidth="135px"
      horizontalAlign="center"
      isComplete={
        expireDate.join("").length === CARD_INFO_RULES.EXPIRE_DATE_LENGTH
      }
    >
      <Input
        placeholder="MM"
        type="text"
        value={expireDate[0]}
        onChange={(e) => onChange(e, 0)}
        width="40px"
        isComplete={expireDate[0].length === 2}
      />
      <p>/</p>
      <Input
        placeholder="YY"
        type="text"
        value={expireDate[1]}
        onChange={(e) => onChange(e, 1)}
        width="40px"
        isComplete={expireDate[1].length === 2}
      />
    </InputField>
  );
}
