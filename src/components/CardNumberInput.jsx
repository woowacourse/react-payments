import React from "react";
import { cardInfoValidations } from "../cardInfoValidations";
import { CARD_INFO_RULES, CREATE_MASKED_CHARACTERS } from "../constants";
import useArraySetState from "../useArraySetState";
import useInputFocus from "../useInputFocus";
import useValidatedUpdate from "../useValidatedUpdate";
import Input from "./UIComponents/Input/Input";
import InputField from "./UIComponents/InputField/InputField";

export default function CardNumberInput({ cardNumber, setCardNumber }) {
  const [inputRef, setFocusInputIndex, handleFocusPrevious] = useInputFocus(
    cardNumber,
    CARD_INFO_RULES.NUMBER_UNIT_LENGTH
  );

  const setCardNumberArray = useArraySetState(setCardNumber);
  const [handleCardNumberUpdate, errorMessage, resetError] = useValidatedUpdate(
    cardInfoValidations["cardNumber"],
    setCardNumberArray
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
      errorMessage={errorMessage}
    >
      {Array.from({ length: CARD_INFO_RULES.NUMBER_UNIT_COUNT }).map(
        (_, index) => (
          <React.Fragment key={index}>
            <Input
              type={index <= 1 ? "text" : "password"}
              value={cardNumber[index]}
              onChange={(e) => handleCardNumberUpdate(e, index)}
              placeholder={index <= 1 ? "1 2 3 4" : CREATE_MASKED_CHARACTERS(4)}
              onFocus={() => setFocusInputIndex(index)}
              onBlur={() => {
                setFocusInputIndex(null);
                resetError();
              }}
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
