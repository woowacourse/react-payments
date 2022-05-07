import React, { useEffect } from 'react';
import AddCard from 'components/card/AddCard';
import axios from 'axios';
import Card from 'components/card/Card';
import styled from '@emotion/styled';
import DeleteButtonContainer from '../button/DeleteButtonContainer';
import { ActionType, CardType } from 'types';
import { useAppDispatch, useAppState } from 'hooks/hooks';
import { createAction } from 'context/Provider';
import EditButtonContainer from 'containers/button/EditButtonContainer';
import { v4 as uuidv4 } from 'uuid';

const CardAlias = styled.p(() => ({
  fontWeight: '800',
  marginBottom: '30px',
  textAlign: 'center',
}));

const Wrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

function CardListContainer() {
  const { cardList } = useAppState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getCards() {
      const response = await axios('http://localhost:4004/cards', {
        method: 'get',
      });
      // 에러처리
      dispatch(createAction(ActionType.SET_CARD_LIST, response.data));
    }

    getCards();
  }, []);

  return (
    <Wrapper>
      {cardList.length > 0 ? (
        cardList.map((card: CardType) => (
          <div key={uuidv4()}>
            <EditButtonContainer id={card.id} />
            <DeleteButtonContainer id={card.id} />
            <Card
              firstInputCardNumber={card.firstCardNumber}
              secondInputCardNumber={card.secondCardNumber}
              thirdInputCardNumber={card.thirdCardNumber}
              fourthInputCardNumber={card.fourthCardNumber}
              name={card.ownerName ? card.ownerName : ''}
              expiredPeriodMonth={card.month}
              expiredPeriodYear={card.year}
              cardType={card.type}
            />
            <CardAlias>{card.alias}</CardAlias>
          </div>
        ))
      ) : (
        <></>
      )}
      <AddCard />
    </Wrapper>
  );
}

export default CardListContainer;
