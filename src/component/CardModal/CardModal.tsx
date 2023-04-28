import React, { useContext, useEffect } from "react";
import Style from "./CardModalStyled";
import { COMPANY_LIST, COMPANY_SRC } from "../../abstract/constants";
import ImgButton from "../common/ImgButton/ImgButton";
import { CardCompany } from "../../types/card";
import { CardDetailContext } from "../../context/CardDetailContext";

interface CardModalProps {
  closeModal: () => void;
}
function CardModal({ closeModal }: CardModalProps) {
  const { changeCompany } = useContext(CardDetailContext);

  const escHandler = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
  };

  useEffect(() => {
    window.addEventListener("keyup", escHandler);

    return () => window.removeEventListener("keyup", escHandler);
  });

  return (
    <>
      <Style.Backdrop onClick={closeModal} />
      <Style.PopUp>
        <Style.Detail>
          {COMPANY_LIST.map((company: CardCompany) => (
            <ImgButton
              key={company}
              onClick={() => {
                changeCompany(company);
                closeModal();
              }}
              src={COMPANY_SRC[company]}
              alt={company}
            />
          ))}
        </Style.Detail>
      </Style.PopUp>
    </>
  );
}

export default CardModal;
