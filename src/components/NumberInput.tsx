import styled from "@emotion/styled";
import { useEffect, useState } from "react";

interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: (value: string) => void;
  maxLength: number;
  extraErrorCondition?: boolean;
}

function NumberInput({
  value,
  setValue,
  maxLength,
  extraErrorCondition,
  ...rest
}: NumberInputProps) {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (value.length !== 0 && value.length !== maxLength) {
      setIsError(true);
      return;
    }
    if (extraErrorCondition) {
      setIsError(true);
      return;
    }

    setIsError(false);
  }, [value, maxLength, extraErrorCondition]);

  function handleValue(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    const numericRegex = /^[0-9]*$/;

    if (numericRegex.test(newValue)) {
      setValue(newValue);
    }
  }

  return (
    <Input
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      value={value}
      maxLength={maxLength}
      isError={isError}
      onChange={handleValue}
      {...rest}
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
