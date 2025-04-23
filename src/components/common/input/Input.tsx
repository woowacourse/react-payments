import styled from 'styled-components';

type InputProps = {
  maxLength: number;
  placeholder: string;
  width?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isError: boolean;
  isPassword: boolean;
};

const StyledInput = styled.input<{ width?: string; isError: boolean }>`
  width: ${(props) => props.width || '100%'};
  border-radius: 2px;
  border: 1.015px solid ${(props) => (props.isError ? 'red' : '#acacac')};
  display: flex;
  height: 32px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;

function Input({ width, maxLength, placeholder, onChange, value, isError, isPassword }: InputProps) {
  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      isError={isError}
      type={isPassword ? 'password' : 'text'}
    />
  );
}

export default Input;
