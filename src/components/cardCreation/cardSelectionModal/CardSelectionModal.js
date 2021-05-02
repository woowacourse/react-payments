import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CARD } from '../../../constants/card';
import CardDataContext from '../../../context/CardDataContext';
import { MODAL_TYPE } from '../../../hooks/useBottomModal';
import { Circle, CIRCLE_SIZE } from '../../commons/circle/Circle';
import Styled from './CardSelectionModal.style';

const CardSelectionModal = ({ BottomModal, closeModal }) => {
  const { setCardInfo } = useContext(CardDataContext);

  const handleItemClick = card => {
    setCardInfo(prevState => ({ ...prevState, selectedCardInfo: card }));
    closeModal(MODAL_TYPE.CARD_SELECTION);
  };

  return (
    <BottomModal>
      <Styled.List>
        {Object.values(CARD).map(card => (
          <Styled.ListItem key={card.cardId} onClick={() => handleItemClick(card)}>
            <Circle size={CIRCLE_SIZE.LG} styles={{ backgroundColor: card.color }} />
            <Styled.CardName>{card.name}</Styled.CardName>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </BottomModal>
  );
};

CardSelectionModal.propTypes = {
  BottomModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CardSelectionModal;
