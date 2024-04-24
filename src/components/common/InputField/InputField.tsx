import { ReactNode } from "react";
import S from "./InputField.styled";
import Input from "../../Input/Input";

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
