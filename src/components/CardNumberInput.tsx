import { InputLabel } from "./common/InputLabel";
import { Input } from "./common/Input";
import styled from "styled-components";
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
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    //문자가 추가됐을 때
    if (
      postText.replaceAll(" - ", "").length < text.replaceAll(" - ", "").length
    ) {
      const numbers = text.replaceAll(" - ", "");

      if (numbers.length > 16 || !/\d/g.test(text.slice(-1))) {
        e.target.value = e.target.value.slice(0, -1);
        return;
      }

      const addNumbers = cardNumbers + text.slice(-1);
      setCardNumbers(addNumbers);

      setPostText(e.target.value);
      const nextText =
        addNumbers.slice(0, 8) + "●".repeat(addNumbers.slice(8).length);
      e.target.value = (nextText.match(/\d{1,4}|●{1,4}/g) ?? []).join(" - ");
    }
    //문자가 제거 됐을 때
    else {
      const minusNumbers = cardNumbers.slice(0, -1);
      setCardNumbers(minusNumbers);

      setPostText(e.target.value);
      const nextText =
        minusNumbers.slice(0, 8) + "●".repeat(minusNumbers.slice(8).length);
      e.target.value = (nextText.match(/\d{1,4}|●{1,4}/g) ?? []).join(" - ");
    }
  };

  return (
    <Container>
      <InputLabel text="카드 번호" name="cardNumber" />
      <Input {...cardNumberInputInfo} handleInput={handleInput} />
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 65px;
`;
