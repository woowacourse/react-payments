import React, { useState } from "react";
import St from "./CardCVCInputStyled";
import CVCHintPopup from "./CVCHintPopup/CVCHintPopup";
import useCardCVC from "../../../../hooks/useCardCVC";

interface CardDateInputProps {
  inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
}

function CardCVCInput({ inputRefs }: CardDateInputProps) {
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
            ref={(ref) => (inputRefs.current[4] = ref)}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.currentTarget.validity.valid && inputRefs.current[5]?.focus();
              changeCardCVC(e);
            }}
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
