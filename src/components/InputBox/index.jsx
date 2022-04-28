import { InputWrapper } from "./style";

function InputBox({ size, background, border, children, error }) {
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
