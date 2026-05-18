import { forwardRef, type ChangeEvent } from "react";
import Flex from "../Common/Flex";
import InputErrorMessage from "../Common/InputErrorMessage";
import Label from "../Common/Label";
import ValidationInput from "../Common/ValidationInput";
import { cvcValidations } from "../../utils/validationRules";

interface CardCVCInputProps {
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

const CardCVCInput = forwardRef<HTMLInputElement, CardCVCInputProps>(
  function CardCVCInput(props, ref) {
    const handleCVC = (event: ChangeEvent<HTMLInputElement>) => {
      props.onChange(event.target.value);
    };

    return (
      <Flex direction="column" gap={10}>
        <Label>CVC</Label>
        <ValidationInput
          ref={ref}
          value={props.value}
          onChange={handleCVC}
          type="text"
          inputMode="numeric"
          autoComplete="cc-exp-csc"
          placeholder="CVC"
          isShowError={true}
          validations={cvcValidations}
        />
        {props.errorMessage && (
          <InputErrorMessage>{props.errorMessage}</InputErrorMessage>
        )}
      </Flex>
    );
  },
);

export default CardCVCInput;
