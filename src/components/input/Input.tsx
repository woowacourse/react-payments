import * as Styled from "./Input.styled";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError?: boolean;
}

const Input = ({ isError, ...restProps }: InputProps) => {
  return (
    <>
      <Styled.Input
        isError={isError}
        {...restProps}
      ></Styled.Input>
    </>
  );
};

export default Input;
