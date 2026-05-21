import Input from "../shared/Input/Input";
import Label from "../shared/Label/Label";
import styled from "styled-components";
import useInputFocusGroup from "../shared/useInputFocusGroup";
import useInputErrorState from "../shared/useInputErrorState";
import { getNumberPlaceHolder } from "../shared/getNumberPlaceHolder";

import { CARD_NUMBER_INPUT_COUNT } from "./constants";

import { isNumeric } from "../shared/isNumeric";
import { validateCardNumberChunk } from "../utils/cardNumberValidator";
import type {
  CardNumber,
  CardNumberEachChunkLength,
} from "../../../../../domain/card/cardNumber";

const CardNumberField = ({
  cardNumbers,
  onCardNumbersChange,
  cardNumberEachChunkLength,
  formErrorMessage,
  clearFormErrorMessage,
  disabledInput,
}: {
  cardNumbers: CardNumber;
  onCardNumbersChange: (value: CardNumber) => void;
  cardNumberEachChunkLength: CardNumberEachChunkLength;
  formErrorMessage: string | null;
  clearFormErrorMessage: () => void;
  disabledInput: boolean;
}) => {
  const {
    updateErrorMessage,
    clearErrorMessage,
    firstErrorIndex,
    firstErrorMessage,
    isTouched,
    touchField,
  } = useInputErrorState(CARD_NUMBER_INPUT_COUNT);

  const { registerFocusRef, focusNext, focusPrevious } = useInputFocusGroup(
    CARD_NUMBER_INPUT_COUNT,
  );

  const updateCardNumberChunk = (index: number, newCardNumber: string) => {
    const newChunks = cardNumbers.map((chunk, i) =>
      i === index ? newCardNumber : chunk,
    );
    onCardNumbersChange(newChunks as CardNumber);
  };

  const handleNumbersChange = (index: number, eValue: string) => {
    clearFormErrorMessage();
    const value = eValue.trim();

    if (!isNumeric(value)) {
      return;
    }

    const expectedLength = cardNumberEachChunkLength[index];

    updateCardNumberChunk(index, value);

    if (
      isTouched[index] &&
      validateCardNumberChunk(value, expectedLength).isValid
    ) {
      clearErrorMessage(index);
    }

    if (value.length === expectedLength) {
      focusNext(index);
    }

    if (value.length === 0) {
      focusPrevious(index);
    }
  };

  const handleNumbersBlur = (index: number, eValue: string) => {
    touchField(index);
    // blur했을 때 4개의 input 모두 돌면서 touched + length가 더 크면 그 칸에 에러 메시지를 띄워야할듯

    const expectedLength = cardNumberEachChunkLength[index];
    const { errorMessage } = validateCardNumberChunk(eValue, expectedLength);
    if (errorMessage) {
      updateErrorMessage(index, errorMessage);
    } else {
      clearErrorMessage(index);
    }

    // 첫 번째 input 수정시 마지막 input에 에러 띄워주는 정책
    const LAST_CHUNK_INDEX = CARD_NUMBER_INPUT_COUNT - 1;
    const lastChunkCardNumbers = cardNumbers[LAST_CHUNK_INDEX];
    const lastChunkLength = cardNumberEachChunkLength[LAST_CHUNK_INDEX];
    const { errorMessage: lastChunkErrorMessage } = validateCardNumberChunk(
      lastChunkCardNumbers,
      lastChunkLength,
    );
    if (lastChunkCardNumbers.length > lastChunkLength) {
      if (lastChunkErrorMessage) {
        updateErrorMessage(LAST_CHUNK_INDEX, lastChunkErrorMessage);
      }
    }
  };

  return (
    <StyledField>
      <Label htmlFor="card_number-0">카드 번호</Label>
      <InputWrapper>
        {cardNumbers.map((chunk, index) => (
          <CardNumberInput
            ref={(node) => {
              registerFocusRef(index, node);
            }}
            id={`card_number-${index}`}
            key={index}
            value={chunk}
            disabled={disabledInput}
            placeholder={getNumberPlaceHolder(cardNumberEachChunkLength[index])}
            inputMode="numeric"
            maxLength={cardNumberEachChunkLength[index]}
            strokeMode={index === firstErrorIndex ? "error" : "default"}
            onChange={(e) => handleNumbersChange(index, e.target.value)}
            onBlur={(e) => handleNumbersBlur(index, e.target.value)}
            autoFocus={index === 0}
          />
        ))}
      </InputWrapper>

      <ErrorMessage>
        {formErrorMessage ? formErrorMessage : firstErrorMessage}
      </ErrorMessage>
    </StyledField>
  );
};

export default CardNumberField;

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 12px;

  width: 100%;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
`;

const CardNumberInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
`;

const ErrorMessage = styled.span`
  min-height: 20px;
  font-size: 9.5px;
  font-weight: 400;
  color: #ff3d3d;
`;
