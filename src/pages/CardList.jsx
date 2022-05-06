import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import * as S from 'styles.js';
import PageTitle from 'components/PageTitle';
import AnotherCard from 'components/AnotherCard';
import DraggableCard from 'components/DraggableCard';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';

function CardList() {
  const navigate = useNavigate();
  const { cards } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);

  const onDragEnd = ({ destination, source }) => {
    if (!destination) return;

    const cardListCopy = [...cards];
    cardListCopy.splice(source.index, 1);
    cardListCopy.splice(destination?.index, 0, cards[source.index]);

    dispatch({ type: TYPES.SET_CARD_ORDER, cards: cardListCopy });
  };

  const onClickPrev = () => {
    navigate('/add-card');
  };
  return (
    <S.Container>
      <PageTitle hasPrevButton={false}>보유 카드</PageTitle>

      <S.CardAlignBox>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div>
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {cards.map((card, index) => (
                    <DraggableCard key={card.id} card={card} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <S.PointerBox>
          <AnotherCard onClick={onClickPrev} />
        </S.PointerBox>
      </S.CardAlignBox>
    </S.Container>
  );
}

export default CardList;
