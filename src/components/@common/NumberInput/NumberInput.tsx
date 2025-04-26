import styled from "@emotion/styled";
import { forwardRef } from "react";

interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: (value: string) => void;
  maxLength: number;
  isError?: boolean;
  onComplete?: () => void;
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  function NumberInput(
    { value, setValue, maxLength, isError = false, onComplete, ...rest },
    ref
  ) {
    function handleValue(e: React.ChangeEvent<HTMLInputElement>) {
      const newValue = e.target.value;
      const numericRegex = /^[0-9]*$/;

      if (numericRegex.test(newValue)) {
        setValue(newValue);

        if (newValue.length === maxLength && onComplete) {
          onComplete();
        }
      }
    }

    return (
      <Input
        ref={ref}
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
);

export default NumberInput;

const Input = styled.input<{ isError: boolean }>`
  margin-top: 4px;
  width: 100%;
  border: 1px solid
    ${({ isError, theme }) =>
      isError ? theme.colors.error : theme.colors.gray};
  border-radius: 2px;
  height: 32px;
  padding: 8px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    border: 1.5px solid
      ${({ isError, theme }) =>
        isError ? theme.colors.error : theme.colors.black};
    outline: none;
  }
`;
