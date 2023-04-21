import React from "react";
import Style from "./CardNumberInputStyled";
import Input from "../../../common/Input/Input";
import { ThemeProvider } from "styled-components";

type CardNumberInputProps = {
  changeCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardNumberHidden: string;
};

function CardNumberInput({
  changeCardNumber,
  cardNumberHidden,
}: CardNumberInputProps) {
  const props = {
    type: "text",
    value: cardNumberHidden,
    minLength: 19,
    isRequired: true,
    onInput: changeCardNumber,
  };
  const theme = {
    width: "90%",
    size: "20px",
    spacing: "2px",
  };
  return (
    <section>
      <Style.Title>카드 번호</Style.Title>
      <Style.InputSection>
        <ThemeProvider theme={theme}>
          <Input {...props} />
        </ThemeProvider>
      </Style.InputSection>
    </section>
  );
}

export default CardNumberInput;
