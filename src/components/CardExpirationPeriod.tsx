import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from "../constants/message";

import FormItem from "./FormItem";
import SectionTitle from "./SectionTitle";
import { UseInputHookValue } from "../hooks/useInput";

export interface CardExpiredDateProps {
  errorMessage: string;
  expirationPeriodInputs: [UseInputHookValue, UseInputHookValue];
}

export default function CardExpiredDate({
  expirationPeriodInputs,
  errorMessage,
}: CardExpiredDateProps) {
  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.expirationPeriodTitle}
        description={PAYMENTS_MESSAGE.expirationPeriodDescription}
      />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.expirationPeriodLabel}
        errorMessage={errorMessage}
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
            value={input.value}
          />
        ))}
      </FormItem>
    </section>
  );
}
