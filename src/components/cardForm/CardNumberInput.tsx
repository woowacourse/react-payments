import { Container } from "../common/Container";
import { InputLabel } from "../common/InputLabel";
import { Input } from "../common/Input";
import { useState, useCallback, useContext } from "react";

import { SubmitManageContext } from "../../contexts/SubmitManageContext";
import { NewCardContext } from "../../contexts/NewCardContext";

import { CARDNUMBERS_MAXLEGNTH, CARDNUMBERS_REGEX, NUMBER_REGEX } from "../../constants";

const cardNumberInputInfo = {
  label: "cardNumbers",
  placeholder: "",
  type: "text",
  $width: "318px",
  $textPosition: "center",
};

const hideNumbers = (numbers: string): string => {
  const hiddenNumbers = `${numbers.slice(0, 8)}${"●".repeat(numbers.slice(8).length)}`;
  return (hiddenNumbers.match(new RegExp(CARDNUMBERS_REGEX)) ?? []).join(" - ");
};

const deleteLastNumber = (numbers: string): string => {
  if (numbers.length > 12) {
    return numbers.slice(0, 12);
  }

  if (numbers.length > 8) {
    return numbers.slice(0, 8);
  }

  return numbers.slice(0, -1);
};

const cannotInput = (postText: string, text: string): boolean => {
  if (postText.length < text.length) {
    const numbers = text.replaceAll(" - ", "");
    return numbers.length > CARDNUMBERS_MAXLEGNTH || !new RegExp(NUMBER_REGEX).test(text.slice(-1));
  }

  return false;
};

export const CardNumberInput = () => {
  const [postText, setPostText] = useState("");
  const { isInputsValid, setIsNumbersCompleted, setIsNumbersValid } = useContext(SubmitManageContext);
  const { setNumbers, newCard } = useContext(NewCardContext);

  const saveNumbers = useCallback(
    (target: HTMLInputElement, numbers: string) => {
      setNumbers(numbers);
      setPostText(hideNumbers(numbers));
      target.value = hideNumbers(numbers);
    },
    [setNumbers, setPostText]
  );

  const updateInputFlags = useCallback(
    (postText: string, text: string) => {
      if (postText.length < text.length) {
        setIsNumbersCompleted(text.replaceAll(" - ", "").length === CARDNUMBERS_MAXLEGNTH);
        return;
      }
      setIsNumbersValid(true);
      setIsNumbersCompleted(false);
    },
    [setIsNumbersCompleted, setIsNumbersValid, setIsNumbersCompleted]
  );

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;
      if (cannotInput(postText, text)) {
        e.target.value = postText;

        return;
      }

      updateInputFlags(postText, text);

      if (postText !== text.slice(0, -1) && postText.slice(0, -1) !== text) {
        e.target.value = postText;

        return;
      }

      if (postText.length < text.length) {
        const addNumbers = `${newCard.numbers}${text.slice(-1)}`;
        saveNumbers(e.target, addNumbers);

        return;
      }

      const minusNumbers = deleteLastNumber(newCard.numbers);
      saveNumbers(e.target, minusNumbers);
    },
    [setIsNumbersCompleted, setIsNumbersValid, saveNumbers]
  );

  return (
    <Container>
      <InputLabel text="카드 번호" name="cardNumber" />
      <Input
        {...cardNumberInputInfo}
        handleInput={handleInput}
        error={{ isValid: isInputsValid.isCardNumbersValid, errorMessage: "기존 카드 번호와 중복됩니다." }}
      />
    </Container>
  );
};
