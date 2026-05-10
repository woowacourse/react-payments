import Input from "../../../../../common/components/Input/Input";
import Label from "../../../../../common/components/Label/Label";
import styled from "styled-components";
import type { CardNumberChunkType } from "../../../../../common/types/CardInfoType";
import {
  CARD_NUMBER_CHUNK_LENGTH,
  CARD_NUMBER_INPUT_COUNT,
  ERROR_MESSAGES,
} from "../../../constants";
import { validateNumericInput } from "../../../validators/input";
import {
  validateCardNumberChunkLength,
  validateExceedCardNumberChunkLength,
  validateExceedLastCardNumberChunkLength,
  validateLastCardNumberChunkLength,
} from "../../../validators/cardNumber";
import useInputFocusGroup from "../../../../../hooks/useInputFocusGroup";
import useInputErrorState from "../../../../../hooks/useInputErrorState";
import { getPlaceHolder } from "../../../utils/placeHolder";

const NumberField = ({
  cardNumbers,
  setCardNumbers,
  lastInputMaxLength,
}: {
  cardNumbers: CardNumberChunkType;
  setCardNumbers: (value: CardNumberChunkType) => void;

  lastInputMaxLength: number;
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

  const LAST_INPUT_INDEX = 3;

  const updateCardNumber = (index: number, newCardNumber: string) => {
    const newChunks = cardNumbers.map((chunk, i) =>
      i === index ? newCardNumber : chunk,
    );
    setCardNumbers(newChunks as CardNumberChunkType);
  };

  const handleNumbersChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!validateNumericInput(value)) {
      return;
    }
    if (index !== LAST_INPUT_INDEX) {
      if (validateExceedCardNumberChunkLength(value)) {
        return;
      }
    } else {
      if (validateExceedLastCardNumberChunkLength(value, lastInputMaxLength)) {
        return;
      }
    }

    updateCardNumber(index, value);

    // 에러 해결과 동시에 에러 강조표시 해제
    if (index !== LAST_INPUT_INDEX) {
      if (isTouched[index] && value.length === CARD_NUMBER_CHUNK_LENGTH) {
        clearErrorMessage(index);
      }
    } else {
      if (isTouched[index] && value.length === lastInputMaxLength) {
        clearErrorMessage(index);
      }
    }

    if (value.length === CARD_NUMBER_CHUNK_LENGTH) {
      focusNext(index);
    }

    if (value.length === 0) {
      focusPrevious(index);
    }
  };

  const handleNumbersBlur = (index: number, eValue: string) => {
    touchField(index);

    if (index !== LAST_INPUT_INDEX) {
      if (!validateCardNumberChunkLength(eValue)) {
        updateErrorMessage(index, ERROR_MESSAGES.cardNumber);
      }
    } else {
      if (!validateLastCardNumberChunkLength(eValue, lastInputMaxLength)) {
        updateErrorMessage(
          index,
          `카드 번호 ${lastInputMaxLength}자리를 입력해 주세요`,
        );
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
            placeholder={
              index !== LAST_INPUT_INDEX
                ? getPlaceHolder(CARD_NUMBER_CHUNK_LENGTH)
                : getPlaceHolder(lastInputMaxLength)
            }
            inputMode="numeric"
            maxLength={
              index !== LAST_INPUT_INDEX
                ? CARD_NUMBER_CHUNK_LENGTH
                : lastInputMaxLength
            }
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
