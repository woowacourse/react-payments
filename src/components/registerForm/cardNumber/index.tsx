import React, { useState, useContext, useRef } from "react";
import Input from "src/components/@common/Input";
import FormLabel from "src/components/@common/FormLabel";
import ErrorSpan from "src/components/@common/ErrorSpan";
import { ONLY_NUMBER_REGEXP } from "src/utils/regexp";
import { cardInfoContext } from "src/context/CardInfoContext";
import { CardNumberObj } from "src/interfaces";
import useAutoFocus from "src/hooks/useAutoFocus";
import { Styled } from "./CardNumber.styles";
import { NUMBERS } from "src/utils/constant";

function CardNumber() {
  const { EACH_CARD } = NUMBERS;
  const [cardInput, setCardInput] = useContext(cardInfoContext);

  const [cardError, setCardError] = useState({
    isError: false,
    message: "",
  });

  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdInputRef = useRef<HTMLInputElement>(null);
  const fourthInputRef = useRef<HTMLInputElement>(null);

  const { nextInputFocus } = useAutoFocus({
    initialRefs: [firstInputRef, secondInputRef, thirdInputRef, fourthInputRef],
    maxLength: EACH_CARD,
  });

  const cardChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.dataset["order"] as keyof CardNumberObj;
    const idx = event.currentTarget.dataset["index"];
    if (!name) return;

    if (!ONLY_NUMBER_REGEXP.test(value)) return;

    try {
      if (value.length !== EACH_CARD) {
        throw new Error(`${EACH_CARD}글자를 입력해 주세요`);
      }

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

  return (
    <div>
      <FormLabel>카드 번호</FormLabel>
      <Styled.CardNumberInputContainer>
        <Input
          data-order="first"
          data-index="0"
          value={cardInput.cardNumbers["first"]}
          onChange={cardChange}
          maxLength={EACH_CARD}
          customInputStyle={Styled.CardNumberInput}
          inputmode="numeric"
          ref={firstInputRef}
        />
        <p>-</p>
        <Input
          data-order="second"
          data-index="1"
          value={cardInput.cardNumbers["second"]}
          onChange={cardChange}
          maxLength={EACH_CARD}
          customInputStyle={Styled.CardNumberInput}
          inputmode="numeric"
          ref={secondInputRef}
        />
        <p>-</p>

        <Input
          data-order="third"
          data-index="2"
          value={cardInput.cardNumbers["third"]}
          onChange={cardChange}
          maxLength={EACH_CARD}
          customInputStyle={Styled.CardNumberInput}
          inputmode="numeric"
          type={"password"}
          placeholder="●●●●"
          ref={thirdInputRef}
        />
        <p>-</p>

        <Input
          data-order="fourth"
          data-index="3"
          value={cardInput.cardNumbers["fourth"]}
          onChange={cardChange}
          maxLength={EACH_CARD}
          customInputStyle={Styled.CardNumberInput}
          inputmode="numeric"
          type={"password"}
          placeholder="●●●●"
          ref={fourthInputRef}
        />
      </Styled.CardNumberInputContainer>
      {cardError?.isError && <ErrorSpan>{cardError?.message}</ErrorSpan>}
    </div>
  );
}

export default CardNumber;
