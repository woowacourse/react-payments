import { Container } from "../common/Container";
import { InputLabel } from "../common/InputLabel";
import { Input } from "../common/Input";
import { useState } from "react";

interface CardNumberInputProps {
  cardNumbers: string;
  setCardNumbers: (numbers: string) => void;
  setIsCompleted: (isCompleted: boolean) => void;
}

const cardNumberInputInfo = {
  label: "cardNumber",
  placeholder: "",
  type: "text",
  $width: "318px",
  $textPosition: "center",
};

const hideNumbers = (numbers: string): string => {
  const hiddenNumbers = `${numbers.slice(0, 8)}${"●".repeat(numbers.slice(8).length)}`;
  return (hiddenNumbers.match(/\d{1,4}|●{1,4}/g) ?? []).join(" - ");
};

export const CardNumberInput = ({ cardNumbers, setCardNumbers, setIsCompleted }: CardNumberInputProps) => {
  const [postText, setPostText] = useState("");

  const saveNumbers = (target: HTMLInputElement, numbers: string) => {
    setCardNumbers(numbers);
    setPostText(hideNumbers(numbers));
    target.value = hideNumbers(numbers);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    // 문자열 중간 부분을 수정했을 때
    if (postText !== text.slice(0, -1) && postText.slice(0, -1) !== text) {
      e.target.value = postText;
      return;
    }

    //문자가 추가됐을 때
    if (postText.replaceAll(" - ", "").length < text.replaceAll(" - ", "").length) {
      const numbers = text.replaceAll(" - ", "");

      if (numbers.length > 16 || !/\d/g.test(text.slice(-1))) {
        e.target.value = e.target.value.slice(0, -1);
        return;
      }

      const addNumbers = `${cardNumbers}${text.slice(-1)}`;
      saveNumbers(e.target, addNumbers);

      if (addNumbers.length === 16) setIsCompleted(true);

      return;
    }

    //문자가 제거 됐을 때
    const minusNumbers = postText.slice(-1) === "●" ? cardNumbers.slice(0, 8) : cardNumbers.slice(0, -1);
    saveNumbers(e.target, minusNumbers);

    setIsCompleted(false);
  };

  return (
    <Container>
      <InputLabel text="카드 번호" name="cardNumber" />
      <Input
        {...cardNumberInputInfo}
        handleInput={handleInput}
        error={{ isValid: true, errorMessage: "기존 카드 번호와 중복됩니다." }}
      />
    </Container>
  );
};
