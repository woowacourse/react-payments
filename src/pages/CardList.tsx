import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import { getData } from '../utils/localStorage';
import { useState } from 'react';

import { Header, CardItem } from '../components/common';
import { cardList } from '../data/localStorage';

export function CardList() {
  const cards = cardList.getData();

  const navigate = useNavigate();
  function moveAddCardPage() {
    navigate('/add-card');
  }

  return (
    <CardListContainer>
      <Header title='보유 카드' />
      <Section>
        <Direction>
          {cards?.length === 0 ? '새로운 카드를 추가하세요' : ''}
        </Direction>
        {cards &&
          cards?.map((card) => {
            return <CardItem info={card}></CardItem>;
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

const Direction = styled.h3`
  font: var(--text-subtitle);
  color: #575757;
`;
const Button = styled.button`
  background: #e5e5e5;
  border-radius: 5px;

  width: 21.3rem;
  height: 13.3rem;

  font-size: 3rem;

  cursor: pointer;
`;
