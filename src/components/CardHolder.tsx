import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from "../constants/message";
import { useContext, useEffect, useState } from "react";

import { CardInfoContext } from "../App";
import FormItem from "./FormItem";
import SectionTitle from "./SectionTitle";
import useInput from "../hooks/useInput";
import { validateOnlyEnglishWithSpace } from "../domain/validateInput";

export default function CardHolder() {
  const [errorMessage, setErrorMessage] = useState("");

  const useInputProps = {
    validator: (string: string) => {
      validateOnlyEnglishWithSpace(string);

      setErrorMessage("");
    },
    errorHandler: (error: unknown) => {
      if (!(error instanceof Error)) return;
      setErrorMessage(error.message);
    },
    decorateValue: (string: string) => string.toUpperCase(),
  };

  const { value: holder, onChangeHandler } = useInput(useInputProps);

  const { setCardHolder } = useContext(CardInfoContext);

  useEffect(() => {
    if (setCardHolder) setCardHolder(holder);
  }, [holder]);
  return (
    <section>
      <SectionTitle title={PAYMENTS_MESSAGE.cardHolderTitle} />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.cardHolderLabel}
        errorMessage={errorMessage}
      >
        {
          <input
            type="text"
            placeholder={PAYMENTS_INPUT_MESSAGE.cardHolderPlaceHolder}
            maxLength={30}
            onChange={onChangeHandler}
            value={holder}
          />
        }
      </FormItem>
    </section>
  );
}
