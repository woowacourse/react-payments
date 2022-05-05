import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import * as S from 'styles.js';
import Card from './Card';

function DraggableCard({ card, index }) {
  return (
    <Draggable key={card.id} draggableId={card.id} index={index}>
      {(provided) => (
        <S.EnrolledCardWrapper
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Card
            cardNumber={card.cardNumber}
            cardExpiration={card.cardExpiration}
            cardOwner={card.cardOwner}
            cardName={card.cardName}
            cardColor={card.cardColor}
            isSmall={true}
          />
          <S.CardNickname>{card.cardNickname}</S.CardNickname>
        </S.EnrolledCardWrapper>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
