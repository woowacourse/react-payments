import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

export default function DraggableCard({ children, card, index }) {
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
  `,
};
