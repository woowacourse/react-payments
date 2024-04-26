import S from "./InputField.styled";
import Input from "../Input/Input";
import Select from "../Select/Select";

interface InputFieldWrapperProp {
  children: ReturnType<typeof InputsWrapper | typeof Select | typeof InputsWrapper | typeof S.ErrorMessage>;
}
interface InputsProp {
  children: ReturnType<typeof Input>;
}

const InputFieldWrapper = ({ children }: InputFieldWrapperProp) => <S.InputField>{children}</S.InputField>;
const InputsWrapper = ({ children }: InputsProp) => <S.Inputs>{children}</S.Inputs>;
const InputField = Object.assign(InputFieldWrapper, {
  Label: S.Label,
  Inputs: S.Inputs,
  Input,
  Select,
  ErrorMessage: S.ErrorMessage,
});

export default InputField;
