import React from "react";
import Style from "./CardDateInputStyled";
import Input from "../../../common/Input/Input";
import { ThemeProvider } from "styled-components";
import useWarningText from "../../../../hooks/useWarningText";
import InputGuide from "../../../common/InputGuide/InputGuide";

type CardDateInputProps = {
  changeCardDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardDate: string;
};

function CardDateInput({ changeCardDate, cardDate }: CardDateInputProps) {
  const { warningText, isNumber, isRightLength } = useWarningText(
    4,
    /[^\d]/g,
    "date"
  );

  const props = {
    type: "text",
    value: cardDate,
    minLength: 5,
    isRequired: true,
    placeholder: "MM/YY",
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => {
      isNumber(e);
      changeCardDate(e);
    },
    onBlur: isRightLength,
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
