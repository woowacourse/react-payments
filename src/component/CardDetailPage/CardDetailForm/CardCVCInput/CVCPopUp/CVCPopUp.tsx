import React, { useEffect } from "react";
import Style from "./CVCPopUpStyled";
import { IMG } from "../../../../../abstract/constants";

interface CVCPopUpProps {
  closePopup: () => void;
}

function CVCPopUp({ closePopup }: CVCPopUpProps) {
  useEffect(() => {
    window.addEventListener("keyup", closePopup);

    return () => window.removeEventListener("keyup", closePopup);
  }, []);

  return (
    <Style.Layout>
      <Style.Button onClick={closePopup}>x</Style.Button>
      <Style.Img src={process.env.PUBLIC_URL + IMG.CVV} alt="CVC hint" />
    </Style.Layout>
  );
}

export default CVCPopUp;
