import React, { useEffect, useState } from "react";
import St from "./CardCVCInputStyled";
import CVCHintPopup from "./CVCHintPopup/CVCHintPopup";
import useCardCVC from "hooks/card/useCardCVC";
import useInputRef from "hooks/useInputRef";

function CardCVCInput() {
  const [isPopup, setIsPopup] = useState(false);
  const { cardCVC, changeCardCVC, validate } = useCardCVC();
  const { inputRef, focusNextInput } = useInputRef();

  useEffect(() => {
    const isValid = validate();

    inputRef.current?.setCustomValidity(
      isValid ? "" : "보안 코드 3자리를 입력해주세요."
    );

    isValid && focusNextInput();
  }, [cardCVC]);

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
            ref={inputRef}
            onChange={changeCardCVC}
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
