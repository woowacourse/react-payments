import React, { useState, useContext } from "react";
import Input from "src/components/@common/Input";
import FormLabel from "src/components/@common/FormLabel";
import ErrorSpan from "src/components/@common/ErrorSpan";
import { ONLY_NUMBER_REGEXP } from "src/utils/regexp";
import { cardInfoContext } from "src/context/CardInfoContext";
import { CardNumberObj } from "src/interfaces";
import useAutoFocus from "src/hooks/useAutoFocus";
import { Styled } from "./CardNumber.styles";
import { CARD_NUMBER_TYPES, NUMBERS } from "src/utils/constant";
import { lengthMatchValidation } from "src/utils/validation";

function CardNumber() {
  const { EACH_CARD } = NUMBERS;
  const [cardInput, setCardInput] = useContext(cardInfoContext);

  const [cardError, setCardError] = useState({
    isError: false,
    message: "",
  });

  const { refs, nextInputFocus } = useAutoFocus({
    maxLength: EACH_CARD,
  });

  const cardChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.dataset["order"] as keyof CardNumberObj;
    const idx = event.currentTarget.dataset["index"];
    if (!name) return;

    if (!ONLY_NUMBER_REGEXP.test(value)) return;

    try {
      lengthMatchValidation(value, EACH_CARD);

      setCardError({
        isError: false,
        message: "",
      });
    } catch (error) {
      if (error instanceof Error) {
        setCardError({
          isError: true,
          message: error.message,
        });
      }
    } finally {
      if (!setCardInput) return;
      setCardInput((prev) => ({
        ...prev,
        cardNumbers: { ...prev.cardNumbers, [name]: value },
      }));
    }
    nextInputFocus(Number(idx));
  };

  const inputs = CARD_NUMBER_TYPES.map((key, idx) => (
    <>
      <Input
        key={key}
        data-order={key}
        data-index={idx}
        value={cardInput.cardNumbers[key]}
        onChange={cardChange}
        maxLength={EACH_CARD}
        customInputStyle={Styled.CardNumberInput}
        inputmode="numeric"
        ref={(el) => (refs.current[idx] = el as HTMLInputElement)}
        placeholder={idx > 1 ? "••••" : ""}
      />
      {idx !== CARD_NUMBER_TYPES.length - 1 && <p>-</p>}
    </>
  ));

  return (
    <div>
      <FormLabel>카드 번호</FormLabel>
      <Styled.CardNumberInputContainer>
        {inputs}
      </Styled.CardNumberInputContainer>
      {cardError?.isError && <ErrorSpan>{cardError?.message}</ErrorSpan>}
    </div>
  );
}

export default CardNumber;
