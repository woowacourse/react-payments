import { ChangeEvent } from "react";
import S from "./style";

interface Props extends React.HTMLProps<HTMLInputElement> {
  placeholder?: string;
  isError: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, isError, onChange, ...restProps }: Props) => {
  return (
    <S.InputBox
      onChange={onChange}
      $isError={isError}
      placeholder={placeholder}
      {...restProps}
    ></S.InputBox>
  );
};

export default Input;
