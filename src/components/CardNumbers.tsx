import { PAYMENTS_INPUT_MESSAGE, PAYMENTS_MESSAGE } from "../constants/message";
import { useContext, useEffect, useState } from "react";
import { validateLength, validateOnlyDigit } from "../domain/validateInput";

import { CardInfoContext } from "../App";
import FormItem from "./FormItem";
import SectionTitle from "./SectionTitle";
import { matchCardIssuer } from "../domain/matchCardIssuer";
import useInput from "../hooks/useInput";

export default function CardNumbers() {
  const [errorMessage, setErrorMessage] = useState("");

  const useInputProps = {
    validator: (string: string) => {
      validateOnlyDigit(string);
      validateLength(string, 4);

      setErrorMessage("");
    },
    errorHandler: (error: unknown) => {
      if (!(error instanceof Error)) return;
      setErrorMessage(error.message);
    },
  };

  const firstInput = useInput(useInputProps);
  const secondInput = useInput(useInputProps);
  const thirdInput = useInput(useInputProps);
  const fourthInput = useInput(useInputProps);

  const inputs = [firstInput, secondInput, thirdInput, fourthInput];
  const values: [string, string, string, string] = [
    firstInput.value,
    secondInput.value,
    thirdInput.value,
    fourthInput.value,
  ];

  const { setCardNumbers, setCardIssuer } = useContext(CardInfoContext);

  useEffect(() => {
    if (setCardIssuer) setCardIssuer(matchCardIssuer(values.join("")) ?? "");

    if (setCardNumbers) setCardNumbers(values);
  }, values);

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
        {inputs.map((hook, idx) => (
          <input
            key={idx}
            type="text"
            placeholder={PAYMENTS_INPUT_MESSAGE.cardNumberPlaceHolder}
            maxLength={4}
            onChange={hook.onChangeHandler}
            value={hook.value}
          />
        ))}
      </FormItem>
    </section>
  );
}
