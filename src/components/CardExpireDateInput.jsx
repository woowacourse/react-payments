import React, { useCallback, useContext, useState } from "react";
import CardInfoContext from "context/CardInfoContext";

import { CARD_INFO_RULES } from "utils/constants";

import Input from "components/UIComponents/Input/Input";
import InputField from "components/UIComponents/InputField/InputField";

export default function CardExpireDateInput() {
  const [isInvalid, setInvalid] = useState(false);
  const { state, setState } = useContext(CardInfoContext);

  const { expireDate } = state;

  const handleInputChange = (e, order) => {
    setInvalid(false);

    const newExpireDate = [...expireDate];
    newExpireDate[order] = e.target.value;
    setState({ ...state, expireDate: newExpireDate });
  };

  const triggerInvalid = useCallback(() => setInvalid(true), []);

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
        onChange={(e) => handleInputChange(e, 0)}
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
        onChange={(e) => handleInputChange(e, 1)}
        onInvalid={triggerInvalid}
        pattern={"^$|(^2?[2-6]$)"}
        data-testid={"expire-date"}
      />
    </InputField>
  );
}
