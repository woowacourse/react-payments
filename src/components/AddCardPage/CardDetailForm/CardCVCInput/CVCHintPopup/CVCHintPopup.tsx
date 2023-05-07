import React from "react";
import St from "./CVCHintPopupStyled";

function CVCHintPopup() {
  return (
    <St.PopupSection>
      <St.Img src={process.env.PUBLIC_URL + "/assets/cvc.png"} />
    </St.PopupSection>
  );
}

export default CVCHintPopup;
