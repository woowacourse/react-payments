import FormField from "../FormField";
import CardInput from "../CardInput";
import type { CardInputProps } from "../../types/CardInputTypes";
import type { Dispatch, SetStateAction } from "react";
import { validateCardPassword } from "../../validation/validation";
import type { ErrorMessagesProps } from "../../types/ErrorMessagesType";

interface CardPasswordInputsProps {
  errorMessage: string;
  handleErrorMessages: (key: keyof ErrorMessagesProps, message: string) => void;
  setCardInput: Dispatch<SetStateAction<CardInputProps>>;
}

const CardPasswordInputs = ({
  errorMessage,
  handleErrorMessages,
  setCardInput,
}: CardPasswordInputsProps) => {
  return (
    <FormField
      label="카드 비밀번호 앞 두 자리"
      errorMessage={errorMessage}
      id="cardPassword"
    >
      <CardInput
        id="expiration-date"
        key="password"
        maxLength={2}
        placeholder="비밀번호 앞 두 자리"
        inputKey="password"
        setCardInput={setCardInput}
        handleErrorMessage={(message) =>
          handleErrorMessages("password", message)
        }
        validate={validateCardPassword}
      />
    </FormField>
  );
};

export default CardPasswordInputs;
