import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
      <_Section>
        <_Direction>
          {cards?.length === 0 ? '새로운 카드를 추가하세요' : ''}
        </_Direction>
        {cards &&
          cards?.reverse().map((card) => {
            return (
              <>
                <CardItem info={card}></CardItem>
                <_CardNickName>{card.NICKNAME}</_CardNickName>
              </>
            );
          })}
        <_Button onClick={moveAddCardPage}>+</_Button>
      </_Section>
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 2rem;
`;

const _Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  gap: 3rem;
  font-size: 1.4rem;
`;

const _Direction = styled.h3`
  font: var(--text-subtitle);
  color: #575757;
`;

const _CardNickName = styled.p`
  font-weight: 700;
  font-size: 1.4rem;

  color: #575757;
`;
const _Button = styled.button`
  background: #e5e5e5;
  border-radius: 5px;

  width: 21.3rem;
  height: 13.3rem;

  font-size: 3rem;

  cursor: pointer;
`;
