import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
  placeHolder: string;
  isError: boolean;
};

const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  padding-left: 10px;
  box-sizing: border-box;
  border: ${({ isError }) => {
    switch (isError) {
      case true:
        return '1px solid #FF3D3D;';
      case false:
        return '1px solid #ACACAC;';
    }
  }};
`;

const Input = ({ value, onChange, maxLength, placeHolder, isError }: InputProps) => {
  return (
    <StyledInput
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
      maxLength={maxLength}
      placeHolder={placeHolder}
      isError={isError}
    />
  );
};

export default Input;
