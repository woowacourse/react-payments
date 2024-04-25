import S from "./Input.styled";

interface Props extends React.HTMLProps<HTMLInputElement> {
  isError: boolean;
}

const Input = ({ isError, ...restProps }: Props) => {
  return <S.InputBox $isError={isError} {...restProps}></S.InputBox>;
};

export default Input;
