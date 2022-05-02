import React from "react";

import Input from "./UIComponents/Input/Input";
import InputField from "./UIComponents/InputField/InputField";

import {
  INPUT_KEY_TABLE,
  CARD_INFO_RULES,
  CREATE_MASKED_CHARACTERS,
} from "../constants/constants";

const CardNumberInput = React.forwardRef((props, inputRef) => {
  const { cardNumber, onChange, onKeyDown } = props;
  const setInputRef = (name, index) => (element) =>
    (inputRef.current[name][index] = element);

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
      {INPUT_KEY_TABLE.cardNumbers.map((cardNumberKey, index) => (
        <React.Fragment key={index}>
          <Input
            autoFocus={index === 0}
            type={index <= 1 ? "number" : "password"}
            maxLength={4}
            name={cardNumberKey}
            value={cardNumber[index]}
            onChange={(e) =>
              onChange(
                e,
                "cardNumbers",
                index,
                CARD_INFO_RULES.NUMBER_UNIT_LENGTH
              )
            }
            placeholder={index <= 1 ? "1 2 3 4" : CREATE_MASKED_CHARACTERS(4)}
            onKeyDown={onKeyDown}
            isComplete={
              cardNumber[index].length === CARD_INFO_RULES.NUMBER_UNIT_LENGTH
            }
            ref={setInputRef("cardNumbers", index)}
          />
          {index !== 3 && <p>-</p>}
        </React.Fragment>
      ))}
    </InputField>
  );
});

export default CardNumberInput;
