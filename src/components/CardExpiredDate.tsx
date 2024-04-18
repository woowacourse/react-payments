import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from "../constants/message";
import { useContext, useEffect, useState } from "react";
import {
  validateLength,
  validateMonth,
  validateYear,
} from "../domain/validateInput";

import { CardInfoContext } from "../App";
import FormItem from "./FormItem";
import SectionTitle from "./SectionTitle";
import useInput from "../hooks/useInput";

export default function CardExpiredDate() {
  const [errorMessage, setErrorMessage] = useState("");

  const printErrorMessage = (error: unknown) => {
    if (!(error instanceof Error)) return;
    setErrorMessage(error.message);
  };

  const monthInputProps = {
    validator: (string: string) => {
      validateMonth(string);
      validateLength(string, 2);

      setErrorMessage("");
    },
    errorHandler: printErrorMessage,
  };

  const yearInputProps = {
    validator: (string: string) => {
      validateYear(string);
      validateLength(string, 2);

      setErrorMessage("");
    },
    errorHandler: printErrorMessage,
  };

  const monthInput = useInput(monthInputProps);
  const yearInput = useInput(yearInputProps);
  const inputs = [monthInput, yearInput];

  const { setCardExpiredDate } = useContext(CardInfoContext);

  useEffect(() => {
    // 04/24이후 확인
    if (setCardExpiredDate)
      setCardExpiredDate([monthInput.value, yearInput.value]);
  }, [monthInput.value, yearInput.value]);

  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.expiredDateTitle}
        description={PAYMENTS_MESSAGE.expiredDateDescription}
      />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.expiredDateLabel}
        errorMessage={errorMessage}
      >
        {inputs.map((input, idx) => (
          <input
            key={idx}
            type="text"
            maxLength={2}
            placeholder={PAYMENTS_INPUT_MESSAGE.expiredDatePlaceHolder[idx]}
            onChange={input.onChangeHandler}
            value={input.value}
          />
        ))}
      </FormItem>
    </section>
  );
}
