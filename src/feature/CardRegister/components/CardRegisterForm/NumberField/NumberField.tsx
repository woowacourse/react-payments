import Input from "../shared/Input/Input";
import Label from "../shared/Label/Label";
import styled from "styled-components";
import type { CardNumberChunkType } from "../../../../../common/types/CardInfoType";
import {
  CARD_NUMBER_INPUT_COUNT,
  type CardNumberChunkLengths,
} from "../../../constants";
import { isNumericInput } from "../../../validators/input";
import { validateCardNumberChunk } from "../../../validators/cardNumber";
import useInputFocusGroup from "../../../../../hooks/useInputFocusGroup";
import useInputErrorState from "../../../../../hooks/useInputErrorState";
import { getPlaceHolder } from "../../../utils/placeHolder";

const NumberField = ({
  cardNumbers,
  onCardNumbersChange,
  chunkLengths,
}: {
  cardNumbers: CardNumberChunkType;
  onCardNumbersChange: (value: CardNumberChunkType) => void;
  chunkLengths: CardNumberChunkLengths;
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
    onCardNumbersChange(newChunks as CardNumberChunkType);
  };

  const handleNumbersChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!isNumericInput(value)) {
      return;
    }

    const expectedLength = chunkLengths[index];

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

    const expectedLength = chunkLengths[index];
    const { isValid, errorMessage } = validateCardNumberChunk(
      eValue,
      expectedLength,
    );

    if (!isValid && errorMessage) {
      updateErrorMessage(index, errorMessage);
      return;
    }

    clearErrorMessage(index);
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
            placeholder={getPlaceHolder(chunkLengths[index])}
            inputMode="numeric"
            maxLength={chunkLengths[index]}
            strokeMode={index === firstErrorIndex ? "error" : "default"}
            onChange={(e) => handleNumbersChange(index, e.target.value)}
            onBlur={(e) => handleNumbersBlur(index, e.target.value)}
            autoFocus={index === 0}
          />
        ))}
      </InputWrapper>

      <ErrorMessage>{firstErrorMessage}</ErrorMessage>
    </StyledField>
  );
};

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

export default NumberField;
