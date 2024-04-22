import Field from "../layout/Field/Field";
import Input from "../common/Input/Input";
import { ADD_CARD_FORM_FIELDS } from "../../constants/messages";
import { ChangeEvent, FocusEvent, memo } from "react";
const { OWNER_NAME } = ADD_CARD_FORM_FIELDS;

interface OwnerNameInputProps {
  ownerName: {
    data: Record<string, { value: string; isError: boolean }>;
    status: { isError: boolean; errorMessage: string };
  };
  changeOwnerName: (event: ChangeEvent<HTMLInputElement>) => void;
  blurOwnerName: (event: FocusEvent<HTMLInputElement>) => void;
}

const OwnerNameInput = memo(
  ({ ownerName, changeOwnerName, blurOwnerName }: OwnerNameInputProps) => {
    return (
      <Field
        title={OWNER_NAME.title}
        labelText={OWNER_NAME.labelText}
        errorMessage={ownerName.status.errorMessage}
      >
        {Object.entries(ownerName.data).map(([name, { value, isError }]) => (
          <Input
            key={name}
            name={name}
            placeholder={OWNER_NAME.placeholder}
            value={value}
            isError={isError}
            isRequired={true}
            onChange={changeOwnerName}
            onBlur={blurOwnerName}
          ></Input>
        ))}
      </Field>
    );
  }
);

export default OwnerNameInput;
