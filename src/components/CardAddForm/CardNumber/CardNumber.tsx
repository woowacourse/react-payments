import { ChangeEvent } from "react";
import { CardInputValidation } from "../../../types";
import { CARD_NUMBER_INPUT_MAX_LENGTH } from "../../../constants";
import InputContainer from "../../common/InputContainer/InputContainer";
import Input from "../../common/Input/Input";
import { useError } from "../../../hooks/useError";
import validator from "../../../utils/validator";

interface CardNumberProps {
  handleValidationChange: (
    key: keyof CardInputValidation,
    value: boolean
  ) => void;
  onChange: ({
    target: { value, dataset },
  }: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function CardNumber({
  handleValidationChange,
  onChange,
  value,
}: CardNumberProps) {
  const [isError, onErrorBlur] = useError({
    validator: validator.cardNumber,
    handleValidationChange,
  });

  return (
    <InputContainer
      label="카드 번호"
      id="cardNumber"
      isError={isError}
      supportingText={
        isError
          ? "카드에 표시된 16자리 숫자와 동일하게 입력해주세요"
          : undefined
      }
      required
    >
      <Input
        id="cardNumber"
        name="cardNumber"
        value={value}
        maxLength={CARD_NUMBER_INPUT_MAX_LENGTH}
        autoComplete="cc-csc"
        isError={isError}
        onChange={onChange}
        onBlur={onErrorBlur}
      />
    </InputContainer>
  );
}

export default CardNumber;
