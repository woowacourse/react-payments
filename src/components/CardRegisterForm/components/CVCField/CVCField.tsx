import Input from "@/components/Input/Input";
import InputField from "@/components/InputField/InputField";
import InputFieldHeader from "@/components/InputFieldHeader/InputFieldHeader";
import { MESSAGE } from "@/constants/message";
import S from "../../style";

const CVCField = () => {
  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.CVC} />
      <InputField label={MESSAGE.INPUT_LABEL.CVC} errorMessages={[""]}>
        <Input
          isError={false}
          type="number"
          name={"cvc"}
          placeholder={MESSAGE.PLACEHOLDER.CVC}
          onChange={() => {}}
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default CVCField;
