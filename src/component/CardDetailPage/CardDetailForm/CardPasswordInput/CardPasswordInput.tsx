import React, { useRef, useContext } from "react";
import Style from "./CardPasswordInputStyled";
import { ThemeProvider } from "styled-components";

import Input from "../../../common/Input/Input";
import InputGuide from "../../../common/InputGuide/InputGuide";

import useWarningText from "../../../../hooks/useWarningText";

import { CARD_PASSWORD, TYPE } from "../../../../abstract/constants";
import { CardDetailContext } from "../../../../context/CardDetailContext";

function CardPasswordInput() {
  const { warningText, checkNumber, checkRightLength } = useWarningText(1);
  const { cardPassword, changeCardPassword } = useContext(CardDetailContext);

  const inputRef2 = useRef<HTMLInputElement>(null);

  const props = {
    type: TYPE.PASSWORD,
    minLength: 1,
    isRequired: true,
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => {
      checkNumber(e);
      changeCardPassword(e);
      if (!isNaN(parseInt(e.target.value))) inputRef2.current?.focus();
    },
    onBlur: checkRightLength,
  };

  const firstPassword = {
    id: CARD_PASSWORD.FIRST,
    value: cardPassword[0],

    ...props,
  };

  const secondPassword = {
    id: CARD_PASSWORD.SECOND,
    value: cardPassword[1],
    inputRef: inputRef2,
    ...props,
  };

  const theme = {
    inputSectionWidth: "17%",
    width: "60%",
    size: "30px",
  };
  return (
    <section>
      <Style.Title>카드 비밀번호</Style.Title>
      <Style.Contents>
        <ThemeProvider theme={theme}>
          <Input {...firstPassword} />
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Input {...secondPassword} />
        </ThemeProvider>
        <Style.LastDigits>•</Style.LastDigits>
        <Style.LastDigits>•</Style.LastDigits>
      </Style.Contents>
      <InputGuide warningText={warningText} />
    </section>
  );
}
export default CardPasswordInput;
