import { useContext } from 'react';
import * as Styled from './style.js';
import { CardItem } from './CardItem';
import { CardButton } from '../../../Button/CardButton';
import { Modal } from '../../../Modal';
import { PaymentContext } from '../../../../contexts/PaymentContextProvider';
import { useModal } from '../../../../hooks/useModal.js';
import { CardManager } from '../../../Modal/ModalBody/CardManager/index.js';

/**
 * Primary UI component for user interaction
 */

export const CardList = () => {
  const { cards, setCurrentPage, setCardId, deleteCard } = useContext(PaymentContext);
  const { isModalOpened, openModal, closeModal } = useModal();

  const handleSelectCard = (id) => {
    setCardId(id);
    openModal();
  };

  const handleDeleteCard = (id) => {
    deleteCard();
    closeModal();
  };

  const handleUpdateCard = (id) => {
    setCurrentPage('cardRegistered');
  };

  const handleModalClose = () => {
    setCardId(null);
    closeModal();
  };

  return (
    <>
      <Styled.Container>
        <Styled.CardListContainer>
          {Object.keys(cards).map((key) => (
            <CardItem key={key} card={cards[key]} onClick={() => handleSelectCard(key)} />
          ))}
        </Styled.CardListContainer>
        <Styled.CardAddButtonContainer>
          <CardButton
            onClick={() => {
              setCurrentPage('cardRegister');
            }}
          />
        </Styled.CardAddButtonContainer>
      </Styled.Container>
      {isModalOpened && (
        <Modal handleModalClose={handleModalClose}>
          <CardManager handleDeleteCard={handleDeleteCard} handleUpdateCard={handleUpdateCard} />
        </Modal>
      )}
    </>
  );
};
