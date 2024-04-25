import styled from "styled-components";

interface InputProps {
  maxLength: number;
  value: string;
  type?: string;
  placeholder?: string;
  isError: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
}

export default function Input({
  maxLength,
  value,
  type,
  placeholder,
  isError,
  onChange,
  onBlur,
  onFocus,
}: InputProps) {
  return (
    <SInput
      type={type ? type : "text"}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      isError={isError}
    ></SInput>
  );
}

const SInput = styled.input<{
  isError: boolean;
}>`
  width: 100%;
  height: 15px;
  padding: 8px 15px 8px 8px;
  gap: 8px;
  border: 1px solid
    ${(props) => (props.isError ? "red" : "rgba(172, 172, 172, 1)")};
  border-radius: 2px;
  font-family: Inter;
  font-size: 11px;
  font-weight: 400;
  line-height: 14.88px;
  text-align: left;

  &::placeholder {
    color: rgba(172, 172, 172, 1);
  }
`;
