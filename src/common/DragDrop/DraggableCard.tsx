import { PropsWithChildren } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { CardData } from 'types/cardInfo';

interface Props {
  card: CardData;
  index: number;
}

export default function DraggableCard({ children, card, index }: PropsWithChildren<Props>) {
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

const Styled = {
  EnrolledCardWrapper: styled.div`
    text-align: center;
    margin-bottom: 25px;
    position: relative;
    &:hover {
      transform: scale(1.02);
      transition: all 0.5s;
    }
  `,
};
