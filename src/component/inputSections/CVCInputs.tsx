import { validateCardCVC } from "../../validation/validation";
import CardInput from "../CardInput";
import InputGroup from "../inputGroup/InputGroup";
import type { ErrorMessagesProps } from "../../types/ErrorMessagesType";
import type { Dispatch, SetStateAction } from "react";
import type { CardInputProps } from "../../types/CardInputTypes";

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
    <InputGroup label="CVC" errorMessages={errorMessages}>
      <CardInput
        maxLength={3}
        placeholder="123"
        validate={validateCardCVC}
        setCardInput={setCardInput}
        inputKey="CVC"
        handleErrorMessage={(message) => handleErrorMessages("CVC", message)}
      />
    </InputGroup>
  );
};

export default CVCInputs;
