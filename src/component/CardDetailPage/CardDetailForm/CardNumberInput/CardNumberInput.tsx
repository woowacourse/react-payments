import React, { useState } from "react";
import Style from "./CardNumberInputStyled";
import { ThemeProvider } from "styled-components";
import Input from "../../../common/Input/Input";
import InputGuide from "../../../common/InputGuide/InputGuide";

import useWarningText from "../../../../hooks/useWarningText";

type CardNumberInputProps = {
  changeCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardNumberHidden: string;
};

function CardNumberInput({
  changeCardNumber,
  cardNumberHidden,
}: CardNumberInputProps) {
  const { warningText, isNumber, isRightLength } = useWarningText(
    16,
    /[^\d•]/g
  );
  const props = {
    type: "text",
    value: cardNumberHidden,
    isRequired: true,
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => {
      isNumber(e);
      changeCardNumber(e);
    },
    onBlur: isRightLength,
  };

  const theme = {
    inputSectionWidth: "100%",
    width: "90%",
    size: "20px",
    spacing: "2px",
  };

  return (
    <section>
      <Style.Title>카드 번호</Style.Title>
      <ThemeProvider theme={theme}>
        <Input {...props} />
      </ThemeProvider>
      <InputGuide warningText={warningText} />
    </section>
  );
}

export default CardNumberInput;
