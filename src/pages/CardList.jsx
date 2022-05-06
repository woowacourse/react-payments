import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from 'styles.js';
import PageTitle from 'components/PageTitle';
import AnotherCard from 'components/AnotherCard';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';
import { DraggableCard, DroppableArea } from 'common/DragDrop';
import Card from 'components/Card';
import styled from 'styled-components';

function CardList() {
  const navigate = useNavigate();
  const { cards } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);

  const onClickPrev = () => {
    navigate('/add-card');
  };
  return (
    <S.Container>
      <PageTitle hasPrevButton={false}>보유 카드</PageTitle>
      <S.CardAlignBox>
        <DroppableArea cards={cards} dispatch={dispatch} type={TYPES.SET_CARD_ORDER}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {cards.map((card, index) => (
                <DraggableCard key={card.id} card={card} index={index}>
                  <Card
                    cardNumber={card.cardNumber}
                    cardExpiration={card.cardExpiration}
                    cardOwner={card.cardOwner}
                    cardName={card.cardName}
                    cardColor={card.cardColor}
                    isSmall={true}
                  />
                  <Styled.CardNickname>{card.cardNickname}</Styled.CardNickname>
                </DraggableCard>
              ))}
              {provided.placeholder}
            </div>
          )}
        </DroppableArea>
        <S.PointerBox>
          <AnotherCard onClick={onClickPrev} />
        </S.PointerBox>
      </S.CardAlignBox>
    </S.Container>
  );
}

export default CardList;

const Styled = {
  EnrolledCardWrapper: styled.div`
    text-align: center;
    margin-bottom: 25px;
  `,

  CardNickname: styled.span`
    font-size: 19px;
  `,
};
