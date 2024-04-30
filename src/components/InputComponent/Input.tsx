import styled from 'styled-components';

const InputContainer = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.color};
  outline-color: ${(props) => props.color};
  border-radius: 3px;
`;
interface Props {
  type?: string;
  maxLength: number;
  value: string;
  placeholder: string;
  isError?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef?: (element: HTMLInputElement) => void;
}
export default function Input({
  type = 'string',
  maxLength,
  value,
  placeholder,
  isError = false,
  onChange,
  onKeyDown,
  inputRef,
}: Props) {
  return (
    <InputContainer
      color={isError ? 'red' : 'grey'}
      type={type}
      maxLength={maxLength}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      ref={inputRef}
    />
  );
}
