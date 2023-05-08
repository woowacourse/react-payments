import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Header, CardItem } from '../components/common';
import { PATH } from '../constants/path';
import { cardList } from '../data/localStorage';

export function CardList() {
  const cards = cardList.getData();

  const navigate = useNavigate();
  function moveAddCardPage() {
    navigate(PATH.ADD_CARD);
  }

  return (
    <_CardListContainer>
      <Header title='보유 카드' />
      <_Section>
        <_Direction>
          {cards?.length === 0 ? '새로운 카드를 추가하세요' : ''}
        </_Direction>
        {cards &&
          cards
            .reverse()
            .map(
              (
                { cardNumber, expiredDate, username, company, nickname },
                index
              ) => {
                return (
                  <React.Fragment key={index}>
                    <CardItem
                      cardNumberFirst={cardNumber.slice(0, 4)}
                      cardNumberSecond={cardNumber.slice(4, 8)}
                      cardNumberThird={cardNumber.slice(8, 12)}
                      cardNumberFourth={cardNumber.slice(12, 16)}
                      month={expiredDate.slice(0, 2)}
                      year={expiredDate.slice(2, 4)}
                      username={username}
                      company={company}
                    />
                    <_CardNickName>{nickname}</_CardNickName>
                  </React.Fragment>
                );
              }
            )}
        <_Button onClick={moveAddCardPage}>+</_Button>
      </_Section>
    </_CardListContainer>
  );
}

const _CardListContainer = styled.div`
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
  font: ${(props) => props.theme.text.subtitle};
  color: ${(props) => props.theme.color.grey300};
`;

const _CardNickName = styled.p`
  font-weight: 700;
  font-size: 1.4rem;

  color: ${(props) => props.theme.color.grey300};
`;
const _Button = styled.button`
  background: ${(props) => props.theme.color.grey200};
  border-radius: 0.5rem;

  width: 21.3rem;
  height: 13.3rem;

  font-size: 3rem;

  cursor: pointer;
`;
