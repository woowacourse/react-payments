import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from "../constants/message";

import FormItem from "./FormItem";
import SectionTitle from "./SectionTitle";
import { UseInputHookValue } from "../hooks/useInput";
import { useState } from "react";

export interface CardExpiredDateProps {
  expirationPeriodInputs: [UseInputHookValue, UseInputHookValue];
}

export default function CardExpirationPeriod({
  expirationPeriodInputs,
}: CardExpiredDateProps) {
  const [focusInput, setFocusInput] = useState(0);

  const errorMessages = expirationPeriodInputs.map(
    (input) => input.errorMessage
  );

  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.expirationPeriodTitle}
        description={PAYMENTS_MESSAGE.expirationPeriodDescription}
      />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.expirationPeriodLabel}
        errorMessage={
          errorMessages[focusInput] ||
          errorMessages.find((message) => message !== "") ||
          ""
        }
      >
        {expirationPeriodInputs.map((input, idx) => (
          <input
            key={idx}
            type="text"
            maxLength={2}
            placeholder={
              PAYMENTS_INPUT_MESSAGE.expirationPeriodPlaceHolder[idx]
            }
            onChange={input.onChangeHandler}
            onFocus={() => {
              setFocusInput(idx);
            }}
            value={input.value}
          />
        ))}
      </FormItem>
    </section>
  );
}
