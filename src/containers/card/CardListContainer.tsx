import React, { useEffect } from 'react';
import axios from 'axios';
import Card from 'components/card/Card';
import styled from '@emotion/styled';
import DeleteButtonContainer from '../button/DeleteButtonContainer';
import { ActionType, CardType } from 'types';
import { useAppDispatch, useAppState } from 'hooks/hooks';
import { createAction } from 'context/Provider';
import EditButtonContainer from 'containers/button/EditButtonContainer';
import { v4 as uuidv4 } from 'uuid';
import AddCardContainer from './AddCardContainer';

const CardAlias = styled.p(() => ({
  fontWeight: '800',
  marginBottom: '30px',
  textAlign: 'center',
}));

const CardWrapper = styled.div(() => ({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const CardButtonWrap = styled.div(() => ({
  width: '44px',
  display: 'flex',
  position: 'absolute',
  top: '6px',
  right: '6px',
  justifyContent: 'space-between',
  zIndex: 10,
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

      dispatch(createAction(ActionType.SET_CARD_LIST, response.data));
    }

    getCards();
  }, []);

  return (
    <Wrapper>
      {cardList.length > 0 &&
        cardList.map((card: CardType) => (
          <CardWrapper key={uuidv4()}>
            <CardButtonWrap>
              <EditButtonContainer id={card.id} />
              <DeleteButtonContainer id={card.id} />
            </CardButtonWrap>
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
          </CardWrapper>
        ))}
      <AddCardContainer />
    </Wrapper>
  );
}

export default CardListContainer;
