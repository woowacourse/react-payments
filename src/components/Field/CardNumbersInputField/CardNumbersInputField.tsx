import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Input from "../../common/Input/Input";
import styles from "../../../pages/CardInputPage/CardInputPage.module.css";

import {
  CARD_NUMBER_UNIT_PLACEHOLDER,
  CARD_NUMBER_UNIT_LENGTH,
} from "../../../constants";

interface CardNumberErrorMessage {
  index: number;
  message: string;
}

export default function CardNumbersInputField({
  cardNumbers,
  setCardNumbers,
  isCompletedSections,
  setIsCompletedSections,
  isOpenForm,
  setIsOpenForm,
}: {
  cardNumbers: string[];
  setCardNumbers: Dispatch<SetStateAction<string[]>>;
  isCompletedSections: boolean[];
  setIsCompletedSections: Dispatch<SetStateAction<boolean[]>>;
  isOpenForm: boolean[];
  setIsOpenForm: Dispatch<SetStateAction<boolean[]>>;
}) {
  const [numberLengthErrorMessages, setNumberLengthErrorMessages] = useState<
    CardNumberErrorMessage[]
  >([]);
  const [nanErrorMessage, setNanErrorMessage] =
    useState<CardNumberErrorMessage | null>(null);

  const updateErrorMessage = (index: number, message: string) => {
    const errorMessageIndex = numberLengthErrorMessages.findIndex(
      (error) => error.index === index
    );

    if (errorMessageIndex === -1)
      setNumberLengthErrorMessages([
        ...numberLengthErrorMessages,
        { index, message },
      ]);
    else {
      const updatedErrorMessages = [...numberLengthErrorMessages];
      updatedErrorMessages[errorMessageIndex] = { index, message };
      setNumberLengthErrorMessages(updatedErrorMessages);
    }
  };

  const removeErrorMessage = (index: number) => {
    const prevErrorMessages = [...numberLengthErrorMessages];
    setNumberLengthErrorMessages(
      prevErrorMessages.filter((error) => error.index !== index)
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    if (isNaN(Number(e.target.value)) && e.target.value.length !== 0) {
      setNanErrorMessage({ index, message: "숫자를 입력해주세요." });
      return;
    }

    if (e.target.value.length < 4) {
      updateErrorMessage(index, "4개의 숫자를 입력해주세요.");
    } else {
      removeErrorMessage(index);
    }

    setNanErrorMessage(null);

    const updatedCardNumbers = [...cardNumbers];
    updatedCardNumbers[index] = e.target.value;
    setCardNumbers(updatedCardNumbers);
    console.log(e.target.nextSibling);

    if (
      e.target.value.length === 4 &&
      e.target.nextSibling instanceof HTMLInputElement
    ) {
      (e.target.nextSibling as HTMLInputElement).focus();
    }
  };

  useEffect(() => {
    const updatedIsCompletedSections = [...isCompletedSections];
    const currentState = cardNumbers.every((num) => num.length === 4);
    updatedIsCompletedSections[0] = currentState;
    setIsCompletedSections(updatedIsCompletedSections);
    const updatedIsOpenForm = [...isOpenForm];
    if (currentState === true) {
      updatedIsOpenForm[1] = true;
    }
    setIsOpenForm(updatedIsOpenForm);
  }, [cardNumbers]);

  const checkError = (index: number): boolean => {
    const numberLengthError = numberLengthErrorMessages.some(
      (error) => error.index === index
    );
    const nanError = nanErrorMessage?.index === index;
    return numberLengthError || nanError;
  };

  return (
    <>
      <div className={styles.label}>카드 번호</div>
      <div className={styles.horizon__gap__container}>
        {cardNumbers.map((cardNumber, i) => (
          <Input
            key={i}
            onChange={(e) => handleChange(e, i)}
            placeholder={CARD_NUMBER_UNIT_PLACEHOLDER}
            maxLength={CARD_NUMBER_UNIT_LENGTH}
            value={cardNumber}
            autoFocus={i == 0}
            type={i >= cardNumbers.length / 2 ? "password" : "type"}
            isError={checkError(i)}
          />
        ))}
      </div>
      {
        <div className={styles.error_message}>
          {(nanErrorMessage !== null ||
            numberLengthErrorMessages.length !== 0) && (
            <>
              {nanErrorMessage !== null
                ? nanErrorMessage.message
                : numberLengthErrorMessages[
                    numberLengthErrorMessages.length - 1
                  ].message}
            </>
          )}
        </div>
      }
    </>
  );
}
