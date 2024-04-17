import S from "./style";

interface Props {
  placeholder: string;
  isError: boolean;
}

const Input = ({ placeholder, isError }: Props) => {
  return <S.InputBox isError={isError} placeholder={placeholder}></S.InputBox>;
};

export default Input;
