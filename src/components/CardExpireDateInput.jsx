import React from "react";
import { cardInfoValidations } from "../cardInfoValidations.js";
import { CARD_INFO_RULES } from "../constants.js";
import useArraySetState from "../useArraySetState.jsx";
import useValidatedUpdate from "../useValidatedUpdate.jsx";
import Input from "./UIComponents/Input/Input.jsx";
import InputField from "./UIComponents/InputField/InputField.jsx";

export default function CardExpireDateInput({ expireDate, setExpireDate }) {
  const setExpireDateArray = useArraySetState(setExpireDate);
  const createDateString = (value) => {
    const parsedValue =
      value.length > 1 && value.startsWith("0") ? value.slice(1) : value;
    return Number(parsedValue) !== 0
      ? parsedValue.padStart(2, "0")
      : parsedValue;
  };
  const [handleExpireDateUpdate, errorMessage, resetError] = useValidatedUpdate(
    cardInfoValidations["expireDate"],
    (value, order) => {
      setExpireDateArray(createDateString(value), order);
    }
  );

  return (
    <InputField
      labelText={"만료일 (MM/YY)"}
      wrapperWidth={"sm"}
      horizontalAlign={"center"}
      errorMessage={errorMessage}
      isComplete={
        expireDate.join("").length === CARD_INFO_RULES.EXPIRE_DATE_LENGTH
      }
    >
      <Input
        type={"text"}
        value={expireDate[0]}
        placeholder={"MM"}
        name={"expire-date"}
        required
        width={"sm"}
        isComplete={expireDate[0].length === 2}
        onChange={(e) => handleExpireDateUpdate(e, 0)}
        onBlur={resetError}
      />
      <p>/</p>
      <Input
        type={"text"}
        value={expireDate[1]}
        placeholder={"YY"}
        name={"expire-date"}
        required
        width={"sm"}
        isComplete={expireDate[1].length === 2}
        onChange={(e) => handleExpireDateUpdate(e, 1)}
        onBlur={resetError}
      />
    </InputField>
  );
}
