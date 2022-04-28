import React, { useEffect, useRef, useState } from "react";
import { CREATE_MASKED_CHARACTERS } from "../constants";
import Input from "./UIComponents/Input/Input";
import InputField from "./UIComponents/InputField/InputField";

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
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <>
          <Input
            key={index}
            type={index <= 1 ? "number" : "password"}
            value={cardNumber[index]}
            onChange={(e) => onChange(e, index)}
            placeholder={index <= 1 ? "1 2 3 4" : CREATE_MASKED_CHARACTERS(4)}
            onFocus={() => setFocusInputIndex(index)}
            ref={(element) => (inputRef.current[index] = element)}
          />
          {index !== 3 && <p>-</p>}
        </>
      ))}
    </InputField>
  );
}
