import { InputWrapper } from "./style";

export interface InputBoxStyleProps {
  size: string;
  background: string;
  border: string;
  error: boolean;
}

interface InputBoxProps extends InputBoxStyleProps {
  children: React.ReactNode;
}

function InputBox({
  size,
  background,
  border,
  children,
  error,
}: InputBoxProps) {
  return (
    <InputWrapper
      background={background}
      border={border}
      size={size}
      error={error}
    >
      {children}
    </InputWrapper>
  );
}

export default InputBox;
