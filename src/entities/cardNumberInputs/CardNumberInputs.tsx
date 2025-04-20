import Input from "../../shared/input/Input";
import { CardNumberPosition } from "../../\btypes/index.types";
import { useState } from "react";
import { isValidLength, isValidNumber } from "../../util/validation";
import { NO_ERROR } from "../../shared/constants/constant";
import {
  StyledContainer,
  StyledInputWrap,
  StyledErrorMessage,
} from "../inputs.css";

const CARD_NUMBER_POSITION: Record<
  "FIRST" | "SECOND" | "THIRD" | "FOURTH",
  CardNumberPosition
> = {
  FIRST: "first",
  SECOND: "second",
  THIRD: "third",
  FOURTH: "fourth",
};

type CardNumberProps = {
  cardNumber: Record<CardNumberPosition, string>;
  changeCardNumber: (position: CardNumberPosition, cardNumber: string) => void;
};

const CARD_NUMBER_LENGTH = 4;

const errorMessage = {
  length: "4자리만 입력 가능합니다.",
  number: "숫자만 입력 가능합니다.",
};

function getValidationFns(length: number, cardNumber: string) {
  return [
    { condition: () => cardNumber === NO_ERROR, errorMsg: NO_ERROR },
    {
      condition: () => !isValidLength(cardNumber, length),
      errorMsg: errorMessage.length,
    },
    {
      condition: () => !isValidNumber(cardNumber),
      errorMsg: errorMessage.number,
    },
    { condition: () => true, errorMsg: NO_ERROR },
  ];
}

function CardNumberInputs({ cardNumber, changeCardNumber }: CardNumberProps) {
  const [error, setError] = useState({
    [CARD_NUMBER_POSITION.FIRST]: NO_ERROR,
    [CARD_NUMBER_POSITION.SECOND]: NO_ERROR,
    [CARD_NUMBER_POSITION.THIRD]: NO_ERROR,
    [CARD_NUMBER_POSITION.FOURTH]: NO_ERROR,
  });

  function checkValidation(
    length: number,
    cardNumber: string,
    cardNumberPosition: CardNumberPosition
  ) {
    const validationFns = getValidationFns(length, cardNumber);

    const validation = validationFns.find((v) => v.condition());
    setError((prev) => {
      return {
        ...prev,
        [cardNumberPosition]: validation?.errorMsg || NO_ERROR,
      };
    });
  }

  function getErrorMessage() {
    for (const key in error) {
      const typedKey = key as keyof typeof error;
      if (error[typedKey] !== NO_ERROR) {
        return error[typedKey];
      }
    }
  }

  return (
    <StyledContainer>
      <label htmlFor="">카드 번호</label>
      <StyledInputWrap>
        <Input
          value={cardNumber["first"]}
          onChange={(e) => {
            checkValidation(
              CARD_NUMBER_LENGTH,
              e.target.value,
              CARD_NUMBER_POSITION.FIRST
            );
            changeCardNumber("first", e.target?.value);
          }}
          width="25%"
          maxLength={CARD_NUMBER_LENGTH}
          placeholder="1234"
          isError={error["first"] !== NO_ERROR}
        />
        <Input
          value={cardNumber["second"]}
          onChange={(e) => {
            checkValidation(
              CARD_NUMBER_LENGTH,
              e.target.value,
              CARD_NUMBER_POSITION.SECOND
            );
            changeCardNumber("second", e.target?.value);
          }}
          width="25%"
          maxLength={CARD_NUMBER_LENGTH}
          placeholder="1234"
          isError={error["second"] !== NO_ERROR}
        />
        <Input
          value={cardNumber["third"]}
          onChange={(e) => {
            checkValidation(
              CARD_NUMBER_LENGTH,
              e.target.value,
              CARD_NUMBER_POSITION.THIRD
            );
            changeCardNumber("third", e.target?.value);
          }}
          width="25%"
          maxLength={CARD_NUMBER_LENGTH}
          placeholder="1234"
          isError={error["third"] !== NO_ERROR}
        />
        <Input
          value={cardNumber["fourth"]}
          onChange={(e) => {
            checkValidation(
              CARD_NUMBER_LENGTH,
              e.target.value,
              CARD_NUMBER_POSITION.FOURTH
            );
            changeCardNumber("fourth", e.target?.value);
          }}
          width="25%"
          maxLength={CARD_NUMBER_LENGTH}
          placeholder="1234"
          isError={error["fourth"] !== NO_ERROR}
        />
      </StyledInputWrap>
      {getErrorMessage() ? (
        <StyledErrorMessage>{getErrorMessage()}</StyledErrorMessage>
      ) : null}
    </StyledContainer>
  );
}

export default CardNumberInputs;
