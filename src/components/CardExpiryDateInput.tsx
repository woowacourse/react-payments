import { forwardRef, useRef, type ChangeEvent } from "react";
import type { CardFormState } from "../types";
import ValidationInput from "./Common/ValidationInput";
import Flex from "./Common/Flex";
import Label from "./Common/Label";
import { expiryDateValidations } from "../utils/validationRules";

interface CardExpiryDateInputProps {
  value: Pick<CardFormState, "expiryMonth" | "expiryYear">;
  onChange: (value: [string, string]) => void;
}

const CardExpiryDateInput = forwardRef<HTMLInputElement, CardExpiryDateInputProps>(
  function CardExpiryDateInput(props, ref) {
    const yearRef = useRef<HTMLInputElement>(null);

    const handleChangeMonth = (event: ChangeEvent<HTMLInputElement>) => {
      props.onChange([event.target.value, props.value.expiryYear]);
      if (event.target.value.length === 2) {
        setTimeout(() => yearRef.current?.focus(), 0);
      }
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
      </Flex>
    );
  }
);

export default CardExpiryDateInput;
