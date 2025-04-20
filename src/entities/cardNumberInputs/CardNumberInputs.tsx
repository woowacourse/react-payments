import Input from "../../shared/input/Input";
import { CardNumberProps, Position } from "../../\btypes/index.types";
import { useState } from "react";
import { isValidLength, isValidNumber } from "../../util/validation";
import { NO_ERROR, POSITION } from "../../shared/constants/constant";
import {
  StyledContainer,
  StyledInputWrap,
  StyledErrorMessage,
} from "../inputs.css";

const CARD_NUMBER_LENGTH = 4;

const errorMessage = {
  length: "4자리만 입력 가능합니다.",
  number: "숫자만 입력 가능합니다.",
};

function CardNumberInputs({ cardNumber, changeCardNumber }: CardNumberProps) {
  const [error, setError] = useState({
    [POSITION.FIRST]: NO_ERROR,
    [POSITION.SECOND]: NO_ERROR,
    [POSITION.THIRD]: NO_ERROR,
    [POSITION.FOURTH]: NO_ERROR,
  });

  function checkValidation(position: Position, length: number, number: string) {
    if (number === NO_ERROR) {
      setError((prev) => {
        prev[position] = NO_ERROR;
        return { ...prev };
      });
      return;
    }

    if (!isValidLength(number, length)) {
      setError((prev) => {
        prev[position] = errorMessage.length;
        return { ...prev };
      });
      return;
    } else if (!isValidNumber(number)) {
      setError((prev) => {
        prev[position] = errorMessage.number;
        return { ...prev };
      });
      return;
    }

    setError((prev) => {
      prev[position] = NO_ERROR;
      return { ...prev };
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
            checkValidation("first", CARD_NUMBER_LENGTH, e.target.value);
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
            checkValidation("second", CARD_NUMBER_LENGTH, e.target.value);
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
            checkValidation("third", CARD_NUMBER_LENGTH, e.target.value);
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
            checkValidation("fourth", CARD_NUMBER_LENGTH, e.target.value);
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
