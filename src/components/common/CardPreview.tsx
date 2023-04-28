import { useContext } from 'react';
import styled from 'styled-components';

import { CARD_COMPANY } from '../../constants/cardCompany';
import { CardPreviewInfoContext } from '../../contexts/cardInfo';

export function CardPreview() {
  const { card_number, username, expired_date, company } = useContext(
    CardPreviewInfoContext
  );

  const clickedCompany = company.clicked.value;
  const companyName =
    clickedCompany in CARD_COMPANY ? CARD_COMPANY[clickedCompany].name : '';

  const companyColor =
    clickedCompany in CARD_COMPANY
      ? CARD_COMPANY[clickedCompany].color
      : 'gray';

  return (
    <CardContainer color={companyColor}>
      <_CompanyName>{companyName}</_CompanyName>
      <_Chip />
      <NumberWrapper>
        <NumberItem>{card_number.first.value}</NumberItem>
        <NumberItem>{card_number.second.value}</NumberItem>
        <NumberItem>{'•'.repeat(card_number.third.value.length)}</NumberItem>
        <NumberItem>{'•'.repeat(card_number.fourth.value.length)}</NumberItem>
      </NumberWrapper>
      <InfoWrapper>
        <Name>{username.first.value}</Name>
        <Date>
          {expired_date.month.value}/{expired_date.year.value}
        </Date>
      </InfoWrapper>
    </CardContainer>
  );
}

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 21.3rem;
  height: 13.3rem;
  margin-bottom: 3.5rem;
  background-color: ${(props) => props.color || 'gray'};
  color: ${(props) => (props.color === '#FFE600' ? 'black' : 'white')};
  font-size: 1.3rem;
  font-weight: 500;

  letter-spacing: 0.1rem;
  border-radius: 0.5rem;

  box-shadow: 0.4rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 1rem 1rem 0.7rem rgba(0, 0, 0, 0.25);
  }
`;

const _CompanyName = styled.p`
  margin: 1.1rem 0 2.2rem 1.3rem;

  font-family: 'Roboto';
  line-height: 1.4rem;
`;

const _Chip = styled.div`
  width: 4rem;
  height: 2.6rem;
  margin-left: 1.4rem;
  background-color: #cbba64;
  border-radius: 0.4rem;
`;

const NumberWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin: 1.3rem 1rem 0 2rem;
`;

const NumberItem = styled.li``;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 1.5em;
`;

const Name = styled.div``;

const Date = styled.div``;
