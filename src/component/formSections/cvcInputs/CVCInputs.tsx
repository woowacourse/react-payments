import { validateCardCVC } from "../../../validation/validation";
import CardInput from "../../CardInput";
import FormField from "../../FormField";
import type { ErrorMessagesProps } from "../../../types/ErrorMessagesType";
import type { Dispatch, SetStateAction } from "react";
import type { CardInputProps } from "../../../types/CardInputTypes";

interface CVCInputsProps {
  errorMessages: string;
  setCardInput: Dispatch<SetStateAction<CardInputProps>>;
  handleErrorMessages: (key: keyof ErrorMessagesProps, message: string) => void;
}

const CVCInputs = ({
  errorMessages,
  setCardInput,
  handleErrorMessages,
}: CVCInputsProps) => {
  return (
    <FormField label="CVC" errorMessages={errorMessages} id="cvc">
      <CardInput
        id="cvc"
        maxLength={3}
        placeholder="123"
        validate={validateCardCVC}
        setCardInput={setCardInput}
        inputKey="CVC"
        handleErrorMessage={(message) => handleErrorMessages("CVC", message)}
      />
    </FormField>
  );
};

export default CVCInputs;
