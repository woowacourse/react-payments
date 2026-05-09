import { useState } from "react";
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

const NumberField = ({
  cardNumbers,
  setCardNumbers,
  lastInputMaxLength,
}: {
  cardNumbers: CardNumberChunkType;
  setCardNumbers: (value: CardNumberChunkType) => void;

  lastInputMaxLength: number;
}) => {
  const [errorInfo, setErrorInfo] = useState(
    Array.from({ length: CARD_NUMBER_INPUT_COUNT }, () => ""),
  );
  const [isTouched, setIsTouched] = useState(
    Array.from({ length: CARD_NUMBER_INPUT_COUNT }, () => false),
  );

  const handleNumbersChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!validateNumericInput(value)) {
      return;
    }
    if (validateExceedCardNumberChunkLength(value)) {
      return;
    }

    const newChunks = cardNumbers.map((chunk, i) =>
      i === index ? value : chunk,
    );

    setCardNumbers(newChunks as CardNumberChunkType);

    // 에러 해결과 동시에 에러 강조표시 해제
    if (
      index !== 3 &&
      isTouched[index] &&
      value.length === CARD_NUMBER_CHUNK_LENGTH
    ) {
      const newErrorInfo = errorInfo.map((message, errorIndex) =>
        errorIndex === index ? "" : message,
      );
      setErrorInfo(newErrorInfo);
    }
  };

  const handleNumbersBlur = (index: number, eValue: string) => {
    updateTouched(index);

    // 에러 검증
    if (!validateCardNumberChunkLength(eValue)) {
      const newErrorInfo = errorInfo.map((message, errorIndex) =>
        errorIndex === index ? ERROR_MESSAGES.cardNumber : message,
      );
      setErrorInfo(newErrorInfo);
    }
  };

  const handleLastInputNumbersChange = (eValue: string) => {
    const value = eValue.trim();

    if (!validateNumericInput(value)) {
      return;
    }
    if (validateExceedLastCardNumberChunkLength(value, lastInputMaxLength)) {
      return;
    }

    const newChunks = cardNumbers.map((chunk, i) => (i === 3 ? value : chunk));

    setCardNumbers(newChunks as CardNumberChunkType);

    // 에러 해결과 동시에 에러 강조표시 해제
    if (isTouched[3] && value.length === lastInputMaxLength) {
      const newErrorInfo = errorInfo.map((message, errorIndex) =>
        errorIndex === 3 ? "" : message,
      );
      setErrorInfo(newErrorInfo);
    }
  };

  const handleLastInputNumbersBlur = (eValue: string) => {
    updateTouched(3);
    if (!validateLastCardNumberChunkLength(eValue, lastInputMaxLength)) {
      const newErrorInfo = errorInfo.map((message, errorIndex) =>
        errorIndex === 3
          ? `카드 번호 ${lastInputMaxLength}자리를 입력해 주세요`
          : message,
      );
      setErrorInfo(newErrorInfo);
    }
  };

  const updateTouched = (index: number) => {
    setIsTouched((prev) =>
      prev.map((touched, i) => (i === index ? true : touched)),
    );
  };

  const firstErrorIndex = errorInfo.findIndex((message) => message !== "");

  const getPlaceHolder = (lastInputMaxLength: number) => {
    return Array.from({ length: lastInputMaxLength }, (_, idx) => idx + 1).join(
      "",
    );
  };

  return (
    <StyledField>
      <Label htmlFor="card_number-0">카드 번호</Label>
      <InputWrapper>
        {cardNumbers.map((chunk, index) => (
          <CardNumberInput
            id={`card_number-${index}`}
            key={index}
            value={chunk}
            placeholder={
              index !== 3 ? "1234" : getPlaceHolder(lastInputMaxLength)
            }
            inputMode="numeric"
            maxLength={
              index !== 3 ? CARD_NUMBER_CHUNK_LENGTH : lastInputMaxLength
            }
            strokeMode={index === firstErrorIndex ? "error" : "default"}
            onChange={
              index !== 3
                ? (e) => handleNumbersChange(index, e.target.value)
                : (e) => handleLastInputNumbersChange(e.target.value)
            }
            onBlur={
              index !== 3
                ? (e) => handleNumbersBlur(index, e.target.value)
                : (e) => handleLastInputNumbersBlur(e.target.value)
            }
          />
        ))}
      </InputWrapper>

      <ErrorMessage>{errorInfo[firstErrorIndex]}</ErrorMessage>
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
