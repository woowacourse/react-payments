import { validateCardNumber } from "../../validation/validation";
import InputGroup from "../inputGroup/InputGroup";
import CardInput from "../CardInput";
import type { ErrorMessagesProps } from "../../types/ErrorMessagesType";
import type { CardInputProps } from "../../types/CardInputTypes";
import type { Dispatch, SetStateAction } from "react";

interface CardNumberInputProps {
  getFirstCardNumberError: () => string;
  handleErrorMessages: (key: keyof ErrorMessagesProps, message: string) => void;
  setCardInput: Dispatch<SetStateAction<CardInputProps>>;
}

const CardNumberInput = ({
  getFirstCardNumberError,
  setCardInput,
  handleErrorMessages,
}: CardNumberInputProps) => {
  return (
    <InputGroup label="카드 번호" errorMessages={getFirstCardNumberError()}>
      <CardInput
        maxLength={4}
        placeholder="1234"
        setCardInput={setCardInput}
        validate={validateCardNumber}
        inputKey="first"
        handleErrorMessage={(message) => handleErrorMessages("first", message)}
      />
      <CardInput
        maxLength={4}
        placeholder="1234"
        validate={validateCardNumber}
        setCardInput={setCardInput}
        inputKey="second"
        handleErrorMessage={(message) => handleErrorMessages("second", message)}
      />
      <CardInput
        maxLength={4}
        placeholder="1234"
        setCardInput={setCardInput}
        validate={validateCardNumber}
        inputKey="third"
        handleErrorMessage={(message) => handleErrorMessages("third", message)}
      />
      <CardInput
        maxLength={4}
        placeholder="1234"
        setCardInput={setCardInput}
        validate={validateCardNumber}
        inputKey="fourth"
        handleErrorMessage={(message) => handleErrorMessages("fourth", message)}
      />
    </InputGroup>
  );
};

export default CardNumberInput;
