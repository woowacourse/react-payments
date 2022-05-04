import React, { useCallback, useState } from "react";
import { CARD_INFO_RULES, CREATE_MASKED_CHARACTERS } from "../constants";
import useArraySetState from "../useArraySetState";
import Input from "./UIComponents/Input/Input";
import InputField from "./UIComponents/InputField/InputField";

export default function CardNumberInput({ cardNumber, setCardNumber }) {
  const [isInvalid, setInvalid] = useState(false);

  const setCardNumberArray = useArraySetState(setCardNumber);

  const handleInputChange = (e, order) => {
    setInvalid(false);
    setCardNumberArray(e.target.value, order);
  };

  const triggerInvalid = useCallback(() => setInvalid(true), []);

  return (
    <InputField
      labelText={"카드 번호"}
      wrapperWidth={"full"}
      horizontalAlign={"space-around"}
      isInvalid={isInvalid}
      isComplete={
        cardNumber.join("").length ===
        CARD_INFO_RULES.NUMBER_UNIT_COUNT * CARD_INFO_RULES.NUMBER_UNIT_LENGTH
      }
    >
      {Array.from({ length: CARD_INFO_RULES.NUMBER_UNIT_COUNT }).map(
        (_, index) => (
          <React.Fragment key={index}>
            <Input
              type={index <= 1 ? "text" : "password"}
              value={cardNumber[index]}
              placeholder={index <= 1 ? "1 2 3 4" : CREATE_MASKED_CHARACTERS(4)}
              name={"card-number"}
              maxLength={4}
              required
              isComplete={
                cardNumber[index].length === CARD_INFO_RULES.NUMBER_UNIT_LENGTH
              }
              onChange={(e) => handleInputChange(e, index)}
              onInvalid={triggerInvalid}
              pattern={"^[0-9]+$"}
            />
            {index !== cardNumber.length - 1 && <p>-</p>}
          </React.Fragment>
        )
      )}
    </InputField>
  );
}
