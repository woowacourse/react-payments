import type { ChangeEvent } from "react";
import Label from "./Common/Label";
import Flex from "./Common/Flex";
import { cardPasswordValidations } from "../utils/validationRules";
import ValidationInput from "./Common/ValidationInput";

interface CardPasswordInputProps {
  value: string;
  onChange: (value: string) => void;
}

function CardPasswordInput(props: CardPasswordInputProps) {
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <Flex direction="column" gap={10}>
      <Label>비밀번호 앞 2자리</Label>
      <Flex gap={10}>
        <ValidationInput
          value={props.value}
          onChange={handlePassword}
          type="password"
          inputMode="numeric"
          isShowError={true}
          validations={cardPasswordValidations}
        />
      </Flex>
    </Flex>
  );
}

export default CardPasswordInput;
