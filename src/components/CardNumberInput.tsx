import { InputLabel } from "./common/InputLabel";
import { Input } from "./common/Input";
import styled from "styled-components";

interface CardNumberInputProps {
  setCardNumbers: (numbers: string) => void;
}

const cardNumberInputInfo = {
  label: "cardNumber",
  width: "318px",
  placeholder: "",
  textPosition: "center",
  type: "text",
};

export const CardNumberInput = ({ setCardNumbers }: CardNumberInputProps) => {
  const handleInput = (e: any) => {
    const value = e.target.value.replaceAll(" - ", "");

    if (value.length > 16) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    const numbers = value.slice(0, 8) + "●".repeat(value.slice(8).length);

    e.target.value = (numbers.match(/\d{1,4}|●{1,4}/g) ?? []).join(" - ");
    setCardNumbers(e.target.value);
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
