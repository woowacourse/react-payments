// import Card from 'components/Card';
import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

export function DraggableCard({ children, card, index }) {
  return (
    <Draggable key={card.id} draggableId={card.id} index={index}>
      {(provided) => (
        <Styled.EnrolledCardWrapper
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {children}
        </Styled.EnrolledCardWrapper>
      )}
    </Draggable>
  );
}

export function DroppableArea({ children, cards, dispatch, type }) {
  const onDragEnd = ({ destination, source }) => {
    if (!destination) return;

    const cardListCopy = [...cards];
    cardListCopy.splice(source.index, 1);
    cardListCopy.splice(destination?.index, 0, cards[source.index]);

    dispatch({ type, cards: cardListCopy });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">{children}</Droppable>
    </DragDropContext>
  );
}

const Styled = {
  EnrolledCardWrapper: styled.div`
    text-align: center;
    margin-bottom: 25px;
  `,
};
