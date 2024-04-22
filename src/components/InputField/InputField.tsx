import { ChangeEventHandler, ReactNode } from "react";
import S from "./style";

interface Props {
  errorMessage: string;
  children: ReactNode;
  label: string;
}

const InputField = ({ label, errorMessage, children }: Props) => {
  return (
    <S.InputFieldWrapper>
      <S.Label>{label}</S.Label>
      <S.InputsWrapper>{children}</S.InputsWrapper>
      <S.ErrorMessageWrapper>{errorMessage}</S.ErrorMessageWrapper>
    </S.InputFieldWrapper>
  );
};

export default InputField;
