import Field from "../layout/Field/Field";
import Input from "../common/Input/Input";
import { ADD_CARD_FORM_FIELDS } from "../../constants/messages";
import { ChangeEvent, RefObject, memo, KeyboardEvent } from "react";
const { OWNER_NAME } = ADD_CARD_FORM_FIELDS;
import { InputType } from "@/types/card";

interface OwnerNameInputProps {
  ownerName: InputType;
  errorMessage: string;
  changeOwnerName: (event: ChangeEvent<HTMLInputElement>) => void;
  ownerNameRef: RefObject<HTMLInputElement>;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const OwnerNameInput = memo(
  ({ ownerName, errorMessage, changeOwnerName, ownerNameRef, onKeyDown }: OwnerNameInputProps) => {
    return (
      <Field
        title={OWNER_NAME.title}
        description="입력 완료 후 엔터 키를 눌러주세요"
        labelText={OWNER_NAME.labelText}
        errorMessage={errorMessage}
      >
        <Input
          key="ownerName"
          name="ownerName"
          placeholder={OWNER_NAME.placeholder}
          value={ownerName.value}
          inputRef={ownerNameRef}
          isError={ownerName.isError}
          isRequired={true}
          autoFocus={true}
          onChange={changeOwnerName}
          onKeyDown={onKeyDown}
        ></Input>
      </Field>
    );
  }
);

export default OwnerNameInput;
