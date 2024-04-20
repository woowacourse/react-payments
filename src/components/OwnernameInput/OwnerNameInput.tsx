import Input from "../common/Input/Input";
import Field from "../layout/Field/Field";

import useAddCardInput from "../../hooks/useAddCardInput";

import { ADD_CARD_FORM_FIELDS, ERRORS } from "../../constants/messages";
import { isCharacter } from "../../utils/validators";

const { OWNER_NAME } = ADD_CARD_FORM_FIELDS;

interface OwnerNameInputProps {
  setCardData: (key: keyof CardInfo, newData: CardInfo[keyof CardInfo]) => void;
}

function OwnerNameInput({ setCardData }: OwnerNameInputProps) {
  const validateInputOnChange = ({
    value,
  }: {
    name?: string;
    value: string;
  }) => {
    if (value !== "" && !isCharacter(value)) {
      return { isValid: false, errorMsg: ERRORS.isNotAlphabet };
    }
    return { isValid: true, errorMessage: "" };
  };

  const processData = () => {
    setCardData("ownerName", Object.values(ownerName));
  };

  const {
    values: ownerName,
    errorMessage,
    isError,
    onChange,
    onBlur,
  } = useAddCardInput<OwnerName>({
    initialValues: {
      ownerName: "",
    },
    initialErrors: {
      ownerName: false,
    },
    validateInputOnChange,
    processData,
  });

  return (
    <Field
      title={OWNER_NAME.title}
      labelText={OWNER_NAME.labelText}
      errorMessage={errorMessage}
    >
      {Object.keys(ownerName).map((name) => (
        <Input
          key={name}
          name={name as keyof OwnerName}
          placeholder={OWNER_NAME.placeholder}
          value={ownerName[name as keyof OwnerName]}
          isError={isError[name as keyof OwnerName]}
          isRequired={true}
          onChange={onChange}
          onBlur={onBlur}
        ></Input>
      ))}
    </Field>
  );
}

export default OwnerNameInput;
