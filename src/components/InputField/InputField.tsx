import { ChangeEventHandler, ReactNode } from "react";
import S from "./style";

interface Props {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  errorMessages: (string | null)[];
  children: ReactNode;
  label: string;
  showErrors: boolean;
}

const InputField = ({ label, errorMessages, showErrors, children }: Props) => {
  return (
    <S.InputFieldWrapper>
      <S.Label>{label}</S.Label>
      <S.InputsWrapper>{children}</S.InputsWrapper>
      <S.ErrorMessageWrapper>
        {showErrors && errorMessages.find((e) => e)}
      </S.ErrorMessageWrapper>
    </S.InputFieldWrapper>
  );
};

export default InputField;

//[findFirstFilledElementIndex(errorMessages)];
