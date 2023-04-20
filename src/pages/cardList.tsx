import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import { getData } from '../utils/localStorage';
import { useState } from 'react';

import { Header, CardInfo, CardItem } from '../components/common';

export function CardList() {
  // const cards = []; //card.length === 0 이면 h3 없어도 됨
  const [cards, setCards] = useState<CardInfo[]>(getData('cards'));

  const navigate = useNavigate();
  function moveAddCardPage() {
    navigate('/add-card');
  }

  return (
    <CardListContainer>
      <Header title='보유 카드' />
      <Section>
        <h3>{cards?.length === 0 ? '새로운 카드를 추가하세요' : ''}</h3>
        {cards &&
          cards?.map((card) => {
            return (
              <CardItem
                key={card.userName}
                cardNumber={card?.cardNumber}
                date={card?.date}
                userName={card?.userName}
              ></CardItem>
            );
          })}
        <Button onClick={moveAddCardPage}>+</Button>
      </Section>
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 2rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  gap: 3rem;
  font-size: 1.4rem;
`;

const Button = styled.button`
  background: #e5e5e5;
  border-radius: 5px;

  width: 21.3rem;
  height: 13.3rem;

  font-size: 3rem;

  cursor: pointer;
`;
