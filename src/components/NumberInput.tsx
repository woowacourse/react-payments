import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import isExactLength from "../utils/isExactLength";

interface NumberInputProps {
  id?: string;
  value: string;
  setValue: (value: string) => void;
  maxLength: number;
  placeholder: string;
  extraErrorCondition?: boolean;
}

function NumberInput({
  id,
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
    const newValue = e.target.value;
    const numericRegex = /^[0-9]*$/;

    if (numericRegex.test(newValue)) {
      setValue(newValue);
    }
  }

  return (
    <Input
      id={id}
      value={value}
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
  border: 1px solid
    ${({ isError, theme }) =>
      isError ? theme.colors.error : theme.colors.gray};
  border-radius: 2px;
  height: 32px;
  padding: 8px;

  &:focus {
    border: 1.5px solid
      ${({ isError, theme }) =>
        isError ? theme.colors.error : theme.colors.black};
    outline: none;
  }
`;
