import InputFieldHeader from "@/components/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/InputField/InputField";
import Input from "@/components/Input/Input";
import { ChangeEvent, useState } from "react";
import { validateOwnerName } from "@/utils/validation";
import { MAX_LENGTH } from "@/constants/condition";
import useInput from "@/hooks/useInput";

interface Props {
  ownerNameState: ReturnType<typeof useInput>;
}

const OwnerNameField = ({ ownerNameState }: Props) => {
  const { value: ownerName, onChange: onChangeOwnerName } = ownerNameState;

  const [ownerNameErrorMessage, setOwnerNameErrorMessage] = useState<
    string | null
  >(null);

  const onValidateOwnerName = () => {
    const errorMessage = validateOwnerName(ownerName[0]);
    setOwnerNameErrorMessage(errorMessage);
  };

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader title={MESSAGE.INPUT_INFO_TITLE.OWNER_NAME} />
      <InputField
        label={MESSAGE.INPUT_LABEL.OWNER_NAME}
        errorMessages={[ownerNameErrorMessage]}
      >
        <Input
          placeholder={MESSAGE.PLACEHOLDER.OWNER_NAME}
          isError={!!ownerNameErrorMessage}
          type="text"
          maxLength={MAX_LENGTH.OWNER_NAME}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            e.target.value = e.target.value.toUpperCase();
            onChangeOwnerName(e);
          }}
          onBlur={() => {
            onValidateOwnerName();
          }}
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default OwnerNameField;
