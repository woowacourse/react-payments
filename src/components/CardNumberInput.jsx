import React, { useEffect, useRef, useState } from "react";
import { CARD_INFO_RULES, CREATE_MASKED_CHARACTERS } from "../constants";
import Input from "./common/Input";
import InputField from "./common/InputField";

export default function CardNumberInput({ cardNumber, onChange }) {
  const [focusInputIndex, setFocusInputIndex] = useState(0);
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[focusInputIndex].value.length === 4) {
      const index = cardNumber.findIndex(
        (cardNumberUnit) => cardNumberUnit.length !== 4
      );
      inputRef.current[index]?.focus();
    }
  }, [cardNumber, focusInputIndex]);

  useEffect(() => {
    inputRef.current[focusInputIndex].focus();
  }, [focusInputIndex]);

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
          <>
            <Input
              key={index}
              type={index <= 1 ? "number" : "password"}
              value={cardNumber[index]}
              onChange={(e) => onChange(e, index)}
              placeholder={index <= 1 ? "1 2 3 4" : CREATE_MASKED_CHARACTERS(4)}
              onFocus={() => setFocusInputIndex(index)}
              isComplete={
                cardNumber[index].length === CARD_INFO_RULES.NUMBER_UNIT_LENGTH
              }
              ref={(element) => (inputRef.current[index] = element)}
            />
            {index !== 3 && <p>-</p>}
          </>
        )
      )}
    </InputField>
  );
}
