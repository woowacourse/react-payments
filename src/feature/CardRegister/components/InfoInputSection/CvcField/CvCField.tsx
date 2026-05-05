import Label from "../../../../../common/components/Label/Label";
import Input from "../../../../../common/components/Input/Input";
import { useState } from "react";
import styled from "styled-components";
import {
  CVC_INPUT_COUNT,
  CVC_LENGTH,
  ERROR_MESSAGES,
} from "../../../constants";

const CvcField = ({
  cvcNumber,
  setCvcNumber,
  onErrorChange,
}: {
  cvcNumber: string;
  setCvcNumber: (value: string) => void;
  onErrorChange: (value: boolean) => void;
}) => {
  const createFlags = () =>
    Array.from({ length: CVC_INPUT_COUNT }, () => false);

  const [errorInfo, setErrorInfo] = useState({
    flag: createFlags(),
    currentErrorMsg: "",
  });
  const [isTouched, setIsTouched] = useState(createFlags());

  const handleCvcNumberChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!/^\d*$/.test(value)) return;
    if (value.length > CVC_LENGTH) return;

    setCvcNumber(value);
    clearErrorWhenComplete(index, value);
  };

  const updateTouched = (index: number) => {
    setIsTouched((prev) =>
      prev.map((touched, i) => (i === index ? true : touched)),
    );
  };

  const clearErrorWhenComplete = (index: number, value: string) => {
    if (!isTouched[index] || value.length !== CVC_LENGTH) return;

    updateErrorInfo(index, false);
  };

  const updateErrorInfo = (index: number, hasError: boolean) => {
    const newFlag = errorInfo.flag.map((flag, i) =>
      i === index ? hasError : flag,
    );
    const firstErrorIdx = newFlag.indexOf(true);

    setErrorInfo({
      flag: newFlag,
      currentErrorMsg: firstErrorIdx === -1 ? "" : ERROR_MESSAGES.cvc,
    });
    onErrorChange(firstErrorIdx !== -1);
  };

  const handleCvcBlur = (index: number, eValue: string) => {
    updateTouched(index);

    const isValid = eValue.length === CVC_LENGTH;
    updateErrorInfo(index, !isValid);
  };

  const firstErrorIdx = errorInfo.flag.indexOf(true);

  return (
    <StyledField>
      <Label htmlFor="cvc">CVC</Label>
      <InputWrapper>
        <CvcInput
          id="cvc"
          value={cvcNumber}
          maxLength={CVC_LENGTH}
          inputMode="numeric"
          placeholder="123"
          strokeMode={0 === firstErrorIdx ? "error" : "default"}
          onChange={(e) => handleCvcNumberChange(0, e.target.value)}
          onBlur={(e) => handleCvcBlur(0, e.target.value)}
        />
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
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;
`;

const CvcInput = styled(Input)`
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

export default CvcField;
