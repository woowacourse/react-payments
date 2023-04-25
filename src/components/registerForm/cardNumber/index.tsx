import React from "react";
import Input from "src/components/@common/Input";
import FormLabel from "src/components/@common/FormLabel";
import ErrorSpan from "src/components/@common/ErrorSpan";
import useAutoFocus from "src/hooks/useAutoFocus";
import { Styled as S } from "./CardNumber.styles";
import { CARD_NUMBER_TYPES, NUMBERS } from "src/utils/constant";
import { lengthMatchValidation } from "src/utils/validation";
import useCardInfoInput from "src/hooks/useCardInfoInput";
import { CardNumberObj } from "src/interfaces";

function CardNumber() {
  const { EACH_CARD } = NUMBERS;

  const { refs, nextInputFocus } = useAutoFocus({
    maxLength: EACH_CARD,
  });

  const { value, onChange, error } = useCardInfoInput<CardNumberObj>({
    contextType: "cardNumbers",
    validation: (value) => lengthMatchValidation(value, EACH_CARD),
    nextInputFocus,
  });

  const inputs = CARD_NUMBER_TYPES.map((key, idx) => (
    <>
      <Input
        key={key}
        data-order={key}
        data-index={idx}
        value={value[key]}
        onChange={onChange}
        maxLength={EACH_CARD}
        customInputStyle={S.CardNumberInput}
        inputmode="numeric"
        ref={(el) => (refs.current[idx] = el as HTMLInputElement)}
        placeholder={idx > 1 ? "••••" : ""}
        type={idx > 1 ? "password" : "text"}
      />
      {idx !== CARD_NUMBER_TYPES.length - 1 && <p>-</p>}
    </>
  ));

  return (
    <div>
      <FormLabel>카드 번호</FormLabel>
      <S.CardNumberInputContainer>{inputs}</S.CardNumberInputContainer>
      {error?.isError && <ErrorSpan>{error?.message}</ErrorSpan>}
    </div>
  );
}

export default CardNumber;
