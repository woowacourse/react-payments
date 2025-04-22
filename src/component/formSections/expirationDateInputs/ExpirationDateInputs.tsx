import FormField from "../../FormField";
import CardInput from "../../CardInput";
import type { CardInputProps } from "../../../types/CardInputTypes";
import type { ErrorMessagesProps } from "../../../types/ErrorMessagesType";
import type { Dispatch, SetStateAction } from "react";
import {
  validateCardExpirationDateMM,
  validateCardExpirationDateYY,
} from "../../../validation/validation";

interface ExpirationDateInputsProps {
  errorMessage: string;
  setCardInput: Dispatch<SetStateAction<CardInputProps>>;
  handleErrorMessages: (key: keyof ErrorMessagesProps, message: string) => void;
}

const ExpirationDateInputs = ({
  errorMessage,
  setCardInput,
  handleErrorMessages,
}: ExpirationDateInputsProps) => {
  const expirationDateKeys: (keyof Pick<CardInputProps, "MM" | "YY">)[] = [
    "MM",
    "YY",
  ];
  return (
    <FormField
      label="유효기간"
      errorMessage={errorMessage}
      id="expiration-date"
    >
      {expirationDateKeys.map((key) => (
        <CardInput
          id="expiration-date"
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
    </FormField>
  );
};

export default ExpirationDateInputs;
