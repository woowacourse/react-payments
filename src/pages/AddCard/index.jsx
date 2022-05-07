import { CardFormProvider } from '../../context/card-form-context';
import { useState } from 'react';
import AddCardForm from '../../components/AddCardForm';
import Modal from '../../components/Modal';
import Palette from '../../components/Palette';
import Header from '../../components/Header';
import FallbackButton from '../../components/FallbackButton';

const AddCard = () => {
  const [isModalOpened, setModalStatus] = useState(false);

  const openModal = () => {
    setModalStatus(true);
  };

  const closeModal = () => {
    setModalStatus(false);
  };
  return (
    <CardFormProvider>
      <>
        <Header>
          <>
            <FallbackButton />
            <p>카드추가</p>
          </>
        </Header>
        <AddCardForm openModal={openModal} />
        <Modal isModalOpened={isModalOpened} closeModal={closeModal}>
          <Palette closeModal={closeModal} />
        </Modal>
      </>
    </CardFormProvider>
  );
};

export default AddCard;
