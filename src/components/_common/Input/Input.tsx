import S from "./style";
import { forwardRef } from "react";
interface Props extends React.HTMLProps<HTMLInputElement> {
  isError: boolean;
  maxLength?: number;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ isError, maxLength = 2, ...restProps }, ref) => {
    return (
      <S.InputBox
        ref={ref}
        $isError={isError}
        maxLength={maxLength}
        {...restProps}
      ></S.InputBox>
    );
  }
);

export default Input;
