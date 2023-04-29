import React from "react";
import Modal from "../common/Modal";
import { CREDIT_CARD_COMPANY_LOGO } from "../../data/creditCard";
import St from "./CardCompanyModalStyled";
import useCardCompany from "../../hooks/card/useCardCompany";
import { CREDIT_CARD_COMPANY } from "../../types/card";

interface CardCompanyModalProps {
  closeModal: () => void;
}

function CardCompanyModal({ closeModal }: CardCompanyModalProps) {
  const { changeCardCompany } = useCardCompany();

  return (
    <Modal closeModal={closeModal}>
      <St.CardCompanyModal>
        <St.CardCompanies
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            closeModal();
            changeCardCompany(e);
          }}
        >
          {Object.values(CREDIT_CARD_COMPANY).map((value) => (
            <React.Fragment key={value}>
              <St.Input
                type="radio"
                id={value}
                name="company"
                value={`${value}`}
              />
              <St.Logo htmlFor={value}>
                <St.Img src={CREDIT_CARD_COMPANY_LOGO[value]} />
                <St.Caption>{value}</St.Caption>
              </St.Logo>
            </React.Fragment>
          ))}
        </St.CardCompanies>
      </St.CardCompanyModal>
    </Modal>
  );
}

export default CardCompanyModal;
