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
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Style.Wrapper>
        {cardCompanies.map((cardCompany) => {
          const { name, logo } = cardCompany;

          if (!isCardCompany(name)) return;

          return (
            <CardCompanyItem key={name} name={name} logo={logo} setCardCompany={setCardCompany} />
          );
        })}
      </Style.Wrapper>
    </Modal>
  );
}

const Style = {
  Wrapper: styled.ul`
    display: grid;
    grid-template-columns: repeat(4, calc(80% / 4));
    grid-column-gap: calc(20% / 3);
    grid-row-gap: 20px;

    width: 368px;
    list-style: none;
  `,
};
