import React from "react";
import { CARD_INFO_RULES, CREATE_MASKED_CHARACTERS } from "../constants";
import useInputFocus from "../useInputFocus";
import Input from "./UIComponents/Input/Input";
import InputField from "./UIComponents/InputField/InputField";

export default function CardNumberInput({ cardNumber, onChange }) {
  const [inputRef, setFocusInputIndex, handleFocusPrevious] = useInputFocus(
    cardNumber,
    CARD_INFO_RULES.NUMBER_UNIT_LENGTH
  );

  return (
    <InputField
      labelText="카드 번호"
      wrapperWidth="100%"
      horizontalAlign="space-around"
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
              onChange={(e) => onChange(e, index)}
              placeholder={index <= 1 ? "1 2 3 4" : CREATE_MASKED_CHARACTERS(4)}
              onFocus={() => setFocusInputIndex(index)}
              onBlur={() => setFocusInputIndex(null)}
              onKeyDown={handleFocusPrevious}
              isComplete={
                cardNumber[index].length === CARD_INFO_RULES.NUMBER_UNIT_LENGTH
              }
              ref={(element) => (inputRef.current[index] = element)}
            />
            {index !== cardNumber.length - 1 && <p>-</p>}
          </React.Fragment>
        )
      )}
    </InputField>
  );
}
