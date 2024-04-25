import React from "react";
import * as Styled from "./Input.styled";

export interface InputProps extends React.ComponentPropsWithRef<"input"> {
  isError?: boolean;
}

const Input = ({ isError, ref, ...restProps }: InputProps) => {
  return (
    <>
      <Styled.Input
        isError={isError}
        ref={ref}
        {...restProps}
      ></Styled.Input>
    </>
  );
};

export default React.forwardRef(Input);
