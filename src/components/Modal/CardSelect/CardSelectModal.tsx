import styled from 'styled-components';
import { CardCompany } from '../../../types';
import { Modal } from '../Modal';
import { CARD_COMPANY } from '../../../constants';
import { CardCompanyItem } from './CardCompanyItem';
import { isCardCompany } from '../../../types/guard';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCardCompany: React.Dispatch<React.SetStateAction<CardCompany>>;
  children?: React.ReactNode;
}

export function CardSelectModal({ isOpen, setIsOpen, setCardCompany }: Props) {
  const cardCompanies = Object.values(CARD_COMPANY);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} aria-labelledby='title-dialog'>
      <Style.Title id='title-dialog'>카드사를 선택해주세요.</Style.Title>
      <Style.GridContainer>
        {cardCompanies.map((cardCompany) => {
          const { name, logo } = cardCompany;

          if (!isCardCompany(name)) return;

          return (
            <CardCompanyItem key={name} name={name} logo={logo} setCardCompany={setCardCompany} />
          );
        })}
      </Style.GridContainer>
    </Modal>
  );
}

const Style = {
  Title: styled.h2`
    width: 368px;
    margin-left: 10px;
    margin-bottom: 20px;

    font-size: 16px;
    font-weight: 600;
  `,

  GridContainer: styled.ul`
    display: grid;
    grid-template-columns: repeat(4, calc(80% / 4));
    grid-column-gap: calc(20% / 3);
    grid-row-gap: 20px;

    width: 368px;
    list-style: none;
  `,
};
