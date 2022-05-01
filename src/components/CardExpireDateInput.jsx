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
    return parsedValue.length === 1 && Number(parsedValue) !== 0
      ? `0${parsedValue}`
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
      labelText="만료일 (MM/YY)"
      wrapperWidth="135px"
      horizontalAlign="center"
      isComplete={
        expireDate.join("").length === CARD_INFO_RULES.EXPIRE_DATE_LENGTH
      }
      errorMessage={errorMessage}
    >
      <Input
        placeholder="MM"
        type="text"
        value={expireDate[0]}
        onChange={(e) => handleExpireDateUpdate(e, 0)}
        onBlur={() => resetError()}
        width="40px"
        isComplete={expireDate[0].length === 2}
      />
      <p>/</p>
      <Input
        placeholder="YY"
        type="text"
        value={expireDate[1]}
        onChange={(e) => handleExpireDateUpdate(e, 1)}
        onBlur={() => resetError()}
        width="40px"
        isComplete={expireDate[1].length === 2}
      />
    </InputField>
  );
}
