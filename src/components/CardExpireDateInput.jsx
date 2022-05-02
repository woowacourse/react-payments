import React from "react";

import Input from "./UIComponents/Input/Input";
import InputField from "./UIComponents/InputField/InputField";

import { CARD_INFO_RULES } from "../constants/constants";

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
      {["MM", "YY"].map((text, index) => (
        <React.Fragment key={text}>
          <Input
            placeholder={text}
            maxLength={2}
            name={text}
            type={"text"}
            value={expireDate[index]}
            onChange={(e) => onChange(e, "expireDate", index)}
            width={"40px"}
            isComplete={expireDate[index].length === 2}
          />
          {index === 0 && <p>/</p>}
        </React.Fragment>
      ))}
    </InputField>
  );
}
