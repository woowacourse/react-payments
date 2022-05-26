import { Dispatch, PropsWithChildren } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { TYPES } from 'store/card/types';

interface Action {
  type: typeof TYPES['SET_CARD_ORDER'];
  cards: object[];
}

interface Props {
  cards: object[];
  dispatch: Dispatch<Action>;
  type: typeof TYPES['SET_CARD_ORDER'];
}

export default function DroppableArea({
  children,
  cards,
  dispatch,
  type,
}: PropsWithChildren<Props>) {
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
