import styled from 'styled-components';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type: 'text' | 'number' | 'email' | 'password' | 'tel';
  placeholder: string;
  id: string;
  isError: boolean;
  maxLength?: number;
};

const StyledInput = styled.input<{ $isError: boolean }>`
  border: 1px solid ${(props) => (props.$isError ? '#ff3d3d' : '#acacac')};
  padding: 8px;
  font-size: 0.6875rem;
  border-radius: 2px;
  min-width: 71.25px;
  height: 32px;
  flex: 1;

  &:focus {
    border: 1px solid ${(props) => (props.$isError ? '#ff3d3d' : '#000')};
  }
`;

export default function Input({
  value,
  onChange,
  onFocus,
  onBlur,
  type,
  placeholder,
  id,
  isError,
  maxLength,
}: InputProps) {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      type={type}
      maxLength={maxLength}
      placeholder={placeholder}
      id={id}
      $isError={isError}
    />
  );
}
