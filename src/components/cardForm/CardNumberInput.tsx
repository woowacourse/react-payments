import { Container } from "../common/Container";
import { InputLabel } from "../common/InputLabel";
import { Input } from "../common/Input";
import { useState } from "react";

interface CardNumberInputProps {
  setCardNumbers: (numbers: string) => void;
  cardNumbers: string;
}

const cardNumberInputInfo = {
  label: "cardNumber",
  width: "318px",
  placeholder: "",
  textPosition: "center",
  type: "text",
};

export const CardNumberInput = ({
  setCardNumbers,
  cardNumbers,
}: CardNumberInputProps) => {
  const [postText, setPostText] = useState("");
  const [isCompleted, setIsCompleted] = useState(true);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    // 문자열 중간 부분을 수정했을 때
    if (postText !== text.slice(0, -1) && postText.slice(0, -1) !== text) {
      e.target.value = postText;
      return;
    }

    const hideNumbers = (numbers: string): string => {
      const hiddenNumbers = numbers.slice(0, 8) + "●".repeat(numbers.slice(8).length);
      return (hiddenNumbers.match(/\d{1,4}|●{1,4}/g) ?? []).join(" - ");
    };

    //문자가 추가됐을 때
    if (postText.replaceAll(" - ", "").length < text.replaceAll(" - ", "").length) {
      const numbers = text.replaceAll(" - ", "");

      if (numbers.length > 16 || !/\d/g.test(text.slice(-1))) {
        e.target.value = e.target.value.slice(0, -1);
        return;
      }

      const addNumbers = cardNumbers + text.slice(-1);
      setCardNumbers(addNumbers);

      setPostText(hideNumbers(addNumbers));
      e.target.value = hideNumbers(addNumbers);

      if (addNumbers.length === 16) setIsCompleted(true);

      return;
    }

    //문자가 제거 됐을 때
    const minusNumbers = postText.slice(-1) === "●" ? cardNumbers.slice(0, 8) : cardNumbers.slice(0, -1);
      setCardNumbers(minusNumbers);

    setPostText(hideNumbers(minusNumbers));
    e.target.value = hideNumbers(minusNumbers);

    setIsCompleted(false);

    if (value.length === 16) {
      setIsCompleted(true);
    }
  };

  return (
    <Container>
      <InputLabel text="카드 번호" name="cardNumber" />
      <Input
        error={{
          isValid: isCompleted,
          errorMessage: "16자리 숫자를 입력하세요.",
        }}
        {...cardNumberInputInfo}
        handleInput={handleInput}
        handleChange={handleOutFocusEvent}
      />
    </Container>
  );
};
