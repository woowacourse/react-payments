import { ChangeEventHandler } from "react";
import S from "./style";
interface Props {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  errorMessage: string;
}

const InputField = ({
  // placeholder,
  // onChange,
  // value,
  errorMessage,
  // children,
}: Props) => {
  return (
    <S.InputsWrapper>
      {/* {children} */}
      <S.ErrorMessageWrapper>{errorMessage}</S.ErrorMessageWrapper>
    </S.InputsWrapper>
  );
};

export default InputField;
