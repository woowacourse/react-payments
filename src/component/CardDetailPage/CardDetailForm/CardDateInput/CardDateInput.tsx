import React from "react";
import Style from "./CardDateInputStyled";
import Input from "../../../common/Input/Input";
import { ThemeProvider } from "styled-components";

type CardDateInputProps = {
  changeCardDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardDate: string;
};

function CardDateInput({ changeCardDate, cardDate }: CardDateInputProps) {
  const props = {
    type: "text",
    value: cardDate,
    minLength: 5,
    isRequired: true,
    placeholder: "MM/YY",
    onInput: changeCardDate,
  };
  const theme = {
    inputSectionWidth: "45%",
    width: "60%",
    size: "20px",
    spacing: "2px",
  };
  return (
    <section>
      <Style.Title>만료일</Style.Title>
      <ThemeProvider theme={theme}>
        <Input {...props} />
      </ThemeProvider>
    </section>
  );
}

export default CardDateInput;
