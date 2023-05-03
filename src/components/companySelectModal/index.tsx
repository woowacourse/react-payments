import styled from "styled-components";
import { CompanyIcon } from "./CompanyIcon";
import { CARD_COMPANIES } from "../../constant/cardCompany";
import { CardType } from "../../types/card";
import { Company } from "../../types/company";
import { Modal } from "../common/Modal";

interface CompanySelectModalProps {
  setCardInfo: React.Dispatch<React.SetStateAction<CardType>>;
  closeModal: () => void;
}

export const CompanySelectModal = ({
  setCardInfo,
  closeModal,
}: CompanySelectModalProps) => {
  const selectCompany = (company: Company) => {
    setCardInfo((prev) => ({
      ...prev,
      color: company.color,
      company: company.name,
    }));

    closeModal();
  };

  const closeModalWithCompany = () => {
    setCardInfo((prev) => ({
      ...prev,
      color: prev.color || CARD_COMPANIES[0].color,
      company: prev.company || CARD_COMPANIES[0].name,
    }));

    closeModal();
  };

  return (
    <Modal closeModal={closeModalWithCompany}>
      <IconWrapper>
        {CARD_COMPANIES.map((company) => (
          <CompanyIcon
            key={company.name}
            company={company}
            selectCompany={selectCompany}
          />
        ))}
      </IconWrapper>
    </Modal>
  );
};

const IconWrapper = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;
