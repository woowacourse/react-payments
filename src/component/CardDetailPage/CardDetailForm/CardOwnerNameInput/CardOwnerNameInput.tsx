import React from "react";
import Style from "./CardOwnerNameInputStyled";
import Input from "../../../common/Input/Input";
import { ThemeProvider } from "styled-components";

export interface CardOwnerNameInputProps {
  changeCardOwnerName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardOwnerName: string;
}

function CardOwnerNameInput({
  changeCardOwnerName,
  cardOwnerName,
}: CardOwnerNameInputProps) {
  const props = {
    type: "text",
    maxLength: 30,
    isRequired: false,
    placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
    onInput: changeCardOwnerName,
  };
  const theme = {
    inputSectionWidth: "100%",
    width: "100%",
    size: "15px",
  };
  return (
    <section>
      <Style.Title>
        <div>카드 소유자 이름 (선택)</div>
        <div>{cardOwnerName.length}/30</div>
      </Style.Title>
      <ThemeProvider theme={theme}>
        <Input {...props} />
      </ThemeProvider>
    </section>
  );
}

export default CardOwnerNameInput;
