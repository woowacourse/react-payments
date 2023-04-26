import React from "react";
import Style from "./CardDateInputStyled";
import { ThemeProvider } from "styled-components";

import Input from "../../../common/Input/Input";
import InputGuide from "../../../common/InputGuide/InputGuide";

import useWarningText from "../../../../hooks/useWarningText";

import { PLACE_HOLDER, TYPE } from "../../../../abstract/constants";

export interface CardDateInputProps {
  changeCardDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardDate: string;
}

function CardDateInput({ changeCardDate, cardDate }: CardDateInputProps) {
  const { warningText, checkNumber, checkRightLength } = useWarningText(
    4,
    "date"
  );

  const props = {
    type: TYPE.TEXT,
    value: cardDate,
    isRequired: true,
    placeholder: PLACE_HOLDER.MM_YY,
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
