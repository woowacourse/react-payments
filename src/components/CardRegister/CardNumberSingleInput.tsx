import type { ChangeEvent } from "react";
import Flex from "../Common/Flex";
import Label from "../Common/Label";
import InputErrorMessage from "../Common/InputErrorMessage";
import ValidationInput from "../Common/ValidationInput";
import { numericOnlyValidations } from "../../utils/validationRules";

interface CardNumberSingleInputProps {
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

function CardNumberSingleInput({ value, onChange, errorMessage }: CardNumberSingleInputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const showBrandError = value.length === 4;

  return (
    <Flex direction="column" gap={10}>
      <Label>카드 번호</Label>
      <ValidationInput
        type="text"
        inputMode="numeric"
        placeholder="카드 번호를 입력해 주세요"
        value={value}
        maxLength={4}
        onChange={handleChange}
        isShowError={false}
        validations={numericOnlyValidations}
      />
      <InputErrorMessage>
        {errorMessage ?? (showBrandError ? "유효하지 않은 카드 번호입니다." : undefined)}
      </InputErrorMessage>
    </Flex>
  );
}

export default CardNumberSingleInput;
