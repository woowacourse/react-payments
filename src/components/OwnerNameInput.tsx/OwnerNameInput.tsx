import Field from "../layout/Field/Field";
import Input from "../common/Input/Input";
import { ADD_CARD_FORM_FIELDS } from "../../constants/messages";
import { ChangeEvent, RefObject, memo, KeyboardEvent } from "react";
const { OWNER_NAME } = ADD_CARD_FORM_FIELDS;

interface OwnerNameInputProps {
  ownerName: {
    data: Record<string, { value: string; isError: boolean }>;
    status: { isError: boolean; errorMessage: string };
  };
  changeOwnerName: (event: ChangeEvent<HTMLInputElement>) => void;
  refs: { ownerNameRef: RefObject<HTMLInputElement> };
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const OwnerNameInput = memo(
  ({ ownerName, changeOwnerName, refs, onKeyDown }: OwnerNameInputProps) => {
    return (
      <Field
        title={OWNER_NAME.title}
        description="입력 완료 후 엔터 키를 눌러주세요"
        labelText={OWNER_NAME.labelText}
        errorMessage={ownerName.status.errorMessage}
      >
        {Object.entries(ownerName.data).map(
          ([name, { value, isError }], index) => (
            <Input
              key={name}
              name={name}
              placeholder={OWNER_NAME.placeholder}
              value={value}
              inputRef={Object.values(refs)[index]}
              isError={isError}
              isRequired={true}
              autoFocus={true}
              onChange={changeOwnerName}
              onKeyDown={onKeyDown}
            ></Input>
          )
        )}
      </Field>
    );
  }
);

export default OwnerNameInput;
