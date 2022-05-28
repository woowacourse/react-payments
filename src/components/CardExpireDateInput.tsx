import React from "react";

import { changeArrayElement } from "utils";
import { CARD_INFO_RULES } from "utils/constants";

import Input from "components/UIComponents/Input/Input";
import InputField from "components/UIComponents/InputField/InputField";

import { OrderedInputUpdateHandlerInterface } from "./CardInputInterface";

import useCardInput from "hooks/useCardInput";

export default function CardExpireDateInput() {
  const {
    targetState: expireDate,
    setTargetState: setExpireDate,
    isInvalid,
    setInvalid,
    triggerInvalid,
  } = useCardInput("expireDate");

  const handleInputChange: OrderedInputUpdateHandlerInterface =
    (order) =>
    ({ target: { value: inputValue } }) => {
      setInvalid(false);

      const newExpireDate = changeArrayElement({
        array: expireDate,
        index: order,
        value: inputValue,
      });

      setExpireDate(newExpireDate);
    };

  return (
    <InputField
      labelText={"만료일 (MM/YY)"}
      wrapperWidth={"md"}
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
        name={"expireDate1"}
        maxLength={2}
        required
        width={"sm"}
        isComplete={expireDate[0].length === 2}
        onChange={handleInputChange(0)}
        onInvalid={triggerInvalid}
        pattern={"^$|(^0?[1-9]$)|(^1?[0-2]$)"}
        data-testid={"expire-date"}
      />
      <p>/</p>
      <Input
        type={"text"}
        value={expireDate[1]}
        placeholder={"YY"}
        name={"expireDate2"}
        maxLength={2}
        required
        width={"sm"}
        isComplete={expireDate[1].length === 2}
        onChange={handleInputChange(1)}
        onInvalid={triggerInvalid}
        pattern={"^$|(^2?[2-6]$)"}
        data-testid={"expire-date"}
      />
    </InputField>
  );
}
