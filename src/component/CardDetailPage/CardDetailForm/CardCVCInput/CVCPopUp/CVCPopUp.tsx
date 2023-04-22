import React, { useEffect } from "react";
import Style from "./CVCPopUpStyled";

type CVCPopUpProps = {
  closePopup: () => void;
};
function CVCPopUp({ closePopup }: CVCPopUpProps) {
  useEffect(() => {
    window.addEventListener("keyup", closePopup);

    return () => window.removeEventListener("keyup", closePopup);
  });

  return (
    <>
      <Style.Layout>
        <Style.Button onClick={closePopup}>x</Style.Button>
        <Style.Img
          src={process.env.PUBLIC_URL + "/img/CVV.png"}
          alt="CVC hint"
        />
      </Style.Layout>
    </>
  );
}

export default CVCPopUp;
