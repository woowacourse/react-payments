import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from "../constants/message";

import FormItem from "./FormItem";
import SectionTitle from "./SectionTitle";
import { UseInputHookValue } from "../hooks/useInput";

export interface CardPassWordProps {
  passwordInput: UseInputHookValue;
}

export default function CardPassWord({ passwordInput }: CardPassWordProps) {
  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.cardPasswordTitle}
        description={PAYMENTS_MESSAGE.cardPasswordDescription}
      />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.cardPasswordLabel}
        errorMessage={passwordInput.errorMessage}
      >
        <input
          type="password"
          placeholder={PAYMENTS_INPUT_MESSAGE.cardPasswordPlaceHolder}
          maxLength={PAYMENTS_INPUT_MESSAGE.cardPasswordMaxLength}
          onChange={passwordInput.onChangeHandler}
          onFocus={passwordInput.onFocusHandler}
          value={passwordInput.value}
          autoFocus
        />
      </FormItem>
    </section>
  );
}
