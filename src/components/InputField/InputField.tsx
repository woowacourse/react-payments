import S from "./InputField.styled";
import Input from "../Input/Input";

const InputField = Object.assign(S.InputField, {
  Label: S.Label,
  Inputs: S.Inputs,
  Input,
  ErrorMessage: S.ErrorMessage,
});

export default InputField;
