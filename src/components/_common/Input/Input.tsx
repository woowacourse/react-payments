import S from "./style";
import { forwardRef } from "react";
interface Props extends React.HTMLProps<HTMLInputElement> {
  isError: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ isError, ...restProps }, ref) => {
    return (
      <S.InputBox
        ref={ref}
        $isError={isError}
        maxLength={2}
        {...restProps}
      ></S.InputBox>
    );
  }
);

export default Input;
