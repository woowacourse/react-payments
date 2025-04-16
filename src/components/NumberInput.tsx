import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import isExactLength from "../utils/isExactLength";

interface NumberInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  maxLength: number;
  placeholder: string;
  extraErrorCondition?: boolean;
}

function NumberInput({
  value,
  setValue,
  maxLength,
  placeholder,
  extraErrorCondition,
}: NumberInputProps) {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!isExactLength(value, 0) && !isExactLength(value, maxLength)) {
      setIsError(true);
      return;
    }
    if (extraErrorCondition) {
      setIsError(true);
      return;
    }

    setIsError(false);
  }, [value]);

  function handleValue(e: React.ChangeEvent<HTMLInputElement>) {
    if (Number.isNaN(Number(e.target.value))) {
      e.target.value = value;
      return;
    }
    setValue(e.target.value);
  }

  return (
    <Input
      maxLength={maxLength}
      placeholder={placeholder}
      isError={isError}
      onChange={handleValue}
    />
  );
}

export default NumberInput;

const Input = styled.input<{ isError: boolean }>`
  width: 100%;
  border: 1px solid ${({ isError }) => (isError ? "#FF3D3D" : "#ACACAC")};
  border-radius: 2px;
  height: 32px;
  padding: 8px;

  &:focus {
    border: 1.5px solid ${({ isError }) => (isError ? "#FF3D3D" : "#000")};
    outline: none;
  }
`;
