import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import isZeroOrExactLength from '../utils/isExactLength';

interface NumberInputProps {
  value: string;
  setValue: (value: string) => void;
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
    if (!isZeroOrExactLength(value, maxLength)) {
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
    const isNumeric = /^[0-9]*$/.test(e.target.value);

    if (isNumeric) {
      setValue(e.target.value);
    }
  }

  return (
    <Input
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
  border: 1px solid ${({ isError }) => (isError ? '#FF3D3D' : '#ACACAC')};
  border-radius: 2px;
  height: 32px;
  padding: 8px;

  &:focus {
    border: 1.5px solid ${({ isError }) => (isError ? '#FF3D3D' : '#000')};
    outline: none;
  }
`;
