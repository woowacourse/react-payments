import { InputLabel } from "./common/InputLabel";
import { Input } from "./common/Input";
import styled from "styled-components";

// interface CardNumberInputProps {}

const cardNumberInputInfo = {
  label: "cardNumber",
  width: "318px",
  placeholder: "",
  textPosition: "center",
  event: (e: any) => {
    const value = e.target.value.replaceAll(" - ", "");

    if (value.length > 16) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    // 카드번호 저장 로직

    const numbers = value.slice(0, 8) + "●".repeat(value.slice(8).length);

    e.target.value = (numbers.match(/\d{1,4}|●{1,4}/g) ?? []).join(" - ");
  },
};

export const CardNumberInput = () => {
  return (
    <Container>
      <InputLabel text="카드 번호" name="cardNumber" />
      <Input {...cardNumberInputInfo} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 70px;
`;
