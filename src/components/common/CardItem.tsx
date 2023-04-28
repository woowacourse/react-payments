import styled from 'styled-components';

import { CARD_COMPANY } from '../../constants/cardCompany';
import { Card } from '../../type/card';
import { makeCardNumber, makeCardDate } from '../../utils/cardInfoFormat';

interface CardItemProps {
  info: Card;
}

export function CardItem(props: CardItemProps) {
  const { CARD_NUMBER, DATE, USERNAME, COMPANY } = props.info;
  const companyName = COMPANY;

  const companyColor = companyName ? CARD_COMPANY[COMPANY].color : 'gray';

  return (
    <CardContainer color={companyColor}>
      <p>{companyName}</p>

      <_Chip />
      <NumberWrapper>
        <_NumberItem>{makeCardNumber(CARD_NUMBER)}</_NumberItem>
      </NumberWrapper>
      <InfoWrapper>
        <_Name>{USERNAME}</_Name>
        <_Date>{makeCardDate(DATE)}</_Date>
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
  color: white;
  font-size: 1.3rem;
  letter-spacing: 0.2rem;

  border-radius: 0.5rem;
`;

const _Chip = styled.div`
  width: 4rem;
  height: 2.6rem;

  margin-top: 4.7rem;
  margin-left: 1.4rem;

  background-color: #cbba64;

  border-radius: 0.4rem;
`;

const NumberWrapper = styled.ul`
  display: flex;
  justify-content: space-around;

  margin: 1.5rem 1rem 0;
`;

const _NumberItem = styled.li``;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1rem 1.5em;
`;

const _Name = styled.div``;

const _Date = styled.div``;
