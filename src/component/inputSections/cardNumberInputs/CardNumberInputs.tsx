import { validateCardNumber } from "../../../validation/validation";
import InputGroup from "../../InputGroup";
import CardInput from "../../CardInput";
import type { ErrorMessagesProps } from "../../../types/ErrorMessagesType";
import type { CardInputProps } from "../../../types/CardInputTypes";
import type { Dispatch, SetStateAction } from "react";

interface CardNumberInputProps {
  errorMessages: string;
  handleErrorMessages: (key: keyof ErrorMessagesProps, message: string) => void;
  setCardInput: Dispatch<SetStateAction<CardInputProps>>;
}

const CardNumberInputs = ({
  errorMessages,
  setCardInput,
  handleErrorMessages,
}: CardNumberInputProps) => {
  const cardNumberKeys: (keyof Pick<
    CardInputProps,
    "first" | "second" | "third" | "fourth"
  >)[] = ["first", "second", "third", "fourth"];

  return (
    <InputGroup
      label="카드 번호"
      errorMessages={errorMessages}
      id="card-number"
    >
      {cardNumberKeys.map((key) => (
        <CardInput
          key={key}
          id="card-number"
          maxLength={4}
          placeholder="1234"
          setCardInput={setCardInput}
          validate={validateCardNumber}
          inputKey={key}
          handleErrorMessage={(message: string) =>
            handleErrorMessages(key, message)
          }
        />
      ))}
    </InputGroup>
  );
};

export default CardNumberInputs;
