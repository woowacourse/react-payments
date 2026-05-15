import { forwardRef, type ChangeEvent } from "react";
import Flex from "../Common/Flex";
import Label from "../Common/Label";
import ValidationInput from "../Common/ValidationInput";
import { cardPasswordValidations } from "../../utils/validationRules";

interface CardPasswordInputProps {
  value: string;
  onChange: (value: string) => void;
}

const CardPasswordInput = forwardRef<HTMLInputElement, CardPasswordInputProps>(
  function CardPasswordInput(props, ref) {
    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
      props.onChange(event.target.value);
    };

    return (
      <Flex direction="column" gap={10}>
        <Label>비밀번호 앞 2자리</Label>
        <ValidationInput
          ref={ref}
          value={props.value}
          onChange={handlePassword}
          type="password"
          inputMode="numeric"
          isShowError={true}
          validations={cardPasswordValidations}
        />
      </Flex>
    );
  },
);

export default CardPasswordInput;
