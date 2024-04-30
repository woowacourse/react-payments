import styled from "@emotion/styled";
import THEME from "../../../styles/theme";

interface InputBoxProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size: "small" | "medium" | "large";
  placeholder: string;
  isError: boolean;
  id?: string;
  name?: string;
  type?: string;
  autoFocus?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
}

const sizeWidthMap = {
  small: "23%",
  medium: "48%",
  large: "100%",
};

const InputBox = ({
  inputValue,
  handleChange,
  size,
  placeholder,
  isError,
  ...props
}: InputBoxProps) => {
  const widthPercentage = sizeWidthMap[size];

  return (
    <Input
      type="text"
      value={inputValue}
      onChange={handleChange}
      style={{ width: `${widthPercentage}` }}
      placeholder={placeholder}
      isError={isError}
      {...props}
    />
  );
};

export default InputBox;

const Input = styled.input<{ isError: boolean }>`
  border: 1.01px solid ${(props) => (props.isError ? THEME.DEFAULT.red : THEME.DEFAULT.grey)};
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
    color: ${THEME.DEFAULT.grey};
  }
`;
