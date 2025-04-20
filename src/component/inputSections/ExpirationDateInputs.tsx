import InputGroup from "../inputGroup/InputGroup";
import CardInput from "../CardInput";
import type { CardInputProps } from "../../types/CardInputTypes";
import type { ErrorMessagesProps } from "../../types/ErrorMessagesType";
import type { Dispatch, SetStateAction } from "react";
import {
  validateCardExpirationDateMM,
  validateCardExpirationDateYY,
} from "../../validation/validation";

interface ExpirationDateInputsProps {
  getFirstPeriodError: () => string;
  setCardInput: Dispatch<SetStateAction<CardInputProps>>;
  handleErrorMessages: (key: keyof ErrorMessagesProps, message: string) => void;
}

const ExpirationDateInputs = ({
  getFirstPeriodError,
  setCardInput,
  handleErrorMessages,
}: ExpirationDateInputsProps) => {
  return (
    <InputGroup label="유효기간" errorMessages={getFirstPeriodError()}>
      <CardInput
        maxLength={2}
        placeholder="MM"
        validate={validateCardExpirationDateMM}
        setCardInput={setCardInput}
        inputKey="MM"
        handleErrorMessage={(message) => handleErrorMessages("MM", message)}
      />
      <CardInput
        maxLength={2}
        placeholder="YY"
        validate={validateCardExpirationDateYY}
        setCardInput={setCardInput}
        inputKey="YY"
        handleErrorMessage={(message) => handleErrorMessages("YY", message)}
      />
    </InputGroup>
  );
};

export default ExpirationDateInputs;
