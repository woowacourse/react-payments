import { ChangeEvent } from "react";
import S from "./style";

interface Props {
  placeholder?: string;
  isError: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, isError, onChange }: Props) => {
  return (
    <S.InputBox
      onChange={onChange}
      isError={isError}
      placeholder={placeholder}
    ></S.InputBox>
  );
};

export default Input;
