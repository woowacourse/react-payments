import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from "../constants/message";

import FormItem from "./FormItem";
import SectionTitle from "./SectionTitle";
import { UseInputHookValue } from "../hooks/useInput";
import { useState } from "react";

export interface CardNumbersProps {
  cardNumberInputs: [
    UseInputHookValue,
    UseInputHookValue,
    UseInputHookValue,
    UseInputHookValue,
  ];
}

export default function CardNumbers({ cardNumberInputs }: CardNumbersProps) {
  const [focusInput, setFocusInput] = useState(0);
  const errorMessages = cardNumberInputs.map((input) => input.errorMessage);

  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.cardNumbersTitle}
        description={PAYMENTS_MESSAGE.cardNumberDescription}
      />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.cardNumberLabel}
        errorMessage={
          errorMessages[focusInput] ||
          errorMessages.find((message) => message !== "") ||
          ""
        }
      >
        {cardNumberInputs.map((cardNumbersInput, idx) => (
          <input
            key={idx}
            type="text"
            placeholder={PAYMENTS_INPUT_MESSAGE.cardNumberPlaceHolder}
            maxLength={4}
            onChange={cardNumbersInput.onChangeHandler}
            onFocus={() => {
              setFocusInput(idx);
            }}
            value={cardNumbersInput.value}
            autoFocus={idx === 0 ? true : false}
          />
        ))}
      </FormItem>
    </section>
  );
}
