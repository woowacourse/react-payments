import styled from '@emotion/styled';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
  placeHolder: string;
  isError: boolean;
};

const StyledInput = styled.input<InputProps>`
  height: 32px;
  border-radius: 2px;
  padding-left: 10px;
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
      onChange={onChange}
      maxLength={maxLength}
      placeHolder={placeHolder}
      isError={isError}
    />
  );
};

export default Input;
