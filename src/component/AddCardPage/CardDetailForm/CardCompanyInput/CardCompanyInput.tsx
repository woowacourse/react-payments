import React, { useEffect } from "react";
import St from "./CardCompanyInputStyled";
import useCardCompany from "../../../../hooks/useCardCompany";
import useModal from "../../../../hooks/useModal";
import CardCompanyModal from "../../../CardCompanyModal/CardCompanyModal";

interface CardCompanyInputProps {
  inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
}

function CardCompanyInput({ inputRefs }: CardCompanyInputProps) {
  const { cardCompany } = useCardCompany();
  const { isModalOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    cardCompany && inputRefs.current[1]?.focus();
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
          ref={(ref) => (inputRefs.current[0] = ref)}
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
