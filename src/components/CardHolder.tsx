import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from "../constants/message";

import FormItem from "./FormItem";
import SectionTitle from "./SectionTitle";
import { UseInputHookValue } from "../hooks/useInput";
import onEnterKeyDown from "../utils/onEnterKeyDown";

export interface CardHolderProps {
  holderInput: UseInputHookValue;
}

export default function CardHolder({ holderInput }: CardHolderProps) {
  const onEnterHandler = (e: React.KeyboardEvent) => {
    onEnterKeyDown(e, () => {
      if (holderInput.setIsComplete) holderInput.setIsComplete(true);
    });
  };

  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.cardHolderTitle}
        description={PAYMENTS_MESSAGE.cardHolderDescription}
      />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.cardHolderLabel}
        errorMessage={holderInput.errorMessage}
      >
        {
          <input
            type="text"
            placeholder={PAYMENTS_INPUT_MESSAGE.cardHolderPlaceHolder}
            maxLength={PAYMENTS_INPUT_MESSAGE.cardHolderMaxLength}
            onChange={holderInput.onChangeHandler}
            onFocus={holderInput.onFocusHandler}
            onKeyDown={onEnterHandler}
            value={holderInput.value}
            autoFocus
          />
        }
      </FormItem>
    </section>
  );
}
