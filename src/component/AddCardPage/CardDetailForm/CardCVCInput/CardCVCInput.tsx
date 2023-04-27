import React, { useState } from "react";
import St from "./CardCVCInputStyled";
import CVCHintPopup from "./CVCHintPopup/CVCHintPopup";
import useCardCVC from "../../../../hooks/useCardCVC";

function CardCVCInput() {
  const [isPopup, setIsPopup] = useState(false);
  const { cardCVC, changeCardCVC } = useCardCVC();

  return (
    <section>
      <St.Title>보안 코드(CVC/CVV)</St.Title>
      <St.Contents>
        <St.InputSection>
          <St.Input
            type="password"
            value={cardCVC}
            minLength={3}
            required
            onInput={changeCardCVC}
          />
        </St.InputSection>
        <St.Button
          type="button"
          onClick={() => {
            setIsPopup(!isPopup);
          }}
        >
          ?
        </St.Button>
        {isPopup ? <CVCHintPopup /> : null}
      </St.Contents>
    </section>
  );
}

export default CardCVCInput;
