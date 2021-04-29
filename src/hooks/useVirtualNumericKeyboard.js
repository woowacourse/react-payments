import PropTypes from 'prop-types';
import VirtualNumericKeyboardComponent from '../components/VirtualNumericKeyboard/VirtualNumericKeyboard';
import useModal from './useModal';

export default (defaultValue) => {
  const { isModalOpened, Modal, openModal, closeModal } = useModal(defaultValue);

  const VirtualNumericKeyboard = ({ onClick }) => {
    if (!isModalOpened) return null;
    return (
      <Modal mobile onClose={closeModal}>
        <VirtualNumericKeyboardComponent onClick={onClick} />
      </Modal>
    );
  };

  VirtualNumericKeyboard.propTypes = {
    onClick: PropTypes.func,
  };

  VirtualNumericKeyboard.defaultProps = {
    onClick: () => {},
  };

  return { isModalOpened, openModal, closeModal, VirtualNumericKeyboard };
};
