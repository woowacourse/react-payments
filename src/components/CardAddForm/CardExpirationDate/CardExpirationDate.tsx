import { memo } from "react";
import type { ChangeEvent, FocusEvent } from "react";
import type { CardFormData, CardFormValidation } from "../../../types";
import Input from "../../common/Input/Input";
import InputContainer from "../../common/InputContainer/InputContainer";
import Label from "../../common/Label/Label";
import {
  EXPIRATION_DATE_INPUT_MAX_LENGTH,
  PATTERN,
} from "../../../constants/input";
import {
  formatDisplayedExpirationDate,
  formatExpirationDate,
} from "../../../utils/formatter";

interface CardExpirationDateProps {
  isError: boolean;
  updateInputValue: <K extends keyof CardFormData>(
    key: K,
    value: CardFormData[K]
  ) => void;
  updateInputError: <K extends keyof CardFormValidation>(
    key: K,
    value: CardFormData[K]
  ) => void;
}

const CardExpirationDate = ({
  isError,
  updateInputValue,
  updateInputError: updateCardInputError,
}: CardExpirationDateProps) => {
  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    target.value = formatDisplayedExpirationDate(target.value);
    updateInputValue("expirationDate", formatExpirationDate(target.value));
  };

  const onBlur = ({ target }: FocusEvent<HTMLInputElement>) => {
    updateCardInputError("expirationDate", formatExpirationDate(target.value));
  };

  return (
    <InputContainer
      supportingText={{
        error: "카드에 표시된 유효한 만료일을 (MM/YY) 순서로 입력해주세요",
      }}
      isError={isError}
    >
      <Label htmlFor="expirationDate" required>
        만료일
      </Label>
      <Input
        id="expirationDate"
        name="expirationDate"
        placeholder="월/년도(MM/YY) 순서로 4자리 숫자를 입력해주세요"
        minLength={EXPIRATION_DATE_INPUT_MAX_LENGTH}
        maxLength={EXPIRATION_DATE_INPUT_MAX_LENGTH}
        autoComplete="cc-exp"
        inputMode="numeric"
        pattern={PATTERN.EXPIRATION_DATE}
        required
        isError={isError}
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputContainer>
  );
};

export default memo(CardExpirationDate);
