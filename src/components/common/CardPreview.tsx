import { useContext } from 'react';
import styled from 'styled-components';
import { CardPreviewInfoContext } from '../../contexts/cardInfo';

export function CardPreview() {
  const { CARD_NUMBER, USERNAME, DATE } = useContext(CardPreviewInfoContext);

  return (
    <CardContainer>
      <Magnetic />
      <NumberWrapper>
        <NumberItem>{CARD_NUMBER[0].value}</NumberItem>
        <NumberItem>{CARD_NUMBER[1].value}</NumberItem>
        <NumberItem>{'•'.repeat(CARD_NUMBER[2].value.length)}</NumberItem>
        <NumberItem>{'•'.repeat(CARD_NUMBER[3].value.length)}</NumberItem>
      </NumberWrapper>
      <InfoWrapper>
        <Name>{USERNAME[0].value}</Name>
        <Date>
          {DATE[0].value}/{DATE[1].value}
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
  background-color: #333333;
  color: white;
  font-size: 1.3rem;
  letter-spacing: 0.2rem;
  border-radius: 0.5rem;
`;

const Magnetic = styled.div`
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

const NumberItem = styled.li``;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 1.5em;
`;

const Name = styled.div``;

const Date = styled.div``;
