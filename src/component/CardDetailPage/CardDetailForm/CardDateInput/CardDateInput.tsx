import React from "react";
import Style from "./CardDateInputStyled";
import Input from "../../../common/Input/Input";
import { ThemeProvider } from "styled-components";
import useWarningText from "../../../../hooks/useWarningText";
import InputGuide from "../../../common/InputGuide/InputGuide";

interface CardDateInputProps {
  changeCardDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardDate: string;
}

function CardDateInput({ changeCardDate, cardDate }: CardDateInputProps) {
  const { warningText, checkNumber, checkRightLength } = useWarningText(
    4,
    /[^\d]/g,
    "date"
  );

  const props = {
    type: "text",
    value: cardDate,
    isRequired: true,
    placeholder: "MM/YY",
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => {
      checkNumber(e);
      changeCardDate(e);
    },
    onBlur: checkRightLength,
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
      <InputGuide warningText={warningText} />
    </section>
  );
}

export default CardDateInput;
