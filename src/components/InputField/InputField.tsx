import { ChangeEventHandler, ReactNode } from "react";
import S from "./style";
import Input from "../Input/Input";

interface Props {
  errorMessage: string;
  children: ReactNode;
  label: string;
}

const InputFieldContainer = S.InputFieldWrapper;

const InputField = Object.assign(InputFieldContainer, {
  Label: S.Label,
  Inputs: S.InputsWrapper,
  Input: Input,
  ErrorMessage: S.ErrorMessageWrapper,
});
export default InputField;

// const InputField = ({ label, errorMessage, children }: Props) => {
//   return (
//     <S.InputFieldWrapper>
//       <S.Label>{label}</S.Label>
//       <S.InputsWrapper>{children}</S.InputsWrapper>
//       <S.ErrorMessageWrapper>{errorMessage}</S.ErrorMessageWrapper>
//     </S.InputFieldWrapper>
//   );
// };

// export default InputField;
