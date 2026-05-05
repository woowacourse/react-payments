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
} from "../../../validators/cardNumber";

const NumberField = ({
  cardNumbers,
  setCardNumbers,
  onErrorChange,
}: {
  cardNumbers: CardNumberChunkType;
  setCardNumbers: (value: CardNumberChunkType) => void;
  onErrorChange: (hasError: boolean) => void;
}) => {
  const createFlags = () =>
    Array.from({ length: CARD_NUMBER_INPUT_COUNT }, () => false);

  const [errorInfo, setErrorInfo] = useState({
    flag: createFlags(),
    currentErrorMsg: "",
  });
  const [isTouched, setIsTouched] = useState(createFlags());

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
    if (isTouched[index] && value.length === CARD_NUMBER_CHUNK_LENGTH) {
      updateErrorInfo(index, false);
    }
  };

  const handleNumbersBlur = (index: number, eValue: string) => {
    updateTouched(index);
    updateErrorInfo(index, !validateCardNumberChunkLength(eValue));
  };

  const updateTouched = (index: number) => {
    setIsTouched((prev) =>
      prev.map((touched, i) => (i === index ? true : touched)),
    );
  };

  const updateErrorInfo = (index: number, hasError: boolean) => {
    const newFlag = errorInfo.flag.map((flag, i) =>
      i === index ? hasError : flag,
    );
    const firstErrorIdx = newFlag.indexOf(true);

    setErrorInfo({
      flag: newFlag,
      currentErrorMsg: firstErrorIdx === -1 ? "" : ERROR_MESSAGES.cardNumber,
    });
    onErrorChange(firstErrorIdx !== -1);
  };

  const firstErrorIdx = errorInfo.flag.indexOf(true);

  return (
    <StyledField>
      <Label htmlFor="card_number">카드 번호</Label>
      <InputWrapper>
        {cardNumbers.map((chunk, index) => (
          <CardNumberInput
            id="card_number"
            key={index}
            value={chunk}
            placeholder="1234"
            inputMode="numeric"
            maxLength={CARD_NUMBER_CHUNK_LENGTH}
            strokeMode={index === firstErrorIdx ? "error" : "default"}
            onChange={(e) => handleNumbersChange(index, e.target.value)}
            onBlur={(e) => handleNumbersBlur(index, e.target.value)}
          />
        ))}
      </InputWrapper>

      <ErrorMessage>{errorInfo.currentErrorMsg}</ErrorMessage>
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
