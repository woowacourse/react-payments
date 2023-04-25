import React, { useState } from "react";
import Style from "./CardCVCInputStyled";
import { ThemeProvider } from "styled-components";
import CVCPopUp from "./CVCPopUp/CVCPopUp";
import Input from "../../../common/Input/Input";
import useWarningText from "../../../../hooks/useWarningText";
import InputGuide from "../../../common/InputGuide/InputGuide";

type CardCVCInputProps = {
  changeCardCVC: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardCVC: string;
};
function CardCVCInput({ changeCardCVC, cardCVC }: CardCVCInputProps) {
  const { warningText, checkNumber, checkRightLength } = useWarningText(3);
  const [popUp, setPopUp] = useState(false);

  const props = {
    type: "password",
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
        <Style.Button type="button" onClick={openPopup}>
          ?
        </Style.Button>
        {popUp ? <CVCPopUp closePopup={closePopup} /> : null}
      </Style.Contents>
      <InputGuide warningText={warningText} />
    </section>
  );
}

export default CardCVCInput;
