import { CardInputValidation, ExpirationDateFormat } from "../../../types";
import InputContainer from "../../common/InputContainer/InputContainer";
import Input from "../../common/Input/Input";
import { useError } from "../../../hooks/useError";
import validator from "../../../utils/validator";
import { formatDisplayedExpirationDate } from "../../../utils/formatter";
import { ChangeEvent } from "react";

interface CardExpirationDateProps {
  handleValidationChange: (
    key: keyof CardInputValidation,
    value: boolean
  ) => void;
  onChange: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
  value: ExpirationDateFormat;
}

function CardExpirationDate({
  onChange,
  handleValidationChange,
  value,
}: CardExpirationDateProps) {
  const [isError, onErrorBlur] = useError({
    validator: validator.expirationDate,
    handleValidationChange,
  });

  const expirationDate = formatDisplayedExpirationDate(
    `${value.month}${value.year}`
  );

  return (
    <InputContainer
      label="만료일"
      id="expirationDate"
      isError={isError}
      supportingText={
        isError
          ? "카드에 표시된 만료일을 (MM/YY) 순서로 동일하게 입력해주세요"
          : undefined
      }
      required
    >
      <Input
        type="text"
        id="expirationDate"
        data-name="expirationDate"
        value={expirationDate}
        placeholder="연/년도(MM/YY) 순서로 4자리 숫자를 입력해주세요"
        isError={isError}
        maxLength={5}
        autoComplete="cc-csc"
        onChange={onChange}
        onBlur={onErrorBlur}
      />
    </InputContainer>
  );
}

export default CardExpirationDate;
