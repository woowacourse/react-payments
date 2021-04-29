import PropTypes from 'prop-types';
import { CARD } from '../../../constants/card';
import { MODAL_TYPE } from '../../../hooks/useBottomModal';
import { Circle, CIRCLE_SIZE } from '../../commons/circle/Circle';
import Styled from './CardSelectionModal.style';

const CardSelectionModal = ({ BottomModal, closeModal, setSelectedCardInfo }) => {
  const handleItemClick = card => {
    setSelectedCardInfo(card);
    closeModal(MODAL_TYPE.CARD_SELECTION);
  };

  return (
    <BottomModal>
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

CardSelectionModal.propTypes = {
  setSelectedCardInfo: PropTypes.func.isRequired,
};

export default CardSelectionModal;
