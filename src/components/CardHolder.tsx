import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from "../constants/message";

import FormItem from "./FormItem";
import SectionTitle from "./SectionTitle";
import { UseInputHookValue } from "../hooks/useInput";

export interface CardHolderProps {
  holderInput: UseInputHookValue;
}

export default function CardHolder({ holderInput }: CardHolderProps) {
  const onEnterHandler = (e: React.KeyboardEvent) => {
    if (!holderInput.value) {
      return;
    }
    if (e.key === "Enter" && holderInput.setIsComplete) {
      holderInput.setIsComplete(true);
    }
  };

  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.cardHolderTitle}
        description={"영문 이름을 입력한 뒤 Enter를 눌러주세요"}
      />
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
