import React, { useContext } from "react";
import Style from "./CardOwnerNameInputStyled";
import { ThemeProvider } from "styled-components";

import Input from "../../../common/Input/Input";

import { CardDetailContext } from "../../../../context/CardDetailContext";

import { PLACE_HOLDER, TYPE } from "../../../../abstract/constants";

function CardOwnerNameInput() {
  const { cardOwnerName, changeCardOwnerName } = useContext(CardDetailContext);

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
