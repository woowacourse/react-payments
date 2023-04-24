import { Container } from "../common/Container";
import { InputLabel } from "../common/InputLabel";
import { Input } from "../common/Input";
import { useState, useCallback } from "react";

import { CARDNUMBERS_MAXLEGNTH, CARDNUMBERS_REGEX } from "../../constants";

interface CardNumberInputProps {
  cardNumbers: string;
  isValid: boolean;
  setIsValid: (isValid: boolean) => void;
  setCardNumbers: (numbers: string) => void;
  setIsCompleted: (isCompleted: boolean) => void;
}

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

const cannotInput = (text: string): boolean => {
  const numbers = text.replaceAll(" - ", "");
  return numbers.length > CARDNUMBERS_MAXLEGNTH || !/\d/g.test(text.slice(-1));
};

export const CardNumberInput = ({
  cardNumbers,
  isValid,
  setIsValid,
  setCardNumbers,
  setIsCompleted,
}: CardNumberInputProps) => {
  const [postText, setPostText] = useState("");

  const saveNumbers = useCallback(
    (target: HTMLInputElement, numbers: string) => {
      setCardNumbers(numbers);
      setPostText(hideNumbers(numbers));
      target.value = hideNumbers(numbers);
    },
    [setCardNumbers, setPostText]
  );

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;

      // 문자열 중간 부분을 수정했을 때
      if (postText !== text.slice(0, -1) && postText.slice(0, -1) !== text) {
        e.target.value = postText;
        return;
      }

      //문자가 추가됐을 때
      if (postText.replaceAll(" - ", "").length < text.replaceAll(" - ", "").length) {
        if (cannotInput(text)) {
          e.target.value = e.target.value.slice(0, -1);
          return;
        }

        const addNumbers = `${cardNumbers}${text.slice(-1)}`;
        saveNumbers(e.target, addNumbers);

        if (addNumbers.length === CARDNUMBERS_MAXLEGNTH) setIsCompleted(true);

        return;
      }

      //문자가 제거 됐을 때
      const minusNumbers = postText.slice(-1) === "●" ? cardNumbers.slice(0, 8) : cardNumbers.slice(0, -1);
      saveNumbers(e.target, minusNumbers);

      setIsValid(true);
      setIsCompleted(false);
    },
    [setIsCompleted, setIsValid, saveNumbers]
  );

  return (
    <Container>
      <InputLabel text="카드 번호" name="cardNumber" />
      <Input
        {...cardNumberInputInfo}
        handleInput={handleInput}
        error={{ isValid: isValid, errorMessage: "기존 카드 번호와 중복됩니다." }}
      />
    </Container>
  );
};
