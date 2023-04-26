import React from "react";
import Style from "./CardOwnerNameInputStyled";
import { ThemeProvider } from "styled-components";
import { PLACE_HOLDER, TYPE } from "../../../../abstract/constants";

import Input from "../../../common/Input/Input";

export interface CardOwnerNameInputProps {
  changeCardOwnerName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardOwnerName: string;
}

function CardOwnerNameInput({
  changeCardOwnerName,
  cardOwnerName,
}: CardOwnerNameInputProps) {
  const props = {
    type: TYPE.TEXT,
    maxLength: 30,
    isRequired: false,
    placeholder: PLACE_HOLDER.OWNER_NAME_HINT,
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
