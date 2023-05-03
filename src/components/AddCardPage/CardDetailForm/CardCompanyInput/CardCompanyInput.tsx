import React, { useEffect } from "react";
import St from "./CardCompanyInputStyled";
import CardCompanyModal from "components/CardCompanyModal/CardCompanyModal";
import useCardCompany from "hooks/card/useCardCompany";
import useModal from "hooks/useModal";
import useInputRef from "hooks/useInputRef";

function CardCompanyInput() {
  const { cardCompany } = useCardCompany();
  const { isModalOpen, openModal, closeModal } = useModal();
  const { inputRef, focusNextInput } = useInputRef();

  useEffect(() => {
    inputRef.current?.setCustomValidity(cardCompany ? "" : "카드사를 선택해주세요.");

    cardCompany && focusNextInput();
  }, [cardCompany]);

  return (
    <section>
      <St.Title>카드사</St.Title>
      <St.InputSection>
        <St.Input
          type="text"
          defaultValue={cardCompany || ""}
          required
          autoFocus
          placeholder="카드사 선택"
          ref={inputRef}
          onFocus={(e) => {
            e.currentTarget.blur();
            openModal();
          }}
        ></St.Input>
      </St.InputSection>
      {isModalOpen ? <CardCompanyModal closeModal={closeModal} /> : null}
    </section>
  );
}

export default CardCompanyInput;
