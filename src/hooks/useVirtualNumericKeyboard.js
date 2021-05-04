import VirtualNumericKeyboardComponent from '../components/VirtualNumericKeyboard/VirtualNumericKeyboard';
import useModal from './useModal';

export default (defaultValue, appendValue, popValue) => {
  const { isModalOpened, Modal, openModal, closeModal } = useModal(defaultValue);

  const onClickNumberButton = ({ target }) => {
    appendValue(target.textContent);
  };

  const onClickDeleteButton = () => {
    popValue();
  };

  const VirtualNumericKeyboard = () => {
    if (!isModalOpened) return null;
    return (
      <Modal mobile onClose={closeModal}>
        <VirtualNumericKeyboardComponent
          onClickNumberButton={onClickNumberButton}
          onClickDeleteButton={onClickDeleteButton}
        />
      </Modal>
    );
  };

  return { isModalOpened, openModal, closeModal, VirtualNumericKeyboard };
};
