import S from "./style";

interface Props extends React.ComponentPropsWithRef<"input"> {
  isError: boolean;
}

const Input = ({ isError, ...restProps }: Props) => {
  return <S.InputBox $isError={isError} {...restProps}></S.InputBox>;
};

export default Input;
