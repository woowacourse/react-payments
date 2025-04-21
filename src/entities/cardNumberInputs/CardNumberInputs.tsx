import Input from "../../shared/input/Input";
import { CardNumberPosition } from "../../\btypes/index.types";
import { useState } from "react";
import { NO_ERROR } from "../../shared/constants/constant";
import { CARD_NUMBER_LENGTH } from "./CardNumberInputs.constant";
import { getValidationFns, getErrorMessage } from "./CardNumberInputs.domain";
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

function CardNumberInputs({ cardNumber, changeCardNumber }: CardNumberProps) {
  const [error, setError] = useState({
    [CARD_NUMBER_POSITION.FIRST]: NO_ERROR,
    [CARD_NUMBER_POSITION.SECOND]: NO_ERROR,
    [CARD_NUMBER_POSITION.THIRD]: NO_ERROR,
    [CARD_NUMBER_POSITION.FOURTH]: NO_ERROR,
  });

  const errorMessage = getErrorMessage(
    error as Record<CardNumberPosition, string>
  );

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

  return (
    <StyledContainer>
      <label htmlFor="">카드 번호</label>
      <StyledInputWrap>
        <Input
          value={cardNumber[CARD_NUMBER_POSITION.FIRST]}
          onChange={(e) => {
            checkValidation(
              CARD_NUMBER_LENGTH,
              e.target.value,
              CARD_NUMBER_POSITION.FIRST
            );
            changeCardNumber(CARD_NUMBER_POSITION.FIRST, e.target?.value);
          }}
          width="25%"
          maxLength={CARD_NUMBER_LENGTH}
          placeholder="1234"
          isError={error[CARD_NUMBER_POSITION.FIRST] !== NO_ERROR}
        />
        <Input
          value={cardNumber[CARD_NUMBER_POSITION.SECOND]}
          onChange={(e) => {
            checkValidation(
              CARD_NUMBER_LENGTH,
              e.target.value,
              CARD_NUMBER_POSITION.SECOND
            );
            changeCardNumber(CARD_NUMBER_POSITION.SECOND, e.target?.value);
          }}
          width="25%"
          maxLength={CARD_NUMBER_LENGTH}
          placeholder="1234"
          isError={error[CARD_NUMBER_POSITION.SECOND] !== NO_ERROR}
        />
        <Input
          value={cardNumber[CARD_NUMBER_POSITION.THIRD]}
          onChange={(e) => {
            checkValidation(
              CARD_NUMBER_LENGTH,
              e.target.value,
              CARD_NUMBER_POSITION.THIRD
            );
            changeCardNumber(CARD_NUMBER_POSITION.THIRD, e.target?.value);
          }}
          width="25%"
          maxLength={CARD_NUMBER_LENGTH}
          placeholder="1234"
          isError={error[CARD_NUMBER_POSITION.THIRD] !== NO_ERROR}
        />
        <Input
          value={cardNumber[CARD_NUMBER_POSITION.FOURTH]}
          onChange={(e) => {
            checkValidation(
              CARD_NUMBER_LENGTH,
              e.target.value,
              CARD_NUMBER_POSITION.FOURTH
            );
            changeCardNumber(CARD_NUMBER_POSITION.FOURTH, e.target?.value);
          }}
          width="25%"
          maxLength={CARD_NUMBER_LENGTH}
          placeholder="1234"
          isError={error[CARD_NUMBER_POSITION.FOURTH] !== NO_ERROR}
        />
      </StyledInputWrap>
      {errorMessage ? (
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      ) : null}
    </StyledContainer>
  );
}

export default CardNumberInputs;
