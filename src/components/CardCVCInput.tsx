import ValidationInput from "./Common/ValidationInput";
import Flex from "./Common/Flex";
import Label from "./Common/Label";
import { cvcValidations } from "../utils/validationRules";
import type { ChangeEvent } from "react";

interface CardCVCInputProps {
  value: string;
  onChange: (value: string) => void;
}

function CardCVCInput(props: CardCVCInputProps) {
  const handleCVC = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <Flex direction="column" gap={10}>
      <Label>CVC</Label>
      <ValidationInput
        value={props.value}
        onChange={handleCVC}
        type="text"
        inputMode="numeric"
        autoComplete="cc-exp-csc"
        placeholder="CVC"
        isShowError={true}
        validations={cvcValidations}
      />
    </Flex>
  );
}

export default CardCVCInput;
