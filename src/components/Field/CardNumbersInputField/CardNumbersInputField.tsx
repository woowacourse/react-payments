import { Dispatch, SetStateAction, useState } from "react";
import Input from "../../common/Input/Input";
import styles from "../../../App.module.css";

import {
  CARD_NUMBER_UNIT_PLACEHOLDER,
  CARD_NUMBER_UNIT_LENGTH,
} from "../../../constants";

export default function CardNumbersInputField({
  cardNumbers,
  setCardNumbers,
}: {
  cardNumbers: string[];
  setCardNumbers: Dispatch<SetStateAction<string[]>>;
}) {
  const [errorMessages, setErrorMessages] = useState<[number, string][]>([]);
  const [visibleErrorMessage, setVisibleErrorMessage] = useState<
    [number, string] | []
  >([]);

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
    if (isNaN(Number(e.target.value)) && e.target.value.length !== 0) {
      setVisibleErrorMessage([index, "숫자를 입력해주세요."]);
      return;
    }

    if (e.target.value.length < 4) {
      updateErrorMessage(index, "4개의 숫자를 입력해주세요.");
    }

    setVisibleErrorMessage([]);

    const updatedCardNumbers = [...cardNumbers];
    updatedCardNumbers[index] = e.target.value;
    setCardNumbers(updatedCardNumbers);

    if (e.target.value.length === 4) removeErrorMessage(index);
  };

  const checkError = (index: number): boolean => {
    return errorMessages.filter(([i]) => i === index).length === 1;
  };

  return (
    <>
      <div className={styles.label}>카드 번호</div>
      <div className={styles.horizon__gap__container}>
        {cardNumbers.map((cardNumber, i) => (
          <Input
            onChange={(e) => handleChange(e, i)}
            placeholder={CARD_NUMBER_UNIT_PLACEHOLDER}
            maxLength={CARD_NUMBER_UNIT_LENGTH}
            value={cardNumber}
            type={i >= cardNumbers.length / 2 ? "password" : "type"}
            isError={checkError(i)}
          />
        ))}
      </div>
      {(visibleErrorMessage.length !== 0 || errorMessages.length !== 0) && (
        <div className={styles.error_message}>
          {visibleErrorMessage.length !== 0
            ? visibleErrorMessage[1]
            : errorMessages[errorMessages.length - 1][1]}
        </div>
      )}
    </>
  );
}
