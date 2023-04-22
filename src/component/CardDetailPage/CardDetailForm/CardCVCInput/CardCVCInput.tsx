import React, { useState } from "react";
import Style from "./CardCVCInputStyled";
import Input from "../../../common/Input/Input";
import { ThemeProvider } from "styled-components";
import CVCPopUp from "./CVCPopUp/CVCPopUp";

type CardCVCInputProps = {
  changeCardCVC: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardCVC: string;
};
function CardCVCInput({ changeCardCVC, cardCVC }: CardCVCInputProps) {
  const props = {
    type: "password",
    value: cardCVC,
    minLength: 3,
    isRequired: true,
    onInput: changeCardCVC,
  };
  const theme = {
    inputSectionWidth: "30%",
    width: "60%",
    size: "30px",
    spacing: "4px",
  };

  const [popUp, setPopUp] = useState(false);

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
        <Style.Button type="button" onClick={openPopup}>
          ?
        </Style.Button>
        {popUp ? <CVCPopUp closePopup={closePopup} /> : null}
      </Style.Contents>
    </section>
  );
}

export default CardCVCInput;
