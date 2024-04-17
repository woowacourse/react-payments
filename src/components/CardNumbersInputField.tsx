import { Dispatch, SetStateAction, useState, useEffect } from "react";
import Input from "./Input";
import {
  CARD_NUMBER_UNIT_LENGTH,
  CARD_NUMBER_UNIT_PLACEHOLDER,
} from "../constants";

export default function CardNumbersInputField({
  cardNumbers,
  setCardNumbers,
  type,
}: {
  cardNumbers: string[];
  setCardNumbers: Dispatch<SetStateAction<string[]>>;
  type: "text" | "password";
}) {
  const [errorMessages, setErrorMessages] = useState<[number, string][]>([]);
  const [visibleErrorMessage, setVisibleErrorMessage] = useState("");

  const updateErrorMessage = (index: number, message: string) => {
    const errorMessageIndex = errorMessages.findIndex(([i, _]) => i === index);

    if (errorMessageIndex === -1)
      setErrorMessages([...errorMessages, [index, message]]);
    else {
      const updatedErrorMessages = [...errorMessages];
      updatedErrorMessages[errorMessageIndex] = [index, message];
      setErrorMessages(updatedErrorMessages);
    }
  };

  const removeErrorMessage = (index: number) => {
    const prevErrorMessages = [...errorMessages];
    setErrorMessages(prevErrorMessages.filter(([i]) => i !== index));
  };

  const handleChange = (e, index) => {
    let isError = false;

    if (isNaN(Number(e.target.value)) && e.target.value.length !== 0) {
      setVisibleErrorMessage("숫자를 입력해주세요.");
      // updateErrorMessage(index, "숫자를 입력해주세요.");

      // const updatedErrorStates = [...errorStates];
      // updatedErrorStates[index] = true;
      // setErrorStates(updatedErrorStates);
      return;
    }

    if (e.target.value.length < 4) {
      isError = true;
      updateErrorMessage(index, "4개의 숫자를 입력해주세요.");
      // const updatedErrorStates = [...errorStates];
      // updatedErrorStates[index] = true;
      // setErrorStates(updatedErrorStates);
    }

    setVisibleErrorMessage("");

    const updatedCardNumbers = [...cardNumbers];
    updatedCardNumbers[index] = e.target.value;
    setCardNumbers(updatedCardNumbers);

    console.log(e.target.value, index);
    if (e.target.value.length === 4) removeErrorMessage(index);
  };

  useEffect(() => {
    console.log(errorMessages);
  }, [errorMessages]);

  return (
    <>
      <div>카드 번호</div>
      {cardNumbers.map((cardNumber, i) => (
        <Input
          onChange={(e) => handleChange(e, i)}
          placeholder={CARD_NUMBER_UNIT_PLACEHOLDER}
          maxLength={4}
          value={cardNumber}
          type={i >= cardNumbers.length / 2 ? "password" : "type"}
          isError={errorMessages.filter(([index]) => index === i).length === 1}
        />
      ))}
      {(visibleErrorMessage !== "" || errorMessages.length !== 0) && (
        <div>
          {visibleErrorMessage !== ""
            ? visibleErrorMessage
            : errorMessages[errorMessages.length - 1][1]}
        </div>
      )}
    </>
  );
}
