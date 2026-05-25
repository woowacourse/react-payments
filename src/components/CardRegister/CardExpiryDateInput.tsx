import { forwardRef, useEffect, useRef, type ChangeEvent } from "react";
import type { CardFormState } from "../../types";
import Flex from "../Common/Flex";
import InputErrorMessage from "../Common/InputErrorMessage";
import Label from "../Common/Label";
import ValidationInput from "../Common/ValidationInput";
import { expiryDateValidations } from "../../utils/validationRules";
import { validateMonth } from "../../utils/validators";

interface CardExpiryDateInputProps {
  value: Pick<CardFormState, "expiryMonth" | "expiryYear">;
  onChange: (value: [string, string]) => void;
  errorMessage?: string;
}

const CardExpiryDateInput = forwardRef<
  HTMLInputElement,
  CardExpiryDateInputProps
>(function CardExpiryDateInput(props, ref) {
  const yearRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (props.value.expiryMonth.length === 2 && validateMonth(props.value.expiryMonth)) {
      yearRef.current?.focus();
    }
  }, [props.value.expiryMonth]);

  const handleChangeMonth = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange([event.target.value, props.value.expiryYear]);
  };

  const handleChangeYear = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange([props.value.expiryMonth, event.target.value]);
  };

  return (
    <Flex direction="column" gap={10}>
      <Label>유효기간</Label>
      <Flex gap={10}>
        <ValidationInput
          ref={ref}
          type="text"
          inputMode="numeric"
          autoComplete="cc-exp-month"
          placeholder="MM"
          value={props.value.expiryMonth}
          onChange={handleChangeMonth}
          isShowError={true}
          validations={expiryDateValidations("month")}
        />
        <ValidationInput
          ref={yearRef}
          type="text"
          inputMode="numeric"
          autoComplete="cc-exp-year"
          placeholder="YY"
          value={props.value.expiryYear}
          onChange={handleChangeYear}
          isShowError={true}
          validations={expiryDateValidations("year")}
        />
      </Flex>
      {props.errorMessage && (
        <InputErrorMessage>{props.errorMessage}</InputErrorMessage>
      )}
    </Flex>
  );
});

export default CardExpiryDateInput;
