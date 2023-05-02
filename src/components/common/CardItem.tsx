import styled from 'styled-components';

import { CARD_COMPANY } from '../../constants/cardCompany';
import { Card } from '../../type/card';
import { makeCardNumber, makeCardDate } from '../../utils/cardInfoFormat';

interface CardItemProps {
  info: Card;
}

export function CardItem(props: CardItemProps) {
  const { cardNumber, expiredDate, username, company } = props.info;
  const companyColor = company ? CARD_COMPANY[company].color : 'gray';
  const companyName = company ? CARD_COMPANY[company].name : '';

  return (
    <CardContainer color={companyColor}>
      <_CompanyName>{companyName}</_CompanyName>
      <_Chip />
      <NumberWrapper>
        <_NumberItem>{makeCardNumber(cardNumber)}</_NumberItem>
      </NumberWrapper>
      <InfoWrapper>
        <_Name>{username}</_Name>
        <_Date>{makeCardDate(expiredDate)}</_Date>
      </InfoWrapper>
    </CardContainer>
  );
}
const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 21.3rem;
  height: 13.3rem;

  background-color: ${(props) => props.color || props.theme.color.grey400};
  color: ${(props) =>
    props.color === props.theme.color.yellowKakao
      ? props.theme.color.black
      : props.theme.color.white};
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
  background-color: ${(props) => props.theme.color.yellow};
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
