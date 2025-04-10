import styled from "styled-components";

interface InputProps {
  isFocused: boolean;
  isError: boolean;
}

const CardInput = styled.input<InputProps>`
  border-radius: 4px;
  border: 2px solid;
  border-color: ${(props) => (props.isError ? "red" : props.isFocused ? "black" : "lightgray")};
  width: 240px;
  height: 30px;
  outline: none;
`;

interface Props {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  isFocused?: boolean;
  isError?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

const InputExpiration = ({ 
  value, 
  placeholder, 
  onChange, 
  inputRef,
  isFocused = false,
  isError = false,
  onFocus,
  onBlur
}: Props) => {
  const INPUT_MAX_LENGTH = 2;
  
  return (
    <CardInput
      type="text"
      inputMode="numeric"
      value={value}
      maxLength={INPUT_MAX_LENGTH}
      placeholder={placeholder}
      onChange={onChange}
      ref={inputRef}
      isFocused={isFocused}
      isError={isError}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default InputExpiration;
