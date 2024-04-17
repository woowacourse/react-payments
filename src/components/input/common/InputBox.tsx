import styled from "@emotion/styled";

interface InputBoxProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size: "small" | "medium" | "large";
  placeholder: string;
  id?: string;
  name?: string;
}

const InputBox = ({
  inputValue,
  handleChange,
  size,
  placeholder,
  ...props
}: InputBoxProps) => {
  const sizeWidthMap = {
    small: 23,
    medium: 48,
    large: 100,
  };

  const widthPercentage = sizeWidthMap[size];

  return (
    <Input
      value={inputValue}
      onChange={handleChange}
      style={{ width: `${widthPercentage}%` }}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default InputBox;

const Input = styled.input`
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

  ::placeholder {
    color: rgba(172, 172, 172, 1);
  }
`;
