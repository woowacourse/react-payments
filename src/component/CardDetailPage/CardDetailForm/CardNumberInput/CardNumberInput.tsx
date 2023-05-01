import React, { useContext } from "react";
import Style from "./CardNumberInputStyled";
import { ThemeProvider } from "styled-components";

import Input from "../../../common/Input/Input";
import InputGuide from "../../../common/InputGuide/InputGuide";

import useWarningText from "../../../../hooks/useWarningText";
import { CardDetailContext } from "../../../../context/CardDetailContext";

import { TYPE } from "../../../../abstract/constants";

function CardNumberInput() {
  const { warningText, checkNumber, checkRightLength } = useWarningText(
    16,
    "cardNumber"
  );
  const { cardNumberHidden, changeCardNumber } = useContext(CardDetailContext);

  const props = {
    type: TYPE.TEXT,
    value: cardNumberHidden,
    isRequired: true,
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => {
      checkNumber(e);
      changeCardNumber(e);
    },
    onBlur: checkRightLength,
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
