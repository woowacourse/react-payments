import React, { useCallback, useState } from "react";
import { CARD_INFO_RULES } from "../constants.js";
import useArraySetState from "../useArraySetState.jsx";
import Input from "./UIComponents/Input/Input.jsx";
import InputField from "./UIComponents/InputField/InputField.jsx";

export default function CardExpireDateInput({ expireDate, setExpireDate }) {
  const [isInvalid, setInvalid] = useState(false);

  const setExpireDateArray = useArraySetState(setExpireDate);

  const handleInputChange = (e, order) => {
    setInvalid(false);
    setExpireDateArray(e.target.value, order);
  };

  const triggerInvalid = useCallback(() => setInvalid(true), []);

  return (
    <InputField
      labelText={"만료일 (MM/YY)"}
      wrapperWidth={"sm"}
      horizontalAlign={"center"}
      isComplete={
        expireDate.join("").length === CARD_INFO_RULES.EXPIRE_DATE_LENGTH
      }
      isInvalid={isInvalid}
    >
      <Input
        type={"text"}
        value={expireDate[0]}
        placeholder={"MM"}
        name={"expire-date"}
        maxLength={2}
        required
        width={"sm"}
        isComplete={expireDate[0].length === 2}
        onChange={(e) => handleInputChange(e, 0)}
        onInvalid={triggerInvalid}
        pattern={"^$|(^0?[1-9]$)|(^1?[0-2]$)"}
      />
      <p>/</p>
      <Input
        type={"text"}
        value={expireDate[1]}
        placeholder={"YY"}
        name={"expire-date"}
        maxLength={2}
        required
        width={"sm"}
        isComplete={expireDate[1].length === 2}
        onChange={(e) => handleInputChange(e, 1)}
        onInvalid={triggerInvalid}
        pattern={"^$|(^2?[2-6]$)"}
      />
    </InputField>
  );
}
