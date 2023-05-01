import { memo, useRef } from "react";
import type { ChangeEvent } from "react";
import type { CardFormData, CardFormValidation } from "../../../types";
import Input from "../../common/Input/Input";
import InputContainer from "../../common/InputContainer/InputContainer";
import Label from "../../common/Label/Label";
import { useCardNumber } from "../../../hooks/cards/useCardNumber";
import {
  CARD_NUMBER_INPUT_MAX_LENGTH,
  PATTERN,
} from "../../../constants/input";
import { formatNumber } from "../../../utils/formatter";

interface CardNumberProps {
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

const CardNumber = ({
  isError,
  updateInputValue,
  updateInputError,
}: CardNumberProps) => {
  const { handleInputValueChange } = useCardNumber();
  const cardNumberRef = useRef("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleInputValueChange(event, cardNumberRef);
    updateInputValue("cardNumber", formatNumber(cardNumberRef.current));
  };

  const onBlur = () => {
    updateInputError("cardNumber", formatNumber(cardNumberRef.current));
  };

  return (
    <InputContainer
      supportingText={{
        error: "카드에 표시된 16자리 숫자와 동일하게 입력해주세요",
      }}
      isError={isError}
    >
      <Label htmlFor="cardNumber" required>
        카드 번호
      </Label>
      <Input
        id="cardNumber"
        name="cardNumber"
        data-value=""
        minLength={CARD_NUMBER_INPUT_MAX_LENGTH}
        maxLength={CARD_NUMBER_INPUT_MAX_LENGTH}
        autoComplete="cc-number"
        inputMode="numeric"
        pattern={PATTERN.CARD_NUMBER}
        required
        isError={isError}
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputContainer>
  );
};

export default memo(CardNumber);
