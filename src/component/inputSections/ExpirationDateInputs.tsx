import InputGroup from "../inputGroup/InputGroup";
import CardInput from "../CardInput";
import type { CardInputProps, InputKeyType } from "../../types/CardInputTypes";
import type { ErrorMessagesProps } from "../../types/ErrorMessagesType";
import type { Dispatch, SetStateAction } from "react";
import {
  validateCardExpirationDateMM,
  validateCardExpirationDateYY,
} from "../../validation/validation";

interface ExpirationDateInputsProps {
  errorMessages: string;
  setCardInput: Dispatch<SetStateAction<CardInputProps>>;
  handleErrorMessages: (key: keyof ErrorMessagesProps, message: string) => void;
}

const ExpirationDateInputs = ({
  errorMessages,
  setCardInput,
  handleErrorMessages,
}: ExpirationDateInputsProps) => {
  const expirationDateKeys: InputKeyType[] = ["MM", "YY"];
  return (
    <InputGroup label="유효기간" errorMessages={errorMessages}>
      {expirationDateKeys.map((key) => (
        <CardInput
          key={key}
          maxLength={2}
          placeholder={key}
          validate={
            key === "MM"
              ? validateCardExpirationDateMM
              : validateCardExpirationDateYY
          }
          setCardInput={setCardInput}
          inputKey={key}
          handleErrorMessage={(message) => handleErrorMessages(key, message)}
        />
      ))}
    </InputGroup>
  );
};

export default ExpirationDateInputs;
