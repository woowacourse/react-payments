import styled from 'styled-components';
import { useState, useRef, forwardRef, useImperativeHandle } from 'react';

export interface InputProps {
  maxLength: number;
  placeholder: string;
  validate: (value: string) => string | undefined;
  handleErrorMessage: (input: string) => void;
  onChange: (value: string) => void;
  type?: string;
  onComplete?: () => void; // 입력이 완료되었을 때 호출될 콜백
  name?: string; // 식별을 위한 이름 추가
}

export interface InputRef {
  focus: () => void;
  getValue: () => string;
}

const InputField = styled.input<{ $isError: boolean }>`
  width: 100%;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-color: ${({ $isError, theme }) =>
    $isError ? theme.colors.red : theme.colors.gray};
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: ${({ $isError, theme }) =>
      $isError ? theme.colors.red : theme.colors.black};
  }
`;

const Input = forwardRef<InputRef, InputProps>(
  (
    {
      maxLength,
      placeholder,
      validate,
      handleErrorMessage,
      onChange,
      onComplete,
      type = 'text',
      name,
    },
    ref,
  ) => {
    const [isError, setIsError] = useState(false);
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      getValue: () => value,
    }));

    const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      const errorMessage = validate(inputValue);
      if (errorMessage && errorMessage.length > 0) {
        handleErrorMessage(errorMessage);
        setIsError(true);
        setValue(inputValue);
        return;
      }

      handleErrorMessage('');
      setIsError(false);
      setValue(inputValue);
      onChange(inputValue);

      if (inputValue.length === maxLength) {
        if (onComplete) {
          onComplete();
        }
      }
    };

    return (
      <InputField
        ref={inputRef}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={handleCardNumber}
        value={value}
        inputMode="numeric"
        pattern="[0-9]*"
        $isError={isError}
        type={type}
        name={name}
      />
    );
  },
);

export default Input;
