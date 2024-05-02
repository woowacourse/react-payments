import React, { ChangeEventHandler, ReactNode } from "react";
import S from "./style";

interface Props {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  errorMessages: string[] | null;
  children: ReactNode;
  label?: string;
  isErrorShow?: boolean;
}

const InputField = ({ label, errorMessages, children, isErrorShow }: Props) => {
  return (
    <S.InputFieldWrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.InputsWrapper>{children}</S.InputsWrapper>
      <S.ErrorMessageWrapper>
        {isErrorShow && errorMessages && errorMessages.find((e) => e)}
      </S.ErrorMessageWrapper>
    </S.InputFieldWrapper>
  );
};

const InputFieldMemo = React.memo(InputField);
export default InputFieldMemo;
