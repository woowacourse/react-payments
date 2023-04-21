import React, { useRef } from "react";
import Style from "./CardPasswordInputStyled";
import Input from "../../../common/Input/Input";
import { ThemeProvider } from "styled-components";

type CardPasswordInputProps = {
  changeCardPassword: (e: React.FormEvent<HTMLInputElement>) => void;
  cardPassword: [string, string];
};

function CardPasswordInput({
  changeCardPassword,
  cardPassword,
}: CardPasswordInputProps) {
  const props = {
    type: "password",
    minLength: 1,
    isRequired: true,
    onInput: changeCardPassword,
  };
  const firstPassword = { id: "first", value: cardPassword[0], ...props };

  const secondPassword = { id: "second", value: cardPassword[1], ...props };

  const theme = {
    width: "60%",
    size: "30px",
  };
  return (
    <section>
      <Style.Title>카드 비밀번호</Style.Title>
      <Style.Contents>
        <Style.InputSection>
          <ThemeProvider theme={theme}>
            <Input {...firstPassword} />
          </ThemeProvider>
        </Style.InputSection>
        <Style.InputSection>
          <ThemeProvider theme={theme}>
            <Input {...secondPassword} />
          </ThemeProvider>
        </Style.InputSection>
        <Style.LastDigits>•</Style.LastDigits>
        <Style.LastDigits>•</Style.LastDigits>
      </Style.Contents>
    </section>
  );
}
export default CardPasswordInput;
