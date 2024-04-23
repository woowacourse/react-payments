import S from "../../style";
import InputFieldHeader from "@/components/InputFieldHeader/InputFieldHeader";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/InputField/InputField";
import Input from "@/components/Input/Input";
import useInput from "@/hooks/useInput";
interface Props {
  passwordState: ReturnType<typeof useInput>;
}

const PasswordField = ({ passwordState }: Props) => {
  const { value, onChange } = passwordState;
  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.PASSWORD} />
      <InputField label={MESSAGE.INPUT_LABEL.PASSWORD} errorMessages={[""]}>
        <Input
          placeholder={MESSAGE.PLACEHOLDER.PASSWORD}
          isError={false}
          type="text"
          onChange={() => {}}
          onBlur={() => {}}
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default PasswordField;
