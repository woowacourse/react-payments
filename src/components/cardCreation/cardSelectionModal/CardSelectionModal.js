import { CARD } from '../../../constants/card';
import { Circle, CIRCLE_SIZE } from '../../commons/circle/Circle';
import { BottomModal } from '../../commons/modal/BottomModal';
import Styled from './CardSelectionModal.style';

const CardSelectionModal = ({ closeModal, setSelectedCardInfo }) => {
  const handleItemClick = card => {
    setSelectedCardInfo(card);
    closeModal();
  };

  return (
    <BottomModal closeModal={closeModal}>
      <Styled.List>
        {Object.values(CARD).map(card => (
          <Styled.ListItem key={card.id} onClick={() => handleItemClick(card)}>
            <Circle size={CIRCLE_SIZE.LG} styles={{ backgroundColor: card.color }} />
            <Styled.CardName>{card.name}</Styled.CardName>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </BottomModal>
  );
};

export default CardSelectionModal;
