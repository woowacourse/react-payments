import styled from 'styled-components';
import { CardCompanyItem } from './CardCompanyItem';
import { CARD_COMPANY } from '../../../constants';
import { CardCompany } from '../../../types';

interface Props {
  setCardCompany: (input: CardCompany) => void;
}

export function CardSelectModalContent({ setCardCompany }: Props) {
  const cardCompanies = Object.values(CARD_COMPANY);

  return (
    <>
      <Style.Title id='title-dialog'>카드사를 선택해주세요.</Style.Title>
      <Style.GridContainer>
        {cardCompanies.map((cardCompany) => {
          const { name, logo } = cardCompany;

          return (
            <CardCompanyItem key={name} name={name} logo={logo} setCardCompany={setCardCompany} />
          );
        })}
      </Style.GridContainer>
    </>
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
