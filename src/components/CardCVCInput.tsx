import { type ComponentProps } from "react";
import ValidationInput from "./Common/ValidationInput";
import Flex from "./Common/Flex";
import Label from "./Common/Label";
import { cvcValidations } from "../utils/validationRules";

type CardCVCInputProps = Pick<
  ComponentProps<typeof ValidationInput>,
  "value" | "onChange"
>;

function CardCVCInput(props: CardCVCInputProps) {
  return (
    <Flex direction="column" gap={10}>
      <Label>CVC</Label>
      <ValidationInput
        {...props}
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
