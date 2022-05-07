import { CardFormProvider } from '../../context/card-form-context';
import { useState } from 'react';
import AddCardForm from '../../components/AddCardForm';
import Modal from '../../components/Modal';
import Palette from '../../components/Palette';

const AddCardPage = () => {
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
        <AddCardForm openModal={openModal} />
        <Modal isModalOpened={isModalOpened} closeModal={closeModal}>
          <Palette closeModal={closeModal} />
        </Modal>
      </>
    </CardFormProvider>
  );
};

export default AddCardPage;
