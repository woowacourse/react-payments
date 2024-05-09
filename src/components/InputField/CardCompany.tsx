import { useState } from 'react';
import { useCardCompany } from 'use-card-input-hook';
import DeleteIcon from '../../assets/image/deleteIcon.svg?react';
import { CARD_COMPANIES, CardCompany } from '../../data/CardCompanyData';
import { Button, Modal } from 'styled-base-modal';
import styled from 'styled-components';

interface Props {
  handleInput: (value: Record<string, string>) => void;
  handleComplete: (isComplete: boolean) => void;
}

export default function CardCompanyField({
  handleInput,
  handleComplete,
}: Props) {
  const cardCompanyKey = CARD_COMPANIES.map((company) => company.name);
  const { value, onSelect, errorMessage } = useCardCompany('', cardCompanyKey);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpen = () => {
    event?.preventDefault();
    setIsModalOpen(true);
  };

  const handleSelectCompany = (companyName: string) => {
    onSelect(companyName);
    handleInput({
      companyName: companyName,
    });
    setIsModalOpen(false);
    handleComplete(true);
  };

  return (
    <>
      <Button
        label={value ? value : '카드사 선택'}
        onClick={handleOpen}
        size="large"
      />
      <Modal isOpen={isModalOpen} position="center" onClose={handleClose}>
        <Modal.Title> 카드사 선택 </Modal.Title>
        <Modal.CloseIcon onClick={handleClose}>
          <DeleteIcon />
        </Modal.CloseIcon>
        <Modal.Content>
          <CardCompaniesBox onSelect={handleSelectCompany} />
        </Modal.Content>
      </Modal>
      {errorMessage}
    </>
  );
}

const CardCompanyBox = ({
  company,
  onSelect,
}: {
  company: CardCompany;
  onSelect: (companyName: string) => void;
}) => {
  const { name, logo: Logo } = company;
  return (
    <OneCardCompanyBox onClick={() => onSelect(name)}>
      <Logo />
      <h3>{name}</h3>
    </OneCardCompanyBox>
  );
};

const CardCompaniesBox = ({
  onSelect,
}: {
  onSelect: (companyName: string) => void;
}) => {
  return (
    <Grid>
      {CARD_COMPANIES.map((company: CardCompany) => (
        <CardCompanyBox
          key={company.id}
          company={company}
          onSelect={onSelect}
        />
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
`;

const OneCardCompanyBox = styled.div`
  width: 100px;
  height: 100px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
