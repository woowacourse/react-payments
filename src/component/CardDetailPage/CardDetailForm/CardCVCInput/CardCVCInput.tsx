import React, { useState, useContext } from "react";
import Style from "./CardCVCInputStyled";
import { ThemeProvider } from "styled-components";

import CVCPopUp from "./CVCPopUp/CVCPopUp";
import Input from "../../../common/Input/Input";
import InputGuide from "../../../common/InputGuide/InputGuide";

import useWarningText from "../../../../hooks/useWarningText";
import { CardDetailContext } from "../../../../context/CardDetailContext";

import { TYPE } from "../../../../abstract/constants";

function CardCVCInput() {
  const { warningText, checkNumber, checkRightLength } = useWarningText(3);
  const { cardCVC, changeCardCVC } = useContext(CardDetailContext);
  const [popUp, setPopUp] = useState(false);

  const props = {
    type: TYPE.PASSWORD,
    value: cardCVC,
    minLength: 3,
    isRequired: true,
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => {
      checkNumber(e);
      changeCardCVC(e);
    },
    onBlur: checkRightLength,
  };

  const theme = {
    inputSectionWidth: "30%",
    width: "60%",
    size: "30px",
    spacing: "4px",
  };

  const openPopup = () => {
    setPopUp(true);
  };

  const closePopup = () => {
    setPopUp(false);
  };
  return (
    <section>
      <Style.Title>보안 코드(CVC/CVV)</Style.Title>
      <Style.Contents>
        <ThemeProvider theme={theme}>
          <Input {...props} />
        </ThemeProvider>
        <Style.Button type={TYPE.BUTTON} onClick={openPopup}>
          ?
        </Style.Button>
        {popUp ? <CVCPopUp closePopup={closePopup} /> : null}
      </Style.Contents>
      <InputGuide warningText={warningText} />
    </section>
  );
}

export default CardCVCInput;
