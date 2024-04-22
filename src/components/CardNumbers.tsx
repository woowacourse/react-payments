import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from "../constants/message";

import FormItem from "./FormItem";
import SectionTitle from "./SectionTitle";
import { UseInputHookValue } from "../hooks/useInput";

export interface CardNumbersProps {
  errorMessage: string;
  cardNumberInputs: [
    UseInputHookValue,
    UseInputHookValue,
    UseInputHookValue,
    UseInputHookValue,
  ];
}

export default function CardNumbers({
  cardNumberInputs,
  errorMessage,
}: CardNumbersProps) {
  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.cardNumbersTitle}
        description={PAYMENTS_MESSAGE.cardNumberDescription}
      />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.cardNumberLabel}
        errorMessage={errorMessage}
      >
        {cardNumberInputs.map((cardNumbersInput, idx) => (
          <input
            key={idx}
            type="text"
            placeholder={PAYMENTS_INPUT_MESSAGE.cardNumberPlaceHolder}
            maxLength={4}
            onChange={cardNumbersInput.onChangeHandler}
            value={cardNumbersInput.value}
          />
        ))}
      </FormItem>
    </section>
  );
}
