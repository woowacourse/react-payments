import styled from "@emotion/styled";
import { inputWidthSize } from "../../../constants/inputBoxWitdhSize";

interface InputBoxProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size: "small" | "medium" | "large";
  placeholder: string;
  isError: boolean;
  id?: string;
  name?: string;
}

const InputBox = ({
  inputValue,
  handleChange,
  size,
  placeholder,
  isError,
  ...props
}: InputBoxProps) => {
  return (
    <Input
      type="text"
      value={inputValue}
      onChange={handleChange}
      style={{ width: inputWidthSize[size] }}
      placeholder={placeholder}
      isError={isError}
      {...props}
    />
  );
};

export default InputBox;

const Input = styled.input<{ isError: boolean }>`
  border: 1.01px solid rgba(172, 172, 172, 1);
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  box-sizing: border-box;
  font-family: Inter;
  font-size: 11px;
  font-weight: 400;
  line-height: 14.88px;
  text-align: left;
  outline: none;

  ::placeholder {
    color: rgba(172, 172, 172, 1);
  }

  &:focus {
    border: 1.01px solid ${(props) => (props.isError ? "rgba(255, 61, 61, 1)" : "rgba(0, 0, 0, 1)")};
  }
`;
