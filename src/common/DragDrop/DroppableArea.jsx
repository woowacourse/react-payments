import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';

export default function DroppableArea({ children, cards, dispatch, type }) {
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
