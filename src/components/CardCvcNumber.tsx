import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from "../constants/message";

import FormItem from "./FormItem";
import SectionTitle from "./SectionTitle";
import { UseInputHookValue } from "../hooks/useInput";

export interface CardCvcNumberProps {
  cvcInput: UseInputHookValue;
}

export default function CardCvcNumber({ cvcInput }: CardCvcNumberProps) {
  return (
    <section>
      <SectionTitle title={PAYMENTS_MESSAGE.cardCvcNumberTitle} />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.cardCvcLabel}
        errorMessage={cvcInput.errorMessage}
      >
        {
          <input
            type="text"
            placeholder={PAYMENTS_INPUT_MESSAGE.cardCvcPlaceHolder}
            maxLength={3}
            onChange={cvcInput.onChangeHandler}
            onFocus={cvcInput.onFocusHandler}
            value={cvcInput.value}
            autoFocus
          />
        }
      </FormItem>
    </section>
  );
}
