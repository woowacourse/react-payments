import { ChangeEventHandler, ReactNode } from "react";
import S from "./style";
import { findFirstFilledElementIndex } from "../utils/arrayHelper";

interface Props {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  errorMessages: string[];
  children: ReactNode;
  label: string;
}

const InputField = ({ label, errorMessages, children }: Props) => {
  return (
    <S.InputFieldWrapper>
      <S.Label>{label}</S.Label>
      <S.InputsWrapper>{children}</S.InputsWrapper>
      <S.ErrorMessageWrapper>
        {errorMessages[findFirstFilledElementIndex(errorMessages)]}
      </S.ErrorMessageWrapper>
    </S.InputFieldWrapper>
  );
};

export default InputField;
