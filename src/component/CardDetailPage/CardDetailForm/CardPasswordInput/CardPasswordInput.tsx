import React, { useRef } from "react";
import Style from "./CardPasswordInputStyled";
import Input from "../../../common/Input/Input";
import { ThemeProvider } from "styled-components";
import useWarningText from "../../../../hooks/useWarningText";
import InputGuide from "../../../common/InputGuide/InputGuide";

type CardPasswordInputProps = {
  changeCardPassword: (e: React.FormEvent<HTMLInputElement>) => void;
  cardPassword: [string, string];
};

function CardPasswordInput({
  changeCardPassword,
  cardPassword,
}: CardPasswordInputProps) {
  const { warningText, checkNumber, checkRightLength } = useWarningText(1);

  const inputRef2 = useRef<HTMLInputElement>(null);

  const props = {
    type: "password",
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
    id: "first",
    value: cardPassword[0],

    ...props,
  };

  const secondPassword = {
    id: "second",
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
