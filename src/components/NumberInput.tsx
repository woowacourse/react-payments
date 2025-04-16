import styled from "@emotion/styled";
import { useState } from "react";

interface NumberInputProps {
  maxLength: number;
  placeholder: string;
}

function NumberInput({ maxLength, placeholder }: NumberInputProps) {
  const [isError, setIsError] = useState(false);
  return (
    <Input
      type="number"
      maxLength={maxLength}
      placeholder={placeholder}
      isError={isError}
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
    border: 1.5px solid #000;
    outline: none;
  }
`;
