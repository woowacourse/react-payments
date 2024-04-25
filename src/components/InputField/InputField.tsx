import S from "./InputField.styled";
import Input from "../Input/Input";
import Select from "../Select/Select";

const InputField = Object.assign(S.InputField, {
  Label: S.Label,
  Inputs: S.Inputs,
  Input,
  Select,
  ErrorMessage: S.ErrorMessage,
});

export default InputField;
