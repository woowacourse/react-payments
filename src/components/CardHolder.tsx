import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from "../constants/message";

import FormItem from "./FormItem";
import SectionTitle from "./SectionTitle";
import { UseInputHookValue } from "../hooks/useInput";

export interface CardHolderProps {
  holderInput: UseInputHookValue;
}

export default function CardHolder({ holderInput }: CardHolderProps) {
  return (
    <section>
      <SectionTitle title={PAYMENTS_MESSAGE.cardHolderTitle} />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.cardHolderLabel}
        errorMessage={holderInput.errorMessage}
      >
        {
          <input
            type="text"
            placeholder={PAYMENTS_INPUT_MESSAGE.cardHolderPlaceHolder}
            maxLength={30}
            onChange={holderInput.onChangeHandler}
            value={holderInput.value}
            autoFocus
          />
        }
      </FormItem>
    </section>
  );
}
